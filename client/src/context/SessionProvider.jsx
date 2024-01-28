import { createContext, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

const SessionContext = createContext();

// Helper function to handle fetch operations
const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};

const SessionProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [recruiterId, setRecruiterId] = useState(null);
  const [jobSeekerId, setJobSeekerId] = useState(null);
  const [selfEmployedId, setSelfEmployedId] = useState(null);

  const logout = async ({ type }) => {
    try {
      const data = await fetchData(
        `http://localhost/MySamvedna/api/controllers/${type}Logout.php`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (data.success) {
        setIsLoggedIn(false);
        setRecruiterId(null);
        setJobSeekerId(null);
        setSelfEmployedId(null);
        Cookies.remove("isLoggedIn");
        Cookies.remove("recruiterId");
        Cookies.remove("jobSeekerId");
        Cookies.remove("selfEmployedId");
        return data.success;
      } else {
        console.log(data.message);
        return false;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const checkLogin = async () => {
    try {
      const data = await fetchData(
        "http://localhost/MySamvedna/api/utils/checkLogin.php",
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (data.success) {
        setIsLoggedIn(true);
        setRecruiterId(data.recruiterId);
        setJobSeekerId(data.jobSeekerId);
        setSelfEmployedId(data.selfEmployedId);
      } else {
        setIsLoggedIn(false);
        setRecruiterId(null);
        setJobSeekerId(null);
        setSelfEmployedId(null);
      }
      setIsLoading(false); // Set isLoading to false after checkLogin has completed
    } catch (error) {
      console.error(error);
      setIsLoading(false); // Also set isLoading to false in case of error
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <SessionContext.Provider
      value={{
        isLoading, // Add isLoading to context
        isLoggedIn,
        setIsLoggedIn,
        recruiterId,
        setRecruiterId,
        jobSeekerId,
        setJobSeekerId,
        selfEmployedId,
        setSelfEmployedId,
        logout,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

SessionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const SessionState = () => {
  return useContext(SessionContext);
};

export default SessionProvider;

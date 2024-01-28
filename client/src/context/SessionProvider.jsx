import { createContext, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

const SessionContext = createContext();

const SessionProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const savedIsLoggedIn = localStorage.getItem("isLoggedIn");
    return savedIsLoggedIn ? JSON.parse(savedIsLoggedIn) : false;
  });
  const [recruiterId, setRecruiterId] = useState(() => {
    const savedRecruiterId = localStorage.getItem("recruiterId");
    return savedRecruiterId ? JSON.parse(savedRecruiterId) : null;
  });
  const [jobSeekerId, setJobSeekerId] = useState(() => {
    const savedJobSeekerId = localStorage.getItem("jobSeekerId");
    return savedJobSeekerId ? JSON.parse(savedJobSeekerId) : null;
  });
  const [selfEmployedId, setSelfEmployedId] = useState(() => {
    const savedSelfEmployedId = localStorage.getItem("selfEmployedId");
    return savedSelfEmployedId ? JSON.parse(savedSelfEmployedId) : null;
  });

  const logout = async ({ type }) => {
    try {
      const response = await fetch(
        `http://localhost/MySamvedna/api/controllers/${type}Logout.php`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setIsLoggedIn(false);
        setRecruiterId(null);
        setJobSeekerId(null);
        setSelfEmployedId(null);
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("recruiterId");
        localStorage.removeItem("jobSeekerId");
        localStorage.removeItem("selfEmployedId");
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
    const response = await fetch(
      "http://localhost/MySamvedna/api/controllers/checkLogin.php",
      {
        method: "GET",
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.success) {
      setIsLoggedIn(true);
      setRecruiterId(data.recruiterId);
      setJobSeekerId(data.jobSeekerId);
      setSelfEmployedId(data.selfEmployedId);
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("recruiterId", data.recruiterId);
      localStorage.setItem("jobSeekerId", data.jobSeekerId);
      localStorage.setItem("selfEmployedId", data.selfEmployedId);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <SessionContext.Provider
      value={{
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

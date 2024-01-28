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

  const logout = () => {
    setIsLoggedIn(false);
    setRecruiterId(null);
    setJobSeekerId(null);
    setSelfEmployedId(null);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("recruiterId");
    localStorage.removeItem("jobSeekerId");
    localStorage.removeItem("selfEmployedId");
  };

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    localStorage.setItem("recruiterId", JSON.stringify(recruiterId));
    localStorage.setItem("jobSeekerId", JSON.stringify(jobSeekerId));
    localStorage.setItem("selfEmployedId", JSON.stringify(selfEmployedId));

    const timeoutId = setTimeout(() => {
      localStorage.clear();
      logout();
    }, 24 * 60 * 1000)

    return () => clearTimeout(timeoutId);
  }, [isLoggedIn, recruiterId, jobSeekerId, selfEmployedId]);

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

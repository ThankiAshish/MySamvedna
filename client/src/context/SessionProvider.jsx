import { useState, createContext } from "react";
import PropTypes from 'prop-types';

export const SessionContext = createContext();

const SessionProvider = ({ children }) => {
    const [session, setSession] = useState({
        isLoggedIn: false,
        token: ""
    });
    
    return (
        <SessionContext.Provider value={[session, setSession]}>
        {children}
        </SessionContext.Provider>
    );
}

SessionProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SessionProvider;
import { createContext, useState } from "react";


const UserContext = createContext();


const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [passwords, setPasswords] = useState(null);

    function login(user, token) {
        setUser(user);
        setToken(token);

        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", JSON.stringify(token));


    }

    function logout() {
        setUser(null);
        setToken(null);

        localStorage.removeItem("user");
        localStorage.removeItem("token");
    }

    function getUser() {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        setUser(JSON.parse(user));
        setToken(JSON.parse(token));
    }

    const values = {
        user,
        token,
        login,
        logout,
        getUser,
        passwords,
        setPasswords
    };

    return <UserContext.Provider value={values}>{children}</UserContext.Provider>;

};

export { UserContext, UserProvider };


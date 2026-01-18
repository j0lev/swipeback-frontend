import {  createContext, useState } from "react";


export const AuthenticationContext = createContext();

export const UserProvider = ({children})=>{
    const [user, setUser] = useState({});
    let value = {user, setUser};

    return <AuthenticationContext.Provider value={value}>{children}</AuthenticationContext.Provider>

}
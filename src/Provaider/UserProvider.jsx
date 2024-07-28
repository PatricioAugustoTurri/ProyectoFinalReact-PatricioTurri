import { createContext, useState } from "react";

export const userContext = createContext ()
const Provider = userContext.Provider

function UserProvider (props){
    const [user , setUser] = useState ([
        {nombre: "" , email: ""}
    ])
    
    const usuarios = {
        setUser: (a , b) => setUser (user.concat({nombre: a , email: b})),
    }
    return (
        <Provider value={usuarios}>
            {props.children}
        </Provider>
    )
}

export default UserProvider ;
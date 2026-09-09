import { useState } from "react"
import { UserContext } from "./UserContext"
import { getUserFromToken } from "../helpers/getTokenHelper"

export default function UserProvider({ children }) {

    const [user, setUser] = useState(getUserFromToken())
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )


}
import { createContext } from "react"

const UserInfo = createContext({
    user: {
        name: "Gokul",
        email: "jgokul290896@gmail.com"
    }
});

export default UserInfo;


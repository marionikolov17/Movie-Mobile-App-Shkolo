import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function useAuthenticate(navigation) {
    const user = useSelector((state) => state.user)

    useEffect(() => {
        console.log("Authenticated", user.isAuthenticated)
        if (!user.isAuthenticated) {
            return navigation.navigate("Login")
        }
        return navigation.navigate("Home")
    }, [])
}
import { useEffect } from "react";

export default function useAuthenticate(navigation) {
    const isLoggedIn = false;

    useEffect(() => {
        if (!isLoggedIn) {
            return navigation.navigate("Login")
        }
        return navigation.navigate("Home")
    })
}
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../../features/layout/components/AppHeader/AppHeader";

export default function MovieDetails() {
    return (
        <>
            <SafeAreaView>
                <AppHeader />
            </SafeAreaView>
        </>
    )
}
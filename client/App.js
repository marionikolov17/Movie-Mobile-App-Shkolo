import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex w-full h-full items-center justify-center">
      <Text className="text-red-500 text-3xl">Test.</Text>
      <StatusBar style="auto" />
    </View>
  );
}


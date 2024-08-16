import { Stack } from "expo-router";
import { View } from "react-native";

import { ThemedText } from "@/components/ThemedText";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="mx-auto max-w-5xl px-4 py-8 text-white">
        <ThemedText type="title" className="text-white">
          This screen doesn't exist.
        </ThemedText>
      </View>
    </>
  );
}

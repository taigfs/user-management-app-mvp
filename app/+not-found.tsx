import { Stack } from "expo-router";
import { View } from "react-native";

import { Text } from "@/components/atoms/text";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="mx-auto max-w-5xl px-4 py-8 text-white">
        <Text className="text-white">This screen doesn't exist.</Text>
      </View>
    </>
  );
}

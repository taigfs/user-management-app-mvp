import { ActivityIndicator } from "react-native";

interface LoadingProps {
  color?: string;
}

export const Loading = ({ color }: LoadingProps) => {
  return <ActivityIndicator size={12} color={color || "#000000"} />;
};

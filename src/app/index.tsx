import { Pressable, Text, View } from "react-native";
import "../global.css";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Pressable className="group">
        <Text className="group-disabled:text-red-500">Hello World</Text>
      </Pressable>
    </View>
  );
}

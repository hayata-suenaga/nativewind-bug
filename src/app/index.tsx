import { FlatList, Pressable, Text, View } from "react-native";
import "../global.css";
import "./init";

export default function HomeScreen() {
  return (
    <View className="flex-1 mt-12">
      <Pressable className="group">
        <Text className="group-disabled:text-red-500">Hello World</Text>
      </Pressable>

      <FlatList
        data={Array.from({ length: 10 }).map((_, index) => index)}
        renderItem={({ item }) => <Text>{item as number}</Text>}
        className="border border-border bg-red-500 mt-12"
      />
    </View>
  );
}

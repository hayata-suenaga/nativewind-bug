import { Link } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";
import "../global.css";
import "../init";

export default function HomeScreen() {
  return (
    <View className="flex-1">
      <Pressable className="group">
        <Text className="group-disabled:text-red-500">Hello World</Text>
      </Pressable>

      <Link href="/second-screen" className="mt-4  mb-12">
        Open FlatList Example
      </Link>

      <FlatList
        data={Array.from({ length: 10 }).map((_, index) => index)}
        renderItem={({ item }) => <Text>{item as number}</Text>}
        contentContainerClassName="bg-green-500"
      />
    </View>
  );
}

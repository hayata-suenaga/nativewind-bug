import { FlatList, Text, View } from "react-native";

export default function Screen() {
  return (
    <View className="flex-1">
      <FlatList
        data={Array.from({ length: 10 }).map((_, index) => index)}
        renderItem={({ item }) => <Text>{item as number}</Text>}
        contentContainerClassName="bg-red-500"
      />
      <Text>Hello World</Text>
    </View>
  );
}

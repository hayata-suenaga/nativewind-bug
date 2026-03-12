import { FlatList, Text, View } from "react-native";

export default function Screen() {
  <View className="flex-1">
    <FlatList
      data={Array.from({ length: 10 }).map((_, index) => index)}
      renderItem={({ item }) => <Text>{item as number}</Text>}
      className="border border-border bg-red-500 mt-12"
    />
  </View>;
}

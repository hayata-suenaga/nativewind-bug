import { Image } from "expo-image";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
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

      <Image
        source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s"
        className="w-32 h-32"
      />
    </View>
  );
}

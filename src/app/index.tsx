import { Image } from "expo-image";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1">
      {/* Bug 2: group-disabled: (and likely other group attribute variants) is
          always applied regardless of whether the parent actually has
          disabled={true}. The text below renders red even though the Pressable
          has no disabled prop. */}
      <Pressable className="group">
        <Text className="group-disabled:text-red-500">Hello World</Text>
      </Pressable>

      <Link href="/second-screen" className="mt-4  mb-12">
        Open the second screen to compare the working case, where Expo Image is
        wrapped with the return value of styled(), against this screen, which
        relies on the documented global registration behavior.
      </Link>

      {/* Failing case: this direct expo-image import should accept className
          because Image is registered in init.ts via styled(Image, ...). */}
      <Image
        source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s"
        className="w-32 h-32"
      />
    </View>
  );
}

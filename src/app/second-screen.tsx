import { Image as ExpoImage } from "expo-image";
import { styled } from "nativewind";
import { View } from "react-native";

const Image = styled(ExpoImage, {
  className: "style",
});

export default function Screen() {
  return (
    <View className="flex-1 justify-center items-center">
      {/* Working comparison case: className works when using the component
          returned directly by styled(). */}
      <Image
        source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s"
        className="w-32 h-32"
      />
    </View>
  );
}

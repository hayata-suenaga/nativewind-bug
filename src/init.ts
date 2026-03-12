import { Image } from "expo-image";
import { styled } from "nativewind";
import { FlatList } from "react-native";

// This follows the NativeWind v5 migration guide: registering Expo Image here
// should make `className` work for `Image` usages imported elsewhere.
styled(Image, {
  className: "style",
});

// @ts-expect-error - styled(FlatList) produces a union type too complex to represent
styled(FlatList, {
  className: "style",
  contentContainerClassName: "contentContainerStyle",
});

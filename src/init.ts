import { Image } from "expo-image";
import { styled } from "nativewind";
import { FlatList } from "react-native";

// Bug 1: This follows the NativeWind v5 migration guide: registering Expo Image
// here should make `className` work for `Image` usages imported elsewhere.
styled(Image, {
  className: "style",
});

// Bug 3: styled(FlatList) causes TS2590, see README.
// @ts-expect-error TS2590: styled(FlatList) produces a union type too complex to represent
styled(FlatList, {
  className: "style",
  contentContainerClassName: "contentContainerStyle",
});

import { Image } from "expo-image";
import { styled } from "nativewind";
import { FlatList } from "react-native";

// Bug 1: This follows the NativeWind v5 migration guide: registering Expo Image
// here should make `className` work for `Image` usages imported elsewhere.
styled(Image, {
  className: "style",
});

// Bug 3: Calling styled() with FlatList (and any generic list component with a
// similar type signature, such as FlashList from @shopify/flash-list) causes
// TypeScript error TS2590: "Expression produces a union type that is too complex
// to represent." FlatList's generic item type creates a deeply nested union when
// styled() tries to infer the return type, exceeding TypeScript's internal
// representation limit.
// @ts-expect-error TS2590: styled(FlatList) produces a union type too complex to represent
styled(FlatList, {
  className: "style",
  contentContainerClassName: "contentContainerStyle",
});

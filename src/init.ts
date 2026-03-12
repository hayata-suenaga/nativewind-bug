import { Image } from "expo-image";
import { styled } from "nativewind";
import { FlatList } from "react-native";

styled(Image, {
  className: "style",
});

// @ts-expect-error - styled(FlatList) produces a union type too complex to represent
styled(FlatList, {
  className: "style",
  contentContainerClassName: "contentContainerStyle",
});

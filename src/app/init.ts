import { styled } from "nativewind";
import { FlatList } from "react-native";

// @ts-expect-error - styled(FlatList) produces a union type too complex to represent
styled(FlatList, {
  className: "style",
  contentContainerClassName: "contentContainerStyle",
});

# NativeWind v5 Bug Reproductions

This repository contains minimal reproducible examples for three bugs related
to the new version of NativeWind.

## Bug 1: `styled()` global registration does not make `className` available everywhere

### Expected behavior

Based on the [NativeWind v5 migration guide](https://www.nativewind.dev/v5/guides/migrate-from-v4#cssinterop--remapprops--replaced-by-styled),
calling `styled(Component, config)` should globally register that component so
later usages of the same component can receive `className` without needing to
use the returned wrapper component in every file.

### Actual behavior

`expo-image` is one example of a third-party component that does not pass the
`className` prop down to the underlying primitive React Native component, so it
is used here to demonstrate the bug. However, this bug is reproducible when
using `styled()` with any third-party components.
`expo-image`'s `Image` is passed to `styled()` in `src/init.ts`. That init file
is imported in the root layout so it runs when the app starts. This should make
`Image` component imported from `expo-image` work with the `className` prop
everywhere in the app. However, as the `Image` usage in `src/app/index.tsx`
demonstrates, this is not the case. `src/app/second-screen.tsx` demonstrates
that using the component returned directly by `styled()` does work.

### Reproduction points

- `src/init.ts`: registers `expo-image`'s `Image` with `styled(Image, { className: "style" })`.
- `src/app/index.tsx`: failing case using the direct `Image` import with `className`.
- `src/app/second-screen.tsx`: working comparison case using the component returned by `styled()`.

## Bug 2: `group-disabled:` (and likely other group attribute variants) is always applied

### Expected behavior

A `group-disabled:` variant should only apply its styles when the parent
component that carries the `group` class actually has `disabled={true}`.

### Actual behavior

`group-disabled:` styles are applied unconditionally regardless of
the parent component's `disabled` prop. In the example below, the text renders
red even though the `Pressable` has no `disabled` prop:

```tsx
<Pressable className="group">
  <Text className="group-disabled:text-red-500">Hello World</Text>
</Pressable>
```

### Reproduction points

- `src/app/index.tsx`: the `Pressable`/`Text` pair at the top of the screen demonstrates the bug.

## Bug 3: `styled()` with generic list components causes TS2590 "union type too complex to represent"

### Expected behavior

Calling `styled(FlatList, { className: "style", contentContainerClassName: "contentContainerStyle" })`
should work without TypeScript errors.

### Actual behavior

TypeScript emits **TS2590: Expression produces a union type that is too complex
to represent** on the `styled(FlatList, ...)` call. `FlatList` is a generic
component (`FlatList<ItemT>`), and when `styled()` attempts to infer the return
type it constructs a deeply nested union that exceeds TypeScript's internal
representation limit. A `@ts-expect-error` suppression is required to work
around it.

This affects any generic list component with a similar type signature, including
[`FlashList`](https://shopify.github.io/flash-list/) from `@shopify/flash-list`.

### Reproduction points

- `src/init.ts`: the `styled(FlatList, ...)` call with the `@ts-expect-error` suppression demonstrates the error.

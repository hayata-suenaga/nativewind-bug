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

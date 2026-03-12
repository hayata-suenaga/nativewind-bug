# NativeWind v5 Bug Reproductions

This repository contains minimal reproducible examples for three bugs related
to the new version of NativeWind.

## Bug 1: `styled()` global registration does not make `className` available everywhere

### Expected behavior

Based on the NativeWind v5 migration guide, calling `styled(Component, config)`
should globally register that component so later usages of the same component
can receive `className` without needing to use the returned wrapper component in
every file.

### Actual behavior

`expo-image` is one example of a third-party component that doesn't pass down className prop to a primitive React Native component used, and it's used to demonstrate the bug. However, this bug is reproducible when using `styled()` with any third-party components.
`expo-image`'s `Image` is passed to `styled()` in `src/init.ts` (this init file is imported in the root layout file to be executed at app start). This should make any `Image` component imported from `expo-image` work with the `className` prop everywhere in the app. However, as the usage of `Image` component in `src/app/index.tsx` demonstrates, this is not the case. `src/app/second-screen.tsx` demonstrates that using the component returned directly by `styled()` works.

### Reproduction points

- `src/init.ts`: registers `expo-image`'s `Image` with `styled(Image, { className: "style" })`.
- `src/app/index.tsx`: failing case using the direct `Image` import with `className`.
- `src/app/second-screen.tsx`: working comparison case using the component returned by `styled()`.

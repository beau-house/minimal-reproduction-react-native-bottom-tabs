## Minimal Reproduction – [ios] Tab bar background flashes when scrollEdgeAppearance transparent (without lazy loading)

### What is this?

This is a minimal example of a possible issue when using [react-native-bottom-tabs](https://github.com/okwasniewski/react-native-bottom-tabs) with React Navigation on iOS.

### Description

The tab bar background briefly flashes when using `scrollEdgeAppearance="transparent"` with `lazy={false}` in two scenarios:

1. When content on a screen reaches the tab bar edge (triggering scrollEdgeAppearance), the background flashes before assuming the `barTintColor`

2. When navigating from a screen with content below the tab bar to a screen without content below the tab bar

https://github.com/user-attachments/assets/395eb628-2faf-47a0-8cbd-69974de11098

### Steps to Reproduce

Clone and build [this minimal reproduction](https://github.com/beau-house/minimal-reproduction-react-native-bottom-tabs). The issue easiest to see when running the device or simulator with its appearance set to dark mode.

1. Navigate to Screen One that has content which can extend below the tab bar

2. Scroll content up and down to trigger scrollEdgeAppearance - observe tab bar background flash

3. Navigate to Screen Two which has minimal content - observe tab bar background flash again

### Expected Behavior

- The tab bar background should transition smoothly from transparent to its color without flashing.

### Actual Behavior

The tab bar background briefly flashes when:

- Content is scrolled to bottom, triggering scrollEdgeAppearance
- Navigating between screens with different content lengths

### Environment

expo 52.0.11

react-native 0.76.3

react-native-bottom-tabs 0.6.0

Simulator and physical device (iOS 18.1.1 and iPhone 16 pro)

const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const withStorybook = require('@storybook/react-native/metro/withStorybook'); 

const config = getDefaultConfig(__dirname, {
  isCSSEnabled: true,
});

module.exports = withNativeWind(withStorybook(config), {
  input: "./global.css",
  inlineRem: 16,
});
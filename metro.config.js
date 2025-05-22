// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

const getConfig = async () => {
  const {
    resolver: { sourceExts, assetExts, resolveRequest },
  } = config;

  config.resolver = {
    ...config.resolver,
    resolveRequest: (context, moduleName, platform) => {
      // Check if this is the problematic import

      // fix bugsnag-react
      if (moduleName === './lib/fingerprint.js') {
        // return context.resolveRequest(context, './lib/fingerprint.react-native.js', platform);
      }
      // For all other modules, use the default resolution
      return context.resolveRequest(context, moduleName, platform);
    },
  };

  return config;
};

module.exports = getConfig();

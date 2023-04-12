module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          envName: "REACT_APP_TRANSLATE_URL",
          moduleName: "@env",
          path: ".env",
        },
      ],
    ],
  };
};

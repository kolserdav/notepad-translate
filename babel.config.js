module.exports = (api) => {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          allowList: ["REACT_APP_TRANSLATE_URL"],
          moduleName: "@env",
          path: ".env",
        },
      ],
    ],
  };
};

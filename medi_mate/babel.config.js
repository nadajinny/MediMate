// babel.config.js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin', // 👈 반드시 마지막에 위치해야 합니다!
  ],
};

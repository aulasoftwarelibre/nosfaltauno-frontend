module.exports = {
  stories: ["../components/**/*.stories.tsx"],
  addons: [
    "@storybook/preset-typescript",
    "@storybook/addon-links",
    "@storybook/addon-knobs",
    "@storybook/addon-actions",
    "@storybook/addon-viewport/register",
  ],
};

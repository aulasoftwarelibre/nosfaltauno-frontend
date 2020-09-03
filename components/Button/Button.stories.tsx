import React from "react";
import MaterialButton, { Props } from "./Button";
import { Story } from "@storybook/react/types-6-0";

export default {
  title: "Components/MaterialButton",
  component: MaterialButton,
};

const Template: Story<Props> = (args: Props) => <MaterialButton {...args} />;

export const Default = Template.bind({});
Default.args = { label: "Material Button" };

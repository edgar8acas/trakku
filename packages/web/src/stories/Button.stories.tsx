import * as React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Button, ButtonProps } from "../components/Controls/Button";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

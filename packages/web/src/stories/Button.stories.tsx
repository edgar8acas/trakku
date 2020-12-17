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

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Link = Template.bind({});
Link.args = {
  label: "Button",
  isLink: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Button",
  disabled: true,
};

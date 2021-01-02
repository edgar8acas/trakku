import * as React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { BacklogBoard } from "../components/Backlog/BacklogBoard";

export default {
  title: "BacklogBoard",
  component: BacklogBoard,
} as Meta;

const Template: Story = (args) => <BacklogBoard {...args} />;

export const Basic = Template.bind({});

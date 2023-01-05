import React from "react";
import { Story, Meta } from "@storybook/react";
import { ButtonBlue } from ".";

export default {
  title: "Button",
  component: ButtonBlue,
} as Meta;

const ButtonBlueStory: Story<{}> = (args: any) => <ButtonBlue {...args} />;

export const PrimaryBlue = ButtonBlueStory.bind({});
PrimaryBlue.args = { message: "otroBlue" };

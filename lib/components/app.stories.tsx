import React from "react";
import { Story, Meta } from "@storybook/react";
import { App as AppChat } from "./App";

export default {
  title: "AppChat",
  component: AppChat,
} as Meta;

const AppChatStory: Story<{}> = (args: any) => <AppChat {...args} />;

export const Primary1 = AppChatStory.bind({});
Primary1.args = { message: "otro", onClick: () => { alert("algo") } };

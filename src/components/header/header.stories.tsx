import {ComponentMeta, ComponentStory} from "@storybook/react";
import Header from "./header";

export default{
    title:"components/header",
    component:Header
}as ComponentMeta<typeof Header>

const Template:ComponentStory<typeof Header> = (args) => <Header {...args} />
export const Primary = Template.bind({});
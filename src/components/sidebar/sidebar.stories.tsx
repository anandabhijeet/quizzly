import { ComponentMeta, ComponentStory } from "@storybook/react";
import Sidebar from "./sidebar";

export default {
    title:"components/sidebar",
    component:Sidebar
}as ComponentMeta<typeof Sidebar>

const Template:ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args}/>

export const Primary = Template.bind({})
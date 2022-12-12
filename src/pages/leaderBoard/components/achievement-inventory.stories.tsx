import { ComponentMeta, ComponentStory } from "@storybook/react";
import AchievementInventory from "./achievement-inventory";

export default {
    tittle:"pages/components/AchievementInventory",
    component:AchievementInventory
} as ComponentMeta<typeof AchievementInventory>

const Template : ComponentStory<typeof AchievementInventory> = (args) => <AchievementInventory {...args} />
export const Primary = Template.bind({})
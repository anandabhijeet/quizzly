import { ComponentMeta, ComponentStory } from "@storybook/react";
import LeaderBoard from "./index";

export default {
    title:"Pages/leaderboard",
    component:LeaderBoard
}as ComponentMeta<typeof LeaderBoard>

const Template:ComponentStory<typeof LeaderBoard> = (args) => <LeaderBoard {...args} />
export const Primary = Template.bind({});
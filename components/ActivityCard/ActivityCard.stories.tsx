import ActivityCard, { Props } from "./ActivityCard";
import { Activity } from "../../model/activity/activity";
import { Story } from "@storybook/react/types-6-0";
import faker from "faker";

export default {
  title: "Components/ActivityCard",
  component: ActivityCard,
};

const todayDate = Date.now();

const activity: Activity = {
  id: faker.random.uuid(),
  title: "Activity title",
  description: faker.lorem.paragraphs(),
  date: new Date(todayDate),
  category: "Deportes",
  organizer: { name: faker.name.firstName() },
};

const Template: Story<Props> = (args: Props) => <ActivityCard {...args} />;

export const Default = Template.bind({});
Default.args = { activity };

export const ActivityWithProfileImage = Template.bind({});
ActivityWithProfileImage.args = {
  activity: {
    ...activity,
    organizer: { name: faker.name.firstName(), image: faker.image.avatar() },
  },
};

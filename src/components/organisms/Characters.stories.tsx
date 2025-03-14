import { Meta, StoryObj } from "@storybook/react";
import { Characters } from "./Characters";

export default {
  component: Characters,
} satisfies Meta<typeof Characters>;

type Story = StoryObj<typeof Characters>;

export const Default: Story = {};

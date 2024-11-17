import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "@/components/ui/button";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: [
        "primary",
        "primary-outline",
        "primary-2lg-outline",
        "secondary",
        "destructive",
        "outline",
        "ghost",
        "link",
        "default",
      ],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["2lg", "sm", "lg", "xl", "icon", "default"],
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const AllButtonTypes: Story = {
  args: {
    children: "I am a Button",
    variant: "primary",
    size: "default",
    disabled: false,
  },
  render: (args) => <Button {...args} />,
};

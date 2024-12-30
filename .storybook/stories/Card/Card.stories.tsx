import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta = {
  title: 'Card',
  component: Card,
  argTypes: {
    onPress: { action: 'pressed the card' },
  },
  args: {
    title: 'Amazing Landscape',
    description: 'A beautiful landscape with rolling hills and a clear sky.',
    image: 'https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16, alignItems: 'flex-start' }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLongText: Story = {
  args: {
    title: 'A Very Long Title That Might Wrap Around Multiple Lines',
    description: 'This description is much longer than the default one, so it should wrap properly and show how the layout behaves with more content.',
  },
};

export const WithCustomImage: Story = {
  args: {
    title: 'New Horizon',
    description: 'A stunning view of the ocean at dawn.',
    image: 'https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Custom blue image for variation
  },
};

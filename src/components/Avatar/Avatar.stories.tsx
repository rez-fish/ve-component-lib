import { Meta, StoryFn } from '@storybook/react'
import { Avatar } from './avatar'

export default {
  title: 'UI/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    size: { control: 'radio' },
  },
} as Meta<typeof Avatar>

export const DefaultAvatar: StoryFn<typeof Avatar> = (args) => (
  <Avatar {...args} />
)

DefaultAvatar.args = {
  color: undefined,
  size: undefined,
  name: 'small',
}

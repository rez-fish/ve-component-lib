import { Meta, StoryFn } from '@storybook/react'
import { Button } from './button'

export default {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    size: { control: 'radio' },
  },
} as Meta<typeof Button>

export const DefaultButton: StoryFn<typeof Button> = (args) => (
  <Button {...args}></Button>
)
export const CustomButton: StoryFn<typeof Button> = (args) => (
  <Button {...args}></Button>
)

DefaultButton.args = {
  color: undefined,
  size: undefined,
  rounded: false,
  outlined: false,
  disabled: false,
  children: 'Button',
}

CustomButton.args = {
  color: 'green',
  size: 'medium',
  rounded: false,
  outlined: false,
  disabled: false,
  children: 'Button',
}

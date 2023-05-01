import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@evan-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque corporis eum dolorem! Voluptate sint, eligendi consequuntur, repellendus fugit facere qui nostrum iste delectus, amet enim consequatur autem dignissimos distinctio aspernatur!',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    as: 'strong',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque corporis eum dolorem! Voluptate sint, eligendi consequuntur, repellendus fugit facere qui nostrum iste delectus, amet enim consequatur autem dignissimos distinctio aspernatur!',
  },
}

import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'
import { vars } from '../themes.css'

export const button = recipe({
  base: {
    borderRadius: 10,
    border: 'none',
    fontWeight: 'bold',
    transition: 'ease-in-out scale 50ms',
    ':active': {
      scale: '.9',
      transition: 'ease-in-out scale 50ms',
    },
    ':disabled': {
      opacity: 0.65,
      pointerEvents: 'none',
    },
  },

  variants: {
    color: {
      blurple: { background: vars.colors.blurple, color: vars.colors.white },
      green: { background: vars.colors.green, color: vars.colors.black },
      fuchsia: { background: vars.colors.fuchsia, color: vars.colors.white },
      black: { background: vars.colors.black, color: vars.colors.white },
      white: { background: vars.colors.white, color: vars.colors.black },
      yellow: { background: vars.colors.yellow, color: vars.colors.black },
    },
    size: {
      small: { padding: 12 },
      medium: { padding: 16 },
      large: { padding: '24px' },
    },
    rounded: {
      true: { borderRadius: 999 },
    },
    outlined: {
      true: {},
    },
  },

  compoundVariants: [
    {
      variants: {
        color: 'blurple',
        outlined: true,
      },
      style: {
        outline: 'solid',
        outlineWidth: '1',
        outlineColor: vars.colors.blurple,
        backgroundColor: 'transparent',
        color: vars.colors.blurple,
      },
    },
    {
      variants: {
        color: 'yellow',
        outlined: true,
      },
      style: {
        outline: 'solid',
        outlineWidth: '1',
        outlineColor: vars.colors.yellow,
        backgroundColor: 'transparent',
        color: vars.colors.yellow,
      },
    },
    {
      variants: {
        color: 'green',
        outlined: true,
      },
      style: {
        outline: 'solid',
        outlineWidth: '1',
        outlineColor: vars.colors.green,
        backgroundColor: 'transparent',
        color: vars.colors.green,
      },
    },
    {
      variants: {
        color: 'fuchsia',
        outlined: true,
      },
      style: {
        outline: 'solid',
        outlineWidth: '1',
        outlineColor: vars.colors.fuchsia,
        backgroundColor: 'transparent',
        color: vars.colors.fuchsia,
      },
    },
    {
      variants: {
        color: 'white',
        outlined: true,
      },
      style: {
        outline: 'solid',
        outlineWidth: '1',
        outlineColor: vars.colors.white,
        backgroundColor: 'transparent',
        color: vars.colors.white,
      },
    },
    {
      variants: {
        color: 'black',
        outlined: true,
      },
      style: {
        outline: 'solid',
        outlineWidth: '1',
        outlineColor: vars.colors.black,
        backgroundColor: 'transparent',
        color: vars.colors.black,
      },
    },
  ],

  defaultVariants: {
    color: 'blurple',
    size: 'medium',
  },
})

export type ButtonVariants = RecipeVariants<typeof button>

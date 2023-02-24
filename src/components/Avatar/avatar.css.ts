import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '../themes.css'

export const avatar = recipe({
  base: {
    borderRadius: '250px',
    background: vars.colors.blurple,
    width: '40px',
    height: '40px',
    fontSize: '20px',
    lineHeight: '40px',
    textAlign: 'center',
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
      small: {
        width: '30px',
        height: '30px',
        lineHeight: '30px',
        fontSize: '15px',
      },
      medium: {
        width: '45px',
        height: '45px',
        lineHeight: '45px',
        fontSize: '22.5px',
      },
      large: {
        width: '60px',
        height: '60px',
        lineHeight: '60px',
        fontSize: '30px',
      },
    },
  },
})

export type AvatarVariants = RecipeVariants<typeof avatar>

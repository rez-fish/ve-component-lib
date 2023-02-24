import { button } from './button.css'

type Props = {
  color?: 'green' | 'blurple' | 'fuchsia' | 'black' | 'white' | 'yellow'
  size?: 'small' | 'medium' | 'large'
  rounded?: boolean
  children?: React.ReactNode
  outlined?: boolean
  disabled?: boolean
}

export const Button = ({
  children,
  color,
  size,
  rounded,
  outlined,
  disabled,
}: Props) => {
  return (
    <button
      className={button({ color, size, rounded, outlined })}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

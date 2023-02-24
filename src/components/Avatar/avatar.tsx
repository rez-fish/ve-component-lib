import { avatar } from './avatar.css'

type Props = {
  color?: 'green' | 'blurple' | 'fuchsia' | 'black' | 'white' | 'yellow'
  size?: 'small' | 'medium' | 'large'
  name: string
}

export const Avatar = ({ name, color, size }: Props) => {
  let newName
  if (name) {
    newName = name.substring(0, 1)
  }
  return <div className={avatar({ color, size })}>{name && newName}</div>
}

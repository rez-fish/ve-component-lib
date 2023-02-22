import { useState } from 'react'
import Button from './components/button'
import Avatar from './components/avatar'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="flex flex-col items-center justify-center text-white">
      {/* Button */}
      <h1 className="my-16 text-4xl font-bold underline">Buttons</h1>
      <div className="mx-16">
        <div>
          <h1 className="m-4 text-xl font-bold text-center">Sizes</h1>
          <div className="flex items-center gap-2">
            <Button>Default</Button>
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
            <Button rounded size="medium">
              Rounded
            </Button>
          </div>
        </div>

        <div className="gap-2">
          <h1 className="m-4 text-xl font-bold text-center">Colors</h1>
          <div className="flex gap-2">
            <Button color="blurple">Blurple</Button>
            <Button color="green">Green</Button>
            <Button color="fuchsia">Fuchsia</Button>
            <Button color="yellow">Yellow</Button>
            <Button color="black">Black</Button>
            <Button color="white">White</Button>
          </div>
        </div>

        <div className="gap-2">
          <h1 className="m-4 text-xl font-bold text-center">Outlined</h1>
          <div className="flex gap-2">
            <Button outlined color="blurple">
              Blurple
            </Button>
            <Button outlined color="green">
              Green
            </Button>
            <Button outlined color="fuchsia">
              Fuchsia
            </Button>
            <Button outlined color="yellow">
              Yellow
            </Button>
            <Button outlined color="black">
              Black
            </Button>
            <Button outlined color="white">
              White
            </Button>
          </div>
        </div>

        <div className="gap-2">
          <h1 className="m-4 text-xl font-bold text-center">Disabled</h1>
          <div className="flex gap-2">
            <Button disabled color="blurple">
              Blurple
            </Button>
            <Button disabled color="green">
              Green
            </Button>
            <Button disabled color="fuchsia">
              Fuchsia
            </Button>
            <Button disabled color="yellow">
              Yellow
            </Button>
            <Button disabled color="black">
              Black
            </Button>
            <Button disabled color="white">
              White
            </Button>
          </div>
        </div>
      </div>

      {/* Avatar */}
      <h1 className="my-16 text-4xl font-bold underline">Avatars</h1>
      <div className="mx-16">
        <h1 className="m-4 text-xl font-bold text-center">Colors and Sizes</h1>

        <div className="flex items-center justify-center gap-2">
          <Avatar name="Small" color="green" size="small" />
          <Avatar name="Mediu " color="yellow" size="medium" />
          <Avatar name="Large" size="large" />
        </div>
      </div>
    </div>
  )
}

export default App

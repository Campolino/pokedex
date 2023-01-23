import { greetings } from './Greetings.module.css'

const Greetings = ({name}) => {
  return (
    <h1 className={greetings}>Hello {name} it's great to have you here.</h1>
  )
}

export default Greetings
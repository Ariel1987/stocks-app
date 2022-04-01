import { Input as Inp } from './Input.styles'

const Input = ({ id, placeholder, onChange, value, type }) => {
  return (
    <Inp
      type={type}
      placeholder={placeholder}
      id={id}
      onChange={onChange}
      value={value}
    />
  )
}

export default Input

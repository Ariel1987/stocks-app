import { Input } from './Input.styles'

const FormInput = ({ id, placeholder, onChange, value, type }) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      id={id}
      onChange={onChange}
      value={value}
    />
  )
}

export default FormInput

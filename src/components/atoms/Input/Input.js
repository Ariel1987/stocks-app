import { Input } from './Input.styles'

const FormInput = ({ id, placeholder, onChange, value }) => {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      id={id}
      onChange={onChange}
      value={value}
    />
  )
}

export default FormInput

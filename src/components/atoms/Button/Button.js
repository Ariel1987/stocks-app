import { Button as Btn } from './Button.styles'

const Button = ({ children, ...props }) => {
  return <Btn {...props} >{children}</Btn>
}

export default Button

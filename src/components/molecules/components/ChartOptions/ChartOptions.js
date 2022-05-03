import Input from "../../../atoms/Input/Input"
import { Wrapper } from "./ChartOptions.styles"

const ChartOptions = () => {
  return (
    <Wrapper>
      <Input type='radio' id='daily' value='daily' />
      <label for='daily'>Daily</label>
      <Input type='radio' id='weekly' value='weekly' />
      <label for='weekly'>Weekly</label>      
      <Input type='radio' id='monthly' value='monthly' />
      <label for='monthly'>Monthly</label>
    </Wrapper>
  )
}

export default ChartOptions
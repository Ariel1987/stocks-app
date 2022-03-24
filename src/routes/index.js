import { Routes as Switch, Route } from 'react-router-dom' 
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Switch>
  )    
}

export default Routes
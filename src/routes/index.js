import { Routes as Switch, Route } from 'react-router-dom' 
import LoginPage from '../pages/LoginPage/LoginPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' element={<LoginPage />} />
      <Route path='/signup' element={<SignUpPage />} />
    </Switch>
  )    
}

export default Routes
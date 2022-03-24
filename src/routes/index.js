import { Routes as Switch, Route } from 'react-router-dom' 
import LoginPage from '../pages/LoginPage/LoginPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import PrivateRoute from './PrivateRoute/PrivateRoute'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' element={<PrivateRoute />} />
      {/* <PrivateRoute exact path='/' element={<p>Home</p>} /> */}
      <Route exact path='/login' element={<LoginPage />} />
      <Route exact path='/signup' element={<SignUpPage />} />
    </Switch>
  )    
}

export default Routes
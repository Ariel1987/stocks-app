import { Routes as Switch, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import PrivateRoute from './PrivateRoute/PrivateRoute'

const Routes = () => {
  return (
    <Switch>
      <Route
        exact path="/"
        element={
          <PrivateRoute>
            <div>Home</div>
          </PrivateRoute>
        }
      />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/signup" element={<SignUpPage />} />
    </Switch>
  )
}

export default Routes

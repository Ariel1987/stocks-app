import { Routes as Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
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
            <HomePage />
          </PrivateRoute>
        }
      />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/signup" element={<SignUpPage />} />
    </Switch>
  )
}

export default Routes

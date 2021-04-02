import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css';
import './bootstrap.min.css'
import PrivateRoute from './components/Authentication/PrivateRoute';
import SignIn from './components/Authentication/SignIn';
import CheckOut from './components/CheckOuts/CheckOut';
import Home from './components/Home/Home';
import Order from './components/Orders/Order';
import DashboardManagement from './components/Admin/DashboardManagement'
import Create from './components/Admin/Create'
import SignUp from './components/Authentication/SignUp';
import Notfound404 from './components/Notfound/Notfound404';

export const UserContext = createContext()

const App = () => {

  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    photo: ''
  })
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/checkout/:id">
            <CheckOut />
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <DashboardManagement />
          </PrivateRoute>
          <PrivateRoute path="/create">
            <Create />
          </PrivateRoute>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="*">
            <Notfound404 />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

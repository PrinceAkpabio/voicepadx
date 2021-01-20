import { set } from 'mongoose';
import React, {useState, useEffect} from 'react';
import { Switch, Route, useParams, Redirect } from 'react-router-dom'
import {UserContext} from '../src/data-requests/usercontext'
import Footer from './components/Footer';
import Naviagtion from './components/navigation/naviagtion';
import PrivateRoute from './components/PrivateRoute';
import SignInPagee from './components/sign-in-page/sign-in.component';
import Landing from './pages/landing';
import AccessPage from './pages/signinandsignup';
import User from './pages/user';
function App() {
  const [user, setUser] = useState({});
  const { name } = useParams();
  console.log('App State: ', user);

 const users = JSON.parse(localStorage.getItem("user")) ; 
      const TOKEN = users?.accessToken ? users.accessToken : false;
      const Name = users?.username ? users.username : 'user'
      console.log('Username: ',Name);
      console.log('Token: ',TOKEN);
// setUser(users)

  return (
    <div className="App container">
      <UserContext.Provider value={{ user, setUser }}>
        <Naviagtion name={Name} />
        <Switch>
          <Route exact path='/signup' component = {AccessPage}  />
          <Route exact path='/login' component={SignInPagee} />
          <PrivateRoute
            AUTH={TOKEN}
            path={`/profile/${Name}`}>
            <User />
          </PrivateRoute>
          <Redirect from='/profile/' to={`/profile/${Name}`} />
          <Route exact path='/home' component={Landing} /> 
          <Redirect from='/' to={`/home`} />
        </Switch>
        <Footer />
    </UserContext.Provider>
    </div>
  );
}

export default App;

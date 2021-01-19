import React, {useState} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
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
  // const { name } = useParams();
  console.log('App State: ',user);
  const Name = user.username;
  console.log('User Name: ',Name);
  const TOKEN = user.password || user.accessToken;
  console.log('Token: ',TOKEN);


  return (
    <div className="App container">
      <UserContext.Provider value={{ user, setUser }}>
        <Naviagtion />
        <Switch>

          
          <Route exact path='/home' component = {Landing}  />
          <Route exact path='/signup' component = {AccessPage}  />
          <Route exact path='/login' component={SignInPagee} />
          <PrivateRoute
            Auth={TOKEN}
            path={`/profile/${Name}`}>
            <User />
          </PrivateRoute>
          {/* <Route path='/profile/:name' component={User} /> */}
       
          <Redirect from='/' to='/home' /> 
        </Switch>
        <Footer />
    </UserContext.Provider>
    </div>
  );
}

export default App;

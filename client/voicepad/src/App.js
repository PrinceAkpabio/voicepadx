import React, {useState, useEffect} from 'react';
import { Switch, Route, Redirect, useParams } from 'react-router-dom'
import {UserContext} from '../src/data-requests/usercontext'
import Landing from './pages/landing';
import AccessPage from './pages/signinandsignup';
import User from './pages/user';
function App() {
  const [user, setUser] = useState({
  name: '',
  username: '',
  email: '',
  password: '',
  
 });
  const { name } = useParams();
  
  // setUser(Users)
  // useEffect(() => {
  //   fetch('/user/').then(res => {
  //     if (res.ok) {
  //       return res.json()
  //     }
  //   }).then(data => setUser(data.names))
  //   return () => {
      
  //   }
  // }, [])
console.log('App State',user);
  return (
    <div className="App">
    <UserContext.Provider value={{user, setUser}}>
        <Switch>
          <Route exact path='/home' component = {Landing}  />
          <Route exact path='/login' component = {AccessPage}  />
          <Route path='/profile/:name' component={User} />
          <Redirect from='/' to='/home' /> 
      </Switch>
    </UserContext.Provider>
    </div>
  );
}

export default App;

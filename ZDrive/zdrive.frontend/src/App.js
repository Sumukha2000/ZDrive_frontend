import { React, useEffect } from 'react';
import Home from './components/Home/Home'
import Nav_bar from './components/Navbar/Nav_bar';
import SignInPage from './components/Signin/SignInPage';
import SignUpPage from './components/Signup/SignUpPage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userAuthenticated } from './app/authenticationSlice';

const App = () => {
  const { isLoggedIn } = useSelector(state => state.authenticationSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token !== undefined && token !== null) {
      dispatch(userAuthenticated({ token: token }))
    }
  }, []);

  return (
  
    <div className='app'>
  <BrowserRouter>
    <Nav_bar/>
    <Switch>
      <Route exact path="/" render={() => (isLoggedIn ? <Home /> : <SignInPage />)} />
      <Route exact path="/folder/:folderId" component={Home} />
      <Route path="/signup" render={() => (isLoggedIn ? <Redirect to='/' /> : <SignUpPage />)} />
      <Route path="/signin" render={() => (isLoggedIn ? <Redirect to='/' /> : <SignInPage />)} />
      <Route component={() => <h2>Page not found!</h2>} />
    </Switch>
  </BrowserRouter>
  </div>

)};

export default App;

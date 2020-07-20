import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/profileContainer';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Provider } from 'react-redux';
import UsersContainer from './components/Users/usersContainer';
import HeaderContainer from './components/Header/headerContainer';
import Login from './components/Login/login';



const App = (props) => {
  return (
    <BrowserRouter>
      <Provider store={props.store}>
        <div className='app-wrapper'>

          <HeaderContainer />

          <Navbar />

          <div className='app-wrapper-content'>
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/users' render={() => < UsersContainer /> } />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
            <Route path='/login' render={() => <Login />} />
          </div>

        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

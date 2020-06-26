import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Provider } from 'react-redux';



const App = (props) => {
  return (
    <BrowserRouter>
      <Provider store={props.store}>
        <div className='app-wrapper'>

          <Header />

          <Navbar />

          <div className='app-wrapper-content'>
            <Route path='/profile' render={() => <Profile store={props.store} />} />
            <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
          </div>

        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

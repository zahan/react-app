import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let renderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
renderEntireTree(store.getState());

store.subscribe( () => {
  let state = store.getState()
  renderEntireTree (state)
})

serviceWorker.unregister();

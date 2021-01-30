import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import NotFound from './components/NotFound';
import Signin from './components/Signin';
import NavBar from './components/NavBar';
import Articles from './components/Articles';
import ArticleForm from './components/Articles/ArticleForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToastContainer />
        <NavBar></NavBar>
      </header>
      <body>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/articles/articleForm/:id" component={ArticleForm} />
          <Route component={NotFound} />
        </Switch>
      </body>
      <footer></footer>
    </div>
  );
}

export default App;

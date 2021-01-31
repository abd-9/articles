import React, { useEffect } from 'react';
import { connect } from 'react-redux';
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

const App = ({ user }) => {
  useEffect(() => {
    localStorage.setItem(
      'articles',
      JSON.stringify([
        {
          id: 'sss',
          title: 'ssssss',
          creationDate: 'creationDate',
          content: 'content 1 ',
          image: null,
          userName: 'abd',
        },
        {
          id: 'ss22s',
          title: 'titel2',
          creationDate: 'creationDate',
          content: 'content 2 ',
          image: null,
          userName: 'abd',
        },
        {
          id: 's112ss',
          title: 'titel3',
          creationDate: 'creationDate',
          content: 'content3 ',
          image: null,
          userName: 'sss',
        },
        {
          id: 'ss212s',
          title: 'titel4',
          creationDate: 'creationDate',
          content: 'content 4 ',
          image: null,
          userName: 'abd11',
        },
      ])
    );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ToastContainer />
        <NavBar></NavBar>
      </header>
      <main>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          {user.isLoggedIn && (
            <>
              <Route exact path="/articles/" component={Articles} />
              <Route exact path="/articles/:id" component={Articles} />
              <Route exact path="/articles/articleForm/:id" component={ArticleForm} />
            </>
          )}
          <Route component={NotFound} />
        </Switch>
      </main>
      <footer></footer>
    </div>
  );
};

const mapStateToProps = (state) => {
  const user = state?.auth || {};
  return {
    user,
  };
};
export default connect(mapStateToProps, null)(App);

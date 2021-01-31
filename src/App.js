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
import { setUserAction } from './redux/actions';

const App = ({ user, setUserInRedux }) => {
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    if (currentUser?.id) {
      setUserInRedux(currentUser);
    }
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
const mapDispatchToPropa = (dispatch) => ({
  setUserInRedux: (user) => dispatch(setUserAction(user)),
});
export default connect(mapStateToProps, mapDispatchToPropa)(App);

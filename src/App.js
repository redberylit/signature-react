import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "./routes";
import groutes from "./groutes";
import withTracker from "./withTracker";
import { useSelector, useDispatch } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import { auth, generateUserDocument } from './firebase/firebase';
import { setUser, selectUser } from './firebase/firebaseSlice';

export default () => {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const user = await generateUserDocument(userAuth);
        const { uid, displayName, email, photoURL } = user;
        dispatch(setUser({ uid, displayName, email, photoURL }));
      }
    });
  }, [dispatch]);


return  user ?(
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker(props => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          />
        );
      })}
    </div>
  </Router>
):(
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
      {groutes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker(props => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          />
        );
      })}
    </div>
  </Router>
);

}





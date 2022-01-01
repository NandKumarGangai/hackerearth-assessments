import React, { Suspense, lazy } from 'react';
import Loader from './components/loader';
import { Route } from "react-router-dom";

const renderLoader = () => <Loader />;

const LoginComponent = lazy(() => import('./pages/Login'));
const SignUpComponent = lazy(() => import('./pages/SignUp'));
const HomePageComponent = lazy(() => import('./pages/HomePage'));
const CalorieTrackerComponent = lazy(() => import('./pages/CalorieTrackerPage'))
const ErrorComponent = lazy(() => import('./components/Error'));

const App = () => {

  return (
    <Suspense fallback={renderLoader()}>
      <Route exact path={['/', '/login']} component={LoginComponent}></Route>
      <Route exact path='/signup' component={SignUpComponent}></Route>
      <Route exact path='/dashboard' component={HomePageComponent}></Route>
      <Route exact path='/calorie-tracker' component={CalorieTrackerComponent}></Route>
      <Route exact path='/error' component={ErrorComponent}></Route>
    </Suspense>
  );
}

export default App;

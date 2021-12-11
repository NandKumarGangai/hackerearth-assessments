import React, { Suspense, lazy } from 'react';
import { Route } from "react-router-dom";
import Loader from './components/Loader';


const Dashboard = lazy(() => import('./components/Dashboard'));

const renderLoader = () => <Loader />;

const App = () => {
  return (
    <Suspense fallback={renderLoader()}>
      <Route exact path={['/']} component={Dashboard}></Route>
    </Suspense>
  )
}

export default App

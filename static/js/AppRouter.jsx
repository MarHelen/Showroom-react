import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from "./App.jsx";
import Showroom from './components/Showroom.jsx';
import PageNotFound from './components/PageNotFound.jsx';



const NotFoundPage = () => (
    <div>
      Page Not Found
      <Link to='/'>Go to Home Page </Link>
    </div>
	);

const AppRouter = () => (
	<BrowserRouter>
	  <div>
	    <Switch>
	      <Route path='/' component={App} exact={true} />
	      <Route path='/showrooms/:showroom_name' component={Showroom} />
	      <Route component={PageNotFound} />
	    </Switch>
	  </div>
	</BrowserRouter>
	);

export default AppRouter;
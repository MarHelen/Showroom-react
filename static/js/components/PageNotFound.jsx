// PageNotFound.jsx

import React from "react";
import * as ReactBootstrap from 'react-bootstrap';
import { Link } from 'react-router-dom';

import  Navigation from './Navigation';


class PageNotFound extends React.Component {

  render () {
  	let shop = this.props.location.state.shop;

    return (
    	<div>
            <Navigation 
            	name={"Page not Found"}
            />


            <h4> This page was not found. Please, return to the 
            	<Link to='/'>
            		home page.
            	</Link>
            </h4>

        </div> 
    	)
  }
};

export default PageNotFound;
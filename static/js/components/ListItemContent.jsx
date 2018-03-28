//ListItemContent.jsx

import React from 'react';
import { Panel, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//const fb_logo = require('../images/fb.jpg');
//import fb_logo from './../../img/fb.jpg'
//import fb_logo from '!url-loader!./fb.jpg';
const insta_logo = require('!!url-loader!../../img/inst.png');
const fb_logo = require('../../img/fb.jpg');
//let fb = String('/' + fb_logo);


const ListItemContent = (props) => {
		return(
			<div>
                {props.show && <Panel.Body>

                	<div className='col-lg-3'>
                	    <Image className={'profile_pic_'+props.size} src={props.shop.pic} thumbnail />
                	</div>

                	<div className='col-lg-7'>
                	    <div className='shopDetailsBlock'>
                	        {props.size==='small' &&
                	        <p>
                	            {props.shop.details} 
                	            <Link 
                	               
                	                to={{
                	                	pathname: '/showrooms/' + props.shop.id,
                	                	state: {shop: props.shop}
                	                }}>
                	                more...
                	            </Link>
                	        </p>}

                	        {props.size==='large' &&
                            <p>
                                {props.shop.details}
                            </p>}

                	    </div>

                	    <div className='shopAddressBlock'>
                	        <p>
                	            <strong>address:</strong> {props.shop.address}
                	        </p>
                	    </div>

                	    <div className='shopSocialBlock'>
                	        <p>
                	        	{props.shop.social.fb_link && <a href={props.shop.social.fb_link}> <img className='social_logo' src={fb_logo} /> </a>}
                	        	{props.shop.social.insta_link && <a href={props.shop.social.insta_link}> <img className='social_logo' src={insta_logo} /> </a>}
                	        </p>
                	    </div>

                	</div>

                </Panel.Body>}
            </div>
			)
}

export default ListItemContent;



/*
shops : [
			{id: 1, name: 'shop1', address: 'address1', pic: "pic_url", tags: ['women','decor'], details: '', social: {
		        	fb_link: 'http://no.no',
		        	insta_link: 'http://'
		        }},
			{id: 2, name: 'shop2', address: 'address2', pic: "pic_url2", tags: ['men', 'shoes'], details: '', social: {
		        	fb_link: 'http://',
		        	insta_link: 'http://'
		        }},
			{id: 3, name: 'shop3', address: 'address3', pic: "pic_url3", tags: ['women', 'accessories'], details: '', social: {
		        	fb_link: 'http://',
		        	insta_link: 'http://'
		        }},
			],

			*/
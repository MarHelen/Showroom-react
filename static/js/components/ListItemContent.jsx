//ListItemContent.jsx

import React from 'react';
import { Panel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ListItemContent = (props) => {
		return(
			<div>
                {props.show && <Panel.Body>

                	<div className='col-sm-3'>
                	    <img src={props.shop.pic} />
                	</div>

                	<div className='col-sm-7'>
                	    <div className='shopDetailsBlock'>
                	        <p>{props.shop.details} 
                	            <Link 
                	                //to={'/showrooms/' + props.shop.id}
                	                //params={{ shop: props.shop }}> 
                	                to={{
                	                	pathname: '/showrooms/' + props.shop.id,
                	                	state: {shop: props.shop}
                	                }}>
                	                more...
                	            </Link>
                	        </p>
                	    </div>

                	    <div className='shopAddressBlock'>
                	        <p>
                	            Address: {props.shop.address}
                	        </p>
                	    </div>

                	    <div className='shopSocialBlock'>
                	        <p>
                	        	{props.shop.social.fb_link && <a href={props.shop.social.fb_link}> <img src=''/> </a>}
                	        	{props.shop.social.insta_link && <a href={props.shop.social.insta_link}> <img src=''/> </a>}
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
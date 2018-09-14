//ListItemContent.jsx

import React from 'react';
import { Panel, Image, Media, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import uuid from 'uuid';

import ListItemContentHours from './ListItemContentHours';
import ListItemContentContacts from './ListItemContentContacts';


const ListItemContent = (props) => {
			
		return(
			<div>
                {props.show && 
                <Panel.Body>
                	<Media>
                	  <Media.Left>
                		<Image className={'profile_pic_'+props.size}  
                			   src={props.shop.linkPIC} 
                			   alt='thumbnail' />
                	  </Media.Left>

                	  <Media.Body>

                		{props.title && <Media.Heading>
                			<p>{props.shop.displayName}</p>
                		</Media.Heading>}

                	    <div className='shopDetailsBlock'>
                	        {( props.size==='small' || !props.shop.descriptionFull ) &&
                	        <div>
                	            {props.shop.descriptionShort} 
                	        </div>}

         
                            {(props.size==='large' && props.shop.descriptionFull) && 
                            <div> 
                                { props.shop.descriptionFull } 
                            </div>}
                                

                            {props.size==='small' && 
                            <p><Link            	                
                                to={{
                                    pathname: '/showrooms/' + props.shop.name,
                                    state: { shop: props.shop }
                                    }}>
                                    more...
                            </Link></p>}
                	    </div>

                	    <Row className='shopAddressBlock'>
                	    	{props.shop.address &&
                	    	<div>
                	        <Col xs={6} md={3} lg={2}>
                	            <span>address:</span>
                	        </Col>
                	        <Col xs={6} md={9} lg={10}>
                	            {props.shop.displayAddress}
                	        </Col>
                	    	</div>}
                	    </Row>

                	    {(props.shop.address && props.size==='large') && 
                	    <ListItemContentHours
                	    	shop={props.shop}
                	    />}

                	    <ListItemContentContacts 
                	    	phone={props.shop.phone}
                	    	email={props.shop.email}
                	    />

                	  </Media.Body>
                	</Media>
                </Panel.Body>}
            </div>
			)
}


export default ListItemContent;


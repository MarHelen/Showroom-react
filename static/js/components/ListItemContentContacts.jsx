// ListItemContentContacts.jsx

import React from 'react';
import { Col, Row} from 'react-bootstrap';

const mail_logo = require('../../img/mail.png');
const phone_logo = require('../../img/phone.png');

const ListItemContentContacts = (props) => {
	return ( <Row bsClass='shopContactsBlock'>
			
				<Col xs={6} md={5} lg={4}>
				{props.phone && <a href={'tel:'+props.phone }> 
               	<img className='social_logo' src={phone_logo} /> </a>}
                {props.phone && <small>{props.phone} </small>}
				</Col>

				<Col xs={6} md={7} lg={8}>
				{props.email && <a href={"mailto:"+props.email}> 
               	<img className='social_logo' src={mail_logo} /> </a>}
               	{props.email && <small>{props.email}</small>}
               	</Col>

		</Row>

		)
}



export default ListItemContentContacts;


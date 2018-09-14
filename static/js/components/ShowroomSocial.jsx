// ShowroomSocial.jsx

import React from 'react';
import { Col, Row } from 'react-bootstrap';


const insta_logo = require('!!url-loader!../../img/inst.png');
const fb_logo = require('../../img/fb.jpg');

const ShowroomSocial = (props) => {
  return ( <div className="container">
            <div className="showroomSocial">
              {props.linkFB && 
                <a href={props.linkFB} target="blank_"> 
                  <img className='social_logo' src={fb_logo} /> 
                </a>}

              {props.linkInst && 
                <a href={props.linkInst} target="blank_"> 
                  <img className='social_logo' src={insta_logo} /> 
                </a>}
           </div>
          </div>
    )
}


export default ShowroomSocial;
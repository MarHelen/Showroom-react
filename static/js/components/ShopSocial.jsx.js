// ShopSocial.jsx

import React from 'react';

const ShopSocial = (props) => {
  return ( <div className='shopSocial'>
      
      <p>
        {props.shop.linkFB && <a href={props.shop.linkFB} target="blank_"> 
                <img className='social_logo' src={fb_logo} /> </a>}
              {props.shop.linkInst && <a href={props.shop.linkInst} target="blank_"> 
                <img className='social_logo' src={insta_logo} /> </a>}
              
          </p>

    </div>

    )
}


export default MyMapComponent;
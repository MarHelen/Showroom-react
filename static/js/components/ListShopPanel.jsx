// ListShopPanel.jsx

import React from 'react';
import { PanelGroup } from 'react-bootstrap';
import uuid from 'uuid';
import ListItem from'./ListItem';

const ListShopPanel = (props) => {
        return (
            <div>
                <PanelGroup accordion id="accordion-example"> 
                   {props.shops.map((shop) =>  
               	        
               	        <ListItem 
               	            key={uuid()} 
               	            shop={shop} 
               	        /> 

               	    )}
                </PanelGroup>
            </div>
    	)
}

export default ListShopPanel;
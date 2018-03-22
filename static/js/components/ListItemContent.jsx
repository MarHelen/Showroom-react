//ListItemContent.jsx

import React from 'react';
import { Panel } from 'react-bootstrap';

const ListItemContent = (props) => {
		return(
			<div>
                {props.show && <Panel.Body>
                	Panel content
                </Panel.Body>}
            </div>
			)
}

export default ListItemContent;
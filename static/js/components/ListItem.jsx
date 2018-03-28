// ListItem.jsx

import React from 'react';
import { Panel } from 'react-bootstrap';
import ListItemContent from './ListItemContent';

class ListItem extends React.Component {
	state = {
		visibility : false
	};

	togglePanel = () => {
        this.setState( (oldState) => {
        	return { 
        		visibility: !oldState.visibility
        	};
        });
	}

	render() {
		return (
            <div>
                <Panel>
                    <Panel.Heading > 
                        <Panel.Title 
                            componentClass="h3" 
                            onClick={this.togglePanel} 
                            style={{cursor:'pointer'}}>
                            <p>
                                {this.props.shop.name}
                            </p>
                            <p className='small'>
                                {this.props.shop.tags.map((tag) => (tag+' '))}

                            </p>
                        </Panel.Title>
                    </Panel.Heading>

                    <ListItemContent 
                        show={this.state.visibility}
                        shop={this.props.shop}
                        size='small'
                    />
                </Panel>
            </div>
			)
	};
};

export default ListItem;
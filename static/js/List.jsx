//List.jsx

import React from "react";
import { Panel } from 'react-bootstrap';

class List extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			shops : [
			{id: 1, name: 'shop1', address: 'address1', pic: "pic_url", tags: ['women']},
			{id: 2, name: 'shop2', address: 'address2', pic: "pic_url2", tags: ['men']},
			{id: 3, name: 'shop3', address: 'address3', pic: "pic_url3", tags: ['women']},
			]
		}
	}
	render(){
		return (
                <div>
                	{this.state.shops.map((shop) =>  <ListItem key={shop.id} shop={shop} /> )};
                </div>
			);
	};
};

class ListItem extends React.Component {
	constructor(props){
		super(props);
		this.togglePanel = this.togglePanel.bind(this);
		this.state = {
			visibility : false
		};
	}

	togglePanel() {
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
                    <Panel.Heading> 
                        <Panel.Title componentClass="h3">
                            {this.props.shop.name}
                        </Panel.Title>
                        <button onClick={this.togglePanel}> {this.state.visibility ? 'hide' : 'show'} </button>
                    </Panel.Heading>

                    <ListItemContent show={this.state.visibility}/>
                    
                </Panel>
            </div>
			);
	};
};

class ListItemContent extends React.Component {
	render(){
		return(
			<div>
                {this.props.show && <Panel.Body>Panel content


                </Panel.Body>}
            </div>
			)
	}
}

export default List;
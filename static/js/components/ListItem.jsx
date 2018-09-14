// ListItem.jsx

import React from 'react';
import { Panel, Glyphicon, Col, Row, Image } from 'react-bootstrap';
import ListItemContent from './ListItemContent';

class ListItem extends React.Component {
	state = {
		visibility : false,
		glyph: false,
	};

	togglePanel = () => {
		//this.props.moveMarker(this.props.shop.name);
		console.log('inside ListItem toggle', this.props.shop.name);
        this.setState( (oldState) => {
        	return { visibility: !oldState.visibility }
        		
        });
	}

	_onClick = () => {
		this.props.moveMarker(this.props.value);
	}

	showGlyph = () => {
		this.setState ( { glyph: true })

	}

	hideGlyph = () => {
		this.setState( { glyph: false })
	}

	render() {
		//console.log(this.props.shop.tags);
		return (
            <div>
                <Panel bsClass="shopPanel">
                    <Panel.Heading bsClass="panelHead"> 
                        <Panel.Title 
                            componentClass="h3" 
                            onClick={this._onClick, this.togglePanel} 
                            style={{cursor:'pointer'}}
                            onMouseOver={this.showGlyph}
                            onMouseOut={this.hideGlyph}>
                            <Row>
                            {!this.state.visibility && <Col xs={2} md={1}>
                                                            <Image className='panelImage' src={this.props.shop.linkPIC}/>
                                                        </Col>}
                            <Col xs={8} md={10}>
                                {this.props.shop.displayName}
                            </Col>
                            <Col xs={2} md={1} className="glyph">
                                { (!this.state.visibility && this.state.glyph) && <Glyphicon glyph="menu-down"  className="glyph"/>}
                                { this.state.visibility && <Glyphicon glyph="menu-up" className="glyph" />}
                            </Col>
                            </Row>
                            <Row><Col xs={10} xsOffset={2} md={11} mdOffset={1}>
                            <div className='small tags'>
                                <small> {this.props.shop.tags.map((tag) => (tag+'  '))} </small>

                            </div>
                            </Col></Row>
                        </Panel.Title>
                    </Panel.Heading>

                    <ListItemContent className="listItemContent"
                        show={this.state.visibility}
                        shop={this.props.shop}
                        size='small'
                    />
                    <hr/>
                </Panel>
            </div>
			)
	};
};

export default ListItem;
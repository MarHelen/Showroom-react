//List.jsx

import React from "react";
import { Glyphicon } from 'react-bootstrap';
import uuid from 'uuid';
import ListFilterBox from './ListFilterBox';
import ListShopPanel from './ListShopPanel';


class List extends React.Component {
	state = {

			filters: [],
            filterOptions: [
                'choose filter...',
                'men',
                'women',
                'decor',
                'shoes',
                'accessories',
                'home',
                'plants',
                'handbags',
                'kids',
                'beauty',
                'underwear',
                'clothing'
                ],
            filterValue: ''
		}

    addFilterTag = (label) => {
    	console.log('adding tag ' + label);
        if (this.state.filters.indexOf(label) === -1) {
            this.setState( (oldState) => {
        	    return { 
        		    filters: [...oldState.filters, label]
        	    };
            });
        }
    } 

    handleDeleteFilter = (filterToRemove) => {
        this.setState( (oldState) => ({
            filters: oldState.filters.filter((item) => {
                return filterToRemove !== item;
            })
        }));
    }

    handleSubmitFilter = (e) => { 
    	e.preventDefault();
    	console.log(e);
    	if (this.state.filterValue !== 'choose filter...') {
    	    this.addFilterTag(this.state.filterValue);  
        }
        this.setState( {filterValue: 'choose filter...'} );

    }

    handleChangeFilter = (e) => {
    	 console.log(e.target.value + ' e value');
         this.setState( {filterValue: e.target.value} );
    }

    filterShops = (tags) => {
    	let flag = true;

        this.state.filters.map((filterItem) => {
        	console.log(filterItem, tags);
            if (tags.indexOf(filterItem) === -1)
            	{ flag = false; }
        })
        return flag;
    }

	render(){

		return (
                <div className="list">
                  <div className="container">
                    <h2 className="listTitle"> Showroom List </h2>

                    <ListFilterBox  
                        shops={this.props.shops}
                        filters={this.state.filters}
                        options={this.state.filterOptions}
                        value={this.state.filterValue}
                        handleChange={this.handleChangeFilter}
                        handleSubmit={this.handleSubmitFilter}
                        handleDelete={this.handleDeleteFilter}
                    />

                    <ListShopPanel 
                        shops = { //filter shops by tags to display in ShopPanel
                        	
                        	this.props.shops.filter((shop) => {
                        	    return this.filterShops(shop.tags);
                        	})
                        }
                        moveMarker={ this.props.moveMarker }

                    />


                  </div>
                </div>
			);
	};
};


export default List;
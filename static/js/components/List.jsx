//List.jsx

import React from "react";
import { Glyphicon } from 'react-bootstrap';
import uuid from 'uuid';
import ListFilterBox from './ListFilterBox';
import ListShopPanel from './ListShopPanel';


class List extends React.Component {
	state = {
			shops : [
			{id: 1, name: 'shop1', address: 'address1', pic: "pic_url", tags: ['women','decor'], details: '', social: {
		        	fb_link: 'http://',
		        	insta_link: 'http://'
		        }},
			{id: 2, name: 'shop2', address: 'address2', pic: "pic_url2", tags: ['men', 'shoes'], details: '', social: {
		        	fb_link: 'http://',
		        	insta_link: 'http://'
		        }},
			{id: 3, name: 'shop3', address: 'address3', pic: "pic_url3", tags: ['women', 'accessories'], details: '', social: {
		        	fb_link: 'http://',
		        	insta_link: 'http://'
		        }},
			],
			filters: [],
            filterOptions: [
                'choose option...',
                'men',
                'women',
                'decor',
                'shoes',
                'accessories'
                ],
            filterValue: 'choose option...'
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
    	if (this.state.filterValue !== 'choose option...') {
    	    this.addFilterTag(this.state.filterValue);  
        }
        this.setState( {filterValue: 'choose option...'} );

    }

    handleChangeFilter = (e) => {
    	 console.log(e.target.value + ' e value');
         this.setState( {filterValue: e.target.value} );
    }

    filterShops = (tags) => {
    	let flag = true;
        this.state.filters.map((filterItem) => {
            if (tags.indexOf(filterItem) === -1)
            	{ flag = false; }
        })
        return flag;
    }

	render(){
		return (
                <div className="list">
                  <div className="container">
                    <h2> Showroom List </h2>

                    <ListFilterBox  
                        shops={this.state.shops}
                        filters={this.state.filters}
                        options={this.state.filterOptions}
                        value={this.state.filterValue}
                        handleChange={this.handleChangeFilter}
                        handleSubmit={this.handleSubmitFilter}
                        handleDelete={this.handleDeleteFilter}
                    />

                    <ListShopPanel 
                        shops = { //filter shops by tags to display in ShopPanel
                        	this.state.shops.filter((shop) => {
                        		return this.filterShops(shop.tags);
                        	})
                        } 
                    />
                    
                  </div>
                </div>
			);
	};
};


export default List;
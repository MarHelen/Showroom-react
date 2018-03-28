// Showroom.jsx

import React from "react";
import * as ReactBootstrap from 'react-bootstrap';
import  Navigation from './Navigation';
import ListItemContent from './ListItemContent';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import uuid from 'uuid';

let posts = [
    {
    	img: '/img/',
    	text: 'blah-blah1',
    	post_link: 'http://' 
    },
    {
    	img: '/img/',
    	text: 'blah-blah2',
    	post_link: 'http://' 
    },
    {
    	img: '/img/',
    	text: 'blah-blah3',
    	post_link: 'http://' 
    },
    {
    	img: '/img/',
    	text: 'blah-blah4',
    	post_link: 'http://' 
    },
    {
    	img: '/img/',
    	text: 'blah-blah5',
    	post_link: 'http://' 
    }
]

class Showroom extends React.Component {
  
  render () {
  	let shop = this.props.location.state.shop;
  	//console.log(shop);

    return (
    	<div>
            <Navigation name={shop.name}/>
            <div className='container'>
                <ListItemContent 
                    show={true}
                    shop={shop}
                    size='large'
                />
            </div>
            <ShowroomSocialPosts />
        </div> 
    	)
  }
};

export default Showroom;

class ShowroomSocialPosts extends React.Component {
	render(){
		return (
			<div className='container'>
                <Grid>
                    {posts.map((post,indx) => (
                    	
                    	<Col xs={6} md={4} key={uuid()}>
                            <Thumbnail src={post.img} alt="242x200" key={uuid()}>
                                <p>{post.text}</p>
                            </Thumbnail>
                        </Col>
                        


                    ))}
                </Grid>
			</div>


			)
	}
}


// ShowroomPosts.jsx

import React from "react";
import * as ReactBootstrap from 'react-bootstrap';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';

import axios from 'axios';
import uuid from 'uuid';

const API = "/get_posts/";


class ShowroomPosts extends React.Component {

	state = {
		posts : [],
		visible : null
		
	}

  mouseOver = (ind) => {
  	console.log(ind);
  	this.setState( {visible: ind} );
  }

  mouseOut = () => {
  	this.setState( {visible: null} );
  }

  showCheck = (ind) => {
  	console.log(ind)
  	return this.state.visible === ind; 
  }

  componentDidMount() {

  	let showroom_name = this.props.name;
  	//API call to the server to get social media posts
    axios.get(API+showroom_name)

      .then(response => {
      	const posts_data = response.data;
      	//console.log(posts_data);
      	//console.log(this.state.visible);
      	this.setState({ posts: posts_data });
      })

      .catch(err => console.log(err));
  }

	render(){
		return (
			<div className='container showroomPosts' >
				{ !this.state.posts && <p> Loading...</p> }
                { this.state.posts && <Grid>
                    {this.state.posts.map((post,indx) => (
                       
                        <ShowroomPostsItem
                        	ind={indx}
                        	key={uuid()}
                        	post = {post}
                        	onMouseOver={() => this.mouseOver(indx)}
                            onMouseOut={() => this.mouseOut}
                            visible={ (this.state.visible===indx)  }
                        />
                    
                    )
                    )}
                </Grid>}
                
                <div className="instagramRights"><small className="gray">
                	All provided above data gathered on Instagram platform. All rights belong to the data owner.
                </small></div>


			</div>


			)
	}
}


class ShowroomPostsItem extends React.Component {
	render(){

		return (
			
			<div>
				<Col xs={6} md={4} key={uuid()} className="row align-items-start postImageWrap">
                    <Thumbnail className="postItem postImageWrap"  src={this.props.post.img} alt="200x200" key={uuid()}>	

                    {this.props.visible && <p>{eval('"' + this.props.post.text + '"').slice(0,100)}...</p>}
                    </Thumbnail>
                </Col>
			</div>
			
			)
	}
	}

export default ShowroomPosts;

// ListFilterBox.jsx

import React from 'react';
import { Button } from 'react-bootstrap';
import uuid from 'uuid';


const ListFilterBox = (props) => {
    
		return(
			<div>

    			<form className="filerBox" onSubmit={props.handleSubmit}>
                    <label> 
                        <select className="filerBox styled-select"
                            value={props.value} 
                            onChange={props.handleChange}>
                            { props.options.map((filter) => 
                            	<option 
                            	    value={filter} 
                            	    key={uuid()}> 
                            	    {filter}
                            	</option> 
                            )}
                        </select>
                    </label>
                    <input className="formInput" type="submit" value="Add" />
                </form>    

                <div className="filterButton">
                    { props.filters.map( (filter) => 
                    	<Button 
                    		className="filterButton"
                    	    bsStyle="info" 
                    	    bsSize='xsmall' 
                    	    key={uuid()} 
                    	    onClick={ (e) => { props.handleDelete(filter) }}>
                    	    {filter} x
                    	</Button>
                    )}
                </div>    

			</div>
			)
}

export default ListFilterBox;
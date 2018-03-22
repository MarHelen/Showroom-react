//ListFilterBox.jsx

import React from 'react';
import { Button } from 'react-bootstrap';
import uuid from 'uuid';


const ListFilterBox = (props) => {
    
		return(
			<div>

    			<form onSubmit={props.handleSubmit}>
                    <label>
                        Filter:  
                        <select 
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
                    <input type="submit" value="Add" />
                </form>    

                <div>
                    { props.filters.map( (filter) => 
                    	<Button 
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
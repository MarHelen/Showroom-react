// ListItemContentHourx.jsx

import React from 'react';
import { Col, Glyphicon, Button } from 'react-bootstrap';
import uuid from 'uuid';


class ListItemContentHours  extends React.Component {

	state = {
		visabilityHour: false,

	}

	hideHours = () => {
		this.setState({ visabilityHour: false})
	}

	showHours = () => {
		this.setState({ visabilityHour: true})
	}

	checkTime = (open, close, hour) => {
		//right open
		if ( (hour+1) > this.props.shop[open] && (hour+1) < this.props.shop[close] ){
			return 1;
		}
		//too early
		if ( (hour+1) < this.props.shop[open] ){
			return -1;
		}
		//already closed for today
		return 0;
	}


	buildOpenHtml = (op, days_arr, day) => {
		return (
			<div>
				<Col xs={6} md={4} className="row align-items-start">
				<span className="inline">working hours: </span>
				</Col>
				<Col xs={6} md={8}  className="row align-items-start">
				{ (op !== 0) && <span className="inline green"> Open </span>}
				{ (op === 0) && <span className="inline red"> Closed </span>}
				{this.state.visabilityHour && <Button bsSize="small" 
													  bsClass="glyphButton"
													  onClick={this.hideHours}>
				        			<Glyphicon glyph="triangle-top" />
				      			</Button>}
				{!this.state.visabilityHour && <Button bsSize="small" 
													   bsClass="glyphButton"
													   onClick={this.showHours}>
				        			<Glyphicon glyph="triangle-bottom" />
				      			</Button>}
				{this.state.visabilityHour && days_arr.map(() => 
					<div className="hoursDiv" key={uuid()}>
						<span className="dayName">{days_arr[op % 7][0].slice(4)}:</span>
						<span className="inline"> {this.props.shop[days_arr[op % 7][0]].slice(0,5)} -</span>
						<span className="inline"> {this.props.shop[days_arr[op++ % 7][1]].slice(0,5)}</span>
					</div>
					)}
				</Col>
			</div>
			)
	}

	buildOpen = () => {
		const dataTimezone = 2; //Kyiv time
		let time = new Date();
		// convert to msec
    	// subtract local time zone offset
    	// get UTC time in msec
    	let utc = time.getTime() + (time.getTimezoneOffset() * 60000);
    	// create new Date object for different city
    	// using supplied offset
    	let nd = new Date(utc + (3600000*dataTimezone));
    	let hour = nd.getHours();
    	let curr_day = nd.getDay();
    	let open;
    	let days = [['openSun', 'closeSun'], ['openMon', 'closeMon'], ['openTue', 'closeTue'],
    		['openWed', 'closeWed'], ['openThu', 'closeThu'], ['openFri', 'closeFri'], 
    		['openSat', 'closeSat']];

    	open = this.checkTime(days[curr_day][0], days[curr_day][1], hour)

    	if (open === 0) {
    		if (curr_day === 6){
    			curr_day = 0
    		}
    	}

    	return this.buildOpenHtml(open, days, curr_day);
    	


	}

	render(){
	return ( <div className='shopHoursBlock' >
				
				{this.buildOpen()}
		</div>
		)
}
}

export default ListItemContentHours;
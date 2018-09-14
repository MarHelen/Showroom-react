// ListItemContentHourx.jsx

import React from 'react';
import { Row, Col, Glyphicon, Button } from 'react-bootstrap';
import uuid from 'uuid';


class ListItemContentHours  extends React.Component {

	state = {
		visabilityHour: false,

		days_arr : [['openSun', 'closeSun'], ['openMon', 'closeMon'], ['openTue', 'closeTue'],
    		['openWed', 'closeWed'], ['openThu', 'closeThu'], ['openFri', 'closeFri'], 
    		['openSat', 'closeSat']],

    	open: null,
	}


	checkTime = (open, close, hour) => {
		//right open
		if ( hour >= this.props.shop[open] && hour < this.props.shop[close] ){
			return 1;
		}
		//not yet open
		if ( hour < this.props.shop[open] ){
			return -1;
		}
		//already closed for today
		return 0;
	}


	componentDidMount() {
		//Kyiv time
		const dataTimezone = 3;

		let time = new Date();
		// convert to msec
    	// subtract local time zone offset
    	// get UTC time in msec

    	let utc = time.getTime() + (time.getTimezoneOffset() * 60000);

    	// create new Date object for Kyiv city
    	// using supplied offset
    	let nd = new Date(utc + (dataTimezone * 3600000));
    	console.log('local time', nd);

    	let hour = nd.getHours();

    	let curr_day = nd.getDay();

    	let days = this.state.days_arr;

    	let open = this.checkTime(days[curr_day][0], days[curr_day][1], hour)

    	console.log(open);
    	if (open === 0) {
    		if (curr_day === 6){
    			curr_day = 0
    		}
    	}
    	console.log('days', days[0], days[1], days[2]);
    	//days = days.splice(curr_day,7) + days.splice(curr_day);
    	console.log('days', days[0], days[1], days[2]);
    	console.log('is array?',Array.isArray(this.state.days_arr));
    	this.setState({ 
    		open: open, 
    		days_arr: days
    	});

	}

	render(){

	return (<Row bsClass='shopHoursBlock'>
				
				<Col xs={4} md={4} lg={3} className="row align-items-start">
					<span>working hours: </span>
				</Col>
				{ (this.state.open !== null) &&
					<Col xs={8} md={8} lg={9}  className="row align-items-start">
					{ (this.state.open !== 0) && 
						<span className="inline green bold"> 
							Open 
						</span>}
					{ (this.state.open === 0) && 
						<span className="inline red bold"> 
							Closed 
						</span>}
				
						<Button bsSize="small" 
								bsClass="glyphButton"
								onClick={() => this.setState({ visabilityHour: !this.state.visabilityHour })}>
							{this.state.visabilityHour && 
								<Glyphicon glyph="triangle-top" /> }
							{!this.state.visabilityHour && 
								<Glyphicon glyph="triangle-bottom" />}
						</Button>
				
					{ this.state.visabilityHour && 
						  this.state.days_arr.map( (day) => 
							(<Row className="hoursDiv" key={uuid()}>
								<Col xs={3} md={2} lg={1}>
									<span>
										{day[0].slice(-3)}:
									</span>
								</Col>
												 									
								{(this.props.shop[day[0]] && this.props.shop[day[0]].length > 0)
								? <Col xs={9} md={10} lg={11}>
									<Col xs={3} md={2} lg={1}>
										<span className="inline"> 
											{this.props.shop[day[0]].slice(0,5)}
										</span>										 													
									</Col>
												 									
									<Col xs={1} md={1} lg={1}>
										<span className="center">-</span>
									</Col>
												 													
									<Col xs={5} md={6} lg={9}>
										<span className="inline"> 
											{this.props.shop[day[1]].slice(0,5)}
										</span>
									</Col>
								  </Col>

								:   <Col xs={1} md={1} lg={1}>
										<span className="center">Closed</span>
									</Col>}

							 </Row>)							
							)
					}
					
				</Col>}
			  
			</Row>
		)
	}
}

export default ListItemContentHours;
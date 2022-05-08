import React, { Component } from 'react';


export default class Test extends Component {

	render() {
		return (
			<div className="bar" id="hopper">
				<div>{this.props.myvalue}</div>
			</div>
		);
	}
}
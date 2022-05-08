import React, { Component } from 'react';
import Test from './Test';
import App from './App';

export default class GraceHopperQuoteComponent extends Component {

	render() {
		return (
			<div className="bar" id="hopper">
				<i>
					<p>
						&quot;The most dangerous phrase in the language is, ‘We’ve always done it this way.’&quot;
					</p>
				</i>
				<br />
				&#9;-Admiral Grace Hopper
				<div>{this.props.randomName}</div>
				<Test myvalue={this.props.randomName}/>
				<div>THIS IS JUST A TEST SENTENCE</div>
			</div>
		);
	}
}

Test.defaultProps = {
	myvalue: "This is default value"
}
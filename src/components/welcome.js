import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Welcome extends Component {
	render(){
		return(	
			<div>
			Welcome to redux-thunk simple sign in example
			<br/>
			<Link className="btn btn-sm btn-primary" to="/signin">Sign In</Link>
			</div>
		)
	}
}

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';

class Protected extends Component {
  componentWillMount() {
    this.props.getProtected();
  }

  render() {
    return (
      <div>
	      {this.props.message}
	      <br/>
	      <Link className="btn btn-sm btn-primary" to="/welcome"
	      	onClick={()=>this.props.signOut()}
	      >Sign out</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(Protected);

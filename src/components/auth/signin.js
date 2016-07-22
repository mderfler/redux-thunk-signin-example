import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', password: '' };
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.signinUser({ name:this.state.name, password:this.state.password });
    this.setState({name: '', password: '' });  
  }

  onNameChange(name) {
    this.setState({name});
  }

  onPasswordChange(password) {
    this.setState({password});
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    return (
      <div>
      Sign In - name:me, password:password

      <form onSubmit={this.onFormSubmit.bind(this)}>

        <fieldset className="form-group">
          <input type="text" placeholder="name" value={this.state.name}
            className="form-control"
            onChange={event => this.onNameChange(event.target.value)}
          />
        </fieldset>
        <fieldset className="form-group">
          <input type="text" placeholder="password" value={this.state.password}
            className="form-control" type="password"
            onChange={event => this.onPasswordChange(event.target.value)}
          /> 
        </fieldset>

        {this.renderAlert()}

        <input type="submit" value="Sign in" className="btn btn-primary btn-sm" />
        
      </form>
      
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signinUser: actions.signinUser
   }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);

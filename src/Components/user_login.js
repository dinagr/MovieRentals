
import React, {Component} from 'react';
import '../styles/user_login.css';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login } from "../actions/index";


class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            password: '',
            user: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleChange(event) {
        this.setState({[event.target.id] : event.target.value});      
      }
    
    handleSubmit(event) {
        event.preventDefault();
        this.props.login(this.state.userId, this.state.password);
    }

    render() {
        return (
            <div className="login-container">
               
                {/* <div className='alert alert-danger' role="alert">
                    {this.props.errorMessage}
                </div> */}
                <h1 className="login-header">Login To Movies Rental</h1>
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <input type="text" value={this.state.userId} onChange={this.handleChange} className="form-control" placeholder="User Id number" id="userId"/>
                    </div>
                    <div className="form-group">
                        <input type="password" value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Password" id="password"/>
                    </div>
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ login }, dispatch);
  }
  
  export default connect(null, mapDispatchToProps)(UserLogin);
  
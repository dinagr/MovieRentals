
import React, {Component} from 'react';
import './user_login.css';
import axios from 'axios';

const api = 'http://localhost:52834/api/';

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
          switch(event.target.id){
            case("userId"):
                this.setState({userId: event.target.value});
                break;
            case("password"):
                this.setState({password: event.target.value});
                break;
            default:
                break;
          }
            
        
      }
    
    handleSubmit(event) {
        axios.get(api + 'login/' + this.state.userId + '/' + this.state.password)
        .then(response => {
            this.setState({user: response.data});
            console.log('login  ' + this.state.user);
            this.props.OnLogin(this.state.user);
            })
        .catch(error => {
            console.log('ERROR', error);
         });
        event.preventDefault();
      }

    render() {
        return (
            <div className="login-container">
                <h1 className="login-header">Login To Movies Rental</h1>
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <input type="text" value={this.state.userId} onChange={this.handleChange} className="form-control" placeholder="User Id number" id="userId"/>
                    </div>
                    <div className="form-group">
                        <input type="password" value={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Password" id="password"/>
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        );
    }
}

export default UserLogin;
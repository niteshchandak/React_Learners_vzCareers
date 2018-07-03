import React from 'react';
import {  BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import LoginPage from '../LoginPage/LoginPage';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                emailid: '',
                mobileno:'',
                password: '',
                resume:''

            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        //const { dispatch } = this.props;
        if (user.firstName && user.lastName && user.emailid && user.password && user.mobileno && user.resume) {
            console.log(user);
            axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
      })
        }
    }

    render() {
        const { user, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} />
                        {submitted && !user.firstName &&
                            <div className="help-block">First Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} />
                        {submitted && !user.lastName &&
                            <div className="help-block">Last Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.emailid ? ' has-error' : '')}>
                        <label htmlFor="emailid">E-mail Id</label>
                        <input type="email" className="form-control" name="emailid" value={user.emailid} onChange={this.handleChange} />
                        {submitted && !user.emailid &&
                            <div className="help-block">Email id is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.mobileno ? ' has-error' : '')}>
                        <label htmlFor="mobileno">Mobile Number</label>
                        <input type="number" className="form-control" name="mobileno" value={user.mobileno} onChange={this.handleChange} />
                        {submitted && !user.mobileno &&
                            <div className="help-block">Mobile number is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                        {submitted && !user.password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.resume ? ' has-error' : '')}>
                        <label htmlFor="resume">Resume upload</label>
                        <input type="file" className="form-control" name="resume" value={user.resume} onChange={this.handleChange} />
                        {submitted && !user.resume &&
                            <div className="help-block">Please upload Resume</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>  
                    </div>
                    <div>
                    Already a user? Please click here to login
                    <Link to="/login" className="btn btn-link">Login</Link>
                    </div>
                </form>
            </div>
        );
    }
}

/*function mapStateToProps(state) {
     <Router>
                      <div>   
                     <Link to="/login" className="btn btn-link">login</Link>
                     <Route path="/login" component={LoginPage}/>   
                     </div>                  
                    </Router>
    <Link to="/login" className="btn btn-link">Cancel</Link>
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);*/
export default RegisterPage ;
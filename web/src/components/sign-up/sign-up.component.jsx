import React from 'react';
import './sign-up.styles.scss';
import Axios from 'axios';



class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
        };
    }

    handleSubmit = async (event)=> {
        await Axios.post("http://localhost:3305/register", {
            username: this.state.username,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
        });
    }

    handleChange = event => {
        const { name, value} = event.target;

        this.setState({ [name]: value} );
    };

   

    render() {
        return (
            <div className="sign-up">
                <h1>REGISTER</h1>
                <h2 className="title">I do not have a account</h2>
                <span>Sign up</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <label className="custom-field two">   
                        <input
                            type="text"
                            name="username"
                            onChange={this.handleChange}
                            value={this.username}
                            className='custom-field two'
                            placeholder="&nbsp;"
                            required
                        />
                        <span className="placeholder">Username</span>
                    </label>
                    <label className="custom-field two">
                        <input
                            type="password"
                            name="password"
                            onChange={this.handleChange}
                            value={this.password}
                            className='custom-field two'
                            placeholder="&nbsp;"
                            required
                        />
                        <span className="placeholder">Password</span>
                    </label>
                    <label className="custom-field two">
                        <input
                            type="text"
                            name="firstName"
                            onChange={this.handleChange}
                            value={this.firstName}
                            className='custom-field two'
                            placeholder="&nbsp;"
                            required
                        />
                        <span className="placeholder">First Name</span>
                    </label>
                    <label className="custom-field two">
                        <input
                            type="text"
                            name="lastName"
                            onChange={this.handleChange}
                            value={this.lastName}
                            className='custom-field two'
                            placeholder="&nbsp;"
                            required
                        />
                        <span className="placeholder">Last Name</span>
                    </label>
                    <button type="submit" className='grayscale-decrease'>REGISTER</button>
                </form>
            </div>
        );
    }

}



export default SignUp;
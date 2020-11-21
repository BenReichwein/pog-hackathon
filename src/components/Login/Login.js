import React, { Component } from 'react';
import { db } from '../Firebase/Firebase';
import firebase from "firebase";
import './Login.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            system: 'Login',
            email: '',
            password: '',
            forgotpass: 'forgotpass',
        }
    }
    // Google Authentication
    signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            db.collection("users").doc(result.user.uid).set({
                username: result.user.displayName,
                balance: 200
            }).then(r => window.location.href='/')
        });
    }

    // Registers the user
    RegisterDB = (email, password) => {
        console.log("REGISTER");
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function(result) {
                return db.collection("users").doc(result.user.uid).set({
                    username: email.split('@').shift(),
                    balance: 200,
                }).then(next => {
                    result.user.updateProfile({
                        displayName: email.split('@').shift(),
                    }).then(reload => {
                        window.location.reload();
                    })
                })
            }).catch(function(error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode);
            alert(errorMessage);
        });
    }

    // Logins in the user
    LoginDB = (email, password) => {
        console.log("LOGIN");
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode);
            alert(errorMessage);
        });
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                window.location.href='/';
            } else {
                console.log('user not signed in')
            }
        });
    }

    // Password Reset
    PassReset = (email) => {
        firebase.auth().sendPasswordResetEmail(email).then(r => alert(`Password Reset email sent to: ${email}`))
            .catch(r => alert('This email is not connected to an account'));
    }

    PasswordReset = (evt) => {
        evt.preventDefault();
        let email = this.state.email;
        if (email === '' || !email) {
            alert('Input email address to reset password')
        } else {
            this.PassReset(email);
        }
    }

    changeSystem = () => {
        this.setState({system: "Register"});
        this.setState({forgotpass: "hide"});
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        let email = this.state.email;
        let password = this.state.password;
        if (this.state.system === 'Login') {
            this.LoginDB(email, password);
        } else {
            this.RegisterDB(email, password);
        }
    }

    handleEmailChange = (evt) => {
        this.setState({
            email: evt.target.value,
        });
    }

    handlePassChange = (evt) => {
        this.setState({
            password: evt.target.value,
        });
    }

    render() {
        return (
            <div className="modal">
                <div>
                    <center><h1>POG-HACKATHON 2020</h1></center>
                    <center><h2>Chat rooms by Ben and Ian</h2></center>
                    <br/><br/>
                    <button className={"Oauth-login"} onClick={this.signInWithGoogle}><i className="fab fa-google"/> - Login in with Google</button>
                </div>
                <br/><br/>
                <form onSubmit={this.handleSubmit}>
                    <div className="container">
                        <label className={this.state.system}>Full Name</label>
                        <input id="fn" type={this.state.system} placeholder="Enter Full Name" name="fullname"/>

                        <label>Email</label>
                        <input id="em" type="text" value={this.state.email} onChange={this.handleEmailChange} placeholder="Enter Email" name="email" required/>

                        <label>Password</label>
                        <input id="ps" type="password" value={this.state.password} onChange={this.handlePassChange} placeholder="Enter Password" name="psw" required/>

                        <button className="system" type="submit">{this.state.system}</button>
                    </div>
                </form>
                <div className="container">
                    <button className={this.state.forgotpass} onClick={this.PasswordReset}>Forgot Password?</button>
                    <span className="register">Don't have account? <button type="reset" className="registerbtn" onClick={this.changeSystem}>Register</button></span>
                </div>
            </div>
        )
    }
}

export default Login;
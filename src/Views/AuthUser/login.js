import React from 'react';
import { Heading } from '../../_StylesJS';
import { AiFillFire, AiOutlineUnlock } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { LoginHeader, Form, FormGroup } from './AuthUserStyle';
import { withRouter } from 'react-router-dom';


import firebase from '../../Api/Firebase/firebase';



const Login = (props) => {

    const initialState = { email: '', password: ''};
    
    const [ inputState, setInputState ] = React.useState(initialState);
    const [ loadingState, setLodingState ] = React.useState(false);
    const [ errorsState, setErrorsState ] = React.useState({});

    function handleChange(event) {
        event.persist();

        setInputState(previousValues => ({
            ...previousValues,
            [event.target.name]: event.target.value
        }))
    }

    function validateForm(values) {
        let errors = {};

        // Email Error
        if (!values.email) {
            errors.email = 'Email is required'
        }

        // Password Emmail
        if (!values.password) {
            errors.password = 'Password is required'
        }

        setErrorsState(errors);
        return errors;
    }

    function handleSubmit(event) {
        event.preventDefault();

        const inputErrors = validateForm(inputState); 
        setErrorsState(inputErrors);

        if ( Object.values(inputErrors).length !== 0 ) {
            showErrors();
        } else {
            setLodingState(true);
            setInputState(initialState);
            authenticateUser(); 
        }

    }

    function showErrors() {
        console.log('You have errors');
    };

    function authenticateUser() {
        firebase.login(email, password)
        .then( response => {
            console.log('Form Submitted', response);
            props.history.push('/dashboard');
        })
        .catch( error => { 
            console.error('Firebase Error: ', error);
            setLodingState(false);
        });
    }


    const { email, password } = inputState;
    console.log(errorsState, props);

    return (
        <div style={{width: '100%'}}>
            <LoginHeader>
                <AiFillFire />
                <Heading>Login</Heading>
            </LoginHeader>
            
            <Form onSubmit={handleSubmit}>
                <FormGroup  error={errorsState.email}>
                    <FiUser/>
                    <input
                        onChange={handleChange} 
                        value={email}
                        type="email" 
                        name="email"
                        placeholder={errorsState.email ? errorsState.email : "user email"}
                    />
                </FormGroup>
                <FormGroup error={errorsState.password}>
                    <AiOutlineUnlock  />
                    <input
                        onChange={handleChange} 
                        value={password}
                        type="password" 
                        name="password"
                        placeholder={errorsState.password ? errorsState.password : "user password"}
                    />
                </FormGroup>
                <button type="submit" name="" id="" disabled={loadingState} >{loadingState ? "Loading" : "Login"}</button>
            </Form>
        </div>
    );
}

export default withRouter(Login);
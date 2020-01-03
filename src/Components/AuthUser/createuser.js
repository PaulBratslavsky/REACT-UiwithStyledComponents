import React from 'react';
import { Heading, Spacer } from '../../stylesJS';
import { AiFillFire, AiOutlineUnlock, AiOutlineMail } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { LoginHeader, Form, FormGroup, Error } from '../../stylesJS/AuthUser';
import { withRouter } from 'react-router-dom';


import firebase from '../../Api/Firebase/firebase';







const CreateUser = (props) => {

    const initialState = { name: '', email: '', password: '' };
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

        // Name Error
        if (!values.name) {
            errors.name = 'Name is required'
        }

        // Email Error
        if (!values.email) {
            errors.email = 'Email is required'
        }

        // Password Error
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
            createUser(); 
        }

    }

    function showErrors() {
        console.log('You have errors');
    };

    function createUser() {
        firebase.createAccount(name, email, password)
        .then( response => {
            console.log('Form Submitted', response);
            props.history.push('/dashboard');

        })
        .catch( error => {
            console.error('Firebase Error: ', error);
            setLodingState(false); 
        });
    }


    const { name, email, password } = inputState;
    console.log(errorsState);

    

    return (
        <div style={{width: '100%'}}>
            <Spacer />
            <LoginHeader>
                <AiFillFire />
                <Heading>Create Account</Heading>
            </LoginHeader>
            
            <Form onSubmit={handleSubmit}>
                <FormGroup error={errorsState.name}>
                    <FiUser/>
                    <input 
                        onChange={handleChange}
                        value={name}
                        type="name" 
                        name="name" 
                        placeholder={errorsState.name ? errorsState.name : "user name"}
                        autoComplete="off"
                    />
                </FormGroup>
                <FormGroup error={errorsState.email}>
                    <AiOutlineMail/>
                    <input 
                        onChange={handleChange}
                        value={email}
                        type="email" 
                        name="email" 
                        placeholder={errorsState.email ? errorsState.email : "user email"}
                        autoComplete="off"    
                    />
                </FormGroup>
                <FormGroup error={errorsState.password}>
                    <AiOutlineUnlock/>
                        <input 
                            onChange={handleChange}
                            value={password}
                            type="password" 
                            name="password" 
                            placeholder={errorsState.password ? errorsState.password : "user password"}
                        />
                </FormGroup>
                <button type="submit" name="" id="" disabled={loadingState}>{loadingState ? "Loading" : "Create Account"}</button>
            </Form>
        </div>
    );
}

export default withRouter(CreateUser);
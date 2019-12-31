import React from 'react';
import { Heading } from '../../stylesJS';
import styled from 'styled-components';


const Form = styled.form`
    width: 100%;

    input,
    button {
        display: block;
        color: white;
        width: 100%;
        margin-bottom: 1rem;
        font-size: 1.8rem;
        padding: 0.275rem .75rem ;
        background: #757396;
        border-radius: 5px;
        border: none;
    }

    input::placeholder { 
        color: #14132d;
    }

    button {
        background: #e0436f;
        color: #14132d;
        border: 2px #e0436f solid;
    }

    button:hover {
        background: #14132d;
        color: #e0436f;
    }
`;

const Login = () => {
    return (
        <div style={{width: '100%'}}>
            <Form>
                <input type="email" name="" id="" placeholder="user email"/>
                <input type="password" name="" id="" placeholder="user password"/>
                <button type="submit" name="" id="">Login</button>
            </Form>
        </div>
    );
}

export default Login;
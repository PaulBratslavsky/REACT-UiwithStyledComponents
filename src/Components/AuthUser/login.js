import React from 'react';
import { Heading } from '../../stylesJS';
import { AiFillFire, AiOutlineUnlock } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { LoginHeader, Form, FormGroup } from '../../stylesJS/AuthUser';





const Login = () => {
    return (
        <div style={{width: '100%'}}>
            <LoginHeader>
                <AiFillFire />
                <Heading>Login</Heading>
            </LoginHeader>
            
            <Form>
                <FormGroup>
                    <FiUser/><input type="email" name="" id="" placeholder="user email"/>
                </FormGroup>
                <FormGroup>
                    <AiOutlineUnlock  /><input type="password" name="" id="" placeholder="user password"/>
                </FormGroup>
                <button type="submit" name="" id="">Login</button>
            </Form>
        </div>
    );
}

export default Login;
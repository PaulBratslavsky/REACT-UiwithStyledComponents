import React from 'react';
import { Heading } from '../../stylesJS';
import { AiFillFire, AiOutlineUnlock, AiOutlineMail } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { LoginHeader, Form, FormGroup } from '../../stylesJS/AuthUser';





const CreateUser = () => {
    return (
        <div style={{width: '100%'}}>
            <LoginHeader>
                <AiFillFire />
                <Heading>Create Account</Heading>
            </LoginHeader>
            
            <Form>
                <FormGroup>
                    <FiUser/><input type="name" name="" id="" placeholder="user name"/>
                </FormGroup>
                <FormGroup>
                    <AiOutlineMail/><input type="email" name="" id="" placeholder="user email"/>
                </FormGroup>
                <FormGroup>
                    <AiOutlineUnlock  /><input type="password" name="" id="" placeholder="user password"/>
                </FormGroup>
                <button type="submit" name="" id="">Create Account</button>
            </Form>
        </div>
    );
}

export default CreateUser;
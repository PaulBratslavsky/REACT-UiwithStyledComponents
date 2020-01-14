import React from 'react';
import { SpanMute, Spacer } from '../../_StylesJS';
import { FiLink } from "react-icons/fi";
import { AddHeader, Form, FormGroup, Error } from '../../_StylesJS/Add';
import { withRouter } from 'react-router-dom';


import firebase from '../../Api/Firebase/firebase';







const AddForm = (props) => {

    const initialState = { title: '', description: '', link: '', tags: '' };
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

        // Title Error
        if (!values.title) {
            errors.title = 'Title is required'
        }

        // Description Error
        if (!values.description) {
            errors.description = 'Description is required'
        }

        // Link Error
        if (!values.link) {
            errors.link = 'Link is required'
        }

        // Tags Error
        if (!values.tags) {
            errors.tags = 'Tags are required'
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
            AddLink(); 
        }

    }

    function showErrors() {
        console.log('You have errors');
    };

    function AddLink() {
        
        console.log('Add Link Clicked');
    }


    const { title, link, description, tags } = inputState;
    console.log(errorsState);

    

    return (
        <div style={{width: '100%'}}>
            <Spacer />
            <AddHeader>
                <FiLink />
                <h2>Add Link</h2>
            </AddHeader>
            
            <Form onSubmit={handleSubmit}>
                <FormGroup error={errorsState.title}>
                    <input 
                        onChange={handleChange}
                        value={title}
                        type="text" 
                        name="title" 
                        placeholder={errorsState.title? errorsState.title : "title"}
                        autoComplete="off"
                    />
                </FormGroup>
                <FormGroup error={errorsState.link}>
                    <input 
                        onChange={handleChange}
                        value={link}
                        type="text" 
                        name="link" 
                        placeholder={errorsState.link ? errorsState.link : "link"}
                        autoComplete="off"    
                    />
                </FormGroup>
                <FormGroup error={errorsState.description}>
                    <textarea 
                        onChange={handleChange}
                        value={description}
                        name="description" 
                        placeholder={errorsState.description ? errorsState.description : "description"}
                        autoComplete="off"    
                    ></textarea>
                </FormGroup>
                <FormGroup error={errorsState.tags}>
                        <input 
                            onChange={handleChange}
                            value={tags}
                            type="text" 
                            name="tags" 
                            placeholder={errorsState.tags ? errorsState.tags : "tags"}
                        />
                        <SpanMute>* seperate tags with commas</SpanMute>
                </FormGroup>
                <button type="submit" name="" id="" disabled={loadingState}>{loadingState ? "Loading" : "Add Link"}</button>
            </Form>
        </div>
    );
}

export default withRouter(AddForm);
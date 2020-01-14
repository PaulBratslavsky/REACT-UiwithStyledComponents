import styled from 'styled-components';

const AddHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
        font-size: 2rem;
        color: #fefdff;
        font-weight: 300;
    }

    svg {
        font-size: 2rem;
        color: #e0436f;
        margin-right: 0.5rem;
    }

    margin-bottom: 3rem;
`;



const Form = styled.form`
    width: 100%;

    button {
        display: inline;
        width: 100%;
        margin-bottom: 1rem;
        margin-top: 2rem;
        font-size: 1.8rem;
        padding: 0.275rem .75rem ;
        border: none;
        border-radius: 5px;
        background: #e0436f;
        color: #14132d;
        border: 2px #e0436f solid;

        &:hover,
        &:focus {
        background: #14132d;
        color: #e0436f;
    }

    }
    
`;

const FormGroup = styled.div`
    position: relative;

    input {
        text-align: center;
        display: inline;
        color: #14dbf4;
        outline: none;
        width: 100%;
        font-size: 1.8rem;
        padding: 0.275rem .75rem ;
        background: none;
        border: 2px #3d3a68 solid;
        border-radius: 5px;
        transition: 0.5s ease-in-out;
        margin-bottom: 1rem;

        &:hover,
        &:focus {
            border-color: #e0436f;
        }
        

    }

    input::placeholder { 
        font-size: 1.6rem;
        color: ${props => props.error ? "#e0436f" : "#3d3a68"};
        opacity: ${props => props.error ? 0.7 : 1 };
        
    }

    textarea {
        border: 2px #3d3a68 solid;
        border-radius: 5px;
        background: none;
        font-size: 1.6rem;
        color: #14dbf4;
        resize: none;
        width: 100%;
        height: 175px;
        overflow: auto;
        margin-bottom: 1rem;
        outline: none;
        transition: 0.5s ease-in-out;


        &:hover,
        &:focus {
            border-color: #e0436f;
        }
    }

    textarea::placeholder { 
        text-align: center;
        font-size: 1.6rem;
        color: ${props => props.error ? "#e0436f" : "#3d3a68"};
        opacity: ${props => props.error ? 0.7 : 1 };
        
    }
`;

const Error = styled.p`
    font-size: 1.8rem;
    padding: 0.275rem .75rem ;
    border: none;
    border-radius: 5px;
    background: #e0436f;
    color: #14132d;
    border: 2px #e0436f solid;
`;

export { AddHeader, Form, FormGroup, Error };

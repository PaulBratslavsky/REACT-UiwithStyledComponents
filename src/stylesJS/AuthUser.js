import styled from 'styled-components';

const LoginHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    svg {
        font-size: 8rem;
        color: #e0436f;
    }

    margin-bottom: 3rem;
`;



const Form = styled.form`
    width: 100%;

    button {
        display: inline;
        width: 100%;
        margin-bottom: 1rem;
        margin-top: 3rem;
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
        width: 100%;
        font-size: 1.8rem;
        padding: 0.275rem .75rem ;
        background: none;
        border: none;
        border-bottom: 2px #3d3a68 solid;
        transition: 0.5s ease-in-out;
        margin-bottom: 1rem;

    }

    input::placeholder { 
        font-size: 1.6rem;
        color: ${props => props.error ? "#e0436f" : "#3d3a68"};
        opacity: ${props => props.error ? 0.7 : 1 };
        
    }

    &:hover > svg,
    &:focus > svg {
        color: #e0436f;
    }

    svg {
        position: absolute;
        top: calc(50% - 22.5px);
        left: 0;
        display: inline;
        font-size: 1.8rem;
        color: #3d3a68;
        transition: 0.5s ease-in-out;

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

export { LoginHeader, Form, FormGroup, Error };

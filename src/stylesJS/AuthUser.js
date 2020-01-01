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

        &:hover {
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
        margin-bottom: 1rem;
        font-size: 1.8rem;
        padding: 0.275rem .75rem ;
        background: none;
        border: none;
        border-bottom: 2px #3d3a68 solid;
        transition: 0.5s ease-in-out;

    }

    input::placeholder { 
        color: #3d3a68;
    }

    &:hover > svg {
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

export { LoginHeader, Form, FormGroup };

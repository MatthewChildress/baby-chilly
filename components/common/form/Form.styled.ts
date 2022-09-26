import styled from 'styled-components';

export const FormContainer = styled.div`
    padding: 2rem;
    background-color: hsl(40.6 96.1% 40.4%);
    border-radius: 1em;
    box-shadow: 0 0 0.1em 0 rgb(0,0,0);

`;

export const FormBox = styled.div`
    padding: 2rem;

`

export const InputContainer = styled.div`
    padding-top: 1.2rem;
    display: flex;
    flex-direction:column;
    gap: 1rem;
    align-items: center;
`

export const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`

export const FormButton = styled.button`
    padding: 1rem 2rem;
    border: none;
    background-color: hsl(45.4 93.4% 47.5%);
    box-shadow: 0 0 0.1rem 0 hsl(0 0% 0%);
    border-radius: 0.5em;
    color: hsl(31.8 81% 28.8%);
    font-weight: 800;
    cursor: pointer;
`

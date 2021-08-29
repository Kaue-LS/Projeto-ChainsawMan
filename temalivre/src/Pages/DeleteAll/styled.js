import styled from "styled-components";
import {Paragraph} from '../../Components/Paragraph/styled'

export const Text= styled(Paragraph)`
    text-align:center;
    background-color: whitesmoke;
`;

export const ButtonArea =styled.div`
    display:flex;
    justify-content: space-evenly;
    padding:1rem 0;
`;
export const Area =styled.div`
   
`;
export const ButtonDelete =styled.button`
    background-color: red;
    color:white;
    font-size:1.2rem;
    padding:0.4rem 1rem;
    border-radius:0.5rem;
    border:none;
    box-shadow:rgba(0,0,0,0.19) 0px 10px 20px, rgba(0,0,0,0.23) 0px 6px 6px;
    cursor:pointer;
    transition:200ms;

    &:hover{
        background-color: darkred;
    }
`;

export const ButtonCancel =styled.button`
background-color: greenyellow;
    font-size:1.2rem;
    padding:0.4rem 1rem;
    border-radius:0.5rem;
    border:none;
    box-shadow:rgba(0,0,0,0.19) 0px 10px 20px, rgba(0,0,0,0.23) 0px 6px 6px;
    cursor:pointer;
    transition:200ms;

    &:hover{
        background-color: darkgreen;
    }
`;


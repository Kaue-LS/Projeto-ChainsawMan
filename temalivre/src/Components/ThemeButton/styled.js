import styled from 'styled-components';

export const ThemeButton =styled.i`
    background-color: black;
    color:white;
    padding:0.6rem;
    border-radius: 50%;
    cursor: pointer;
    position: fixed;
    bottom: calc(100vh- 90vh);    
    right: 2vw;
    box-shadow: rgba(0,0,0,0.35) 0px 5px 15px;
    transform: 200ms;


    &:hover{
        background-color: #041f26;
    }
`;
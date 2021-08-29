import styled from "styled-components";
import '../font-to-a-chainsaw/Font.scss'

export const CardArea=styled.div`
display: flex;
background:linear-gradient( aqua ,black);
border:10px ridge antiquewhite;
 margin: 1rem 1rem;
 padding: 0.8rem 0.5rem;
align-items: center;
justify-content: center;
flex-wrap: wrap;
height: 20rem;
width: 15rem;
 
`;

export const CardImage=styled.img`
    max-width: 100%;
    height:15rem ;
    width: 15rem;
    border:0.3rem solid gray;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    &:hover{
        border-color: yellow;
        

    }

`;
export const Name=styled.h3`
    letter-spacing: 10px;
    font-family: Chainsaw;
    color:#FFD700;
    ;
    
    font-size: 2.5rem;

  
`;
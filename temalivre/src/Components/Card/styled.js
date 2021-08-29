import styled from "styled-components";
import '../font-to-a-chainsaw/Font.scss'

export const CardArea=styled.div`
display: flex;
background:linear-gradient( #ADFF2F 80% ,black 20%);
border:10px ridge #DAA520;
 margin: 1rem 1rem;
 padding: 0.8rem 0.5rem;
align-items: center;
justify-content: center;
flex-wrap: wrap;
height: auto;
width: 15rem;
 
`;

export const CardImage=styled.img`
    max-width: 100%;
    height:15rem ;
    width: 15rem;
    border:0.2rem solid black;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  

`;
export const Name=styled.h3`
text-align: center;
    letter-spacing: 5px;
    font-family: Chainsaw;
    color:#FFD700;
    
    
    font-size: 2.5rem;

  
`;
export const Name2=styled.h3`
text-align: center;
    letter-spacing: 5px;
    font-family: Chainsaw;
    color:#FFD700;
    
    
    font-size: 1.5rem;

  
`;

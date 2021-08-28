import styled from "styled-components";

export const CardArea=styled.div`
display: flex;
background:linear-gradient( #8FBC8F,#1C1C1C );
 margin: 1rem;
 padding: 0.8rem;
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

`;
export const Name=styled.h3`
    color:#e79a12;
    text-align: center;
    font-weight: bolder;
    font-size: 1.8em;
`;
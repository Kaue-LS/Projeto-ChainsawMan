import styled from "styled-components";
import '../../Components/font-to-a-chainsaw/Font.scss'
export const FormImg= styled.div`
border:10px ridge orange;
border-radius: 10px;
width: 80vw;

display: flex;

flex-direction: column;
    justify-content: center;
    align-items: center;
  
   
   `;
export const Form= styled.div`
    width: 80vw;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
 

`;
export const Character= styled.div`
width: 23rem;
display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  @media(max-width:800px){
      display: flex;
      flex-direction:column;
      justify-content: center;
    align-items: center;
    width: 50%;
  
  
  }
`;
export const Label = styled.h3`
    font-family: Chainsaw;
    font-size: 6rem;
    letter-spacing: 5px;
    color:	#FDD10f;
`;
export const Desc= styled.div`
background-color: #ffffffba;
border: 5px ridge;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;

`;
export const Image= styled.img`
    margin: 1rem;
    width: 15rem;
    height: 15rem;
    border:5px solid ;
    border-radius: 10px;

`;
export const Info = styled.h3`
    padding: 5px 20px;
    font-size: 2rem;
    @media(max-width:800px){
    font-size: 1.5rem;
  
  
  }
`;
export const DeleteButton =styled.button`
    background-color: red;
    color:white;
    margin:1rem 2rem;
    font-size:1.2rem;
    padding:0.4rem 2rem;

    border-radius:0.5rem;
    border:none;
    box-shadow:rgba(0,0,0,0.19) 0px 10px 20px, rgba(0,0,0,0.23) 0px 6px 6px;
    cursor:pointer;
    transition:200ms;

    &:hover{
        background-color: darkred;
    }
`;
export const EditButton = styled.button`
background-color: green;
    color:white;
    margin:1rem 2rem;
    font-size:1.2rem;
    padding:0.4rem 2rem;
    border-radius:0.5rem;
    border:none;
    box-shadow:rgba(0,0,0,0.19) 0px 10px 20px, rgba(0,0,0,0.23) 0px 6px 6px;
    cursor:pointer;
    transition:200ms;

    &:hover{
        background-color: darkgreen;
    }
`;
export const ShowButton = styled.button`
background:none;
font-size: 2rem;
&:hover{
    background-color: white;
}
`;
export const Buttons= styled.div`
display: flex;
margin:0 2rem;
@media(max-width:800px){
    flex-direction:column;
      justify-content: center;
    align-items: center;
    width: 70%;
    
}

`;
export const Contract= styled.p`
font-size: 1.6rem;
width:75%;
word-spacing:2px;
display: flex;
flex-direction: column;
@media(max-width:800px){
    font-size: 1.5rem;
  
  
  }

`;
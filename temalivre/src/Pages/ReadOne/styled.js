import styled from "styled-components";
import '../../Components/font-to-a-chainsaw/Font.scss'
export const FormImg= styled.div`
border:10px ridge;
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
   border:5px solid;
  
  
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
    width: 10rem;

`;
export const Info = styled.p`
    padding: 5px 20px;
    font-size: 2rem;
`;
export const DeleteButton = styled.button`
background-color: red;
width: 100%;
padding: 10px 90px;
font-size: 2rem;
border-color: darkred;
`;
export const EditButton = styled.button`
background-color: green;
width: 100%;
padding: 10px 90px;
font-size: 2rem;
border-color: darkgreen;

`;
export const ShowButton = styled.button`
background:none;
border: none;
text-decoration: black;
font-size: 2rem;
`;
export const Buttons= styled.div`
display: flex;
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


`;
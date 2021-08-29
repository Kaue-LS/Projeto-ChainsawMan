import styled from "styled-components";

export const Area= styled.div`
    margin: 2rem 0rem;
    padding:2rem 2rem;
      background-color: gray;
      border:0.5rem ridge orange;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.85) 0px 5px 15px;

`;
export const ImgArea=styled.div`
    
    display: flex;
    justify-content: center;
    align-items:center;
`;
export const Img= styled.img`
    border: 5px solid aqua;
    text-align: center;
    border-radius: 10%;
    justify-content: center;
    align-self: center;
    width: 50%;
`;
export const Icon= styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

    a{
        padding: 5px 2rem;
        color: #800000;       
   
        i{
            font-size: 45px;
            transition:200ms;
            &:hover{
                color: yellow;
                font-size: 50px;
        }
        }
    }


`;

import styled from "styled-components";


export const Area= styled.div`
  border: gray 10px solid;
  border-radius: 24px;
  box-shadow: black 0px 0px 20px;
`;
export const Form = styled.form`
  padding: 1rem 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Label = styled.label `
  font-size: 1.3em;
`;

export const Input = styled.input`
  padding: 0.2rem;
  font-size: 1.2em;
  margin-bottom: 1rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const Select = styled.select`
  padding: 0.2rem;
  font-size: 1.2em;
  margin-bottom: 0.8rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const Button = styled.button`
  background-color: #e76a24;
  color: #ffffff;
  font-size: 1.2em;
  padding: 0.4rem;
  width: 50%;
  position: relative;
  left: 25%;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: 200ms;

  &:hover {
    background-color: #b15019;
  }
`;
export const Plus = styled.button`
  background-color: #e76a24;
  color: #ffffff;
  font-size: 1.2em;
  padding: 0.4rem;
  margin: 1rem 0 2rem 0;
  width: 50%;
  position: relative;
  left: 25%;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 0.5rem;
  border: none;

  

  &:hover {
    background-color: #b15019;
  }
`;
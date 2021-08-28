import styled from "styled-components";
import { Link } from "react-router-dom";
export const CardArea= styled.div`
    background-color: grey;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
`;

export const Linked= styled(Link)`
    text-decoration: none;
`;
export const Empty= styled.h3`
    color:#e76e24;
    background-color: #ffffff;
    padding: 0.5rem;
    margin-top: 0.5rem;
    border-radius: 0.5rem;

`;
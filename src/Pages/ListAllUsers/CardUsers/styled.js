import styled from "styled-components";

export const CardUser = styled.li`
    display: flex;
    border: var(--primary-color-Focus) solid 2px;
    border-radius: 5rem;
    margin: 1rem 0;
    padding: 1rem;
    gap: 1rem;
`

export const  ImgUser = styled.img`
    border: var(--primary-color-Focus) solid 2px;
    border-radius: 5rem;
    width: 10%;
    height: 10%;
`

export const DivAllUsers = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: auto;
    gap: 0.5rem;
`

export const PStyeld = styled.p`
    font-size: var(--tittle2-Size);
    font-weight: var(--tittle2-Weight);
`
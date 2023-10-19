import styled from "styled-components";

export const SectionFindAUser = styled.section`
    display: flex;
    justify-content: left;
    margin: 1rem 1rem;
    gap: 1rem;
`

export const DivFindAUser = styled.div`
    background-color: var(--grey-color0);
    border: var(--primary-color-Focus) solid 2px;
    border-radius: 5rem;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`

export const InputType = styled.input`
    margin: 0.5rem 0;
    padding: 1rem;
    border: var(--primary-color-Focus) solid 2px;
    border-radius: 5rem;
`

export const ButtonFind = styled.button`
    background-color: var(--primary-color);
    font-weight: bold;
    padding: 0.5rem;
    border: var(--grey-color4) solid 2px;
    border-radius: 5rem;
    transition: 300ms;

    &:hover {
        background-color: var(--primary-color-Focus); 
    }  
`

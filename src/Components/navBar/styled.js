import styled from "styled-components";

export const NavBarButtons = styled.div`
    display: flex;
    justify-content: space-between;
    border: var(--primary-color-Focus) solid 2px;
    border-radius: 5rem;
    padding: 2rem;
    margin: 1rem 1rem;
    background-color: var(--grey-color0);
    align-items: center;
`

export const StyledImg = styled.img`
    width: 15rem;
    height: 3rem;
`

export const DivButton = styled.div`
    display: flex;
    gap: 1rem;
`

export const ButtonsNavBar = styled.button`
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
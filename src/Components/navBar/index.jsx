import Logo from "../../assets/Logo.png"
import { Link } from "react-router-dom"
import { NavBarButtons, StyledImg, ButtonsNavBar, DivButton  } from "./styled"

export const NavBar = () => {
    return (
        <NavBarButtons>
            <DivButton>
                <Link to="/allusers">
                    <ButtonsNavBar>Lista Tudo</ButtonsNavBar>
                </Link>
                <Link to="/user">
                    <ButtonsNavBar>Lista Especifico</ButtonsNavBar>
                </Link>
                <Link to="/newuser">
                    <ButtonsNavBar>Cadastrar</ButtonsNavBar>
                </Link>
                <Link to="/alteruser">
                    <ButtonsNavBar>Alterar</ButtonsNavBar>
                </Link>
                <Link to="/deleteuser">
                    <ButtonsNavBar>Deletar</ButtonsNavBar>
                </Link>
            </DivButton>
            <StyledImg  src={Logo} />
        </NavBarButtons>
    )
}
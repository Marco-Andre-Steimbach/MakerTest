import { NavBar } from "../../Components/navBar"
import { SectionHome, H3Home } from "./styled"

export const Home = () => {
    return (
        <div>
            <NavBar />
            <SectionHome>
                <H3Home>Selecione o que deseja fazer!</H3Home>
            </SectionHome>
        </div>

    )
}
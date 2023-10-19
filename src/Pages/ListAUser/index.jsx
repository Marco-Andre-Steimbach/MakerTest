import { NavBar } from "../../Components/navBar";
import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../Providers/UserContext";
import { SectionFindAUser, DivFindAUser, InputType, ButtonFind, DivUser, ImgUser, DivAllUsers, PStyeld } from "./styled"

export const ListAUsers = () => {
    const { handleFindAUser } = useContext(UsersContext);
    const [userId, setUserId] = useState('');
    const [userData, setUserData] = useState(null);

    const handleSearch = async () => {
        try {
            const data = await handleFindAUser(userId);
            setUserData(data);
        } catch (error) {
            console.log("Erro ao buscar usuário:", error);
        }
    }

    return (
        <div>
            <NavBar />
            <SectionFindAUser>
                <DivFindAUser>
                    <label>
                        <p>Digite seu ID</p>
                        <InputType placeholder="Digite o ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
                    </label>
                    <ButtonFind onClick={handleSearch}>Buscar</ButtonFind>
                </DivFindAUser>
                {userData && (
                    <DivUser>
                        {userData.avatar && <ImgUser src={userData.avatar} />}
                        <DivAllUsers>
                            <PStyeld>Id: {userData.id}</PStyeld>
                            <PStyeld>Nome: {userData.nome}</PStyeld>
                            <PStyeld>Data de Registro: {userData.dh_registro}</PStyeld>
                        </DivAllUsers>
                    </DivUser>
                )}
            </SectionFindAUser>
        </div>
    );
};

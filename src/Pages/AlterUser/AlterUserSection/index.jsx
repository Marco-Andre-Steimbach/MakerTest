import { useContext, useState } from "react";
import { UsersContext } from "../../../Providers/UserContext";
import { SectionFindAUser, DivFindAUser, InputType, ButtonFind, DivUser, ImgUser, DivAllUsers, PStyeld } from "./styled"
import { UserNoFoundModal } from "../ModalNoUser"

export const AlterUserSection = () => {
    const { handleEditUser } = useContext(UsersContext);
    const [userId, setUserId] = useState('');
    const [userName, setuserName] = useState('');
    const [userData, setUserData] = useState(null);
    const [userNotFound, setUserNotFound] = useState(false);

    const handleSearch = async () => {
        try {
            const data = await handleEditUser(userId, userName);
            if (data) {
                setUserData(data);
                setUserNotFound(false);
            } else {
                setUserData(null);
                setUserNotFound(true);
            }
        } catch (error) {
            console.log("Erro ao buscar usuário:", error);
            setUserNotFound(true);
        }
    }

    console.log(userData)
    return (
        <div>
            <SectionFindAUser>
                <DivFindAUser>
                    <label>
                        <p>Digite seu ID</p>
                        <InputType placeholder="Digite o ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
                    </label>
                    <label>
                        <p>Digite o novo Nome</p>
                        <InputType placeholder="Digete o Novo Nome" value={userName} onChange={(e) => setuserName(e.target.value)} />
                    </label>
                    <ButtonFind onClick={handleSearch}>Buscar</ButtonFind>
                </DivFindAUser>
                {userData ? (
                    <DivUser>
                        {userData.avatar && <ImgUser src={userData.avatar} />}
                        <DivAllUsers>
                            <PStyeld>Id: {userData.id}</PStyeld>
                            <PStyeld>Nome: {userData.nome}</PStyeld>
                            <PStyeld>Data de Registro: {userData.dh_registro}</PStyeld>
                        </DivAllUsers>
                    </DivUser>
                ) : userNotFound && <UserNoFoundModal />}
            </SectionFindAUser>
        </div>
    );
};

import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../../Providers/UserContext";
import { DivFindAUser, InputType, ButtonFind, SectionFindAUser, DivUser, ImgUser, DivAllUsers, PStyeld } from "./styled"
import noImgUser from "../../../assets/noImgUser.png"

export const NewUserSecionCard = () => {
    const { handleAddNewUser } = useContext(UsersContext);
    const [userName, setUserName] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [userData, setUserData] = useState(null);

    const handleAdd = async () => {
        try {
            const data = await handleAddNewUser(userName, userAvatar)
            setUserName('');
            setUserAvatar('');
            setUserData(data)
        } catch (error) {
            console.log("Erro ao buscar usuário:", error);
        }
    }

    console.log(userData)

    return (
        <SectionFindAUser>
            <DivFindAUser>
                <label>
                    <p>Digite o Nome Desejado</p>
                    <InputType placeholder="Digite o Nome" value={userName} onChange={(e) => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Digite o Link do Avatar</p>
                    <InputType placeholder="Digite o Avatar (URL)" value={userAvatar} onChange={(e) => setUserAvatar(e.target.value)} />
                </label>
                <ButtonFind onClick={handleAdd}>Cadastrar</ButtonFind>
            </DivFindAUser>
            {userData && (
                <DivUser>
                    {userData.avatar ? (
                        <ImgUser src={userData.avatar} />
                    ) : (
                        <ImgUser src={noImgUser} />
                    )}
                    <DivAllUsers>
                        <PStyeld>Id: {userData.id}</PStyeld>
                        <PStyeld>Nome: {userData.nome}</PStyeld>
                        <PStyeld>Data de Registro: {userData.dh_registro}</PStyeld>
                    </DivAllUsers>
                </DivUser>
            )}
        </SectionFindAUser>
    );
};

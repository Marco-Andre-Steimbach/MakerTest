import { useContext, useState } from "react";
import { UsersContext } from "../../../Providers/UserContext";
import { SectionFindAUser, DivFindAUser, InputType, ButtonFind } from "./styled";
import { UserDeletedCard } from "./UserDeletedSection";
import { UserNoDeletedCard } from "./UserNotFound";

export const DeleteSectionUser = () => {
    const { handleDeleteAUser } = useContext(UsersContext);
    const [userId, setUserId] = useState('');
    const [isDeleted, setIsDeleted] = useState(null);

    const handleDel = async () => {
        try {
            const response = await handleDeleteAUser(userId);
            if (response) {
                setIsDeleted(true);
            } else {
                setIsDeleted(false);
            }
        } catch (error) {
            setIsDeleted(false);
            console.error(error);
        }
    };
    console.log(isDeleted);

    return (
        <SectionFindAUser>
            <DivFindAUser>
                <label>
                    <p>Digite o ID do usuário que deseja deletar</p>
                    <InputType placeholder="Digite o ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
                </label>
                <ButtonFind onClick={handleDel}>Buscar</ButtonFind>
            </DivFindAUser>
            {isDeleted === true && <UserDeletedCard />}
            {isDeleted === false && <UserNoDeletedCard />}
            {isDeleted === null && <></>}
        </SectionFindAUser>
    );
};

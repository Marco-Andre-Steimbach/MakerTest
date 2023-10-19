import { CardUser, ImgUser, DivAllUsers, PStyeld } from "./styled"
import noImgUser from "../../../assets/noImgUser.png"

export const CardUsers = ({ avatar, id, nome, registro }) => {
    return (
        <CardUser>
            {avatar ? (
                        <ImgUser src={avatar} />
                    ) : (
                        <ImgUser src={noImgUser} />
                    )}
            <DivAllUsers>
                <PStyeld>Id: {id}</PStyeld>
                <PStyeld>Nome: {nome}</PStyeld>
                <PStyeld>Data de Registro: {registro}</PStyeld>
            </DivAllUsers>
        </CardUser>
    );
};

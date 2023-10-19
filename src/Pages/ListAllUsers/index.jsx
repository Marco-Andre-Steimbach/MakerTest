import { NavBar } from "../../Components/navBar";
import { useContext, useEffect, useState } from "react";
import { CardUsers } from "./CardUsers"
import { UsersContext } from "../../Providers/UserContext";
import { SectionListAll } from "./styled"

export const ListAllUsers = () => {

    const { usersList } = useContext(UsersContext)

    return (
        <div>
            <NavBar />
            <SectionListAll>
                <ul>
                    {usersList.map((user) => (
                        <CardUsers avatar={user.avatar} id={user.id} nome={user.nome} registro={user.dh_registro} />
                    ))}
                </ul>
            </SectionListAll>
        </div>
    );
};

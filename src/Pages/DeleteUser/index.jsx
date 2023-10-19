import { NavBar } from "../../Components/navBar";
import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../Providers/UserContext";
import { DeleteSectionUser } from "./DeleteUserSection"

export const DeleteUser = () => {


    return (
        <div>
            <NavBar />
            <DeleteSectionUser/>
        </div>
    );
};

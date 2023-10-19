import { NavBar } from "../../Components/navBar";
import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../Providers/UserContext";
import { NewUserSecionCard } from "./NewUserSection"

export const NewUser = () => {


    return (
        <div>
            <NavBar />
            <NewUserSecionCard />
        </div>
    );
};

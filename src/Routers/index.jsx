import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { ListAllUsers } from "../Pages/ListAllUsers";
import { UsersProviders } from "../Providers/UserContext"
import { ListAUsers } from "../Pages/ListAUser"
import { NewUser } from "../Pages/NewUser";
import { AlterUser } from "../Pages/AlterUser";
import { DeleteUser } from "../Pages/DeleteUser";

export const RouterMain = () => {

    return (
        <UsersProviders>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/allusers" element={<ListAllUsers />} />
                <Route path="/user" element={<ListAUsers />} />
                <Route path="/newuser" element={<NewUser />} />
                <Route path="/alteruser" element={<AlterUser />} />
                <Route path="/deleteuser" element={<DeleteUser />} />
            </Routes>
        </UsersProviders>
    )
}
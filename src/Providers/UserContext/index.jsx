import { createContext, useEffect, useState } from "react";
import api from "../../service/api";
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

export const UsersContext = createContext({})

export const UsersProviders = ({ children }) => {
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const { data } = await api.get();
                setUsersList(data);
            } catch (error) {
                console.log("Erro:", error)
            }
        };
        getUsers();
    }, []);

    const handleFindAUser = async (id) => {
        try {
            const { data } = await api.get(`/${id}`);
            return data
        } catch (error) {
            console.log("Erro:", error)
        }
    }

    const handleAddNewUser = async (nome, avatar) => {
        try {
            const dh_registro = moment().format();
            const id = uuidv4();

            const response = await api.post('/', {
                dh_registro: dh_registro,
                nome: nome,
                avatar: avatar,
                id: id,
            });
            return response.data
        } catch (error) {
            console.log("Erro:", error);
        }
    };

    const handleEditUser = async (id, nome) =>{
        try{
            const response = await api.put(`/${id}`,{
                nome: nome
            });
            return response.data
        }catch (error) {
            console.log("Erro:", error);
        }
    }

    const handleDeleteAUser = async (id) => {
        try {
            await api.delete(`/${id}`);
            return true
        } catch (error){
            console.log("Erro:", error);
        }
    }

    return (
        <UsersContext.Provider value={{ usersList, setUsersList, handleFindAUser, handleAddNewUser, handleDeleteAUser, handleEditUser }}>
            {children}
        </UsersContext.Provider>
    )
};
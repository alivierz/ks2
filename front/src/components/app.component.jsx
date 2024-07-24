import { useEffect, useState } from "react";
import { ListComponent } from "./listComponents/list.component";
import { AddUserComponent } from "./addUserComponent";
import axios from "axios";
import { UpdateUserComponent } from "./updateUserComponent/updateUser";

export function Appcomponent(props) {

    const [users, setUser] = useState([])
    const [newUser, setNewUser] = useState({})
    
    const [updateUser, setUpdateUser] = useState({})
    const [select, setSelect] = useState(0)

    const [deleteUserId, setDeleteUser] = useState(0)
    


    const [refresh, setRefresh] = useState(true)


    useEffect(() =>{

        const addUser = async () =>{
           await axios.post("http://localhost:3001/users", {name: newUser.name, email: newUser.email}).then((res) =>{
                return res.data
            })

               setRefresh(!refresh)
        }
        addUser()
    }, [newUser])


    
    useEffect(() =>{
if(select != 0){
    
   if(updateUser.name){
    const updateUserF = async () =>{
        await axios.put("http://localhost:3001/users", {name: updateUser.name, email: updateUser.email, id: select}).then((res) =>{
             return res.data
         })

            setRefresh(!refresh)
            setSelect(0)
     }
     updateUserF()
   }
}
    }, [updateUser, select])

    useEffect(() =>{
        if(deleteUserId != 0 ){
            const deleteUser = async () =>{
                await axios.delete(`http://localhost:3001/users/${deleteUserId}`)
                setRefresh(!refresh)
             }
             deleteUser()
        }

    }, [deleteUserId])

    useEffect( () =>{

        const getUser = async () =>{
           const  USERS =await axios.get("http://localhost:3001/users").then((res) =>{
                return res.data
               })

               setUser(USERS.data)
        }

       getUser()

    }, [refresh])



    return <div>

        <AddUserComponent setNewUser={setNewUser}/>
        <ListComponent users={users} deleteEvent={setDeleteUser} setSelect={setSelect}/>


        {select != 0 ? <>
            <h2>Actualizar datos de un usuario</h2>
            <UpdateUserComponent setUpdateUser={setUpdateUser} user={users} id={select}/>
        
        
        </>  : <></>}
    </div> 
}


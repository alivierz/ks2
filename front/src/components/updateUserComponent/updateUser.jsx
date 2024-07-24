



export function UpdateUserComponent(props) {

    const sendData = (event) =>{
        event.preventDefault()

        const FORMAT = {
            name: event.target[0].value,
            email: event.target[1].value
        }
        props.setUpdateUser(FORMAT)


    }

    return <><form onSubmit={sendData}>
        <h3>
        actualiza la informacion del usuario</h3>
        
        <input type="text" name="name" placeholder={props.user.filter(data => data.id == props.id)[0].name}/>
        
        <input type="text" name="email" placeholder={props.user.filter(data => data.id == props.id)[0].email}/>

            <input type="submit" value="sub" className="submit" />
    </form>
    </> 
}


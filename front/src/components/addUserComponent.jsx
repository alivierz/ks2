



export function AddUserComponent(props) {

    const sendData = (event) =>{
        event.preventDefault()

        const FORMAT = {
            name: event.target[0].value,
            email: event.target[1].value
        }
        props.setNewUser(FORMAT)


    }

    return <><form onSubmit={sendData}>
        
        <input type="text" name="name"/>
        
        <input type="text" name="email"/>

            <input type="submit" value="sub" className="submit" />
    </form>
    </> 
}


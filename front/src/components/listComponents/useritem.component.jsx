


export function UserItemComponent(props) {
    return <div className="item">
     

     <div>    {props.data.name}</div>

  

  <div>       {props.data.email}</div>
    
        <button onClick={() => props.deleteEvent(props.data.id)}>delete</button>
        <button onClick={() =>props.setSelect(props.data.id)}>editar</button>
    </div>;
}


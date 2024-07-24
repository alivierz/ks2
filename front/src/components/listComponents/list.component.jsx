import { UserItemComponent } from "./useritem.component";



export function ListComponent(props) {

    const FORMAT = props.users.map((data, ind) =>{
       return <UserItemComponent key={ind} data={data} deleteEvent={props.deleteEvent} setSelect={props.setSelect}/>
    })

    return <div>
            {FORMAT}
    </div>;
}


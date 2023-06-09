import ListItem from "./ListItem"

export default function List(props) {

    return (
        <ul>
            {props.item.map(item => <ListItem key={item.id} item={item} onDone={props.onDone} onItemDeleted={props.onItemDeleted}/>)}
        </ul>
    )
}
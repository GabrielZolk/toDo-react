import doneImage from '../assets/done.png';
import undoneImage from '../assets/undone.png';
import trashImage from '../assets/trash.png';
import Card from './Card';

function DoneImg(props) {
    if (props.done) {
        return <img alt="done" src={doneImage}></img>
    } else {
        return <img alt="undone" src={undoneImage}></img>
    }
}

export default function ListItem(props) {

    return (
        <li>
            <Card className={props.item.isDone ? "done item" : "item"}>
                {props.item.text}
                <div>
                    <button onClick={() => { props.onDone(props.item) }}><DoneImg done={props.item.isDone} /></button>
                    <button onClick={() => { props.onItemDeleted(props.item) }}><img alt="trash" src={trashImage}></img></button>
                </div>
            </Card>
        </li>
    )
}

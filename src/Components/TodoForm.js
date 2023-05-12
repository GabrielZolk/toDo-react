import { useState } from 'react';

export default function TodoForm(props) {
    const [text, setText] = useState('');
    function handleChange(event) {
        let t = event.target.value;
        setText(t);
    }

    function addItem(event) {
        event.preventDefault();
        if (text) {
            // setItem([...item, text]);
            props.StateTransfer(text);
            setText('');
        }
    }

    return (
        <form>
            <input onChange={handleChange} type='text' value={text} />
            <button onClick={addItem}>Add Task</button>
        </form>
    )
}

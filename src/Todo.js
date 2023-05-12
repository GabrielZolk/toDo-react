import { useEffect, useState } from 'react';
import List from './Components/List'
import TodoForm from './Components/TodoForm';
import Item from './Components/Item';
import Modal from './Components/Modal';
import './Todo.css'

const SAVED_ITEMS = 'savedItems'
const savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));

export default function Todo() {
    const [items, setItems] = useState([savedItems]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (savedItems) {
            setItems(savedItems);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
    }, [items]);

    function onAddItem(text) {
        let it = new Item(text);

        setItems([...items, it])
        setShowModal(false);
    }

    function onItemDeleted(itemToBeDeleted) {
        let notDeletedItems = items.filter(it => it.id != itemToBeDeleted.id);

        setItems(notDeletedItems);
    }

    function onDone(itemToBeUpdated) {
        let updatedItems = items.map(it => {
            if (it.id === itemToBeUpdated.id) {
                it.isDone = !it.isDone
            }
            return it;
        })
        setItems(updatedItems);
    }

    function onHideModal(event) {
        let target = event.target;
        if(target.id == 'modal') {
            setShowModal(false);
        }
    }

    return (
        <div className="container">
            <header className='header'>
                <h1>ToDo List</h1>
                <button onClick={()=>setShowModal(true)} className='addButton'>Add Task</button>
            </header>
            {/* <TodoForm StateTransfer={onAddItem} /> */}
            <List onDone={onDone} onItemDeleted={onItemDeleted} item={items} />
            <Modal show={showModal} onHideModal={onHideModal}>
                <TodoForm StateTransfer={onAddItem} />
            </Modal>
        </div>
    )
}


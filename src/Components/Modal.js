import { useState } from "react"
import Card from "./Card"

export default function Modal(props) {

    return (
        <div id="modal" onClick={props.onHideModal} className={props.show ? "modal" : "modal hideModal"}>
            <Card className='cardModal'>
                {props.children}
            </Card>
        </div>
    )
}
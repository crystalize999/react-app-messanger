import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let AddMessageAndDialog = () => {
        props.AddMessageAndDialog();
    }

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);

    let newMessageElement = React.createRef ();

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }


    return (<div className={s.dialogs}>
            <div className={s.item}>
                {/* <img
                    src='http://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg'/> */}
            </div>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                {/* onChange={onMessageChange}  в строку ниже*/} 
                <textarea onChange={onMessageChange}  ref={newMessageElement} value={props.newMessageText}/> 
                <div>
                    <button onClick={ AddMessageAndDialog }>Add new message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs

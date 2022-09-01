import {Link} from "react-router-dom";
import {useState} from "react";

export const Message = ({text, photo, name, id}) => {
    return (
        <div className="messages__item item-message">
            <div className="item-message__wrapper">
                <div className="item-message__text">{text}</div>
                <Link to={`/profile/${id}`}>
                    <img src={photo} alt=""/>
                </Link>
            </div>
            <div className="item-message__name">{name}</div>
        </div>
    )
}

export const MessageSendForm = ({wsChanel}) => {
    const [message, setMessage] = useState('');

    const sendMessage = (e) => {
        e.preventDefault()
        if (!!message) {
            wsChanel.send(message)
            setMessage('')
        }
    }

    return (
        <form onSubmit={sendMessage} className="messages__form">
            <div className="messages__form-wrapper">
                <input onChange={(e) => setMessage(e.target.value)}
                       placeholder='Some message...'
                       value={message} type="text"
                       className="messages__input input"
                />
                <button className="messages__btn btn">Send</button>
            </div>
        </form>
    )
}
import './chat.scss'
import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import nextId from "react-id-generator";
import ScrollToBottom from 'react-scroll-to-bottom';
import useAuthorized from "../../../hooks/useAuthorized";
import {Message, MessageSendForm} from "../dialogsUI/dialogsUI";


const Chat = () => {
    const {authorized} = useAuthorized()
    const [messages, setMessages] = useState([]);
    const [wsChanel, setWsChanel] = useState(null);

    if (!authorized) return <Navigate replace to='/login'/>

    useEffect(() => {
        setWsChanel(new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'))
        return () => {
            wsChanel?.close()
        }
    }, []);

    useEffect(() => {
        wsChanel?.addEventListener('message', (e) => {
            setMessages(state => [...state, ...JSON.parse(e.data)])
        })
    }, [wsChanel]);


    useEffect(() => {
        wsChanel?.addEventListener('close', () => {
            console.log('WS_Chanel closed')
        })
    }, [wsChanel]);


    return (
        <div className='page chat'>
            <h2 className="page-title">Chat</h2>
            <div className="chat__messages">
                <ScrollToBottom className="chat__wrapper">
                    {
                        messages?.map(({userName, message, photo, userId}) => {
                            return <Message key={nextId()} id={userId} text={message} name={userName} photo={photo}/>
                        })
                    }
                </ScrollToBottom>
                <MessageSendForm wsChanel={wsChanel}/>
            </div>
        </div>
    )
}


export default Chat


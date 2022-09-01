import './dialogs.scss'
import './message.scss'
import user from './../../../assets/user.jpg'
import {Navigate} from "react-router-dom";
import useAuthorized from "../../../hooks/useAuthorized";
import {MessageSendForm} from "../dialogsUI/dialogsUI";

const Dialogs = () => {

    const {authorized} = useAuthorized()
    if (!authorized) return <Navigate replace to='/login'/>

    return (
        <div className='dialogs page'>
            <div className='dialogs__title page-title'>Dialogs</div>
            <br/>
            Don't realized (Server support only REST Api)
            <div className="dialogs__wrapper">
                <div className="dialogs__users">
                    <div className="dialogs__user user-dialogs">
                        <div className="user-dialogs__name">Karen</div>
                        <div className="user-dialogs__status"></div>
                    </div>
                    <div className="dialogs__user user-dialogs">
                        <div className="user-dialogs__name">Karen</div>
                        <div className="user-dialogs__status"></div>
                    </div>
                    <div className="dialogs__user user-dialogs">
                        <div className="user-dialogs__name">Karen</div>
                        <div className="user-dialogs__status"></div>
                    </div>
                    <div className="dialogs__user user-dialogs">
                        <div className="user-dialogs__name">Karen</div>
                        <div className="user-dialogs__status"></div>
                    </div>
                    <div className="dialogs__user user-dialogs">
                        <div className="user-dialogs__name">Karen</div>
                        <div className="user-dialogs__status"></div>
                    </div>
                </div>
                <div className="dialogs__messages messages">
                    <div className="messages__wrapper">
                        <div className="messages__item item-message">
                            <div className="item-message__wrapper">
                                <div className="item-message__text">Great!)</div>
                                <img src={user} alt=""/>
                            </div>
                            <span className="item-message__name">Dima</span>
                        </div>
                        <div className="messages__item item-message">
                            <div className="item-message__wrapper">
                                <div className="item-message__text">Great!)</div>
                                <img src={user} alt=""/>
                            </div>
                            <span className="item-message__name">Dima</span>
                        </div>
                        <div className="messages__item item-message">
                            <div className="item-message__wrapper">
                                <div className="item-message__text">Great!)</div>
                                <img src={user} alt=""/>
                            </div>
                            <span className="item-message__name">Dima</span>
                        </div>
                        <div className="messages__item item-message">
                            <div className="item-message__wrapper">
                                <div className="item-message__text">Great!)</div>
                                <img src={user} alt=""/>
                            </div>
                            <span className="item-message__name">Dima</span>
                        </div>
                        <div className="messages__item item-message">
                            <div className="item-message__wrapper">
                                <div className="item-message__text">Great!)</div>
                                <img src={user} alt=""/>
                            </div>
                            <span className="item-message__name">Dima</span>
                        </div>
                        <div className="messages__item item-message">
                            <div className="item-message__wrapper">
                                <div className="item-message__text">Great!)</div>
                                <img src={user} alt=""/>
                            </div>
                            <span className="item-message__name">Dima</span>
                        </div>
                        <div className="messages__item item-message">
                            <div className="item-message__wrapper">
                                <div className="item-message__text">Great!)</div>
                                <img src={user} alt=""/>
                            </div>
                            <span className="item-message__name">Dima</span>
                        </div>
                        <div className="messages__item item-message">
                            <div className="item-message__wrapper">
                                <div className="item-message__text">Great!)</div>
                                <img src={user} alt=""/>
                            </div>
                            <span className="item-message__name">Dima</span>
                        </div>
                    </div>

                    <MessageSendForm/>
                </div>
            </div>
        </div>
    )
}


export default Dialogs


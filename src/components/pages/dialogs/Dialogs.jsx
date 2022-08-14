import './dialogs.scss'
import user from './../../../assets/user.jpg'
import user2 from './../../../assets/user2.jpg'

const Dialogs = () => {
    return (
       <div className='dialogs page'>
           <div className='dialogs__title page-title'>Dialogs</div>
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
                   <div className="messages__item messages__item_to">
                       <div className="messages__text">Hey, how are you?</div>
                       <img src={user} alt=""/>
                   </div>
                   <div className="messages__item messages__item_from">
                       <img src={user2} alt=""/>
                       <div className="messages__text">Fine, thanks. And you?</div>
                   </div>
                   <div className="messages__item messages__item_to">
                       <div className="messages__text">Great!)</div>
                       <img src={user} alt=""/>
                   </div>
                   <div className="messages__item messages__item_from">
                       <img src={user2} alt=""/>
                       <div className="messages__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur beatae distinctio dolorem dolorum enim facilis molestiae nisi optio voluptatibus!</div>
                   </div>

                   <form className="messages__form">
                      <div className="messages__form-wrapper">
                          <input placeholder='Some message...' type="text" className="messages__input input"/>
                          <button className="messages__btn btn">Send</button>
                      </div>
                   </form>
               </div>
           </div>
       </div>
    )
}

export default Dialogs


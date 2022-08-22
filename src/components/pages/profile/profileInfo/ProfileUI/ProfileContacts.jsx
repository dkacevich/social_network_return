const ProfileContacts = ({contacts}) => {
    const elems = Object.keys(contacts).filter(item => contacts[item]).map(item => (
        <li key={item} className='user-info__contacts-item'>
            <span>{item}</span>: <a target='blank' href={contacts[item]}>{contacts[item]}</a>
        </li>
    ))
    return (
        <div>
            {elems.length > 0 && <div className="user-info__contacts-label">Contacts:</div>}
            <ul className="user-info__contacts-list">
                {elems}
            </ul>
        </div>
    )
}

export default ProfileContacts
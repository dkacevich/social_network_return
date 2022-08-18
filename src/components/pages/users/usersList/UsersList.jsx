import styles from "../Users.module.scss";
import {Link} from "react-router-dom";
import {useChangeFollowUserMutation} from "../usersApi";

const UsersList = ({users, pageCount}) => {

    const [changeFollowUser, resultFollow] = useChangeFollowUserMutation()


    const renderUserElements = (users) => {
        if (users?.length) {
            return users.map(({name, photos, status, id, followed, loading}) => (
                    <li key={id} className={styles.user}>
                        <Link to={`/profile/${id}`}>
                            <img
                                src={photos?.small ? photos.small : 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'}
                                alt="" className={styles.img}/>
                        </Link>
                        <div className={styles.box}>
                            <div className={styles.name}>{name}</div>
                            <div className={styles.status}>{status ? status : 'User don\'t have status'}</div>
                        </div>
                        <button disabled={loading} onClick={() => changeFollowed(followed, id)}
                                className={`btn ${styles.follow}`}>{followed ? 'Unfollow' : 'Follow'}</button>
                    </li>
                )
            )
        }
    }

    const changeFollowed = (followed, id) => {
        if (followed) {
            changeFollowUser({id, method: 'DELETE', pageCount})
        } else {
            changeFollowUser({id, method: 'POST', pageCount})
        }
    }

    const userElements = renderUserElements(users)

    return (
        <ul className={styles.users}>
            {userElements}
        </ul>
    )
}

export default UsersList
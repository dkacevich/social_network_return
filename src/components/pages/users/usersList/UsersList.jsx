import styles from "../Users.module.scss";
import {Link} from "react-router-dom";
import {useChangeFollowUserMutation} from "../usersApi";
import useAuthorized from "../../../../hooks/useAuthorized";

const UsersList = ({users, data}) => {
    const {authorized, id: myId} = useAuthorized()
    const [changeFollowUser] = useChangeFollowUserMutation()


    const renderUserElements = (users) => {
        if (users?.length) {
            return users.map(({name, photos, status, id, followed, loading = false}) => {
                    return (
                        <li key={id} className={styles.user}>
                            <Link to={`/profile/${id}`}>
                                <img
                                    src={photos?.small  || 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'}
                                    alt="" className={styles.img}/>
                            </Link>
                            <div className={styles.box}>
                                <div className={styles.name}>{name}</div>
                                <div className={styles.status}>{status ? status : 'User don\'t have status'}</div>
                            </div>
                            {(authorized && id !== myId) &&  <button disabled={loading} onClick={() => changeFollowed(followed, id)}
                                                    className={`btn ${styles.follow}`}>{loading ? 'Proceeding...' : followed ? 'Unfollow' : 'Follow'}</button>}
                        </li>
                    )
                }
            )
        }
    }

    const changeFollowed = (followed, id) => {
        if (followed) {
            changeFollowUser({id, method: 'DELETE', data})
        } else {
            changeFollowUser({id, method: 'POST', data})
        }
    }

    const userElements = renderUserElements(users)

    return (
        <ul className={styles.users}>
            {userElements?.length ? userElements : 'Sorry these users don\'t exist'}
        </ul>
    )
}

export default UsersList
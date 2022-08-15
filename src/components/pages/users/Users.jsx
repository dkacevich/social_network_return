import styles from './Users.module.scss'
import {useEffect, useState} from "react";
import {changeCurrentPage, fetchUsers} from "./usersSlice";
import {useDispatch, useSelector} from "react-redux";

const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)
    const loading = useSelector(state => state.users.loading)
    const error = useSelector(state => state.users.error)
    const currentPage = useSelector(state => state.users.currentPage)
    const pageSize = useSelector(state => state.users.pageSize)
    const totalUsersCount = useSelector(state => state.users.totalUsersCount)
    const [currentPagination, setCurrentPagination] = useState(1)


    useEffect(() => {
        dispatch(fetchUsers({currentPage, pageSize}))
    }, [currentPage]);
    if (loading) {
        return 'Loading'
    } else if (error) {
        return "Error"
    }
    const renderUserElements = (users) => {
        if (users?.length !== 0) {
            return users.map(({name, photos, status, id}) => (
                    <li key={id} className={styles.user}>
                        <img
                            src={photos?.small ? photos.small : 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'}
                            alt="" className={styles.img}/>
                        <div className={styles.box}>
                            <div className={styles.name}>{name}</div>
                            <div className={styles.status}>{status ? status : 'User don\'t have status'}</div>
                        </div>
                        <button className={`btn ${styles.follow}`}>Follow</button>
                    </li>
                )
            )
        }
    }
    const userElements = renderUserElements(users)
    const changeUserPage = (num) => {
        if (num !== currentPage) {
            dispatch(changeCurrentPage(num))
        }
    }



    // Paginator Logic

    const paginationTotal = Math.ceil(totalUsersCount / pageSize)
    // First way
    const paginationArray = [...Array(paginationTotal).keys()].map(i => i + 1)
    // Second way (don't know which better
    // const paginationItems = []
    // for (let i = 1; i <= paginationTotal; i++) {
    //     paginationItems.push(i)
    // }

    const paginationCount = paginationTotal / 10
    // 10 = portionSize
    const leftBorder = (currentPagination - 1) * 10 + 1
    const rightBorder = currentPagination * 10

    const paginationItems = paginationArray
        .filter(item => item >= leftBorder && item <= rightBorder)
        .map((item) => {
            return <li key={item} onClick={() => changeUserPage(item)} className={styles.item}>{item}</li>
        })


    return (
        <div className="page">
            <div className="page-title">Users</div>
            <div className={styles.wrapper}>
                <ul className={styles.items}>
                    {
                        currentPagination !== 1 &&
                        <button onClick={() => setCurrentPagination(state => state - 1)}>Prev</button>
                    }
                    {paginationItems}
                    {
                        paginationCount > currentPagination &&
                        <button onClick={() => setCurrentPagination(state => state + 1)}>Prev</button>
                    }
                </ul>
                <ul className={styles.users}>
                    {userElements}
                </ul>
            </div>
        </div>
    )
}

export default Users

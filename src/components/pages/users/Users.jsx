import styles from './Users.module.scss'
import {useEffect} from "react";
import {changeCurrentPage, fetchUsers} from "./usersSlice";
import {useDispatch, useSelector} from "react-redux";
import ReactPaginate from "react-paginate";
import {Link} from "react-router-dom";
import {MoonLoader} from "react-spinners";

const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)
    const loading = useSelector(state => state.users.loading)
    const error = useSelector(state => state.users.error)
    const currentPage = useSelector(state => state.users.currentPage)
    const pageSize = useSelector(state => state.users.pageSize)
    const totalUsersCount = useSelector(state => state.users.totalUsersCount)


    useEffect(() => {
        dispatch(fetchUsers({currentPage, pageSize}))
    }, [currentPage]);


    const renderUserElements = (users) => {
        if (users?.length !== 0) {
            return users.map(({name, photos, status, id}) => (
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
                        <button className={`btn ${styles.follow}`}>Follow</button>
                    </li>
                )
            )
        }
    }
    const userElements = renderUserElements(users)
    const changeUserPage = (num) => dispatch(changeCurrentPage(num))


    const paginationTotal = Math.ceil(totalUsersCount / pageSize)

    if (loading) {
        return <MoonLoader/>
    } else if (error) {
        console.log('error')
    }


    return (
        <div className="page">
            <div className="page-title">Users</div>
            <div className={styles.wrapper}>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next>"
                    forcePage={currentPage - 1}
                    onPageChange={(e) => changeUserPage(e.selected + 1)}
                    pageRangeDisplayed={5}
                    pageCount={paginationTotal}
                    previousLabel="Prev"
                    previousClassName='btn'
                    nextClassName='btn'
                    renderOnZeroPageCount={null}
                    className={styles.items}
                    activeClassName={styles.active}
                    pageClassName={styles.item}

                />
                <ul className={styles.users}>
                    {userElements}
                </ul>
            </div>
        </div>
    )
}

export default Users

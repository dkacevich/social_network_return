import styles from './Users.module.scss'
import {useState} from "react";
import ReactPaginate from "react-paginate";
import {Link} from "react-router-dom";
import {MoonLoader} from "react-spinners";
import {useGetUsersQuery} from "./usersApi";

const Users = () => {
    const [pageCount, setPageCount] = useState(1)

    const {
        data: users = [],
        isLoading,
        isFetching
    } = useGetUsersQuery(pageCount)

    if (isLoading || isFetching) {
        return <MoonLoader/>
    }

    const renderUserElements = (users) => {
        if (users?.length) {
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
    const userElements = renderUserElements(users.items)

    const paginationTotal = Math.ceil(users.totalCount / 10)

    return (
        <div className="page">
            <div className="page-title">Users</div>
            <div className={styles.wrapper}>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next>"
                    forcePage={pageCount - 1}
                    onPageChange={(e) => setPageCount(e.selected + 1)}
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

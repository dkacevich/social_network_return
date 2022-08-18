import styles from './Users.module.scss'
import {useState} from "react";
import {Link} from "react-router-dom";
import {MoonLoader} from "react-spinners";
import {useGetUsersQuery} from "./usersApi";
import Paginator from "./pagination/UsersPagination";
import UsersList from "./usersList/UsersList";

const Users = () => {
    const [pageCount, setPageCount] = useState(1)

    const {
        data: users = [],
        isLoading,
        isFetching
    } = useGetUsersQuery(pageCount)

    return (
        <div className="page">
            <div className="page-title">Users</div>
            <div className={styles.wrapper}>
                {isLoading || isFetching
                    ? <MoonLoader/> 
                    : (
                        <>
                            <Paginator pageCount={pageCount}
                                       totalCount={users.totalCount}
                                       setPageCount={setPageCount}
                            />
                            <UsersList users={users.items}/>
                        </>
                    )}
            </div>
        </div>
    )
}




export default Users

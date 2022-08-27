import styles from './Users.module.scss'
import './UsersFilterForm/UsersFilterForm.scss'
import {useState} from "react";
import {MoonLoader} from "react-spinners";
import {useGetUsersQuery} from "./usersApi";
import Paginator from "./pagination/UsersPagination";
import UsersList from "./usersList/UsersList";
import {useForm} from "react-hook-form";

const Users = () => {
    const [pageCount, setPageCount] = useState(1)
    const [filter, setFilter] = useState('');

    const {
        data: users = [],
        isLoading,
        isFetching
    } = useGetUsersQuery({
        count: pageCount,
        filter,
        limit: 10,
    })

    return (
        <div className="page">
            <div className="page-title">Users</div>
            <div className={styles.wrapper}>
                {isLoading
                    ? <MoonLoader/>
                    : (
                        <>
                            <UsersFilterForm setFilter={setFilter} setPageCount={setPageCount}/>
                            <Paginator pageCount={pageCount}
                                       totalCount={users.totalCount}
                                       setPageCount={setPageCount}
                            />
                            {
                                isFetching
                                    ? <MoonLoader/>
                                    : <UsersList
                                        data={{count: pageCount,filter, limit: 10}}
                                        users={users.items}
                                    />
                            }
                        </>
                    )}
            </div>
        </div>
    )
}
const UsersFilterForm = ({setFilter, setPageCount}) => {
    const {register, handleSubmit} = useForm()

    const onSubmit = ({term, friend}) => {
        const query = `${term && `&term=${term}`}${friend && `&friend=${friend}`}`
        setPageCount(1)
        setFilter(query)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='users-form'>
            <input {...register('term')} placeholder='Search...' type="text" className="users-form__input input"/>
            <select {...register('friend')} className="users-form__options">
                <option value="">All users</option>
                <option value="true">Friends only</option>
                <option value="false">No friends only</option>
            </select>
            <button className="users-form__btn btn">Search</button>
        </form>
    )
}


export default Users

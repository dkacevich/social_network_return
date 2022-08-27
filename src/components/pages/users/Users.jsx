import styles from './Users.module.scss'
import './UsersFilterForm/UsersFilterForm.scss'
import {useEffect, useState} from "react";
import {MoonLoader} from "react-spinners";
import {useGetUsersQuery} from "./usersApi";
import Paginator from "./pagination/UsersPagination";
import UsersList from "./usersList/UsersList";
import {useForm} from "react-hook-form";
import {useLocation, useNavigate} from "react-router-dom";
import qs from "qs";

const Users = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const [pageCount, setPageCount] = useState(1)
    const [usersCount, setUsersCount] = useState(10)
    const [filter, setFilter] = useState('');


    useEffect(() => {
        const {term, friend, count, page} = qs.parse(location.search.substring(1))
        const string = qs.stringify({term, friend})
        const query = string && `&${string}`
        debugger

        setFilter(query)
        setPageCount(page || 1)
        setUsersCount(count || 10)
    }, []);


    useEffect(() => {
        navigate(`/search?page=${pageCount}&count=${usersCount}${filter}`)
    }, [filter, pageCount, usersCount]);


    const {
        data: users = [],
        isLoading,
        isFetching
    } = useGetUsersQuery({
        count: pageCount,
        filter,
        limit: usersCount,
    })

    return (
        <div className="page">
            <div className="page-title">Users</div>
            <div className={styles.wrapper}>
                {isLoading
                    ? <MoonLoader/>
                    : (
                        <>
                            <UsersFilterForm filter={filter} setFilter={setFilter} setPageCount={setPageCount}/>
                            <Paginator pageCount={pageCount}
                                       totalCount={users.totalCount}
                                       setPageCount={setPageCount}
                            />
                            {
                                isFetching
                                    ? <MoonLoader/>
                                    : <UsersList
                                        data={{count: pageCount,filter, limit: usersCount}}
                                        users={users.items}
                                    />
                            }
                        </>
                    )}
            </div>
        </div>
    )
}
const UsersFilterForm = ({filter, setFilter, setPageCount}) => {
    const {register, handleSubmit} = useForm({
        defaultValues: qs.parse(filter)
    })

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

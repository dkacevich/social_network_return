import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import './app.scss'
import Profile from "../pages/profile/Profile";
import Dialogs from "../pages/dialogs/Dialogs";
import Users from "../pages/users/Users";

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAuthStatus} from "./authSlice";
import {MoonLoader} from "react-spinners";


const App = () => {

    const dispatch = useDispatch()

    const loading = useSelector(state => state.auth.loading)

    useEffect(() => {
        dispatch(getAuthStatus())
    }, []);



    if (loading) return <MoonLoader/>

    return (
        <Router>
            <div className='app'>
                <Header/>
                <Sidebar/>
                <div className="app__wrapper">
                    <Routes>
                        <Route path='profile/:id' element={<Profile/> }/>
                        <Route path='dialogs' element={<Dialogs/> }/>
                        <Route path='search' element={<Users/> }/>
                    </Routes>
                </div>
            </div>
        </Router>
    )
}


export default App
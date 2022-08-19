import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import './app.scss'
import Profile from "../pages/profile/Profile";
import Dialogs from "../pages/dialogs/Dialogs";
import Users from "../pages/users/Users";

import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import {getAuthStatus} from "./authSlice";
import {MoonLoader} from "react-spinners";
import Login from "../pages/login/Login";


const App = () => {

    const {
        data: authData,
        isLoading
    } = getAuthStatus()

    if (isLoading) return <MoonLoader/>

    return (
        <Router>
            <div className='app'>
                <Header userData={authData.data}/>
                <Sidebar/>
                <div className="app__wrapper">
                    <Routes>
                        {/* element={<Profile authId={authData.data.id}/>} /:id <Route path='profile/:id' element={<Profile authId={authData.data.id}/>}/>*/}
                        <Route path='profile' element={<Profile authId={authData.data.id}/>}>
                            <Route path=':id' element={<Profile/>}/>
                        </Route>
                        <Route path='dialogs' element={<Dialogs/>}/>
                        <Route path='search' element={<Users/>}/>
                        <Route path='login' element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    )
}


export default App
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import './app.scss'
import Profile from "../pages/profile/Profile";
import Dialogs from "../pages/dialogs/Dialogs";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


const App = () => {
    return (
        <Router>
            <div className='app'>
                <Header/>
                <Sidebar/>
                <div className="app__wrapper">
                    <Routes>
                        <Route path='profile' element={<Profile/> }/>
                        <Route path='dialogs' element={<Dialogs/> }/>
                    </Routes>
                </div>
            </div>
        </Router>
    )
}


export default App
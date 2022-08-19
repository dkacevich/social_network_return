import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";


const allActions = {
    // ...usersActions
}


const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(allActions, dispatch)
}

export default useActions
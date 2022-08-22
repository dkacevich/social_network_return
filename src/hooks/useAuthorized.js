import {getAuthStatus} from "../components/app/authSlice";

const useAuthorized = () => {
    const {
        data: authData
    } = getAuthStatus()

    return {authorized: authData.data.login, id: authData.data.id}
}

export default useAuthorized
import {getAuthStatus} from "../components/app/authSlice";

const useAuthorized = () => {
    const {
        data: authData
    } = getAuthStatus()

    return {authorized: authData.data.login}
}

export default useAuthorized
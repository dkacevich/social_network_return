import {getAuthStatus} from "../components/app/authSlice";

const useRedirect = () => {
    const {
        data: authData
    } = getAuthStatus()


    return {redirect: !authData.data.login}
}

export default useRedirect
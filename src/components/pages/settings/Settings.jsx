// import {useGetProfile, useGetStatus} from "../profile/profileApi";
// import useAuthorized from "../../../hooks/useAuthorized";
// import {Navigate} from "react-router-dom";
//
// const fromObjToMatrix = (obj, array) => {
//     for (const key in obj) {
//         if (typeof(obj[key]) === 'object') {
//             fromObjToMatrix(obj[key], array)
//         } else {
//             array.push([key, obj[key]])
//         }
//     }
//     return array
// }
//
//
// const Settings = () => {
//     const {authorized, id} = useAuthorized()
//     if (!authorized) return <Navigate replace to='/login'/>
//
//     const {
//         data: profileData,
//     } = useGetProfile({id})
//
//     const {
//         data: statusData,
//     } = useGetStatus({id})
//
//     const profileArray = []
//
//     if (profileData) {
//         console.log(fromObjToMatrix(profileData, profileArray))
//     }
//     return (
//         <div className="page settings">
//             <h2 className="page-title">Settings</h2>
//             {
//                 profileArray.length !== 0 && profileArray.map((item, i) => (
//                     <div className='settings__row' key={i}>
//                         <div className='settings__name'>{item[0]}:</div>
//                         <div className='settings__value'>{item[1]}:</div>
//                     </div>
//                 ))
//             }
//         </div>
//     )
// }
//
//
// export default Settings
import {Navigate ,Outlet} from "react-router-dom"

export const PrivateRoute = ({authenticated, redirectOn ,isLoading})=>{
    return (authenticated || isLoading) ? <Outlet/> : <Navigate to={redirectOn}/>
}
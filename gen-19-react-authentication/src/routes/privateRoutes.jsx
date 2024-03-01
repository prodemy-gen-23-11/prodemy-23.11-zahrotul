import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes(){
    console.log(useSelector((state)=>state.auth.token===""))
    const isNotLlogin = useSelector((state)=>state.auth.token==="")

    if(isNotLlogin){
        return<Navigate to="/login"/>
    }

    return <Outlet/>
}
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RedirectMain(){

    useEffect(()=>{
        window.location.href = "/";
    },[])
    return(
        <div>애ㅔㅇ?</div>
    )
}

export default RedirectMain;
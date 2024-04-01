import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { callDetailPage } from "../../utils/pagingUtil";
import axios from 'axios';

function AdminWorkView(){
    const findParams = useParams();
    let workId = findParams.id;

    let url = "/api/admin/work/findId";
    let params = { workId : workId}

    //let [contactBudget ,setContactBudget] = useState("");

    axios.get(url,{params}).then((result) => {
        console.log(result.data);

        let status = result.data.status;
        let data = result.data.data;

        //setContactBudget(data.contactBudget);

        
    })


    return <div>ddd</div>
}

export default AdminWorkView;
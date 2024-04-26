import axios from "axios";
import isEmpty from "../../utils/util";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function WorkList(){
    
    let [workList, setWorkList] = useState([]);
    useEffect(() => {
        axios.get("/api/work/init").then((result) => {
            if (isEmpty(result.data.code)) {
                console.log(result.data.data);
                setWorkList(result.data.data);
            } else if (result.data.code == 'NOT_USER') {
                alert(result.data.message);
                window.location.href = "/admin/login";
            }

            console.log("확인 : " + JSON.stringify(workList,null,2));
        });
    },[setWorkList]);
    return (
        <div className="content">
            <div className="work_area">
                <div className="wrap">
                    <ul className="work_list">
                    {
                          workList.map((work, index) => {
                            return (<MainResultList work={work}/>)
                          })
                        }
                        
                    </ul>  
                </div>
            </div>
        </div>
    )
}
function MainResultList(props) {
    return (

        <li>
        <Link to={`/work/view/${props.work.id}`} state={{ id : props.work.id }}>
            <div className="img_box">
                {props.work.files && <img src={props.work.files.filePath} alt="Work Image" />}
            </div>
            <div className="txt_box">
                <div className="title">{props.work.workTitle}</div>

            </div>
        </Link>
        </li>
      );
  }


export default WorkList;
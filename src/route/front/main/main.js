import axios from "axios";
import isEmpty from "../../utils/util";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Main(){

    let [workList, setWorkList] = useState([]);
    useEffect(() => {
        axios.get("/api/main").then((result) => {
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
        <div class="content">
            <div class="work_area">
                <div class="wrap">
                    <ul class="work_list">
                    {
                          workList.map((work, index) => {
                            return (<MainResultList work={work}/>)
                          })
                        }
                        
                    </ul>  
                    <div class="btn_more">
                        <a href="/work/init.do">LOAD MORE</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
function MainResultList(props) {
    return (

        <li>
        <Link to={`/work/view/${props.work.id}`} state={{ id : props.work.id }}>
            <div class="img_box">
                {props.work.files && <img src={props.work.files.filePath} alt="Work Image" />}
            </div>
            <div class="txt_box">
                <div class="title">{props.work.workTitle}</div>

            </div>
        </Link>
        </li>
      );
  }


export default Main;
import axios from "axios";
import isEmpty from "../../utils/util";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Main(){

    let [workList, setWorkList] = useState([]);
    useEffect(() => {
        axios.get("/api/main").then((result) => {
            if (isEmpty(result.data.code)) {
                setWorkList(result.data.data);
            } 
        });
    },[setWorkList]);
    return (
        <div className="content">
            <div className="work_area">
                <div className="wrap">
                    <ul className="work_list">
                    {
                          workList.map((work, index) => {
                            return (<MainResultList key={index} work={work}/>)
                          })
                        }
                        
                    </ul>  
                    <div className="btn_more">
                        <a href="/work">LOAD MORE</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
function MainResultList(props) {
    return (

        <li>
        <Link key={props.index} to={`/work/view/${props.work.id}`} state={{ id : props.work.id }}>
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


export default Main;
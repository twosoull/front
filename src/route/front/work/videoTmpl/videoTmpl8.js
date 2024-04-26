import { Fragment, useEffect, useState } from "react";
import ImageTmpl from "./ImageTmpl";
import isEmpty from "../../../utils/util";

function VideoTmpl8(props){
    let [image,setImage] = useState([]);

    useEffect(() => {
        if(!isEmpty(props.video.files)){
            for(let i=0; i<props.video.files.length; i++){
                setImage(props.video.files);
            }
        }
      }, [setImage])
    return(
    <Fragment>
        {/* 유형 8 WEB_6개, MOBILE_6개*/}
        <li className="w100p">
            <ul className="img_list">
                <li className="w33p ${file104}"><ImageTmpl image={props.video.files[0]}/></li>
                <li className="w33p ${file104}"><ImageTmpl image={props.video.files[1]}/></li>
                <li className="w33p ${file104}"><ImageTmpl image={props.video.files[2]}/></li>
            </ul>
        </li>
        <li className="w100p">
            <ul className="img_list">
                <li className="w33p ${file104}"><ImageTmpl image={props.video.files[3]}/></li>
                <li className="w33p ${file104}"><ImageTmpl image={props.video.files[4]}/></li>
                <li className="w33p ${file104}"><ImageTmpl image={props.video.files[5]}/></li>
            </ul>
        </li>
    </Fragment>
    )
}

export default VideoTmpl8;
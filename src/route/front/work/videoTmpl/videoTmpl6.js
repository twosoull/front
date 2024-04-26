import { Fragment, useEffect, useState } from "react";
import ImageTmpl from "./ImageTmpl";
import isEmpty from "../../../utils/util";

function VideoTmpl6(props){
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
        {/*유형 6 WEB_5개(1+4), MOBILE_5개(1+2+2)*/}
        <li className="w50pL ${file103}"><ImageTmpl image={props.video.files[0]}/></li>
        <li className="w50pR">
            <ul className="img_list">
            <li className="w50p ${file103}"><ImageTmpl image={props.video.files[1]}/></li>
            <li className="w50p ${file103}"><ImageTmpl image={props.video.files[2]}/></li>
            <li className="w50p ${file103}"><ImageTmpl image={props.video.files[3]}/></li>
            <li className="w50p ${file103}"><ImageTmpl image={props.video.files[4]}/></li>
            </ul>
        </li>
    </Fragment>
    )
}

export default VideoTmpl6;
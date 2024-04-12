import { Fragment, useEffect, useState } from "react";
import ImageTmpl from "./ImageTmpl";
import isEmpty from "../../../utils/util";

function VideoTmpl3(props){
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
        {/* 유형 3 WEB_3개, MOBILE_3개*/}
        <li class="w100p ${file103}"><ImageTmpl image={props.video.files[0]} /></li>
        <li class="w50p ${file103}"><ImageTmpl image={props.video.files[1]} /></li>
        <li class="w50p ${file103}"><ImageTmpl image={props.video.files[2]} /></li>
    </Fragment>
    )
}

export default VideoTmpl3;
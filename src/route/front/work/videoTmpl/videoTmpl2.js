import { Fragment, useEffect, useState } from "react";
import ImageTmpl from "./ImageTmpl";
import isEmpty from "../../../utils/util";

function VideoTmpl2(props){
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
                {/* 유형 2 WEB_6개, MOBILE_6개*/}
                <li className="w50p ${file102}"><ImageTmpl image={props.video.files[0]} /></li>
                <li className="w50p ${file102}"><ImageTmpl image={props.video.files[1]} /></li>
                <li className="w50p ${file102}"><ImageTmpl image={props.video.files[2]} /></li>
                <li className="w50p ${file102}"><ImageTmpl image={props.video.files[3]} /></li>
                <li className="w50p ${file102}"><ImageTmpl image={props.video.files[4]} /></li>
                <li className="w50p ${file102}"><ImageTmpl image={props.video.files[5]} /></li>
        </Fragment>
    )
}

export default VideoTmpl2;
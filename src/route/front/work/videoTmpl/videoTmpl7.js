import { Fragment, useEffect, useState } from "react";
import ImageTmpl from "./ImageTmpl";
import isEmpty from "../../../utils/util";

function VideoTmpl7(props){
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
            {/* 유형 7 WEB_4개, MOBILE_4개*/}
            <li className="w100p">
                <ul className="img_list">
                    <li className="w33p ${file104}"><ImageTmpl image={props.video.files[0]}/></li>
                    <li className="w33p ${file104}"><ImageTmpl image={props.video.files[1]}/></li>
                    <li className="w33p ${file104}"><ImageTmpl image={props.video.files[2]}/></li>
                </ul>
            </li>
            <li className="w50p ${file104}"><ImageTmpl image={props.video.files[3]}/></li>
            <li className="w50p ${file104}"><ImageTmpl image={props.video.files[4]}/></li>
            {/*WEB_4개, MOBILE_4개*/}
        </Fragment>
    )
}

export default VideoTmpl7;
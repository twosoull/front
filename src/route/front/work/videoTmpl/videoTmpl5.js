import { Fragment, useEffect, useState } from "react";
import ImageTmpl from "./ImageTmpl";
import isEmpty from "../../../utils/util";

function VideoTmpl5(props){
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
            {/*유형 5 WEB_4개(1+3), MOBILE_4개(1+3)*/}
            <li className="w75pL ${file104}"><ImageTmpl image={props.video.files[0]}/></li>
            <li className="w25pR">                        
                <ul className="img_list">
                    <li className="w100p ${file104}"><ImageTmpl image={props.video.files[1]} /></li>
                    <li className="w100p ${file104}"><ImageTmpl image={props.video.files[2]} /></li>
                    <li className="w100p ${file104}"><ImageTmpl image={props.video.files[3]} /></li>
                </ul>
            </li>
        </Fragment>
    )
}

export default VideoTmpl5;
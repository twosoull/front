import { useEffect, useState } from "react";
import ImageTmpl from "./ImageTmpl";
import isEmpty from "../../../utils/util";

function VideoTmpl1(props){

    let [image,setImage] = useState([]);
    console.log("확인용 : " + JSON.stringify(props.video,null,2));
    
    useEffect(() => {
        if(!isEmpty(props.video.files)){
            for(let i=0; i<props.video.files.length; i++){
                setImage(props.video.files);
                console.log("확인용2 : " + JSON.stringify(props.video,null,2));
                
            }
        }
      }, [setImage])

    return(
        <li class="w100p ${file101}">
            <ImageTmpl image={props.video.files[0]} />
        </li>
    )
}

export default VideoTmpl1;
import { Fragment } from "react";
import isEmpty from "../../../utils/util";
function ImageTmpl(props){

    return(
        <Fragment>
            
        {!isEmpty(props.image) ? (        
        <div key={props.key} className="img_box">
            <img src={props.image.filePath} />
        </div>
            ):(
                <div key={props.index}></div>
                ) 
            }
        </Fragment>

    )
}

export default ImageTmpl;
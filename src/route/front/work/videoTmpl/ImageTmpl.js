import { Fragment } from "react";
import isEmpty from "../../../utils/util";
function ImageTmpl(props){

    return(
        <Fragment>
            
        {!isEmpty(props.image) ? (        
        <div class="img_box">
            <img src={props.image.filePath} />
        </div>
            ):(
                <div></div>
                ) 
            }
        </Fragment>

    )
}

export default ImageTmpl;
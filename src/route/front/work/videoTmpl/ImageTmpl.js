import isEmpty from "../../../utils/util";
function ImageTmpl(props){

    return(
        <div class="img_box">
        {!isEmpty(props.image) ? (        
            <img src={props.image.filePath} />
            ):(
            <img  />
            ) 
        }
        </div>

    )
}

export default ImageTmpl;
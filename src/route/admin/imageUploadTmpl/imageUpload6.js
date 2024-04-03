import React, { useState, useEffect } from 'react';
import './imageUpload.css'; // 위의 CSS 코드를 styles.css 파일로 이동
import ImageUploadBox from "./ImageUploadBox";
import VideoForm from '../video/videoForm';
const ImageUpload6 = (props) => {
    let [clickRemoveFileId,setClickRemoveFileId] = useState([]);
    let clickRemoveFileIdState = {
      clickRemoveFileId,setClickRemoveFileId
    }
  
  return (
    <section id="section06">
        <input type="text" value={props.order} />
        <h3>[유형6] {props.index+1}번 정보</h3>
        <div id="videoBox06">
            <VideoForm updateVideoMethod={props.updateVideoMethod} order={props.order}/>
        </div>
        <div id="imageBox06">
            <div class="form-group row ">
                <label class="control-label col-md-3 col-sm-3 ">이미지</label>
                <div className="image_tmpl6 image_flex_width600">
                        <ImageUploadBox picOrd={1} saveFileState={props.saveFileState} component={props.component} clickRemoveFileIdState={clickRemoveFileIdState}/>
                        <div className="image_tmpl6-1">
                            <div className="image_flex">
                                <ImageUploadBox picOrd={2} removeFileFormState={props.removeFileFormState} saveFileState={props.saveFileState} component={props.component} clickRemoveFileIdState={clickRemoveFileIdState}/>
                                <ImageUploadBox picOrd={3} removeFileFormState={props.removeFileFormState} saveFileState={props.saveFileState} component={props.component} clickRemoveFileIdState={clickRemoveFileIdState}/>
                            </div>
                            <div className="image_flex">
                                <ImageUploadBox picOrd={4} removeFileFormState={props.removeFileFormState} saveFileState={props.saveFileState} component={props.component} clickRemoveFileIdState={clickRemoveFileIdState}/>
                                <ImageUploadBox picOrd={5} removeFileFormState={props.removeFileFormState} saveFileState={props.saveFileState} component={props.component} clickRemoveFileIdState={clickRemoveFileIdState}/>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <button type="button" onClick={() => props.removeComponent(props.component.id, clickRemoveFileId)}>삭제</button>
    </section>
  );
};

export default ImageUpload6;

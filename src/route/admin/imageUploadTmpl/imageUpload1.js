import React, { useState, useEffect } from 'react';
import './imageUpload.css'; // 위의 CSS 코드를 styles.css 파일로 이동
import ImageUploadBox from "./ImageUploadBox";
import VideoForm from '../video/videoForm';
import isEmpty from '../../utils/util';
const ImageUpload1 = (props) => {

  //삭제할 파일id
  let [clickRemoveFileId,setClickRemoveFileId] = useState([]);
  let clickRemoveFileIdState = {
    clickRemoveFileId,setClickRemoveFileId
  } 

  return (
    <section id="section01">
      <input type="text" value={props.order} />
      <h3>[유형1] {props.index+1} 번 정보</h3>
        <VideoForm videoForm={props.videoForm} updateVideoMethod={props.updateVideoMethod} order={props.order}/>
      <div id="imageBox01">
        <div class="form-group row ">
          <label class="control-label col-md-3 col-sm-3 ">이미지</label>
          <div id="file101" class="col-md-6 col-sm-6 form-group row">
            <ImageUploadBox file={props.videoForm.files[0]} picOrd={1} removeFileFormState={props.removeFileFormState} saveFileState={props.saveFileState} videoForm={props.videoForm} clickRemoveFileIdState={clickRemoveFileIdState} />
          </div>
        </div>
      </div>
      <button type="button" onClick={() => props.removeComponent(props.videoForm.id, clickRemoveFileId)}>삭제</button>
    </section>
    
  );
};

export default ImageUpload1;

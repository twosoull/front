import React, { useState, useEffect } from 'react';
import './imageUpload.css'; // 위의 CSS 코드를 styles.css 파일로 이동
import ImageUploadBox from "./ImageUploadBox";
import VideoForm from '../video/videoForm';
import isEmpty from '../../utils/util';
const ImageUpload4 = (props) => {
  let [clickRemoveFileId,setClickRemoveFileId] = useState([]);
  let clickRemoveFileIdState = {
    clickRemoveFileId,setClickRemoveFileId
  }
  useEffect(() => {
    if(!isEmpty(props.videoForm.files)){
      for(let i=0; i<props.videoForm.files.length; i++){
        setClickRemoveFileId([...clickRemoveFileId,props.videoForm.files[i].id]);
      }
    }
  }, [])

  return (
    <section id="section04">
      <input type="text" value={props.order} />
      <h3>[유형4] {props.index+1}번 정보</h3>
      <div id="videoBox04">
      <VideoForm videoForm={props.videoForm} updateVideoMethod={props.updateVideoMethod} order={props.order}/>
      </div>
      <div id="imageBox04">
        <div class="form-group row ">
          <label class="control-label col-md-3 col-sm-3 ">이미지</label>
          <div id="file104" class="col-md-6 col-sm-6 form-group row">
            <div className="image_tmpl4 image_flex_width600">
              <ImageUploadBox file={props.videoForm.files[0]} picOrd={1} removeFileFormState={props.removeFileFormState} saveFileState={props.saveFileState} videoForm={props.videoForm} clickRemoveFileIdState={clickRemoveFileIdState}/>
              <ImageUploadBox file={props.videoForm.files[1]} picOrd={2} removeFileFormState={props.removeFileFormState} saveFileState={props.saveFileState} videoForm={props.videoForm} clickRemoveFileIdState={clickRemoveFileIdState}/>
            </div>
            <div className="image_tmpl4 image_flex_width600">
              <ImageUploadBox file={props.videoForm.files[2]} picOrd={3} removeFileFormState={props.removeFileFormState} saveFileState={props.saveFileState} videoForm={props.videoForm} clickRemoveFileIdState={clickRemoveFileIdState}/>
              <ImageUploadBox file={props.videoForm.files[3]} picOrd={4} removeFileFormState={props.removeFileFormState} saveFileState={props.saveFileState} videoForm={props.videoForm} clickRemoveFileIdState={clickRemoveFileIdState}/>
            </div>
          </div>
        </div>
      </div>
      <button type="button" onClick={() => props.removeComponent(props.videoForm.id, clickRemoveFileId,props.videoForm.ord)}>삭제</button>
    </section>
  );
};

export default ImageUpload4;

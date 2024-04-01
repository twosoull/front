import React, { useState, useEffect } from 'react';
import './imageUpload.css'; // 위의 CSS 코드를 styles.css 파일로 이동
import ImageUploadBox from "./ImageUploadBox";
const ImageUpload3 = () => {

  return (
    <section id="section03">
      <h3>3번 정보</h3>
      <div id="videoBox03"></div>
      <div id="imageBox03">
        <div class="form-group row ">
          <label class="control-label col-md-3 col-sm-3 ">이미지</label>
          <div id="file103" class="col-md-6 col-sm-6 form-group row">
              <ImageUploadBox />
            <div className="image_tmpl3 image_flex_width600">
              <ImageUploadBox />
              <ImageUploadBox />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageUpload3;

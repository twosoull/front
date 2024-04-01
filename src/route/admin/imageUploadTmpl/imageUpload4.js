import React, { useState, useEffect } from 'react';
import './imageUpload.css'; // 위의 CSS 코드를 styles.css 파일로 이동
import ImageUploadBox from "./ImageUploadBox";
const ImageUpload4 = () => {

  return (
    <section id="section04">
      <h3>4번 정보</h3>
      <div id="videoBox04"></div>
      <div id="imageBox04">
        <div class="form-group row ">
          <label class="control-label col-md-3 col-sm-3 ">이미지</label>
          <div id="file104" class="col-md-6 col-sm-6 form-group row">
            <div className="image_tmpl4 image_flex_width600">
              <ImageUploadBox />
              <ImageUploadBox />
            </div>
            <div className="image_tmpl4 image_flex_width600">
              <ImageUploadBox />
              <ImageUploadBox />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageUpload4;

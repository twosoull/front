import React, { useState, useEffect } from 'react';
import './imageUpload.css'; // 위의 CSS 코드를 styles.css 파일로 이동
import ImageUploadBox from "./ImageUploadBox";
const ImageUpload5 = () => {

  return (
    <section id="section05">
      <h3>5번 정보</h3>
      <div id="videoBox05"></div>
      <div id="imageBox05">
        <div class="form-group row ">
          <label class="control-label col-md-3 col-sm-3 ">이미지</label>
          <div className="image_tmpl5 image_flex_width600">
              <ImageUploadBox />
              <div className="image_tmpl5-1">
                <ImageUploadBox />
                <ImageUploadBox />
                <ImageUploadBox />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageUpload5;

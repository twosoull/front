import React, { useState, useEffect } from 'react';
import './imageUpload.css'; // 위의 CSS 코드를 styles.css 파일로 이동
import ImageUploadBox from "./ImageUploadBox";
const ImageUpload2 = () => {

  return (
    <section id="section02">
        <h3>2번 정보</h3>
        <div id="videoBox02"></div>
        <div id="imageBox02">
            <div class="form-group row ">
                <label class="control-label col-md-3 col-sm-3 ">이미지</label>
                <div id="file102" class="col-md-6 col-sm-6 form-group row">
                    <div className="image_tmpl2-1 image_flex_width600">
                        <ImageUploadBox />
                        <ImageUploadBox />
                    </div>
                    <div className="image_tmpl2-1 image_flex_width600">
                        <ImageUploadBox />
                        <ImageUploadBox />
                    </div>
                    <div className="image_tmpl2-1 image_flex_width600">
                        <ImageUploadBox />
                        <ImageUploadBox />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ImageUpload2;

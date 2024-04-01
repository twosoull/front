import React, { useState, useEffect } from 'react';
import './imageUpload.css'; // 위의 CSS 코드를 styles.css 파일로 이동
import ImageUploadBox from "./ImageUploadBox";
const ImageUpload6 = () => {

  return (
    <section id="section06">
        <h3>6번 정보</h3>
        <div id="videoBox06"></div>
        <div id="imageBox06">
            <div class="form-group row ">
                <label class="control-label col-md-3 col-sm-3 ">이미지</label>
                <div className="image_tmpl6 image_flex_width600">
                        <ImageUploadBox />
                        <div className="image_tmpl6-1">
                            <div className="image_flex">
                                <ImageUploadBox />
                                <ImageUploadBox />
                            </div>
                            <div className="image_flex">
                                <ImageUploadBox />
                                <ImageUploadBox />
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ImageUpload6;

import React, { useState, useEffect } from 'react';
import './imageUpload.css'; // 위의 CSS 코드를 styles.css 파일로 이동
import ImageUploadBox from "./ImageUploadBox";
const ImageUpload7 = () => {

  return (
    <section id="section07">
        <h3>7번 정보</h3>
        <div id="videoBox07"></div>
        <div id="imageBox07">
            <div class="form-group row ">
                <label class="control-label col-md-3 col-sm-3 ">이미지</label>
                <div>
                    <div className="image_tmpl7-1">
                        <div className="image_flex">
                            <ImageUploadBox />
                            <ImageUploadBox />
                            <ImageUploadBox />
                        </div>
                    </div>
                    <div className="image_tmpl7-2">
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

export default ImageUpload7;

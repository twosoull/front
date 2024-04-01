import React, { useState, useRef } from 'react';
import './imageUpload.css'; // 위의 CSS 코드를 styles.css 파일로 이동
import axios from 'axios';
const ImageUploadBox = () => {
  const [highlighted, setHighlighted] = useState(false);
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const highlight = () => {
    setHighlighted(true);
  };

  const unhighlight = () => {
    setHighlighted(false);
  };

  const handleDrop = (e) => {
    preventDefaults(e); // 기본 이벤트 방지
    unhighlight();
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
    // 파일이 드롭되면 API를 호출하여 파일 저장
    saveFile(files);
  };

  const handleFiles = (files) => {
    const newImages = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = (event) => {
        newImages.push({
          id: Date.now() + i,
          src: event.target.result,
          file: file, // 파일 정보 저장
        });
        if (newImages.length === files.length) {
          setImages([...images, ...newImages]);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const deleteImage = (id) => {
    const updatedImages = images.filter(img => img.id !== id);
    setImages(updatedImages);
  };

  const handleDelete = () => {
    // 이미지 박스 삭제 시 빈 박스 생성
    setImages([]);
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    const files = e.target.files;
    handleFiles(files);
    // 파일이 선택되면 API를 호출하여 파일 저장
    saveFile(files);
  };

  const saveFile = (files) => {
    // 여기서 파일 저장 API 호출
    let formData = new FormData();
    for (let i = 0; i < files.length; i++) {
        formData.append('multipartFile', files[i]);
    }

    axios.post("http://localhost:3000/fileUpload", formData)
    .then(res => {
      console.log(res.data);
    })

    console.log('파일이 저장될 API 호출');
    console.log(files); // 파일 정보 확인
  };

  return (
    <div>
      {images.length > 0 ? (
        images.map(image => (
          <div key={image.id} className="image-container">
            <img src={image.src} alt="Uploaded" />
            <button className="delete-button" onClick={() => deleteImage(image.id)}>
              X
            </button>
          </div>
        ))
      ) : (
        <div
          id="drop-area"
          className={highlighted ? 'highlight' : ''}
          onDragEnter={highlight}
          onDragOver={preventDefaults} // 기본 동작 방지
          onDragLeave={unhighlight}
          onDrop={handleDrop}
          onClick={openFileDialog} // 파일 입력 요소 열기
        >
          <div className="file-input-wrapper">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleFileInputChange}
            />
            <p>Drop Image or Click</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploadBox;

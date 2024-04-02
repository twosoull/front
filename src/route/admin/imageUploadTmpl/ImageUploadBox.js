import React, { useState, useRef } from 'react';
import './imageUpload.css'; // 위의 CSS 코드를 styles.css 파일로 이동
import axios from 'axios';
const ImageUploadBox = (props) => {
  const [highlighted, setHighlighted] = useState(false);

  //update시에 불러오는 props.file의 src를 작성해주고 데이터를 images에 넣어주면 된다.
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

    //수정
    const handleDrop = (e) => {
      preventDefaults(e); // 기본 이벤트 방지
      unhighlight();
      const dt = e.dataTransfer;
      const files = dt.files;
      saveFile(files).then(id => {
          handleFiles(files,id);
          console.log("저장된 id : " + id);
      });
      // 파일이 드롭되면 API를 호출하여 파일 저장
    };
    //수정
    const handleFiles = (files,id) => {
      const newImages = [];
      let loadedCount = 0;
      for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const reader = new FileReader();
          id = id;
        reader.onload = (event) => {
          newImages.push({
            id: id,
            src: event.target.result,
            file: file, // 파일 정보 저장
            filsId : id
          });
          loadedCount++;
          if (loadedCount === files.length) {
            setImages([...images, ...newImages]);
          }
        };
        reader.readAsDataURL(file);
      }
      return id;
    };
  
  const deleteImage = (id, fileId) => {
    const updatedImages = images.filter(img => img.id !== id);
    setImages(updatedImages);
    console.log("삭제파일 : " + id);
    props.fileState.setFileIds(prevFileIds => prevFileIds.filter(file => file.id !== id));
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
    saveFile(files).then(id => {
      handleFiles(files,id);
      console.log("저장된 id : " + id);
    });
  };

  const saveFile = (files) => {
    return new Promise((resolve, reject) => {
    // 여기서 파일 저장 API 호출
    let formData = new FormData();
    for (let i = 0; i < files.length; i++) {
        formData.append('multipartFile', files[i]);
    }

    console.log('파일이 저장될 API 호출');
    
    axios.post("http://localhost:3000/fileUpload", formData)
    .then(result => {
      props.fileState.setFileIds([...props.fileState.fileIds,{ id:result.data.data, order:props.component.order, tmplType:props.component.type}]);
      
      //setImages([...images, { id: Date.now(), fileId: result.data.data }]); // 이미지 추가
      props.clickRemoveFileIdState.setClickRemoveFileId([...props.clickRemoveFileIdState.clickRemoveFileId, result.data.data]);
      let id = result.data.data;
      resolve(id);
      return id;
    })
        .catch(error => {
            reject(error);
        });
    });
  };

  return (
    <div>
      {images.length > 0 ? (
        images.map(image => (
          <div key={image.id} id={image.id} className="image-container">
            <img src={image.src} alt="Uploaded" />
            <button className="delete-button" onClick={() => deleteImage(image.id ,image.fileId )}>
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

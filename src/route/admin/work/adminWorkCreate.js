import ImageUpload1 from "../imageUploadTmpl/imageUpload1";
import ImageUpload from "../imageUploadTmpl/imageUpload1";
import ImageUpload2 from "../imageUploadTmpl/imageUpload2";
import ImageUpload3 from "../imageUploadTmpl/imageUpload3";
import ImageUpload4 from "../imageUploadTmpl/imageUpload4";
import ImageUpload5 from "../imageUploadTmpl/imageUpload5";
import ImageUpload6 from "../imageUploadTmpl/imageUpload6";
import ImageUpload7 from "../imageUploadTmpl/imageUpload7";
import ImageUpload8 from "../imageUploadTmpl/imageUpload8";
import ImageUploadBox from "../imageUploadTmpl/ImageUploadBox";
import { useEffect, useState } from "react";
import '../imageUploadTmpl/imageUpload.css'; 
import axios from 'axios';
import Thumnail from "./thumnail/thumnail";
import { useLocation, useParams } from "react-router-dom";
import isEmpty from "../../utils/util";
function AdminWorkCreate(props){
	//work 데이터
	const [workForm,setWorkForm] = useState({id:0, workTitle:'', useYn:'Y'});
	//video 데이터
	const [removeVideoForms,setRemoveVideoForms] = useState([]);
	const [videoForms, setVideoForms] = useState([]);
	let videoFormsState = {
		videoForms, setVideoForms
	}
	//저장하려는 File의 id 값 (물리적으로는 이미 저장되어 있으며 Id 값으로 order,tmpl등의 정보를 가지고 있음, 순서는 back단에서 자동 조정됌)
	const [saveFileForms, setSaveFileForms] = useState([]);
	let saveFileState = {
		saveFileForms, setSaveFileForms
	}
	//삭제 된 파일의 id리스트
	const [removeFileForms,setRemoveFileForms] = useState([]);
	let removeFileFormState = {
		removeFileForms,setRemoveFileForms
	}
	//imageUpload(video포함) 유형의 순서조정 값
	//const [componentOrder, setComponentOrder] = useState(0);
	const [thumbnailFileForm, setThumbnailFileForm] = useState();
	let thumbnailFileFormState = {
		thumbnailFileForm, setThumbnailFileForm
	}

	const [creditsForms, setCreditsForms] = useState([{ job: '', name: '', id: 0 }]);
	//삭제 된 파일의 크레딧 id리스트
	const [removeCreditsForms,setRemoveCreditsForms] = useState([]);
	const findParams = useParams();
    let workId = findParams.id;
	useEffect(() => {
		if(!isEmpty(workId)){
			let url = "/api/admin/work/findId";
			let params = { workId : workId}
		
			//let [contactBudget ,setContactBudget] = useState("");
		
			axios.get(url,{params}).then((result) => {
				let status = result.data.status;
				let data = result.data.data;
				console.log("확인 "+  JSON.stringify(result.data,null,2));
				setWorkForm({workId:result.data.data.id , workTitle:result.data.data.workTitle, useYn:result.data.data.useYn});
				setVideoForms(result.data.data.videos);
				//setComponentOrder(result.data.data.videos.length);
				setCreditsForms(result.data.data.credits);
				setThumbnailFileForm(result.data.data.filesList[0]);
			})
		}
	}, [])
	const addComponent = (componentType) => {
	  const newComponent = { videoType: componentType, id: videoForms.length, ord: videoForms.length+1, videoTitle:'', videoContent:'', videoUrl:'', videoOrd: videoForms.length+1 , files:[]};
	  setVideoForms([...videoForms, newComponent]);
	  //setComponentOrder( componentOrder+1);
	};
  
	const removeComponent = (id , clickRemoveFileId,ord) => {


		//setSaveFileForms(prevSaveFileForm => prevSaveFileForm.filter(fileId => !clickRemoveFileId.includes(fileId)));
		//setSaveFileForms(prevSaveFileForm => prevSaveFileForm.filter(file => !clickRemoveFileId.includes(file.id)));
		const filteredSaveFileForm = saveFileForms.filter(saveFileForms => saveFileForms.id !== id);
		const filteredComponents = videoForms.filter(videoForm => videoForm.id !== id);

		// 삭제된 컴포넌트 이후의 컴포넌트들의 order 값을 재조정
		const updatedComponents = filteredComponents.map(videoForm => {
		  if (videoForm.ord > ord) {
			return { ...videoForm, ord: videoForm.ord - 1 , videoOrd: videoForm.videoOrd - 1};
		  }
		  return videoForm;
		});
		/*
		const updatedSaveFileForm = filteredSaveFileForm.map(saveFileForms => {
			if (saveFileForms.order > id) {
			  return { ...saveFileForms, order: saveFileForms.order - 1 };
			}
			return saveFileForms;
		  });*/
		// 변경된 상태로 한 번에 업데이트
		setSaveFileForms(prevSaveFileForm => prevSaveFileForm.filter(file => !clickRemoveFileId.includes(file.id)).map(file => {
			if (file.ord > id) {
				return { ...file, ord: file.ord - 1 };
			}
			return file;
		}));
		setVideoForms(updatedComponents);
		//setComponentOrder(componentOrder-1);
		setRemoveVideoForms([...removeVideoForms,id]);
		const updatedRemoveFileFormsSet = new Set([...removeFileForms, ...clickRemoveFileId]);
		removeFileFormState.setRemoveFileForms(Array.from(updatedRemoveFileFormsSet));
	  };

	  /*
	  const changeComponentOrder = (currentIndex, newIndex) => {
		const newComponents = [...videoForms];
		const movedComponent = newComponents.splice(currentIndex, 1)[0];
		newComponents.splice(newIndex, 0, movedComponent);
	  
		// 순서 변경 후 컴포넌트의 order 값 업데이트
		const updatedComponents = newComponents.map((component, index) => {
		  return { ...component, order: index + 1 };
		});

		const newSaveFileForm = [...saveFileForms];

		// 순서 변경 후 파일의 order 값 업데이트
		const updatedSaveFileForm = saveFileForms.map(file => {
			const { id, order } = file;
			if (order === currentIndex + 1) {
				return { id, order: newIndex + 1 };
			} else if (currentIndex < newIndex && order > currentIndex + 1 && order <= newIndex + 1) {
				return { id, order: order - 1 };
			} else if (currentIndex > newIndex && order >= newIndex + 1 && order < currentIndex + 1) {
				return { id, order: order + 1 };
			} else {
				return { id, order };
			}
		});
		setVideoForms(updatedComponents);
		setSaveFileForms(updatedSaveFileForm);
	  };
	  */

	  const updateVideoTitleByOrder = (ord, newTitle) => {
		setVideoForms(prevComponents => {
		  // 배열을 복제하여 수정
		  const updatedComponents = prevComponents.map(videoForm => {
			// order 값이 3일 때 해당 객체의 title을 변경
			if (videoForm.ord === ord) {
			  return { ...videoForm, videoTitle: newTitle };
			}
			return videoForm; // order 값이 3이 아닌 경우, 기존 객체 그대로 반환
		  });
		  return updatedComponents;
		});
	  };

	  const updateVideoContentByOrder = (ord, newContent) => {
		setVideoForms(prevComponents => {
		  // 배열을 복제하여 수정
		  const updatedComponents = prevComponents.map(videoForm => {
			// order 값이 3일 때 해당 객체의 title을 변경
			if (videoForm.ord === ord) {
			  return { ...videoForm, videoContent : newContent };
			}
			return videoForm; // order 값이 3이 아닌 경우, 기존 객체 그대로 반환
		  });
		  return updatedComponents;
		});
	  };
	  const updateVideoUrlByOrder = (ord, newUrl) => {
		setVideoForms(prevComponents => {
		  // 배열을 복제하여 수정
		  const updatedComponents = prevComponents.map(videoForm => {
			// order 값이 3일 때 해당 객체의 title을 변경
			if (videoForm.ord === ord) {
			  return { ...videoForm, videoUrl : newUrl };
			}
			return videoForm; // order 값이 3이 아닌 경우, 기존 객체 그대로 반환
		  });
		  return updatedComponents;
		});
	  };

	  let updateVideoMethod = {
		updateVideoTitleByOrder,
		updateVideoContentByOrder,
		updateVideoUrlByOrder
	  }

	  //크레딧
	  const handleAddCredit = () => {
		const newCreditsForms = [...creditsForms, { job: '', name: '', id: 0 }];
		setCreditsForms(newCreditsForms);
	  };
	
	  const handleRemoveCredit = (index,id) => {
		if (index === 0) {
		  return; // 첫 번째 요소는 삭제할 수 없도록 처리
		}
		const newCreditsForms = [...creditsForms];
		newCreditsForms.splice(index, 1);
		setCreditsForms(newCreditsForms);
		setRemoveCreditsForms([...removeCreditsForms,id]);
	  };

	  //워크
	  const updateWork = (title) => {
		setWorkForm(prevWork => ({
			...prevWork,
			workTitle: title
		  }));
	  };
		// useYn 업데이트 함수
		const toggleUseYn = (value) => {
			setWorkForm(prevWork => ({
			...prevWork,
			useYn: value
			}));
		};

    return(

		<div className="col-md-12 col-sm-12 ">
			<div className="x_panel">
				<div className="x_content">
					<br />
					<form id="form"  method="post" enctype="multipart/form-data" className="form-horizontal form-label-left">
						<div className="form-group row ">
						<label className="control-label col-md-3 col-sm-3 ">대제목</label>
							<div className="col-md-9 col-sm-9 ">
								<textarea type="text" className="form-control" value={workForm.workTitle} onChange={(e)=>{
									updateWork(e.target.value);
								}} placeholder="대제목을 입력해 주세요." >								
								</textarea>
							</div>
							<label className="control-label col-md-3 col-sm-3 ">대표 썸네일</label>
							<Thumnail removeFileFormState={removeFileFormState} thumbnailFileFormState={thumbnailFileFormState}/>

						</div>
						<div className="">
							<button type="button" className="btn btn-primary" style={{color:"white"}} onClick={() => addComponent('1')}>유형01 등록</button>
							<button type="button" className="btn btn-primary" style={{color:"white"}} onClick={() => addComponent('2')}>유형02 등록</button>
							<button type="button" className="btn btn-primary" style={{color:"white"}} onClick={() => addComponent('3')}>유형03 등록</button>
							<button type="button" className="btn btn-primary" style={{color:"white"}} onClick={() => addComponent('4')}>유형04 등록</button>
							<button type="button" className="btn btn-primary" style={{color:"white"}} onClick={() => addComponent('5')}>유형05 등록</button>
							<button type="button" className="btn btn-primary" style={{color:"white"}} onClick={() => addComponent('6')}>유형06 등록</button>
							<button type="button" className="btn btn-primary" style={{color:"white"}} onClick={() => addComponent('7')}>유형07 등록</button>
							<button type="button" className="btn btn-primary" style={{color:"white"}} onClick={() => addComponent('8')}>유형08 등록</button>
						</div>

						{videoForms.map((videoForm, index) => {
              				const OrderNumber = videoForm.ord;
						return (
							<div key={videoForm.id}>
								{videoForm.videoType === '1' && <ImageUpload1 order={OrderNumber} index={index} removeFileFormState={removeFileFormState} saveFileState={saveFileState} updateVideoMethod={updateVideoMethod} removeComponent={removeComponent} videoForm={videoForm}/>}
								{videoForm.videoType === '2' && <ImageUpload2 order={OrderNumber} index={index} removeFileFormState={removeFileFormState} saveFileState={saveFileState} updateVideoMethod={updateVideoMethod} removeComponent={removeComponent} videoForm={videoForm}/>}
								{videoForm.videoType === '3' && <ImageUpload3 order={OrderNumber} index={index} removeFileFormState={removeFileFormState} saveFileState={saveFileState} updateVideoMethod={updateVideoMethod} removeComponent={removeComponent} videoForm={videoForm}/>}
								{videoForm.videoType === '4' && <ImageUpload4 order={OrderNumber} index={index} removeFileFormState={removeFileFormState} saveFileState={saveFileState} updateVideoMethod={updateVideoMethod} removeComponent={removeComponent} videoForm={videoForm}/>}
								{videoForm.videoType === '5' && <ImageUpload5 order={OrderNumber} index={index} removeFileFormState={removeFileFormState} saveFileState={saveFileState} updateVideoMethod={updateVideoMethod} removeComponent={removeComponent} videoForm={videoForm}/>}
								{videoForm.videoType === '6' && <ImageUpload6 order={OrderNumber} index={index} removeFileFormState={removeFileFormState} saveFileState={saveFileState} updateVideoMethod={updateVideoMethod} removeComponent={removeComponent} videoForm={videoForm}/>}
								{videoForm.videoType === '7' && <ImageUpload7 order={OrderNumber} index={index} removeFileFormState={removeFileFormState} saveFileState={saveFileState} updateVideoMethod={updateVideoMethod} removeComponent={removeComponent} videoForm={videoForm}/>}
								{videoForm.videoType === '8' && <ImageUpload8 order={OrderNumber} index={index} removeFileFormState={removeFileFormState} saveFileState={saveFileState} updateVideoMethod={updateVideoMethod} removeComponent={removeComponent} videoForm={videoForm}/>}
								
								{/*
								index !== 0 && (
									<button type="button" onClick={() => changeComponentOrder(index, index - 1)}>위로</button>
								)
								*/}
								{/*
								index !== videoForms.length - 1 && (
									<button type="button" onClick={() => changeComponentOrder(index, index + 1)}>아래로</button>
								)
								*/}
							</div>
							);
						})}

							<div className="form-group row ">
								<label className="control-label col-md-3 col-sm-3 ">크레딧
								</label>
								<div className="col-md-6 col-sm-6 form-group row inputButtonArea">
								{creditsForms.map((credit, index) => (
									<div classNameName="creditArea" key={index} data-ord={index + 1} style={{ display: "flex" }}>
									<input
									type="text"
									name="job"
									classNameName="form-control"
									value={credit.job}
									placeholder=" "
									onChange={(e) => {
										const newCreditsForms = [...creditsForms];
										newCreditsForms[index].job = e.target.value;
										setCreditsForms(newCreditsForms);
									}}
									/>
									<input
									type="text"
									name="name"
									classNameName="form-control"
									value={credit.name}
									placeholder=" "
									onChange={(e) => {
										const newCreditsForms = [...creditsForms];
										newCreditsForms[index].name = e.target.value;
										setCreditsForms(newCreditsForms);
									}}
									/>
									{index !== 0 && ( // 첫 번째 요소일 때 삭제 버튼을 표시하지 않음
									<button
										type="button"
										classNameName="btn btn-secondary input-minus"
										onClick={() => handleRemoveCredit(index,credit.id)}
										data-no={credit.creditsNo}
									>
										<i classNameName="fa fa-minus"></i>
									</button>
									)}
								</div>
								))}
								<button type="button" onClick={handleAddCredit}>Add Credit</button>
								</div>
							</div>
							<div className="form-group row">
								<label className="col-md-3 col-sm-3  control-label">공개 여부
								</label>
								<div className="col-md-9 col-sm-9 ">
								<div>
									<label>
									<input
										type="radio"
										classNameName="flat"
										name="use_yn"
										value="Y"
										checked={workForm.useYn === 'Y'}
										onChange={() => toggleUseYn('Y')}
									/> 공개
									</label>
								</div>
								<div>
									<label>
									<input
										type="radio"
										classNameName="flat"
										name="use_yn"
										value="N"
										checked={workForm.useYn === 'N'}
										onChange={() => toggleUseYn('N')}
									/> 비공개
									</label>
								</div>
								</div>
							</div>
						<div className="ln_solid"></div>
						<div className="form-group">
							<div className="col-md-9 col-sm-9  offset-md-3">
								<button type="button" onClick={()=>{
									
/*
									let videoForms = [];
									for(let i=0; i<videoForms.length; i++){
										let videoForm = {
											videoId : videoForms[i].videoId,
											videoTitle : videoForms[i].videoTitle,
											videoContent : videoForms[i].videoContent,
											videoUrl : videoForms[i].videoUrl,
											videoOrd : videoForms[i].videoOrd,
											videoType : videoForms[i].type
										}
										videoForms.push(videoForm);
									}
									*/
									for(let i=0; i<videoForms.length; i++){
										console.log(i + " : " + JSON.stringify(videoForms[i],null,2));
									}
									
									
									console.log("크레딧 결과 : " )
									for(let i=0; i<creditsForms.length; i++){
										console.log(i + " : " + JSON.stringify(creditsForms[i],null,2));
									}
									console.log("썸네일 결과 결과 :" + JSON.stringify(thumbnailFileForm,null,2));
									
									
									console.log("저장 할 파일 : ");
									for(let i=0; i<saveFileForms.length; i++){
										console.log(i + ": " + JSON.stringify(saveFileForms[i],null,2));
									}
									
									console.log("removeVideo 확인")
									for(let i=0; i < removeVideoForms.length; i++){
										console.log(i + ": " + JSON.stringify(removeVideoForms[i],null,2));
									}
									console.log("removefile 확인");
									for(let i=0; i < removeFileForms.length; i++){
										console.log(i + ": " + JSON.stringify(removeFileForms[i],null,2));
									}

									console.log("removeCreadits 확인");
									for(let i=0; i<removeCreditsForms.length; i++){
										console.log(i + ": " + JSON.stringify(removeCreditsForms[i],null,2));
									}


									/*
									let formData = new FormData();
									formData.append('workForm', work);
									formData.append('videoForms', videoForms);
									formData.append('creditsForms', creditsForms);
*/
									console.log('API 호출');
									console.log(props.uri);
									axios.post(props.uri,{
										workForm : workForm,
										videoForms : videoForms,
										creditsForms : creditsForms,
										saveFileForms : saveFileForms,
										thumbnailFileForm : thumbnailFileForm,
										removeFileForms : removeFileForms,
										removeVideoForms : removeVideoForms,
										removeCreditsForms : removeCreditsForms
									}
									)
									.then(result => {
									  console.log(result);
									  if(result.data.status == 'OK'){
										alert("저장되었습니다.");
										window.location.href = "/admin/work/init";
									  }
									})

								}}className="btn btn-success">등록</button>
								<button type="button" className="btn btn-primary">취소</button>

								
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
    )
}

export default AdminWorkCreate;
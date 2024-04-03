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
function AdminWorkCreate(){

	const findParams = useParams();
    let workId = findParams.id;

	console.log("workId =" + workId);
	if(!isEmpty(workId)){
		let url = "/api/admin/work/findId";
		let params = { workId : workId}
	
		//let [contactBudget ,setContactBudget] = useState("");
	
		axios.get(url,{params}).then((result) => {
			console.log(result.data);
	
			let status = result.data.status;
			let data = result.data.data;
			
		})
	}

	//work 데이터
	const [workForm,setWorkForm] = useState({id:0, workTitle:'', useYn:'Y'});
	//video 데이터
	const [components, setComponents] = useState([]);
	let componentsState = {
		components, setComponents
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
	const [componentOrder, setComponentOrder] = useState([]);
	const [thumbnailFileForm, setThumbnailFileForm] = useState();
	let thumbnailFileFormState = {
		thumbnailFileForm, setThumbnailFileForm
	}

	const addComponent = (componentType) => {
	  const newComponent = { type: componentType, id: components.length, order: componentOrder.length + 1, videoId: 0, videoTitle:'', videoContent:'', videoUrl:'', videoOrd: componentOrder.length + 1};
	  setComponents([...components, newComponent]);
	  setComponentOrder([...componentOrder, componentType]);
	};
  
	const removeComponent = (id , clickRemoveFileId) => {


		//setSaveFileForms(prevSaveFileForm => prevSaveFileForm.filter(fileId => !clickRemoveFileId.includes(fileId)));
		//setSaveFileForms(prevSaveFileForm => prevSaveFileForm.filter(file => !clickRemoveFileId.includes(file.id)));
		const filteredSaveFileForm = saveFileForms.filter(saveFileForms => saveFileForms.id !== id);
		const filteredComponents = components.filter(component => component.id !== id);
		const filteredOrder = componentOrder.filter((_, index) => index !== id);
	
		console.log(id);
		// 삭제된 컴포넌트 이후의 컴포넌트들의 order 값을 재조정
		const updatedComponents = filteredComponents.map(component => {
		  if (component.order > id) {
			return { ...component, order: component.order - 1 , videoOrd: component.videoOrd - 1};
		  }
		  return component;
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
		setComponents(updatedComponents);
		setComponentOrder(filteredOrder);
		const updatedRemoveFileFormsSet = new Set([...removeFileForms, ...clickRemoveFileId]);
		removeFileFormState.setRemoveFileForms(Array.from(updatedRemoveFileFormsSet));
	  };

	  /*
	  const changeComponentOrder = (currentIndex, newIndex) => {
		const newComponents = [...components];
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
		setComponents(updatedComponents);
		setSaveFileForms(updatedSaveFileForm);
	  };
	  */

	  const updateVideoTitleByOrder = (order, newTitle) => {
		setComponents(prevComponents => {
		  // 배열을 복제하여 수정
		  const updatedComponents = prevComponents.map(component => {
			// order 값이 3일 때 해당 객체의 title을 변경
			if (component.order === order) {
			  return { ...component, videoTitle: newTitle };
			}
			return component; // order 값이 3이 아닌 경우, 기존 객체 그대로 반환
		  });
		  return updatedComponents;
		});
	  };

	  const updateVideoContentByOrder = (order, newContent) => {
		setComponents(prevComponents => {
		  // 배열을 복제하여 수정
		  const updatedComponents = prevComponents.map(component => {
			// order 값이 3일 때 해당 객체의 title을 변경
			if (component.order === order) {
			  return { ...component, videoContent : newContent };
			}
			return component; // order 값이 3이 아닌 경우, 기존 객체 그대로 반환
		  });
		  return updatedComponents;
		});
	  };
	  const updateVideoUrlByOrder = (order, newUrl) => {
		setComponents(prevComponents => {
		  // 배열을 복제하여 수정
		  const updatedComponents = prevComponents.map(component => {
			// order 값이 3일 때 해당 객체의 title을 변경
			if (component.order === order) {
			  return { ...component, videoUrl : newUrl };
			}
			return component; // order 값이 3이 아닌 경우, 기존 객체 그대로 반환
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

	  const [creditsForms, setCreditsForms] = useState([{ creditsJob: '', creditsName: '', creditsId: 0 }]);

	  const handleAddCredit = () => {
		const newCreditsForms = [...creditsForms, { creditsJob: '', creditsName: '', creditsId: 0 }];
		setCreditsForms(newCreditsForms);
	  };
	
	  const handleRemoveCredit = (index) => {
		if (index === 0) {
		  return; // 첫 번째 요소는 삭제할 수 없도록 처리
		}
		const newCreditsForms = [...creditsForms];
		newCreditsForms.splice(index, 1);
		setCreditsForms(newCreditsForms);
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

		<div class="col-md-12 col-sm-12 ">
			<div class="x_panel">
				<div class="x_content">
					<br />
					<form id="form"  method="post" enctype="multipart/form-data" class="form-horizontal form-label-left">
						<div class="form-group row ">
						<label class="control-label col-md-3 col-sm-3 ">대제목</label>
							<div class="col-md-9 col-sm-9 ">
								<textarea type="text" class="form-control" onChange={(e)=>{
									updateWork(e.target.value);
								}} placeholder="대제목을 입력해 주세요." >								
								</textarea>
							</div>
							<label class="control-label col-md-3 col-sm-3 ">대표 썸네일</label>
							<Thumnail removeFileFormState={removeFileFormState} thumbnailFileFormState={thumbnailFileFormState}/>

						</div>
						<div class="">
							<button type="button" class="btn btn-primary" style={{color:"white"}} onClick={() => addComponent('1')}>유형01 등록</button>
							<button type="button" class="btn btn-primary" style={{color:"white"}} onClick={() => addComponent('2')}>유형02 등록</button>
							<button type="button" class="btn btn-primary" style={{color:"white"}} onClick={() => addComponent('3')}>유형03 등록</button>
							<button type="button" class="btn btn-primary" style={{color:"white"}} onClick={() => addComponent('4')}>유형04 등록</button>
							<button type="button" class="btn btn-primary" style={{color:"white"}} onClick={() => addComponent('5')}>유형05 등록</button>
							<button type="button" class="btn btn-primary" style={{color:"white"}} onClick={() => addComponent('6')}>유형06 등록</button>
							<button type="button" class="btn btn-primary" style={{color:"white"}} onClick={() => addComponent('7')}>유형07 등록</button>
							<button type="button" class="btn btn-primary" style={{color:"white"}} onClick={() => addComponent('8')}>유형08 등록</button>
						</div>

						{components.map((component, index) => {
              				const OrderNumber = component.order;
						return (
							<div key={component.id}>
								{component.type === '1' && <ImageUpload1 order={OrderNumber} index={index} removeFileFormState={removeFileFormState} saveFileState={saveFileState} updateVideoMethod={updateVideoMethod} removeComponent={removeComponent} component={component}/>}
								{component.type === '2' && <ImageUpload2 order={OrderNumber} index={index} removeFileFormState={removeFileFormState} saveFileState={saveFileState} updateVideoMethod={updateVideoMethod} removeComponent={removeComponent} component={component}/>}
								{component.type === '3' && <ImageUpload3 order={OrderNumber} index={index} removeFileFormState={removeFileFormState} saveFileState={saveFileState} updateVideoMethod={updateVideoMethod} removeComponent={removeComponent} component={component}/>}
								{component.type === '4' && <ImageUpload4 order={OrderNumber} index={index} removeFileFormState={removeFileFormState} saveFileState={saveFileState} updateVideoMethod={updateVideoMethod} removeComponent={removeComponent} component={component}/>}
								{component.type === '5' && <ImageUpload5 order={OrderNumber} index={index} removeFileFormState={removeFileFormState} saveFileState={saveFileState} updateVideoMethod={updateVideoMethod} removeComponent={removeComponent} component={component}/>}
								{component.type === '6' && <ImageUpload6 order={OrderNumber} index={index} removeFileFormState={removeFileFormState} saveFileState={saveFileState} updateVideoMethod={updateVideoMethod} removeComponent={removeComponent} component={component}/>}
								{component.type === '7' && <ImageUpload7 order={OrderNumber} index={index} removeFileFormState={removeFileFormState} saveFileState={saveFileState} updateVideoMethod={updateVideoMethod} removeComponent={removeComponent} component={component}/>}
								{component.type === '8' && <ImageUpload8 order={OrderNumber} index={index} removeFileFormState={removeFileFormState} saveFileState={saveFileState} updateVideoMethod={updateVideoMethod} removeComponent={removeComponent} component={component}/>}
								
								{/*
								index !== 0 && (
									<button type="button" onClick={() => changeComponentOrder(index, index - 1)}>위로</button>
								)
								*/}
								{/*
								index !== components.length - 1 && (
									<button type="button" onClick={() => changeComponentOrder(index, index + 1)}>아래로</button>
								)
								*/}
							</div>
							);
						})}

							<div class="form-group row ">
								<label class="control-label col-md-3 col-sm-3 ">크레딧
								</label>
								<div class="col-md-6 col-sm-6 form-group row inputButtonArea">
								{creditsForms.map((credit, index) => (
									<div className="creditArea" key={index} data-ord={index + 1} style={{ display: "flex" }}>
									<input
									type="text"
									name="creditsJob"
									className="form-control"
									value={credit.creditsJob}
									placeholder=" "
									onChange={(e) => {
										const newCreditsForms = [...creditsForms];
										newCreditsForms[index].creditsJob = e.target.value;
										setCreditsForms(newCreditsForms);
									}}
									/>
									<input
									type="text"
									name="name"
									className="form-control"
									value={credit.creditsName}
									placeholder=" "
									onChange={(e) => {
										const newCreditsForms = [...creditsForms];
										newCreditsForms[index].creditsName = e.target.value;
										setCreditsForms(newCreditsForms);
									}}
									/>
									{index !== 0 && ( // 첫 번째 요소일 때 삭제 버튼을 표시하지 않음
									<button
										type="button"
										className="btn btn-secondary input-minus"
										onClick={() => handleRemoveCredit(index)}
										data-no={credit.creditsNo}
									>
										<i className="fa fa-minus"></i>
									</button>
									)}
								</div>
								))}
								<button type="button" onClick={handleAddCredit}>Add Credit</button>
								</div>
							</div>
							<div class="form-group row">
								<label class="col-md-3 col-sm-3  control-label">공개 여부
								</label>
								<div class="col-md-9 col-sm-9 ">
								<div>
									<label>
									<input
										type="radio"
										className="flat"
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
										className="flat"
										name="use_yn"
										value="N"
										checked={workForm.useYn === 'N'}
										onChange={() => toggleUseYn('N')}
									/> 비공개
									</label>
								</div>
								</div>
							</div>
						<div class="ln_solid"></div>
						<div class="form-group">
							<div class="col-md-9 col-sm-9  offset-md-3">
								<button type="button" onClick={()=>{
									
									console.log("work데이터 " + JSON.stringify(workForm,null,2));

									let videoForms = [];
									for(let i=0; i<components.length; i++){
										let videoForm = {
											videoId : components[i].videoId,
											videoTitle : components[i].videoTitle,
											videoContent : components[i].videoContent,
											videoUrl : components[i].videoUrl,
											videoOrd : components[i].videoOrd,
											videoType : components[i].type
										}
										videoForms.push(videoForm);
									}
									console.log("videoForms 확인 ")
									for(let i=0; i<videoForms.length; i++){
										console.log(i + " : " + JSON.stringify(videoForms[i],null,2));
									}
									/*
									for(let i=0; i<components.length; i++){
										console.log("컴포넌트 결과 :" + JSON.stringify(components[i],null,2));
									}
									*/
									console.log("크레딧 결과 : " )
									for(let i=0; i<creditsForms.length; i++){
										console.log(i + " : " + JSON.stringify(creditsForms[i],null,2));
									}
									console.log("썸네일 결과 결과 :" + JSON.stringify(thumbnailFileForm,null,2));
									
									
									console.log("저장 할 파일 : ");
									for(let i=0; i<saveFileForms.length; i++){
										console.log(i + ": " + JSON.stringify(saveFileForms[i],null,2));
									}

									
									console.log("removefile 확인");
									for(let i=0; i < removeFileForms.length; i++){
										console.log(i + ": " + JSON.stringify(removeFileForms[i],null,2));
									}

									/*
									let formData = new FormData();
									formData.append('workForm', work);
									formData.append('videoForms', components);
									formData.append('creditsForms', creditsForms);
*/
									console.log('API 호출');
									
									axios.post("http://localhost:3000/api/admin/work/save",{
										workForm : workForm,
										videoForms : videoForms,
										creditsForms : creditsForms,
										saveFileForms : saveFileForms,
										thumbnailFileForm : thumbnailFileForm,
										removeFileForms : removeFileForms
									}
									)
									.then(result => {
									  console.log(result);

									})

								}}class="btn btn-success">등록</button>
								<button type="button" class="btn btn-primary">취소</button>

								
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
    )
}

export default AdminWorkCreate;
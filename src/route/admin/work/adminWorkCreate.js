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
function AdminWorkCreate(){
	const [components, setComponents] = useState([]);
	const [componentOrder, setComponentOrder] = useState([]);

	let [fileIds, setFileIds] = useState([]);

	let componentsState = {
		components, setComponents
	}

	let fileState = {
		fileIds, setFileIds
	}
    console.log(fileIds);
	const addComponent = (componentType) => {
	  const newComponent = { type: componentType, id: components.length, order: componentOrder.length + 1, videoTitle:'', videoContent:'', videoUrl:''};
	  setComponents([...components, newComponent]);
	  setComponentOrder([...componentOrder, componentType]);
	};
  
	const removeComponent = (id , clickRemoveFileId) => {
		//setFileIds(prevFileIds => prevFileIds.filter(fileId => !clickRemoveFileId.includes(fileId)));
		setFileIds(prevFileIds => prevFileIds.filter(file => !clickRemoveFileId.includes(file.id)));
		const filteredComponents = components.filter(component => component.id !== id);
		const filteredOrder = componentOrder.filter((_, index) => index !== id);
	
		// 삭제된 컴포넌트 이후의 컴포넌트들의 order 값을 재조정
		const updatedComponents = filteredComponents.map(component => {
		  if (component.order > id) {
			return { ...component, order: component.order - 1 };
		  }
		  return component;
		});
	
		setComponents(updatedComponents);
		setComponentOrder(filteredOrder);
	  };

	  const changeComponentOrder = (currentIndex, newIndex) => {
		const newComponents = [...components];
		const movedComponent = newComponents.splice(currentIndex, 1)[0];
		newComponents.splice(newIndex, 0, movedComponent);
	  
		// 순서 변경 후 컴포넌트의 order 값 업데이트
		const updatedComponents = newComponents.map((component, index) => {
		  return { ...component, order: index + 1 };
		});

		const newFileIds = [...fileIds];

		// 순서 변경 후 파일의 order 값 업데이트
		const updatedFileIds = fileIds.map(file => {
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
		setFileIds(updatedFileIds);
	  };

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

	  const [creditsList, setCreditsList] = useState([{ job: '', name: '', creditsNo: 0 }]);

	  const handleAddCredit = () => {
		const newCreditsList = [...creditsList, { job: '', name: '', creditsNo: 0 }];
		setCreditsList(newCreditsList);
	  };
	
	  const handleRemoveCredit = (index) => {
		if (index === 0) {
		  return; // 첫 번째 요소는 삭제할 수 없도록 처리
		}
		const newCreditsList = [...creditsList];
		newCreditsList.splice(index, 1);
		setCreditsList(newCreditsList);
	  };
	
    return(

		<div class="col-md-12 col-sm-12 ">
			<div class="x_panel">
				<div class="x_content">
					<br />
					<form id="form" action="/admin/work/save.do" method="post" enctype="multipart/form-data" class="form-horizontal form-label-left">
						<div class="form-group row ">
							<label class="control-label col-md-3 col-sm-3 ">대표 썸네일</label>
									<div class="col-md-9 col-sm-9 ">
										<input type="file" id="thumb_nail" name="thumb_nail" class="form-control" />
									</div>

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
								{component.type === '1' && <ImageUpload1 order={OrderNumber} index={index} fileState={fileState} updateVideoMethod={updateVideoMethod} removeComponent={removeComponent} component={component}/>}
								{component.type === '2' && <ImageUpload2 order={OrderNumber} index={index} fileState={fileState} updateVideoMethod={updateVideoMethod} removeComponent={removeComponent} component={component}/>}
								{component.type === '3' && <ImageUpload3 order={OrderNumber} index={index} fileState={fileState} updateVideoMethod={updateVideoMethod} removeComponent={removeComponent} component={component}/>}
								{component.type === '4' && <ImageUpload4 order={OrderNumber} index={index} fileState={fileState} updateVideoMethod={updateVideoMethod} removeComponent={removeComponent} component={component}/>}
								{component.type === '5' && <ImageUpload5 order={OrderNumber} index={index} fileState={fileState} updateVideoMethod={updateVideoMethod} removeComponent={removeComponent} component={component}/>}
								{component.type === '6' && <ImageUpload6 order={OrderNumber} index={index} fileState={fileState} updateVideoMethod={updateVideoMethod} removeComponent={removeComponent} component={component}/>}
								{component.type === '7' && <ImageUpload7 order={OrderNumber} index={index} fileState={fileState} updateVideoMethod={updateVideoMethod} removeComponent={removeComponent} component={component}/>}
								{component.type === '8' && <ImageUpload8 order={OrderNumber} index={index} fileState={fileState} updateVideoMethod={updateVideoMethod} removeComponent={removeComponent} component={component}/>}
								{index !== 0 && (
									<button type="button" onClick={() => changeComponentOrder(index, index - 1)}>위로</button>
								)}
								{index !== components.length - 1 && (
									<button type="button" onClick={() => changeComponentOrder(index, index + 1)}>아래로</button>
								)}
							</div>
							);
						})}

							<div class="form-group row ">
								<label class="control-label col-md-3 col-sm-3 ">크레딧
								</label>
								<div class="col-md-6 col-sm-6 form-group row inputButtonArea">
								{creditsList.map((credit, index) => (
									<div className="creditArea" key={index} data-ord={index + 1} style={{ display: "flex" }}>
									<input
									type="text"
									name="job"
									className="form-control"
									value={credit.job}
									placeholder=" "
									onChange={(e) => {
										const newCreditsList = [...creditsList];
										newCreditsList[index].job = e.target.value;
										setCreditsList(newCreditsList);
									}}
									/>
									<input
									type="text"
									name="name"
									className="form-control"
									value={credit.name}
									placeholder=" "
									onChange={(e) => {
										const newCreditsList = [...creditsList];
										newCreditsList[index].name = e.target.value;
										setCreditsList(newCreditsList);
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
									<div >
										<label>
											<input type="radio" class="flat" name="use_yn" value="Y" /> 공개
										</label>
									</div>
									<div >
										<label>
											<input type="radio" class="flat" name="use_yn" value="N" /> 비공개
										</label>
									</div>
								</div>
							</div>
						<div class="ln_solid"></div>
						<div class="form-group">
							<div class="col-md-9 col-sm-9  offset-md-3">
								<button type="button" onClick={()=>{
									
									for(let i=0; i<components.length; i++){
									console.log("컴포넌트 결과 :" + JSON.stringify(components[i],null,2));
									}
									console.log("결과");
									for(let i=0; i<fileIds.length; i++){
										console.log("저장 할 파일 : " + fileIds[i].id + "order : " + fileIds[i].order);
									}
									for(let i=0; i<creditsList.length; i++){
										console.log("크레딧 결과 : " + JSON.stringify(creditsList[i],null,2));
									}
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
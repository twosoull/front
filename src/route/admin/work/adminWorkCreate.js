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


function AdminWorkCreate(){

    return(

		<div class="col-md-12 col-sm-12 ">
			<div class="x_panel">
				<div class="x_content">
					<br />
					<form id="form" action="/admin/work/save.do" method="post" enctype="multipart/form-data" class="form-horizontal form-label-left">
						<div class="form-group row ">
							<label class="control-label col-md-3 col-sm-3 ">대제목</label>
							<div class="col-md-9 col-sm-9 ">
								<textarea type="text" id="work_title" name="work_title" class="form-control" placeholder="대제목을 입력해 주세요." value="">
								
								</textarea>
							</div>
							<label class="control-label col-md-3 col-sm-3 ">대표 썸네일</label>
						{/*
									<div class="col-md-9 col-sm-9 file_one_box">
										<img class="imgBox" src="${fileVo.filePath }" />
										<button type="button" data-ord="${fileVo.ord}" data-no="${fileVo.fileNo}" class="btn btn-secondary file-minus"><i class="fa fa-minus"></i></button>
									</div>

								*/}
									<div class="col-md-9 col-sm-9 ">
										<input type="file" id="thumb_nail" name="thumb_nail" class="form-control" />
									</div>

						</div>
						<div class="">
							<a href="/admin/work/write-01.do" class="btn btn-primary" style={{color:"white"}}>유형01 등록</a>
							<a href="/admin/work/write-02.do" class="btn btn-primary" style={{color:"white"}}>유형02 등록</a>
							<a href="/admin/work/write-03.do" class="btn btn-primary" style={{color:"white"}}>유형03 등록</a>
						</div>
<ImageUpload1 />
<ImageUpload2 />
<ImageUpload3 />
<ImageUpload4 />
<ImageUpload5 />
<ImageUpload6 />
<ImageUpload7 />
<ImageUpload8 />

							<div class="form-group row ">
								<label class="control-label col-md-3 col-sm-3 ">크레딧
								</label>
								<div class="col-md-6 col-sm-6 form-group row inputButtonArea">
									<div class="creditArea" data-ord="1" style={{display:"flex"}}>
										<input type="text" name="job" class="form-control" value="${CreditsList[0].job}" placeholder=" " />
										<input type="text" name="name" class="form-control" value="${CreditsList[0].name}" placeholder=" " />
										<button type="button" data-no="${CreditsList[0].creditsNo }" class="btn btn-secondary input-plus"><i class="fa fa-plus"></i></button>
									</div>

										<div class="creditArea" data-ord="${status.index + 1}" style={{display:"flex"}}>
											<input type="text" name="job" class="form-control" value="${item.job}" placeholder=" " />
											<input type="text" name="name" class="form-control" value="${item.name}" placeholder=" " />
											<button type="button" data-no="${item.creditsNo}" class="btn btn-secondary input-minus"><i class="fa fa-minus"></i></button>
										</div>
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
								<button type="button" id="save" class="btn btn-success">등록</button>
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
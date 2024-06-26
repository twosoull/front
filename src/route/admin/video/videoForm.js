function VideoForm(props){
    return (
        <div id="videoBox01">
            <div className="form-group row ">
                <label className="control-label col-md-3 col-sm-3 ">영상 제목</label>
                <div className="col-md-9 col-sm-9 ">
                    <input type="text" className="form-control video_title" onChange={(e)=>{
                            props.updateVideoMethod.updateVideoTitleByOrder(props.order,e.target.value);
                    }} placeholder="영상 제목을 작성해주세요." value={props.videoForm.videoTitle} />
                </div>
            </div>
            <div className="form-group row">
                <label className="control-label col-md-3 col-sm-3 ">영상 설명</label>
                <div className="col-md-9 col-sm-9 ">
                    <textarea id="textarea0'+ord+'" className="col-md-9 col-sm-9 video_content" onChange={(e)=>{
                            props.updateVideoMethod.updateVideoContentByOrder(props.order,e.target.value);
                    }} placeholder="영상 설명을 작성해주세요." >{props.videoForm.videoContent}</textarea>
                </div>
            </div>
            <div className="form-group row ">
                <label className="control-label col-md-3 col-sm-3 ">영상 URL</label>
                <div className="col-md-9 col-sm-9 ">
                    <input type="text"  name="video_url" className="form-control video_url" onChange={(e)=>{
                            props.updateVideoMethod.updateVideoUrlByOrder(props.order,e.target.value);
                    }}  placeholder="영상 URL을 작성해주세요" value={props.videoForm.videoUrl}/>
                </div>
            </div>
        </div>
    )
}

export default VideoForm;
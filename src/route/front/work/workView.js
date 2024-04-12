import { Fragment, useEffect, useState } from "react";
import isEmpty from "../../utils/util";
import axios from "axios";
import { useParams } from "react-router-dom";
import VideoTmpl1 from "./videoTmpl/videoTmpl1";
import VideoTmpl3 from "./videoTmpl/videoTmpl3";
import VideoTmpl2 from "./videoTmpl/videoTmpl2";
import VideoTmpl4 from "./videoTmpl/videoTmpl4";
import VideoTmpl6 from "./videoTmpl/videoTmpl6";
import VideoTmpl5 from "./videoTmpl/videoTmpl5";
import VideoTmpl7 from "./videoTmpl/videoTmpl7";
import VideoTmpl8 from "./videoTmpl/videoTmpl8";

function WorkView(){
    let [work, setWork] = useState();
    let [videos, setVideos] = useState([{videoTitle:'d',videoContent:'d',videoUrl:'d'}]);
    let [credits, setCredits] = useState([]);
    const findParams = useParams();
    let workId = findParams.id;

    let params = { workId : workId}
    useEffect(() => {
        axios.get("/api/work/findId",{params}).then((result) => {
            console.log("분석 : " + JSON.stringify(result.data.data,null,2));
            if (isEmpty(result.data.code)) {
                setWork(result.data.data);
                setVideos(result.data.data.videos);
                setCredits(result.data.data.credits);
            } else if (result.data.code == 'NOT_USER') {
                alert(result.data.message);
                window.location.href = "/admin/login";
            }
        });
    },[setWork,setVideos,setCredits]);


    return(
        <div class="content">
            <div class="contents_box">
                <div class="txt_area">
                    <div class="wrap video_detail_area">
                        <h2 class="tit ">{videos[0].videoTitle}</h2>
                            <p class="txt">{videos[0].videoContent}
                            </p>
                    </div>
                </div>
                <div class="video_url_area">
                    <div class="video_area">
                        <div class="wrap">
                            <iframe src="" title="INAE - The most scalable coin"></iframe>
                        </div>
                    </div>
                </div>
                <div class="img_area">
                    <div class="wrap">
                        <ul class="img_list">
                            {videos.map((video, index)=>{
                                return(
                                    <Fragment>
                                        {video.videoType === '1' && <VideoTmpl1 video={video} /> }
                                        {video.videoType === '2' && <VideoTmpl2 video={video} /> }
                                        {video.videoType === '3' && <VideoTmpl3 video={video} /> }
                                        {video.videoType === '4' && <VideoTmpl4 video={video} /> }
                                        {video.videoType === '5' && <VideoTmpl5 video={video} /> }
                                        {video.videoType === '6' && <VideoTmpl6 video={video} /> }
                                        {video.videoType === '7' && <VideoTmpl7 video={video} /> }
                                        {video.videoType === '8' && <VideoTmpl8 video={video} /> }
                                    </Fragment>
                                    );
                            })};
                        </ul>
                    </div>
                </div>
                </div>
            <div class="multli_area">
                <div class="wrap">
                    <div class="multi_box">
                        <h2 class="tit">Project</h2>
                        <div class="con">
                            <ul class="form">

                                    <li>
                                        {credits.map((credit,index)=>{
                                            return(
                                                <Fragment>
                                                    <div class="label"><span>{index}</span><strong>{credit.job}</strong></div>
                                                    <div class="txt">{credit.name}</div>
                                                </Fragment>
                                            )
                                        })}
                                    </li>

                            </ul>
                        </div>
                        <div class="btn_box">
                            <a href="/work/init" class="btn_basic">목록</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkView;
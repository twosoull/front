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
import ErrorBoundary from "../../error/ErrorBoundary";
import IframComponent from "./iframComponent";

function WorkView(props){
    
    let [work, setWork] = useState();
    let [videos, setVideos] = useState([{videoTitle:'d',videoContent:'d',videoUrl:'d'}]);
    let [credits, setCredits] = useState([]);
    const findParams = useParams();
    let workId = findParams.id;

    let params = { workId : workId}
    useEffect(() => {
        axios.get("/api/work/findId",{params}).then((result) => {
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
        <div className="content">
            <div className="contents_box">
                <div className="txt_area">
                    <div className="wrap video_detail_area">
                        <h2 className="tit ">{videos[0].videoTitle}</h2>
                            <p className="txt">{videos[0].videoContent}
                            </p>
                    </div>
                </div>
                <div className="video_url_area">
                    <div className="video_area">
                        <div className="wrap">
                        <ErrorBoundary>
                                <IframComponent key={0} videoUrl={videos[0].videoUrl}></IframComponent>
                                </ErrorBoundary>
                        </div>
                    </div>
                </div>
                <div className="img_area">
                    <div className="wrap">
                        <ul className="img_list">
                            {videos.map((video, index)=>{
                                return(
                                    <Fragment key={index}>
                                        {video.videoType === '1' && <VideoTmpl1 key={index} video={video} /> }
                                        {video.videoType === '2' && <VideoTmpl2 key={index} video={video} /> }
                                        {video.videoType === '3' && <VideoTmpl3 key={index} video={video} /> }
                                        {video.videoType === '4' && <VideoTmpl4 key={index} video={video} /> }
                                        {video.videoType === '5' && <VideoTmpl5 key={index} video={video} /> }
                                        {video.videoType === '6' && <VideoTmpl6 key={index} video={video} /> }
                                        {video.videoType === '7' && <VideoTmpl7 key={index} video={video} /> }
                                        {video.videoType === '8' && <VideoTmpl8 key={index} video={video} /> }
                                    </Fragment>
                                    );
                            })};
                        </ul>
                    </div>
                </div>
                </div>
            <div className="multli_area">
                <div className="wrap">
                    <div className="multi_box">
                        <h2 className="tit">Project</h2>
                        <div className="con">
                            <ul className="form">
                                {credits.map((credit,index)=>{
                                    return(
                                        <Fragment key={index}>
                                            <li>
                                                <div className="label"><span>{index + 1}</span><strong>{credit.job}</strong></div>
                                                <div className="txt">{credit.name}</div>
                                            </li>
                                        </Fragment>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="btn_box">
                            <a href="/work" className="btn_basic">목록</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkView;
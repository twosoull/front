import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

function AdminContactView(){

    const params2 = useLocation();

    console.log(params2);



    return(
        <div class="right_col" role="main">
            <div class="">
                <div class="page-title">
                    <div class="title_left">
                        <h3>Form Elements</h3>
                    </div>
                    <div class="title_right">
                        <div class="col-md-5 col-sm-5  form-group pull-right top_search">

                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-sm-12 ">
                    <div class="x_panel">
                        <div class="x_content">
                            <div class="col-md-6">
                                <p class="lead">contact - 상세</p>
                                <div class="table-responsive">
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <th style={{width:"50%"}}>회사명</th>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th>성함</th>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th>이메일</th>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th>연락처</th>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th>프로젝트 명</th>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th>제작일정</th>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th>영상길이</th>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th>제작 예산</th>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th>기타 내용</th>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th>첨부파일</th>
                                                <td><a href="/file/download?fileName=${fileVo.saveName}&orgName=${fileVo.orgName}"></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default AdminContactView;
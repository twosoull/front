import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { callDetailPage } from "../../utils/pagingUtil";
import axios from 'axios';
import apiUrl from "../../../apiUrl";

function AdminContactView(){

    const findParams = useParams();
    let contactId = findParams.id;

    let url = apiUrl + "/admin/contact/findId";
    let params = { contactId : contactId}

    let [contactBudget ,setContactBudget] = useState("");
    let [contactClientCompany ,setContactClientCompany] = useState("");
    let [contactClientMail ,setContactClientMail] = useState("");
    let [contactClientName ,setContactClientName] = useState("");
    let [contactClientTel ,setContactClientTel] = useState("");
    let [contactProjectSchedule ,setContactProjectSchedule] = useState("");
    let [contactProjectTitle ,setContactProjectTitle] = useState("");
    let [contactVideoLength ,setContactVideoLength] = useState("");
    let [contactContent ,setContactContent] = useState("");
    let [regDate ,setRegDate] = useState("");

    let [saveFileName ,setSaveFileName] = useState("");
    let [orgFileName ,setOrgFileName] = useState("");
    axios.get(url,{params}).then((result) => {
        console.log(result.data);

        let status = result.data.status;
        let data = result.data.data;

        setContactBudget(data.contactBudget);
        setContactClientCompany(data.contactClientCompany);
        setContactClientMail(data.contactClientMail);
        setContactClientName(data.contactClientName);
        setContactClientTel(data.contactClientTel);
        setContactProjectSchedule(data.contactProjectSchedule);
        setContactProjectTitle(data.contactProjectTitle);
        setContactVideoLength(data.contactVideoLength);
        setContactContent(data.contactContent);
        setRegDate(data.regDate);
        setSaveFileName(data.saveFileName);
        setOrgFileName(data.orgFileName);
        
    })

    console.log(contactClientCompany);
    return(
        <div className="right_col" role="main">
            <div className="">
                <div className="page-title">
                    <div className="title_left">
                        <h3>Form Elements</h3>
                    </div>
                    <div className="title_right">
                        <div className="col-md-5 col-sm-5  form-group pull-right top_search">

                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-sm-12 ">
                    <div className="x_panel">
                        <div className="x_content">
                            <div className="col-md-6">
                                <p className="lead">contact - 상세</p>
                                <div className="table-responsive">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <th style={{width:"50%"}}>회사명</th>
                                                <td>{contactClientCompany}</td>
                                            </tr>
                                            <tr>
                                                <th>성함</th>
                                                <td>{contactClientName}</td>
                                            </tr>
                                            <tr>
                                                <th>이메일</th>
                                                <td>{contactClientMail}</td>
                                            </tr>
                                            <tr>
                                                <th>연락처</th>
                                                <td>{contactClientTel}</td>
                                            </tr>
                                            <tr>
                                                <th>프로젝트 명</th>
                                                <td>{contactProjectTitle}</td>
                                            </tr>
                                            <tr>
                                                <th>제작일정</th>
                                                <td>{contactProjectSchedule}</td>
                                            </tr>
                                            <tr>
                                                <th>영상길이</th>
                                                <td>{contactVideoLength}</td>
                                            </tr>
                                            <tr>
                                                <th>제작 예산</th>
                                                <td>{contactBudget}</td>
                                            </tr>
                                            <tr>
                                                <th>기타 내용</th>
                                                <td>{contactContent}</td>
                                            </tr>
                                            <tr>
                                                <th>첨부파일</th>
                                                <td><a style={{color:"blue"}} onClick={()=>{
                                                    console.log(orgFileName);
                                                    let url = apiUrl + "/fileDownload?fileName=" + saveFileName + "&orgFileName=" + orgFileName;
                                                    axios.get(url, { responseType: 'blob' }).then((response) => {
                                                        const contentDisposition = response.headers['content-disposition'];
                                                        if (contentDisposition) {
                                                            const name = orgFileName;
                                                            const url = window.URL.createObjectURL(new Blob([response.data]));
                                                            const link = document.createElement('a');
                                                            link.href = url;
                                                            link.setAttribute('download', name);
                                                            link.style.cssText = 'display:none';
                                                            document.body.appendChild(link);
                                                            link.click();
                                                            link.remove();
                                                        } else {
                                                            console.error('Content-Disposition header not found in the response.');
                                                        }
                                                    }).catch((error) => {
                                                        console.error('Error occurred while downloading file:', error);
                                                    });
                                                }}>{orgFileName}</a></td>
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
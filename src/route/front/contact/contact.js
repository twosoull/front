import axios from "axios";
import { useState } from "react";
import apiUrl from "../../../apiUrl";

function Contact(){

    let [contact,setContact] = useState();
    let [files,setFiles] = useState();

    const updateContactClientCompany = (value) => {setContact(prevContact => ({...prevContact,
			contactClientCompany: value}));};
    const updateContactClientName = (value) => {setContact(prevContact => ({...prevContact,
			contactClientName: value}));};
    const updateContactClientTel = (value) => {setContact(prevContact => ({...prevContact,
			contactClientTel: value}));};
    const updateContactClientMail = (value) => {setContact(prevContact => ({...prevContact,
			contactClientMail: value}));};
    const updateContactProjectTitle = (value) => {setContact(prevContact => ({...prevContact,
            contactProjectTitle: value}));};
    const updateContactProjectSchedule = (value) => {setContact(prevContact => ({...prevContact,
            contactProjectSchedule: value}));};
    const updateContactContent = (value) => {setContact(prevContact => ({...prevContact,
            contactContent: value}));};

    const updateContactVideoLength = (value) => {setContact(prevContact => ({...prevContact,
            contactVideoLength: value}));};
    const updatecontactBudget = (value) => {setContact(prevContact => ({...prevContact,
            contactBudget : value}));};

    const handleFileChange = (file) => {
         // 파일이 여러 개일 경우를 대비하여 배열 형태로 저장합니다.
         setFiles(file);
    };
              
    return(
        <div className="content">
            <div className="txt_area">
                <h2 className="tit">
                    프로젝트 문의나 의뢰가 있나요?<br />
                    <strong>루프</strong>가 도와드릴게요 :
                </h2>
                <p className="txt">
                    고객보다 앞서 제안을 드리고 함께<br className="for_mob" /> 고민하여 영상을 제작합니다.<br />
                    문의를 남겨주시면 확인 후 1~2일 이내에<br className="for_mob" /> 담당자가 연락을 드릴 예정입니다.
                </p>
            </div>
            <div className="multli_area">
                <div className="wrap">
                    <form id="form" action="/contact/save.do" method="post"  encType="multipart/form-data">
                        <div className="multi_box">
                            <h2 className="tit">Contact</h2>
                            <div className="con">
                                <ul className="form">
                                    <li>
                                        <div className="label"><span>01</span><strong>기본 정보</strong></div>
                                        <ul className="form_list">
                                            <li><div className="form_input"><input type="text" name="contact_client_company" placeholder="회사명을 입력해주세요." onChange={(e)=>{
                                                updateContactClientCompany(e.target.value);
                                            }} /></div></li>
                                            <li><div className="form_input"><input type="text" name="contact_client_name" placeholder="성함을 입력해주세요." onChange={(e)=>{
                                                updateContactClientName(e.target.value);
                                            }}/></div></li>
                                            <li><div className="form_input"><input type="text" name="contact_client_tel" placeholder="연락처를 입력해주세요." onChange={(e)=>{
                                                updateContactClientTel(e.target.value);
                                            }}/></div></li>
                                            <li><div className="form_input"><input type="text" name="contact_client_mail" placeholder="이메일을 입력해주세요." onChange={(e)=>{
                                                updateContactClientMail(e.target.value);
                                            }}/></div></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="label"><span>02</span><strong>프로젝트 정보</strong></div>
                                        <ul className="form_list">
                                            <li><div className="form_input"><input type="text" name="contact_project_title" placeholder="프로젝트명을 입력해주세요." onChange={(e)=>{
                                                updateContactProjectTitle(e.target.value);
                                            }} /></div></li>
                                            <li><div className="form_input"><input type="text" name="contact_project_schedule" placeholder="제작일정을 입력해주세요." onChange={(e)=>{
                                                updateContactProjectSchedule(e.target.value);
                                            }} /></div></li>
                                            <li>
                                                <div className="form_select">
                                                    <button type="button" >영상 길이를 선택해주세요.</button>
                                                    <ul>
                                                        <li><button type="button" className="length" data-value="30초 이내"
                                                        onClick={(e)=>{
                                                            updateContactVideoLength("30초 이내");
                                                        }}>30초 이내</button></li>
                                                        <li><button type="button" className="length" data-value="30초 ~ 1분이내"
                                                        onClick={(e)=>{
                                                            updateContactVideoLength("30초 ~ 1분이내");
                                                        }}>30초 ~ 1분이내</button></li>
                                                        <li><button type="button" className="length" data-value="1분 ~ 2분"
                                                        onClick={(e)=>{
                                                            updateContactVideoLength("1분 ~ 2분");
                                                        }}>1분 ~ 2분</button></li>
                                                        <li><button type="button" className="length" data-value="2분 ~ 3분"
                                                        onClick={(e)=>{
                                                            updateContactVideoLength("2분 ~ 3분");
                                                        }}>2분 ~ 3분</button></li>
                                                        <li><button type="button" className="length" data-value="3분 이상"
                                                        onClick={(e)=>{
                                                            updateContactVideoLength("3분 이상");
                                                        }}>3분 이상</button></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="form_select">
                                                    <button type="button" >제작 예산을 선택해주세요.</button>
                                                    <ul>
                                                        <li><button type="button" className="budget" data-value="500만 원 이내"
                                                        onClick={(e)=>{
                                                            updatecontactBudget("500만 원 이내");
                                                        }}>500만 원 이내</button></li>
                                                        <li><button type="button" className="budget" data-value="1000 ~ 1500 만 원"
                                                        onClick={(e)=>{
                                                            updatecontactBudget("1000 ~ 1500 만 원");
                                                        }}>1000 ~ 1500 만 원</button></li>
                                                        <li><button type="button" className="budget" data-value="1500 ~ 2000 만 원"
                                                        onClick={(e)=>{
                                                            updatecontactBudget("1500 ~ 2000 만 원");
                                                        }}>1500 ~ 2000 만 원</button></li>
                                                        <li><button type="button" className="budget" data-value="3000 ~ 4000 만 원"
                                                        onClick={(e)=>{
                                                            updatecontactBudget("3000 ~ 4000 만 원");
                                                        }}>3000 ~ 4000 만 원</button></li>
                                                        <li><button type="button" className="budget" data-value="5000 만 원 이상"
                                                        onClick={(e)=>{
                                                            updatecontactBudget("5000 만 원 이상");
                                                        }}>5000 만 원 이상</button></li>
                                                        <li><button type="button" className="budget" data-value="기타협의 필요"
                                                        onClick={(e)=>{
                                                            updatecontactBudget("기타협의 필요");
                                                        }}>기타협의 필요</button></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="w100p"><div className="form_textarea"><textarea name="contact_content" placeholder="상담내용이나 참고할 레퍼런스 URL 등 자유롭게 작성해주세요."onChange={(e)=>{
                                                updateContactContent(e.target.value);
                                            }}></textarea></div></li>
                                            <li className="w100p pt0">

                                                    {files && files.length > 0 ? (
                                                        <div className="form_attach">
                                                                <div className="form_attach_con" id="file_box">

                                                                <div id="attachment" className="attachment">
                                                                    <a href="javascript:;">{files[0].name}</a>
                                                                    <button type="button" id="remove_file" className="btn_del"
                                                                    onClick={()=>{
                                                                        setFiles('');
                                                                    }}><span className="blind">삭제</span></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="form_attach">
                                                                <div id="form_attach_btn" className="form_attach_btn">
                                                            
                                                                <input type="file" name="contact_file" id="attach" onChange={(e) => handleFileChange(e.target.files)} />
                                                                    <label htmlFor="attach">파일첨부</label>
                                                                </div>
                                                                <div className="form_attach_con" id="file_box">
                                                                    <span id="file_info" style={{color:"grey"}}>  * 파일이 여러개일 경우 압축파일로 첨부해주세요.</span>

                                                                    <div id="attachment" className="attachment"></div>
                                                                </div>
                                                        </div>
                                                    )}
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="w100p mt20">
                                        <div className="form_chk">
                                            <input type="checkbox" id="privacy" />
                                            <label htmlFor="privacy"><strong>개인정보활용</strong> 에 동의합니다.</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="btn_box">
                                <input id="sub" type="button" onClick={()=>{
                                    const checkbox = document.getElementById('privacy');
                                    
                                    if (!checkbox.checked) {
                                        alert("개인정보활용에 동의해주세요.");
                                        return false;
                                    }

                                    if(window.confirm("메일 발송까지 5초 정도의 시간이 발생합니다. 참고 부탁드리겠습니다.")){
										console.log(" 확인 : " + JSON.stringify(contact,null,2));

                                        console.log('API 호출');
                                        // FormData 객체 생성
                                        const formData = new FormData();

                                        // 파일을 FormData에 추가
                                        if (files && files.length > 0) {
                                            for (let i = 0; i < files.length; i++) {
                                            formData.append('files', files[i]);
                                            console.log(files[i]);
                                            }
                                        }

                                        // contact 객체를 JSON 문자열로 변환하여 FormData에 추가
                                        const json = JSON.stringify(contact);//데이터는 json타입으로 처리하고 blob에 넣어준다.
                                        const blob = new Blob([json], { type: 'application/json' });
                                        formData.append('contactForm', blob);

                                        // API 호출
                                        axios.post(apiUrl + "/contact/save", formData, {
                                            headers: {
                                                'Content-Type': 'multipart/form-data'
                                            }
                                        }).then(result => {
                                            if(result.data.status = 'OK'){
                                                alert("확인 후 1~2일 이내에 담당자가 연락을 드릴 예정입니다. 감사합니다.");
                                                window.location.href = "/contact/init";
                                            }
                                        }).catch(function (error) {
                                            alert(error.response.data.errors[0].message);
                                            
                                        })
                                    }
                                        
                                }}value="문의하기" className="btn_submit" />
                            </div>
                        </div>
                        <input type="hidden" id="contact_video_length" name="contact_video_length" value="" />
                        <input type="hidden" id="contact_budget" name="contact_budget" value="" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
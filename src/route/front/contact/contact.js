import { useState } from "react";

function Contact(){

    let [contact,setContact] = useState();

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
            contactProjectTitle: value}));};
    const updateContactContent = (value) => {setContact(prevContact => ({...prevContact,
            contactContent: value}));};

    const updateContactVideoLength = (value) => {setContact(prevContact => ({...prevContact,
            contactVideoLength: value}));};

    return(
        <div class="content">
            <div class="txt_area">
                <h2 class="tit">
                    프로젝트 문의나 의뢰가 있나요?<br />
                    <strong>루프</strong>가 도와드릴게요 :
                </h2>
                <p class="txt">
                    고객보다 앞서 제안을 드리고 함께<br class="for_mob" /> 고민하여 영상을 제작합니다.<br />
                    문의를 남겨주시면 확인 후 1~2일 이내에<br class="for_mob" /> 담당자가 연락을 드릴 예정입니다.
                </p>
            </div>
            <div class="multli_area">
                <div class="wrap">
                    <form id="form" action="/contact/save.do" method="post"  enctype="multipart/form-data">
                        <div class="multi_box">
                            <h2 class="tit">Contact</h2>
                            <div class="con">
                                <ul class="form">
                                    <li>
                                        <div class="label"><span>01</span><strong>기본 정보</strong></div>
                                        <ul class="form_list">
                                            <li><div class="form_input"><input type="text" name="contact_client_company" placeholder="회사명을 입력해주세요." onChange={(e)=>{
                                                updateContactClientCompany(e.target.value);
                                            }} /></div></li>
                                            <li><div class="form_input"><input type="text" name="contact_client_name" placeholder="성함을 입력해주세요." onChange={(e)=>{
                                                updateContactClientName(e.target.value);
                                            }}/></div></li>
                                            <li><div class="form_input"><input type="text" name="contact_client_tel" placeholder="연락처를 입력해주세요." onChange={(e)=>{
                                                updateContactClientTel(e.target.value);
                                            }}/></div></li>
                                            <li><div class="form_input"><input type="text" name="contact_client_mail" placeholder="이메일을 입력해주세요." onChange={(e)=>{
                                                updateContactClientMail(e.target.value);
                                            }}/></div></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div class="label"><span>02</span><strong>프로젝트 정보</strong></div>
                                        <ul class="form_list">
                                            <li><div class="form_input"><input type="text" name="contact_project_title" placeholder="프로젝트명을 입력해주세요." onChange={(e)=>{
                                                updateContactProjectTitle(e.target.value);
                                            }} /></div></li>
                                            <li><div class="form_input"><input type="text" name="contact_project_schedule" placeholder="제작일정을 입력해주세요." onChange={(e)=>{
                                                updateContactProjectSchedule(e.target.value);
                                            }} /></div></li>
                                            <li>
                                                <div class="form_select">
                                                    <button type="button" >영상 길이를 선택해주세요.</button>
                                                    <ul>
                                                        <li><button type="button" class="length" data-value="30초 이내"
                                                        onClick={(e)=>{
                                                            updateContactVideoLength("30초 이내");
                                                        }}>30초 이내</button></li>
                                                        <li><button type="button" class="length" data-value="30초 ~ 1분이내">30초 ~ 1분이내</button></li>
                                                        <li><button type="button" class="length" data-value="1분 ~ 2분">1분 ~ 2분</button></li>
                                                        <li><button type="button" class="length" data-value="2분 ~ 3분">2분 ~ 3분</button></li>
                                                        <li><button type="button" class="length" data-value="3분 이상">3분 이상</button></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="form_select">
                                                    <button type="button" >제작 예산을 선택해주세요.</button>
                                                    <ul>
                                                        <li><button type="button" class="budget" data-value="500만 원 이내">500만 원 이내</button></li>
                                                        <li><button type="button" class="budget" data-value="1000 ~ 1500 만 원">1000 ~ 1500 만 원</button></li>
                                                        <li><button type="button" class="budget" data-value="1500 ~ 2000 만 원">1500 ~ 2000 만 원</button></li>
                                                        <li><button type="button" class="budget" data-value="3000 ~ 4000 만 원">3000 ~ 4000 만 원</button></li>
                                                        <li><button type="button" class="budget" data-value="5000 만 원 이상">5000 만 원 이상</button></li>
                                                        <li><button type="button" class="budget" data-value="기타협의 필요">기타협의 필요</button></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="w100p"><div class="form_textarea"><textarea name="contact_content" placeholder="상담내용이나 참고할 레퍼런스 URL 등 자유롭게 작성해주세요."onChange={(e)=>{
                                                updateContactContent(e.target.value);
                                            }}></textarea></div></li>
                                            <li class="w100p pt0">
                                                <div class="form_attach">
                                                    <div id="form_attach_btn" class="form_attach_btn">
                                                        <input type="file" name="contact_file" id="attach" />
                                                        <label for="attach">파일첨부</label>
                                                    </div>
                                                    <div class="form_attach_con" id="file_box">
                                                        <span id="file_info" style={{color:"grey"}}>  * 파일이 여러개일 경우 압축파일로 첨부해주세요.</span>

                                                        <div id="attachment" class="attachment"></div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="w100p mt20">
                                        <div class="form_chk">
                                            <input type="checkbox" id="privacy" />
                                            <label for="privacy"><strong>개인정보활용</strong> 에 동의합니다.</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="btn_box">
                                <input id="sub" type="button" onClick={()=>{
										console.log(" 확인 : " + JSON.stringify(contact,null,2));
                                }}value="문의하기" class="btn_submit" />
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

import { Link } from 'react-router-dom';
import { Paging, callApiGetContentList } from '../../utils/pagingUtil.js';
import {Navbar,Container,Nav,Button,Row,Col} from 'react-bootstrap';
import axios from 'axios';
function AdminContactList(props){
    return(
            <div className="col-md-12 col-sm-12  ">
                <div className="x_panel">
                    <div className="x_content">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>프로젝트명</th>
                                    <th>성함</th>
                                    <th>프로젝트기간</th>
                                    <th>등록일</th>
                                    <th>삭제</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                props.pagingProps.resultList.map((a, index) => {
                                    return (<ResultList contact={a} index={index} navigate={props.pagingProps.navigate}/>)
                                })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                {<Paging pagingProps={props.pagingProps}/>}
            </div>
    )
}
function ResultList(props) {
    return (
        <tr>
            <th scope="row">{props.contact.contact_no}</th>
            <td>
                <Link to={`/admin/contact/view/${props.contact.contact_no}`} state={{ contact_no: props.contact.contact_no }}>
                    [{props.contact.contactClientCompany}] {props.contact.contactProjectTitle}
                </Link>
            </td>
            <td>{props.contact.contactClientName}</td>
            <td>{props.contact.contactProjectSchedule}</td>
            <td>{props.contact.regDate}</td>
            <td><button type='button' className="btn btn-primary" style={{color:"white"}} onClick={()=>{

                if(window.confirm("정말 삭제 하시겠습니까?")){
                    let params = { contactId : props.contact.contact_no}
                    let url = "/api/admin/contact/delete";
                    axios.get("/api/admin/contact/delete",{params}).then((result) => {
                        console.log(result.data.status);
                        if(result.data.status == "OK"){
                            alert("삭제 되었습니다.")
                            window.location.href = "/admin/contact/init";
                        }
                    }).catch((error) => {
                        console.error('Error occurred while downloading file:', error);
                    });
                }
            }}>삭제</button></td>
        </tr>
    );
}


export default AdminContactList;
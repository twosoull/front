
import { Paging, callApiGetContentList } from '../../utils/pagingUtil.js';
import {Navbar,Container,Nav,Button,Row,Col} from 'react-bootstrap';

function AdminContactList(props){
    console.log(props.pagingProps);
    return(
            <div class="col-md-12 col-sm-12  ">
                <div class="x_panel">
                    <div class="x_content">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>프로젝트명</th>
                                    <th>성함</th>
                                    <th>프로젝트기간</th>
                                    <th>등록일</th>
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
            <td><Nav.Link onClick={()=>{props.navigate('/admin/contact/view')}}>[{props.contact.contactClientCompany}] {props.contact.contactProjectTitle}</Nav.Link></td>
            <td>{props.contact.contactClientName}</td>
            <td>{props.contact.contactProjectSchedule}</td>
            <td>{props.contact.regDate}</td>
        </tr>
    );
}


export default AdminContactList;
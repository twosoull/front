import { Paging } from "../../utils/pagingUtil";
import { Link } from 'react-router-dom';
function AdminWorkList(props){

  
    return(
        <div class="right_col" role="main" style={{minHeight: "814px"}}>
          <div class="">
            <div class="page-title">
              <div class="title_left">
                <h3>WORK</h3>
              </div>
              <div class="title_right">
                <div class="col-md-5 col-sm-5   form-group pull-right top_search">
                </div>
              </div>
            </div>

            <div class="col-md-12 col-sm-12  ">
              <div class="x_panel">
                  <div class="x_title">
                      <a href="/admin/work/write-01.do" class="btn btn-primary" style={{color:"white"}}>유형01 등록</a>
                      <a href="/admin/work/write-02.do" class="btn btn-primary" style={{color:"white"}}>유형02 등록</a>
                      <a href="/admin/work/write-03.do" class="btn btn-primary" style={{color:"white"}}>유형03 등록</a>
                  </div>
                  <div class="x_content">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>제목</th>
                          <th>공개여부</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          props.pagingProps.resultList.map((a, index) => {
                            return (<ResultList work={a} index={index} navigate={props.pagingProps.navigate}/>)
                          })
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
            </div>
          </div>
          {<Paging pagingProps={props.pagingProps}/>}
      </div>
    );
}

function ResultList(props) {
  return (
    <tr>
      <th scope="row">{props.work.id}</th>
      <td><Link to={`/admin/work/view/${props.work.id}`} state={{ id : props.work.id }}>
                    {props.work.workTitle}
                </Link></td>
      <td>{props.work.useYn}</td>
    </tr>
    );
}

export default AdminWorkList;
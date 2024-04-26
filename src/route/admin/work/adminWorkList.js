import { Paging } from "../../utils/pagingUtil";
import { Link } from 'react-router-dom';
function AdminWorkList(props){

  
    return(

            <div className="col-md-12 col-sm-12  ">
              <div className="x_panel">
                  <div className="x_content">
                    <div className="x_title" style={{textAlign: "right"}}>
                        <a href="/admin/work/create" className="btn btn-primary" style={{color:"white" ,textAlign: "right"}}>등록</a>
                    </div>
                    <table className="table table-hover">
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
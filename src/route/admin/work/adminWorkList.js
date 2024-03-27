function AdminWorkList(){
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
                          <th>유형</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row"></th>
                          <td><a href="/admin/work/write-${item.workType}.do?work-no=${item.workNo}" ></a></td>
                          <td></td>
                          <td>유형$</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
            </div>
          </div>
      </div>
    );
}

export default AdminWorkList;
import { useEffect, useState } from 'react';
import axios from 'axios';
import isEmpty from './util';



function callApiGetContentList(pagingProps,i){

    let pageNum = i > 0 ? i-1 : i;
    const params = {page : pageNum}
    axios.get(pagingProps.url,{params}).then((result) => {
        console.log(result);
        if (result.data.status == 'OK') {
            let copy = [...pagingProps.resultList];
            copy = result.data.data.content;
            pagingProps.setResultList(copy);
            
            let curPage = result.data.data.number + 1;
            pagingProps.setCurPage(curPage); //현재 페이지 번호
            pagingProps.setTotalPage(result.data.data.totalPages);// 전체 페이지 수
            pagingProps.setTotalCount(result.data.data.totalElements);//전체 데이터 수
            pagingProps.setSize(result.data.data.pageable.size); //페이지 당 게시물 수
            pagingProps.setPageCount(10); // 화면에 나타날 페이지 갯수
            pagingProps.setPageGroup((Math.ceil((curPage/ pagingProps.pageCount))));
        } else if (result.data.code == 'NOT_USER') {
            alert(result.data.message);
            window.location.href = "/admin/login";
        }
    })
}

function Paging(props){
    let num = (props.pagingProps.curPage / props.pagingProps.pageCount);
    let lastNum = props.pagingProps.pageGroup * props.pagingProps.pageCount
    if (lastNum > props.pagingProps.totalPage) { lastNum = props.pagingProps.totalPage }
    let firstNum = lastNum - (props.pagingProps.pageCount)
	    if (props.pagingProps.pageCount > lastNum) { firstNum = 1 }
        
        return (
            <div class="col-sm-7">
                <div class="dataTables_paginate paging_simple_numbers" id="datatable_paginate">
                    <ul class="pagination">
                        {
                            firstNum === 1 ? <li></li>: 
                            <li class="paginate_button previous disabled" id="datatable-checkbox_previous" ><a href="#" aria-controls="datatable-checkbox" onClick={()=>props.pagingProps.setPageGroup(props.pagingProps.pageGroup-1)}  >&lt;</a></li>
                        }
                            <Page pagingProps={props.pagingProps} firstNum={firstNum} lastNum={lastNum}/>
                        {

                            lastNum === props.pagingProps.totalPage ? <div></div> : 
                            <li class="paginate_button next" id="datatable-checkbox_next"><a href="#" aria-controls="datatable-checkbox" data-dt-idx="7" tabindex="0" onClick={()=>{props.pagingProps.setPageGroup(props.pagingProps.pageGroup+1)}} >&gt;</a></li>

                        }
                    </ul>
                </div>
            </div>
                )   
}

function Page(props){
    let arr = []
    for (let i = props.firstNum; i <= props.lastNum; i++) {
        arr.push(
        <li class="paginate_button active">
            <a href="#"  aria-controls="datatable" 
            onClick={()=>{
                let pageNum = i-1;
                const params = {page : pageNum}
                callApiGetContentList(props.pagingProps,i);
            }} key={i} >{i}</a>
        </li>
        )
      }

    return arr;
}

export {callApiGetContentList,Paging,Page};
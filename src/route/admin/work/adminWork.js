import AdminWorkList from "./adminWorkList"
import axios from 'axios';
import isEmpty from '../../utils/util.js'
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Paging, callApiGetContentList } from '../../utils/pagingUtil.js';
import {Navbar,Container,Nav,Button,Row,Col} from 'react-bootstrap';
import AdminWorkView from "./adminWorkView.js";
import AdminWorkCreate from "./adminWorkCreate.js";
function AdminWork(){
    axios.post("/api/admin/login?userPw=As415263!!&userId=twosoull").then((result) => {

    })

    let navigate = useNavigate();
    /*contentList*/
    let [resultList, setResultList] = useState([0]);
    /*paging*/
    let [curPage, setCurPage] = useState(0);
    let [totalCount, setTotalCount] = useState(0);
    let [totalPage,setTotalPage] = useState(0);
    let [size,setSize] = useState(0);
    let [pageCount,setPageCount] = useState(10);
    let [pageGroup,setPageGroup] = useState(0);
    let [url,setUrl] = useState("/api/admin/work/list");   
    const pagingProps = {
        navigate,
        resultList, setResultList,
        curPage,
        setCurPage,
        totalCount,
        setTotalCount,
        totalPage,
        setTotalPage,
        size,
        setSize,
        pageCount,
        setPageCount,
        pageGroup,
        setPageGroup,
        url,setUrl
      };
      
    useEffect(() => {
        callApiGetContentList(pagingProps,0);
    }, [])
    let updateApiUri="http://localhost:3000/api/admin/work/update";
    let createApiUri="http://localhost:3000/api/admin/work/save"
    return (
        <div class="right_col" role="main" style={{ minHeight: "476.25px" }}>
            <div>
            <div class="page-title">
                <div class="title_left" style={{textAlign:"left" , marginLeft: "10px"}}>
                    <h3>WORK</h3>
                </div>
            </div>
            <Routes>
                <Route path="/init" element={<AdminWorkList pagingProps={pagingProps}/>} /> 
                <Route path="/view/:id" element={<AdminWorkCreate uri={updateApiUri} pagingProps={pagingProps}/>}/> 
                <Route path="/create" element={<AdminWorkCreate uri={createApiUri} pagingProps={pagingProps}/>}/> 
            </Routes>
                            
            </div>
    </div>
    )
}

export default AdminWork
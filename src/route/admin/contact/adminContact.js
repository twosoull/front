import axios from 'axios';
import isEmpty from '../../utils/util.js'
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Paging, callApiGetContentList } from '../../utils/pagingUtil.js';
import {Navbar,Container,Nav,Button,Row,Col} from 'react-bootstrap';
import ContactList from './adminContactList.js';
import AdminContactView from './adminContactView.js';
function AdminContact() {

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
    let [url,setUrl] = useState("/api/admin/contact/list");

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
        callApiGetContentList(pagingProps,0,url);
    }, [])
    return (
        <div class="right_col" role="main" style={{ minHeight: "814px" }}>
            <div class="">
                <div class="page-title">
                    <div class="title_left">
                        <h3>CONTACT</h3>
                    </div>
                    <div class="title_right">
                        <div class="col-md-5 col-sm-5   form-group pull-right top_search">
                        </div>
                    </div>
                </div>
                <Routes>
                    <Route path="/init" element={<ContactList pagingProps={pagingProps}/>} /> 
                    <Route path="/view/:id" element={<AdminContactView />} /> 
                </Routes>
            </div>
        </div>
    )
}
export default AdminContact;
import Footer from "./inc/footer";
import Sidebar from "./inc/sidebar";
import { Routes, Route, Link } from 'react-router-dom'
import AdminWorkList from "./work/adminWorkList";
import AdminContactList from "./contact/adminContactList";
import AdminContactView from "./contact/adminContactView";
function Admin(){
    return (
        <div>
          <Sidebar></Sidebar>
          <Routes>
            <Route path="/work/init" element={<AdminWorkList/>} />
            <Route path="/contact/*" element={<AdminContactList/>} />
          </Routes>
          <Footer></Footer>
    </div>

    );
}

export default Admin;
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Admin from './route/admin/admin.js'
import { Routes, Route, Link } from 'react-router-dom'
function App() {
/*
  axios.get("/api/main").then((result)=>{
    console.log(result.data);
  })
*/
  return (
    <div className="App">
      <div class="nav-md">
        <div class="container body">
          <div class="main_container">
            <Routes>
              <Route path="/admin/*" element={<Admin />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

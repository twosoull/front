import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Admin from './route/admin/admin.js'
import { Routes, Route, Link } from 'react-router-dom'
import Front from './route/front/front.js';
import { Helmet } from 'react-helmet';
import Login from './route/admin/login/login.js';
import ErrorBoundary from './route/error/ErrorBoundary.js';
function App() {
/*
  axios.get("/api/main").then((result)=>{
    console.log(result.data);
  })
*/
  return (
    <div className="App">
            <ErrorBoundary>
              <Routes>
                <Route path="/admin/login" element={<Login />} />
                <Route path="/admin/*" element={<Admin />} />
                <Route path="/*" element={<Front />} />
              </Routes>
            </ErrorBoundary>
    </div>
  );
}

export default App;

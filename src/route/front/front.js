import { Route, Routes } from "react-router-dom";
import Footer from "./inc/footer";
import UserHead from "./inc/frontHead";
import Header from "./inc/header";
import Main from "./main/main";
import WorkView from "./work/workView";
import WorkList from "./work/workList";
import About from "./about/about";
import Contact from "./contact/contact";
import { useState } from "react";
import RedirectMain from "./redirectMain";

function Front(){

    return(
        <div className="wrapper">
            <UserHead />
            <Header />
            <Routes>
					<Route path="/" element={<Main />  } />            
					<Route path="/work/view/:id" element={<WorkView />  } />
                    <Route path="/work" element={<WorkList />  } />
                    <Route path="/about" element={<About />  } />
                    <Route path="/contact" element={<Contact />  } />
                    <Route path="/*" element={
                        <RedirectMain />
                    } />
			</Routes>
            <Footer />
        </div>
    )
}

export default Front;
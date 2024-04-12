import { Route, Routes } from "react-router-dom";
import Footer from "./inc/footer";
import UserHead from "./inc/frontHead";
import Header from "./inc/header";
import Main from "./main/main";
import WorkView from "./work/workView";
import WorkList from "./work/workList";
import About from "./about/about";
import Contact from "./contact/contact";

function Front(){
    return(
        <div class="wrapper">
            <UserHead />
            <Header />
            <Routes>
					<Route path="/" element={<Main />  } />            
					<Route path="/work/view/:id" element={<WorkView />  } />
                    <Route path="/work/init" element={<WorkList />  } />
                    <Route path="/about/init" element={<About />  } />
                    <Route path="/contact/init" element={<Contact />  } />
			</Routes>
            <Footer />
        </div>
    )
}

export default Front;
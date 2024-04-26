import Footer from "./inc/footer";
import Sidebar from "./inc/sidebar";
import { Routes, Route, Link } from 'react-router-dom'
import AdminWorkList from "./work/adminWorkList";
import AdminContactList from "./contact/adminContactList";
import AdminContactView from "./contact/adminContactView";
import AdminContact from "./contact/adminContact";
import AdminWork from "./work/adminWork";
import AdminHead from "./inc/adminHead";
function Admin(){
    return (
	<div className="nav-md">
        <div className="container body">   
			<AdminHead/>
    		<div classNameName="main_container">
				<Sidebar></Sidebar>
				<div className="top_nav">
					<div className="nav_menu">
						<div className="nav toggle">
						</div>
						<nav className="nav navbar-nav">
							<ul className=" navbar-right">
								<li className="nav-item dropdown open" style={{paddingLeft: "15px"}}>
									<a href="javascript:;" className=" dropdown-toggle" aria-haspopup="true" id="navbarDropdown" data-toggle="dropdown" aria-expanded="false">
										Loop
									</a>

								</li>

								<li role="presentation" className="nav-item dropdown open"><a href="javascript:;" className="dropdown-toggle info-number" id="navbarDropdown1" data-toggle="dropdown" aria-expanded="false">
										<i className="fa fa-envelope-o"></i> <span className="badge bg-green">6</span>
								</a>
									<ul className="dropdown-menu list-unstyled msg_list" role="menu" aria-labelledby="navbarDropdown1">
										<li className="nav-item"><a className="dropdown-item"> <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span> <span> <span>John Smith</span> <span className="time">3 mins ago</span>
											</span> <span className="message"> Film festivals used to be
													do-or-die moments for movie makers. They were where... </span>
										</a></li>
										<li className="nav-item"><a className="dropdown-item"> <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span> <span> <span>John Smith</span> <span className="time">3 mins ago</span>
											</span> <span className="message"> Film festivals used to be
													do-or-die moments for movie makers. They were where... </span>
										</a></li>
										<li className="nav-item"><a className="dropdown-item"> <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span> <span> <span>John Smith</span> <span className="time">3 mins ago</span>
											</span> <span className="message"> Film festivals used to be
													do-or-die moments for movie makers. They were where... </span>
										</a></li>
										<li className="nav-item"><a className="dropdown-item"> <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span> <span> <span>John Smith</span> <span className="time">3 mins ago</span>
											</span> <span className="message"> Film festivals used to be
													do-or-die moments for movie makers. They were where... </span>
										</a></li>
										<li className="nav-item">
											<div className="text-center">
												<a className="dropdown-item"> <strong>See All Alerts</strong> <i className="fa fa-angle-right"></i>
												</a>
											</div>
										</li>
									</ul></li>
							</ul>
						</nav>
					</div>
				</div>
				<Routes>
					<Route path="/work/*" element={<AdminWork/>} />
					<Route path="/contact/*" element={<AdminContact/>} />
				</Routes>
				<Footer />
    		</div>
		</div>
	</div>
    );
}

export default Admin;
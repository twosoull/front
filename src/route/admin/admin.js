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
	<div class="nav-md">
        <div class="container body">   
			<AdminHead/>
    		<div className="main_container">
				<Sidebar></Sidebar>
				<div class="top_nav">
					<div class="nav_menu">
						<div class="nav toggle">
						</div>
						<nav class="nav navbar-nav">
							<ul class=" navbar-right">
								<li class="nav-item dropdown open" style={{paddingLeft: "15px"}}>
									<a href="javascript:;" class=" dropdown-toggle" aria-haspopup="true" id="navbarDropdown" data-toggle="dropdown" aria-expanded="false">
										Loop
									</a>

								</li>

								<li role="presentation" class="nav-item dropdown open"><a href="javascript:;" class="dropdown-toggle info-number" id="navbarDropdown1" data-toggle="dropdown" aria-expanded="false">
										<i class="fa fa-envelope-o"></i> <span class="badge bg-green">6</span>
								</a>
									<ul class="dropdown-menu list-unstyled msg_list" role="menu" aria-labelledby="navbarDropdown1">
										<li class="nav-item"><a class="dropdown-item"> <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span> <span> <span>John Smith</span> <span class="time">3 mins ago</span>
											</span> <span class="message"> Film festivals used to be
													do-or-die moments for movie makers. They were where... </span>
										</a></li>
										<li class="nav-item"><a class="dropdown-item"> <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span> <span> <span>John Smith</span> <span class="time">3 mins ago</span>
											</span> <span class="message"> Film festivals used to be
													do-or-die moments for movie makers. They were where... </span>
										</a></li>
										<li class="nav-item"><a class="dropdown-item"> <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span> <span> <span>John Smith</span> <span class="time">3 mins ago</span>
											</span> <span class="message"> Film festivals used to be
													do-or-die moments for movie makers. They were where... </span>
										</a></li>
										<li class="nav-item"><a class="dropdown-item"> <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span> <span> <span>John Smith</span> <span class="time">3 mins ago</span>
											</span> <span class="message"> Film festivals used to be
													do-or-die moments for movie makers. They were where... </span>
										</a></li>
										<li class="nav-item">
											<div class="text-center">
												<a class="dropdown-item"> <strong>See All Alerts</strong> <i class="fa fa-angle-right"></i>
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
				<Footer></Footer>
    		</div>
		</div>
	</div>
    );
}

export default Admin;
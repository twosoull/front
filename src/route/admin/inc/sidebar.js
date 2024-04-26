function Sidebar(){
    return(    
    <div className="col-md-3 left_col">
	    <div className="left_col scroll-view">
		    <div className="navbar nav_title" style={{border: "0"}}>
			    <a href="/admin/work/init" className="site_title">
				<span>LoopMotionStudio</span></a>
		    </div>

		    <div className="clearfix"></div>
		    <div className="profile clearfix">
		    	<div className="profile_info">
		    		<span>Welcome,</span>
		    		<h2>LoopMotionStudio</h2>
		    	</div>
		    </div>
            <br />
            <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                <div className="menu_section">
                    <h3>General</h3>
                    <ul className="nav side-menu">
                        <li><a href="/admin/work/init"><i className="fa fa-home"></i>Work</a></li>
                        <li><a href="/admin/contact/init"><i className="fa fa-edit"></i>Contact</a></li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Sidebar;
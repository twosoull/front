function Sidebar(){
    return(    
    <div class="col-md-3 left_col">
	    <div class="left_col scroll-view">
		    <div class="navbar nav_title" style={{border: "0"}}>
			    <a href="/admin/work/init.do" class="site_title">
				<span>LoopMotionStudio</span></a>
		    </div>

		    <div class="clearfix"></div>
		    <div class="profile clearfix">
		    	<div class="profile_info">
		    		<span>Welcome,</span>
		    		<h2>LoopMotionStudio</h2>
		    	</div>
		    </div>
            <br />
            <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
                <div class="menu_section">
                    <h3>General</h3>
                    <ul class="nav side-menu">
                        <li><a href="/admin/work/init.do"><i class="fa fa-home"></i>Work</a></li>
                        <li><a href="/admin/contact/init.do"><i class="fa fa-edit"></i>Contact</a></li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Sidebar;
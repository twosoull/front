import { NavLink } from "react-router-dom";

function Header(){
    return(
        <div className="header">
            <div className="wrap">
                <h1 className="logo"><NavLink to="/" activeClassName="active"><img src="/resources/image/logo.svg" alt="LOOP motion studio" /></NavLink></h1>
                <button className="btn_menu"><span className="blind">전체메뉴</span></button>
                <div className="menu_wrap">
                    <ul className="gnb">
                        <li><NavLink to="/about" activeClassName="active">ABOUT</NavLink></li>
                        <li><NavLink to="/work" activeClassName="active">WORK</NavLink></li>
                        <li><NavLink to="/contact" activeClassName="active">CONTACT</NavLink></li>
                    </ul>
                    <ul className="sns">
                        <li><a href="https://www.youtube.com/@loop_motionstudio" target="_blank" title="새창" className="sns_y"><span className="blind">루프 유튜브</span></a></li>
                        <li><a href="https://vimeo.com/user172433218" target="_blank" title="새창" className="sns_v"><span className="blind">루프 </span></a></li>
                        <li><a href="https://www.instagram.com/loop_motionstudio/" target="_blank" title="새창" className="sns_i"><span className="blind">루프 인스타그램</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;
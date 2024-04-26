function Footer(){
    return(
        <div className="footer">
        <div className="wrap">
            <div className="float_btn">
                <ul>
                    <li><a href="https://open.kakao.com/me/loopcreative" target="_blank" className="kakao"><strong>무엇이든 문의주세요.</strong></a></li>
                    <li><a href="javascript:;" className="btn_top"><span className="blind">최상단으로 이동</span></a></li>
                </ul>
            </div>
            <ul className="gnb">
                <li><a href="/about">ABOUT</a></li>
                <li><a href="/work">WORK</a></li>
                <li><a href="/contact">CONTACT</a></li>
            </ul>
            <p className="address" style={{textAlign:"left"}}>서울특별시 성동구 상원길 82 3층</p>
            <ul className="info">
                <li>
                    <strong>MAIL</strong>
                    <span>loopcreative.corp@gmail.com</span>
                </li>
            </ul>
            <p className="copyright" style={{textAlign:"left"}}>Copyright © 2022 loopcreative All rights reserved.</p>
        </div>
    </div>
    )
}

export default Footer;
function Header(){
    return(
        <div class="header">
            <div class="wrap">
                <h1 class="logo"><a href="/"><img src="/resources/image/logo.svg" alt="LOOP motion studio" /></a></h1>
                <button class="btn_menu"><span class="blind">전체메뉴</span></button>
                <div class="menu_wrap">
                    <ul class="gnb">
                        <li><a href="/about/init">ABOUT</a></li>
                        <li class="active"><a href="/work/init">WORK</a></li>
                        <li><a href="/contact/init">CONTACT</a></li>
                    </ul>
                    <ul class="sns">
                        <li><a href="https://www.youtube.com/@loop_motionstudio" target="_blank" title="새창" class="sns_y"><span class="blind">루프 유튜브</span></a></li>
                        <li><a href="https://vimeo.com/user172433218" target="_blank" title="새창" class="sns_v"><span class="blind">루프 </span></a></li>
                        <li><a href="https://www.instagram.com/loop_motionstudio/" target="_blank" title="새창" class="sns_i"><span class="blind">루프 인스타그램</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;
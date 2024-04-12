function About(){
    return(
<div class="content">
    <div class="txt_area">
        <div class="wrap">
            <h2 class="tit">영상을 무한 <strong>루프</strong></h2>
            <p class="txt">
                단순 광고 영상을 제작하는 것이 아닌<br class="for_mob" /> <strong>시각적 재미와 스토리</strong>를 동시에 담아 <br />
                시청자로 하여금 계속 찾아보게 만드는 영상을<br class="for_mob" /> 제작하는 모션그래픽 스튜디오 <strong>[루프]</strong> 입니다.
            </p>
        </div>
    </div>

    <div class="video_area">
        <div class="wrap">
            <iframe src="https://player.vimeo.com/video/815529958?h=2de4a8cf99" title=""
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>
    </div>

    <div class="txt_area">
        <div class="wrap">
            <p class="txt">
                TV/CF 및 수많은 광고 모션그래픽 프로젝트<br class="for_mob" /> 제작 경험을 통한<br class="for_pc" />
                <strong>짜임새 있는 영상의 구성과<br class="for_mob" /> 최상의 시각적 디자인을 구현</strong>하여 다양한 재미를 추구하며,<br />
                급변하는 트렌드에 맞추어 끊임없는 개발과<br class="for_mob" /> 도전정신으로 최고의 영상 제작을 목표로 합니다.
            </p>
        </div>
    </div>

    <div class="multli_area">
        <div class="wrap">
            <div class="multi_box">
                <h2 class="tit">
                    Clients
                    <div class="clients-swiper-controller">
                        <button class="swiper-button-prev"><span class="blind">이전</span></button>
                        <button class="swiper-button-next"><span class="blind">다음</span></button>
                    </div>
                </h2>
                <div class="con clients-swiper">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <ul>
                                    <li><img src="/resources/image/clients01.png" alt="SAMSUNG" /></li>
                                    <li><img src="/resources/image/clients03.png" alt="현대제철" /></li>
                                    <li><img src="/resources/image/clients05.png" alt="우리카드" /></li>
                                    <li><img src="/resources/image/clients06.png" alt="G마켓" /></li>
                                    <li><img src="/resources/image/clients07.png" alt="CJ ENM" /></li>
                                    <li><img src="/resources/image/clients08.png" alt="KT엔터프라이즈" /></li>
                                    <li><img src="/resources/image/clients09.png" alt="메트라이프" /></li>
                                    <li><img src="/resources/image/clients10.png" alt="신한자산운용" /></li>
                                    <li><img src="/resources/image/clients11.png" alt="하나금융그룹" /></li>
                                    <li><img src="/resources/image/clients12.png" alt="mnet plus" /></li>
                                    <li><img src="/resources/image/clients13.png" alt="SD BIOSENSOR" /></li>
                                    <li><img src="/resources/image/clients14.png" alt="행복나래" /></li>
                                </ul>
                            </div>
                            {
                            /*<div class="swiper-slide">
                                <ul>
                                    <!--<li><img src="/resources/image/clients02.png" alt="LG화학"></li>-->
                                    <!--<li><img src="/resources/image/clients04.png" alt="현대카드"></li>-->
                                    <li><img src="/resources/image/clients15.png" alt="넥슨"></li>
                                    <li><img src="/resources/image/clients16.png" alt="이스포츠"></li>
                                </ul>
                            </div>*/
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default About;
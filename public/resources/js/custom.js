$(function(){

    $('.work_list > ul > li .txt_box').css('transition', 'all .3s');
    
    /* HEADER MENU ------------------------------------------ */
    $('.btn_menu').on('click', function(){
        if(!$(this).hasClass('is-open')){
            $(this).addClass('is-open');
        } else{
            $(this).removeClass('is-open');
        }
    })

    /* FLOAT BUTTON ------------------------------------------ */
    $('.float_btn ul > li > a.btn_top').on('click', function(){
        $('html, body').animate({
            'scrollTop' : 0
        }, 500)
    })

    /* INPUT ELEMENT ------------------------------------------ */
    $('.form_input > input, .form_textarea > textarea').on({
        'focus' : function(){
            $(this).closest('[class*="form_"]').addClass('is-focused');
        },
        'blur' : function(){
            $(this).closest('[class*="form_"]').removeClass('is-focused');
        }
    })
    
    $('.form_select > button').on({
        'click' : function(e){
            e.preventDefault();
            if(!$(this).closest('.form_select').hasClass('is-focused')){
                $('.form_select').removeClass('is-focused');
                $('.form_select > ul').stop().slideUp();
                $(this).closest('.form_select').addClass('is-focused');
                $(this).siblings().stop().slideDown();
            } else{
                $('.form_select').removeClass('is-focused');
                $('.form_select > ul').stop().slideUp();
            }
        },
    })
    
    $('.form_select > ul > li > button').on({
        'click' : function(e){
            e.preventDefault();
            
            $(this).closest('li').addClass('is-selected');
            $(this).closest('.form_select').children('button').text($(this).text());

            $(this).closest('.form_select').addClass('is-changed');
            $('.form_select').removeClass('is-focused');

            $('.form_select > ul').stop().slideUp();
        },
    })

    $('body').on('click', function(e){
        // 셀렉트 외 선택 시 셀렉트 옵션 닫힘
        if(!$('.form_select').has(e.target).length){
            $('.form_select').removeClass('is-focused');
            $('.form_select > ul').stop().slideUp();
        }
    });

    
    /* CONTACT CLIENTS ------------------------------------------ */
    if($('.clients-swiper').length){
        var clilentsSwiper = new Swiper('.clients-swiper .swiper-container', {
            speed: 400,
            spaceBetween: 0,
            navigation: {
                nextEl: '.clients-swiper-controller .swiper-button-next',
                prevEl: '.clients-swiper-controller .swiper-button-prev',
            },
        });
    }
});
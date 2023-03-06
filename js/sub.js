$(function () {

    /* 공통 */
    $('.com_review_wrap .slick').slick({
        arrows: true,
        accessibility: false,
        vertical: true,
        slidesToShow: 1,
        prevArrow: $('.com_review_wrap .control .prev'),
        nextArrow: $('.com_review_wrap .control .next'),
        autoplaySpeed: 5000,
        speed: 500,
    });

    /* 공통 */
    $('.com_slick_wrap .slick').slick({
        autoplay:true,
        variableWidth: true,
        arrows: false,
        centerMode: true,
        autoplaySpeed: 2000,
        speed: 700,
    });

    $('.reservation_box .time_lsit li a').click(function () {
        $('.reservation_box .time_lsit li a').removeClass('active');
        $(this).addClass('active');
        return false;
    });

    /* 고객후기 */
    $('.review_content_box').hide();
    $('.review_content_box').first().show();
    $('.review_box .com_tab2 li').click(function () {
        $('.review_box .com_tab2 li').children().removeClass('active');
        $(this).children().addClass('active');
        var Idx = $(this).index();
        $('.review_content_box').hide();
        $('.review_content_box').eq(Idx).show();
        return false;
    });

    /* 생기언론보도 */
    $('.sidewalk_content').hide();
    $('.sidewalk_content').first().show();
    $('.sidewalk_box .com_tab2 li').click(function () {
        $('.sidewalk_box .com_tab2 li').children().removeClass('active');
        $(this).children().addClass('active');
        var Idx = $(this).index();
        $('.sidewalk_content').hide();
        $('.sidewalk_content').eq(Idx).show();
        return false;
    });

    /* 공통 */
    $('.com_rayout_box2 .slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.com_rayout_box2 .control .prev'),
        nextArrow: $('.com_rayout_box2 .control .next'),
        asNavFor: '.slider-nav',
        infinite: true,
    });
    $('.com_rayout_box2 .slider-nav').slick({
        arrows: false,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        infinite: true,
        vertical: true,
        focusOnSelect: true,
    });
    $('.com_rayout_box2 .video_list li').click(function () {
        return false;
    });


});
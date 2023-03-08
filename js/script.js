$(function () {

    /* aos */
    $(window).on('load', function () {
        AOS.init({
            duration: 1700
        });

        $('.com_img_effect').addClass('active');

    });

    /* header */
    $('#header .link a').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next().slideUp();
        } else {
            $(this).addClass('active');
            $(this).next().slideDown();
        }
    });

    /* footer */
    $('#footer .footer_top a').mouseover(function () {
        $('#footer .footer_hover_wrap').stop().fadeIn(300);
    });
    $('#footer .footer_hover_wrap').mouseleave(function () {
        $('#footer .footer_hover_wrap').stop().fadeOut(300);
    });

    /* footer  */
    $('#footer .inquiry_wrap .slick').slick({
        autoplay: true,
        arrows: false,
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3500,
        speed: 700,
    });

});
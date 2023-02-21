$(function () {

    /* aos */
    $(window).on('load', function () {
        AOS.init({
            duration: 2200
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
    $('#footer .slick').slick({
        variableWidth: true,
        autoplay: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
    });
    $('#footer .site_link > a').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next().slideUp();
        } else {
            $(this).addClass('active');
            $(this).next().slideDown();
        }
        return false;
    });

});
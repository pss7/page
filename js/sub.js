$(function () {

    /* com_review_wrap */
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

    /* reservation */
    $('.reservation_box .time_lsit li a').click(function () {
        $('.reservation_box .time_lsit li a').removeClass('active');
        $(this).addClass('active');
        return false;
    });

});
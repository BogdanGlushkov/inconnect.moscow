$(document).ready(function () {

    $('.header__btn-menu-open').click(function () {
        $('.menu ul').fadeIn(400);
        $('.header__btn-menu-open').hide();
        $('.header__btn-menu-close').fadeIn(400);
        $('.header__logo').hide();
        $('.header__btn').hide();
        $('header').css("padding-top", "0px");
    });

    $('.header__btn-menu-close').click(function () {
        $('.header__btn-menu-open').fadeIn('slow');
        $('.menu ul').fadeOut('fast');
        $('.header__btn-menu-close').fadeOut('slow');
        $('.header__logo').fadeIn('slow');
        $('header').css("padding-top", "65px");
    });

});
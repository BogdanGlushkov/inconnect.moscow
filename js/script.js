$(document).ready(function () {

    $('.header__btn-menu-open').click(function () {
        $('.menu ul').show();
        $('.header__btn-menu-open').hide();
        $('.header__btn-menu-close').show();
        $('.header__logo').hide();
        $('.header__btn').hide();
        $('header').css("padding-top", "0px");
    });

    $('.header__btn-menu-close').click(function () {
        $('.header__btn-menu-open').show();
        $('.menu ul').hide();
        $('.header__btn-menu-close').hide();
        $('.header__logo').show();
        $('header').css("padding-top", "65px");
    });

});

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop - 40,
        behavior: 'smooth'
    })
}

var button_services = document.querySelector('#Услуги_кнопка');
var button_cases = document.querySelector('#Кейсы_кнопка');
var button_whous = document.querySelector('#Кто_мы_кнопка');
var button_contacts = document.querySelector('#Контакты_кнопка');
var button_writeus = document.querySelector('#Напишите_нам_кнопка');

var button_services_mobile = document.querySelector('#Услуги_кнопка_мобильный');
var button_cases_mobile = document.querySelector('#Кейсы_кнопка_мобильный');
var button_whous_mobile = document.querySelector('#Кто_мы_кнопка_мобильный');
var button_contacts_mobile = document.querySelector('#Контакты_кнопка_мобильный');

var services = document.querySelector('#Услуги');
var cases = document.querySelector('#Кейсы');
var whous = document.querySelector('#Кто_мы');
var contacts = document.querySelector('#Контакты');
var writeus = document.querySelector('#Напишите_нам');

button_services.addEventListener('click', () => {
    scrollTo(services);
})

button_cases.addEventListener('click', () => {
    scrollTo(cases);
})

button_whous.addEventListener('click', () => {
    scrollTo(whous);
})

button_contacts.addEventListener('click', () => {
    scrollTo(contacts);
})

button_writeus.addEventListener('click', () => {
    scrollTo(writeus);
})

// 

button_services_mobile.addEventListener('click', () => {
    $('.menu ul').hide();
    $('.header__btn-menu-open').show();
    $('.header__logo').show();
    $('header').css("padding-top", "65px");
    scrollTo(services);
})

button_cases_mobile.addEventListener('click', () => {
    $('.menu ul').hide();
    $('.header__btn-menu-open').show();
    $('.header__logo').show();
    $('header').css("padding-top", "65px");
    scrollTo(cases);
})

button_whous_mobile.addEventListener('click', () => {
    $('.menu ul').hide();
    $('.header__btn-menu-open').show();
    $('.header__logo').show();
    $('header').css("padding-top", "65px");
    scrollTo(whous);
})

button_contacts_mobile.addEventListener('click', () => {
    $('.menu ul').hide();
    $('.header__btn-menu-open').show();
    $('.header__logo').show();
    $('header').css("padding-top", "65px");
    scrollTo(contacts);
})
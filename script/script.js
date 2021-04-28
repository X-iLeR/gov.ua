$(document).ready(function () {
    $(".nav-item.dropdown > a").click(function (e) {
        e.stopPropagation()
        let activeBlocks = $(this).parents('.navbar-nav').find('.show')
        if (activeBlocks.length > 1 || $(activeBlocks[0]).children('a').children('span:first-child').text() !== $(this).parent().children('a').children('span:first-child').text()) {
            activeBlocks.removeClass('show');
        }
        $(this).parent().toggleClass('show');
    })
    $(".submenu-button").click(function (e) {
        e.stopPropagation()
        $(this).parent().toggleClass('submenu-open');
        $(this).parents('.dropdown').toggleClass('submenu-open');
    });
    $(".dropdown-back").click(function (e) {
        e.stopPropagation()
        $(this).parents('.submenu-open.nav-item').toggleClass('submenu-open');
        $(this).parents('.submenu-open.nav-item').parents('.dropdown').toggleClass('submenu-open');
    });

    $(document).on('click', function (e) {
        e.stopPropagation();
        if (!$(e.target).hasClass('submenu-open') && $('.submenu-open').find(e.target).length === 0) {
            $('.submenu-button').parent().removeClass('submenu-open');
            $('.submenu-button').parent().parents('.dropdown').removeClass('submenu-open');
        }
    });

    $(document).on('click', function (e) {
        e.stopPropagation();
        if (!$(e.target).hasClass('show') && $('.dropdown.show').find(e.target).length === 0) {
            $('.dropdown.show').removeClass('show');
        }
    });


    $('.slider-links').slick({
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 3
    });
});

$(document).ready(function () {
    $(".submenu-button").click(function (e) {
        e.stopPropagation()
        $(this).parent().toggleClass('submenu-open');
    });
    $(".dropdown-back").click(function (e) {
        e.stopPropagation()
        $(this).parents('.submenu-open.nav-item').toggleClass('submenu-open');
    });
    $(document).on('click', function (e) {
        if (!$(e.target).hasClass('submenu-open') && $('.submenu-open').find(e.target).length === 0) {
            $('.submenu-button').parent().removeClass('submenu-open');
        }
        e.stopPropagation();
    });

    $('.slider-links').slick({
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 3
    });
});

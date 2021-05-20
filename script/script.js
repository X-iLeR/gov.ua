$(document).ready(function () {
    mainMenu()
    navWithMoreList()
    cabinetMenu()
    searchMenu()
    menuTypeInner()
    sizeVideo()
    switchListItem($('.listWithMore'));
    $(window).resize(function () {
        switchListItem($('.listWithMore'));
        sizeVideo();
    });

    $(".item-eye").click(function() {
        $("body").toggleClass('bw font-plus-block')
        $(".icon-hide-type1").toggleClass('d-none')
        $(".icon-hide-type2").toggleClass('d-none')
        $(".increase-font").removeClass('d-none');
        $("body").removeClass('fp-none')
    });

    $(".font-plus").click(function() {
        if ($('body').hasClass('font-plus2'))
            $('body').addClass('font-plus4'),
                $('body').removeClass('font-plus2');
        else
            $('body').addClass('font-plus2');
    });
    $(".font-minus").click(function() {
        if ($('body').hasClass('font-plus2'))
            $('body').removeClass('font-plus2');
        else
            $('body').addClass('font-plus2');
        $('body').removeClass('font-plus4')
    });

    $(".increase-font .close-button").click(function(e) {
        $(".increase-font").addClass('d-none');
        $("body").addClass('fp-none');
    });

    $(".like").click(function(e) {
        $(this).toggleClass('active');
    });

    $(document).ready(function() {
        $(".variable").slick({
            dots: false,
            infinite: false,
            variableWidth: true,
            /*autoplay: true,*/
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    });
    function sizeVideo(){
        $(".public-information-video iframe").each(function() {
            let width = $(this).width ();
            $(this).css("height", width / 1.7777 + "px");
        });
    }
});


const switchListItem = (mainBlock) => {
    const mainBlockWidth = mainBlock.width();
    const listWidth = mainBlock.children('ul').width()
    const mainList = mainBlock.children('ul')
    const lastMainElement = mainBlock.children('ul').children('ul li:nth-last-child(2)')
    const dropDownContainer = mainBlock.find('ul > li:last-child .moreContainer > ul')
    const firstSecondElement = dropDownContainer.children('li:nth-child(2)')
    if (listWidth > mainBlockWidth) {
        dropDownContainer.append(lastMainElement)
        switchListItem(mainBlock)
    }

    /*    mainList.children('li:last-child').before(firstSecondElement)
        switchListItem(mainBlock)*/
}

const navWithMoreList = () => {
    $('.moreBtn').click(function (e) {
        $(this).parents('.moreContainer').toggleClass('open')
    })

    $(document).on('click', function (e) {
        e.stopPropagation();
        if (!$(e.target).hasClass('show') && $('.moreContainer.open').find(e.target).length === 0) {
            $('.moreContainer.open').removeClass('open');
        }
    });
}
const cabinetMenu = () => {
    $(".cabinetMenu-open").click(function() {
        if ($('.cabinet-item .dropdown').hasClass('submenu-open')){
            $(".navbar-toggler-mainMenu").addClass('open');
            $('.search-form').removeClass('show');
            $('.moreContainer').removeClass('open');
        }
        else {
            $(".navbar-toggler-mainMenu").removeClass('open')
        }
        $('.main-menu').removeClass('show');
        $('.dropdown-container.show').removeClass('show');
    });

    $('.cabinetMenu-open.mobileOpen').click(function() {
        if ($('.mobileMenuOpen').hasClass('submenu-open')){
            $(".navbar-toggler-mainMenu").addClass('open')
        }
        else {
            $(".navbar-toggler-mainMenu").removeClass('open')
        }
        $('.main-menu').removeClass('show');
        $('.search-form').removeClass('show');
        $('.moreContainer').removeClass('open');
        $('.dropdown-container.show').removeClass('show');
    });

    $(document).on('click', function (e) {
        e.stopPropagation();
        if (!$(e.target).hasClass('show')
            && $('.mobileMenuOpen').hasClass('submenu-open')
            && $('.mobileMenuOpen.submenu-open').find(e.target).length === 0
            || !$('.main-menu').hasClass('show')){
            $(".navbar-toggler-mainMenu").removeClass('open');
        }
    });
    $(document).on('click', function (e) {
        e.stopPropagation();
        if ($('.main-menu').hasClass('show') || $('.mobileMenuOpen').hasClass('submenu-open')){
            $('body').addClass('show-modal');
        }
        else {
            $('body').removeClass('show-modal');
        }
    });
}
const searchMenu = () => {
    $(".item-search").click(function() {
        $('.search-form').toggleClass('show');
        $('.moreContainer').removeClass('open');
        $('.main-menu').removeClass('show');
        $('.cabinet-item .dropdown.submenu-open').removeClass('submenu-open');
        $('.mobileMenuOpen').removeClass('submenu-open')
    });
    $(".search-form .close-button").click(function() {
        $('.search-form').toggleClass('show');
    });
    $(document).on('click', function (e) {
        e.stopPropagation();
        if ((!$(e.target).hasClass('search-form') && $('.search-form').find(e.target).length === 0) && (!$(e.target).hasClass('item-search') && $('.item-search').find(e.target).length === 0)) {
            $('.search-form.show').removeClass('show');
        }
    });
}
const mainMenu = () => {

    $(".navbar-toggler-mainMenu").click(function() {
        if(!$(this).hasClass('open')) {
            $('.main-menu').addClass('show');
        }
        else {
            $('.main-menu').removeClass('show');
        }
        $(this).toggleClass('open');
        $(".mobileMenuOpen").removeClass('submenu-open');
    });

    $(".nav-item.dropdown-container > a").click(function (e) {
        e.stopPropagation()
        let activeBlocks = $(this).parents('.navbar-nav').find('.show')
        if (activeBlocks.length > 1 || $(activeBlocks[0]).children('a').children('span:first-child').text() !== $(this).parent().children('a').children('span:first-child').text()) {
            activeBlocks.removeClass('show');
            $(this).parents('.navbar-mainMenu').removeClass('first-level-show')
        }
        $(this).parent().toggleClass('show');
        $(this).parents('.navbar-mainMenu').toggleClass('first-level-show');
        $('.cabinet-item .dropdown.submenu-open').removeClass('submenu-open');
        $('.search-form').removeClass('show');
        $('.moreContainer').removeClass('open')
    })
    $(".submenu-button").click(function (e) {
        e.stopPropagation()
        $(this).parent().toggleClass('submenu-open');
        $(this).parents('.dropdown-container').toggleClass('submenu-open');
    });
    $(".back-first-level").click(function (e) {
        e.stopPropagation()
        $(this).parents('.submenu-open.nav-item').toggleClass('submenu-open');
        $(this).parents('.submenu-open.nav-item').parents('.dropdown-container').toggleClass('submenu-open');
        $(this).parents('.navbar-mainMenu').removeClass('first-level-show');
        $(this).parents('.dropdown-container').toggleClass('show');
    });

    $(".back-second-level").click(function (e) {
        e.stopPropagation()
        $(this).parents('.submenu-open.nav-item').toggleClass('submenu-open');
        $(this).parents('.submenu-open.nav-item').parents('.dropdown-container').toggleClass('submenu-open');
    });

    $(document).on('click', function (e) {
        e.stopPropagation();
        if (!$(e.target).hasClass('submenu-open') && $('.submenu-open').find(e.target).length === 0) {
            $('.submenu-button').parent().removeClass('submenu-open');
            $('.submenu-button').parent().parents('.dropdown-container').removeClass('submenu-open');
            $('.submenu-button').parents('.navbar-mainMenu').removeClass('first-level-show')
        }
    });

    $(document).on('click', function (e) {
        e.stopPropagation();
        if (!$(e.target).hasClass('show') && $('.dropdown-container.show').find(e.target).length === 0) {
            $('.dropdown-container.show').removeClass('show');
        }
    });
}

const prevNews = (e) => {
    $(e.target).parents('.filter').children('ul').find('a.active').parent().prev().children('a').click()
}


const nextNews = (e) => {
    $(e.target).parents('.filter').children('ul').find('a.active').parent().next().children('a').click()
}



const menuTypeInner = () => {

    function menuHeight(){
        if ($(window).width() <= '767'){
            let heightName = $(".menu-type-inner .name").height()
            let heightMenu = $(".menu-type-inner .menu").height()
            let height = heightName + heightMenu
            if ($(".menu-type-inner").hasClass('open')){
                $(".menu-type-inner").css('height', height)
            }
            else {
                $(".menu-type-inner").css('height', heightName)
            }
        }
        else {
            $(".menu-type-inner").css('height', 'auto')
        }
    }
    setTimeout(menuHeight, 1000);
    $(window).resize(menuHeight)

    $(".menu-type-inner .name").click(function () {
        $(".menu-type-inner").toggleClass('open');
        menuHeight()
    });
    $(".menu-type-inner .toggler-icon").click(function () {
        $(".menu-type-inner").toggleClass('open');
        menuHeight()
    });
}
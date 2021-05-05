$(document).ready(function () {
    mainMenu()
    navWithMoreList()
    switchListItem($('.listWithMore'));
    $(window).resize(function () {
        switchListItem($('.listWithMore'));
    });

    $('.slider-links.slider').slick({
        autoplay:       true,
        autoplaySpeed:  4500,
        infinite:       true,
        pauseOnFocus:   false,
        pauseOnHover:   false,
        slidesToShow:   6,
        slidesToScroll: 5
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

    $(".increase-font .close").click(function(e) {
        $(".increase-font").addClass('d-none');
        $("body").addClass('fp-none');
    });
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

const mainMenu = () => {
    $(".nav-item.dropdown-container > a").click(function (e) {
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
        $(this).parents('.dropdown-container').toggleClass('submenu-open');
    });
    $(".dropdown-back").click(function (e) {
        e.stopPropagation()
        $(this).parents('.submenu-open.nav-item').toggleClass('submenu-open');
        $(this).parents('.submenu-open.nav-item').parents('.dropdown-container').toggleClass('submenu-open');
    });

    $(document).on('click', function (e) {
        e.stopPropagation();
        if (!$(e.target).hasClass('submenu-open') && $('.submenu-open').find(e.target).length === 0) {
            $('.submenu-button').parent().removeClass('submenu-open');
            $('.submenu-button').parent().parents('.dropdown-container').removeClass('submenu-open');
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
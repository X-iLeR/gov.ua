$(document).ready(function () {
    mainMenu()
    navWithMoreList()
    switchListItem($('.listWithMore'));
    $(window).resize(function () {
        switchListItem($('.listWithMore'));
    });

    $('.slider-links').slick({
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 3
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
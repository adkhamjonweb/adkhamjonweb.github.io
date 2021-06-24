$(document).ready(function () {
    let $links = $('.menu a')
    $links.click(function (e) {
        e.preventDefault()
        $links.removeClass('faol')
        let $attr = $(this).addClass('faol').attr('href')
        let $top = $($attr).offset().top - 80

        $('html, body').animate({
            scrollTop: $top
        }, 2000)
    })

    $(window).scroll(function () {
        let $windowTop = $(this).scrollTop()

        $links.each(function () {
            let $attr = $(this).attr('href')
            let $top = $($attr).offset().top - 100

            if ($windowTop >= $top) {
                $links.removeClass('faol')
                $(this).addClass('faol')
            }
        })
    })

    let $top = $('.fixed')
    $(window).scroll(function () {
        let $windowTop = $(this).scrollTop()
        if ($windowTop >= 500) {
            $top.fadeIn('1000')
        } else {
            $top.fadeOut('1000')
        }
    })

    $top.click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    })


    let $btn = $('.map span')
    let $menu = $('.check')
    $btn.on('click', function () {
        if ($menu.css('top') == '-800px') {
            $menu.animate({
                top: 100
            }, 1000)
        } else {
            $menu.animate({
                top: '-800px'
            }, 1000)
        }
    })
    let $cbut = $('.check button')
    $cbut.on('click', function () {
        $cbut.css('background', "white")
        $cbut.css('background', "green")
        $cbut.css('color', "white")
        $cbut.html('TASDIQLANDI');

    })


});
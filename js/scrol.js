$(document).ready(function () {
    let $top = $('.card-top')
    let $bottom = $('.card-bottom')

    let $mtop = $('.maishiy-top')
    let $mbottom = $('.maishiy-bottom')

    let $ktop = $('.kiyim-top')
    let $kbottom = $('.kiyim-bottom')

    let $ttop = $('.tex-top')
    let $tbottom = $('.tex-bottom')

    $(window).scroll(function () {
        var $scroll = $(this).scrollTop()
        console.log($scroll);
        if($scroll >= 180){
            $top.addClass('flip')
        }
        if($scroll >= 633){
            $bottom.addClass('flip')
        }


        if($scroll >= 1198){
            $mtop.addClass('wobble')
        }
        if($scroll >= 1631){
            $mbottom.addClass('wobble')
        }


        if($scroll >= 2204){
            $ktop.addClass('pulse')
        }
        if($scroll >= 2669){
            $kbottom.addClass('pulse')
        }


        if($scroll >= 3234){
            $ttop.addClass('shake')
        }
        if($scroll >= 3700){
            $tbottom.addClass('shake')
        }

    })
});
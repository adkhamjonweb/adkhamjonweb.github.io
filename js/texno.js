window.addEventListener('load', function (e) {
    var mband = document.querySelectorAll('.MiBand');
    var mjam = document.querySelector('.mbann');
    var bname = document.querySelector('.mban');
    var band = document.querySelector('.check .miband');
    band.classList.add('hide')


    var apods = document.querySelectorAll('.Airpods');
    var ajam = document.querySelector('.apodss');
    var aname = document.querySelector('.apodsss');
    var aar = document.querySelector('.check .apods');
    aar.classList.add('hide')
    
    var son = document.querySelector('.notify');
    var cart = document.querySelectorAll('.macbook');
    var res = document.querySelector('.jamisumma');
    var namee = document.querySelector('.name');
    var ar = document.querySelector('.check .article');
    ar.classList.add('hide')

    var watch = document.querySelectorAll('.watchse');
    var jam = document.querySelector('.jamisummaa');
    var nam = document.querySelector('.namee');
    var art = document.querySelector('.check .articlee');
    art.classList.add('hide')
    var sum = 0
    //texno

    for (var i = 0; i <= cart.length - 1; i++) {
        cart[i].addEventListener('click', function () {
            ar.classList.remove('hide')
            ar.style.display='flex'
            var att = this.getAttribute('data-price')
            sum = sum + +att
            res.innerHTML = sum
        })
        cart[i].addEventListener('click', function () {
            var attr = this.getAttribute('data-name')
            namee.innerHTML = attr
        })
    }
    var summ = 0
    for (var i = 0; i <= watch.length - 1; i++) {
        watch[i].addEventListener('click', function () {
            art.classList.remove('hide')
            art.style.display='flex'
            var attt = this.getAttribute('data-price')
            summ = summ + +attt
            jam.innerHTML = summ
        })
        watch[i].addEventListener('click', function () {
            var attrrr = this.getAttribute('data-name')
            nam.innerHTML = attrrr
        })
    }
    var asum = 0
    for (var i = 0; i <= apods.length - 1; i++) {
        apods[i].addEventListener('click', function () {
            aar.classList.remove('hide')
            aar.style.display='flex'
            var att = this.getAttribute('data-price')
            asum = asum + +att
            ajam.innerHTML = asum
        })
        apods[i].addEventListener('click', function () {
            var attr = this.getAttribute('data-name')
            aname.innerHTML = attr
        })
    }

    var misum = 0
    for (var i = 0; i <= mband.length - 1; i++) {
        mband[i].addEventListener('click', function () {
            band.classList.remove('hide')
            band.style.display='flex'
            var att = this.getAttribute('data-price')
            misum = misum + +att
            mjam.innerHTML = misum
        })
        mband[i].addEventListener('click', function () {
            var attr = this.getAttribute('data-name')
            bname.innerHTML = attr
        })
    }
});



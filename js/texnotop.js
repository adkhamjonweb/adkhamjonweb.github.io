window.addEventListener('load', function (e) {
    var mband = document.querySelectorAll('.airpodspro');
    var mjam = document.querySelector('.aprooo');
    var bname = document.querySelector('.aproo');
    var band = document.querySelector('.check .apro');
    band.classList.add('hide')

    var aband = document.querySelectorAll('.band7');
    var ajam = document.querySelector('.band7777');
    var aname = document.querySelector('.band777');
    var band7 = document.querySelector('.check .band77');
    band7.classList.add('hide')

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

    var amisum = 0
    for (var i = 0; i <= aband.length - 1; i++) {
        aband[i].addEventListener('click', function () {
            band7.classList.remove('hide')
            band7.style.display='flex'
            var att = this.getAttribute('data-price')
            amisum = amisum + +att
            ajam.innerHTML = amisum
        })
        aband[i].addEventListener('click', function () {
            var attr = this.getAttribute('data-name')
            aname.innerHTML = attr
        })
    }

    
});
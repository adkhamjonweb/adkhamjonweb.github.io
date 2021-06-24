window.addEventListener('load', function (e) {
    var nult = document.querySelectorAll('.noteultra');
    var njam = document.querySelector('.noteult');
    var nname = document.querySelector('.noteul');
    var nultt = document.querySelector('.check .noteu');
    nultt.classList.add('hide')

    var promax = document.querySelectorAll('.promax');
    var pjam = document.querySelector('.pro12max');
    var pname = document.querySelector('.promaxx');
    var pro12 = document.querySelector('.check .pro12');
    pro12.classList.add('hide')
    
    var nsum = 0
    for (var i = 0; i <= nult.length - 1; i++) {
        nult[i].addEventListener('click', function () {
            nultt.classList.remove('hide')
            nultt.style.display='flex'
            var att = this.getAttribute('data-price')
            nsum = nsum + +att
            njam.innerHTML = nsum
        })
        nult[i].addEventListener('click', function () {
            var attr = this.getAttribute('data-name')
            nname.innerHTML = attr
        })
    }

    var psum = 0
    for (var i = 0; i <= promax.length - 1; i++) {
        promax[i].addEventListener('click', function () {
            pro12.classList.remove('hide')
            pro12.style.display='flex'
            var att = this.getAttribute('data-price')
            psum = psum + +att
            pjam.innerHTML = psum
        })
        promax[i].addEventListener('click', function () {
            var attr = this.getAttribute('data-name')
            pname.innerHTML = attr
        })
    }

});
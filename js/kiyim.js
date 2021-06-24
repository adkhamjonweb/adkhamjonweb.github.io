window.addEventListener('load', function (e) {
    var watch = document.querySelectorAll('.kplus');
var les = document.querySelectorAll('.kless');
var jam = document.querySelector('.check .jaket');
var nam = document.querySelector('.check .rakuten');
var art = document.querySelector('.check .fashion');
var addd = document.querySelectorAll('.kadd');
art.classList.add('hide')
var summm = 0

for (var i = 0; i <= watch.length - 1; i++) {
    watch[i].addEventListener('click', function () {
        art.classList.remove('hide')
        art.style.display='flex'
        var attt = this.getAttribute('data-price')
        summm = summm + +attt
        jam.innerHTML = summm
    })
    watch[i].addEventListener('click', function () {
        var attrrr = this.getAttribute('data-name')
        nam.innerHTML = attrrr
    })
}

for (var i = 0; i <= les.length - 1; i++) {
    les[i].addEventListener('click', function () {
        var att = this.getAttribute('data-price')
        summm = summm - +att
        jam.innerHTML = summm
    })
}
for (var i = 0; i <= addd.length - 1; i++) {
    addd[i].addEventListener('click', function () {
        var att = this.getAttribute('data-price')
        summm = summm + +att
        jam.innerHTML = summm
    })
}
});




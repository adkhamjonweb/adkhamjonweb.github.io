window.addEventListener('load', function (e) {
    var watch = document.querySelectorAll('.qosh');
var les = document.querySelectorAll('.ayr');
var jam = document.querySelector('.check .obshi');
var nam = document.querySelector('.check .nike');
var art = document.querySelector('.check .oyoqkiyim');
var addd = document.querySelectorAll('.add');
art.classList.add('hide')
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

for (var i = 0; i <= les.length - 1; i++) {
    les[i].addEventListener('click', function () {
        var att = this.getAttribute('data-price')
        summ = summ - +att
        jam.innerHTML = summ
    })
}
for (var i = 0; i <= addd.length - 1; i++) {
    addd[i].addEventListener('click', function () {
        var att = this.getAttribute('data-price')
        summ = summ + +att
        jam.innerHTML = summ
    })
}
}); 
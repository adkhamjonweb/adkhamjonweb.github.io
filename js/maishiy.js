window.addEventListener('load', function (e) {
    var watch = document.querySelectorAll('.maplus');
var les = document.querySelectorAll('.maless');
var jam = document.querySelector('.check .barca');
var nam = document.querySelector('.check .gucci');
var art = document.querySelector('.check .adidas');
var addd = document.querySelectorAll('.madd');
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




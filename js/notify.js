var add = document.querySelectorAll('.plus');
var les = document.querySelectorAll('.less');
var addd = document.querySelectorAll('.add');
var son = document.querySelector('.notify');
// texno 
var btn = document.querySelectorAll('.btn-small');
// plus less
var sum = 0
for (var i = 0; i <= add.length - 1; i++) {
    add[i].addEventListener('click', function () {
        var att = this.getAttribute('data-son')
        sum = sum + +att
        son.innerHTML = sum
    })
}
for (var i = 0; i <= les.length - 1; i++) {
    les[i].addEventListener('click', function () {
        var att = this.getAttribute('data-son')
        sum = sum - +att
        son.innerHTML = sum
    })
}
for (var i = 0; i <= addd.length - 1; i++) {
    addd[i].addEventListener('click', function () {
        var att = this.getAttribute('data-son')
        sum = sum + +att
        son.innerHTML = sum
    })
}
// texno
for (var i = 0; i <= btn.length - 1; i++) {
    btn[i].addEventListener('click', function () {
        var att = this.getAttribute('data-son')
        sum = sum + +att
        son.innerHTML = sum
    })
}

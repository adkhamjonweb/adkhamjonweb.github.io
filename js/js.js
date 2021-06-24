// var jam = document.querySelector('');
    var add = document.querySelectorAll('.plus');
    var les = document.querySelectorAll('.less');
    var son = document.querySelector('.notify');
    var sum = 0
    
    // for (var i = 0; i <= add.length - 1; i++) {
    //     add[i].addEventListener('click', function(){
    //         var att = this.getAttribute('data-price')
    //         sum = sum + +att
    //         jam.innerHTML = sum
    //     })
    // }

    // for (var i = 0; i <= les.length - 1; i++) {
    //     les[i].addEventListener('click', function(){
    //         var att = this.getAttribute('data-price')
    //         sum = sum - +att
    //         jam.innerHTML = sum
    //     })
    // }




    function handleAdd(event) {
        const card = event.target.closest('.card')
        card.classList.add('add-active')
    }

    function plusLess(event, type) {
        const card = event.target.closest('.card')
        const input = card.querySelector('input')
        let oldVal = Number(input.value)
        if (type == 'less') {
            if (oldVal == 1) {
                card.classList.remove('add-active')
                return
            }
            input.value = oldVal -= 1
        } else {
            input.value = oldVal += 1
        }
    }





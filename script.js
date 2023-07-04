var cumprimento = window.document.querySelector('h1#cumprimento');
var nome = window.document.querySelector('input#nome');
var conhecendo = window.document.querySelector('div#conhecendo');
var relogio = window.document.querySelector('div#relogio')
nome.addEventListener('keypress', checkEnter);

var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
var segundos = data.getSeconds()



function checkEnter(event) {
    if (event.key === 'Enter') {
        cumprimentar();
    }
}

function cumprimentar() {
    if (hora >= 0 && hora < 12) {
        var horario = 'bom dia';
        document.body.style.background = 'linear-gradient(180deg, rgba(255,242,168,1) 0%, rgba(63,251,240,1) 100%)';
    } else if (hora >= 12 && hora < 18) {
        var horario = 'boa tarde';
        document.body.style.background = 'linear-gradient(180deg, rgba(148,187,233,1) 0%, rgba(238,174,202,1) 100%)';
    } else {
        var horario = 'boa noite';
        document.body.style.background = 'linear-gradient(180deg, rgba(10,0,34,1) 0%, rgba(9,9,121,1) 30%, rgba(0,160,255,1) 100%)';
        cumprimento.style.color = 'white'
        conhecendo.style.color = 'white'
    }

    conhecendo.classList.add('fade-out');
    cumprimento.innerHTML = `${horario}, ${nome.value} :)`;
    cumprimento.classList.add('fade-in');

    // Remove the fade-in and fade-out classes after their animation is completed
    setTimeout(function() {
        cumprimento.classList.remove('fade-in');
    }, 1000); // Set the time to match the animation duration (1s)

    relogio.style.display = 'block'

    setInterval(function() {
        data = new Date();
        hora = data.getHours();
        minutos = data.getMinutes();
        segundos = data.getSeconds();
        

        if (hora < 10) {
            hora = `0${hora}`
        }

        if (minutos < 10) {
            minutos = `0${minutos}`
        }

        if (segundos < 10) {
            segundos = `0${segundos}`
        }

        relogio.innerHTML = `${hora} : ${minutos} : ${segundos}`;
    }, 1000);
}


const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const assunto = document.querySelector('#assunto');
const mensagem = document.querySelector('#mensagem');
const success = document.querySelector('.box__confirm__mensage');

document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (nome.value.trim() === '') {
        nome.classList.add("error")
        return;
    } else {
        nome.classList.remove("error");
    }
    
    if (email.value.trim() === '') {
        email.classList.add("error")
        return;
    } else if (email.value.trim() !== ''){
        email.classList.remove("error");
    } else if (!isValidEmail(email)) {
        return;
    }
    
    if (assunto.value.trim() === '') {
        assunto.classList.add("error")
        return;
    } else {
        assunto.classList.remove("error");
    }
    
    if (mensagem.value.trim() === '') {
        mensagem.classList.add("error")
        return;
    } else {
        mensagem.classList.remove("error");
    }
    
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Assunto:', assunto);
    console.log('Mensagem:', mensagem);
    
    document.getElementById('formContato').reset();

    success.classList.add("flex");

    setTimeout(() => {
        success.classList.remove("flex");
    }, 4000);
});

function isValidEmail(email) {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
}

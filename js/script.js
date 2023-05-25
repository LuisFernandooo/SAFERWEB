document.addEventListener('scroll', function(){
    const header = document.querySelector('header').style;
    const scrollPos = window.pageYOffset;

    if(scrollPos > 100){
        header.backgroundColor = 'var(--cinza-escuro)';
        header.boxShadow = '0 0 36px -18px var(--cinza-claro)'
        header.padding = '1rem 10vw';
    }

    if(scrollPos < 100){
        header.backgroundColor = '';
        header.boxShadow = '';
        header.padding = '3rem 10vw';
    }

    const retornar = document.getElementById('retornar').style;

    if(scrollPos > 300){
        retornar.display = 'flex';
    }

    if(scrollPos < 300){
        retornar.display = '';
    }
})

// Botão de ler mais e menos

const MoreandLess = document.querySelector('.more_less');

MoreandLess.addEventListener('click', ()=>{
    const cardText = document.querySelector('.card-content');
    cardText.classList.toggle('active')

    if(cardText.classList.contains('active')){
        MoreandLess.textContent = 'Ler menos';
    }else{
        MoreandLess.textContent = 'Ler mais';
    }
})

// card 2

const btn_two = document.querySelector('.btn_two');

btn_two.addEventListener('click', ()=>{
    const cardText_two = document.querySelector('.card-content.two');
    cardText_two.classList.toggle('active')

    if(cardText_two.classList.contains('active')){
        btn_two.textContent = 'Ler menos';
    }else{
        btn_two.textContent = 'Ler mais';
    }
})

// card 3

const btn_three = document.querySelector('.btn_three');

btn_three.addEventListener('click', ()=>{
    const cardText_three = document.querySelector('.card-content.three');
    cardText_three.classList.toggle('active')

    if(cardText_two.classList.contains('active')){
        btn_three.textContent = 'Ler menos';
    }else{
        btn_three.textContent = 'Ler mais';
    }
})

// Contato

const btn_contact = document.querySelector('#contact_link');

btn_contact.addEventListener('click', ()=>{
  
    const contactBox = document.querySelector('.contact');
    contactBox.classList.toggle('ativar')
    
})

const btn_close_icon = document.querySelector('.close');

btn_close_icon.addEventListener('click', ()=>{
    const contactBox = document.querySelector('.contact');
    contactBox.classList.remove('ativar')
})
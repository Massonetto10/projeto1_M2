const elementoNome = document.getElementById('nome'); 

const elementoSituacao = document.querySelector('#situacao');

const elementoImg = document.querySelector('#imagem');

let elementoBtn = document.querySelector('#alterar');

elementoBtn.addEventListener('click', () =>{
   
    if(elementoBtn.value == 'primeiro'){
        elementoImg.src = './assets/img/scaniablue.png' 
        elementoNome.innerText = 'Scania' 
        elementoSituacao.innerText = 'Conforto' 
        elementoBtn.value = 'segundo' 
    } else if(elementoBtn.value == 'segundo') { 
        elementoImg.src = './assets/img/ivecoblue.png'  
        elementoNome.innerText = 'Iveco' 
        elementoSituacao.innerText = 'Preço Acessivel' 
        elementoBtn.value = 'terceiro' 
    }else if(elementoBtn.value == 'terceiro') { 
        elementoImg.src = './assets/img/mercedes.png'  
        elementoNome.innerText = 'Mercedes Benz' 
        elementoSituacao.innerText = 'Força' 
        elementoBtn.value = 'quarto'
    }else { 
        elementoImg.src = './assets/img/volvo.png' 
        elementoNome.innerText = 'Volvo' 
        elementoSituacao.innerText = 'Melhor custo benefício' 
        elementoBtn.value = 'primeiro' 
    }
})
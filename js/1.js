const navToggle = document.querySelector("#navToggle")
const nav = document.querySelector("#nav-links")

navToggle.addEventListener("click", () => {
    nav.classList.toggle('nav-open')
})

const images = document.querySelectorAll('.img');
const containerImage = document.querySelector('.c-img');
const imageContainer = document.querySelector('.img-show');
const closeModal = document.querySelector('.bx.bx-x');

images.forEach(image =>{
    image.addEventListener('click', ()=>{
        addImage(image.getAttribute('src'))
    })
})

const addImage = (srcI)=>{
    containerImage.classList.toggle('move');
    imageContainer.classList.toggle('show');
    imageContainer.src = srcI;
}

closeModal.addEventListener('click', ()=>{
    containerImage.classList.toggle('move')
    imageContainer.classList.toggle('show');
})

function clicked(e)
{
    if(!confirm('Pronto recibirás noticias mías al correo, !Saludos¡')) {
        e.preventDefault();
    }
}
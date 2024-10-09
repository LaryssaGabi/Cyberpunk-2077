const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", ()=>{
    alternarModal();
    video.setAttribute("src" , linkDoVideo);
});

botaoFecharModal.addEventListener("click", ()=>{
    alternarModal();
    video.setAttribute("src", "");
});

const aboutLink = document.querySelector('.about a');
const aboutSection = document.getElementById('titulo');

aboutLink.addEventListener('click', function (event) {
    event.preventDefault();
    aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'center', 
        inline: 'center'
    });
});
const usuarios = [
    { nick: "Kuvshinov", password: 1234, img: "./assets/image/kuvshinov-profile.jpg", frontpage: "./assets/image/kuvshinov-portada.jpg" },
    { nick: "samdoesarts", password: 12345, img: "./assets/image/samdoesarts-profile.jpg", frontpage: "./assets/image/samdoesart-portada.jpg" },
    { nick: "Philip", password: 123456, img: null }
]

/* Usuario */
const usuario = infoUsuario();
const navbarprofileimg = document.getElementById("navbarprofileimg");
navbarprofileimg.src = usuario.img;


function infoUsuario() {
    const nombreUsuario = localStorage.getItem("usuario")

    const arrayUsuarios = usuarios.find(u => u.nick === nombreUsuario);
    return arrayUsuarios;
}

/* Modal */
const artworkListen = document.getElementById("artworklisten");
const artContainer = document.querySelectorAll(".art-container");

artworkListen.addEventListener('click', e => {
    const element = e.target;

    if (element.classList.contains("img-column")) {
        modalImg.src = element.src;
    }

})
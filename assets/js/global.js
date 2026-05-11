const usuarios = [
    { nick: "Kuvshinov", password: 1234, img: "./assets/image/kuvshinov-profile.jpg", frontpage: "./assets/image/kuvshinov-portada.jpg" },
    { nick: "samdoesarts", password: 12345, img: "./assets/image/samdoesarts-profile.jpg", frontpage: "./assets/image/samdoesart-portada.jpg" },
    { nick: "Philip", password: 123456, img: null }
]

/* Usuario */
const usuario = infoUsuario();


const navbarprofileimg = document.getElementById("navbarprofileimg");

if (navbarprofileimg) {
    navbarprofileimg.src = usuario.img;
}

function infoUsuario() {
    const nombreUsuario = localStorage.getItem("usuario")

    const arrayUsuarios = usuarios.find(u => u.nick === nombreUsuario);
    return arrayUsuarios;
}

/* Modal */
const exampleModal = document.getElementById("exampleModal");
const commentSection = document.getElementById("commentSection");
const sendComment = document.querySelector(".send-comment");
const artworkListen = document.getElementById("artworklisten");
const artContainer = document.querySelectorAll(".art-container");

artworkListen.addEventListener('click', e => {
    const element = e.target;

    if (element.classList.contains("img-column")) {
        modalImg.src = element.src;
    }

})

sendComment.addEventListener("click", e => {
    enviarComentario();
})

inputComment.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        enviarComentario()
    }
})

function enviarComentario() {

    if (inputComment.value.trim() !== "") {
        const comentarioHtml = createComment(usuario.img, usuario.nick, inputComment.value);
        commentSection.insertAdjacentHTML("beforeend", comentarioHtml);
        inputComment.value = "";
    }
}

function createComment(img, usuario, text) {
    return ` <div class="comment-featured d-flex align-items-center gap-2">
                                <img src="${img}" alt="perfil jpg">
                                <div class="comment-info">
                                    <header>
                                        <h4>${usuario}</h4>
                                        <span>hace 1 dia</span>
                                    </header>
                                    <p>${text}</p>
                                    <footer>
                                        <div>
                                            <button>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="icon icon-tabler icons-tabler-outline icon-tabler-heart">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path
                                                        d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div>
                                            <button>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="icon icon-tabler icons-tabler-outline icon-tabler-share-3">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path
                                                        d="M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7" />
                                                </svg>
                                            </button>
                                        </div>
                                    </footer>
                                </div>
                            </div>`;
}
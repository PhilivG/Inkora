const content = document.getElementById("content");
const subLogin = document.getElementById("subLogin");
const user = document.getElementById("usuario");
const password = document.getElementById("password");
const errorCon = document.getElementById("span-error");

content.addEventListener("click", e => {
    const element = e.target;


    if (element.classList.contains("boton-formulario")) {
        e.preventDefault();
        const userO = user.value.toLowerCase().trim();
        const passO = password.value.trim();

        const encontrado = usuarios.find(u => {
            return u.nick.toLowerCase().trim() === userO &&
                u.password === Number(passO);
        });

        if (encontrado) {
            console.log(encontrado.nick, encontrado.password);
            localStorage.setItem("usuario", encontrado.nick)
            window.location.href = "home.html";
        } else {
            errorCon.classList.add("error");
        }
    }

})

user.addEventListener("input", cleanError)
password.addEventListener("input", cleanError)

function cleanError() {
    errorCon.classList.remove("error")
}
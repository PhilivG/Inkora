const frontPage = document.getElementById("frontpage");
const profileImg = document.getElementById("profileimg");
const profileusername = document.getElementById("profileusername");

frontPage.src = usuario.frontpage;
profileImg.src = usuario.img;
profileusername.textContent = usuario.nick;


artContainer.forEach(artcontain => {
    artcontain.classList.remove("visible");

    const usuarioAuthor = artcontain.dataset.author.toLowerCase().replace(/\s+/g, "");
    const usuarioNick = usuario.nick.toLowerCase().replace(/\s+/g, "");

    if ( usuarioAuthor === usuarioNick) {
        artcontain.classList.add("visible");
    }
})



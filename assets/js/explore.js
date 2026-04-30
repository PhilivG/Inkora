const searchListen = document.getElementById("searchListen");

const artworkListen = document.getElementById("artworklisten");
const artworkSortBtns = document.querySelectorAll(".sort-button");
const artContainer = document.querySelectorAll(".art-container");
const modalImg = document.getElementById("modalImg");

const inputSearch = document.getElementById("inputSearch");
const inputComment = document.getElementById("inputComment");
const commentSectionImg = document.getElementById("commentSectionImg");

const params = new URLSearchParams(window.location.search);
const usuario = params.get("usuario");

/* Search */
inputSearch.addEventListener("keypress", e => {

    if (e.key === "Enter") {
        console.log("hola");
        artContainer.forEach(artcontain => {
            artcontain.classList.add("hidden");
            const search = inputSearch.value.toLowerCase().replace(/\s+/g, "");
            const result = artcontain.dataset.author.split(",");
            console.log("search: " + search);
            console.log("result: " + result);

            if (result.includes(search)) {
                artcontain.classList.remove("hidden");
            }
        })
    }

})

searchListen.addEventListener("click", e => {
    const element = e.target;

    if (element.classList.contains("tag-suggetion")) {
        const trendingText = element.textContent.replace("#", "");
        inputSearch.value = trendingText;
    }


    if (element.classList.contains("filter-suggestion")) {
        const filter = element.textContent.toLowerCase().replace(/\s+/g, "");
        console.log(filter);

        if (filter === "all") {
            artContainer.forEach(artcontain => {
                artcontain.classList.remove("hidden");
            })

        } else {
            artContainer.forEach(artcontain => {
                artcontain.classList.add("hidden");
                const findFilter = artcontain.dataset.category.split(",");

                if (findFilter.includes(filter)) {
                    artcontain.classList.remove("hidden");
                }
            })
        }

    }

})

/* Artwork */
artworkSortBtns[0].classList.add("active")
artworkListen.addEventListener('click', e => {
    const element = e.target;

    if (element.classList.contains("sort-button")) {
        artworkSortBtns.forEach(btn => {
            btn.classList.remove("active");
        })

        element.classList.add('active');
    }

    if (element.classList.contains("img-column")) {
        modalImg.src = element.src;
    }

})

inputComment.addEventListener("keydown", e => {

    if (e.key === "Enter") {
        const comentario = inputComment.value;



        let srcImg = null

        if (usuario === "samdoesarts") {
            srcImg = "assets/image/samdoesarts-profile.jpg";
        } else {
            srcImg = "assets/image/kuvshinov-profile.jpg"
        }

        const comentarioHtml = createComment(srcImg, usuario, comentario);
        commentSectionImg.insertAdjacentHTML("beforeend", comentarioHtml);
    }


})

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
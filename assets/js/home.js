const resultsCount = document.getElementById("results-count");
resultsCount.textContent = document.querySelectorAll(".art-container.visible").length;

/* Search */
const searchListen = document.getElementById("searchListen");
const inputSearch = document.getElementById("inputSearch");
const inputComment = document.getElementById("inputComment");

inputSearch.addEventListener("keypress", e => {

    if (e.key === "Enter") {
        artContainer.forEach(artcontain => {
            artcontain.classList.remove("visible");
            const search = inputSearch.value.toLowerCase().replace(/\s+/g, "");
            const result = artcontain.dataset.author;
            console.log(result);

            if (result.includes(search)) {
                artcontain.classList.add("visible");
            }
        })
        navbarprofileimg.src = arrayUsuarios.img
    }

    resultsCount.textContent = document.querySelectorAll(".art-container.visible").length;
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
                artcontain.classList.add("visible");
            })

        } else {
            artContainer.forEach(artcontain => {
                artcontain.classList.remove("visible");
                const findFilter = artcontain.dataset.category.split(",");

                if (findFilter.includes(filter)) {
                    artcontain.classList.add("visible");
                }
            })
        }

    }

    resultsCount.textContent = document.querySelectorAll(".art-container.visible").length;
})

/* Artwork */
const artworkSortBtns = document.querySelectorAll(".sort-button");
const modalImg = document.getElementById("modalImg");
artworkSortBtns[0].classList.add("active")

artworkListen.addEventListener('click', e => {
    const element = e.target;

    if (element.classList.contains("sort-button")) {
        artworkSortBtns.forEach(btn => {
            btn.classList.remove("active");
        })

        element.classList.add('active');
    }
})


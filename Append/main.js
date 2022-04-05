const lists = document.querySelectorAll("li")
const append = document.querySelector(".append")

    lists.forEach(list => {
        list.addEventListener("click", (e) => {
            append.style.transform = `translate3d(${list.clientWidth}, 0px, 0px)`;
            append.style.transform = `translate3d(0px, 0px, 0px)`;
            
            list.appendChild(append)
        })
    })
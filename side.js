// JavaScript
const cross = document.querySelector(".fa-xmark");
const aside = document.querySelector("aside");
const bar = document.querySelector(".bar1");

bar.style.display = "none";

cross.addEventListener("click", () => {
    aside.classList.add("hidden");
    bar.style.display = "block";
});

bar.addEventListener("click", () => {
    aside.classList.remove("hidden");
    bar.style.display = "none";
});



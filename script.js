const navbar = document.querySelector(".navbar");
const backToTop = document.querySelector("#back");
const burger = document.querySelector(".burger");
const dropdown = document.querySelector(".dropdown");

console.log(backToTop);

window.addEventListener("scroll", function () {
    let scrollTop =
        window.pageYOffset || this.document.documentElement.scrollTop;
    if (scrollTop >= this.screen.height - this.screen.height * 0.2) {
        navbar.classList.add("nav-active");
    } else {
        navbar.classList.remove("nav-active");
    }
    // console.log(this.document.documentElement.scrollTop);
    if (this.document.documentElement.scrollTop >= this.screen.height) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

burger.addEventListener("click", () => {
    if (dropdown.style.top == "-300%") dropdown.style.top = "110%";
    else dropdown.style.top = "-300%";
});

backToTop.addEventListener("click", () => {
    window.scrollTo(0, 0);
});

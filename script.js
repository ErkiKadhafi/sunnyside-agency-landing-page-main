const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    let scrollTop =
        window.pageYOffset || this.document.documentElement.scrollTop;
    if (scrollTop >= this.screen.height - this.screen.height * 0.2) {
        navbar.classList.add("nav-active");
    } else {
        navbar.classList.remove("nav-active");
    }
    console.log(scrollTop);
});

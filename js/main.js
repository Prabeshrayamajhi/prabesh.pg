const Links = document.querySelector(".header .links");
const Link = document.querySelectorAll(".header .links .link");
const toggler = document.querySelector(".fa-bars");

console.log(Link);

toggler.addEventListener("click", () => {
  Links.classList.toggle("show");
});

let whenClicked = () => {
  Links.classList.remove("show");
};

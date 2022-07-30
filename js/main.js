const Links = document.querySelector(".header .links");
const toggler = document.querySelector(".fa-bars");

console.log(toggler);

toggler.addEventListener("click", () => {
  Links.classList.toggle("show");
});

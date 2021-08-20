const icon = document.getElementById("icon");
const nav = document.getElementById("nav-ul");

icon.addEventListener("click", () => {
  nav.classList.toggle("nav_ul--show");
});

const SR = ScrollReveal({
  origin: "top",
  duration: 2000,
  reset: true,
});
SR.reveal(
  ".principals, .principalsTwo, .principalsThree, .principalsFour, .principalContact, .seconds, .secondsTwo, .secondsThree, .third, .thirdTwo, .thirdThree",
  {
    interval: 200,
  }
);

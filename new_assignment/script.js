const initialLikes = 24;
const likeCount = document.querySelector("#like-count");
const likeButton = document.querySelector("#like-button");
const resetButton = document.querySelector("#reset-button");
const themeToggle = document.querySelector("#theme-toggle");
const navigationLinks = document.querySelectorAll(".nav-link");

let likes = initialLikes;

likeButton.addEventListener("click", () => {
  likes += 1;
  likeCount.textContent = String(likes);
});

resetButton.addEventListener("click", () => {
  likes = initialLikes;
  likeCount.textContent = String(likes);
});

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-theme", themeToggle.checked);
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigationLinks.forEach((item) => item.classList.remove("is-active"));
    link.classList.add("is-active");
  });
});

// class Toggle Navbar
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger di klik

document.getElementById("hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan sidebar
const hamburger = document.getElementById("hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

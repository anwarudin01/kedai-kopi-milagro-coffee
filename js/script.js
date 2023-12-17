// class Toggle Navbar Hamburger
// ketika hamburger di klik
const navbarNav = document.querySelector(".navbar-nav");
document.getElementById("hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk shopping cart
const shoppingChart = document.querySelector(".shopping-cart");
document.getElementById("shopping-cart-btn").onclick = (e) => {
  shoppingChart.classList.toggle("active");
  e.preventDefault();
};

// class Toggle Navbar Search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.getElementById("search-box");
document.getElementById("search-btn").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Klik di luar Element
const hamburger = document.getElementById("hamburger-menu");
const searchButton = document.getElementById("search-btn");
const shoppingChartButton = document.getElementById("shopping-cart-btn");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (
    !shoppingChartButton.contains(e.target) &&
    !shoppingChart.contains(e.target)
  ) {
    shoppingChart.classList.remove("active");
  }
});

// Modal Box

const itemDetailModal = document.getElementById("item-detail-modal");
const ItemDetailButtons = document.querySelectorAll(".item-detail-btn");

ItemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// Klik tombol close modal

document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// Klik diluar modal

window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};

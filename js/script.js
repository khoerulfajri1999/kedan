// toggle class active menu

const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// toggle shopping cart
const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart").onclick = () => {
  shoppingCart.classList.toggle("active");
};

const shoppingCartItem = document.querySelector("#shopping-cart");
document.addEventListener("click", function (e) {
  if (
    !shoppingCartItem.contains(e.target) &&
    !shoppingCart.contains(e.target)
  ) {
    shoppingCart.classList.remove("active");
  }
});

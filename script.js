let tabs = document.querySelector(".tabs");
let tab_inner = document.querySelectorAll(".tab-inner");
let tab_li = document.querySelectorAll(".tab-header li");
// console.log(tab_li);

tabs.addEventListener("click", function (event) {
  let id = event.target.dataset.id;
  if (id) {
    tab_li.forEach((li_item) => {
      li_item.classList.remove("active");
    });
    event.target.classList.add("active");

    tab_inner.forEach((item) => {
      item.classList.remove("active");
      //   console.log(item);
    });
    let active_tab = document.getElementById(id);
    active_tab.classList.add("active");
  }
});

// Progress Bar
var skillPers = document.querySelectorAll(".skill-per");

skillPers.forEach(function (skillPer) {
  var per = parseFloat(skillPer.getAttribute("per"));
  skillPer.style.width = per + "%";

  var animatedValue = 0;
  var startTime = null;

  function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = timestamp - startTime;
    var stepPercentage = progress / 1000; // Dividing by duration in milliseconds (1000ms = 1s)

    if (stepPercentage < 1) {
      animatedValue = per * stepPercentage;
      skillPer.setAttribute("per", Math.floor(animatedValue) + "%");
      requestAnimationFrame(animate);
    } else {
      animatedValue = per;
      skillPer.setAttribute("per", Math.floor(animatedValue) + "%");
    }
  }

  requestAnimationFrame(animate);
});

const the_card = document.getElementById("iam-the-card");

the_card.style.backgroundImage =
  "url('https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ')";

window.onscroll = function () {
  myFunction();
};
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navItems = document.querySelectorAll(".nav-item"); // Added this line

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close the mobile menu when a menu item is clicked
navItems.forEach((item) => {
  item.addEventListener("click", closeMobileMenu);
});

function closeMobileMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

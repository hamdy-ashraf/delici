let bookIcon = document.querySelector(".bookIcon"),
  popupTable = document.querySelector(".popup[data-popup-name='form']"),
  sideNavbar = document.querySelector(".offcanvas.offcanvas-end"),
  popupBox = document.querySelector(".popup[data-popup-name='form'] .box"),
  navEle = document.querySelector(".navbar"),
  navLinksOut = navEle.querySelectorAll(".outNav .nav-link"),
  navLinksInside = navEle.querySelectorAll(".insideNav .nav-link"),
  sections = document.querySelectorAll("header, section"),
  foodItemPopup = document.querySelector(".menuPopup"),
  popupBtnPrev = foodItemPopup.querySelector(".prev"),
  popupBtnNext = foodItemPopup.querySelector(".next"),
  foodProduct = document.querySelector(".menuPopup .box"),
  foodEle1 = document.querySelector("#Menu .content .part1"),
  foodEle2 = document.querySelector("#Menu .content .part2");

moveActiveByScroll();

addBgToNav();

popupBox.addEventListener("click", function (e) {
  e.stopPropagation();
  popupTable.addEventListener("click", closePopup);
});

let lastScroll = window.scrollY;
window.addEventListener("scroll", function () {
  let currentScroll = window.scrollY;

  if (currentScroll > lastScroll) {
    navEle.classList.add("scrolled");
  } else if (currentScroll < lastScroll) {
    navEle.classList.remove("scrolled");
  }

  addBgToNav();

  lastScroll = currentScroll;

  moveActiveByScroll();
});

navLinksOut.forEach(function (navLink) {
  navLink.addEventListener("click", function (e) {
    e.preventDefault();
    let currentLink = navEle.querySelector(".outNav .nav-link.active"),
      currentId = navLink.getAttribute("href"),
      currentSection = document.querySelector(currentId),
      topOfSection = currentSection.offsetTop;
    window.scroll(0, topOfSection);

    currentLink.classList.remove("active");
    navLink.classList.add("active");
  });
});

navLinksInside.forEach(function (navLink) {
  navLink.addEventListener("click", function (e) {
    e.preventDefault();
    let currentLink = navEle.querySelector(".insideNav .nav-link.active");
    currentLink.classList.remove("active");
    navLink.classList.add("active");
  });
});

selectSectionContent(BreakFast, 0, 3, 4, 6);

// showProducts();
// mainMenuSection();
// showfoodInPopup()

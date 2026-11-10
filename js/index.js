let nextBtn = document.querySelector("i.next"),
  prevBtn = document.querySelector("i.prev"),
  popupBoxs = document.querySelectorAll(`.popup .box`),
  menuLis = document.querySelectorAll("#Menu .navBar li a"),
  li = document.querySelector("#Menu .navBar li a"),
  dishesContainer = document.querySelector(".dishes"),
  dishItem1 = dishesContainer.querySelector(".part1"),
  dishItem2 = dishesContainer.querySelector(".part2"),
  menuPopupBox = document.querySelector(".menuPopup .box"),
  currentDishIndex = 0;
//   prevPopupBtn = document.querySelector(".menuPopup i.prev");
//   console.log(nextPopupBtn)

popupBoxs.forEach(function (popupBox) {
  popupBox.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});

menuLis.forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    let activeLi = document.querySelector("#Menu .navBar li a.active");
    activeLi.classList.remove("active");
    anchor.classList.add("active");

    moveTHroughDishes(anchor);
  });
});

let counters = {
  BreakFast: 0,
  Lunch: 0,
  Dinner: 0,
  Drinks: 0,
};

allMenu.forEach(function (dish) {
  let dishesKeys = Object.keys(counters);
  dishesKeys.forEach(function (key) {
    if (dish.type == key) {
      let i = counters[key] < 3 ? 1 : 2;
      showData(key, `part${i}`, dish, counters[key]);
      counters[key]++;
    }
  });
});

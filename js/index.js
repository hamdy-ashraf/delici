let nextBtn = document.querySelector("i.next"),
  prevBtn = document.querySelector("i.prev"),
  popupBoxs = document.querySelectorAll(`.popup .box`),
  menuLis = document.querySelectorAll("#Menu .navBar li a"),
  li = document.querySelector("#Menu .navBar li a"),
  dishesContainer = document.querySelector(".dishes"),
  dishItem1 = dishesContainer.querySelector(".part1"),
  dishItem2 = dishesContainer.querySelector(".part2"),
  menuPopupBox = document.querySelector(".menuPopup .box");
//   console.log(popupKeys)

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

BreakFast.slice(0, 3).forEach(function (dish) {
  showData("breakFast", "part1", dish);
});

BreakFast.slice(3).forEach(function (dish) {
  showData("breakFast", "part2", dish);
});

Lunch.slice(0, 3).forEach(function (dish) {
  showData("lunch", "part1", dish);
});

Lunch.slice(3).forEach(function (dish) {
  showData("lunch", "part2", dish);
});

Dinner.slice(0, 3).forEach(function (dish) {
  showData("dinner", "part1", dish);
});

Dinner.slice(3).forEach(function (dish) {
  showData("dinner", "part2", dish);
});

Drinks.slice(0, 3).forEach(function (dish) {
  showData("drinks", "part1", dish);
});

Drinks.slice(3).forEach(function (dish) {
  showData("drinks", "part2", dish);
});


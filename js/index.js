let nextBtn = document.querySelector("i.next"),
  prevBtn = document.querySelector("i.prev"),
  popupBox = document.querySelector(`.popup .box`),
  menuLis = document.querySelectorAll("#Menu .navBar li a"),
  li = document.querySelector("#Menu .navBar li a"),
  dishesContainer = document.querySelector(".dishes"),
  dishItem1 = dishesContainer.querySelector(".part1"),
  dishItem2 = dishesContainer.querySelector(".part2");
console.log(popupBox);

popupBox.addEventListener("click", function (e) {
  e.stopPropagation();
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



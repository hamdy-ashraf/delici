function nextSilder() {
  let currentSlider = document.querySelector(".slider.active"),
    nextSlider = currentSlider.nextElementSibling;
  nextSlider ?? (nextSlider = document.querySelector(".slider:first-child"));
  currentSlider.classList.remove("active");
  nextSlider.classList.add("active");
}

function prevSlider() {
  let currentSlider = document.querySelector(".slider.active"),
    prevSlider = currentSlider.previousElementSibling;
  prevSlider ?? (prevSlider = document.querySelector(".slider:last-child"));
  currentSlider.classList.remove("active");
  prevSlider.classList.add("active");
}

function openPopup(popupName) {
  let popup = document.querySelector(`.popup[data-popup-name=${popupName}]`);
  popup.classList.add("active");
  setTimeout(function () {
    popup.classList.add("show");
  }, 1);
}

function closePopup() {
  let popup = document.querySelector(`.popup`);
  popup.classList.remove("show");
  setTimeout(function () {
    popup.classList.remove("active");
  }, 1000);
}

function moveTHroughDishes(dish) {
  let dataDishName = dish.dataset.dishName,
    dishName = document.querySelector(
      `.dishContent[data-dish-name="${dataDishName}"]`,
    ),
    activeDish = document.querySelector(
      ".dishContent.active, .dishContent.show",
    );
  activeDish.classList.remove("active");
  activeDish.classList.remove("show");
  dishName.classList.add("active");
  setTimeout(function () {
    dishName.classList.add("show");
  }, 1);
}

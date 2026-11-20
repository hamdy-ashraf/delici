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
  let popup = document.querySelector(`.popup[data-popup-name=${popupName}]`),
    bodyScroll = document.querySelector("body");
  bodyScroll.classList.add("overflow-y-hidden");
  popup.classList.add("active");
  setTimeout(function () {
    popup.classList.add("show");
  }, 1);
}

function closePopup(popupName) {
  let popup = document.querySelector(`.popup[data-popup-name=${popupName}]`);
    bodyScroll = document.querySelector("body");
  bodyScroll.classList.remove("overflow-y-hidden");
  popup.classList.remove("show");
  setTimeout(function () {
    popup.classList.remove("active");
  }, 1000);
}

function addBgToNav() {
  if (window.scrollY > 30) {
    navEle.classList.add("addBg");
  } else {
    navEle.classList.remove("addBg");
  }
}

function moveActiveByScroll() {
  sections.forEach(function (section) {
    let topOfSection = section.offsetTop,
      bottomOfSection = topOfSection + section.clientHeight,
      sectionId = section.getAttribute("id"),
      currentLink = navEle.querySelector(".outNav .nav-link.active"),
      aboutLink = navEle.querySelector(`.outNav .nav-link[href='#${sectionId}']`);

    if (window.scrollY > topOfSection && window.scrollY < bottomOfSection) {
        currentLink.classList.remove("active");
        aboutLink.classList.add("active");
    }
  });
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

function showData(type, push, dish, index) {
  let dishName = document.querySelector(
    `.dishContent[data-dish-name=${type}] .${push} .item`,
  );

  dishName.innerHTML += `
  <div class="row px-4 dishItem">
    <div class="col-3">
        <div class="item">
            <div class="dishImg">
                <img
                    src="./delici_images/${dish.images}"
                    class="img-fluid"
                    alt=""
                />
                <i class="fa-regular fa-square-plus" onclick="openPopup('menu'), showPopup(${type}, ${index})"></i>
            </div>
        </div>
    </div>
    <div class="col-9 d-flex flex-column justify-content-center">
        <div class="item">
            <div class="name d-flex column-gap-lg-3 mb-3">
                <h5 class="mainColor mb-0">${dish.name}</h5>
                <div
                    class="lines d-flex justify-content-center flex-grow-1 flex-column"
                >
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
                <span class="price mainColor">${dish.price}</span>
            </div>
            <p class="details firstColor">
            ${dish.miniDescription}
            </p>
        </div>
    </div>
  </div>
  `;
}

function popupContent(itemObject, index, dishObject) {
    console.log(index);
  menuPopupBox.innerHTML = `
  <div class="title row-gap-4">
          <div class="head text-center">
            <h6 class="mainColor mb-2">RESERVATION</h6>
            <img src="./delici_images/separator.svg" class="" alt="" />
          </div>
          <div class="body text-center text-light my-4">
            <h2>${itemObject.name}</h2>
          </div>
        </div>
        <div class="memuImg rounded-3 overflow-hidden position-relative">
          <img src="./delici_images/${itemObject.images}" class="img-fluid" alt="" />
          <div class="price secondBg px-3 py-2">
            <span class="text-light">${itemObject.price}</span>
          </div>
          <span class="movingIcon"
            ><i class="fa-solid fa-chevron-right next" onclick="moveDishes(${dishObject.type}, ${index < 5 ? index + 1 : index - 5})"></i
          ></span>
          <span class="movingIcon"
            ><i class="fa-solid fa-chevron-left prev" onclick="moveDishes(${dishObject.type}, ${index > 0 ? index - 1 : index + 5})"></i
          ></span>
        </div>
        <p class="firstColor mt-4">
          ${itemObject.description}
        </p>
        <i class="fa-regular fa-circle-xmark" onclick="closePopup('menu')"></i>
  `;
}

function showPopup(type, index) {
  let dishdata = type[index];

  popupContent(dishdata, index, dishdata);
}

function moveDishes(type, index) {
  let dishdata = type[index];
  popupContent(dishdata, index, dishdata);
}

function moveActiveByIcon(
  direction,
  position,
  sliderPosition,
  index,
  indicatorPosition,
) {
  let currentSlider = document.querySelector(".slider.active"),
    currentIndicator = document.querySelector(".moveIndicators span.active");

  if (direction == "next") {
    sliderPosition =
      currentSlider.nextElementSibling ??
      document.querySelector(`.${position}-slider`);
    indicatorPosition =
      currentIndicator.nextElementSibling ??
      document.querySelector(`.moveIndicators span[data-index="${index}"]`);
  } else if ((direction = "prev")) {
    sliderPosition =
      currentSlider.previousElementSibling ??
      document.querySelector(`.${position}-slider`);
    indicatorPosition =
      currentIndicator.previousElementSibling ??
      document.querySelector(`.moveIndicators span[data-index="${index}"]`);
  }

  currentSlider.classList.remove("active");
  sliderPosition.classList.add("active");
  currentIndicator.classList.remove("active");
  indicatorPosition.classList.add("active");
}

function openPopup(popupType, that) {
  // showfoodInPopup();
  popupType.classList.add("active");
  popupType.classList.remove("d-none");
  setTimeout(function () {
    popupType.classList.add("show");
  }, 1);

  //   console.log(productImgSrc);
  //   console.log(popupImgSrc);
  //   console.log(that);
  //   console.log(popupImg);
  //   console.log(productImg);
}

function closePopup(popupName) {
  popupName.classList.remove("show");
  setTimeout(function () {
    popupName.classList.remove("active");
    popupName.classList.add("d-none");
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
      aboutLink = navEle.querySelector(
        `.outNav .nav-link[href='#${sectionId}']`,
      );

    if (window.scrollY > topOfSection && window.scrollY < bottomOfSection) {
      currentLink.classList.remove("active");
      aboutLink.classList.add("active");
    }
  });
}

function selectSection(sectionItem) {
  foodEle2 = document.querySelector("#Menu .content .part2");
  //   let hasActive = document.querySelector("#Menu .content .part.active");
  if (sectionItem == "BreakFast") {
    // hasActive.classList.remove("active")
    //   foodEle1.classList.add("active")
    selectSectionContent(BreakFast, 0, 3, 4, 6);
  } else if (sectionItem == "Lunch") {
    // hasActive.classList.remove("active")
    //   foodEle1.classList.add("active")
    selectSectionContent(Lunch, 6, 9, 10, 12);
  } else if (sectionItem == "Dinner") {
    // hasActive.classList.remove("active")
    //   foodEle1.classList.add("active")
    selectSectionContent(Dinner, 12, 15, 16, 18);
  } else if (sectionItem == "Drinks") {
    // hasActive.classList.remove("active")
    //   foodEle1.classList.add("active")
    selectSectionContent(Drinks, 18, 21, 22, 24);
  }
}

function selectSectionContent(sectionItem, id1, id2, id3, id4) {
  foodEle2.innerHTML = "";
  foodEle1.innerHTML = "";
  sectionItem.forEach(function (foodItem) {
    if (foodItem.id > id1 && foodItem.id <= id2) {
      foodEle1.innerHTML += `
        <div class="col-12 product data-id='${foodItem.id}'">
            <div class="item">
                <div class="row">
                    <div
                        class="col-lg-3 col-sm-4 col-5 d-flex align-items-center d-lg-block"
                    >
                        <div
                        class="item position-relative rounded-4 overflow-hidden"
                        >
                        <div class="image overflow-hidden">
                            <img
                            src="./delici_images/${foodItem.images[0]}"
                            class=""
                            alt=""
                            />
                        </div>
                        <div
                            class="popupImg d-flex justify-content-center align-items-center"
                        >
                            <i class="fa-regular fa-square-plus" onclick='showfoodInPopup(${foodItem.id})' ></i>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-9 col-sm-8 col-7">
                        <div class="item">
                        <div
                            class="title d-flex align-items-start align-items-lg-center flex-column flex-lg-row column-gap-2 mb-2"
                        >
                            <span class="name mainColor"
                            >${foodItem.name}</span
                            >
                            <div
                            class="lines d-sm-flex flex-sm-column d-none flex-grow-1"
                            >
                            <span class="line"></span>
                            <span class="line"></span>
                            </div>
                            <span class="price mainColor">${foodItem.price}</span>
                        </div>
                        <p>
                            ${foodItem.miniDescription}
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
      return;
    } else if (foodItem.id >= id3 && foodItem.id <= id4) {
      foodEle2.innerHTML += `
        <div class="col-12 product" data-id='${foodItem.id}'>
            <div class="item">
                <div class="row">
                    <div
                        class="col-lg-3 col-sm-4 col-5 d-flex align-items-center d-lg-block"
                    >
                        <div
                        class="item position-relative rounded-4 overflow-hidden"
                        >
                        <div class="image overflow-hidden">
                            <img
                            src="./delici_images/${foodItem.images[0]}"
                            class=""
                            alt=""
                            />
                        </div>
                        <div
                            class="popupImg d-flex justify-content-center align-items-center"
                        >
                            <i class="fa-regular fa-square-plus" onclick='openPopup(foodItemPopup, this); showfoodInPopup(${foodItem.id})'></i>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-9 col-sm-8 col-7">
                        <div class="item">
                        <div
                            class="title d-flex align-items-start align-items-lg-center flex-column flex-lg-row column-gap-2 mb-2"
                        >
                            <span class="name mainColor"
                            >${foodItem.name}</span
                            >
                            <div
                            class="lines d-sm-flex flex-sm-column d-none flex-grow-1"
                            >
                            <span class="line"></span>
                            <span class="line"></span>
                            </div>
                            <span class="price mainColor">${foodItem.price}</span>
                        </div>
                        <p>
                            ${foodItem.miniDescription}
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
  });
}

function getProduct(foodId) {
  return allMenu.filter(function (foodItem) {
    return foodItem.id == foodId;
  });
}

function showfoodInPopup(foodId) {
  let product = getProduct(foodId)[0];
  console.log(product);
  foodProduct.innerHTML = `
    <div class="experience mb-3 mainColor text-center">
          <h6>SPECIAL SELECTION</h6>
          <img src="./delici_images/separator.svg" class="img-fluid" alt="" />
        </div>
        <h2 class="text-light text-center mb-4">${product.name}</h2>
        <div class="image position-relative">
          <img src="./delici_images/${product.images[0]}" class="img-fluid" alt="" />
          <div class="moveProduct d-block">
            <span class="prev"
              ><i class="fa-solid fa-chevron-left prev"></i
            ></span>
            <span class="next"
             onclick="moveSliderInPopup()"
              ><i class="fa-solid fa-chevron-right next"></i
            ></span>
          </div>
          <span class="price">${product.price}</span>
        </div>
        <p>
          ${product.description}
        </p>
        <i
          class="fa-regular fa-circle-xmark exit"
          onclick="closePopup(foodItemPopup)"
        ></i>
    `;

    console.log(foodProduct)

  openPopup(foodItemPopup, this);
}

let sliderImages = Array.from(
    document.querySelectorAll(".slider-container img")
  );
  let slidersCount = sliderImages.length;
  let currentSlide = 1;
  let slideNumberElement = document.getElementById("slide-number");
  let nextButton = document.getElementById("next");
  let prevButton = document.getElementById("prev");
  
  nextButton.onclick = nextSlide;
  prevButton.onclick = prevSlide;
  
  let paginationElement = document.createElement("ul");
  
  paginationElement.setAttribute("id", "pagination-ul");
  
  for (let i = 1; i <= slidersCount; i++) {
    let paginationItem = document.createElement("li");
    paginationItem.setAttribute("data-index", i);
    paginationItem.appendChild(document.createTextNode(i));
    paginationElement.appendChild(paginationItem);
  }
  
  document.getElementById("indicators").appendChild(paginationElement);
  let buletElement = Array.from(document.querySelectorAll("#pagination-ul li"));
  for (let i = 0; i < buletElement.length; i++) {
    buletElement[i].onclick = function () {
      currentSlide = parseInt(this.getAttribute("data-index"));
      theChecker();
    };
  }
  
  theChecker();
  
  function nextSlide() {
    if (nextButton.classList.contains("disabled")) {
      return false;
    } else {
      currentSlide++;
    }
    theChecker();
  }
  
  function prevSlide() {
    if (prevButton.classList.contains("disabled")) {
      return false;
    } else {
      currentSlide--;
    }
    theChecker();
  }
  
  function theChecker() {
    slideNumberElement.textContent =
      "Slide #" + currentSlide + " of " + slidersCount;
    removeActive();
    sliderImages[currentSlide - 1].classList.add("active");
    paginationElement.children[currentSlide - 1].classList.add("active");
  
    if (currentSlide == 1) {
      prevButton.classList.add("disabled");
      prevButton.style.background = "#00968880";
      prevButton.style.cursor = "no-drop";
    } else {
      prevButton.classList.remove("disabled");
      prevButton.style.background = " #009688";
      prevButton.style.cursor = "pointer";
    }
    if (currentSlide == slidersCount) {
      nextButton.classList.add("disabled");
      nextButton.style.background = "#00968880";
      nextButton.style.cursor = "no-drop";
    } else {
      nextButton.classList.remove("disabled");
      nextButton.style.background = " #009688";
      nextButton.style.cursor = "pointer";
    }
  }
  
  function removeActive() {
    sliderImages.forEach(function (img) {
      img.classList.remove("active");
    });
    buletElement.forEach(function (bulet) {
      bulet.classList.remove("active");
    });
  }
  
const closeModalBtn = document.querySelector("[data-modal-close]");
const modal = document.querySelector("[data-modal]");
const body = document.querySelector("body");
const popupSwiper = document.querySelector(".popup-swiper");
export let indexOfSlide = 0;

function handleClickOnVideo(e) {
  if (!e.target.classList.contains("video-img")) return;
  openModal(e.target.dataset.source);
  indexOfSlide = Number(e.target.dataset.number);
}

function openModal(videoUrl) {
  window.addEventListener("keydown", closeByEsc);
  closeModalBtn.addEventListener("click", handleCloseModalBtn);

  modal.classList.toggle("is-hidden");
  body.classList.toggle("no-scroll");

  popupSwiper.innerHTML = renderPopupSwiper(videoUrl);
  
  
}

function handleCloseModalBtn() {
  modal.classList.toggle("is-hidden");
  body.classList.toggle("no-scroll");
  window.removeEventListener("keydown", closeByEsc);
}

function renderPopupSwiper(videoUrl) {
  return new Array(8).fill('').map(
      (_, index) =>
        `<div class="popup-slide swiper-slide" data-number=${index+=1}><iframe src=${videoUrl+'&autoplay=1&loop=1&autopause=0'} frameborder="0" fullscreen allow='autoplay' loading="lazy"></iframe></div>`
    )
    .join("");
}

function closeByEsc({ code }) {
  if (code === "Escape") {
    handleCloseModalBtn();
  }
}

export { handleClickOnVideo };

import Player from "@vimeo/player";
const closeModalBtn = document.querySelector("[data-modal-close]");
const modal = document.querySelector("[data-modal]");
const body = document.querySelector("body");
const popupSwiper = document.querySelector(".popup-swiper");

export let indexOfSlide = 0;
let playerArr = [];

// handle click on list of video picture
function handleClickOnVideo(e) {
  if (!e.target.classList.contains("video-img")) return;
  indexOfSlide = Number(e.target.dataset.number);

  openModal(e.target.dataset.source);
}

function openModal(videoUrl) {
  window.addEventListener("keydown", closeByEsc);
  closeModalBtn.addEventListener("click", handleCloseModalBtn);

  modal.classList.toggle("is-hidden");
  body.classList.toggle("no-scroll");

  popupSwiper.innerHTML = renderPopupSwiper(videoUrl);

  const arrIframe = Array.from(
    document.querySelectorAll("div.popup-slide iframe")
  );
  playerArr = arrIframe.map((item) => {
    const player = new Player(item);
    return player;
  });
  playerArr[indexOfSlide].play();
}

function handleCloseModalBtn() {
  playerArr[indexOfSlide].pause();
  modal.classList.toggle("is-hidden");
  body.classList.toggle("no-scroll");
  window.removeEventListener("keydown", closeByEsc);
}

// close modal by Esc
function closeByEsc({ code }) {
  if (code === "Escape") {
    handleCloseModalBtn();
  }
}

function renderPopupSwiper(videoUrl) {
  return new Array(8)
    .fill("")
    .map(
      () =>
        `<div class="popup-slide swiper-slide"><iframe src=${videoUrl} frameborder="0" fullscreen allowfullscreen allow="autoplay; encrypted-media" loading="lazy"></iframe></div>`
    )
    .join("");
}

export { handleClickOnVideo };

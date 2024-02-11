import { fetchVideo } from "./vimeo-api";
import { handleClickOnVideo } from "./modal";

// add listener on click on video picture
const list = document.querySelector(".video-list");
list.addEventListener("click", handleClickOnVideo);
getVideo();

// get data from vimeoAPI, picture and video url
async function getVideo() {
  try {
    const result = await fetchVideo();
    const imgObject = result.pictures.sizes.find((item) => item.width === 640);
    list.insertAdjacentHTML(
      "beforeend",
      renderVideo(result.player_embed_url, imgObject.link_with_play_button)
    );
  } catch (error) {
    console.log(error);
    alert("Something went wrong! Please try again later.");
  }
}

// render list of video picture
function renderVideo(fullVideo, url) {
  const arrUrl = new Array(8).fill(url);
  return arrUrl
    .map(
      (url, index) =>
        `<li class='video-item swiper-slide'><img class='video-img' data-source=${fullVideo} data-number=${index} src=${url} width='640' height='360' alt="video-picture" loading="lazy"></li>`
    )
    .join("");
}

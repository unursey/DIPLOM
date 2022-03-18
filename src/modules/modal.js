import { animate } from "./helpers";

const modal = () => {
  const btn = document.querySelector(".callback-btn.fancyboxModal.hidden-xs");
  const modalCallback = document.querySelector(".modal-callback");
  const modalOverlay = document.querySelector(".modal-overlay");

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    modalCallback.style.display = "block";
    modalOverlay.style.display = "block";
    let width = document.documentElement.clientWidth;
    if (width > 768) {
      animate({
        duration: 1000,
        timing(timeFraction) {
          return Math.pow(timeFraction, 1);
        },
        draw(progress) {
          modalCallback.style.left = progress * 50 + "%";
        },
      });
    } else {
      modalCallback.style.left = "50%";
    }
  });

  document.body.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("modal-overlay") ||
      e.target.getAttribute("alt") == "modal-close"
    ) {
      modalOverlay.style.display = "none";
      modalCallback.style.display = "none";
    }
  });
};

export { modal };

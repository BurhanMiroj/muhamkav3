import "./animation/swiper.js";
import "./animation/animation.js";
import "./copy.js";

const closeOpenSocmenBtn = document.querySelector(".close-open-btn");
const closeOpenIcon = document.querySelector(".close-open-btn i")
const socialMediaWrapper = document.querySelector(".social-media-wrapper");

closeOpenSocmenBtn.addEventListener("click", function() {
    socialMediaWrapper.classList.toggle("active")
    closeOpenIcon.classList.toggle("icon-active")
})


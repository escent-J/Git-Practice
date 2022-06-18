"use strict";

// hidemenu
const p = document.getElementById("p");
const hidemenu = document.querySelector(".hidemenu");

p.addEventListener("mouseover", () => {
  if (hidemenu.classList.contains("on")) {
    hidemenu.classList.remove("on");
  } else {
    hidemenu.classList.add("on");
  }
});

p.addEventListener("mouseleave", () => {
  if (hidemenu.classList.contains("on")) {
    hidemenu.classList.remove("on");
  } else {
    hidemenu.classList.add("on");
  }
});
// hidemenu

//banner
const bannerbox = document.querySelector("banner_box > ul");
const banneritem = document.querySelectorAll(".banner_item");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

const size = banneritem[0].clientWidth;
let counter = 0;

setInterval(() => {
  //반복
  if (counter < bannerItem.length - 1) {
    counter++;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  } else if (counter == bannerItem.length - 1) {
    counter = 0;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  }
}, 3000);

nextBtn.addEventListener("click", () => {
  // clearInterval(banner); //클릭할 때마다 interval을 삭제시켜줌
  if (counter < bannerItem.length - 1) {
    //counter가 bannerItem의 길이-1 보다 작다면
    counter++; // counter에 1씩 증가
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
    //bannerBox를 x축으로 -size*counter px 만큼 이동
  } else if (counter == bannerItem.length - 1) {
    //counter가 bannerItem의 길이-1 과 같다면
    counter = 0; //counter에 0
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  }
});

prevBtn.addEventListener("click", () => {
  if (counter == bannerItem.length + 1) {
    counter--;
    bannerBox.style.transform = "translaxeX(" + size * counter + "px)";
  }
});

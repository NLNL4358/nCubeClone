/* 페이지가 열리자마자 Fade 클래스 추가 */
// document.querySelector(".PageNation").classList.add("fade");


/* 페이지가 모두 로드되면 Face 클래스 제거 */
document.addEventListener("DOMContentLoaded", () => {
  window.setTimeout(() => {
    document.querySelector(".PageNation").classList.remove("fade");
  },100);
});

/*====== 변수 ==========*/
/* header nav Button */
let nav = document.querySelectorAll(".headerNavButton");

let headerLogoButton = document.querySelector(".headerLogoButton");
let footerLogoButton = document.querySelector(".footerLogoButton");


/* ======= 이벤트 ====== */
for(let index = 0 ; index < nav.length ; index++){
  nav[index].addEventListener("click", (e) => {
    e.preventDefault();

    /* fadeOut */
    document.querySelector(".PageNation").classList.add("fade");

    /* 이동 */
    window.setTimeout(()=>{
      goChangePage(index);
    },1000)
  })
}

headerLogoButton.addEventListener("click", function(e){ /* 헤더 로고 클릭 */
  e.preventDefault();
  /* fadeOut */
  document.querySelector(".PageNation").classList.add("fade");
  window.setTimeout(()=>{
    goIndexPage(headerLogoButton.dataset.url);
  },1000)
})

footerLogoButton.addEventListener("click", function(e){ /* 푸터 로고 클릭 */
  e.preventDefault();
  /* fadeOut */
  document.querySelector(".PageNation").classList.add("fade");
  window.setTimeout(()=>{
    goIndexPage(footerLogoButton.dataset.url);
  },1000)
})


/*======== 함수 ==========*/
goChangePage = (index) => {
  window.location.href = nav[index].dataset.url;
}

goIndexPage = (url) =>{
  window.location.href = url;
}
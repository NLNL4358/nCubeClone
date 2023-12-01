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

for(let index = 0 ; index < nav.length ; index++){
  nav[index].addEventListener("click", (e) => {
    e.preventDefault();

    /* fadeOut */
    document.querySelector(".PageNation").classList.add("fade");

    /* 이동 */
    window.setTimeout(()=>{
      goChangePage(index);
    },800)
  })
}

/*======== 함수 ==========*/
goChangePage = (index) => {
  window.location.href = nav[index].dataset.url;
}
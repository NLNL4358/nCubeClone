$(document).ready(function(e){
            /* ========= 변수 ======== */
  let MoreButton = $(".AboutUsMainRightWrapMoreButton");


            /* ========== 이벤트 ======= */
  $(MoreButton).click(function(e){
    $(".PageNation").addClass("fade");

    window.setTimeout(()=>{
      goProjectPage($(MoreButton).data("href"));
    })
  })

            /* ========== 함수 ========= */
      goProjectPage = (target) =>{
      window.location.href = target;
    }

            /* ========== 초기화 ======== */
})
$(document).ready(function(e){

  /* ====== 변수 ====== */

  const ProjectCategoryButton = $(".ProjectCategoryButton");  /* 5개의 카테고리 버튼 */
  const ProjectContentsWrap = $(".ProjectContentsWrap");    /* 각 콘텐츠 data-contents라는 데이터 값으로 category를 가지고있음*/

  let currentCategory = "All"  /* 현재 선택된 카테고리 */

  /* ====== 이벤트 ======= */
  $(ProjectCategoryButton).map((index, item)=>{
    $(item).click(function(e){
      changeSelectedButton(index); 
      currentCategory =item.dataset.category;  /* 선택된 카테고리 동기화 */
      fadeOutProjectContentsWrap(currentCategory);
    })
  })


  /* ====== 함수 ======== */
  changeSelectedButton = (target) =>{
    /* 타겟 버튼만 selected 클래스 추가 */
    $(ProjectCategoryButton).map((index, item)=>{
      $(item).removeClass("selected");
    })
    $(ProjectCategoryButton[target]).addClass("selected");
  }

  fadeOutProjectContentsWrap = (target) =>{
    /* 선택된 target(카테고리) 외의 ContentsWrap은 display None */
    $(".ProjectContentsSection").addClass("fade"); /* 자연스러운 변경을 위한 section FadeOut */
    window.setTimeout(() => {
      /* 0.5초 뒤 none 주기 */
    $(ProjectContentsWrap).map((index, item) => {
      if(item.dataset.contents != target && target != "All"){
        $(item).addClass("none"); /* 일치하지 않다면 display none */
      }
      else{
        $(item).removeClass("none");
      }
    });
    $(".ProjectContentsSection").removeClass("fade"); /* 다시 FadeIn */
    }, 500);
  }

  /* ====== 초기화 ======= */

})
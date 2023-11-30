$(document).ready(function(e){

  /* ======= 변수 ======== */
  /* headerList 는 헤더의 Li를 가르키며 클릭햇을때 페이지 변경하도록 해야함 */
  let headerList = $(".headerLi");

  /* header 가 스크롤 이벤트를 가지기위함 */
  let scrollY = $(document).scrollTop();

  /* PageNation 은 각 페이지의 부모div 로 5개를 가짐 */
  let PageNation = $(".PageNation");
  let PageNationRemember = 0;


  /* ======= 이벤트 리스너 ======== */
        /* scroll 이벤트때는 $(window).on("wheel", function()..) 으로하면 딜레이가 있다. 고로 .scroll 이벤트를 사용함 */
  $(window).scroll(function(e){
    headerScrollFunction();
  })


        /* headerList 클릭 이벤트 */
  for(let i = 0 ; i < headerList.length ; i++){
    $(headerList[i]).on("click",function(e){
          /* header nav 의 current 변경 함수 */
      changeHeaderList(i);

          /* 페이지 변경 함수 */
      // changePageNation(i);
    })
  }


  /* ======= 함수 ======= */

      /* 스크롤 이벤트 힘수 */
  const headerScrollFunction = () => {
    scrollY = $(window).scrollTop();
    scrollY > 0 ? $("Header").addClass("scrolled") : $("Header").removeClass("scrolled");
    
  }

      /* 헤더 네비게이션 클릭 호출 함수 */
  const changeHeaderList = (target) => {
    /* target 은 선택된 header Navigation List */
    headerList.map((index)=>{ 
      $(headerList[index]).removeClass("currentPageNav");
    })
    $(headerList[target]).addClass("currentPageNav");
  }

  const changePageNation = (target) => {

    if(PageNationRemember === target){
      /* 재클릭일때 */
      return;
    }

    /* target 은 선택된 PageNation */
    $(PageNation[PageNationRemember]).removeClass("openPage");  /* 초기 page 클래스 제거 */
    $(PageNation[PageNationRemember]).removeClass("currentPage");  /* 최근 page 클래스 제거 */
    PageNation.map((index)=>{
      $(PageNation[index]).removeClass("prevPage"); /* prevPage였던 페이지 제거 */
    })
    

    $(PageNation[PageNationRemember]).addClass("prevPage");  /* 최근 page 클래스 제거 */
    $(PageNation[target]).addClass("currentPage");            /*  타켓 page 클래스 생성 */

    PageNationRemember = target;
  }


  /* ====== 초기화 ====== */
  headerScrollFunction();
})
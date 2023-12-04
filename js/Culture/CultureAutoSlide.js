$(document).ready(function(e){
  /* 
  콘셉 : Culture의 AutoSlideImageWrap을 만들어야한다.
  1 ) 동일한 속도로 transform : translate() 를 이용해 움직인다.
  2 ) 1번이미지를 복사하여 미리 맨뒤에 붙혀준다.
  3 ) 1번이미지만큼 wrap이 이동하게되면 1번이미지는 화면밖으로 나가서 필요없어지므로 제거 한다.
  4 ) 다음 2번이미지가 1번이미지가 되며 위의 동작을 반복한다.
  */
  
  
  /* ===== 변수 ====== */
  const OurDayTrailer = $(".OurDayTrailer"); /* 어른의날 트레일러 */
  let OurDayImage = $(".OurDayImage"); /* 어른의날 이미지 8개 배열 */
  let OurDayTargetNumber = 0;  /* 0 -> 7까지 증가 반복 */
  let OurDayTransformWidth = 0;
  let tempOurDayDOM;  /* 맨 왼쪽 어른의날 image 저장용 */

  const CrewTrailer = $(".CrewTrailer"); /* 사내이벤트 트레일러 */
  let CrewImage = $(".CrewImage"); /* 사내이벤트 이미지 8개 배열 */
  let CrewTargetNumber = 7; /* 7 -> 0까지 증감 반복 */
  let CrewTransformWidth = 0;
  let tempCrewDOM;  /* 맨 왼쪽 사내이벤트 image 저장용 */

  
  /* ===== 함수 ====== */
        /* OurDay 트레일러  */
  const OurDayTimer = setInterval(()=>{
    $(".OurDayTrailer").css("transform" , `translate(-${(OurDayTransformWidth++)/4.5}px)`);
    if(OurDayTransformWidth/4.5 > Number($(OurDayImage[OurDayTargetNumber]).css("width").replace("px",""))){
      settingOurDayTrailer();
    }
  }, 1); /* 16.6ms 가 약 60프레임을 나타냄 */


  const settingOurDayTrailer = () => {
    tempOurDayDOM = OurDayImage[OurDayTargetNumber];
    $(OurDayTrailer).append(tempOurDayDOM); /* 뒤에 DOM 추가 */
    $(".OurDayImage:nth-of-type(0)").detach();
    OurDayTransformWidth = 0;
    OurDayTargetNumber = (OurDayTargetNumber == 7) ? 0 : OurDayTargetNumber+1; /* 마지막이면 0으로 */
  }


        /*  Crew 트레일러 ... OurDay와 방향만 반대 */
  const CrewTimer = setInterval(()=>{
    $(".CrewTrailer").css("transform", `translate(${(CrewTransformWidth++)/4.5}px)`);
    if(CrewTransformWidth/4.5 > Number($(CrewImage[CrewTargetNumber]).css("width").replace("px",""))){
      settingCrewTrailer();
    }
  })

  const settingCrewTrailer = () => {
    tempCrewDOM = Crewimage[CrewTargetNumber];
    $(CrewTrailer).prepend(tempCrewDOM); /* 뒤에 DOM 추가 */
    $(".CrewImage:nth-of-type(7)").detach();
    CrewTransformWidth = 0;
    CrewTargetNumber = (CrewTargetNumber == 0) ? 7 : CrewTargetNumber-1;
  }
  
  /* ===== 이벤트 ====== */
  
  /* 페이지 나갈때 clearInterval */
  $(window).on("beforeunload", function(e) {
    clearInterval(OurDayTimer);
    clearInterval(CrewTimer);
  });

  
  /* ===== 초기화 ====== */
})
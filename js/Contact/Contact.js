$(document).ready(function(e){
  /* ======== 변수 ======== */
  const SubmitButton = $(".submitButton");

  let CompanyName; /* 기관/기업 */ 
  let EmailInput; /* 이메일 */
  let ManagerInput; /* 담당자명 */
  let BudgetInput; /* 예산 */
  let ScheduleInput; /* 일정 */
  let ProjectTextInput; /* 원하는 작업물의 구체적 설명 */
  
  let CheckedBox;  /* checkbox Input 총 9개의 배열이 들어갈 예정 */
  let checkboxInput = new Array();  /* 먗개 들어갈지 모르니 동적배열 */
  
  
  
  
  /* ======== 함수 ======== */

  const setValue = () =>{   /* 변수 setting */
    CompanyName = $(".CompanyInput").val();
    EmailInput = $(".EmailInput").val();
    ManagerInput = $(".ManagerInput").val();
    BudgetInput = $(".BudgetInput").val();
    ScheduleInput = $(".ScheduleInput").val();
    ProjectTextInput = $(".ProjectTextarea").val();

    CheckedBox = $(".checkboxInput:checked");
    $(CheckedBox).map((index,item)=>{
      checkboxInput[index] = $(item).val();
    })
  }
  
  const checkValue = () => {
    if(CompanyName === "" || EmailInput === "" || ManagerInput === "" || BudgetInput === "" || ScheduleInput === "" || ProjectTextInput === "" || checkboxInput.length < 1 ){
      return false;
    }
    return true;
  }

  
  
  
  
  
  
  /* ======== 이벤트 ======== */
  $(SubmitButton).click(function(){ /* 문의 버튼 클릭이벤트 */
    setValue();
    if(!checkValue()){
      alert(" 기재되지 않은 영역이 존재합니다. ");
    }
    else{
      
    }
  })
  
  
  
  
  
  
  
  /* ======== 초기화 ======== */

  
  
  
  
  
  
  



})
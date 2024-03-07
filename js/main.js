// 검색 영역(.search)클릭 시 input에 강제 focus및 제어
// 검색영역 div와 input 찾기
const searchEl = document.querySelector('.search');
console.log(searchEl);

// const searchElInput = document.querySelector('input');
// console.log(searchElInput);
//문서 전체에서 찾지말고 아래와 같이 최적회
//각 요소도 각각의 querySelector를 가지고 있음
const searchElInput = searchEl.querySelector('input');
console.log(searchElInput);

//검색 영역을 클릭하면 input 요소를 포커스 하도록 실행
searchEl.addEventListener('click', function () { //이벤트 핸들러
  searchElInput.focus(); //요소에 포커스 강제 적용
})


// input 요소에 포커스(focus)되면 placeholder 추가
// 힌트: setAttribute()

searchElInput.addEventListener('focus', function () {
searchElInput.setAttribute('placeholder', '검색어를 입력하세요');
searchEl.classList.add('focused')
});

// input 요소에 포커스 해제(blur)되면 placeholder 초기화
// 힌트: setAttribute()

searchElInput.addEventListener('blur', function () {
searchElInput.removeAttribute('placeholder','');
searchEl.classList.remove('focused')
});

// searchElInput.addEventListener('blur', function () {
//   searchElInput.setAttribute('placeholder','');
//   searchEl.classList.remove('focused')
// });

// 스크롤 시 전역 배지(고정 배너) 숨기기
const badgesEl = document.querySelector('header .badges');

// 페이지에 스크롤 이벤트 감지를 추가!!
// window : 브라우저 창 전체
window.addEventListener('scroll',function () {
  console.log(window.scrollY); //(y축으로 얼마나 스크롤 했는지) 페이지 스크롤 위치

  //Quiz!! :
  //페이지스크롤 위치가 500px 넘으면 배치 요소를 숨기고,
  
  // 페이지 스크롤 위치가 500px 안넘으면 배치 요소 보이기

//  if (window.scrollY > 500) {
//   badgesEl.style.display = 'none';
//  } else {
//   badgesEl.style.display = 'block';
//  };

  if (window.scrollY < 500) {
    badgesEl.style.opacity = 1;
    badgesEl.style.visibilty = "visible";
  } else {
    badgesEl.style.opacity = 0;
    badgesEl.style.visibilty = "hidden";
  };

  //gsap.to(요소, 지속시간, 옵션(데이터 타입은 객체 = {}) :메소드 CSS 속성을 통해 애니메이션 처리 )
  // if (window.scrollY > 500) {
  //   gsap.to(badgeEl, 0.6, {
  //     opasity : 0,
  //     display : 'none'
  //   });
  // } else {
  //   gsap.to(badgeEl, 0.6, {
  //     opasity : 1,
  //     display : 'block'
  //   }); 
  // }
});


// 순차적으로 VISUAL 섹션 내 요소 보이기
// 나타날 요소(.fade-in)들을 찾기
const fadeEl =  document.querySelectorAll('.visual .fade-In');
fadeEl.forEach(function (fadeEl, index) {
  console.log(fadeEl, index);
  //gsap.to(요소, 지속시간,옵션:{});
  gsap.to(fadeEl,1,{
    opacity :1,
    delay :  (index + 1) * 0.7
    //0.7s, 1.4s, 2.1s, 2.8s
  });
});



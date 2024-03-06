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

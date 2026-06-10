// 카테고리 필터링 함수
function filterProducts(category) {
  // 모든 제품 카드 선택
  const productCards = document.querySelectorAll('.about-me');
  
  // 클릭된 버튼 활성화 상태 표시 변경
  const buttons = document.querySelectorAll('.cat-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  
  // event 요소를 이용해 클릭 타겟에 active 부여
  if (window.event) {
    window.event.target.classList.add('active');
  }

  // 각 제품 카드에 대해 카테고리 필터링 적용
  productCards.forEach(card => {
    const productCategory = card.getAttribute('data-category');

    // 필터 조건 매칭 (애니메이션 효과 적용을 위해 전환 처리 가능)
    if (category === 'all' || category === productCategory) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
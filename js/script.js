// 카테고리 필터링 함수
function filterProducts(category) {

  // 모든 제품 카드 선택
  const productCards = document.querySelectorAll('.about-me');

  // 각 제품 카드에 대해 카테고리 필터링 적용
  productCards.forEach(card => {

    // 제품 카드의 data-category 속성
    const productCategory = card.getAttribute('data-category');

    // 필터 조건
    if (category === 'all' || category === productCategory) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }

  });
}
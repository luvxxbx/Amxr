window.addEventListener('DOMContentLoaded', () => {
    // 딜레이를 살짝 주어 페이지 로드가 완료된 후 스킬바 애니메이션 실행
    setTimeout(() => {
        const progressBars = document.querySelectorAll('.skill-progress');
        
        progressBars.forEach(bar => {
            // HTML 태그 내 data-width에 지정해둔 목표 치수를 읽어옴
            const targetWidth = bar.getAttribute('data-width');
            // 해당 치수만큼 width 속성을 변경하여 부드럽게 채워짐 효과 발생
            bar.style.width = targetWidth;
        });
    }, 200);
});
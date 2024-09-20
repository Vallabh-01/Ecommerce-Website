
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
    const container = document.querySelector('.promotions-container');
    let scrollAmount = 0;
    const cardWidth = document.querySelector('.promotion-card').clientWidth;

    leftBtn.addEventListener('click', () => {
        if (scrollAmount > 0) {
            scrollAmount -= cardWidth;
            container.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });

    rightBtn.addEventListener('click', () => {
        if (scrollAmount < (cardWidth * (container.childElementCount - 1))) {
            scrollAmount += cardWidth;
            container.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });


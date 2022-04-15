setInterval(() => {
    let rectangles = document.getElementsByClassName('rectangle');

    if ((window.screen.width <= 454 && rectangles.length > 6) || (window.screen.width > 454 && rectangles.length > 10)) return;

    let xPosition = Math.floor(Math.random() * (window.innerWidth - 100));

    let height = Math.floor(Math.random() * (40)) + 10;
    let width = Math.floor(Math.random() * (40)) + 10;

    let speed = Math.floor(Math.random() * (9)) + 1;

    let yPosition = '-450px';

    let rectangle = document.createElement('div');
    rectangle.classList.add('rectangle');
    rectangle.style.left = xPosition + 'px';
    rectangle.style.bottom = yPosition;
    rectangle.style.animation = `goToTop ${speed}s forwards`;
    rectangle.style.minHeight = height + 'px';
    rectangle.style.minWidth = width + 'px';
    rectangle.style.maxWidth = width + 'px';

    document.body.appendChild(rectangle);

    setTimeout(() => {
        document.body.removeChild(rectangle);
    }, (speed + 1) * 1000)
}, 1000);
function moveButton() {
    const button = document.getElementById('noButton');
    const container = document.querySelector('.container');

    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width - 20;
    const maxY = containerRect.height - buttonRect.height - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    button.style.transform = `translate(${x}px, ${y}px)`;
}


function goBack() {
    window.location.href = 'date.html';
}
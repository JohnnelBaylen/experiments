
const btn = document.getElementById('predictBtn');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
    
    const now = new Date();
    const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000); 

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const tomorrowDay = days[tomorrow.getDay()];

    const hours = tomorrow.getHours().toString().padStart(2, '0');
    const minutes = tomorrow.getMinutes().toString().padStart(2, '0');
    const seconds = tomorrow.getSeconds().toString().padStart(2, '0');

    result.textContent = `Tomorrow will be ${tomorrowDay} at ${hours}:${minutes}:${seconds}.`;
});

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById("time").textContent = `${hours}:${minutes}`;
    
    //Update month
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 
                    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const month = months[now.getMonth()];
    const day = String(now.getDate()).padStart(2, '0');
    document.getElementById("month").textContent = `${month} ${day}`;
}

updateTime();
setInterval(updateTime, 1000); //Updates every minute
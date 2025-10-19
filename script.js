
// Update time every second
function updateTime() {
    document.getElementById('live-time').textContent = Date.now();
}
setInterval(updateTime, 1000);
updateTime(); // Initial call

// Initialize feather icons
feather.replace();
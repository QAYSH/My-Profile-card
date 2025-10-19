 // Update time every second
    function updateTime() {
      document.getElementById('live-time').textContent = Date.now();
    }
    setInterval(updateTime, 1000);
    updateTime();

    // Initialize feather icons after DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
      feather.replace();
    });
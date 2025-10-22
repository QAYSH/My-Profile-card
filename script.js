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


    const form = document.getElementById('contactForm');
    const modal = document.getElementById('successModal');
    const closeModal = document.getElementById('closeModal');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      // Clear all errors first
      document.querySelectorAll('[id^="error-"]').forEach(el => {
        el.classList.add('hidden');
        el.textContent = '';
      });

      // Get values
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const subject = form.subject.value.trim();
      const message = form.message.value.trim();

      // Validation
      if (!name) {
        valid = false;
        showError('name', 'Full name is required.');
      }

      if (!email) {
        valid = false;
        showError('email', 'Email is required.');
      } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        valid = false;
        showError('email', 'Please enter a valid email address.');
      }

      if (!subject) {
        valid = false;
        showError('subject', 'Subject is required.');
      }

      if (!message) {
        valid = false;
        showError('message', 'Message is required.');
      } else if (message.length < 10) {
        valid = false;
        showError('message', 'Message must be at least 10 characters.');
      }

      if (valid) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        form.reset();
      }
    });

    function showError(field, message) {
      const errorEl = document.getElementById(`error-${field}`);
      errorEl.textContent = message;
      errorEl.classList.remove('hidden');
    }

    // Close Modal
    closeModal.addEventListener('click', () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    });

    // Allow Esc key to close modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    });
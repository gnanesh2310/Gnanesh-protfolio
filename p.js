document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const captionText = document.getElementById('caption');
  const closeBtn = document.querySelector('.close');

  function openModal(img) {
      modal.style.display = 'block';
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;
  }

  function closeModal() {
      modal.style.display = 'none';
  }

  document.querySelectorAll('.event-photo').forEach(img => {
      img.addEventListener('click', () => openModal(img));
  });

  closeBtn.addEventListener('click', closeModal);

  window.addEventListener('click', (event) => {
      if (event.target === modal) {
          closeModal();
      }
  });
});

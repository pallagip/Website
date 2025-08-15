document.addEventListener('DOMContentLoaded', () => {
  // Load description from text.txt
  const target = document.getElementById('description-content');
  if (target) {
    fetch('text.txt', { cache: 'no-store' })
      .then((resp) => {
        if (!resp.ok) throw new Error(`Failed to load text.txt: ${resp.status}`);
        return resp.text();
      })
      .then((text) => {
        target.textContent = text.trim();
      })
      .catch((err) => {
        console.error(err);
        target.textContent = 'Content is temporarily unavailable. Please try again later.';
      });
  }
});

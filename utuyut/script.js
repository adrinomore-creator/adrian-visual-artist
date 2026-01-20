// Load portfolio images from CMS
fetch('/data/portfolio.json')
  .then(res => res.json())
  .then(data => {
    const grid = document.querySelector('.image-grid');

    data.works.slice(0, 16).forEach(work => {
      const img = document.createElement('img');
      img.src = work.image;
      img.alt = work.title;
      grid.appendChild(img);
    });
  });

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', function () {

 new Splide('#reelsSplide', {
  perPage: 6,
  perMove: 1,
    type: 'loop',
drag: 'free',
snap: true,
type: 'loop',    
  gap: '20px',
  arrows: true,
  pagination: true,
  drag: 'free', // 🔥 smooth scrolling feel
  snap: true,
  breakpoints: {
    1200: { perPage: 5 },
    1024: { perPage: 4 },
    768: { perPage: 2 },
    480: { perPage: 1.5 }
  }
}).mount();


  const modal = document.getElementById('reelModal');
  const modalVideo = document.getElementById('modalVideo');

  document.querySelectorAll('.reel-card').forEach(card => {
    card.addEventListener('click', () => {
      modal.classList.add('active');
      modalVideo.src = card.dataset.video;
      modalVideo.play();
    });
  });

  document.querySelector('.close').onclick = () => {
    modal.classList.remove('active');
    modalVideo.pause();
    modalVideo.src = '';
  };

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      modalVideo.pause();
      modalVideo.src = '';
    }
  });

});
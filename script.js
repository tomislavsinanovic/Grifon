function sidebar() {
    document.querySelector('.sidebar').classList.add('otvoren');
}

function sakrij() {
    document.querySelector('.sidebar').classList.remove('otvoren');
}

document.addEventListener('DOMContentLoaded', () => {

  const observerHome = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animirano');
        observerHome.unobserve(entry.target);
      }
    });
  }, { threshold: 0 });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animirano');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  const observerZoom = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animirano');
        observerZoom.unobserve(entry.target);
      }
    });
  }, { threshold: 1 });

  const observerBlokFade = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animirano');
        observerBlokFade.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  const observerOnama = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aktivan');
      } else {
        entry.target.classList.remove('aktivan');
      }
    });
  }, { threshold: 0.1 });

  const observerBlok = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const slika = entry.target.querySelector('.onama-slike img');
        if (slika) {
          document.querySelector('.onama').style.setProperty('--bg-slika', `url(${slika.src})`);
        }
      }
    });
  }, { threshold: 1 });

  document.querySelectorAll('.fade-up-home').forEach(el => {
    observerHome.observe(el);
  });

  document.querySelectorAll('.fade-up, .fade-left, .fade-right, .fade-down').forEach(el => {
    observer.observe(el);
  });

  document.querySelectorAll('.zoom-in').forEach(el => {
    observerZoom.observe(el);
  });

    document.querySelectorAll('.fade-blok').forEach(el => {
    observerBlokFade.observe(el);
  });

  const onama = document.querySelector('.onama');
  if (onama) observerOnama.observe(onama);

  document.querySelectorAll('.onama-blok').forEach(el => {
    observerBlok.observe(el);
  });

});


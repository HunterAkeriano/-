function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }else{
        change.target.classList.remove('element-show');
      }
    });
  }
let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  for (let elm of elements) {
    observer.observe(elm);
  }

  let swiper = new Swiper(".swiper2",{
    spaceBetween: 30,
  
    centerSlides: 'true',
    fade: 'true',
    breakpoints: {
        320: {
            slidesPerView: 1.3,
            centerSlides: 'true',
          
        },
        950: {
            slidesPerView: 1.5,
            spaceBetween: 30,
          
        },
        1095: {
            slidesPerView: 2.5,
            
        },
        1290:{
          slidesPerView: 3,
        }
    }
  });

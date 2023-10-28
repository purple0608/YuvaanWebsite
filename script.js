
// import gsap from 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
// import ScrollTrigger from 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
// import ScrollToPlugin from 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js';

// gsap.registerPlugin(ScrollTrigger);
// const wrapper = document.querySelector('.wrapper');
// const content = document.querySelector('.content');

// ScrollTrigger.create({
//   trigger: wrapper,
//   start: 'bottom bottom',
//   end: 'top top',
//   pin: true,
// });



// const handleScroll = () => {
//   const scrollTop = document.documentElement.scrollTop;
//   document.documentElement.style.setProperty('--scrollTop', `${scrollTop}px`);
// }

// document.addEventListener('scroll', () => {
//   requestAnimationFrame(handleScroll);
// });

// const list = document.querySelectorAll(".list");
// function activeLink() {
//   list.forEach((item) => item.classList.remove("active"));
//   this.classList.add("active");
// }
list.forEach((item) => item.addEventListener("click", activeLink));
document.querySelectorAll('.navigation li').forEach(function(item) {
  item.addEventListener('mouseover', function() {
      var circle = this.querySelector('.circle');
      var text = this.querySelector('.text');

      // Calculate the size of the circle
      var diameter = Math.max(text.offsetWidth, text.offsetHeight);

      // Set circle size and initial position
      circle.style.width = diameter + 'px';
      circle.style.height = diameter + 'px';
      circle.style.transform = 'translate(-50%, -50%) scale(1)';

      // Move the indicator
      var indicator = document.querySelector('.indicator');
      var rect = this.getBoundingClientRect();
      var centerX = rect.left + rect.width / 2;
      var centerY = rect.top + rect.height / 2;

      indicator.style.transform = `translate(${centerX}px, ${centerY}px)`;
  });

  item.addEventListener('mouseout', function() {
      var circle = this.querySelector('.circle');

      // Reset circle size and position
      circle.style.width = '10px';
      circle.style.height = '10px';
      circle.style.transform = 'translate(-50%, -50%) scale(0)';

      // Reset indicator position
      var indicator = document.querySelector('.indicator');
      indicator.style.transform = 'translate(50%, -50%)';
  });
});

function scrollToOrder() {
  document.querySelector('.order__form').scrollIntoView({ behavior: 'smooth' });
}

const buttonsScroll = document.querySelectorAll('.order__btn');
buttonsScroll.forEach(button =>{
  button.addEventListener('click',scrollToOrder);
})

const swiper = new Swiper('.review__slider', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

const telInput = document.getElementById('tel');
telInput.addEventListener('input', function(e){
  this.value = this.value.replace(/\D/g, '');
})


const formLabels = document.querySelectorAll('.order__label');

formLabels.forEach(group => {
    const input = group.querySelector('input');
    const tooltip = group.querySelector('.form-tooltip');
    input.addEventListener('focus', () => {
        tooltip.classList.add('tooltip-active')
    });
    input.addEventListener('blur', () => {
        tooltip.classList.remove('tooltip-active')
    });
});

let time = 30 * 60;
const timer = document.querySelector('.order__timer')

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timer.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    time--;
    if (time >= 0) {
        setTimeout(updateCountdown, 1000);
    }
}

updateCountdown();


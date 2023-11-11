import Slider from './slider';

export default class MainSlider extends Slider {
  constructor(btns) {
    super(btns);
  }
  showSlides(n) {
    const slidesArray = Array.from(this.slides);

    if (n > slidesArray.length) {
      this.slideIndex = 1;
    }

    if (n < 1) {
      this.slideIndex = slidesArray.length;
    }
    try {
      this.hanson.style.opacity = '0';
      if (n === 3) {
        this.hanson.classList.add('animated');
        setTimeout(() => {
          this.hanson.style.opacity = '1';
          this.hanson.classList.add('animated', 'slideInUp');
        }, 3000);
      } else {
        this.hanson.classList.remove('slideInUp');
      }
    } catch (error) {}

    slidesArray.forEach((slide) => {
      slide.style.display = 'none';
      slide.classList.remove('animated', 'fadeIn');
    });

    slidesArray[this.slideIndex - 1].style.display = 'block';
    slidesArray[this.slideIndex - 1].classList.add('animated', 'fadeIn');
  }

  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }

  render() {
    try {
      this.hanson = document.querySelector('.hanson');
    } catch (error) {}

    this.btns.forEach((item) => {
      item.addEventListener('click', () => {
        this.plusSlides(1);
      });

      item.parentNode.previousElementSibling.addEventListener('click', (e) => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });

    this.showSlides(this.slideIndex);
  }
}

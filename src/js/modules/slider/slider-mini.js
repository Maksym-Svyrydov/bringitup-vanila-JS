import Slider from './slider';

export default class MiniSlider extends Slider {
  constructor(container, next, prev, activeClass, animate, autoplay) {
    super(container, next, prev, activeClass, animate, autoplay);
    this.paused = false;
  }
  decoratingSlides() {
    const { activeClass, animate } = this;
    const slidesArr = Array.from(this.slides);
    slidesArr.forEach((slide) => {
      slide.classList.remove(activeClass);
      if (animate) {
        slide.querySelector('.card__title').style.opacity = '0.4';
        slide.querySelector('.card__controls-arrow').style.opacity = '0';
      }
    });

    slidesArr[0].classList.add(activeClass);
    if (animate) {
      slidesArr[0].querySelector('.card__title').style.opacity = '1';
      slidesArr[0].querySelector('.card__controls-arrow').style.opacity = '1';
    }
  }
  nextSlide() {
    const { container, slides, prev } = this;
    const slidesArr = Array.from(slides);
    if (prev.parentNode === container) {
      container.insertBefore(slidesArr[0], prev);
    } else {
      container.appendChild(slidesArr[0]);
    }
    this.decoratingSlides();
  }
  prevSlide() {
    const { container, slides } = this;
    for (let i = slides.length - 1; i > 0; i--) {
      if (slides[i].tagName !== 'BUTTON') {
        let active = slides[i];
        container.insertBefore(active, slides[0]);
        this.decoratingSlides();
        break;
      }
    }
  }
  bindTriggers() {
    const { next, prev } = this;
    next.addEventListener('click', () => {
      this.nextSlide();
    });

    prev.addEventListener('click', () => {
      this.prevSlide();
    });
  }
  activateAnimation() {
    this.paused = setInterval(() => this.nextSlide(), 3000);
  }
  init() {
    this.container.style.cssText = `
     display:flex;
     flex-wrap:wrap;
     overflow:hidden;
     align-items:flex-start;
     `;
    this.bindTriggers();
    this.decoratingSlides();

    if (this.autoplay) {
      this.container.addEventListener('mouseenter', () =>
        clearInterval(this.paused)
      );
      this.next.addEventListener('mouseenter', () =>
        clearInterval(this.paused)
      );
      this.prev.addEventListener('mouseenter', () =>
        clearInterval(this.paused)
      );
      this.container.addEventListener('mouseleave', () =>
        this.activateAnimation()
      );
      this.next.addEventListener('mouseleave', () => this.activateAnimation());
      this.prev.addEventListener('mouseleave', () => this.activateAnimation());
      this.activateAnimation();
    }
  }
}

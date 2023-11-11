import VideoPlayer from './modules/playVideo';
import MainSlider from './modules/slider/slider-main';
import MiniSlider from './modules/slider/slider-mini';

window.addEventListener('DOMContentLoaded', () => {
  const slider = new MainSlider({ btns: '.next', container: '.page' });
  slider.render();

  const player = new VideoPlayer('.showup .play', '.overlay');
  player.init();

  const showUpSlider = new MiniSlider({
    container: '.showup__content-slider',
    prev: '.showup__prev',
    next: '.showup__next',
    activeClass: 'card-active',
    animate: true,
    autoplay: true,
  });
  showUpSlider.init();

  const modulesSlider = new MiniSlider({
    container: '.modules__content-slider',
    prev: '.modules__info-btns .slick-prev',
    next: '.modules__info-btns .slick-next',
    activeClass: 'card-active',
    animate: true,
    autoplay: true,
  });
  modulesSlider.init();

  const feedSlider = new MiniSlider({
    container: '.feed__slider',
    prev: '.feed__slider .slick-prev',
    next: '.feed__slider .slick-next',
    activeClass: 'feed__item-active',
    autoplay: true,
    animate: false,
  });
  feedSlider.init();
});
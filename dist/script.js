/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../Project\u0000#3/bringitup-vanila-JS/src/js/modules/difference.js":
/*!*************************************************************************!*\
  !*** ../../Project #3/bringitup-vanila-JS/src/js/modules/difference.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Difference)
/* harmony export */ });
class Difference {
  constructor(oldOfficer, newOfficer, items) {
    this.oldOfficer = document.querySelector(oldOfficer);
    this.newOfficer = document.querySelector(newOfficer);
    this.newItems = this.newOfficer.querySelectorAll(items);
    this.oldItems = this.oldOfficer.querySelectorAll(items);
    this.items = items;
    this.oldCounter = 0;
    this.newCounter = 0;
  }
  bindTriggers(container, items, counter) {
    container.querySelector('.plus').addEventListener('click', () => {
      if (counter !== items.length - 2) {
        items[counter].style.display = 'flex';
        counter++;
      } else {
        items[counter].style.display = 'flex';
        items[items.length - 1].remove();
      }
    });
  }
  hideItems(items) {
    items.forEach((item, i, arr) => {
      if (i !== arr.length - 1) {
        item.style.display = 'none';
      }
    });
  }
  init() {
    this.hideItems(this.oldItems);
    this.hideItems(this.newItems);
    this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
    this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
  }
}

/***/ }),

/***/ "../../Project\u0000#3/bringitup-vanila-JS/src/js/modules/playVideo.js":
/*!************************************************************************!*\
  !*** ../../Project #3/bringitup-vanila-JS/src/js/modules/playVideo.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VideoPlayer)
/* harmony export */ });
class VideoPlayer {
  constructor(triggers, overlay) {
    this.btn = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.close = this.overlay.querySelector('.close');
  }
  bindTriggers() {
    this.btn.forEach(btn => {
      btn.addEventListener('click', () => {
        if (document.querySelector('iframe#frame')) {
          this.overlay.style.display = 'flex';
        } else {
          const path = btn.getAttribute('data-url');
          this.createPlayer(path);
        }
      });
    });
  }
  bindCloseBtn() {
    this.close.addEventListener('click', () => {
      this.overlay.style.display = 'none';
      this.player.stopVideo();
    });
  }
  createPlayer(url) {
    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: `${url}`
      // events: {
      //   onReady: onPlayerReady,
      //   onStateChange: onPlayerStateChange,
      // },
    });

    console.log(this.player);
    this.overlay.style.display = 'flex';
  }
  init() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    this.bindTriggers();
    this.bindCloseBtn();
  }
}

/***/ }),

/***/ "../../Project\u0000#3/bringitup-vanila-JS/src/js/modules/slider/slider-main.js":
/*!*********************************************************************************!*\
  !*** ../../Project #3/bringitup-vanila-JS/src/js/modules/slider/slider-main.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainSlider)
/* harmony export */ });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "../../Project\u0000#3/bringitup-vanila-JS/src/js/modules/slider/slider.js");

class MainSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
    slidesArray.forEach(slide => {
      slide.style.display = 'none';
      slide.classList.remove('animated', 'fadeIn');
    });
    slidesArray[this.slideIndex - 1].style.display = 'block';
    slidesArray[this.slideIndex - 1].classList.add('animated', 'fadeIn');
  }
  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }
  render() {
    try {
      this.hanson = document.querySelector('.hanson');
    } catch (error) {}
    this.btns.forEach(item => {
      item.addEventListener('click', () => {
        this.plusSlides(1);
      });
      item.parentNode.previousElementSibling.addEventListener('click', e => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });
    this.showSlides(this.slideIndex);
  }
}

/***/ }),

/***/ "../../Project\u0000#3/bringitup-vanila-JS/src/js/modules/slider/slider-mini.js":
/*!*********************************************************************************!*\
  !*** ../../Project #3/bringitup-vanila-JS/src/js/modules/slider/slider-mini.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MiniSlider)
/* harmony export */ });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "../../Project\u0000#3/bringitup-vanila-JS/src/js/modules/slider/slider.js");

class MiniSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(container, next, prev, activeClass, animate, autoplay) {
    super(container, next, prev, activeClass, animate, autoplay);
    this.paused = false;
  }
  decoratingSlides() {
    const {
      activeClass,
      animate
    } = this;
    const slidesArr = Array.from(this.slides);
    slidesArr.forEach(slide => {
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
    const {
      container,
      slides,
      prev
    } = this;
    const slidesArr = Array.from(slides);
    if (prev.parentNode === container) {
      container.insertBefore(slidesArr[0], prev);
    } else {
      container.appendChild(slidesArr[0]);
    }
    this.decoratingSlides();
  }
  prevSlide() {
    const {
      container,
      slides
    } = this;
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
    const {
      next,
      prev
    } = this;
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
      this.container.addEventListener('mouseenter', () => clearInterval(this.paused));
      this.next.addEventListener('mouseenter', () => clearInterval(this.paused));
      this.prev.addEventListener('mouseenter', () => clearInterval(this.paused));
      this.container.addEventListener('mouseleave', () => this.activateAnimation());
      this.next.addEventListener('mouseleave', () => this.activateAnimation());
      this.prev.addEventListener('mouseleave', () => this.activateAnimation());
      this.activateAnimation();
    }
  }
}

/***/ }),

/***/ "../../Project\u0000#3/bringitup-vanila-JS/src/js/modules/slider/slider.js":
/*!****************************************************************************!*\
  !*** ../../Project #3/bringitup-vanila-JS/src/js/modules/slider/slider.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Slider)
/* harmony export */ });
class Slider {
  constructor({
    container = null,
    btns = null,
    next = null,
    prev = null,
    activeClass = '',
    animate,
    autoplay
  } = {}) {
    this.container = document.querySelector(container);
    this.slides = this.container.children;
    this.btns = document.querySelectorAll(btns);
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoplay = autoplay;
    this.slideIndex = 1;
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************************************************!*\
  !*** ../../Project #3/bringitup-vanila-JS/src/js/main.js ***!
  \***********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_difference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/difference */ "../../Project\u0000#3/bringitup-vanila-JS/src/js/modules/difference.js");
/* harmony import */ var _modules_playVideo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/playVideo */ "../../Project\u0000#3/bringitup-vanila-JS/src/js/modules/playVideo.js");
/* harmony import */ var _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider/slider-main */ "../../Project\u0000#3/bringitup-vanila-JS/src/js/modules/slider/slider-main.js");
/* harmony import */ var _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider/slider-mini */ "../../Project\u0000#3/bringitup-vanila-JS/src/js/modules/slider/slider-mini.js");




window.addEventListener('DOMContentLoaded', () => {
  const slider = new _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_2__["default"]({
    btns: '.next',
    container: '.page'
  });
  slider.render();
  const player = new _modules_playVideo__WEBPACK_IMPORTED_MODULE_1__["default"]('.showup .play', '.overlay');
  player.init();
  const showUpSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_3__["default"]({
    container: '.showup__content-slider',
    prev: '.showup__prev',
    next: '.showup__next',
    activeClass: 'card-active',
    animate: true,
    autoplay: true
  });
  showUpSlider.init();
  const modulesSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_3__["default"]({
    container: '.modules__content-slider',
    prev: '.modules__info-btns .slick-prev',
    next: '.modules__info-btns .slick-next',
    activeClass: 'card-active',
    animate: true,
    autoplay: true
  });
  modulesSlider.init();
  const feedSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_3__["default"]({
    container: '.feed__slider',
    prev: '.feed__slider .slick-prev',
    next: '.feed__slider .slick-next',
    activeClass: 'feed__item-active',
    autoplay: true,
    animate: false
  });
  feedSlider.init();
  new _modules_difference__WEBPACK_IMPORTED_MODULE_0__["default"]('.officerold', '.officernew', '.officer__card-item').init();
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map
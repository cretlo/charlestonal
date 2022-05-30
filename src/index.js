import './main.css';
import * as M from '../node_modules/materialize-css/dist/js/materialize.min.js';

var sliderInstance;

M.AutoInit();

initSlider();

function initSlider() {
  var sliderOptions = {
    indicators: false,
    height: 900,
    duration: 500,
    interval: 3000,
  };

  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.slider');

    if (window.innerHeight < 915) {
      sliderOptions.height = window.innerHeight - 56;
    }

    sliderInstance = M.Slider.init(elems, sliderOptions);
  });

  window.addEventListener('resize', function () {
    if (sliderInstance !== null) {
      var elems = document.querySelectorAll('.slider');
      sliderInstance[0].destroy();
      sliderOptions.height = 900;
      if (window.innerHeight < 915) {
        sliderOptions.height = window.innerHeight - 56;
      }
      sliderInstance = M.Slider.init(elems, sliderOptions);
    }
  });
}

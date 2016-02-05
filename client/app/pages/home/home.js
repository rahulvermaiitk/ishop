/**
 * Created by rahulverma on 2/2/16.
 */

'use strict'

function homeCtrl($scope) {
  $(document).ready(function () {
    $('.image-carousel').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]});
  })};




app.controller('homeCtrl', ['$scope', homeCtrl]);




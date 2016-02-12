/**
 * Created by rahulverma on 2/2/16.
 */

'use strict'

function homeCtrl($scope, $uibModal, $timeout) {
  /*TOP CAROUSEL SETTINGS AND PROPERTIES*/
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
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    /*setTimeout(function(){*/
    /*alert("Boom!");*/
    /*    $('.offer-carousel').slick({
     dots: false,
     infinite: false,
     speed: 300,
     slidesToShow: 3,
     slidesToScroll: 1,
     responsive: [
     {
     breakpoint: 1024,
     settings: {
     slidesToShow: 3,
     slidesToScroll: 3,
     infinite: true,
     dots: false
     }
     },
     {
     breakpoint: 600,
     settings: {
     slidesToShow: 2,
     slidesToScroll: 2
     }
     },
     {
     breakpoint: 480,
     settings: {
     slidesToShow: 1,
     slidesToScroll: 1
     }
     }
     // You can unslick at a given breakpoint now by adding:
     // settings: "unslick"
     // instead of a settings object
     ]
     });*/
    /*}, 20000000);*/

    /*ADDING PRODUCTS TO CART AND STORING FOR CART VARIABLE*/

    $scope.cart = [];
    $scope.addToCart = function (product) {
      console.log(product);
      $scope.cart.push({name: product.prodname, price: product.cost, image: product.img});
      /*$scope.prodname = "";
       $scope.cost = "";

       */
      console.log($scope.cart);
    }
    /*ADDING TO THE WISHLIST AND STORING IN WISH VARIABLE*/
    $scope.wish = [];
    $scope.addToWish = function (product) {
      console.log(product);
      $scope.wish.push({name: product.prodname, price: product.cost, image: product.img});
      /*$scope.prodname = "";
       $scope.cost = "";

       */
      console.log($scope.wish);
      /*STORING WISHLIST DATA INTO THE CLIENTS STORAGE*/
      var dataToStore = JSON.stringify($scope.wish);
      localStorage.setItem('wishData', dataToStore);
      console.log("Written to Storage");
    }
    $timeout(function () {
      $scope.newProduct = [
        {
          "prodname": "WD Black Peformance Desktop Hard Drive",
          "cost": "151$",
          "img": "/app/images/image1.png"
        },
        {
          "prodname": "EVGA 500W Power Supply",
          "cost": "152$",
          "img": "/app/images/image2.png"
        }, {
          "prodname": "EVGA GeForce GTX 4GB",
          "cost": "153$",
          "img": "/app/images/image3.png"
        }, {
          "prodname": "MSI ATX DDR3 Motherboards",
          "cost": "154$",
          "img": "/app/images/image4.png"
        }, {
          "prodname": "Kingston Digital120GB SATA",
          "cost": "155$",
          "img": "/app/images/image5.png"
        }, {
          "prodname": "WD Black Peformance Desktop Hard Drive",
          "cost": "156$",
          "img": "/app/images/image1.png"
        }
      ];
    }, 1000);
    /*POPUPS FOR WISHLIST AND CART*/
    $scope.openPopup = function (cart) {
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: '/app/pages/cart/cart.html',
        controller: 'cartCtrl',
        /* size: size,*/
        resolve: {
          cart: function () {
            return $scope.cart;
          }
        }
      });
      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
    $scope.openWish = function () {
      $scope.wish = JSON.parse(localStorage.getItem('wishData'));
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: '/app/pages/wish/wish.html',
        controller: 'wishCtrl',
        /* size: size,*/
        resolve: {
          wish: function () {
            return $scope.wish;
          }
        }
      });
      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
    /*$scope.dynamicPopover ={
     content:'Hello, World!',
     templateUrl:'/app/pages/cart/cart.html',
     title:'Title'
     };*/
    $scope.breakpoints = [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ];
  })
};


app.controller('homeCtrl', ['$scope', '$uibModal', '$timeout', homeCtrl]);




//   // script for display
//   var slideIndex = 1;
//   showDivs(slideIndex);

//   function plusDivs(n) {
//       showDivs(slideIndex += n);
//   }

//   function showDivs(n) {
//       var i;
//       var x = document.getElementsByClassName("mySlides");
//       if (n > x.length) { slideIndex = 1 }
//       if (n < 1) { slideIndex = x.length }
//       for (i = 0; i < x.length; i++) {
//           x[i].style.display = "none";
//       }
//       x[slideIndex - 1].style.display = "block";
//   }
//   // section for modal on clicks
//   // var trivia = document.getElementById("trivia");
//   var triviaclose = document.getElementsByClassName("close")[0];
 
//   var starWars = document.getElementById("starWars");
//   var starWarsclose = document.getElementsByClassName("close")[1];
  
//   var starcraft = document.getElementById("starcraft");
//   var starcraftclose = document.getElementsByClassName("close")[2];
  
//   var giphy = document.getElementById("giphy");
//   var giphyclose = document.getElementsByClassName("close")[3];

//   var warhammer = document.getElementById("warhammer");
//   var warhammerclose = document.getElementsByClassName("close")[4];
  
//   var overlay = document.getElementById("overlay");
  
  

 
//   var triviamodal = document.getElementsByClassName("modalMain")[0];
 
 
  

// // modal image clicks
//   trivia.onclick = function () {
//       triviaModal.style.display = "block";
//       overlay.style.display = "block";
//   }

//   starWars.onclick = function () {
//       starWarsModal.style.display = "block";
//       overlay.style.display = "block";
//   }
//   starcraft.onclick = function () {
//       starcraftModal.style.display = "block";
//       overlay.style.display = "block";
//   }
//   giphy.onclick = function () {
//       giphyModal.style.display = "block";
//       overlay.style.display = "block";
//   }
//   warhammer.onclick = function () {
//       warhammerModal.style.display = "block";
//       overlay.style.display = "block";
//   }

//   // close button function clicks
//   triviaclose.onclick = function () {
//       triviaModal.style.display = "none";
//       overlay.style.display = "none";
//       console.log(this);
//   }
//   starWarsclose.onclick = function () {
//       starWarsModal.style.display = "none";
//       overlay.style.display = "none";
//       console.log(this);
//   }

//   starcraftclose.onclick = function () {
//       starcraftModal.style.display = "none";
//       overlay.style.display = "none";
//       console.log(this);
//   }

//   giphyclose.onclick = function () {
//       giphyModal.style.display = "none";
//       overlay.style.display = "none";
//       console.log(this);
//   }
//   warhammerclose.onclick = function () {
//       warhammerModal.style.display = "none";
//       overlay.style.display = "none";
//       console.log(this);
//   }

  //end of on click functions
  // scroll function
  var $animation_elements = $('.animate-box');
  var $window = $(window);

  function check_if_in_view() {
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);

      $.each($animation_elements, function () {
          var $element = $(this);
          var element_height = $element.outerHeight();
          var element_top_position = $element.offset().top;
          var element_bottom_position = (element_top_position + element_height);

          //check to see if this current container is within viewport
          if ((element_bottom_position >= window_top_position) &&
              (element_top_position <= window_bottom_position)) {
              $element.addClass('in-view');
          } else {
              $element.removeClass('in-view');
          }
      });
  }

  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');
  //end of scroll functions



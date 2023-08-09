

$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
  });

  $(document).ready(function(){
    $(".hamburger").click(function(){
        $(".menu").slideToggle("slow");
    });
});

$(document).ready(function() {
  $(window).scroll(function() {
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var images = $('.homeStripImg');
    var overlappingImageIDs = ['image1', 'image2', 'image5', 'image6', 'image7', 'image8', 'image9'];

    var overlappingImageID = null; // Track the ID of the image being overlapped

    // Check if the companyTitle is overlapping with any image
    $('.companyTitle').each(function() {
      var titleTop = $(this).offset().top;
      var titleHeight = $(this).outerHeight();
      var titleBottom = titleTop + titleHeight;

      images.each(function() {
        var imageTop = $(this).offset().top;
        var imageBottom = imageTop + $(this).outerHeight();
        var imageID = $(this).attr('id');

        if (titleBottom >= imageTop && titleTop <= imageBottom) {
          overlappingImageID = imageID;
          return false; // Exit the loop if an overlap is found
        }
      });

      // Exit the loop if an overlap is found
      if (overlappingImageID) {
        return false;
      }
    });

    // Set the color based on the overlapping image ID for companyTitle
    if (overlappingImageID) {
      $('.companyTitle').removeClass('dark light'); // Remove existing classes
      if (overlappingImageIDs.includes(overlappingImageID)) {
        $('.companyTitle').addClass('dark');
        $('.hamburger .line').css('background-color', 'white');
      } else {
        $('.companyTitle').addClass('light');
        $('.hamburger .line').css('background-color', 'black');
      }
    } else {
      $('.companyTitle').removeClass('dark light').addClass('light'); // Reset to default color
      $('.hamburger .line').css('background-color', 'black'); // Reset hamburger menu lines color
    }
  });
});


var prevScrollPos = window.pageYOffset;
var header = document.querySelector('.subHeader');

window.addEventListener('scroll', function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    header.classList.remove('hidden');
  } else {
    // Scrolling down
    header.classList.add('hidden');
  }
  prevScrollPos = currentScrollPos;
});

window.addEventListener('resize', function() {
  // Recalculate scroll position on window resize
  prevScrollPos = window.pageYOffset;
});


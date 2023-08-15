

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
    var overlappingImageIDs = ['image1', 'image2', 'image5', 'image6', 'image8', 'image9', 'image11', 'image12', 'image13', 'image14'];

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


$(document).ready(function() {
  $(window).scroll(function() {
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var images = $('.homeStripImg');
    var overlappingImageIDs = ['image1', 'image2', 'image5', 'image6', 'image8', 'image9', 'image11', 'image12', 'image13', 'image14'];

    var overlappingImageID = null; // Track the ID of the image being overlapped

    // Check if the menuBig is overlapping with any image
    $('.menuBigindex a').each(function() {
      var linkTop = $(this).offset().top;
      var linkHeight = $(this).outerHeight();
      var linkBottom = linkTop + linkHeight;

      images.each(function() {
        var imageTop = $(this).offset().top;
        var imageBottom = imageTop + $(this).outerHeight();
        var imageID = $(this).attr('id');

        if (linkBottom >= imageTop && linkTop <= imageBottom) {
          overlappingImageID = imageID;
          return false; // Exit the loop if an overlap is found
        }
      });

      // Exit the loop if an overlap is found
      if (overlappingImageID) {
        return false;
      }
    });

    // Remove both .light and .dark classes from the menuBig links
    $('.menuBigindex a').removeClass('light dark');

    // Apply the appropriate class if there's an overlap
    if (overlappingImageIDs.includes(overlappingImageID)) {
      $('.menuBigindex a').addClass('dark');
    } else {
      $('.menuBigindex a').addClass('light');
    }

    // If no overlap and at the top, remove both classes
    if (scrollTop === 0) {
      $('.menuBigindex a').removeClass('light dark');
    }
  });
});





var prevScrollPos = window.pageYOffset;
var header = document.querySelector('.subHeader');
var scrollThreshold = 50;

window.addEventListener('scroll', function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    header.classList.remove('hidden');
  } else if (currentScrollPos > scrollThreshold) {
    // Scrolling down and passed the scrollThreshold
    header.classList.add('hidden');
  }

  prevScrollPos = currentScrollPos;
});

window.addEventListener('resize', function() {
  // Recalculate scroll position on window resize
  prevScrollPos = window.pageYOffset;
});


document.addEventListener('DOMContentLoaded', function() {
  var image = document.querySelector('.gridImg');

  image.addEventListener('touchstart', function() {
    image.classList.add('active');
  });

  image.addEventListener('touchmove', function() {
    image.classList.remove('active');
  });

  image.addEventListener('touchend', function() {
    image.classList.remove('active');
  });
});

function handleScroll() {
  const content = document.querySelectorAll('.slide-up');
  const windowHeight = window.innerHeight;
  content.forEach(item => {
  const itemTop = item.getBoundingClientRect().top;
  if (itemTop < windowHeight) {
  item.classList.add('active');
  console.log('This works!');
  }
  });
  }
  window.addEventListener('load', handleScroll);
  window.addEventListener('scroll', handleScroll);
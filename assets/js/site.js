$( document ).ready(function() {
  smoothlyScroll(800);

});


// Smooth scroll for the fun people

function smoothlyScroll (duration) {
  $('a[href^="#"]').on('click', function(event) {

      var target = $( $(this).attr('href') );

      if( target.length ) {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: target.offset().top
          }, duration);
      }
  });
}

// Temporary redirect for page - Remove JS/CSS for production
$('.dashboard-redirect').on('click', function(event) {
    event.preventDefault(); 
    var url = $(this).data('target');
    location.replace(url);
});
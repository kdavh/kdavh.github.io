
$(function() {
  if ( $('#projects').length ) $('#project-tab').addClass('active');
  console.log($('#about').length)
  if ( $('#about').length ) {
    $('#about-tab').addClass('active')
  }
});

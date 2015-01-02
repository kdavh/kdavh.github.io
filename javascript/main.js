
$(function() {
  if ( $('#home').length ) document.location = document.location.origin + "/about/"
  if ( $('#projects').length ) $('#project-tab').addClass('active');
  if ( $('#about').length ) $('#about-tab').addClass('active');
});

var pages = ['#home', '#about-us', '#services', '#photos', '#contact'];

// Navbar bar opacity change on scroll.
$(window).scroll(function() {
  var height = $(window).scrollTop();

  if (height > 0) {
    $('#navigation-bar').addClass('navigation-bar-scrolled')
  } else {
    $('#navigation-bar').removeClass('navigation-bar-scrolled')
  }
});

// Initiate page change
$('.nav-button').click(function () {
  $('.nav-button').removeClass('nav-button-clicked');
  $(this).addClass('nav-button-clicked');
  var previousPage = location.hash;
  location.hash = $(this).attr('id');
  shouldChangePage(previousPage);
});

// Check to see if page has changed or not, avoids unnecessary transition.
var shouldChangePage = function (previousPage) {
  var currentPage = location.hash;
  if (previousPage === currentPage) {
    return;
  }
  if ((previousPage === '' || previousPage === '#' || previousPage === '#home') &&
      (currentPage === '' || currentPage === '#' || currentPage === '#home')) {
    return;
  }
  changePage(currentPage);
}

var changePage = function (currentPage) {
  for (var i = 0; i < pages.length; i++) {
    if (currentPage === pages[i]) {
      pagesToHide = pages.slice(0,i).concat(pages.slice(i+1, pages.length));
      pageTransition(currentPage, pagesToHide);
      return;
    }
  }
  console.log('Page does not exist.');
}

var pageTransition = function (currentPage, pagesToHide) {
  // Transition page content
  for (var i = 0; i < pagesToHide.length; i++) {
    $(pagesToHide[i] + '-page').fadeOut();
  }
  $(currentPage + '-page').fadeIn();
}


// On page load
if (location.hash !== '' && location.hash !== '#') {
  changePage(location.hash);
} else {
  location.hash = '#home';
  changePage(location.hash);
}

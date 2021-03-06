(function () {
  
  var pages = ['#home', '#about-us', '#services', '#photos', '#contact', '#testimonials'];

  // Navbar bar opacity change on scroll.
  $(window).scroll(function() {
    var height = $(window).scrollTop();

    if (height > 0) {
      $('#navigation-bar').addClass('navigation-bar-scrolled')
    } else {
      $('#navigation-bar').removeClass('navigation-bar-scrolled')
    }
  });
  
  
  var moveHeaderText = function () {
    if ($(window).width() > 840) {
      if($('#home-header').is(':visible')) {
        $('#header-text .col-md-12').css('left', '0');
      }
      if($('#about-us-header').is(':visible')) {
        $('#header-text .col-md-12').css('left', '-145px');
      }
      if($('#services-header').is(':visible')) {
        $('#header-text .col-md-12').css('left', '275px');
      }
      if($('#photos-header').is(':visible')) {
        $('#header-text .col-md-12').css('left', '-260px');
      }
      if($('#contact-header').is(':visible')) {
        $('#header-text .col-md-12').css('left', '170px');
      }
      if($('#testimonials-header').is(':visible')) {
        $('#header-text .col-md-12').css('left', '150px');
      }
    } else {
      $('#header-text .col-md-12').css('left', '0');
    }
  };

  $(window).load(moveHeaderText);
  $(document).ready(moveHeaderText);
  $(window).resize(moveHeaderText);

  // Initiate page change for large screens
  $('.nav-button').click(function () {
    $('.nav-button').removeClass('nav-button-clicked');
    $(this).addClass('nav-button-clicked');
    var previousPage = location.hash;
    location.hash = $(this).attr('id');
    shouldChangePage(previousPage);
    moveHeaderText();
  });

  // Initiate page change for small screens
  $('.res-nav-button').click(function () {
    $('.res-nav-button').removeClass('nav-button-clicked');
    $(this).addClass('nav-button-clicked');
    var previousPage = location.hash;
    location.hash = $(this).attr('id').match(/res-(.+)/)[1];
    shouldChangePage(previousPage);
    moveHeaderText();
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
    console.error('Page does not exist.');
  }

  var pageTransition = function (currentPage, pagesToHide) {
    // Transition page content
    for (var i = 0; i < pagesToHide.length; i++) {
      $(pagesToHide[i] + '-page').css('display', 'none');
      $(pagesToHide[i] + '-header').css('display', 'none');
    }
    $(currentPage + '-page').fadeIn();
    $(currentPage + '-header').fadeIn();
  }


  // On page load
  $(window).load(function () {
    if (location.hash !== '' && location.hash !== '#') {
      changePage(location.hash);
    } else {
      location.hash = '#home';
      changePage(location.hash);
    }
  });

  // Specific to responsive design
  var toggleResponsiveMenu = function () {
    if ($('#hamburger-menu').attr('class') == 'res-open') {
      $('#hamburger-menu').removeClass('res-open');
      $('#responsive-menu').fadeOut(150);
    } else {
      $('#hamburger-menu').addClass('res-open');
      $('#responsive-menu').fadeIn(150);
    }
  }
  $('#hamburger-menu').click(toggleResponsiveMenu);

  $('.res-nav-button, .res-nav-button-lang').click(function () {
      $('#hamburger-menu').removeClass('res-open');
      $('#responsive-menu').fadeOut(150);
  });

})();

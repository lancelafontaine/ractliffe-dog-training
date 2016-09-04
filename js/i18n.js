(function () {
  
  var possibleLanguages = ['en', 'fr']
  var defaultLang = navigator.language || navigator.userLanguage;

  var i18n = window.domI18n({
    selector: '[data-translatable]',
    separator: ' // ',
    languages: possibleLanguages,
    defaultLanguage: defaultLang
  });

  if (defaultLang.slice(0,2) === 'fr') {
    $('#lang').html('<a>EN</a>');
    $('#res-lang').html('<a>EN</a>');
  } else {
    $('#lang').html('<a>FR</a>');
    $('#res-lang').html('<a>FR</a>');
  }

  var changeLanguage = function (changeLangTo) {
    if (changeLangTo === 'FR') {
      i18n.changeLanguage('fr');
      $('#lang').html('<a>EN</a>');
      $('#res-lang').html('<a>EN</a>');
    }
    if (changeLangTo === 'EN'){
      i18n.changeLanguage('en');
      $('#lang').html('<a>FR</a>');
      $('#res-lang').html('<a>FR</a>');
    }
  }
  
  $(window).load(function () {
    if (window.location.search.search(/lang=fr/) !== -1) {
      changeLanguage('FR');
    }
  });
  

  $('.res-nav-button-lang').click(function(){
    changeLanguage($(this).text());
  });
  $('.nav-button-lang').click(function(){
    changeLanguage($(this).text());
  });

})();

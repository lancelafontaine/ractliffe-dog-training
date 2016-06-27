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
} else {
  $('#lang').html('<a>FR</a>');
}

$('.nav-button-lang').click(function () {
  var changeLangTo = $(this).text();
  console.log(changeLangTo);
  if (changeLangTo === 'FR') {
    i18n.changeLanguage('fr');
    $('#lang').html('<a>EN</a>');
  }
  if (changeLangTo === 'EN'){
    i18n.changeLanguage('en');
    $('#lang').html('<a>FR</a>');
  }
});


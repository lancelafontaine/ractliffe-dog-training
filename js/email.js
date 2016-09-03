(function () {
  
  $('#social-button-email').click(function () {
    $('#contact').click();
    $('#contact-first-name').focus();
  });

  $("#contact-form").submit(function (e) {
    //Stop form submission
    e.preventDefault();
    
    $('#contact-pending').show();
    
    var firstName = $('#contact-first-name').val();
    var lastName = $('#contact-last-name').val();
    var email = $('#contact-email').val();
    var message = $('#contact-message').val();
    
    $.ajax({
      url: atob("aHR0cDovL21haWx0aGlzLnRvL3N5bXBoeDkyQGdtYWlsLmNvbQ=="),
      method: "POST",
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message
      },
      dataType: "json",
      complete: function (data) {
        if (data.status === 200) {
          console.log('success');
          $('#contact-pending').hide();
          $('#contact-success').fadeIn();
        } else {
          $('#contact-pending').hide();
          $('#contact-submit-button').removeClass('btn-success');
          $('#contact-submit-button').addClass('btn-danger');
          $('#contact-error').fadeIn();
        }
      }
    });
    
  });
  
})();

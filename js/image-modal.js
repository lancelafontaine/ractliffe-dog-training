(function() {
  $(document).on("click", ".open-image-modal", function () {
       var imageSource = $(this).data('img');
       $(".modal-body #modal-image").attr('src', imageSource);
  });
})();

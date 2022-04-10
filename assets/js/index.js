var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});


$('a').click(function(){
    var hash = this.hash;
    $('html, body').animate(
        {
        scrollTop: $(hash).offset().top - 54.41
    },
    800
    );
});
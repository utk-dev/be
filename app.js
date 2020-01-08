$('.hideHover').slideDown();

$('.infoCard').hover(function() {
   $('.hideHover', this).slideDown();
}, function() {
   $('.hideHover', this).slideUp();
});

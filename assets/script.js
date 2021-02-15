// BackToTop button
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          $('.back-to-top').fadeIn('slow');
      } else {
          $('.back-to-top').fadeOut('slow');
      }
  });

  // Animation back to top bug.
  // $('.back-to-top').click(function () {
  //     $('html, body').animate({
  //         scrollTop: 0
  //     }, 1500, 'easeInOutExpo');
  //     return false;
  // });

$(function() {
    $("li").click(function() {
       // remove classes from all
       $("li").removeClass("active");
       // add class to the one we clicked
       $(this).addClass("active");
    });
 });

 
  // Allumage des boutons sur le coté aux scroll dans la catégorie correspondante
  // On enregistre les sections
  var nav_sections = $('section');
  // On choisi la navbar
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 300;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 200) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  });
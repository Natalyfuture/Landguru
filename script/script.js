$('.frequent_item > div').on('click', function(){
    $(this).next('.hidden_text').slideToggle(300);
   $(this).children('.check').children('.vertical').toggleClass('vertical_change');
})


function openDrawer() {
    let checked = document.querySelector('input[type=checkbox]').checked;
    let drawer = document.getElementById('menu-drawer');
    drawer.setAttribute('opened', checked);
  }



  $('#advertising').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#jackpot').offset().top}, 1000);
})

$('#supports').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({scrollTop: $('#carusel').offset().top}, 1000);
})

$('#contact').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({scrollTop: $('#footer').offset().top}, 1000);
})


$(window).on('scroll', function(){
  if($(this).scrollTop() > 50){$('.checkbox:checked ~ .menu-drawer').fadeOut();
  }
  else{
      $('.checkbox:checked ~ .menu-drawer').fadeIn();
  }
})

$('#advertising-burger').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({scrollTop: $('#jackpot').offset().top}, 1000);
})

$('#supports-burger').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({scrollTop: $('#carusel').offset().top}, 1000);
})

$('#contact-burger').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({scrollTop: $('#footer').offset().top}, 1000);
})



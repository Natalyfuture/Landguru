$('.modal').on('click', function(e){
    if($(e.target).closest('.login-box').length == 0){$(this).fadeOut();
    }
})

$('#form_close').on('click', function(){
    $(this).parents('.modal').fadeOut();
})

$('#modal_button').on('click', function(){
    $('.modal').fadeIn();
})
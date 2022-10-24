const portfolio = $(".carusel_list").bxSlider({
    pager: false,
    controls: false,
    infiniteLoop: true,
    touchEnabled: true,
    hideControlOnEnd: false,
    fade: true,
});

$(".arrow_wright").click((e) => {
    e.preventDefault();
    portfolio.goToPrevSlide();
});

$(".arrow_left").click((e) => {
    e.preventDefault();
    portfolio.goToNextSlide();
});
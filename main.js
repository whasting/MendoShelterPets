$(window).scroll(() => {
  let alpha = $(window).scrollTop() / ($('.hero').height() - 200);
  $('nav').css("background-color", `rgba(40, 40, 40, ${alpha})`);
});

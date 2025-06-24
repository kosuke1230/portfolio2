$(function(){
    $('#burger').click(function(){
        $(this).toggleClass('active');
        $('#menu').toggleClass('open');
        $('#mask').toggleClass('open');
    });
    $('#mask').click(function(){
        $(this).toggleClass('open');
        $('#burger').toggleClass('active');
        $('#menu').toggleClass('open');
    });
    $('#menu a').click(function(){
        $('#mask').toggleClass('open');
        $('#burger').toggleClass('active');
        $('#menu').toggleClass('open');
    });
    $(".slide-items").slick({
        autoplay:true,
        slidesToShow:3,
        infinite:true,
        slidesToScroll:1,
        centerMode:true,
        centerPadding:"7px",

        responsive: [{
            breakpoint:600,
             settings:{
                slidesToShow:1,
                centerPadding:"60px",
             },
        }]
      });
      $(".img").on("inview", function () {
        $(this).addClass("fade");
    });
    $('#navi ul li a').click(function(){
        var id = $(this).attr('href');
        var position = $(id).offset().top - 80;
        $('html, body').animate({'scrollTop':position },500);
      });
});

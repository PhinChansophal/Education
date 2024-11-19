$(document).ready(function(){

    //class menu
    $('.menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
    //class click close menu
    $(window).on('scroll load',function(){
        $('.menu').removeClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');

    //reference page
    if($(window).scrollTop()>30){
        $('header').addClass('.header-active');
    }else{
        $('header').removeClass('header-active');
    }

    $('section').each(function(){
        var top = $(window).scrollTop();
        var id = $(this).attr('id');
        var height = $(this).height();
        var top = $(this).offset().top - 200;
        if(top >= offset && top < height + offset){
            $('.navbar ul li a').removeClass('active');
            $('.navbar').find('[href="#' + id + '"]').addClass('active')
        }
    });

    });
});


// $('.hero-products-slider').slick({
//     slidesToShow: 3.75,
//     slidesToScroll: 1,
//     centerMode: true,
//     autoplay: true,
//     autoplaySpeed: 2000
// });

let navbar = $('.navbar');

$(window).scroll(function () {
    let otop = $('.section-2').offset().top - this.window.innerHeight;
    if ($(window).scrollTop() > otop) {
        navbar.addClass('sticky');
    } else {
        navbar.removeClass('sticky');
    }
});

// Counter Animation

let nCount = function (selector) {
    $(selector).each(function () {
        $(this).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (value) {
                $(this).text(Math.ceil(value));
            }
        });
    });
};

let a = 0;
$(window).scroll(function () {
    let otop = $('.numbers').offset().top - this.window.innerHeight;
    if (a == 0 && $(window).scrollTop() >= otop) {
        a++;
        nCount('.rect > h1');
    }
});

const person = {
    name: 'Brad'
};
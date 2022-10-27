$(document).ready(function () {
    if (typeof lightbox !== "undefined") {
        lightbox.option({
            'resizeDuration': 300,
            'fadeDuration': 500
        });
    }

    $('.gdm-slick-carousel').each(function () {
        var j = $(this);

        var prop = j.data("gdm-slick-nav-for");
        if (typeof prop === "undefined") prop = null;
        else prop = "#" + prop;

        var autoplay = j.data("gdm-slick-autoplay");
        if (typeof autoplay === "undefined") autoplay = null;

        j.slick({
            lazyLoad: 'progressive',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            autoplay: autoplay !== null,
            autoplaySpeed: autoplay,
            prevArrow: "<a href=\"#\" class=\"gdm-slick-prev\"><i class=\"fas fa-chevron-left\" title=\"prev\"></i></a>",
            nextArrow: "<a href=\"#\" class=\"gdm-slick-next\"><i class=\"fas fa-chevron-right\" title=\"next\"></i></a>",
            adaptiveHeight: true
        });

        j.on("afterChange", function () {
            var nav = j.closest(".gdm-slick-container").find(".gdm-slick-carousel-nav");
            var currentSlide = j.slick("slickCurrentSlide");
            if (nav.slick("slickCurrentSlide") !== currentSlide) {
                nav.slick("slickGoTo", j.slick("slickCurrentSlide"));
            }
        });


    });


    $('.gdm-slick-carousel-nav').each(function () {
        var j = $(this);

        var prop = j.data("gdm-slick-nav-for");
        if (typeof prop === "undefined") prop = null;
        else prop = "#" + prop;

        var items = j.children().length;
        //console.log(prop);
        j.slick({
            slidesToShow: 7,
            //slidesToScroll: 4,
            swipeToSlide: true,
            centerMode: items > 7,
            focusOnSelect: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 3,
                        centerMode: items > 3
                        //,slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 5,
                        centerMode: items > 5
                        //,slidesToScroll: 3
                    }
                }
            ]
        });

        j.on("afterChange", function () {
            var slider = j.closest(".gdm-slick-container").find(".gdm-slick-carousel");
            var currentSlide = j.slick("slickCurrentSlide");
            if (slider.slick("slickCurrentSlide") !== currentSlide) {
                slider.slick("slickGoTo", j.slick("slickCurrentSlide"));
            }
        });

    });
});
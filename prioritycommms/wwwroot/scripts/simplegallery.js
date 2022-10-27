
$(".simplegallery .mi-slick").each(function () {
    var j = $(this);
    var autoplay = j.closest(".simplegallery").data("gdm-slick-autoplay");
    if (typeof autoplay === "undefined") autoplay = null;

    j.slick({
        lazyLoad: 'progressive',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        autoplay: autoplay !== null,
        autoplaySpeed: autoplay,
        prevArrow: "<a href=\"#\" class=\"gdm-slick-prev\"><img src=\"/img/buttonright-grey.png\" alt=\"prev\" /></a>",
        nextArrow: "<a href=\"#\" class=\"gdm-slick-next\"><img src=\"/img/buttonright-grey.png\" alt=\"next\" /></a>",
        adaptiveHeight: false
    });
});

$(".simplegallery .thumb").click(function () {
    var idx = $(this).data("idx");
    var j = $(this).closest(".simplegallery").find(".mi-slick");
    j.slick("slickGoTo", idx);
});

$("#simplegallerytabs a").on("click", function () {
    // The image disappears for reasons as yet unknown
    $(this).closest(".galleryset").find(".mi-slick").each(function () {
        // goto index 1 often works while goto index 0 often doesn't work
        $(this).slick("slickGoTo", 1);
        $(this).slick("slickGoTo", 0);
    });
});

function resizesimplegallery() {
    $(".simplegallery .mi-slick").on("setPosition", function () {
        var slick = $(this).find(".inner");
        var height = slick.height();
        var thumbHeight = (height - 30) / 4;
        $(this).closest(".simplegallery").find(".thumb").each(function () {
            $(this).css("height", thumbHeight + "px");
        });
    });
}
resizesimplegallery();
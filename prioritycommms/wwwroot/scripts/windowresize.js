
(function ($) {
    function viewport() {
        var e = window, a = 'inner';
        if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return { width: e[a + 'Width'], height: e[a + 'Height'] };
    }

    // initial resize of embeds
    function resizeEmbeds() {
        var currentWidth = $('div.embeds').width();
        if (typeof currentWidth !== 'undefined') {
            //console.log('Resizing Embeds: ' + currentWidth);
            $('.embeds iframe').attr('height', parseInt(currentWidth * 9 / 16));
        } else {
            $('iframe[src*=\'youtube.com\']').each(function () {
                var t = $(this);

                var tw = t.width();
                t.height(parseInt(tw * 9 / 16));
            });
        }
    }
    resizeEmbeds();
    // resize on page resize
    var resizeWindowHelper = {
        resizeTime: 0,
        timeout: false,
        waitingTime: 300,
        resizeEnd: function () {
            if (new Date() - resizeWindowHelper.resizeTime < resizeWindowHelper.waitingTime) {
                setTimeout(resizeWindowHelper.resizeEnd, resizeWindowHelper.waitingTime);
            } else {
                resizeWindowHelper.timeout = false;
                resizeEmbeds();
            }
        }
    };

    var reflow = function () {
        var size = viewport();
        currentWidth = size.width;

        resizeWindowHelper.resizeTime = new Date();
        if (resizeWindowHelper.timeout === false) {
            resizeWindowHelper.timeout = true;
            setTimeout(resizeWindowHelper.resizeEnd, resizeWindowHelper.waitingTime);
        }

    };

    $(window).resize(reflow);
    reflow();
})(jQuery);

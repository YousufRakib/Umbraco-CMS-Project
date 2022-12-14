

var GMAP = {
    map: null,
    height: null,
    initMaps: function () {
        //console.log("initialising map");
        $(".gmap").each(function () {
            var $gmap = $(this);
            var lat = parseFloat($gmap.data("lat")) || parseFloat($gmap.find(".lat").text());
            var lng = parseFloat($gmap.data("lng")) || parseFloat($gmap.find(".lng").text());
            var zoom = parseInt($gmap.data("zoom")) || parseInt($gmap.find(".zoom").text());
            var mapTypeId = $gmap.data("maptype") || $gmap.find(".maptype").text();
            var markerTitle = $gmap.data("markertitle") || $gmap.find(".markertitle").text();
            var hasTitle = markerTitle && markerTitle.length > 0;
            var markerContent = $gmap.data("markercontent") || $gmap.find(".markercontent").text();
            var hasContent = markerContent && markerContent.length > 0;
            var includeLink = $gmap.data("markerincludelink") == "True" || $gmap.find(".markerincludelink").text() == "True";
            var image = $gmap.data("markerimage") || $gmap.find(".markerimage").text();
            GMAP.height = $gmap.data("height") || $gmap.find(".height").text();
            var hasImage = image && image.length > 0;
            $gmap.css("width", "100%");
            $gmap.find(".googlemap").css("height", GMAP.height);
            GMAP.map = new google.maps.Map($(this).find(".googlemap")[0], {
                center: { lat: lat, lng: lng },
                zoom: zoom,
                mapTypeId: mapTypeId
            });
            var marker = new google.maps.Marker({
                position: { lat: lat, lng: lng },
                map: GMAP.map,
                title: markerTitle
            });
            if (hasContent || hasTitle || hasImage || includeLink) {
                var infoWindow = new google.maps.InfoWindow({
                    content:
                        (hasTitle ? "<strong>" + markerTitle + "</strong>" + "<br/><br/>" : "") +
                        (hasContent ? markerContent.replace(/\n/g, "<br/>") + "<br/><br/>" : "") +
                        (hasImage ? "<img src=\"" + image + "\" alt=\"" + (hasTitle ? markerTitle : "map") + "\" >" + "<br/><br/>" : "") +
                        (includeLink ? "<a target=\"_blank\" href=\"https://maps.google.com/?q=" + lat + "," + lng + "&ll=" + lat + "," + lng + "&z=" + zoom + "\">View on Google Maps</a>" + "<br/><br/>" : "")
                });

                infoWindow.open(GMAP.map, marker);
                marker.addListener('click', function () {
                    infoWindow.open(GMAP.map, marker);
                });
            }
            GMAP.checkMap();
        });
    },
    checkMap: function () {
        var checkMapInt = setInterval(function () {
            if (!GMAP.map) {
                clearInterval(checkMapInt);
            } else {
                if ($(".gmap").find(".googlemap").height() == 0) {
                    clearInterval(checkMapInt);
                    $(".gmap").find(".map-data").hide();
                    GMAP.initMaps();
                }
            }
        }, 250);
    }
};
jQuery(function ($) {
    var mapAppearedInt = setInterval(function () {
        if ($(".gmap").length) {
            clearInterval(mapAppearedInt);
            var $gmap = $(".gmap");
            if ($gmap.length) {
                $gmap.find(".map-data").css("display", "none");
                var apikey = $($gmap[0]).data("apikey");
                if (!apikey) {
                    apikey = $gmap.find(".apikey").text();
                }
                if (typeof google !== 'object' || typeof google.maps !== 'object') {
                    var $gscript = $("<script async defer/>");
                    $gscript.attr("src", "https://maps.googleapis.com/maps/api/js?key=" + apikey + "&libraries=places&callback=GMAP.initMaps");
                    $("body").append($gscript);
                }
            }
        }
    }, 250);
});

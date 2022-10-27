
(function () {
    "use strict";

    function LinkPanelController($scope, editorService, angularHelper) {
        OverlayHelper.initController($scope, editorService, angularHelper, [
            {
                required: true,
                alias: "toptext",
                label: "TopText",
                description: "",
                view: "textbox"
            },
            {
                required: true,
                alias: "bottomtext",
                label: "BottomText",
                description: "",
                view: "textbox"
            }

        ], true, false);
    }

    angular.module("umbraco").controller("GDM.GDMMultiText", LinkPanelController);
})();
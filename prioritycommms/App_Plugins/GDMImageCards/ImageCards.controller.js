
(function () {
    "use strict";

    function LinkPanelController($scope, editorService, angularHelper) {
        OverlayHelper.initController($scope, editorService, angularHelper, [
            {
                required: true,
                alias: "image",
                label: "Image",
                description: "",
                view: "mediapicker",
                config: { disableFolderSelect: true, onlyImages: true }
            },
            {
                required: true,
                alias: "name",
                label: "Name",
                description: "",
                view: "textbox"
            },
            {
                required: true,
                alias: "designation",
                label: "Designation",
                description: "",
                view: "textbox"
            }

        ], true, false);
    }

    angular.module("umbraco").controller("GDM.GDMImageCards", LinkPanelController);
})();

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
                alias: "content",
                label: "Content",
                description: "",
                view: "textarea"
            }

        ], true, false);
    }

    angular.module("umbraco").controller("GDM.GDMMultiClientCards", LinkPanelController);
})();
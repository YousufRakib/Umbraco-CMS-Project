
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
                required: false,
                alias: "link",
                label: "Link",
                description: "",
                view: "multiurlpicker",
                config: {
                    minNumber: 0,
                    maxNumber: 1
                }
            }
        ], true, false);
    }

    angular.module("umbraco").controller("GDM.GDMLinkCards", LinkPanelController);
})();
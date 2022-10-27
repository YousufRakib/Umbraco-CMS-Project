
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
                alias: "title",
                label: "Title",
                description: "",
                view: "textbox"
            },
            {
                required: true,
                alias: "fontAwesome",
                label: "Font Awesome",
                description: "",
                view: "textbox"
            },
            {
                required: true,
                alias: "content",
                label: "Content",
                description: "",
                view: "textbox"
            }

        ], true, false);
    }

    angular.module("umbraco").controller("GDM.GDMMultiSocialMediaCards", LinkPanelController);
})();
angular.module("umbraco")
    .controller("GDM.EmbedVideo",
        function ($scope) {
            $scope.textInput = {
                alias: "bodyText",
                label: 'bodyText',
                description: '...',
                view: '/Umbraco/Views/propertyeditors/rte/rte.html',
                value: $scope.model.value,
                config: {
                    editor: {
                        toolbar: [
                            //"ace",
                            //"removeformat",
                            //"undo",
                            //"redo",
                            //"cut",
                            //"copy",
                            //"paste",
                            //"formatselect",
                            //"bold",
                            //"italic",
                            //"alignleft",
                            //"alignjustify",
                            //"alignright",
                            //"bullist",
                            //"numlist",
                            //"indent",
                            //"outdent",
                            //"link",
                            //"unlink",
                            //"anchor",
                            //"umbmediapicker",
                            //"table",
                            "embed"
                            //"hr",
                            //"forecolor",
                            //"backcolor",
                            //"fontsizes",
                            //"fullscreen"
                        ],
                        stylesheets: ["editor", "typography"],
                        dimensions: {
                            height: 400
                        }
                    }
                }
            };
            $scope.$watch('textInput.value', function (newValue, oldValue) {
                $scope.model.value = newValue;
            });
            var overlay = $("[data-element='overlay']");
            function onresize() {
                overlay.width(overlay.parent().width());
            }
            var resize;
            window.onresize = function () {
                clearTimeout(resize);
                resize = setTimeout(onresize, 100);
            };
            onresize();
        });
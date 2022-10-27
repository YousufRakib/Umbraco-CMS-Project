var OverlayHelper = {
    initController: function ($scope, editorService, angularHelper, properties, isSortable, titleIsEditable, size) {
        /* Ensure model is array */
        if (!Array.isArray($scope.model.value))
            $scope.model.value = [];

        /* Get current form, useful to change its state to dirty */
        var currentForm = angularHelper.getCurrentForm($scope);

        /* Sortable */
        if (isSortable) {
            $scope.sortableOptions = {
                distance: 10,
                tolerance: 'pointer',
                scroll: true,
                zIndex: 6000,
                update: function update() {
                    currentForm.$setDirty();
                }
            };
        }

        $scope.Remove = function (item) {
            var options = {
                title: "Remove",
                view: "/App_Plugins/GDMOverlay/delete.html",
                size: size ? size : "small",
                submit: function (model) {
                    $scope.$broadcast("formDelete", { scope: $scope, model: model });
                    var index = $scope.model.value.indexOf(item);
                    if (index !== -1) $scope.model.value.splice(index, 1);
                    editorService.close();
                },
                close: function () {
                    editorService.close();
                },
                properties: angular.copy(properties)
            };
            if (item)
                for (var i = 0; i < options.properties.length; i++)
                    if (item[options.properties[i].alias])
                        options.properties[i].value = item[options.properties[i].alias];

            editorService.open(options);
        };

        /*  */
        $scope.AddOrEdit = function (target, $index) {
            target = target ? target : null;

            /* Init overlay & its properties */
            var options = {
                target: target,
                title: target ? target.name : "Add",
                titleEditable: titleIsEditable,
                view: "/App_Plugins/GDMOverlay/editor.html",
                size: size ? size : "small",
                submit: function (model) {
                    $scope.$broadcast("formSubmitting", { scope: $scope });
                    var i;
                    if (typeof model.target === "undefined" || model.target === null) {
                        /* Adding */
                        var n = {};
                        if (model.titleEditable) n.name = model.title;
                        for (i = 0; i < model.properties.length; i++)
                            n[model.properties[i].alias] = model.properties[i].value;

                        $scope.model.value.push(n);
                    } else {
                        /* Editing */
                        if (model.titleEditable) model.target.name = model.title;
                        for (i = 0; i < model.properties.length; i++)
                            model.target[model.properties[i].alias] = model.properties[i].value;
                    }
                    currentForm.$setDirty();
                    $scope.$broadcast("formSubmitted", { scope: $scope, model: model });
                    editorService.close();
                },
                close: function () {
                    editorService.close();
                    $scope.$broadcast("formCancelled");
                },
                properties: angular.copy(properties)
            };

            /* Populate value of properties with target[alias] */
            if (typeof target !== "undefined" && target !== null)
                for (var i = 0; i < options.properties.length; i++)
                    if (typeof target[options.properties[i].alias] !== "undefined" && target[options.properties[i].alias] !== null)
                        options.properties[i].value = target[options.properties[i].alias];

            editorService.open(options);
        };
    }
};
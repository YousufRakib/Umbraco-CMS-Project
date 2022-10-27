angular.module("umbraco").controller("GDMOverlay.Editor.Controller", function ($scope, formHelper) {
    $scope.close = function () {
        if ($scope.model.close) {
            $scope.model.close();
        }
    };

    $scope.submit = function () {
        var isvalid = true;
        for (var i = 0; i < $scope.model.properties.length; i++) {
            $scope.model.properties[i].invalid = $scope.model.properties[i].required && (
                typeof $scope.model.properties[i].value === "undefined"
                || $scope.model.properties[i].value === null
                || (typeof $scope.model.properties[i].value === "string" && $scope.model.properties[i].value.length < 1)
                || (typeof $scope.model.properties[i].value === "object" && $scope.model.properties[i].value.length < 1)
            );
            if (isvalid && $scope.model.properties[i].invalid) isvalid = false;
        }
        if (isvalid)
            $scope.model.submit($scope.model);
    };
});
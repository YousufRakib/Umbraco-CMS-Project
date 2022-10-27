angular.module("umbraco").controller("GDM.SubpageList.SettingsController", function ($scope) {
    if($scope.model.value == null) {
        $scope.model.value = "logical";
    }

    $scope.orders = [
        { Value: "logical", Name: "Sort Order (Umbraco)" },
        { Value: "alpha", Name: "Alphabetical" },
        { Value: "date", Name: "Date" }
    ];
});
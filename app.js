angular.module('menuApp', [])
.controller('MenuController', ['$scope', '$http', function ($scope, $http) {
    $scope.searchText = "";
    $scope.foundItems = [];
    $scope.searchPerformed = false;

    $scope.narrowItDown = function () {
        if ($scope.searchText.trim() === "") {
            $scope.foundItems = [];
            $scope.searchPerformed = true;
            return;
        }
        // Simulate fetching data from the server
        $http.get('https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json').then(function (response) {
            const menuItems = response.data;
            $scope.foundItems = [];

            // Filter the items based on search text
            menuItems.forEach(item => {
                if (item.description.toLowerCase().includes($scope.searchText.toLowerCase())) {
                    $scope.foundItems.push(item);
                }
            });

            $scope.searchPerformed = true;
          console.log(foundItems.length);
        }, function (error) {
            console.error("Error retrieving menu items:", error);
        });
    };

    $scope.removeItem = function (index) {
        $scope.foundItems.splice(index, 1);
    };
}]);

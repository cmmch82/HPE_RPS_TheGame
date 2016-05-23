
(function () {

    var app = angular.module("gameApp");

    var homeIndexController = function () {
        alert("inside the controller");
    };

    app.controller("homeIndexController", homeIndexController);

}());
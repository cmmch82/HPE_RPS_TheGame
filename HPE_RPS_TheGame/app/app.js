(function () {
    var app = angular.module("gameApp", ["ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/game/main", {
                templateUrl: "/app/templates/main.html",
                controller: "mainController"
            })

        $routeProvider
            .when("/game/topN", {
                templateUrl: "/app/templates/topN.html",
                controller: "topNController"
            })

        $routeProvider
    .when("/game/demo", {
        templateUrl: "/app/templates/demo.html",
        controller: "demoController"
    })

        $routeProvider
            .when("/game/manualEntry", {
                templateUrl: "/app/templates/manualEntry.html",
                controller: "manualEntryController"
            })


        $routeProvider
            .when("/game/nuke", {
                templateUrl: "/app/templates/nuke.html",
                controller: "nukeController"
            })

        $routeProvider
            .when("/game/uploadGame", {
                templateUrl: "/app/templates/uploadGame.html",
                controller: "uploadGameController"
            })


            .otherwise({ redirectTo: "/game/main" });
    });
}());
var app = angular.module("myApp", []);

app.controller("MyTableController", function ($scope) {
  $scope.headers = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "age", label: "Age" },
  ];

  $scope.users = [
    { id: 1, name: "John Doe", email: "john@example.com", age: 35 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", age: 35 },
    { id: 3, name: "Sam Green", email: "sam@example.com", age: 35 },
  ];
});

// headerComponent (camel case) =  <header-component></header-component>
app.directive("headerComponent", function () {
  return {
    restrict: "E",
    scope: {
      label: "@",
    },
    template:
      "<div style='background-color: coral' ><span>{{label}}</span></div>",
  };
});

// rowComponent (camel case) =  <row-component></row-component>
app.directive("rowComponent", function () {
  return {
    restrict: "E",
    scope: {
      value: "@",
    },
    template: "<span>{{value}}</span>",
  };
});

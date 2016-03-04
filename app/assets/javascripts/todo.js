(function() {
  "use strict";

  angular.module("app").controller("todo", function($scope){
    $scope.tasks = [

      {
        text: "throw out trash", 
        completed: false 
      },{
        text: "clean bathroom",
        completed: false
      },{
        text: "do homework",
        completed: false
      }];

     $scope.removeCompletedTasks = function(){
      var completedTasks = [];

      for(var index = 0; index < $scope.tasks.length; index++){
        if($scope.tasks[index].completed){
          completedTasks.push($scope.tasks[index]);
        }
      }

      for(var index = 0; index < completedTasks.length; index++){
        $scope.tasks.splice($scope.tasks.indexOf(completedTasks[index]),1);
      }
     };

     $scope.numberOfImcompleteTasks = function(){
      var count = 0 
      for(var i = 0; i < $scope.tasks.length; i++){
        if(!$scope.tasks[i].completed){
          count += 1;
        }
      }
      return count;
     };

    $scope.togglecompleted = function(task){
      task.completed = !task.completed
    };
    

    $scope.addTask = function(newText){ 
      var newTask = {
        text: newText,
        completed: false
      }   
      if (newText) {
        $scope.tasks.push(newTask);
        $scope.newTask = "";
      }  
    };

    $scope.deleteTask = function(index){
      $scope.tasks.splice(index, 1)
    };

    window.scope = $scope;
  });

}());
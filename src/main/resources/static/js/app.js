angular.module('flylogs', []).controller('home', function($http, $scope) {
	$scope.getLoggers = getLoggers;
	$scope.setLoggers = setLoggers;
	$scope.logLevels = [];
	$scope.selectedLogger = "";
	$scope.selectedLevel = $scope.logLevels[0];

	function getLoggers() {
		$http.get('/loggers').then(function success(response) {
			$scope.logLevels = response.data.levels;
		}, function error(response) {
			console.log('error');
		});
	}

	function setLoggers() {
		$http({
			url : '/loggers/'+$scope.selectedLogger,
			method : 'POST',
			data : {
				"configuredLevel" : $scope.selectedLevel
			}
		}).then(function success(response) {
			console.log('success');
		}, function error(response) {
			console.log('error');
		});
	}

	$scope.getLoggers();
})
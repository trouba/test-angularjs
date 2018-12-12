testApp.controller('CsvCtrl', ['$scope', function($scope) {
	$scope.testvalue = "csv view";	
}]);

testApp.directive('fileReader', function() {
	return {
		scope: {
			fileReader:"="
		},
		link: function(scope, element) {

			function csvToObject(csv){

				var lines=csv.split("\n");
				var result = [];
				var headers=lines[0].split(";");

				//clean headers to use smart-table
				var headers = headers.map(function(header) {
					newHeader = header.replace(/[^A-Z0-9]/ig, "_");;
					return newHeader
				});

				for(var i=1;i<lines.length;i++){
					var obj = {};
					var currentline=lines[i].split(";");
					for(var j=0;j<headers.length;j++){
						obj[headers[j]] = currentline[j];
					}
					result.push(obj);
				}
				return result;
			}

			$(element).on('change', function(changeEvent) {
				var files = changeEvent.target.files;
				if (files.length) {
					var r = new FileReader();
					r.onload = function(e) {
						var contents = e.target.result;
						scope.$apply(function () {
							scope.fileReader = csvToObject(contents);
						});
					};
					r.readAsText(files[0]);
				}
			});
		}
	};
});

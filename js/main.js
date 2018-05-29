var app = angular.module('myApp', []);

app.controller('AlbumListController', function($scope) {
    $scope.showMenu = true;

    $scope.albums = trackDetailsJsonString;
    $scope.currentAlbum = "";
    $scope.currentSong = "";



    $scope.showAlbumSongList = function(album) {

    	if ($scope.currentAlbum == $scope.albums[album]) {
    		$scope.currentAlbum = "";
    	}
    	else {
    		$scope.currentAlbum = $scope.albums[album];
    	}
	};

    $scope.closeAlbum = function() {
        $scope.currentAlbum = "";
	};



	$scope.selectSong = function(songKey) {
        $scope.showMenu=false;
		$scope.currentSong = $scope.currentAlbum.trackList[songKey];//.trackPageDetails[1] + ".jpg";


	};


});
angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.about',
  'ui.router.state',
  'ui.route'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/about' );
})

.run( ['$state', '$rootScope', function($state, $rootScope){
 $rootScope.$state = $state;

}])

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {

});


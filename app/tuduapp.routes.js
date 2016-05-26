export default function routes($stateProvider) {
  $stateProvider
    .state('tuduap', {
      url: '/tuduap/:user',
      template: require('./tuduap.html'),
      controller: 'TuduapController',
      controllerAs: 'tuduap'
    })
}
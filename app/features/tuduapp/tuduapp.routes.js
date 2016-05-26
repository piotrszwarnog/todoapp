export default function routes($stateProvider) {
  $stateProvider
    .state('tuduapp', {
      url: '/tuduapp',
      template: require('./tuduapp.html'),
      controller: 'TuduappController',
      controllerAs: 'tuduapp'
    })
}
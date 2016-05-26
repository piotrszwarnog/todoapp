import angular from 'angular';
import uirouter from 'angular-ui-router';
import firebase from 'firebase';
import angularFire from 'angularfire';

// Import routing for this module
import routing from './tuduapp.routes';

// Import controllers for this module
import TuduappController from './tuduapp.controller';


export default angular.module('app.github', [uirouter, angularFire])
  .config(routing)
  .controller('TuduappController', TuduappController)
  .name;
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './config';
import tuduapp from './features/tuduapp';

  // var app=angular.module('app', [uirouter, angularFire]);
  // app.controller('tuduap', TuduappController)
  // .name;
  
   angular
   .module('app', [uirouter, tuduapp])
   .config(routing)
   .name;
  
  
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './config';
import tuduapp from './features/tuduapp';

angular
   .module('app', [uirouter, tuduapp])
   .config(routing)
   .name;
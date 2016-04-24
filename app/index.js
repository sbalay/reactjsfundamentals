var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

var app = document.getElementById('app');

ReactDOM.render(
  routes,
  app
);

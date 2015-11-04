// 'use strict';

var React       = require('react');
var ReactDOM    = require('react-dom');
var App         = require('./components/App.js');
var rootElement = document.body;

require('../styles/main.js');

var appData = {
  title: 'koala fridge',
  list: [
    'ham',
    'eggs',
    'cheese',
    'tomatoes',
    'avocados',
    'cucumber'
  ],
  footerText: 'da footer iniiit'
};
console.log('reactDomRender!');
ReactDOM.render(
  <App {...appData}/>,
  rootElement
);

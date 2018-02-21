require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({6:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),t=require("antd"),r=require("highlight.js"),n=p(r),a=require("rc-stream"),o=f(a),u=require("react"),l=p(u),i=require("react-dom"),c=p(i),s=require("rxjs");function f(e){return e&&e.__esModule?e:{default:e}}function p(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var y=function e(){d(this,e)},b=function e(){d(this,e)},g=o.default.create(function(e){return e.map(function(e){return 2*e})}),v=o.default.create(function(e){return e.map(function(e){return{value:e}})}),E=function(r){function a(){d(this,a);var e=h(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments));return e.state=new b,e.freshHighlight=function(){var t=c.findDOMNode(e);Array.from(t.querySelectorAll("pre")).forEach(function(e){n.highlightBlock(e)})},e}return m(a,l.PureComponent),e(a,[{key:"componentDidMount",value:function(){this.freshHighlight()}},{key:"render",value:function(){var e=s.Observable.interval(500).startWith(0);return l.createElement("div",null,l.createElement("h1",null,"Component"),l.createElement("p",null,"Why not give Stream a meaningful name? Using ",l.createElement("code",null,"Stream.create"),"!"),l.createElement("pre",{className:"highlight highlight-source-typescript"},["const Double = Stream.create(stream => stream.map(data => data * 2))","const MapToValue = Stream.create(stream => stream.map(data => ({ value: data })))"].join("\n")),l.createElement("p",null,"Then, we can use these custom Stream!"),l.createElement("pre",{className:"highlight highlight-source-tsx"},["<Double stream={stream$}>","  <MapToValue>","    <Input />","  </MapToValue>","</Double>"].join("\n")),l.createElement(g,{stream:e},l.createElement(v,null,l.createElement(t.Input,null))))}}]),a}();exports.default=E,E.defaultProps=new y;
},{"antd":71,"highlight.js":70,"rc-stream":69,"react":18,"react-dom":17,"rxjs":72}]},{},[6])
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],t):"object"==typeof exports?exports.reactMobileDatePickerTs=t(require("react"),require("react-dom")):e.reactMobileDatePickerTs=t(e.React,e.ReactDOM)}(this,(E,T)=>(()=>{"use strict";var n={244:e=>{e.exports=E},741:e=>{e.exports=T}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;t=r[e]={exports:{}};return n[e](t,t.exports,o),t.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var e={};{o.r(e),o.d(e,{Direction:()=>L,Themes:()=>D,dateConfigMap:()=>j,default:()=>h});var L,t,R=o(244),U=o.n(R),D=((t=L=L||{})[t.UP=1]="UP",t[t.DOWN=-1]="DOWN",["default","dark","ios","android","android-dark"]),j={year:{format:"YYYY",caption:"Year",step:1,type:"year"},month:{format:"M",caption:"Mon",step:1,type:"month"},date:{format:"D",caption:"Day",step:1,type:"date"},hour:{format:"hh",caption:"Hour",step:1,type:"hour"},minute:{format:"mm",caption:"Min",step:1,type:"minute"},second:{format:"hh",caption:"Sec",step:1,type:"second"}};function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $(e){return"targetTouches"in e&&!!e.targetTouches[0]}var N=function(e){return"string"==typeof e&&j.hasOwnProperty(e)},k=function(e){return!!(t=e)&&"object"===a(t)&&"string"==typeof e.type&&N(e.type);var t};function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e){if("[object Date]"!==Object.prototype.toString.call(e))throw new Error("Invalid Date")}function F(e,n){var r=n,t={"M+":e.getMonth()+1,"D+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};return/(Y+)/.test(n)&&(r=r.replace(RegExp.$1,e.getFullYear().toString().substr(4-RegExp.$1.length))),Object.entries(t).map(function(e){var e=i(e,2),t=e[0],e=e[1];new RegExp("(".concat(t,")")).test(n)&&(r=r.replace(RegExp.$1,1===RegExp.$1.length?"".concat(e):"00".concat(e).substr(e.toString().length)))}),r}function M(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0;return u(e),new Date(e.getTime()+24*t*60*60*1e3)}var H={year:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0;return u(e),new Date(e.getFullYear()+t,e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds())},month:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,n=(u(e),e.getFullYear()),t=e.getMonth()+t,r=Math.min(e.getDate(),new Date(n,t+1,0).getDate());return new Date(n,t,r,e.getHours(),e.getMinutes(),e.getSeconds())},date:M,hour:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0;return u(e),new Date(e.getTime()+60*t*60*1e3)},minute:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0;return u(e),new Date(e.getTime()+60*t*1e3)},second:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0;return u(e),new Date(e.getTime()+1e3*t)}};function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _(e){var n=e.step,r=e.type,o=e.value;return Array.apply(void 0,q(Array(m))).map(function(e,t){return H[r](o,(t-z)*n)})}function f(e){function t(e){b.current=($(e)?e.targetTouches[0]:e).pageY,S.current=N,O.current=0}function n(e){var e=($(e)?e.targetTouches[0]:e).pageY-b.current,t=S.current+e,e=0<e?L.DOWN:L.UP,n=M[z];n.getTime()<l.getTime()||n.getTime()>s.getTime()||(Y(e,t)&&(O.current+=e,x(e)),k(t))}function r(e){e=0<($(e)?e.changedTouches[0]:e).pageY-b.current?L.UP:L.DOWN,I(e)}function o(e){g||("touchstart"===e.type?t(e):"touchmove"===e.type?n(e):"touchend"===e.type&&r(e))}function a(e){g||n(e)}function i(e){g||(D(!1),r(e))}var c=e.type,u=e.value,l=e.min,s=e.max,f=e.format,m=e.step,p=e.onSelect,d=void 0===(d=e.wheelClassName)?"":d,y=void 0===(y=e.colOneClassName)?"":y,v=void 0===(e=e.datePickerListClassName)?"":e,g=(e=W((0,R.useState)(!1),2))[0],h=e[1],b=(0,R.useRef)(0),S=(0,R.useRef)(0),w=(0,R.useRef)(z),O=(0,R.useRef)(0),E=(0,R.useRef)(null),T=(e=W((0,R.useState)(!1),2))[0],D=e[1],j=(0,R.useRef)(),N=(e=W((0,R.useState)(B),2))[0],k=e[1],M=(e=W((0,R.useState)(_({step:m,type:c,value:u})),2))[0],A=e[1],C=(e=W((0,R.useState)(0),2))[0],P=e[1],x=((0,R.useEffect)(function(){return function(){j.current&&clearTimeout(j.current)}},[j]),(0,R.useEffect)(function(){w.current=z,k(B),P(0),A(_({step:m,type:c,value:u}))},[m,c,u]),function(e){e===L.UP?(w.current++,A([].concat(q(M.slice(1)),[H[c](M[M.length-1],m)]))):(w.current--,A([H[c](M[0],-m)].concat(q(M.slice(0,M.length-1))))),P(40*(w.current-z))}),Y=function(e,t){return e===L.UP?40*w.current+20<-t:40*w.current-20>-t},I=function(e){var t=M[z];e===L.UP&&t.getTime()<l.getTime()&&O.current?x(L.UP):e===L.DOWN&&t.getTime()>s.getTime()&&O.current&&x(L.DOWN),e=w.current,h(!0),k(40*-e),j.current=setTimeout(function(){h(!1),p(M[z])},200)},e=((0,R.useEffect)(function(){if(T)return document.addEventListener("mousemove",a),document.addEventListener("mouseup",i),function(){document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",i)}},[T,a,i]),(0,R.useEffect)(function(){return null!=E&&E.current&&(E.current.addEventListener("touchstart",o,{passive:!1}),E.current.addEventListener("touchmove",o,{passive:!1}),E.current.addEventListener("touchend",o,{passive:!1})),function(){null!=E&&E.current&&(E.current.removeEventListener("touchstart",o),E.current.removeEventListener("touchmove",o),E.current.removeEventListener("touchend",o))}},[]),(0,R.useCallback)(function(e,t){var n=e<l||s<e?"disabled":"",r=(r=f)&&"[object Function]"===Object.prototype.toString.apply(r)?f(e):F(e,f);return U().createElement("li",{key:"".concat(t),className:"".concat(n," ").concat(v)},r)},[l,s,f])),C={"--margin-top":C,"--translate-y":N};return U().createElement("div",{className:"datepicker-col-1 ".concat(y)},U().createElement("div",{ref:E,className:"datepicker-viewport",onMouseDown:function(e){e.stopPropagation(),g||(D(!0),t(e))}},U().createElement("div",{className:"datepicker-wheel ".concat(d)},U().createElement("div",{className:"datepicker-scroll ".concat(g?"active":""),style:C},M.map(e)))))}var m=10,z=Math.floor(m/2),B=-40*z;const A=U().memo(f,function(e,t){return e.value.getTime()===t.value.getTime()});function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const g=function(e){function r(e){E(e),v&&v(e)}var t,n=e.theme,n=void 0===n?"default":n,o=e.value,a=void 0===o?new Date:o,o=e.min,i=void 0===o?new Date(1970,0,1):o,o=e.max,c=void 0===o?new Date(2050,0,1):o,o=e.showFooter,o=void 0===o||o,u=e.showHeader,u=void 0===u||u,l=e.showCaption,l=void 0!==l&&l,s=e.dateConfig,s=void 0===s?[{format:"YYYY",caption:"Year",type:"year",step:1},{format:"M",caption:"Mon",type:"month",step:1},{format:"D",caption:"Day",type:"date",step:1}]:s,f=e.headerFormat,f=void 0===f?"YYYY/MM/DD":f,m=e.confirmText,m=void 0===m?"Done":m,p=e.cancelText,p=void 0===p?"Cancel":p,d=e.customHeader,y=e.onSelect,v=e.onChange,g=e.onCancel,h=e.wheelClassName,b=void 0===h?"":h,h=e.colOneClassName,S=void 0===h?"":h,h=e.datePickerClassName,h=void 0===h?"":h,e=e.datePickerListClassName,w=void 0===e?"":e,e=C((0,R.useState)(M(a)),2),O=e[0],E=e[1],T=((0,R.useEffect)(function(){E(function(e){return e.getTime()!==a.getTime()?new Date(a):e})},[a]),(0,R.useEffect)(function(){O.getTime()>c.getTime()&&E(new Date(c)),O.getTime()<i.getTime()&&E(new Date(i))},[O,i,c]),s.map(function(e){if(N(e))return Object.assign(Object.assign({},j[e]),{type:e});var t;if(k(e))return t=e.type,Object.assign(Object.assign(Object.assign({},j[t]),e),{type:t});throw new Error("invalid dateConfig")}));return U().createElement("div",{className:"datepicker ".concat("string"!=typeof(t=n)||!D.find(function(e){return e===t})?"default":n," ").concat(h)},u&&U().createElement("div",{className:"datepicker-header"},d||F(O,f)),l&&U().createElement("div",{className:"datepicker-caption"},T.map(function(e,t){return U().createElement("div",{key:t,className:"datepicker-caption-item"},e.caption)})),U().createElement("div",{className:"datepicker-content"},T.map(function(e,t){var n=0===t?"rounded-tr-none rounded-br-none":t===T.length-1?"rounded-tl-none rounded-bl-none":"rounded-none";return U().createElement(A,{key:t,value:O,min:i,max:c,step:e.step,type:e.type,format:e.format,onSelect:r,wheelClassName:"".concat(b," ").concat(n),colOneClassName:S,datePickerListClassName:w})})),o&&U().createElement("div",{className:"datepicker-navbar"},U().createElement("button",{className:"datepicker-navbar-btn",onClick:function(){y&&y(O)}},m),U().createElement("button",{className:"datepicker-navbar-btn",onClick:g},p)))};var b=o(741);function S(e){var t=e.isOpen,e=e.children,n="undefined"!=typeof window?document.body:null;return void 0!==t&&t&&n&&e?b.createPortal(R.createElement("div",{className:"datepicker-modal"},e),n):null}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function O(e){function t(e){e.target===e.currentTarget&&r&&i(!0)}var n=void 0!==(n=e.isOpen)&&n,r=e.onCancel,e=v(e,["isOpen","onCancel"]),o=w(R.useState(!1),2),a=o[0],i=o[1];return n?R.createElement("div",{role:"presentation",onMouseDown:t,onTouchStart:t,onClick:function(e){a&&e.target===e.currentTarget&&r&&(i(!1),r(e))},className:"datepicker-modal"},R.createElement(g,Object.assign({},e))):null}function y(e){var t=void 0===(t=e.isPopup)||t,n=void 0!==(n=e.isOpen)&&n,e=v(e,["isPopup","isOpen"]);return t?R.createElement(S,{isOpen:n},R.createElement(O,Object.assign({},e,{isOpen:n}))):R.createElement(g,Object.assign({},e))}var v=function(e,t){var n={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};y.displayName="MobileDatePicker";const h=y}return e})());
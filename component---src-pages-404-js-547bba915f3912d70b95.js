webpackJsonp([0x9427c64ab85d],{31:function(e,t){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function n(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;e.exports=n()?Object.assign:function(e,t){for(var n,i,u=r(e),f=1;f<arguments.length;f++){n=Object(arguments[f]);for(var s in n)a.call(n,s)&&(u[s]=n[s]);if(o){i=o(n);for(var l=0;l<i.length;l++)c.call(n,i[l])&&(u[i[l]]=n[i[l]])}}return u}},360:function(e,t,r){e.exports=r.p+"static/404.fe967e5d.svg"},148:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=r(1),a=n(o),c=r(360),i=n(c),u=function(){return a.default.createElement("div",{className:"container"},a.default.createElement("img",{src:i.default,alt:"Not found image"}))};t.default=u,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-404-js-547bba915f3912d70b95.js.map
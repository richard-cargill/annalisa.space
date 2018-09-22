webpackJsonp([0xd5d9d741ef0b],{100:function(t,e,n){"use strict";function r(t){return t}function o(t,e,n){function o(t,e){var n=_.hasOwnProperty(e)?_[e]:null;M.hasOwnProperty(e)&&s("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",e),t&&s("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",e)}function a(t,n){if(n){s("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),s(!e(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var r=t.prototype,a=r.__reactAutoBindPairs;n.hasOwnProperty(l)&&v.mixins(t,n.mixins);for(var i in n)if(n.hasOwnProperty(i)&&i!==l){var u=n[i],c=r.hasOwnProperty(i);if(o(c,i),v.hasOwnProperty(i))v[i](t,u);else{var f=_.hasOwnProperty(i),m="function"==typeof u,y=m&&!f&&!c&&n.autobind!==!1;if(y)a.push(i,u),r[i]=u;else if(c){var E=_[i];s(f&&("DEFINE_MANY_MERGED"===E||"DEFINE_MANY"===E),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",E,i),"DEFINE_MANY_MERGED"===E?r[i]=p(r[i],u):"DEFINE_MANY"===E&&(r[i]=d(r[i],u))}else r[i]=u}}}else;}function c(t,e){if(e)for(var n in e){var r=e[n];if(e.hasOwnProperty(n)){var o=n in v;s(!o,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var a=n in t;if(a){var i=g.hasOwnProperty(n)?g[n]:null;return s("DEFINE_MANY_MERGED"===i,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(t[n]=p(t[n],r))}t[n]=r}}}function f(t,e){s(t&&e&&"object"==typeof t&&"object"==typeof e,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in e)e.hasOwnProperty(n)&&(s(void 0===t[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),t[n]=e[n]);return t}function p(t,e){return function(){var n=t.apply(this,arguments),r=e.apply(this,arguments);if(null==n)return r;if(null==r)return n;var o={};return f(o,n),f(o,r),o}}function d(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function m(t,e){var n=e.bind(t);return n}function y(t){for(var e=t.__reactAutoBindPairs,n=0;n<e.length;n+=2){var r=e[n],o=e[n+1];t[r]=m(t,o)}}function E(t){var e=r(function(t,r,o){this.__reactAutoBindPairs.length&&y(this),this.props=t,this.context=r,this.refs=u,this.updater=o||n,this.state=null;var a=this.getInitialState?this.getInitialState():null;s("object"==typeof a&&!Array.isArray(a),"%s.getInitialState(): must return an object or null",e.displayName||"ReactCompositeComponent"),this.state=a});e.prototype=new D,e.prototype.constructor=e,e.prototype.__reactAutoBindPairs=[],h.forEach(a.bind(null,e)),a(e,N),a(e,t),a(e,b),e.getDefaultProps&&(e.defaultProps=e.getDefaultProps()),s(e.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var o in _)e.prototype[o]||(e.prototype[o]=null);return e}var h=[],_={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},g={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},v={displayName:function(t,e){t.displayName=e},mixins:function(t,e){if(e)for(var n=0;n<e.length;n++)a(t,e[n])},childContextTypes:function(t,e){t.childContextTypes=i({},t.childContextTypes,e)},contextTypes:function(t,e){t.contextTypes=i({},t.contextTypes,e)},getDefaultProps:function(t,e){t.getDefaultProps?t.getDefaultProps=p(t.getDefaultProps,e):t.getDefaultProps=e},propTypes:function(t,e){t.propTypes=i({},t.propTypes,e)},statics:function(t,e){c(t,e)},autobind:function(){}},N={componentDidMount:function(){this.__isMounted=!0}},b={componentWillUnmount:function(){this.__isMounted=!1}},M={replaceState:function(t,e){this.updater.enqueueReplaceState(this,t,e)},isMounted:function(){return!!this.__isMounted}},D=function(){};return i(D.prototype,t.prototype,M),E}var a,i=n(5),u=n(34),s=n(1),l="mixins";a={},t.exports=o},156:function(t,e){"use strict";function n(t,e,f){if("string"!=typeof e){if(c){var p=l(e);p&&p!==c&&n(t,p,f)}var d=i(e);u&&(d=d.concat(u(e)));for(var m=0;m<d.length;++m){var y=d[m];if(!(r[y]||o[y]||f&&f[y])){var E=s(e,y);try{a(t,y,E)}catch(t){}}}return t}return t}var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,i=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,s=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,c=l&&l(Object);t.exports=n},5:function(t,e){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function r(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(t){return e[t]});if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}}var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;t.exports=r()?Object.assign:function(t,e){for(var r,u,s=n(t),l=1;l<arguments.length;l++){r=Object(arguments[l]);for(var c in r)a.call(r,c)&&(s[c]=r[c]);if(o){u=o(r);for(var f=0;f<u.length;f++)i.call(r,u[f])&&(s[u[f]]=r[u[f]])}}return s}},203:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(2),a=r(o),i=function(t){var e=t.html;return a.default.createElement("section",null,a.default.createElement("div",{dangerouslySetInnerHTML:{__html:e}}))};e.default=i,t.exports=e.default},204:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(2),a=r(o),i=function(t){var e=t.text;return a.default.createElement("section",null,a.default.createElement("h1",null,e))};e.default=i,t.exports=e.default},205:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(2),a=r(o),i=function(t){var e=t.text;return a.default.createElement("section",null,a.default.createElement("h1",null,e))};e.default=i,t.exports=e.default},206:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(2),a=r(o),i=function(t){var e=t.src,n=t.alt;return a.default.createElement("section",null,a.default.createElement("img",{src:e,alt:n}))};e.default=i,t.exports=e.default},207:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(2),a=r(o),i=n(66),u=r(i),s=function(t){var e=t.text,n=t.pages;return a.default.createElement("section",null,a.default.createElement("h2",null,e),n.map(function(t){return a.default.createElement("div",{key:t.name},a.default.createElement("h3",null,a.default.createElement(u.default,{to:t.slug},t.name)))}))};e.default=s,t.exports=e.default},208:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){var e=t.type,n=t.data;switch(e){case"ContentfulHeroPanel":return i.default.createElement(s.default,{text:n.text});case"ContentfulPageSelectorPanel":return i.default.createElement(c.default,{text:n.text,pages:n.pages});case"ContentfulHeaderPanel":return i.default.createElement(p.default,{text:n.text});case"ContentfulImagePanel":return i.default.createElement(m.default,{src:n.media.file.url});case"ContentfulContentPanel":return i.default.createElement(E.default,{html:n.content.childMarkdownRemark.html});default:return null}}e.__esModule=!0;var a=n(2),i=r(a),u=n(205),s=r(u),l=n(207),c=r(l),f=n(204),p=r(f),d=n(206),m=r(d),y=n(203),E=r(y);e.default=o,t.exports=e.default},211:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0,e.pageQuery=void 0;var u=n(2),s=r(u),l=n(208),c=r(l),f=function(t){function e(){return o(this,e),a(this,t.apply(this,arguments))}return i(e,t),e.prototype.render=function(){var t=this.props.data.contentfulPage,e=(t.name,t.panels);return s.default.createElement("article",null,e&&e.map(function(t){var e=t.__typename;return s.default.createElement(c.default,{key:e,type:e,data:t})}))},e}(s.default.Component);e.default=f;e.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-page-template-js-981d5828221f1aff87af.js.map
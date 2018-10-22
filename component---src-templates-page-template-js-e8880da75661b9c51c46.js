webpackJsonp([0xd5d9d741ef0b],{100:function(e,t,n){"use strict";function r(e){return e}function a(e,t,n){function a(e,t){var n=_.hasOwnProperty(t)?_[t]:null;M.hasOwnProperty(t)&&i("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&i("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function o(e,n){if(n){i("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),i(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var r=e.prototype,o=r.__reactAutoBindPairs;n.hasOwnProperty(s)&&N.mixins(e,n.mixins);for(var l in n)if(n.hasOwnProperty(l)&&l!==s){var u=n[l],c=r.hasOwnProperty(l);if(a(c,l),N.hasOwnProperty(l))N[l](e,u);else{var f=_.hasOwnProperty(l),m="function"==typeof u,E=m&&!f&&!c&&n.autobind!==!1;if(E)o.push(l,u),r[l]=u;else if(c){var y=_[l];i(f&&("DEFINE_MANY_MERGED"===y||"DEFINE_MANY"===y),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",y,l),"DEFINE_MANY_MERGED"===y?r[l]=p(r[l],u):"DEFINE_MANY"===y&&(r[l]=d(r[l],u))}else r[l]=u}}}else;}function c(e,t){if(t)for(var n in t){var r=t[n];if(t.hasOwnProperty(n)){var a=n in N;i(!a,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var o=n in e;if(o){var l=g.hasOwnProperty(n)?g[n]:null;return i("DEFINE_MANY_MERGED"===l,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(e[n]=p(e[n],r))}e[n]=r}}}function f(e,t){i(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(i(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function p(e,t){return function(){var n=e.apply(this,arguments),r=t.apply(this,arguments);if(null==n)return r;if(null==r)return n;var a={};return f(a,n),f(a,r),a}}function d(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function m(e,t){var n=t.bind(e);return n}function E(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var r=t[n],a=t[n+1];e[r]=m(e,a)}}function y(e){var t=r(function(e,r,a){this.__reactAutoBindPairs.length&&E(this),this.props=e,this.context=r,this.refs=u,this.updater=a||n,this.state=null;var o=this.getInitialState?this.getInitialState():null;i("object"==typeof o&&!Array.isArray(o),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=o});t.prototype=new D,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],h.forEach(o.bind(null,t)),o(t,v),o(t,e),o(t,b),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),i(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var a in _)t.prototype[a]||(t.prototype[a]=null);return t}var h=[],_={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},g={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},N={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)o(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=l({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=l({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=p(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=l({},e.propTypes,t)},statics:function(e,t){c(e,t)},autobind:function(){}},v={componentDidMount:function(){this.__isMounted=!0}},b={componentWillUnmount:function(){this.__isMounted=!1}},M={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},D=function(){};return l(D.prototype,e.prototype,M),y}var o,l=n(5),u=n(34),i=n(1),s="mixins";o={},e.exports=a},156:function(e,t){"use strict";function n(e,t,f){if("string"!=typeof t){if(c){var p=s(t);p&&p!==c&&n(e,p,f)}var d=l(t);u&&(d=d.concat(u(t)));for(var m=0;m<d.length;++m){var E=d[m];if(!(r[E]||a[E]||f&&f[E])){var y=i(t,E);try{o(e,E,y)}catch(e){}}}return e}return e}var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,l=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,c=s&&s(Object);e.exports=n},5:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function r(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach(function(e){a[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(e){return!1}}var a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;e.exports=r()?Object.assign:function(e,t){for(var r,u,i=n(e),s=1;s<arguments.length;s++){r=Object(arguments[s]);for(var c in r)o.call(r,c)&&(i[c]=r[c]);if(a){u=a(r);for(var f=0;f<u.length;f++)l.call(r,u[f])&&(i[u[f]]=r[u[f]])}}return i}},202:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),o=r(a),l=n(47),u=r(l),i=function(e){var t=e.prev,n=e.next;return o.default.createElement("nav",{className:"paging container","aria-label":"Paging"},o.default.createElement(u.default,{className:"paging__item",role:"menuitem",to:t.slug},o.default.createElement("small",null,"Previous"),o.default.createElement("h4",null,t.name),o.default.createElement("p",null,t.description)),o.default.createElement(u.default,{className:"paging__item",role:"menuitem",to:n.slug},o.default.createElement("small",null,"Next"),o.default.createElement("h4",null,n.name),o.default.createElement("p",null,t.description)))};t.default=i,e.exports=t.default},203:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),o=r(a),l=function(e){var t=e.html;return o.default.createElement("section",{className:"container panel content"},o.default.createElement("div",{dangerouslySetInnerHTML:{__html:t}}))};t.default=l,e.exports=t.default},204:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),o=r(a),l=function(e){var t=e.text,n=e.media,r=n?"no-repeat url("+n.file.url+") center center":"none";return o.default.createElement("section",{className:"panel headerPanel",style:{background:r}},o.default.createElement("div",{className:"container"},o.default.createElement("h1",null,t)))};t.default=l,e.exports=t.default},205:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),o=r(a),l=function(e){var t=e.text;return o.default.createElement("section",{className:"panel hero container"},o.default.createElement("h1",null,t))};t.default=l,e.exports=t.default},206:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),o=r(a),l=function(e){var t=e.src,n=e.alt;return o.default.createElement("section",{className:"container"},o.default.createElement("img",{src:t,alt:n}))};t.default=l,e.exports=t.default},207:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),o=r(a),l=n(47),u=r(l),i=function(e){var t=e.text,n=e.pages;return o.default.createElement("section",{className:"panel pageSelector container"},o.default.createElement("h2",null,t),o.default.createElement("div",{className:"pageSelector__items"},n.map(function(e){var t=e.thumbnail,n=e.name,r=e.slug,a=e.description;return o.default.createElement("article",{className:"pageSelector__item",key:n},t&&o.default.createElement("img",{src:t.file.url}),o.default.createElement("h3",null,o.default.createElement(u.default,{to:r},n)),a&&o.default.createElement("p",null,a))})))};t.default=i,e.exports=t.default},208:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=e.type,n=e.data;switch(t){case"ContentfulHeroPanel":return l.default.createElement(i.default,{text:n.text});case"ContentfulPageSelectorPanel":return l.default.createElement(c.default,{text:n.text,pages:n.pages});case"ContentfulHeaderPanel":return l.default.createElement(p.default,{text:n.text,media:n.media});case"ContentfulImagePanel":return l.default.createElement(m.default,{src:n.media.file.url});case"ContentfulContentPanel":return l.default.createElement(y.default,{html:n.content.childMarkdownRemark.html});default:return null}}t.__esModule=!0;var o=n(2),l=r(o),u=n(205),i=r(u),s=n(207),c=r(s),f=n(204),p=r(f),d=n(206),m=r(d),E=n(203),y=r(E);t.default=a,e.exports=t.default},212:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){return e.findIndex(function(e){return e.slug===t})}function i(e,t){var n=e.length-1,r=t+1;return r>n?e[0]:e[r]}function s(e,t){var n=e.length,r=t-1;return r<0?e[n-1]:e[r]}t.__esModule=!0,t.pageQuery=void 0;var c=n(2),f=r(c),p=n(208),d=r(p),m=n(202),E=r(m),y=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.data.contentfulPage,t=(e.name,e.slug),n=e.panels,r=this.props.data.contentfulPageSelectorPanel.pages,a=u(r,t),o=i(r,a),l=s(r,a);return f.default.createElement("main",null,f.default.createElement("article",null,n&&n.map(function(e){var t=e.__typename;return f.default.createElement(d.default,{key:t,type:t,data:e})})),t.startsWith("/projects")&&f.default.createElement(E.default,{prev:l,next:o}))},t}(f.default.Component);t.default=y;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-page-template-js-e8880da75661b9c51c46.js.map
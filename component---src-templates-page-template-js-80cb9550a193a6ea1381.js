webpackJsonp([0xd5d9d741ef0b],{100:function(e,t,n){"use strict";function a(e){return e}function r(e,t,n){function r(e,t){var n=y.hasOwnProperty(t)?y[t]:null;M.hasOwnProperty(t)&&i("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&i("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function o(e,n){if(n){i("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),i(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var a=e.prototype,o=a.__reactAutoBindPairs;n.hasOwnProperty(s)&&N.mixins(e,n.mixins);for(var l in n)if(n.hasOwnProperty(l)&&l!==s){var u=n[l],c=a.hasOwnProperty(l);if(r(c,l),N.hasOwnProperty(l))N[l](e,u);else{var f=y.hasOwnProperty(l),m="function"==typeof u,E=m&&!f&&!c&&n.autobind!==!1;if(E)o.push(l,u),a[l]=u;else if(c){var _=y[l];i(f&&("DEFINE_MANY_MERGED"===_||"DEFINE_MANY"===_),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",_,l),"DEFINE_MANY_MERGED"===_?a[l]=p(a[l],u):"DEFINE_MANY"===_&&(a[l]=d(a[l],u))}else a[l]=u}}}else;}function c(e,t){if(t)for(var n in t){var a=t[n];if(t.hasOwnProperty(n)){var r=n in N;i(!r,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var o=n in e;if(o){var l=g.hasOwnProperty(n)?g[n]:null;return i("DEFINE_MANY_MERGED"===l,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(e[n]=p(e[n],a))}e[n]=a}}}function f(e,t){i(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(i(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function p(e,t){return function(){var n=e.apply(this,arguments),a=t.apply(this,arguments);if(null==n)return a;if(null==a)return n;var r={};return f(r,n),f(r,a),r}}function d(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function m(e,t){var n=t.bind(e);return n}function E(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var a=t[n],r=t[n+1];e[a]=m(e,r)}}function _(e){var t=a(function(e,a,r){this.__reactAutoBindPairs.length&&E(this),this.props=e,this.context=a,this.refs=u,this.updater=r||n,this.state=null;var o=this.getInitialState?this.getInitialState():null;i("object"==typeof o&&!Array.isArray(o),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=o});t.prototype=new P,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],h.forEach(o.bind(null,t)),o(t,v),o(t,e),o(t,b),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),i(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var r in y)t.prototype[r]||(t.prototype[r]=null);return t}var h=[],y={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},g={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},N={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)o(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=l({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=l({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=p(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=l({},e.propTypes,t)},statics:function(e,t){c(e,t)},autobind:function(){}},v={componentDidMount:function(){this.__isMounted=!0}},b={componentWillUnmount:function(){this.__isMounted=!1}},M={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},P=function(){};return l(P.prototype,e.prototype,M),_}var o,l=n(5),u=n(34),i=n(1),s="mixins";o={},e.exports=r},156:function(e,t){"use strict";function n(e,t,f){if("string"!=typeof t){if(c){var p=s(t);p&&p!==c&&n(e,p,f)}var d=l(t);u&&(d=d.concat(u(t)));for(var m=0;m<d.length;++m){var E=d[m];if(!(a[E]||r[E]||f&&f[E])){var _=i(t,E);try{o(e,E,_)}catch(e){}}}return e}return e}var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,l=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,c=s&&s(Object);e.exports=n},5:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function a(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var a=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==a.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;e.exports=a()?Object.assign:function(e,t){for(var a,u,i=n(e),s=1;s<arguments.length;s++){a=Object(arguments[s]);for(var c in a)o.call(a,c)&&(i[c]=a[c]);if(r){u=r(a);for(var f=0;f<u.length;f++)l.call(a,u[f])&&(i[u[f]]=a[u[f]])}}return i}},202:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),o=a(r),l=n(35),u=a(l),i=function(e){var t=e.prev,n=e.next;return o.default.createElement("nav",{className:"paging container","aria-label":"Paging"},o.default.createElement(u.default,{className:"paging__item",role:"menuitem",to:t.slug},o.default.createElement("small",null,"Previous"),o.default.createElement("h4",null,t.name),o.default.createElement("p",null,t.description)),o.default.createElement(u.default,{className:"paging__item",role:"menuitem",to:n.slug},o.default.createElement("small",null,"Next"),o.default.createElement("h4",null,n.name),o.default.createElement("p",null,t.description)))};t.default=i,e.exports=t.default},203:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),o=a(r),l=function(e){var t=e.html;return o.default.createElement("section",{className:"container panel content"},o.default.createElement("div",{dangerouslySetInnerHTML:{__html:t}}))};t.default=l,e.exports=t.default},204:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),o=a(r),l=function(e){var t=e.text,n=e.media,a=n?"no-repeat url("+n.file.url+") center center":"none";return o.default.createElement("section",{className:"panel headerPanel",style:{background:a}},o.default.createElement("div",{className:"container"},o.default.createElement("h1",null,t)))};t.default=l,e.exports=t.default},205:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),o=a(r),l=function(e){var t=e.text;return o.default.createElement("section",{className:"panel hero container"},o.default.createElement("h1",null,t))};t.default=l,e.exports=t.default},206:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),o=a(r),l=function(e){var t=e.src,n=e.alt;return o.default.createElement("section",{className:"container"},o.default.createElement("img",{src:t,alt:n}))};t.default=l,e.exports=t.default},207:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){return e.length>t?e.substring(0,t)+"...":e}t.__esModule=!0;var o=n(2),l=a(o),u=n(35),i=a(u),s=function(e){var t=(e.text,e.pages);return l.default.createElement("section",{className:"panel pageSelector container"},l.default.createElement("div",{className:"pageSelector__items"},t.map(function(e){var t=e.name,n=e.slug,a=e.description;return l.default.createElement("article",{className:"pageSelector__item",key:t},l.default.createElement(i.default,{className:"pageSelector__a",to:n},l.default.createElement("h3",{className:"pageSelector__title"},t),a&&l.default.createElement("p",{className:"pageSelector__content"},r(a,100))))})))};t.default=s,e.exports=t.default},208:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),o=a(r),l=n(35),u=a(l),i=function(){return o.default.createElement("section",{className:"container panel selectorPanel"},o.default.createElement("h4",{className:"selectorPanel__header"},"EXPLORATIONS AND SIDE PROJECTS"),o.default.createElement("div",{className:"selectorPanel__items"},o.default.createElement("div",{className:"selectorPanel__item"},o.default.createElement("div",null,o.default.createElement("h4",{className:"pageSelector__title"},"Blog"),o.default.createElement("p",{className:"pageSelector__content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ..."),o.default.createElement(u.default,{to:"#",className:"button"},"Learn more"))),o.default.createElement("div",{className:"selectorPanel__item"},o.default.createElement("div",null,o.default.createElement("h4",{className:"pageSelector__title"},"Blog"),o.default.createElement("p",{className:"pageSelector__content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ..."),o.default.createElement(u.default,{to:"#",className:"button"},"Learn more")))))};t.default=i,e.exports=t.default},209:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.type,n=e.data;switch(t){case"ContentfulHeroPanel":return l.default.createElement(i.default,{text:n.text});case"ContentfulPageSelectorPanel":return l.default.createElement(c.default,{text:n.text,pages:n.pages});case"ContentfulHeaderPanel":return l.default.createElement(p.default,{text:n.text,media:n.media});case"ContentfulImagePanel":return l.default.createElement(m.default,{src:n.media.file.url});case"ContentfulContentPanel":return l.default.createElement(_.default,{html:n.content.childMarkdownRemark.html});default:return null}}t.__esModule=!0;var o=n(2),l=a(o),u=n(205),i=a(u),s=n(207),c=a(s),f=n(204),p=a(f),d=n(206),m=a(d),E=n(203),_=a(E);t.default=r,e.exports=t.default},213:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){return e.findIndex(function(e){return e.slug===t})}function i(e,t){var n=e.length-1,a=t+1;return a>n?e[0]:e[a]}function s(e,t){var n=e.length,a=t-1;return a<0?e[n-1]:e[a]}t.__esModule=!0,t.pageQuery=void 0;var c=n(2),f=a(c),p=n(209),d=a(p),m=n(202),E=a(m),_=n(208),h=a(_),y=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.data.contentfulPage,t=(e.name,e.slug),n=e.panels,a=this.props.data.contentfulPageSelectorPanel.pages,r=u(a,t),o=i(a,r),l=s(a,r);return f.default.createElement("main",null,f.default.createElement("article",null,n&&n.map(function(e){var t=e.__typename;return f.default.createElement(d.default,{key:t,type:t,data:e})})),"/"===t&&f.default.createElement("div",{className:"background-alt"},f.default.createElement(h.default,null)),t.startsWith("/projects")&&f.default.createElement(E.default,{prev:l,next:o}))},t}(f.default.Component);t.default=y;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-page-template-js-80cb9550a193a6ea1381.js.map
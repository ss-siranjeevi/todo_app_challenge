(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5223:function(e,t,n){"use strict";n.d(t,{$:function(){return o}});var r=n(4799),o={signin:function(e,t,n,o){r.Z.auth().signInWithEmailAndPassword(e,t).then((function(e){return n(e)})).catch((function(e){return o&&o(e)}))},signout:function(e,t){r.Z.auth().signOut().then((function(){e("SUCCESS")})).catch((function(e){t&&t(e)}))}}},3398:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},6393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(3398);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},2775:function(e,t,n){"use strict";var r=n(1682);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=l,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),u=(a=n(3244))&&a.__esModule?a:{default:a},s=n(3398),c=n(1165),d=n(6393);function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?a=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var s=0,c=h.length;s<c;s++){var d=h[s];if(o.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?a=!1:n.add(d);else{var f=o.props[d],l=r[d]||new Set;"name"===d&&i||!l.has(f)?(l.add(f),r[d]=l):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return u["data-href"]=u.href,u.href=void 0,u["data-optimized-fonts"]=!0,i.default.cloneElement(e,u)}return i.default.cloneElement(e,{key:a})}))}var m=function(e){var t=e.children,n=(0,i.useContext)(s.AmpStateContext),r=(0,i.useContext)(c.HeadManagerContext);return i.default.createElement(u.default,{reduceComponentsToState:v,headManager:r,inAmpMode:(0,d.isInAmpMode)(n)},t)};t.default=m},3244:function(e,t,n){"use strict";var r=n(3115),o=n(2553),a=n(2012),i=(n(450),n(9807)),u=n(7690),s=n(9828);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var d=n(7294),f=function(e){i(n,e);var t=c(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=f},2558:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(5893),o=n(809),a=n.n(o),i=n(2447),u=n(1163),s=n(7294),c=n(2014),d=n(5223),f=function(){var e=(0,u.useRouter)(),t=(0,s.useState)(""),n=t[0],o=t[1],f=(0,s.useState)(""),l=f[0],p=f[1],h=(0,s.useState)(!1),v=h[0],m=h[1],y=(0,s.useState)(!1),g=y[0],x=y[1],b=(0,s.useState)(""),w=b[0],j=b[1],O=function(){var t=(0,i.Z)(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:d.$.signin(n,l,(function(t){var n;t&&(console.log(t),null!==t&&void 0!==t&&null!==(n=t.user)&&void 0!==n&&n.uid&&(localStorage.setItem("userId",t.user.uid),e.push("/home")))}),(function(e){j("Invalid Email/Password!"),console.log(e)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),S=function(e,t){switch(t){case"EMAIL":v&&m(!1),o(e);break;case"PASSWORD":g&&x(!1),p(e)}};return(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,r.jsxs)("div",{style:{margin:"25vh 0",padding:"70px",border:"1px solid #6200EE",boxShadow:"10px",borderRadius:"20px"},children:[(0,r.jsx)("div",{style:{marginBottom:"30px"},children:(0,r.jsx)(c.ZT,{style:{color:"#6200EE"},use:"headline4",children:"Welcome to Todo-App"})}),(0,r.jsx)("div",{style:{margin:"22px 5px"},children:(0,r.jsx)(c.nv,{invalid:v,label:"Email Address",outlined:!0,style:{width:"20vw",height:"40px"},onChange:function(e){return S(e.target.value,"EMAIL")}})}),(0,r.jsx)("div",{style:{margin:"28px 5px",marginBottom:"0"},children:(0,r.jsx)(c.nv,{invalid:g,label:"Password",type:"password",outlined:!0,style:{width:"20vw",height:"40px"},onChange:function(e){return S(e.target.value,"PASSWORD")}})}),(0,r.jsx)(c.ZT,{use:"caption",style:{color:"#FF0000",marginLeft:"10px"},children:v&&g?"Email/Password cannot be empty!":v?"Email cannot be empty!":g?"Password cannot be empty!":w||""}),(0,r.jsx)("div",{style:{marginTop:v||g?"10px":"0",marginRight:"15px",justifyContent:"flex-end",display:"flex"},children:(0,r.jsx)(c.zx,{raised:!0,onClick:function(){n||l?n?l?O():x(!0):m(!0):(m(!0),x(!0))},children:"Login"})})]})})},l=(n(1169),n(9008));function p(){return(0,r.jsxs)(s.Fragment,{children:[(0,r.jsxs)(l.default,{children:[(0,r.jsx)("title",{children:"Todo App"}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,r.jsx)(f,{})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2558)}])},9008:function(e,t,n){e.exports=n(2775)},8164:function(e,t,n){var r=n(4360);e.exports=function(e){if(Array.isArray(e))return r(e)}},1682:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,n){var r=n(8164),o=n(7381),a=n(3585),i=n(5725);e.exports=function(e){return r(e)||o(e)||a(e)||i()}}},function(e){e.O(0,[300,724,24,482,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
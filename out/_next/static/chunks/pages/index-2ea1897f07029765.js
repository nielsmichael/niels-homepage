(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9401:function(e,r,n){var t={"./404/en":[6132,132],"./404/en.js":[6132,132],"./404/ja":[315,315],"./404/ja.js":[315,315],"./about/en":[4356,356],"./about/en.js":[4356,356],"./about/ja":[5382,382],"./about/ja.js":[5382,382],"./index/en":[809,809],"./index/en.js":[809,809],"./index/ja":[7302,302],"./index/ja.js":[7302,302]};function i(e){if(!n.o(t,e))return Promise.resolve().then((function(){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}));var r=t[e],i=r[0];return n.e(r[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(t)},i.id=9401,e.exports=i},4651:function(e,r,n){"use strict";n.d(r,{Ee:function(){return h}});var t=n(6052),i=n(5031),l=n(7294),a=n(4697);function c(){return c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},c.apply(this,arguments)}function o(e,r){if(null==e)return{};var n,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}var s=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"],d=l.forwardRef((function(e,r){var n=e.htmlWidth,t=e.htmlHeight,i=e.alt,a=o(e,s);return l.createElement("img",c({width:n,height:t,ref:r,alt:i},a))})),h=(0,t.Gp)((function(e,r){var n=e.fallbackSrc,s=e.fallback,h=e.src,f=e.srcSet,x=e.align,j=e.fit,g=e.loading,b=e.ignoreFallback,m=e.crossOrigin,p=e.fallbackStrategy,v=void 0===p?"beforeLoadOrError":p,_=e.referrerPolicy,y=o(e,u),O=null!=g||b||!(void 0!==n||void 0!==s),k=function(e){var r=e.loading,n=e.src,t=e.srcSet,i=e.onLoad,c=e.onError,o=e.crossOrigin,s=e.sizes,u=e.ignoreFallback,d=(0,l.useState)("pending"),h=d[0],f=d[1];(0,l.useEffect)((function(){f(n?"loading":"pending")}),[n]);var x=(0,l.useRef)(),j=(0,l.useCallback)((function(){if(n){g();var e=new Image;e.src=n,o&&(e.crossOrigin=o),t&&(e.srcset=t),s&&(e.sizes=s),r&&(e.loading=r),e.onload=function(e){g(),f("loaded"),null==i||i(e)},e.onerror=function(e){g(),f("failed"),null==c||c(e)},x.current=e}}),[n,o,t,s,i,c,r]),g=function(){x.current&&(x.current.onload=null,x.current.onerror=null,x.current=null)};return(0,a.a)((function(){if(!u)return"loading"===h&&j(),function(){g()}}),[h,j,u]),u?"loaded":h}(c({},e,{ignoreFallback:O})),w=function(e,r){return"loaded"!==e&&"beforeLoadOrError"===r||"failed"===e&&"onError"===r}(k,v),E=c({ref:r,objectFit:j,objectPosition:x},O?y:(0,i.CE)(y,["onError","onLoad"]));return w?s||l.createElement(t.m$.img,c({as:d,className:"chakra-image__placeholder",src:n},E)):l.createElement(t.m$.img,c({as:d,src:h,srcSet:f,crossOrigin:m,loading:g,referrerPolicy:_,className:"chakra-image"},E))}));i.Ts&&(h.displayName="Image")},5557:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2769)}])},6024:function(e,r,n){"use strict";function t(){var e,r,n=(e=["\ntext-align: justify;\ntext-indent: 1.1em;\n"],r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}})));return t=function(){return n},n}var i=n(6829).Z.p(t());r.Z=i},9503:function(e,r,n){"use strict";n.d(r,{n:function(){return l}});var t=n(7294),i=n(1163),l=function(e){var r=(0,i.useRouter)().locale,l=(0,t.useState)({}),a=l[0],c=l[1];return(0,t.useEffect)((function(){e&&n(9401)("./".concat(e,"/").concat(r)).then((function(e){c(e.default)}))}),[r]),a}},2265:function(e,r,n){"use strict";n.d(r,{Z:function(){return u}});var t=n(5893),i=n(8970),l=n(9008),a=n.n(l),c=(n(5675),n(917)),o=function(){return(0,t.jsx)(c.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n      }\n    "})},s={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:0,y:20}},u=function(e){var r=e.children,n=e.title;return(0,t.jsx)(i.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:s,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,t.jsxs)(t.Fragment,{children:[n&&(0,t.jsx)(a(),{children:(0,t.jsxs)("title",{children:[n," - Niels Michael"]})}),r,(0,t.jsx)(o,{})]})})}},2112:function(e,r,n){"use strict";var t=n(5893),i=n(8970),l=n(6052),a=(0,l.m$)(i.E.div,{shouldForwardProp:function(e){return(0,l.x9)(e)||"transition"===e}});r.Z=function(e){var r=e.children,n=e.delay,i=void 0===n?0:n;return(0,t.jsx)(a,{initial:{y:10,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8,delay:i},mb:6,children:r})}},2769:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return z}});var t=n(5893),i=n(1664),l=n.n(i),a=n(8527),c=n(949),o=n(4651),s=n(5193),u=n(894),d=n(9876),h=n(2265),f=n(2112),x=n(6024),j=n(6829);function g(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}function b(){var e=g(["\n  padding-left: 2.4em;\n  padding-right: -2.4em;\n"]);return b=function(){return e},e}function m(){var e=g(["\n  font-weight: 600;\n  margin-right: 1.1em;\n"]);return m=function(){return e},e}var p=(0,j.Z)(a.xu)(b()),v=j.Z.span(m()),_=n(155);function y(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}function O(){var e=y(["\n  padding-left: 2.4em;\n  padding-right: -2.4em;\n"]);return O=function(){return e},e}function k(){var e=y(["\n  font-weight: 600;\n"]);return k=function(){return e},e}var w=j.Z.p(O()),E=j.Z.span(k()),N=n(9503),z=function(){var e=(0,N.n)("index");return(0,t.jsx)(h.Z,{children:(0,t.jsxs)(a.W2,{children:[(0,t.jsx)(a.xu,{borderRadius:"lg",bg:(0,c.ff)("#009EF6","#184B68"),p:3,mb:6,align:"center",children:e.tag_text}),(0,t.jsxs)(a.xu,{display:{md:"flex"},children:[(0,t.jsxs)(a.xu,{flexGrow:1,children:[(0,t.jsx)(a.X6,{as:"h2",variant:"page-title",children:e.hero_name}),(0,t.jsx)("p",{children:e.sub_title})]}),(0,t.jsx)(a.xu,{flexShrink:0,mt:{base:4,md:0},ml:{md:6},align:"center",children:(0,t.jsx)(o.Ee,{borderColor:"#E7ECEF",borderWidth:2,borderStyle:"solid",maxWidth:"100px",display:"inline-block",borderRadius:"full",src:"/img/niels.jpg",alt:"Niels Michael Website Profile Image"})})]}),(0,t.jsxs)(f.Z,{delay:.1,children:[(0,t.jsx)(a.X6,{as:"h3",variant:"section-title",children:"Work"}),(0,t.jsxs)(x.Z,{children:[e.work_text_a,(0,t.jsx)(l(),{href:"/work/makoto-investments",children:(0,t.jsx)(a.rU,{children:e.work_company_span})})," ",e.work_text_b]}),(0,t.jsx)(a.xu,{align:"center",my:4,children:(0,t.jsx)(l(),{href:"/work",children:(0,t.jsx)(s.zx,{rightIcon:(0,t.jsx)(d.XC,{}),bg:"#009EF6",color:"black",_hover:{bg:"#00C3FB"},children:e.work_btn_text})})})]}),(0,t.jsxs)(f.Z,{delay:.2,children:[(0,t.jsx)(a.X6,{as:"h3",variant:"section-title",children:"Skills"}),(0,t.jsxs)(w,{children:[(0,t.jsx)(E,{children:e.skills_title}),e.skills_text]}),(0,t.jsxs)(w,{children:[(0,t.jsx)(E,{children:e.languages_title}),e.languages_text]}),(0,t.jsxs)(w,{children:[(0,t.jsx)(E,{children:e.technical_title}),e.technical_text]}),(0,t.jsxs)(w,{children:[(0,t.jsx)(E,{children:e.learning_title}),e.learning_text]})]}),(0,t.jsxs)(f.Z,{delay:.3,children:[(0,t.jsx)(a.X6,{as:"h3",variant:"section-title",children:"Bio"}),(0,t.jsxs)(p,{children:[(0,t.jsx)(v,{children:"1996"}),e.bio_1996_text]}),(0,t.jsxs)(p,{children:[(0,t.jsx)(v,{children:"2015"}),e.bio_2015_text]}),(0,t.jsxs)(p,{children:[(0,t.jsx)(v,{children:"2016"}),e.bio_2016_text]}),(0,t.jsxs)(p,{children:[(0,t.jsx)(v,{children:"2020"}),e.bio_2020_text_a]}),(0,t.jsxs)(p,{children:[(0,t.jsx)(v,{children:"2020"}),e.bio_2020_text_b]}),(0,t.jsxs)(p,{children:[(0,t.jsx)(v,{children:"2021"}),e.bio_2021_text]})]}),(0,t.jsxs)(f.Z,{delay:.4,children:[(0,t.jsx)(a.X6,{as:"h3",variant:"section-title",children:"Fun things I like"}),(0,t.jsxs)(x.Z,{children:[(0,t.jsx)(a.rU,{target:"_blank",rel:"noreferrer",href:"https://ghostwife.bandcamp.com/",children:e.fun_text_gtr}),e.fun_text]})]}),(0,t.jsxs)(f.Z,{delay:.5,children:[(0,t.jsx)(a.X6,{as:"h3",variant:"section-title",children:"On the web"}),(0,t.jsxs)(a.aV,{children:[(0,t.jsx)(a.HC,{children:(0,t.jsx)(a.rU,{href:"https://github.com/nielsmichael",target:"_blank",rel:"noreferrer",children:(0,t.jsx)(s.zx,{variant:"ghost",colorScheme:"blue",leftIcon:(0,t.jsx)(u.JO,{as:_.JOq}),children:"@nielsmichael"})})}),(0,t.jsx)(a.HC,{children:(0,t.jsx)(a.rU,{href:"https://www.instagram.com/nielzthephotographer/",target:"_blank",rel:"noreferrer",children:(0,t.jsx)(s.zx,{variant:"ghost",colorScheme:"blue",leftIcon:(0,t.jsx)(u.JO,{as:_.oVe}),children:"@nielzthephotographer"})})})]})]})]})})}},8357:function(e,r,n){"use strict";n.d(r,{w_:function(){return s}});var t=n(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=t.createContext&&t.createContext(i),a=function(){return a=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var i in r=arguments[n])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},a.apply(this,arguments)},c=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]])}return n};function o(e){return e&&e.map((function(e,r){return t.createElement(e.tag,a({key:r},e.attr),o(e.child))}))}function s(e){return function(r){return t.createElement(u,a({attr:a({},e.attr)},r),o(e.child))}}function u(e){var r=function(r){var n,i=e.attr,l=e.size,o=e.title,s=c(e,["attr","size","title"]),u=l||r.size||"1em";return r.className&&(n=r.className),e.className&&(n=(n?n+" ":"")+e.className),t.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,i,s,{className:n,style:a(a({color:e.color||r.color},r.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&t.createElement("title",null,o),e.children)};return void 0!==l?t.createElement(l.Consumer,null,(function(e){return r(e)})):r(i)}}},function(e){e.O(0,[260,774,888,179],(function(){return r=5557,e(e.s=r);var r}));var r=e.O();_N_E=r}]);
"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[49885],{3905:function(e,r,n){n.d(r,{Zo:function(){return f},kt:function(){return g}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),p=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},f=function(e){var r=p(e.components);return t.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},l=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),l=p(n),g=o,m=l["".concat(u,".").concat(g)]||l[g]||s[g]||c;return n?t.createElement(m,a(a({ref:r},f),{},{components:n})):t.createElement(m,a({ref:r},f))}));function g(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=l;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<c;p++)a[p]=n[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}l.displayName="MDXCreateElement"},67441:function(e,r,n){n.r(r),n.d(r,{assets:function(){return f},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var t=n(87462),o=n(63366),c=(n(67294),n(3905)),a=["components"],i={sidebar_position:36},u="covarPop",p={unversionedId:"ru/sql-reference/aggregate-functions/reference/covarpop",id:"ru/sql-reference/aggregate-functions/reference/covarpop",title:"covarPop",description:"covarpop}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/covarpop.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/covarpop",permalink:"/ru/sql-reference/aggregate-functions/reference/covarpop",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/covarpop.md",tags:[],version:"current",sidebarPosition:36,frontMatter:{sidebar_position:36},sidebar:"russia",previous:{title:"varSamp",permalink:"/ru/sql-reference/aggregate-functions/reference/varsamp"},next:{title:"covarSamp",permalink:"/ru/sql-reference/aggregate-functions/reference/covarsamp"}},f={},s=[],l={toc:s};function g(e){var r=e.components,n=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"covarpop"},"covarPop"),(0,c.kt)("p",null,"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441: ",(0,c.kt)("inlineCode",{parentName:"p"},"covarPop(x, y)")),(0,c.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u0443 ",(0,c.kt)("inlineCode",{parentName:"p"},"\u03a3((x - x\u0305)(y - y\u0305)) / n"),"."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},':::note "\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"\n\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043d\u0435\u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u044b\u0439 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c. \u0415\u0441\u043b\u0438 \u0434\u043b\u044f \u0432\u0430\u0448\u0438\u0445 \u0440\u0430\u0441\u0447\u0451\u0442\u043e\u0432 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0430 [\u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u043e\u0441\u0442\u044c](https://ru.wikipedia.org/wiki/\u0412\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f_\u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u043e\u0441\u0442\u044c), \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044e `covarPopStable`. \u041e\u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u0435\u0435, \u043d\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043c\u0435\u043d\u044c\u0448\u0443\u044e \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u0443\u044e \u043e\u0448\u0438\u0431\u043a\u0443.\n:::\n')))}g.isMDXComponent=!0}}]);
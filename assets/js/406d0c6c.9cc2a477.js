"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[36164],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return d}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(t),d=i,y=f["".concat(u,".").concat(d)]||f[d]||p[d]||o;return t?n.createElement(y,a(a({ref:r},l),{},{components:t})):n.createElement(y,a({ref:r},l))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},85426:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],c={sidebar_position:44,sidebar_label:"String"},u="String",s={unversionedId:"ru/sql-reference/data-types/string",id:"ru/sql-reference/data-types/string",title:"String",description:"string}",source:"@site/docs/ru/sql-reference/data-types/string.md",sourceDirName:"ru/sql-reference/data-types",slug:"/ru/sql-reference/data-types/string",permalink:"/ru/sql-reference/data-types/string",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/data-types/string.md",tags:[],version:"current",sidebarPosition:44,frontMatter:{sidebar_position:44,sidebar_label:"String"},sidebar:"russia",previous:{title:"\u0411\u0443\u043b\u0435\u0432\u044b \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f",permalink:"/ru/sql-reference/data-types/boolean"},next:{title:"FixedString(N)",permalink:"/ru/sql-reference/data-types/fixedstring"}},l={},p=[{value:"\u041a\u043e\u0434\u0438\u0440\u043e\u0432\u043a\u0438",id:"kodirovki",level:2}],f={toc:p};function d(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"string"},"String"),(0,o.kt)("p",null,"\u0421\u0442\u0440\u043e\u043a\u0438 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0439 \u0434\u043b\u0438\u043d\u044b. \u0414\u043b\u0438\u043d\u0430 \u043d\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0430. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u0439 \u043d\u0430\u0431\u043e\u0440 \u0431\u0430\u0439\u0442, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u043d\u0443\u043b\u0435\u0432\u044b\u0435 \u0431\u0430\u0439\u0442\u044b.\n\u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0442\u0438\u043f String \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u0442 \u0442\u0438\u043f\u044b VARCHAR, BLOB, CLOB \u0438 \u0442. \u043f. \u0438\u0437 \u0434\u0440\u0443\u0433\u0438\u0445 \u0421\u0423\u0411\u0414."),(0,o.kt)("p",null,"\u041f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0442\u0430\u0431\u043b\u0438\u0446 \u0434\u043b\u044f \u0441\u0442\u0440\u043e\u043a \u043c\u043e\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u0432\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,o.kt)("inlineCode",{parentName:"p"},"VARCHAR(255)"),"), \u043d\u043e \u0421lickHouse \u0438\u0445 \u043f\u0440\u043e\u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u0435\u0442."),(0,o.kt)("h2",{id:"kodirovki"},"\u041a\u043e\u0434\u0438\u0440\u043e\u0432\u043a\u0438"),(0,o.kt)("p",null,"\u0412 ClickHouse \u043d\u0435\u0442 \u043f\u043e\u043d\u044f\u0442\u0438\u044f \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u043e\u043a. \u0421\u0442\u0440\u043e\u043a\u0438 \u043c\u043e\u0433\u0443\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u0439 \u043d\u0430\u0431\u043e\u0440 \u0431\u0430\u0439\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0438 \u0432\u044b\u0432\u043e\u0434\u0438\u0442\u0441\u044f, \u043a\u0430\u043a \u0435\u0441\u0442\u044c.\n\u0415\u0441\u043b\u0438 \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442\u044b, \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u043a\u0443 UTF-8. \u041f\u043e \u043a\u0440\u0430\u0439\u043d\u0435\u0439 \u043c\u0435\u0440\u0435, \u0435\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0432 \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u043a\u0435 UTF-8 (\u044d\u0442\u043e \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f), \u0432\u044b \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u0447\u0438\u0442\u0430\u0442\u044c \u0438 \u043f\u0438\u0441\u0430\u0442\u044c \u0441\u0432\u043e\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0431\u0435\u0437 \u043a\u0430\u043a\u0438\u0445-\u043b\u0438\u0431\u043e \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0439.\n\u0422\u0430\u043a\u0436\u0435, \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u043e \u0440\u0430\u0431\u043e\u0442\u0435 \u0441\u043e \u0441\u0442\u0440\u043e\u043a\u0430\u043c\u0438, \u0438\u043c\u0435\u044e\u0442 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u043f\u0440\u0438 \u0434\u043e\u043f\u0443\u0449\u0435\u043d\u0438\u0438, \u0447\u0442\u043e \u0441\u0442\u0440\u043e\u043a\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043d\u0430\u0431\u043e\u0440 \u0431\u0430\u0439\u0442, \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u0442\u0435\u043a\u0441\u0442 \u0432 \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u043a\u0435 UTF-8.\n\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0444\u0443\u043d\u043a\u0446\u0438\u044f length \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u0434\u043b\u0438\u043d\u0443 \u0441\u0442\u0440\u043e\u043a\u0438 \u0432 \u0431\u0430\u0439\u0442\u0430\u0445, \u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f lengthUTF8 - \u0434\u043b\u0438\u043d\u0443 \u0441\u0442\u0440\u043e\u043a\u0438 \u0432 \u043a\u043e\u0434\u043e\u0432\u044b\u0445 \u0442\u043e\u0447\u043a\u0430\u0445 Unicode, \u043f\u0440\u0438 \u0434\u043e\u043f\u0443\u0449\u0435\u043d\u0438\u0438, \u0447\u0442\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432 \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u043a\u0435 UTF-8."))}d.isMDXComponent=!0}}]);
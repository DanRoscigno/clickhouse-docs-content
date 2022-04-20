"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[41738],{3905:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return g}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),p=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=p(e.components);return t.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(n),g=o,y=f["".concat(u,".").concat(g)]||f[g]||s[g]||a;return n?t.createElement(y,i(i({ref:r},l),{},{components:n})):t.createElement(y,i({ref:r},l))}));function g(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13033:function(e,r,n){n.r(r),n.d(r,{assets:function(){return l},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var t=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={sidebar_position:110},u="groupArray",p={unversionedId:"ru/sql-reference/aggregate-functions/reference/grouparray",id:"ru/sql-reference/aggregate-functions/reference/grouparray",title:"groupArray",description:"agg_function-grouparray}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/grouparray.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/grouparray",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/grouparray",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/grouparray.md",tags:[],version:"current",sidebarPosition:110,frontMatter:{sidebar_position:110},sidebar:"russia",previous:{title:"topKWeighted",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/topkweighted"},next:{title:"groupUniqArray",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/groupuniqarray"}},l={},s=[],f={toc:s};function g(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"agg_function-grouparray"},"groupArray"),(0,a.kt)("p",null,"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441: ",(0,a.kt)("inlineCode",{parentName:"p"},"groupArray(x)")," \u0438\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"groupArray(max_size)(x)")),(0,a.kt)("p",null,"\u0421\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043c\u0430\u0441\u0441\u0438\u0432 \u0438\u0437 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430.\n\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u043c\u0430\u0441\u0441\u0438\u0432 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0432 \u043b\u044e\u0431\u043e\u043c (\u043d\u0435\u0434\u0435\u0442\u0435\u0440\u043c\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c) \u043f\u043e\u0440\u044f\u0434\u043a\u0435."),(0,a.kt)("p",null,"\u0412\u0442\u043e\u0440\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f (\u0441 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"max_size"),") \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u0440\u0430\u0437\u043c\u0435\u0440 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u044e\u0449\u0435\u0433\u043e \u043c\u0430\u0441\u0441\u0438\u0432\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"max_size")," \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c\u0438.\n\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,a.kt)("inlineCode",{parentName:"p"},"groupArray(1)(x)")," \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e ",(0,a.kt)("inlineCode",{parentName:"p"},"[any(x)]"),"."),(0,a.kt)("p",null,"\u0412 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445, \u0432\u044b \u0432\u0441\u0451 \u0436\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u043d\u0430 \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430. \u042d\u0442\u043e \u2014 \u0441\u043b\u0443\u0447\u0430\u0438, \u043a\u043e\u0433\u0434\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0438\u0434\u0451\u0442 \u0438\u0437 \u043f\u043e\u0434\u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER BY"),"."))}g.isMDXComponent=!0}}]);
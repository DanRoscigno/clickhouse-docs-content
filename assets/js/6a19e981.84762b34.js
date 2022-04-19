"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[85595],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return g}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),f=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=f(e.components);return t.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=f(r),g=o,y=p["".concat(u,".").concat(g)]||p[g]||s[g]||a;return r?t.createElement(y,c(c({ref:n},l),{},{components:r})):t.createElement(y,c({ref:n},l))}));function g(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var f=2;f<a;f++)c[f]=r[f];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},42679:function(e,n,r){r.r(n),r.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return i},metadata:function(){return f},toc:function(){return s}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],i={sidebar_position:6},u="any",f={unversionedId:"ru/sql-reference/aggregate-functions/reference/any",id:"ru/sql-reference/aggregate-functions/reference/any",title:"any",description:"agg_function-any}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/any.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/any",permalink:"/ru/sql-reference/aggregate-functions/reference/any",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/any.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"russia",previous:{title:"avg",permalink:"/ru/sql-reference/aggregate-functions/reference/avg"},next:{title:"stddevPop",permalink:"/ru/sql-reference/aggregate-functions/reference/stddevpop"}},l={},s=[],p={toc:s};function g(e){var n=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"agg_function-any"},"any"),(0,a.kt)("p",null,"\u0412\u044b\u0431\u0438\u0440\u0430\u0435\u0442 \u043f\u0435\u0440\u0432\u043e\u0435 \u043f\u043e\u043f\u0430\u0432\u0448\u0435\u0435\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435.\n\u041f\u043e\u0440\u044f\u0434\u043e\u043a \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u043c \u0438 \u0434\u0430\u0436\u0435 \u043a\u0430\u0436\u0434\u044b\u0439 \u0440\u0430\u0437 \u0440\u0430\u0437\u043d\u044b\u043c, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0434\u0430\u043d\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043d\u0435\u0434\u0435\u0442\u0435\u0440\u043c\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u043d.\n\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0435\u0442\u0435\u0440\u043c\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430, \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u0438 min \u0438\u043b\u0438 max \u0432\u043c\u0435\u0441\u0442\u043e any."),(0,a.kt)("p",null,"\u0412 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445, \u0432\u044b \u0432\u0441\u0451-\u0442\u0430\u043a\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u043d\u0430 \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430. \u042d\u0442\u043e - \u0441\u043b\u0443\u0447\u0430\u0438, \u043a\u043e\u0433\u0434\u0430 SELECT \u0438\u0434\u0451\u0442 \u0438\u0437 \u043f\u043e\u0434\u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ORDER BY."),(0,a.kt)("p",null,"\u041f\u0440\u0438 \u043d\u0430\u043b\u0438\u0447\u0438\u0438 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"GROUP BY")," \u0438\u043b\u0438 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u043e\u0439 \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438, ClickHouse (\u0432 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, MySQL) \u0442\u0440\u0435\u0431\u0443\u0435\u0442, \u0447\u0442\u043e\u0431\u044b \u0432\u0441\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0432 \u0441\u0435\u043a\u0446\u0438\u044f\u0445 ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"HAVING"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER BY")," \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u043b\u0438\u0441\u044c \u0438\u0437 \u043a\u043b\u044e\u0447\u0435\u0439 \u0438\u043b\u0438 \u0438\u0437 \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439. \u0422\u043e \u0435\u0441\u0442\u044c, \u043a\u0430\u0436\u0434\u044b\u0439 \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u043c\u044b\u0439 \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0441\u0442\u043e\u043b\u0431\u0435\u0446, \u0434\u043e\u043b\u0436\u0435\u043d \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043b\u0438\u0431\u043e \u0432 \u043a\u043b\u044e\u0447\u0430\u0445, \u043b\u0438\u0431\u043e \u0432\u043d\u0443\u0442\u0440\u0438 \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439. \u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435, \u043a\u0430\u043a \u0432 MySQL, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u0432 \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u043d\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"."))}g.isMDXComponent=!0}}]);
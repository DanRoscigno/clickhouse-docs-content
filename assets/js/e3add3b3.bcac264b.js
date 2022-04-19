"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[85794],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},68754:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],i={sidebar_position:47,sidebar_label:"Date"},u="Date",c={unversionedId:"ru/sql-reference/data-types/date",id:"ru/sql-reference/data-types/date",title:"Date",description:"data-type-date}",source:"@site/docs/ru/sql-reference/data-types/date.md",sourceDirName:"ru/sql-reference/data-types",slug:"/ru/sql-reference/data-types/date",permalink:"/ru/sql-reference/data-types/date",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/data-types/date.md",tags:[],version:"current",sidebarPosition:47,frontMatter:{sidebar_position:47,sidebar_label:"Date"},sidebar:"russia",previous:{title:"UUID",permalink:"/ru/sql-reference/data-types/uuid"},next:{title:"Date32",permalink:"/ru/sql-reference/data-types/date32"}},p={},s=[],f={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-type-date"},"Date"),(0,o.kt)("p",null,"\u0414\u0430\u0442\u0430. \u0425\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0432 \u0434\u0432\u0443\u0445 \u0431\u0430\u0439\u0442\u0430\u0445 \u0432 \u0432\u0438\u0434\u0435 (\u0431\u0435\u0437\u0437\u043d\u0430\u043a\u043e\u0432\u043e\u0433\u043e) \u0447\u0438\u0441\u043b\u0430 \u0434\u043d\u0435\u0439, \u043f\u0440\u043e\u0448\u0435\u0434\u0448\u0438\u0445 \u043e\u0442 1970-01-01. \u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043e\u0442 \u0447\u0443\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435, \u0447\u0435\u043c \u043d\u0430\u0447\u0430\u043b\u0430 unix-\u044d\u043f\u043e\u0445\u0438 \u0434\u043e \u0432\u0435\u0440\u0445\u043d\u0435\u0433\u043e \u043f\u043e\u0440\u043e\u0433\u0430, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0449\u0435\u0433\u043e\u0441\u044f \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u043e\u0439 \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0446\u0438\u0438 (\u0441\u0435\u0439\u0447\u0430\u0441 - \u0434\u043e 2106 \u0433\u043e\u0434\u0430, \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0439 \u0433\u043e\u0434 - 2105)."),(0,o.kt)("p",null,"\u0414\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439: ","[","1970-01-01, 2149-06-06","]","."),(0,o.kt)("p",null,"\u0414\u0430\u0442\u0430 \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0431\u0435\u0437 \u0443\u0447\u0451\u0442\u0430 \u0447\u0430\u0441\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u044f\u0441\u0430."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,o.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0432 \u043d\u0435\u0451 \u0434\u0430\u043d\u043d\u044b\u0445:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE dt\n(\n    `timestamp` Date,\n    `event_id` UInt8\n)\nENGINE = TinyLog;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO dt Values (1546300800, 1), ('2019-01-01', 2);\nSELECT * FROM dt;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500timestamp\u2500\u252c\u2500event_id\u2500\u2510\n\u2502 2019-01-01 \u2502        1 \u2502\n\u2502 2019-01-01 \u2502        2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/ru/sql-reference/functions/date-time-functions"},"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0434\u0430\u0442\u043e\u0439 \u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u0435\u043c")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/ru/sql-reference/operators/#operators-datetime"},"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0434\u0430\u0442\u043e\u0439 \u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u0435\u043c")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/datetime"},"\u0422\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,o.kt)("inlineCode",{parentName:"a"},"DateTime")))))}d.isMDXComponent=!0}}]);
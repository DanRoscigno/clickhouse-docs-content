"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[93386],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(o,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14226:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],u={sidebar_position:146,sidebar_label:"intervalLengthSum"},o="intervalLengthSum",s={unversionedId:"ru/sql-reference/aggregate-functions/reference/intervalLengthSum",id:"ru/sql-reference/aggregate-functions/reference/intervalLengthSum",title:"intervalLengthSum",description:"agg_function-intervallengthsum}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/intervalLengthSum.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/intervalLengthSum",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/intervalLengthSum",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/intervalLengthSum.md",tags:[],version:"current",sidebarPosition:146,frontMatter:{sidebar_position:146,sidebar_label:"intervalLengthSum"},sidebar:"russia",previous:{title:"sumKahan",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/sumkahan"},next:{title:"skewPop",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/skewpop"}},p={},c=[],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"agg_function-intervallengthsum"},"intervalLengthSum"),(0,i.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u0434\u043b\u0438\u043d\u0443 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043e\u0432 (\u043e\u0442\u0440\u0435\u0437\u043a\u043e\u0432 \u043d\u0430 \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0439 \u043e\u0441\u0438)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"intervalLengthSum(start, end)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"start")," \u2014 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430. ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint8-uint16-uint32-uint64-int8-int16-int32-int64"},"Int32"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint8-uint16-uint32-uint64-int8-int16-int32-int64"},"Int64"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint8-uint16-uint32-uint64-int8-int16-int32-int64"},"UInt32"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint8-uint16-uint32-uint64-int8-int16-int32-int64"},"UInt64"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/float#float32-float64"},"Float32"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/float#float32-float64"},"Float64"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/datetime#data_type-datetime"},"DateTime")," \u0438\u043b\u0438 ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/date#data_type-date"},"Date"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"end")," \u2014 \u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430. ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint8-uint16-uint32-uint64-int8-int16-int32-int64"},"Int32"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint8-uint16-uint32-uint64-int8-int16-int32-int64"},"Int64"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint8-uint16-uint32-uint64-int8-int16-int32-int64"},"UInt32"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint8-uint16-uint32-uint64-int8-int16-int32-int64"},"UInt64"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/float#float32-float64"},"Float32"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/float#float32-float64"},"Float64"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/datetime#data_type-datetime"},"DateTime")," \u0438\u043b\u0438 ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/date#data_type-date"},"Date"),".")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),'"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"')),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043e\u0434\u043d\u043e\u0433\u043e \u0442\u0438\u043f\u0430. \u0412 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 ClickHouse \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435.\n")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0414\u043b\u0438\u043d\u0430 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0445 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043e\u0432 (\u043e\u0442\u0440\u0435\u0437\u043a\u043e\u0432 \u043d\u0430 \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0439 \u043e\u0441\u0438). \u0412 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0442\u0438\u043f\u0430 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0442\u0438\u043f\u0430 ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint8-uint16-uint32-uint64-int8-int16-int32-int64"},"UInt64")," \u0438\u043b\u0438 ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/float#float32-float64"},"Float64"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u0412\u0445\u043e\u0434\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500start\u2500\u252c\u2500end\u2500\u2510\n\u2502 a  \u2502   1.1 \u2502 2.9 \u2502\n\u2502 a  \u2502   2.5 \u2502 3.2 \u2502\n\u2502 a  \u2502     4 \u2502   5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"\u0412 \u044d\u0442\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u0442\u0438\u043f\u0430 Float32. \u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0442\u0438\u043f\u0430 Float64."),(0,i.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0431\u0443\u0434\u0435\u0442 \u0441\u0443\u043c\u043c\u0430 \u0434\u043b\u0438\u043d \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043e\u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"[1.1, 3.2]")," (\u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"[1.1, 2.9]")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"[2.5, 3.2]"),") \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"[4, 5]")),(0,i.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT id, intervalLengthSum(start, end), toTypeName(intervalLengthSum(start, end)) FROM fl_interval GROUP BY id ORDER BY id;\n")),(0,i.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500intervalLengthSum(start, end)\u2500\u252c\u2500toTypeName(intervalLengthSum(start, end))\u2500\u2510\n\u2502 a  \u2502                           3.1 \u2502 Float64                                   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u0412\u0445\u043e\u0434\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500start\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500end\u2500\u2510\n\u2502 a  \u2502 2020-01-01 01:12:30 \u2502 2020-01-01 02:10:10 \u2502\n\u2502 a  \u2502 2020-01-01 02:05:30 \u2502 2020-01-01 02:50:31 \u2502\n\u2502 a  \u2502 2020-01-01 03:11:22 \u2502 2020-01-01 03:23:31 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"\u0412 \u044d\u0442\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u0442\u0438\u043f\u0430 DateTime. \u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u043d\u043e\u0435 \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445."),(0,i.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT id, intervalLengthSum(start, end), toTypeName(intervalLengthSum(start, end)) FROM dt_interval GROUP BY id ORDER BY id;\n")),(0,i.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500intervalLengthSum(start, end)\u2500\u252c\u2500toTypeName(intervalLengthSum(start, end))\u2500\u2510\n\u2502 a  \u2502                          6610 \u2502 UInt64                                    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"\u0412\u0445\u043e\u0434\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500start\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500end\u2500\u2510\n\u2502 a  \u2502 2020-01-01 \u2502 2020-01-04 \u2502\n\u2502 a  \u2502 2020-01-12 \u2502 2020-01-18 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"\u0412 \u044d\u0442\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u0442\u0438\u043f\u0430 Date. \u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u043d\u043e\u0435 \u0432 \u0434\u043d\u044f\u0445."),(0,i.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT id, intervalLengthSum(start, end), toTypeName(intervalLengthSum(start, end)) FROM date_interval GROUP BY id ORDER BY id;\n")),(0,i.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500intervalLengthSum(start, end)\u2500\u252c\u2500toTypeName(intervalLengthSum(start, end))\u2500\u2510\n\u2502 a  \u2502                             9 \u2502 UInt64                                    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[4911],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),f=a,m=p["".concat(s,".").concat(f)]||p[f]||g[f]||o;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},62499:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return g}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],c={slug:"/en/sql-reference/aggregate-functions/",sidebar_label:"Aggregate Functions",sidebar_position:33},s="Aggregate Functions",l={unversionedId:"en/sql-reference/aggregate-functions/index",id:"en/sql-reference/aggregate-functions/index",title:"Aggregate Functions",description:"Aggregate functions work in the normal way as expected by database experts.",source:"@site/docs/en/sql-reference/aggregate-functions/index.md",sourceDirName:"en/sql-reference/aggregate-functions",slug:"/en/sql-reference/aggregate-functions/",permalink:"/docs/en/sql-reference/aggregate-functions/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/index.md",tags:[],version:"current",sidebarPosition:33,frontMatter:{slug:"/en/sql-reference/aggregate-functions/",sidebar_label:"Aggregate Functions",sidebar_position:33},sidebar:"english",previous:{title:"Distance functions",permalink:"/docs/en/sql-reference/functions/distance-functions"},next:{title:"List of Aggregate Functions",permalink:"/docs/en/sql-reference/aggregate-functions/reference/"}},u={},g=[{value:"NULL Processing",id:"null-processing",level:2}],p={toc:g};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aggregate-functions"},"Aggregate Functions"),(0,o.kt)("p",null,"Aggregate functions work in the ",(0,o.kt)("a",{parentName:"p",href:"http://www.sql-tutorial.com/sql-aggregate-functions-sql-tutorial"},"normal")," way as expected by database experts."),(0,o.kt)("p",null,"ClickHouse also supports:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/parametric-functions#aggregate_functions_parametric"},"Parametric aggregate functions"),", which accept other parameters in addition to columns."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/combinators#aggregate_functions_combinators"},"Combinators"),", which change the behavior of aggregate functions.")),(0,o.kt)("h2",{id:"null-processing"},"NULL Processing"),(0,o.kt)("p",null,"During aggregation, all ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),"s are skipped."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples:")),(0,o.kt)("p",null,"Consider this table:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500\u2500\u2500\u2500y\u2500\u2510\n\u2502 1 \u2502    2 \u2502\n\u2502 2 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 3 \u2502    2 \u2502\n\u2502 3 \u2502    3 \u2502\n\u2502 3 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"Let\u2019s say you need to total the values in the ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," column:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT sum(y) FROM t_null_big\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500sum(y)\u2500\u2510\n\u2502      7 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"Now you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"groupArray")," function to create an array from the ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," column:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupArray(y) FROM t_null_big\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500groupArray(y)\u2500\u2510\n\u2502 [2,2,3]       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"groupArray")," does not include ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," in the resulting array."))}f.isMDXComponent=!0}}]);
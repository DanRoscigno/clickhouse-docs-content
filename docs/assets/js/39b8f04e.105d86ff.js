"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[17680],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,d=p["".concat(o,".").concat(f)]||p[f]||m[f]||s;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},10870:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),i=["components"],l={slug:"/en/sql-reference/aggregate-functions/reference/deltasumtimestamp",sidebar_position:141,title:"deltaSumTimestamp"},o=void 0,c={unversionedId:"en/sql-reference/aggregate-functions/reference/deltasumtimestamp",id:"en/sql-reference/aggregate-functions/reference/deltasumtimestamp",title:"deltaSumTimestamp",description:"Adds the difference between consecutive rows. If the difference is negative, it is ignored.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/deltasumtimestamp.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/deltasumtimestamp",permalink:"/docs/en/sql-reference/aggregate-functions/reference/deltasumtimestamp",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/deltasumtimestamp.md",tags:[],version:"current",sidebarPosition:141,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/deltasumtimestamp",sidebar_position:141,title:"deltaSumTimestamp"},sidebar:"english",previous:{title:"deltaSum",permalink:"/docs/en/sql-reference/aggregate-functions/reference/deltasum"},next:{title:"sumMap",permalink:"/docs/en/sql-reference/aggregate-functions/reference/summap"}},u={},m=[],p={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Adds the difference between consecutive rows. If the difference is negative, it is ignored."),(0,s.kt)("p",null,"This function is primarily for ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/view#materialized"},"materialized views")," that are ordered by some time bucket-aligned timestamp, for example, a ",(0,s.kt)("inlineCode",{parentName:"p"},"toStartOfMinute"),' bucket. Because the rows in such a materialized view will all have the same timestamp, it is impossible for them to be merged in the "right" order. This function keeps track of the ',(0,s.kt)("inlineCode",{parentName:"p"},"timestamp")," of the values it's seen, so it's possible to order the states correctly during merging."),(0,s.kt)("p",null,"To calculate the delta sum across an ordered collection you can simply use the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/aggregate-functions/reference/deltasum#agg_functions-deltasum"},"deltaSum")," function."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"deltaSumTimestamp(value, timestamp)\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Arguments")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"value")," \u2014 Input values, must be some ",(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Integer")," type or ",(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float")," type or a ",(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/date"},"Date")," or ",(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"timestamp")," \u2014 The parameter for order values, must be some ",(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Integer")," type or ",(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float")," type or a ",(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/date"},"Date")," or ",(0,s.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime"),".")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returned value")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Accumulated differences between consecutive values, ordered by the ",(0,s.kt)("inlineCode",{parentName:"li"},"timestamp")," parameter.")),(0,s.kt)("p",null,"Type: ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"Integer")," or ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/float"},"Float")," or ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/date"},"Date")," or ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example")),(0,s.kt)("p",null,"Query:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT deltaSumTimestamp(value, timestamp)\nFROM (SELECT number AS timestamp, [0, 4, 8, 3, 0, 0, 0, 1, 3, 5][number] AS value FROM numbers(1, 10));\n")),(0,s.kt)("p",null,"Result:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500deltaSumTimestamp(value, timestamp)\u2500\u2510\n\u2502                                  13 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}f.isMDXComponent=!0}}]);
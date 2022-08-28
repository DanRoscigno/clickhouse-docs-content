"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[13477],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,m=u["".concat(l,".").concat(f)]||u[f]||g[f]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},39058:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return g}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],p={slug:"/en/sql-reference/data-types/simpleaggregatefunction"},l="SimpleAggregateFunction",s={unversionedId:"en/sql-reference/data-types/simpleaggregatefunction",id:"en/sql-reference/data-types/simpleaggregatefunction",title:"SimpleAggregateFunction",description:"SimpleAggregateFunction(name, typesofarguments\u2026) data type stores current value of the aggregate function, and does not store its full state as AggregateFunction does. This optimization can be applied to functions for which the following property holds f(S1 UNION ALL S2) = f(f(S1) UNION ALL f(S2)). This property guarantees that partial aggregation results are enough to compute the combined one, so we do not have to store and process any extra data.",source:"@site/docs/en/sql-reference/data-types/simpleaggregatefunction.md",sourceDirName:"en/sql-reference/data-types",slug:"/en/sql-reference/data-types/simpleaggregatefunction",permalink:"/docs/en/sql-reference/data-types/simpleaggregatefunction",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/data-types/simpleaggregatefunction.md",tags:[],version:"current",frontMatter:{slug:"/en/sql-reference/data-types/simpleaggregatefunction"},sidebar:"english",previous:{title:"Map(key, value)",permalink:"/docs/en/sql-reference/data-types/map"},next:{title:"Operators",permalink:"/docs/en/sql-reference/operators/"}},c={},g=[],u={toc:g};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"simpleaggregatefunction"},"SimpleAggregateFunction"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SimpleAggregateFunction(name, types_of_arguments\u2026)")," data type stores current value of the aggregate function, and does not store its full state as ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/aggregatefunction"},(0,o.kt)("inlineCode",{parentName:"a"},"AggregateFunction"))," does. This optimization can be applied to functions for which the following property holds: the result of applying a function ",(0,o.kt)("inlineCode",{parentName:"p"},"f")," to a row set ",(0,o.kt)("inlineCode",{parentName:"p"},"S1 UNION ALL S2")," can be obtained by applying ",(0,o.kt)("inlineCode",{parentName:"p"},"f")," to parts of the row set separately, and then again applying ",(0,o.kt)("inlineCode",{parentName:"p"},"f")," to the results: ",(0,o.kt)("inlineCode",{parentName:"p"},"f(S1 UNION ALL S2) = f(f(S1) UNION ALL f(S2))"),". This property guarantees that partial aggregation results are enough to compute the combined one, so we do not have to store and process any extra data."),(0,o.kt)("p",null,"The common way to produce an aggregate function value is by calling the aggregate function with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/aggregate-functions/combinators#agg-functions-combinator-simplestate"},"-SimpleState")," suffix."),(0,o.kt)("p",null,"The following aggregate functions are supported:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/any#agg_function-any"},(0,o.kt)("inlineCode",{parentName:"a"},"any"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/anylast#anylastx"},(0,o.kt)("inlineCode",{parentName:"a"},"anyLast"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/min#agg_function-min"},(0,o.kt)("inlineCode",{parentName:"a"},"min"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/max#agg_function-max"},(0,o.kt)("inlineCode",{parentName:"a"},"max"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/sum#agg_function-sum"},(0,o.kt)("inlineCode",{parentName:"a"},"sum"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/sumwithoverflow#sumwithoverflowx"},(0,o.kt)("inlineCode",{parentName:"a"},"sumWithOverflow"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/groupbitand#groupbitand"},(0,o.kt)("inlineCode",{parentName:"a"},"groupBitAnd"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/groupbitor#groupbitor"},(0,o.kt)("inlineCode",{parentName:"a"},"groupBitOr"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/groupbitxor#groupbitxor"},(0,o.kt)("inlineCode",{parentName:"a"},"groupBitXor"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/grouparray#agg_function-grouparray"},(0,o.kt)("inlineCode",{parentName:"a"},"groupArrayArray"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/groupuniqarray"},(0,o.kt)("inlineCode",{parentName:"a"},"groupUniqArrayArray"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/summap#agg_functions-summap"},(0,o.kt)("inlineCode",{parentName:"a"},"sumMap"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/minmap#agg_functions-minmap"},(0,o.kt)("inlineCode",{parentName:"a"},"minMap"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/maxmap#agg_functions-maxmap"},(0,o.kt)("inlineCode",{parentName:"a"},"maxMap")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Values of the ",(0,o.kt)("inlineCode",{parentName:"p"},"SimpleAggregateFunction(func, Type)")," look and stored the same way as ",(0,o.kt)("inlineCode",{parentName:"p"},"Type"),", so you do not need to apply functions with ",(0,o.kt)("inlineCode",{parentName:"p"},"-Merge"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"-State")," suffixes."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"SimpleAggregateFunction")," has better performance than ",(0,o.kt)("inlineCode",{parentName:"p"},"AggregateFunction")," with same aggregation function."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name of the aggregate function."),(0,o.kt)("li",{parentName:"ul"},"Types of the aggregate function arguments.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE simple (id UInt64, val SimpleAggregateFunction(sum, Double)) ENGINE=AggregatingMergeTree ORDER BY id;\n")))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[34634],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),f=a,m=s["".concat(l,".").concat(f)]||s[f]||g[f]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},13860:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return g}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],p={},l="AggregateFunction(name, types_of_arguments\u2026)",u={unversionedId:"zh/sql-reference/data-types/aggregatefunction",id:"zh/sql-reference/data-types/aggregatefunction",title:"AggregateFunction(name, types_of_arguments\u2026)",description:"data-type-aggregatefunction}",source:"@site/docs/zh/sql-reference/data-types/aggregatefunction.md",sourceDirName:"zh/sql-reference/data-types",slug:"/zh/sql-reference/data-types/aggregatefunction",permalink:"/zh/sql-reference/data-types/aggregatefunction",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/zh/sql-reference/data-types/aggregatefunction.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"Map(key, value)",permalink:"/zh/sql-reference/data-types/map"},next:{title:"\u9635\u5217(T)",permalink:"/zh/sql-reference/data-types/array"}},c={},g=[{value:"\u4f7f\u7528\u6307\u5357",id:"shi-yong-zhi-nan",level:2},{value:"\u6570\u636e\u5199\u5165",id:"shu-ju-xie-ru",level:3},{value:"\u6570\u636e\u67e5\u8be2",id:"shu-ju-cha-xun",level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"shi-yong-shi-li",level:2}],s={toc:g};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data-type-aggregatefunction"},"AggregateFunction(name, types_of_arguments\u2026)"),(0,i.kt)("p",null,"\u805a\u5408\u51fd\u6570\u7684\u4e2d\u95f4\u72b6\u6001\uff0c\u53ef\u4ee5\u901a\u8fc7\u805a\u5408\u51fd\u6570\u540d\u79f0\u52a0",(0,i.kt)("inlineCode",{parentName:"p"},"-State"),"\u540e\u7f00\u7684\u5f62\u5f0f\u5f97\u5230\u5b83\u3002\u4e0e\u6b64\u540c\u65f6\uff0c\u5f53\u60a8\u9700\u8981\u8bbf\u95ee\u8be5\u7c7b\u578b\u7684\u6700\u7ec8\u72b6\u6001\u6570\u636e\u65f6\uff0c\u60a8\u9700\u8981\u4ee5\u76f8\u540c\u7684\u805a\u5408\u51fd\u6570\u540d\u52a0",(0,i.kt)("inlineCode",{parentName:"p"},"-Merge"),"\u540e\u7f00\u7684\u5f62\u5f0f\u6765\u5f97\u5230\u6700\u7ec8\u72b6\u6001\u6570\u636e\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"AggregateFunction")," \u2014 \u53c2\u6570\u5316\u7684\u6570\u636e\u7c7b\u578b\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u805a\u5408\u51fd\u6570\u540d"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"\u5982\u679c\u51fd\u6570\u5177\u5907\u591a\u4e2a\u53c2\u6570\u5217\u8868\uff0c\u8bf7\u5728\u6b64\u5904\u6307\u5b9a\u5176\u4ed6\u53c2\u6570\u5217\u8868\u4e2d\u7684\u503c\u3002\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u805a\u5408\u51fd\u6570\u53c2\u6570\u7684\u7c7b\u578b"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t\n(\n    column1 AggregateFunction(uniq, UInt64),\n    column2 AggregateFunction(anyIf, String, UInt8),\n    column3 AggregateFunction(quantiles(0.5, 0.9), UInt64)\n) ENGINE = ...\n")),(0,i.kt)("p",null,"\u4e0a\u8ff0\u4e2d\u7684",(0,i.kt)("a",{parentName:"p",href:"/zh/sql-reference/data-types/aggregatefunction#agg_function-uniq"},"uniq"),"\uff0c anyIf (",(0,i.kt)("a",{parentName:"p",href:"/zh/sql-reference/data-types/aggregatefunction#agg_function-any"},"\u4efb\u4f55"),"+",(0,i.kt)("a",{parentName:"p",href:"/zh/sql-reference/data-types/aggregatefunction#agg-functions-combinator-if"},"\u5982\u679c"),") \u4ee5\u53ca ",(0,i.kt)("a",{parentName:"p",href:"/zh/sql-reference/data-types/aggregatefunction"},"\u5206\u4f4d\u6570")," \u90fd\u4e3aClickHouse\u4e2d\u652f\u6301\u7684\u805a\u5408\u51fd\u6570\u3002"),(0,i.kt)("h2",{id:"shi-yong-zhi-nan"},"\u4f7f\u7528\u6307\u5357"),(0,i.kt)("h3",{id:"shu-ju-xie-ru"},"\u6570\u636e\u5199\u5165"),(0,i.kt)("p",null,"\u5f53\u9700\u8981\u5199\u5165\u6570\u636e\u65f6\uff0c\u60a8\u9700\u8981\u5c06\u6570\u636e\u5305\u542b\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT SELECT"),"\u8bed\u53e5\u4e2d\uff0c\u540c\u65f6\u5bf9\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"AggregateFunction"),"\u7c7b\u578b\u7684\u6570\u636e\uff0c\u60a8\u9700\u8981\u4f7f\u7528\u5bf9\u5e94\u7684\u4ee5",(0,i.kt)("inlineCode",{parentName:"p"},"-State"),"\u4e3a\u540e\u7f00\u7684\u51fd\u6570\u8fdb\u884c\u5904\u7406\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u51fd\u6570\u4f7f\u7528\u793a\u4f8b")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"uniqState(UserID)\nquantilesState(0.5, 0.9)(SendTiming)\n")),(0,i.kt)("p",null,"\u4e0d\u540c\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"uniq"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"quantiles"),"\u51fd\u6570\u8fd4\u56de\u805a\u5408\u7ed3\u679c\u7684\u6700\u7ec8\u503c\uff0c\u4ee5",(0,i.kt)("inlineCode",{parentName:"p"},"-State"),"\u540e\u7f00\u7684\u51fd\u6570\u603b\u662f\u8fd4\u56de",(0,i.kt)("inlineCode",{parentName:"p"},"AggregateFunction"),"\u7c7b\u578b\u7684\u6570\u636e\u7684\u4e2d\u95f4\u72b6\u6001\u3002"),(0,i.kt)("p",null,"\u5bf9\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT"),"\u800c\u8a00\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"AggregateFunction"),"\u7c7b\u578b\u603b\u662f\u4ee5\u7279\u5b9a\u7684\u4e8c\u8fdb\u5236\u5f62\u5f0f\u5c55\u73b0\u5728\u6240\u6709\u7684\u8f93\u51fa\u683c\u5f0f\u4e2d\u3002\u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT"),"\u8bed\u53e5\u5c06\u51fd\u6570\u7684\u72b6\u6001\u6570\u636e\u8f6c\u50a8\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"TabSeparated"),"\u683c\u5f0f\u7684\u540c\u65f6\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT"),"\u8bed\u53e5\u5c06\u6570\u636e\u8f6c\u50a8\u56de\u53bb\u3002"),(0,i.kt)("h3",{id:"shu-ju-cha-xun"},"\u6570\u636e\u67e5\u8be2"),(0,i.kt)("p",null,"\u5f53\u4ece",(0,i.kt)("inlineCode",{parentName:"p"},"AggregatingMergeTree"),"\u8868\u4e2d\u67e5\u8be2\u6570\u636e\u65f6\uff0c\u5bf9\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"AggregateFunction"),"\u7c7b\u578b\u7684\u5b57\u6bb5\uff0c\u60a8\u9700\u8981\u4f7f\u7528\u4ee5",(0,i.kt)("inlineCode",{parentName:"p"},"-Merge"),"\u4e3a\u540e\u7f00\u7684\u76f8\u540c\u805a\u5408\u51fd\u6570\u6765\u805a\u5408\u6570\u636e\u3002\u5bf9\u4e8e\u975e",(0,i.kt)("inlineCode",{parentName:"p"},"AggregateFunction"),"\u7c7b\u578b\u7684\u5b57\u6bb5\uff0c\u8bf7\u5c06\u5b83\u4eec\u5305\u542b\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP BY"),"\u5b50\u53e5\u4e2d\u3002"),(0,i.kt)("p",null,"\u4ee5",(0,i.kt)("inlineCode",{parentName:"p"},"-Merge"),"\u4e3a\u540e\u7f00\u7684\u805a\u5408\u51fd\u6570\uff0c\u53ef\u4ee5\u5c06\u591a\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"AggregateFunction"),"\u7c7b\u578b\u7684\u4e2d\u95f4\u72b6\u6001\u7ec4\u5408\u8ba1\u7b97\u4e3a\u6700\u7ec8\u7684\u805a\u5408\u7ed3\u679c\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u4e0b\u7684\u4e24\u4e2a\u67e5\u8be2\u8fd4\u56de\u7684\u7ed3\u679c\u603b\u662f\u4e00\u81f4\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT uniq(UserID) FROM table\n\nSELECT uniqMerge(state) FROM (SELECT uniqState(UserID) AS state FROM table GROUP BY RegionID)\n")),(0,i.kt)("h2",{id:"shi-yong-shi-li"},"\u4f7f\u7528\u793a\u4f8b"),(0,i.kt)("p",null,"\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"/zh/sql-reference/data-types/aggregatefunction"},"AggregatingMergeTree")," \u7684\u8bf4\u660e"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/data_types/nested_data_structures/aggregatefunction/"},"\u6765\u6e90\u6587\u7ae0")," "))}f.isMDXComponent=!0}}]);
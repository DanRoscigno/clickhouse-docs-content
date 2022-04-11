"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[528],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(n),f=r,m=g["".concat(u,".").concat(f)]||g[f]||p[f]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},11175:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={sidebar_position:53,sidebar_label:"AggregateFunction"},u="AggregateFunction",s={unversionedId:"en/sql-reference/data-types/aggregatefunction",id:"en/sql-reference/data-types/aggregatefunction",title:"AggregateFunction",description:"data-type-aggregatefunction}",source:"@site/docs/en/sql-reference/data-types/aggregatefunction.md",sourceDirName:"en/sql-reference/data-types",slug:"/en/sql-reference/data-types/aggregatefunction",permalink:"/en/sql-reference/data-types/aggregatefunction",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/en/sql-reference/data-types/aggregatefunction.md",tags:[],version:"current",sidebarPosition:53,frontMatter:{sidebar_position:53,sidebar_label:"AggregateFunction"},sidebar:"english",previous:{title:"Array(T)",permalink:"/en/sql-reference/data-types/array"},next:{title:"Nested Data Structures",permalink:"/en/sql-reference/data-types/nested-data-structures/"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Data Insertion",id:"data-insertion",level:3},{value:"Data Selection",id:"data-selection",level:3},{value:"Usage Example",id:"usage-example",level:2}],g={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data-type-aggregatefunction"},"AggregateFunction"),(0,i.kt)("p",null,"Aggregate functions can have an implementation-defined intermediate state that can be serialized to an ",(0,i.kt)("inlineCode",{parentName:"p"},"AggregateFunction(\u2026)")," data type and stored in a table, usually, by means of ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/create/view"},"a materialized view"),". The common way to produce an aggregate function state is by calling the aggregate function with the ",(0,i.kt)("inlineCode",{parentName:"p"},"-State")," suffix. To get the final result of aggregation in the future, you must use the same aggregate function with the ",(0,i.kt)("inlineCode",{parentName:"p"},"-Merge"),"suffix."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"AggregateFunction(name, types_of_arguments\u2026)")," \u2014 parametric data type."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Name of the aggregate function. If the function is parametric, specify its parameters too.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Types of the aggregate function arguments."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t\n(\n    column1 AggregateFunction(uniq, UInt64),\n    column2 AggregateFunction(anyIf, String, UInt8),\n    column3 AggregateFunction(quantiles(0.5, 0.9), UInt64)\n) ENGINE = ...\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/aggregate-functions/reference/uniq#agg_function-uniq"},"uniq"),", anyIf (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/aggregate-functions/reference/any#agg_function-any"},"any"),"+",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/aggregate-functions/combinators#agg-functions-combinator-if"},"If"),") and ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles")," are the aggregate functions supported in ClickHouse."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"data-insertion"},"Data Insertion"),(0,i.kt)("p",null,"To insert data, use ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT SELECT")," with aggregate ",(0,i.kt)("inlineCode",{parentName:"p"},"-State"),"- functions."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Function examples")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"uniqState(UserID)\nquantilesState(0.5, 0.9)(SendTiming)\n")),(0,i.kt)("p",null,"In contrast to the corresponding functions ",(0,i.kt)("inlineCode",{parentName:"p"},"uniq")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"quantiles"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"-State"),"- functions return the state, instead of the final value. In other words, they return a value of ",(0,i.kt)("inlineCode",{parentName:"p"},"AggregateFunction")," type."),(0,i.kt)("p",null,"In the results of ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," query, the values of ",(0,i.kt)("inlineCode",{parentName:"p"},"AggregateFunction")," type have implementation-specific binary representation for all of the ClickHouse output formats. If dump data into, for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"TabSeparated")," format with ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," query, then this dump can be loaded back using ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," query."),(0,i.kt)("h3",{id:"data-selection"},"Data Selection"),(0,i.kt)("p",null,"When selecting data from ",(0,i.kt)("inlineCode",{parentName:"p"},"AggregatingMergeTree")," table, use ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP BY")," clause and the same aggregate functions as when inserting data, but using ",(0,i.kt)("inlineCode",{parentName:"p"},"-Merge"),"suffix."),(0,i.kt)("p",null,"An aggregate function with ",(0,i.kt)("inlineCode",{parentName:"p"},"-Merge")," suffix takes a set of states, combines them, and returns the result of complete data aggregation."),(0,i.kt)("p",null,"For example, the following two queries return the same result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT uniq(UserID) FROM table\n\nSELECT uniqMerge(state) FROM (SELECT uniqState(UserID) AS state FROM table GROUP BY RegionID)\n")),(0,i.kt)("h2",{id:"usage-example"},"Usage Example"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/en/engines/table-engines/mergetree-family/aggregatingmergetree"},"AggregatingMergeTree")," engine description."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/data_types/nested_data_structures/aggregatefunction/"},"Original article")," "))}f.isMDXComponent=!0}}]);
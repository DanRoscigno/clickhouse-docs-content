"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[4174],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),o=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=o(n),d=r,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(f,s(s({ref:t},i),{},{components:n})):a.createElement(f,s({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var o=2;o<l;o++)s[o]=n[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84524:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),s=["components"],p={slug:"/en/sql-reference/data-types/tuple",sidebar_position:54,sidebar_label:"Tuple(T1, T2, ...)"},u="Tuple(t1, T2, \u2026)",o={unversionedId:"en/sql-reference/data-types/tuple",id:"en/sql-reference/data-types/tuple",title:"Tuple(t1, T2, \u2026)",description:"A tuple of elements, each having an individual type. Tuple must contain at least one element.",source:"@site/docs/en/sql-reference/data-types/tuple.md",sourceDirName:"en/sql-reference/data-types",slug:"/en/sql-reference/data-types/tuple",permalink:"/docs/en/sql-reference/data-types/tuple",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/data-types/tuple.md",tags:[],version:"current",sidebarPosition:54,frontMatter:{slug:"/en/sql-reference/data-types/tuple",sidebar_position:54,sidebar_label:"Tuple(T1, T2, ...)"},sidebar:"english",previous:{title:"Nested(Name1 Type1, Name2 Type2, ...)",permalink:"/docs/en/sql-reference/data-types/nested-data-structures/nested"},next:{title:"Nullable",permalink:"/docs/en/sql-reference/data-types/nullable"}},i={},c=[{value:"Creating a Tuple",id:"creating-a-tuple",level:2},{value:"Working with Data Types",id:"working-with-data-types",level:2},{value:"Addressing Tuple Elements",id:"addressing-tuple-elements",level:2},{value:"Comparison operations with Tuple",id:"comparison-operations-with-tuple",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tuplet1-t2-"},"Tuple(t1, T2, \u2026)"),(0,l.kt)("p",null,"A tuple of elements, each having an individual ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/#data_types"},"type"),". Tuple must contain at least one element."),(0,l.kt)("p",null,"Tuples are used for temporary column grouping. Columns can be grouped when an IN expression is used in a query, and for specifying certain formal parameters of lambda functions. For more information, see the sections ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/operators/in"},"IN operators")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/#higher-order-functions"},"Higher order functions"),"."),(0,l.kt)("p",null,"Tuples can be the result of a query. In this case, for text formats other than JSON, values are comma-separated in brackets. In JSON formats, tuples are output as arrays (in square brackets)."),(0,l.kt)("h2",{id:"creating-a-tuple"},"Creating a Tuple"),(0,l.kt)("p",null,"You can use a function to create a tuple:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"tuple(T1, T2, ...)\n")),(0,l.kt)("p",null,"Example of creating a tuple:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT tuple(1,'a') AS x, toTypeName(x)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(tuple(1, 'a'))\u2500\u2510\n\u2502 (1,'a') \u2502 Tuple(UInt8, String)      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Tuple can contain a single element"),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT tuple('a') AS x;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ('a') \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"There is a syntax sugar using parentheses ",(0,l.kt)("inlineCode",{parentName:"p"},"( tuple_element1, tuple_element2 )")," to create a tuple of several elements without tuple function."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT (1, 'a') AS x, (today(), rand(), 'someString') y, ('a') not_a_tuple;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500y\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500not_a_tuple\u2500\u2510\n\u2502 (1,'a') \u2502 ('2022-09-21',2006973416,'someString') \u2502 a           \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"working-with-data-types"},"Working with Data Types"),(0,l.kt)("p",null,"When creating a tuple on the fly, ClickHouse automatically detects the type of each argument as the minimum of the types which can store the argument value. If the argument is ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/syntax#null-literal"},"NULL"),", the type of the tuple element is ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),"."),(0,l.kt)("p",null,"Example of automatic data type detection:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT tuple(1, NULL) AS x, toTypeName(x)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(tuple(1, NULL))\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 (1,NULL) \u2502 Tuple(UInt8, Nullable(Nothing)) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"addressing-tuple-elements"},"Addressing Tuple Elements"),(0,l.kt)("p",null,"It is possible to read elements of named tuples using indexes and names:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE named_tuples (`a` Tuple(s String, i Int64)) ENGINE = Memory;\n\nINSERT INTO named_tuples VALUES (('y', 10)), (('x',-10));\n\nSELECT a.s FROM named_tuples;\n\nSELECT a.2 FROM named_tuples;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a.s\u2500\u2510\n\u2502 y   \u2502\n\u2502 x   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n\n\u250c\u2500tupleElement(a, 2)\u2500\u2510\n\u2502                 10 \u2502\n\u2502                -10 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"comparison-operations-with-tuple"},"Comparison operations with Tuple"),(0,l.kt)("p",null,"The operation of comparing two tuples is performed sequentially element by element from left to right. If the element of the first tuple is greater than the corresponding element of the second tuple, then the first tuple is greater than the second, if the elements are equal, the next element is compared."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT (1, 'z') > (1, 'a') c1, (2022, 01, 02) > (2023, 04, 02) c2, (1,2,3) = (3,2,1) c3;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500c1\u2500\u252c\u2500c2\u2500\u252c\u2500c3\u2500\u2510\n\u2502  1 \u2502  0 \u2502  0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Real world examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test\n(\n    `year` Int16,\n    `month` Int8,\n    `day` Int8\n)\nENGINE = Memory AS\nSELECT *\nFROM values((2022, 12, 31), (2000, 1, 1));\n\nSELECT * FROM test;\n\n\u250c\u2500year\u2500\u252c\u2500month\u2500\u252c\u2500day\u2500\u2510\n\u2502 2022 \u2502    12 \u2502  31 \u2502\n\u2502 2000 \u2502     1 \u2502   1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n\nSELECT *\nFROM test\nWHERE (year, month, day) > (2010, 1, 1);\n\n\u250c\u2500year\u2500\u252c\u2500month\u2500\u252c\u2500day\u2500\u2510\n\u2502 2022 \u2502    12 \u2502  31 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nCREATE TABLE test\n(\n    `key` Int64,\n    `duration` UInt32,\n    `value` Float64\n)\nENGINE = Memory AS\nSELECT *\nFROM values((1, 42, 66.5), (1, 42, 70), (2, 1, 10), (2, 2, 0));\n\nSELECT * FROM test;\n\n\u250c\u2500key\u2500\u252c\u2500duration\u2500\u252c\u2500value\u2500\u2510\n\u2502   1 \u2502       42 \u2502  66.5 \u2502\n\u2502   1 \u2502       42 \u2502    70 \u2502\n\u2502   2 \u2502        1 \u2502    10 \u2502\n\u2502   2 \u2502        2 \u2502     0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n-- Let's find a value for each key with the biggest duration, if durations are equal, select the biggest value\n\nSELECT\n    key,\n    max(duration),\n    argMax(value, (duration, value))\nFROM test\nGROUP BY key\nORDER BY key ASC;\n\n\u250c\u2500key\u2500\u252c\u2500max(duration)\u2500\u252c\u2500argMax(value, tuple(duration, value))\u2500\u2510\n\u2502   1 \u2502            42 \u2502                                    70 \u2502\n\u2502   2 \u2502             2 \u2502                                     0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/data_types/tuple/"},"Original article")," "))}d.isMDXComponent=!0}}]);
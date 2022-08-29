"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[27781,31479],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return k}});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},u=Object.keys(e);for(l=0;l<u.length;l++)n=u[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(l=0;l<u.length;l++)n=u[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),i=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},o=function(e){var t=i(e.components);return l.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,s=e.parentName,o=r(e,["components","mdxType","originalType","parentName"]),m=i(n),k=a,d=m["".concat(s,".").concat(k)]||m[k]||c[k]||u;return n?l.createElement(d,p(p({ref:t},o),{},{components:n})):l.createElement(d,p({ref:t},o))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,p=new Array(u);p[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,p[1]=r;for(var i=2;i<u;i++)p[i]=n[i];return l.createElement.apply(null,p)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89181:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return c}});var l=n(87462),a=n(63366),u=(n(67294),n(3905)),p=["components"],r={slug:"/en/sql-reference/functions/tuple-functions",sidebar_position:66,sidebar_label:"Tuples",title:"Functions for Working with Tuples"},s=void 0,i={unversionedId:"en/sql-reference/functions/tuple-functions",id:"en/sql-reference/functions/tuple-functions",title:"Functions for Working with Tuples",description:"tuple",source:"@site/docs/en/sql-reference/functions/tuple-functions.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/tuple-functions",permalink:"/docs/en/sql-reference/functions/tuple-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/functions/tuple-functions.md",tags:[],version:"current",sidebarPosition:66,frontMatter:{slug:"/en/sql-reference/functions/tuple-functions",sidebar_position:66,sidebar_label:"Tuples",title:"Functions for Working with Tuples"},sidebar:"english",previous:{title:"Introspection",permalink:"/docs/en/sql-reference/functions/introspection"},next:{title:"Encryption",permalink:"/docs/en/sql-reference/functions/encryption-functions"}},o={},c=[{value:"tuple",id:"tuple",level:2},{value:"tupleElement",id:"tupleelement",level:2},{value:"untuple",id:"untuple",level:2},{value:"tupleHammingDistance",id:"tuplehammingdistance",level:2},{value:"tupleToNameValuePairs",id:"tupletonamevaluepairs",level:2},{value:"tuplePlus",id:"tupleplus",level:2},{value:"tupleMinus",id:"tupleminus",level:2},{value:"tupleMultiply",id:"tuplemultiply",level:2},{value:"tupleDivide",id:"tupledivide",level:2},{value:"tupleNegate",id:"tuplenegate",level:2},{value:"tupleMultiplyByNumber",id:"tuplemultiplybynumber",level:2},{value:"tupleDivideByNumber",id:"tupledividebynumber",level:2},{value:"dotProduct",id:"dotproduct",level:2},{value:"Distance functions",id:"distance-functions",level:2}],m={toc:c};function k(e){var t=e.components,n=(0,a.Z)(e,p);return(0,u.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"tuple"},"tuple"),(0,u.kt)("p",null,"A function that allows grouping multiple columns.\nFor columns with the types T1, T2, \u2026, it returns a Tuple(T1, T2, \u2026) type tuple containing these columns. There is no cost to execute the function.\nTuples are normally used as intermediate values for an argument of IN operators, or for creating a list of formal parameters of lambda functions. Tuples can\u2019t be written to a table."),(0,u.kt)("p",null,"The function implements the operator ",(0,u.kt)("inlineCode",{parentName:"p"},"(x, y, \u2026)"),"."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Syntax")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"tuple(x, y, \u2026)\n")),(0,u.kt)("h2",{id:"tupleelement"},"tupleElement"),(0,u.kt)("p",null,"A function that allows getting a column from a tuple.\n\u2018N\u2019 is the column index, starting from 1. \u2018N\u2019 must be a constant. \u2018N\u2019 must be a strict postive integer no greater than the size of the tuple.\nThere is no cost to execute the function."),(0,u.kt)("p",null,"The function implements the operator ",(0,u.kt)("inlineCode",{parentName:"p"},"x.N"),"."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Syntax")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"tupleElement(tuple, n)\n")),(0,u.kt)("h2",{id:"untuple"},"untuple"),(0,u.kt)("p",null,"Performs syntactic substitution of ",(0,u.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/tuple#tuplet1-t2"},"tuple")," elements in the call location."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Syntax")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"untuple(x)\n")),(0,u.kt)("p",null,"You can use the ",(0,u.kt)("inlineCode",{parentName:"p"},"EXCEPT")," expression to skip columns as a result of the query."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Arguments")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"x")," \u2014 A ",(0,u.kt)("inlineCode",{parentName:"li"},"tuple")," function, column, or tuple of elements. ",(0,u.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),".")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Returned value")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"None.")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Examples")),(0,u.kt)("p",null,"Input table:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500key\u2500\u252c\u2500v1\u2500\u252c\u2500v2\u2500\u252c\u2500v3\u2500\u252c\u2500v4\u2500\u252c\u2500v5\u2500\u252c\u2500v6\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502   1 \u2502 10 \u2502 20 \u2502 40 \u2502 30 \u2502 15 \u2502 (33,'ab') \u2502\n\u2502   2 \u2502 25 \u2502 65 \u2502 70 \u2502 40 \u2502  6 \u2502 (44,'cd') \u2502\n\u2502   3 \u2502 57 \u2502 30 \u2502 20 \u2502 10 \u2502  5 \u2502 (55,'ef') \u2502\n\u2502   4 \u2502 55 \u2502 12 \u2502  7 \u2502 80 \u2502 90 \u2502 (66,'gh') \u2502\n\u2502   5 \u2502 30 \u2502 50 \u2502 70 \u2502 25 \u2502 55 \u2502 (77,'kl') \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,u.kt)("p",null,"Example of using a ",(0,u.kt)("inlineCode",{parentName:"p"},"Tuple"),"-type column as the ",(0,u.kt)("inlineCode",{parentName:"p"},"untuple")," function parameter:"),(0,u.kt)("p",null,"Query:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT untuple(v6) FROM kv;\n")),(0,u.kt)("p",null,"Result:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500_ut_1\u2500\u252c\u2500_ut_2\u2500\u2510\n\u2502    33 \u2502 ab    \u2502\n\u2502    44 \u2502 cd    \u2502\n\u2502    55 \u2502 ef    \u2502\n\u2502    66 \u2502 gh    \u2502\n\u2502    77 \u2502 kl    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,u.kt)("p",null,"Note: the names are implementation specific and are subject to change. You should not assume specific names of the columns after application of the ",(0,u.kt)("inlineCode",{parentName:"p"},"untuple"),"."),(0,u.kt)("p",null,"Example of using an ",(0,u.kt)("inlineCode",{parentName:"p"},"EXCEPT")," expression:"),(0,u.kt)("p",null,"Query:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT untuple((* EXCEPT (v2, v3),)) FROM kv;\n")),(0,u.kt)("p",null,"Result:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500key\u2500\u252c\u2500v1\u2500\u252c\u2500v4\u2500\u252c\u2500v5\u2500\u252c\u2500v6\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502   1 \u2502 10 \u2502 30 \u2502 15 \u2502 (33,'ab') \u2502\n\u2502   2 \u2502 25 \u2502 40 \u2502  6 \u2502 (44,'cd') \u2502\n\u2502   3 \u2502 57 \u2502 10 \u2502  5 \u2502 (55,'ef') \u2502\n\u2502   4 \u2502 55 \u2502 80 \u2502 90 \u2502 (66,'gh') \u2502\n\u2502   5 \u2502 30 \u2502 25 \u2502 55 \u2502 (77,'kl') \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"See Also")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"))),(0,u.kt)("h2",{id:"tuplehammingdistance"},"tupleHammingDistance"),(0,u.kt)("p",null,"Returns the ",(0,u.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hamming_distance"},"Hamming Distance")," between two tuples of the same size."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Syntax")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"tupleHammingDistance(tuple1, tuple2)\n")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Arguments")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"tuple1")," \u2014 First tuple. ",(0,u.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),"."),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"tuple2")," \u2014 Second tuple. ",(0,u.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),".")),(0,u.kt)("p",null,"Tuples should have the same type of the elements."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Returned value")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"The Hamming distance.")),(0,u.kt)("p",null,"Type: The result type is calculed the same way it is for ",(0,u.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/arithmetic-functions"},"Arithmetic functions"),", based on the number of elements in the input tuples."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    toTypeName(tupleHammingDistance(tuple(0), tuple(0))) AS t1,\n    toTypeName(tupleHammingDistance((0, 0), (0, 0))) AS t2,\n    toTypeName(tupleHammingDistance((0, 0, 0), (0, 0, 0))) AS t3,\n    toTypeName(tupleHammingDistance((0, 0, 0, 0), (0, 0, 0, 0))) AS t4,\n    toTypeName(tupleHammingDistance((0, 0, 0, 0, 0), (0, 0, 0, 0, 0))) AS t5\n")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500t1\u2500\u2500\u2500\u2500\u252c\u2500t2\u2500\u2500\u2500\u2500\u2500\u252c\u2500t3\u2500\u2500\u2500\u2500\u2500\u252c\u2500t4\u2500\u2500\u2500\u2500\u2500\u252c\u2500t5\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 UInt8 \u2502 UInt16 \u2502 UInt32 \u2502 UInt64 \u2502 UInt64 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Examples")),(0,u.kt)("p",null,"Query:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT tupleHammingDistance((1, 2, 3), (3, 2, 1)) AS HammingDistance;\n")),(0,u.kt)("p",null,"Result:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500HammingDistance\u2500\u2510\n\u2502               2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,u.kt)("p",null,"Can be used with ",(0,u.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/hash-functions#ngramminhash"},"MinHash")," functions for detection of semi-duplicate strings:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT tupleHammingDistance(wordShingleMinHash(string), wordShingleMinHashCaseInsensitive(string)) as HammingDistance FROM (SELECT 'ClickHouse is a column-oriented database management system for online analytical processing of queries.' AS string);\n")),(0,u.kt)("p",null,"Result:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500HammingDistance\u2500\u2510\n\u2502               2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,u.kt)("h2",{id:"tupletonamevaluepairs"},"tupleToNameValuePairs"),(0,u.kt)("p",null,"Turns a named tuple into an array of (name, value) pairs. For a ",(0,u.kt)("inlineCode",{parentName:"p"},"Tuple(a T, b T, ..., c T)")," returns ",(0,u.kt)("inlineCode",{parentName:"p"},"Array(Tuple(String, T), ...)"),"\nin which the ",(0,u.kt)("inlineCode",{parentName:"p"},"Strings")," represents the named fields of the tuple and ",(0,u.kt)("inlineCode",{parentName:"p"},"T")," are the values associated with those names. All values in the tuple should be of the same type."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Syntax")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"tupleToNameValuePairs(tuple)\n")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Arguments")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"tuple")," \u2014 Named tuple. ",(0,u.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple")," with any types of values.")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Returned value")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"An array with (name, value) pairs.")),(0,u.kt)("p",null,"Type: ",(0,u.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/array"},"Array"),"(",(0,u.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),"(",(0,u.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),", ...))."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Example")),(0,u.kt)("p",null,"Query:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE tupletest (`col` Tuple(user_ID UInt64, session_ID UInt64) ENGINE = Memory;\n\nINSERT INTO tupletest VALUES (tuple( 100, 2502)), (tuple(1,100));\n\nSELECT tupleToNameValuePairs(col) FROM tupletest;\n")),(0,u.kt)("p",null,"Result:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500tupleToNameValuePairs(col)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [('user_ID',100),('session_ID',2502)] \u2502\n\u2502 [('user_ID',1),('session_ID',100)]    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,u.kt)("p",null,"It is possible to transform colums to rows using this function:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE tupletest (`col` Tuple(CPU Float64, Memory Float64, Disk Float64)) ENGINE = Memory;\n\nINSERT INTO tupletest VALUES(tuple(3.3, 5.5, 6.6));\n\nSELECT arrayJoin(tupleToNameValuePairs(col))FROM tupletest;\n")),(0,u.kt)("p",null,"Result:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500arrayJoin(tupleToNameValuePairs(col))\u2500\u2510\n\u2502 ('CPU',3.3)                           \u2502\n\u2502 ('Memory',5.5)                        \u2502\n\u2502 ('Disk',6.6)                          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,u.kt)("p",null,"If you pass a simple tuple to the function, ClickHouse uses the indexes of the values as their names:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT tupleToNameValuePairs(tuple(3, 2, 1));\n")),(0,u.kt)("p",null,"Result:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500tupleToNameValuePairs(tuple(3, 2, 1))\u2500\u2510\n\u2502 [('1',3),('2',2),('3',1)]             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,u.kt)("h2",{id:"tupleplus"},"tuplePlus"),(0,u.kt)("p",null,"Calculates the sum of corresponding values of two tuples of the same size."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Syntax")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"tuplePlus(tuple1, tuple2)\n")),(0,u.kt)("p",null,"Alias: ",(0,u.kt)("inlineCode",{parentName:"p"},"vectorSum"),"."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Arguments")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"tuple1")," \u2014 First tuple. ",(0,u.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),"."),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"tuple2")," \u2014 Second tuple. ",(0,u.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),".")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Returned value")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Tuple with the sum.")),(0,u.kt)("p",null,"Type: ",(0,u.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),"."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Example")),(0,u.kt)("p",null,"Query:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT tuplePlus((1, 2), (2, 3));\n")),(0,u.kt)("p",null,"Result:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500tuplePlus((1, 2), (2, 3))\u2500\u2510\n\u2502 (3,5)                     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,u.kt)("h2",{id:"tupleminus"},"tupleMinus"),(0,u.kt)("p",null,"Calculates the subtraction of corresponding values of two tuples of the same size."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Syntax")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"tupleMinus(tuple1, tuple2)\n")),(0,u.kt)("p",null,"Alias: ",(0,u.kt)("inlineCode",{parentName:"p"},"vectorDifference"),"."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Arguments")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"tuple1")," \u2014 First tuple. ",(0,u.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),"."),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"tuple2")," \u2014 Second tuple. ",(0,u.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),".")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Returned value")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Tuple with the result of subtraction.")),(0,u.kt)("p",null,"Type: ",(0,u.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),"."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Example")),(0,u.kt)("p",null,"Query:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT tupleMinus((1, 2), (2, 3));\n")),(0,u.kt)("p",null,"Result:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500tupleMinus((1, 2), (2, 3))\u2500\u2510\n\u2502 (-1,-1)                    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,u.kt)("h2",{id:"tuplemultiply"},"tupleMultiply"),(0,u.kt)("p",null,"Calculates the multiplication of corresponding values of two tuples of the same size."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Syntax")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"tupleMultiply(tuple1, tuple2)\n")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Arguments")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"tuple1")," \u2014 First tuple. ",(0,u.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),"."),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"tuple2")," \u2014 Second tuple. ",(0,u.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),".")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Returned value")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Tuple with the multiplication.")),(0,u.kt)("p",null,"Type: ",(0,u.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),"."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Example")),(0,u.kt)("p",null,"Query:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT tupleMultiply((1, 2), (2, 3));\n")),(0,u.kt)("p",null,"Result:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500tupleMultiply((1, 2), (2, 3))\u2500\u2510\n\u2502 (2,6)                         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,u.kt)("h2",{id:"tupledivide"},"tupleDivide"),(0,u.kt)("p",null,"Calculates the division of corresponding values of two tuples of the same size. Note that division by zero will return ",(0,u.kt)("inlineCode",{parentName:"p"},"inf"),"."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Syntax")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"tupleDivide(tuple1, tuple2)\n")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Arguments")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"tuple1")," \u2014 First tuple. ",(0,u.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),"."),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"tuple2")," \u2014 Second tuple. ",(0,u.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),".")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Returned value")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Tuple with the result of division.")),(0,u.kt)("p",null,"Type: ",(0,u.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),"."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Example")),(0,u.kt)("p",null,"Query:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT tupleDivide((1, 2), (2, 3));\n")),(0,u.kt)("p",null,"Result:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500tupleDivide((1, 2), (2, 3))\u2500\u2510\n\u2502 (0.5,0.6666666666666666)    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,u.kt)("h2",{id:"tuplenegate"},"tupleNegate"),(0,u.kt)("p",null,"Calculates the negation of the tuple values."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Syntax")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"tupleNegate(tuple)\n")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Arguments")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"tuple")," \u2014 ",(0,u.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),".")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Returned value")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Tuple with the result of negation.")),(0,u.kt)("p",null,"Type: ",(0,u.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),"."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Example")),(0,u.kt)("p",null,"Query:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT tupleNegate((1,  2));\n")),(0,u.kt)("p",null,"Result:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500tupleNegate((1, 2))\u2500\u2510\n\u2502 (-1,-2)             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,u.kt)("h2",{id:"tuplemultiplybynumber"},"tupleMultiplyByNumber"),(0,u.kt)("p",null,"Returns a tuple with all values multiplied by a number."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Syntax")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"tupleMultiplyByNumber(tuple, number)\n")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Arguments")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"tuple")," \u2014 ",(0,u.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),"."),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"number")," \u2014 Multiplier. ",(0,u.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Int/UInt"),", ",(0,u.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float")," or ",(0,u.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/decimal"},"Decimal"),".")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Returned value")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Tuple with multiplied values.")),(0,u.kt)("p",null,"Type: ",(0,u.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),"."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Example")),(0,u.kt)("p",null,"Query:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT tupleMultiplyByNumber((1, 2), -2.1);\n")),(0,u.kt)("p",null,"Result:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500tupleMultiplyByNumber((1, 2), -2.1)\u2500\u2510\n\u2502 (-2.1,-4.2)                         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,u.kt)("h2",{id:"tupledividebynumber"},"tupleDivideByNumber"),(0,u.kt)("p",null,"Returns a tuple with all values divided by a number. Note that division by zero will return ",(0,u.kt)("inlineCode",{parentName:"p"},"inf"),"."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Syntax")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"tupleDivideByNumber(tuple, number)\n")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Arguments")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"tuple")," \u2014 ",(0,u.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),"."),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"number")," \u2014 Divider. ",(0,u.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Int/UInt"),", ",(0,u.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float")," or ",(0,u.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/decimal"},"Decimal"),".")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Returned value")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Tuple with divided values.")),(0,u.kt)("p",null,"Type: ",(0,u.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),"."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Example")),(0,u.kt)("p",null,"Query:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT tupleDivideByNumber((1, 2), 0.5);\n")),(0,u.kt)("p",null,"Result:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500tupleDivideByNumber((1, 2), 0.5)\u2500\u2510\n\u2502 (2,4)                            \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,u.kt)("h2",{id:"dotproduct"},"dotProduct"),(0,u.kt)("p",null,"Calculates the scalar product of two tuples of the same size."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Syntax")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"dotProduct(tuple1, tuple2)\n")),(0,u.kt)("p",null,"Alias: ",(0,u.kt)("inlineCode",{parentName:"p"},"scalarProduct"),"."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Arguments")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"tuple1")," \u2014 First tuple. ",(0,u.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),"."),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"tuple2")," \u2014 Second tuple. ",(0,u.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),".")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Returned value")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Scalar product.")),(0,u.kt)("p",null,"Type: ",(0,u.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"Int/UInt"),", ",(0,u.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/float"},"Float")," or ",(0,u.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/decimal"},"Decimal"),"."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Example")),(0,u.kt)("p",null,"Query:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT dotProduct((1, 2), (2, 3));\n")),(0,u.kt)("p",null,"Result:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500dotProduct((1, 2), (2, 3))\u2500\u2510\n\u2502                          8 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,u.kt)("h2",{id:"distance-functions"},"Distance functions"),(0,u.kt)("p",null,"All supported functions are described in ",(0,u.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/distance-functions"},"distance functions documentation"),"."))}k.isMDXComponent=!0},90482:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return m}});var l=n(87462),a=n(63366),u=(n(67294),n(3905)),p=n(89181),r=["components"],s={slug:"/zh/sql-reference/functions/tuple-functions",sidebar_position:66,sidebar_label:"Tuples",title:"Functions for Working with Tuples"},i=void 0,o={unversionedId:"zh/sql-reference/functions/tuple-functions",id:"zh/sql-reference/functions/tuple-functions",title:"Functions for Working with Tuples",description:"",source:"@site/docs/zh/sql-reference/functions/tuple-functions.mdx",sourceDirName:"zh/sql-reference/functions",slug:"/zh/sql-reference/functions/tuple-functions",permalink:"/docs/zh/sql-reference/functions/tuple-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/functions/tuple-functions.mdx",tags:[],version:"current",sidebarPosition:66,frontMatter:{slug:"/zh/sql-reference/functions/tuple-functions",sidebar_position:66,sidebar_label:"Tuples",title:"Functions for Working with Tuples"},sidebar:"chinese",previous:{title:"\u81ea\u7701",permalink:"/docs/zh/sql-reference/functions/introspection"},next:{title:"Encryption",permalink:"/docs/zh/sql-reference/functions/encryption-functions"}},c={},m=[],k={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,r);return(0,u.kt)("wrapper",(0,l.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)(p.default,{mdxType:"Content"}))}d.isMDXComponent=!0}}]);
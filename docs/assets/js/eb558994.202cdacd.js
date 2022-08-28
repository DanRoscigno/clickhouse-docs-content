"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[48975],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return f}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,y=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return r?t.createElement(y,i(i({ref:n},c),{},{components:r})):t.createElement(y,i({ref:n},c))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37152:function(e,n,r){r.r(n),r.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={slug:"/en/sql-reference/functions/array-join",sidebar_position:61,sidebar_label:"arrayJoin"},l="arrayJoin function",u={unversionedId:"en/sql-reference/functions/array-join",id:"en/sql-reference/functions/array-join",title:"arrayJoin function",description:"This is a very unusual function.",source:"@site/docs/en/sql-reference/functions/array-join.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/array-join",permalink:"/docs/en/sql-reference/functions/array-join",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/functions/array-join.md",tags:[],version:"current",sidebarPosition:61,frontMatter:{slug:"/en/sql-reference/functions/array-join",sidebar_position:61,sidebar_label:"arrayJoin"},sidebar:"english",previous:{title:"IN Operator",permalink:"/docs/en/sql-reference/functions/in-functions"},next:{title:"Geo",permalink:"/docs/en/sql-reference/functions/geo/"}},c={},p=[],m={toc:p};function f(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"arrayjoin-function"},"arrayJoin function"),(0,a.kt)("p",null,"This is a very unusual function."),(0,a.kt)("p",null,"Normal functions do not change a set of rows, but just change the values in each row (map).\nAggregate functions compress a set of rows (fold or reduce).\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"arrayJoin")," function takes each row and generates a set of rows (unfold)."),(0,a.kt)("p",null,"This function takes an array as an argument, and propagates the source row to multiple rows for the number of elements in the array.\nAll the values in columns are simply copied, except the values in the column where this function is applied; it is replaced with the corresponding array value."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT arrayJoin([1, 2, 3] AS src) AS dst, 'Hello', src\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500dst\u2500\u252c\u2500\\'Hello\\'\u2500\u252c\u2500src\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502   1 \u2502 Hello     \u2502 [1,2,3] \u2502\n\u2502   2 \u2502 Hello     \u2502 [1,2,3] \u2502\n\u2502   3 \u2502 Hello     \u2502 [1,2,3] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"arrayJoin")," function affects all sections of the query, including the ",(0,a.kt)("inlineCode",{parentName:"p"},"WHERE")," section. Notice the result 2, even though the subquery returned 1 row."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT sum(1) AS impressions\nFROM\n(\n    SELECT ['Istanbul', 'Berlin', 'Bobruisk'] AS cities\n)\nWHERE arrayJoin(cities) IN ['Istanbul', 'Berlin'];\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500impressions\u2500\u2510\n\u2502           2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"A query can use multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"arrayJoin")," functions. In this case, the transformation is performed multiple times and the rows are multiplied."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    sum(1) AS impressions,\n    arrayJoin(cities) AS city,\n    arrayJoin(browsers) AS browser\nFROM\n(\n    SELECT\n        ['Istanbul', 'Berlin', 'Bobruisk'] AS cities,\n        ['Firefox', 'Chrome', 'Chrome'] AS browsers\n)\nGROUP BY\n    2,\n    3\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500impressions\u2500\u252c\u2500city\u2500\u2500\u2500\u2500\u2500\u252c\u2500browser\u2500\u2510\n\u2502           2 \u2502 Istanbul \u2502 Chrome  \u2502\n\u2502           1 \u2502 Istanbul \u2502 Firefox \u2502\n\u2502           2 \u2502 Berlin   \u2502 Chrome  \u2502\n\u2502           1 \u2502 Berlin   \u2502 Firefox \u2502\n\u2502           2 \u2502 Bobruisk \u2502 Chrome  \u2502\n\u2502           1 \u2502 Bobruisk \u2502 Firefox \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"Note the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/array-join"},"ARRAY JOIN")," syntax in the SELECT query, which provides broader possibilities.\n",(0,a.kt)("inlineCode",{parentName:"p"},"ARRAY JOIN")," allows you to convert multiple arrays with the same number of elements at a time."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    sum(1) AS impressions,\n    city,\n    browser\nFROM\n(\n    SELECT\n        ['Istanbul', 'Berlin', 'Bobruisk'] AS cities,\n        ['Firefox', 'Chrome', 'Chrome'] AS browsers\n)\nARRAY JOIN\n    cities AS city,\n    browsers AS browser\nGROUP BY\n    2,\n    3\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500impressions\u2500\u252c\u2500city\u2500\u2500\u2500\u2500\u2500\u252c\u2500browser\u2500\u2510\n\u2502           1 \u2502 Istanbul \u2502 Firefox \u2502\n\u2502           1 \u2502 Berlin   \u2502 Chrome  \u2502\n\u2502           1 \u2502 Bobruisk \u2502 Chrome  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"Or you can use ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    sum(1) AS impressions,\n    (arrayJoin(arrayZip(cities, browsers)) AS t).1 AS city,\n    t.2 AS browser\nFROM\n(\n    SELECT\n        ['Istanbul', 'Berlin', 'Bobruisk'] AS cities,\n        ['Firefox', 'Chrome', 'Chrome'] AS browsers\n)\nGROUP BY\n    2,\n    3\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500impressions\u2500\u252c\u2500city\u2500\u2500\u2500\u2500\u2500\u252c\u2500browser\u2500\u2510\n\u2502           1 \u2502 Istanbul \u2502 Firefox \u2502\n\u2502           1 \u2502 Berlin   \u2502 Chrome  \u2502\n\u2502           1 \u2502 Bobruisk \u2502 Chrome  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}f.isMDXComponent=!0}}]);
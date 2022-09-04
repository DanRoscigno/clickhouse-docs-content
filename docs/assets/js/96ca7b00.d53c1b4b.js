"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[4519,61554],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),i=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),k=i(a),c=r,d=k["".concat(u,".").concat(c)]||k[c]||o[c]||l;return a?n.createElement(d,p(p({ref:t},m),{},{components:a})):n.createElement(d,p({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=k;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,p[1]=s;for(var i=2;i<l;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},20487:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return o}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),p=["components"],s={slug:"/en/sql-reference/functions/tuple-map-functions",sidebar_position:46,sidebar_label:"Working with maps",title:"Functions for maps"},u=void 0,i={unversionedId:"en/sql-reference/functions/tuple-map-functions",id:"en/sql-reference/functions/tuple-map-functions",title:"Functions for maps",description:"map",source:"@site/docs/en/sql-reference/functions/tuple-map-functions.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/tuple-map-functions",permalink:"/docs/en/sql-reference/functions/tuple-map-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/functions/tuple-map-functions.md",tags:[],version:"current",sidebarPosition:46,frontMatter:{slug:"/en/sql-reference/functions/tuple-map-functions",sidebar_position:46,sidebar_label:"Working with maps",title:"Functions for maps"},sidebar:"english",previous:{title:"Rounding",permalink:"/docs/en/sql-reference/functions/rounding-functions"},next:{title:"Splitting and Merging Strings and Arrays",permalink:"/docs/en/sql-reference/functions/splitting-merging-functions"}},m={},o=[{value:"map",id:"map",level:2},{value:"mapAdd",id:"mapadd",level:2},{value:"mapSubtract",id:"mapsubtract",level:2},{value:"mapPopulateSeries",id:"mappopulateseries",level:2},{value:"mapContains",id:"mapcontains",level:2},{value:"mapKeys",id:"mapkeys",level:2},{value:"mapValues",id:"mapvalues",level:2},{value:"mapContainsKeyLike",id:"mapcontainskeylike",level:2},{value:"mapExtractKeyLike",id:"mapextractkeylike",level:2},{value:"mapApply",id:"mapapply",level:2},{value:"mapFilter",id:"mapfilter",level:2},{value:"mapUpdate",id:"mapupdate",level:2}],k={toc:o};function c(e){var t=e.components,a=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"map"},"map"),(0,l.kt)("p",null,"Arranges ",(0,l.kt)("inlineCode",{parentName:"p"},"key:value")," pairs into ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/map"},"Map(key, value)")," data type."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"map(key1, value1[, key2, value2, ...])\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"key")," \u2014 The key part of the pair. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Integer"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/lowcardinality"},"LowCardinality"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/fixedstring"},"FixedString"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/uuid"},"UUID"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/date"},"Date"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/date32"},"Date32"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/enum"},"Enum"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value")," \u2014 The value part of the pair. Arbitrary type, including ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/map"},"Map")," and ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/array"},"Array"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Data structure as ",(0,l.kt)("inlineCode",{parentName:"li"},"key:value")," pairs.")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/map"},"Map(key, value)"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT map('key1', number, 'key2', number * 2) FROM numbers(3);\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500map('key1', number, 'key2', multiply(number, 2))\u2500\u2510\n\u2502 {'key1':0,'key2':0}                              \u2502\n\u2502 {'key1':1,'key2':2}                              \u2502\n\u2502 {'key1':2,'key2':4}                              \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_map (a Map(String, UInt64)) ENGINE = MergeTree() ORDER BY a;\nINSERT INTO table_map SELECT map('key1', number, 'key2', number * 2) FROM numbers(3);\nSELECT a['key2'] FROM table_map;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500arrayElement(a, 'key2')\u2500\u2510\n\u2502                       0 \u2502\n\u2502                       2 \u2502\n\u2502                       4 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See Also")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/map"},"Map(key, value)")," data type")),(0,l.kt)("h2",{id:"mapadd"},"mapAdd"),(0,l.kt)("p",null,"Collect all the keys and sum corresponding values."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mapAdd(arg1, arg2 [, ...])\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("p",null,"Arguments are ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/map"},"maps")," or ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/tuple#tuplet1-t2"},"tuples")," of two ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/array#data-type-array"},"arrays"),", where items in the first array represent keys, and the second array contains values for the each key. All key arrays should have same type, and all value arrays should contain items which are promoted to the one type (",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint#int-ranges"},"Int64"),", ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt64")," or ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/float#float32-float64"},"Float64"),"). The common promoted type is used as a type for the result array."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Depending on the arguments returns one ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/map"},"map")," or ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/tuple#tuplet1-t2"},"tuple"),", where the first array contains the sorted keys and the second array contains values.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query with a tuple:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT mapAdd(([toUInt8(1), 2], [1, 1]), ([toUInt8(1), 2], [1, 1])) as res, toTypeName(res) as type;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500type\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ([1,2],[2,2]) \u2502 Tuple(Array(UInt8), Array(UInt64)) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Query with ",(0,l.kt)("inlineCode",{parentName:"p"},"Map")," type:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT mapAdd(map(1,1), map(1,1));\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500mapAdd(map(1, 1), map(1, 1))\u2500\u2510\n\u2502 {1:2}                        \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"mapsubtract"},"mapSubtract"),(0,l.kt)("p",null,"Collect all the keys and subtract corresponding values."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mapSubtract(Tuple(Array, Array), Tuple(Array, Array) [, ...])\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("p",null,"Arguments are ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/map"},"maps")," or ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/tuple#tuplet1-t2"},"tuples")," of two ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/array#data-type-array"},"arrays"),", where items in the first array represent keys, and the second array contains values for the each key. All key arrays should have same type, and all value arrays should contain items which are promote to the one type (",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint#int-ranges"},"Int64"),", ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt64")," or ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/float#float32-float64"},"Float64"),"). The common promoted type is used as a type for the result array."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Depending on the arguments returns one ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/map"},"map")," or ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/tuple#tuplet1-t2"},"tuple"),", where the first array contains the sorted keys and the second array contains values.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query with a tuple map:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT mapSubtract(([toUInt8(1), 2], [toInt32(1), 1]), ([toUInt8(1), 2], [toInt32(2), 1])) as res, toTypeName(res) as type;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500type\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ([1,2],[-1,0]) \u2502 Tuple(Array(UInt8), Array(Int64)) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Query with ",(0,l.kt)("inlineCode",{parentName:"p"},"Map")," type:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT mapSubtract(map(1,1), map(1,1));\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500mapSubtract(map(1, 1), map(1, 1))\u2500\u2510\n\u2502 {1:0}                             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"mappopulateseries"},"mapPopulateSeries"),(0,l.kt)("p",null,"Fills missing keys in the maps (key and value array pair), where keys are integers. Also, it supports specifying the max key, which is used to extend the keys array."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mapPopulateSeries(keys, values[, max])\nmapPopulateSeries(map[, max])\n")),(0,l.kt)("p",null,"Generates a map (a tuple with two arrays or a value of ",(0,l.kt)("inlineCode",{parentName:"p"},"Map")," type, depending on the arguments), where keys are a series of numbers, from minimum to maximum keys (or ",(0,l.kt)("inlineCode",{parentName:"p"},"max")," argument if it specified) taken from the map with a step size of one, and corresponding values. If the value is not specified for the key, then it uses the default value in the resulting map. For repeated keys, only the first value (in order of appearing) gets associated with the key."),(0,l.kt)("p",null,"For array arguments the number of elements in ",(0,l.kt)("inlineCode",{parentName:"p"},"keys")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"values")," must be the same for each row."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("p",null,"Arguments are ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/map"},"maps")," or two ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/array#data-type-array"},"arrays"),", where the first array represent keys, and the second array contains values for the each key."),(0,l.kt)("p",null,"Mapped arrays:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"keys")," \u2014 Array of keys. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/array#data-type-array"},"Array"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint#uint-ranges"},"Int"),")."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"values")," \u2014 Array of values. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/array#data-type-array"},"Array"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint#uint-ranges"},"Int"),")."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max")," \u2014 Maximum key value. Optional. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint#int-ranges"},"Int8, Int16, Int32, Int64, Int128, Int256"),".")),(0,l.kt)("p",null,"or"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"map")," \u2014 Map with integer keys. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/map"},"Map"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Depending on the arguments returns a ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/map"},"map")," or a ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/tuple#tuplet1-t2"},"tuple")," of two ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/array#data-type-array"},"arrays"),": keys in sorted order, and values the corresponding keys.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query with mapped arrays:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT mapPopulateSeries([1,2,4], [11,22,44], 5) AS res, toTypeName(res) AS type;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500type\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ([1,2,3,4,5],[11,22,0,44,0]) \u2502 Tuple(Array(UInt8), Array(UInt8)) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Query with ",(0,l.kt)("inlineCode",{parentName:"p"},"Map")," type:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT mapPopulateSeries(map(1, 10, 5, 20), 6);\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500mapPopulateSeries(map(1, 10, 5, 20), 6)\u2500\u2510\n\u2502 {1:10,2:0,3:0,4:0,5:20,6:0}             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"mapcontains"},"mapContains"),(0,l.kt)("p",null,"Determines  whether the ",(0,l.kt)("inlineCode",{parentName:"p"},"map")," contains the ",(0,l.kt)("inlineCode",{parentName:"p"},"key")," parameter."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mapContains(map, key)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"map")," \u2014 Map. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/map"},"Map"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"key")," \u2014 Key. Type matches the type of keys of ",(0,l.kt)("inlineCode",{parentName:"li"},"map")," parameter.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1")," if ",(0,l.kt)("inlineCode",{parentName:"li"},"map")," contains ",(0,l.kt)("inlineCode",{parentName:"li"},"key"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"0")," if not.")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt8"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test (a Map(String,String)) ENGINE = Memory;\n\nINSERT INTO test VALUES ({'name':'eleven','age':'11'}), ({'number':'twelve','position':'6.0'});\n\nSELECT mapContains(a, 'name') FROM test;\n\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500mapContains(a, 'name')\u2500\u2510\n\u2502                      1 \u2502\n\u2502                      0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"mapkeys"},"mapKeys"),(0,l.kt)("p",null,"Returns all keys from the ",(0,l.kt)("inlineCode",{parentName:"p"},"map")," parameter."),(0,l.kt)("p",null,"Can be optimized by enabling the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#optimize-functions-to-subcolumns"},"optimize_functions_to_subcolumns")," setting. With ",(0,l.kt)("inlineCode",{parentName:"p"},"optimize_functions_to_subcolumns = 1")," the function reads only ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/map#map-subcolumns"},"keys")," subcolumn instead of reading and processing the whole column data. The query ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT mapKeys(m) FROM table")," transforms to ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT m.keys FROM table"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mapKeys(map)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"map")," \u2014 Map. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/map"},"Map"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Array containing all keys from the ",(0,l.kt)("inlineCode",{parentName:"li"},"map"),".")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/array"},"Array"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test (a Map(String,String)) ENGINE = Memory;\n\nINSERT INTO test VALUES ({'name':'eleven','age':'11'}), ({'number':'twelve','position':'6.0'});\n\nSELECT mapKeys(a) FROM test;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500mapKeys(a)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ['name','age']        \u2502\n\u2502 ['number','position'] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"mapvalues"},"mapValues"),(0,l.kt)("p",null,"Returns all values from the ",(0,l.kt)("inlineCode",{parentName:"p"},"map")," parameter."),(0,l.kt)("p",null,"Can be optimized by enabling the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#optimize-functions-to-subcolumns"},"optimize_functions_to_subcolumns")," setting. With ",(0,l.kt)("inlineCode",{parentName:"p"},"optimize_functions_to_subcolumns = 1")," the function reads only ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/map#map-subcolumns"},"values")," subcolumn instead of reading and processing the whole column data. The query ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT mapValues(m) FROM table")," transforms to ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT m.values FROM table"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mapValues(map)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"map")," \u2014 Map. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/map"},"Map"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Array containing all the values from ",(0,l.kt)("inlineCode",{parentName:"li"},"map"),".")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/array"},"Array"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test (a Map(String,String)) ENGINE = Memory;\n\nINSERT INTO test VALUES ({'name':'eleven','age':'11'}), ({'number':'twelve','position':'6.0'});\n\nSELECT mapValues(a) FROM test;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500mapValues(a)\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ['eleven','11']  \u2502\n\u2502 ['twelve','6.0'] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"mapcontainskeylike"},"mapContainsKeyLike"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mapContainsKeyLike(map, pattern)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"map")," \u2014 Map. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/map"},"Map"),".  "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pattern"),"  - String pattern to match.  ")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1")," if ",(0,l.kt)("inlineCode",{parentName:"li"},"map")," contains ",(0,l.kt)("inlineCode",{parentName:"li"},"key")," like specified pattern, ",(0,l.kt)("inlineCode",{parentName:"li"},"0")," if not.  ")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test (a Map(String,String)) ENGINE = Memory;\n\nINSERT INTO test VALUES ({'abc':'abc','def':'def'}), ({'hij':'hij','klm':'klm'});\n\nSELECT mapContainsKeyLike(a, 'a%') FROM test;\n")),(0,l.kt)("p",null,"Result:  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500mapContainsKeyLike(a, 'a%')\u2500\u2510\n\u2502                           1 \u2502\n\u2502                           0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \n")),(0,l.kt)("h2",{id:"mapextractkeylike"},"mapExtractKeyLike"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mapExtractKeyLike(map, pattern)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"map")," \u2014 Map. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/map"},"Map"),".  "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pattern"),"  - String pattern to match.  ")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A map contained elements the key of which matchs the specified pattern. If there are no elements matched the pattern, it will return an empty map.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test (a Map(String,String)) ENGINE = Memory;\n\nINSERT INTO test VALUES ({'abc':'abc','def':'def'}), ({'hij':'hij','klm':'klm'});\n\nSELECT mapExtractKeyLike(a, 'a%') FROM test;\n")),(0,l.kt)("p",null,"Result:  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500mapExtractKeyLike(a, 'a%')\u2500\u2510\n\u2502 {'abc':'abc'}              \u2502\n\u2502 {}                         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"mapapply"},"mapApply"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mapApply(func, map)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"func"),"  - ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/#higher-order-functions---operator-and-lambdaparams-expr-function"},"Lamda function"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"map")," \u2014 ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/map"},"Map"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Returns a map obtained from the original map by application of ",(0,l.kt)("inlineCode",{parentName:"li"},"func(map1[i], \u2026, mapN[i])")," for each element.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT mapApply((k, v) -> (k, v * 10), _map) AS r\nFROM\n(\n    SELECT map('key1', number, 'key2', number * 2) AS _map\n    FROM numbers(3)\n)\n")),(0,l.kt)("p",null,"Result:  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500r\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 {'key1':0,'key2':0}   \u2502\n\u2502 {'key1':10,'key2':20} \u2502\n\u2502 {'key1':20,'key2':40} \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"mapfilter"},"mapFilter"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mapFilter(func, map)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"func"),"  - ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/#higher-order-functions---operator-and-lambdaparams-expr-function"},"Lamda function"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"map")," \u2014 ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/map"},"Map"),".  ")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Returns a map containing only the elements in ",(0,l.kt)("inlineCode",{parentName:"li"},"map")," for which ",(0,l.kt)("inlineCode",{parentName:"li"},"func(map1[i], \u2026, mapN[i])")," returns something other than 0.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT mapFilter((k, v) -> ((v % 2) = 0), _map) AS r\nFROM\n(\n    SELECT map('key1', number, 'key2', number * 2) AS _map\n    FROM numbers(3)\n)\n")),(0,l.kt)("p",null,"Result:  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500r\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 {'key1':0,'key2':0} \u2502\n\u2502 {'key2':2}          \u2502\n\u2502 {'key1':2,'key2':4} \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"mapupdate"},"mapUpdate"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mapUpdate(map1, map2)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"map1")," ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/map"},"Map"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"map2")," ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/map"},"Map"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Returns a map1 with values updated of values for the corresponding keys in map2.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT mapUpdate(map('key1', 0, 'key3', 0), map('key1', 10, 'key2', 10)) AS map;\n")),(0,l.kt)("p",null,"Result:  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500map\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 {'key3':0,'key1':10,'key2':10} \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/functions/tuple-map-functions/"},"Original article")," "))}c.isMDXComponent=!0},91596:function(e,t,a){a.r(t),a.d(t,{assets:function(){return o},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return k}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),p=a(20487),s=["components"],u={slug:"/zh/sql-reference/functions/tuple-map-functions",sidebar_position:46,sidebar_label:"Working with maps",title:"Functions for maps"},i=void 0,m={unversionedId:"zh/sql-reference/functions/tuple-map-functions",id:"zh/sql-reference/functions/tuple-map-functions",title:"Functions for maps",description:"",source:"@site/docs/zh/sql-reference/functions/tuple-map-functions.mdx",sourceDirName:"zh/sql-reference/functions",slug:"/zh/sql-reference/functions/tuple-map-functions",permalink:"/docs/zh/sql-reference/functions/tuple-map-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/functions/tuple-map-functions.mdx",tags:[],version:"current",sidebarPosition:46,frontMatter:{slug:"/zh/sql-reference/functions/tuple-map-functions",sidebar_position:46,sidebar_label:"Working with maps",title:"Functions for maps"},sidebar:"chinese",previous:{title:"Files",permalink:"/docs/zh/sql-reference/functions/files"},next:{title:"IN \u8fd0\u7b97\u7b26",permalink:"/docs/zh/sql-reference/functions/in-functions"}},o={},k=[],c={toc:k};function d(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(p.default,{mdxType:"Content"}))}d.isMDXComponent=!0}}]);
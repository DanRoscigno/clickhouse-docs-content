"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[54150],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return c}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(t),c=r,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return t?a.createElement(k,i(i({ref:n},u),{},{components:t})):a.createElement(k,i({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},46870:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),i=["components"],o={sidebar_label:"ORDER BY"},s="ORDER BY Clause",p={unversionedId:"en/sql-reference/statements/select/order-by",id:"en/sql-reference/statements/select/order-by",title:"ORDER BY Clause",description:"select-order-by}",source:"@site/docs/en/sql-reference/statements/select/order-by.md",sourceDirName:"en/sql-reference/statements/select",slug:"/en/sql-reference/statements/select/order-by",permalink:"/en/sql-reference/statements/select/order-by",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/select/order-by.md",tags:[],version:"current",frontMatter:{sidebar_label:"ORDER BY"},sidebar:"english",previous:{title:"OFFSET",permalink:"/en/sql-reference/statements/select/offset"},next:{title:"PREWHERE",permalink:"/en/sql-reference/statements/select/prewhere"}},u={},m=[{value:"Sorting of Special Values",id:"sorting-of-special-values",level:2},{value:"Example",id:"example",level:3},{value:"Collation Support",id:"collation-support",level:2},{value:"Collation Examples",id:"collation-examples",level:2},{value:"Implementation Details",id:"implementation-details",level:2},{value:"Optimization of Data Reading",id:"optimize_read_in_order",level:2},{value:"ORDER BY Expr WITH FILL Modifier",id:"orderby-with-fill",level:2}],d={toc:m};function c(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"select-order-by"},"ORDER BY Clause"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY")," clause contains a list of expressions, which can each be attributed with ",(0,l.kt)("inlineCode",{parentName:"p"},"DESC")," (descending) or ",(0,l.kt)("inlineCode",{parentName:"p"},"ASC")," (ascending) modifier which determine the sorting direction. If the direction is not specified, ",(0,l.kt)("inlineCode",{parentName:"p"},"ASC")," is assumed, so it\u2019s usually omitted. The sorting direction applies to a single expression, not to the entire list. Example: ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY Visits DESC, SearchPhrase"),"."),(0,l.kt)("p",null,"If you want to sort by column numbers instead of column names, enable the setting ",(0,l.kt)("a",{parentName:"p",href:"/en/operations/settings/#enable-positional-arguments"},"enable_positional_arguments"),"."),(0,l.kt)("p",null,"Rows that have identical values for the list of sorting expressions are output in an arbitrary order, which can also be non-deterministic (different each time).\nIf the ORDER BY clause is omitted, the order of the rows is also undefined, and may be non-deterministic as well."),(0,l.kt)("h2",{id:"sorting-of-special-values"},"Sorting of Special Values"),(0,l.kt)("p",null,"There are two approaches to ",(0,l.kt)("inlineCode",{parentName:"p"},"NaN")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," sorting order:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"By default or with the ",(0,l.kt)("inlineCode",{parentName:"li"},"NULLS LAST")," modifier: first the values, then ",(0,l.kt)("inlineCode",{parentName:"li"},"NaN"),", then ",(0,l.kt)("inlineCode",{parentName:"li"},"NULL"),"."),(0,l.kt)("li",{parentName:"ul"},"With the ",(0,l.kt)("inlineCode",{parentName:"li"},"NULLS FIRST")," modifier: first ",(0,l.kt)("inlineCode",{parentName:"li"},"NULL"),", then ",(0,l.kt)("inlineCode",{parentName:"li"},"NaN"),", then other values.")),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("p",null,"For the table"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500\u2500\u2500\u2500y\u2500\u2510\n\u2502 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 2 \u2502    2 \u2502\n\u2502 1 \u2502  nan \u2502\n\u2502 2 \u2502    2 \u2502\n\u2502 3 \u2502    4 \u2502\n\u2502 5 \u2502    6 \u2502\n\u2502 6 \u2502  nan \u2502\n\u2502 7 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 6 \u2502    7 \u2502\n\u2502 8 \u2502    9 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Run the query ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT * FROM t_null_nan ORDER BY y NULLS FIRST")," to get:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500\u2500\u2500\u2500y\u2500\u2510\n\u2502 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 7 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 1 \u2502  nan \u2502\n\u2502 6 \u2502  nan \u2502\n\u2502 2 \u2502    2 \u2502\n\u2502 2 \u2502    2 \u2502\n\u2502 3 \u2502    4 \u2502\n\u2502 5 \u2502    6 \u2502\n\u2502 6 \u2502    7 \u2502\n\u2502 8 \u2502    9 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"When floating point numbers are sorted, NaNs are separate from the other values. Regardless of the sorting order, NaNs come at the end. In other words, for ascending sorting they are placed as if they are larger than all the other numbers, while for descending sorting they are placed as if they are smaller than the rest."),(0,l.kt)("h2",{id:"collation-support"},"Collation Support"),(0,l.kt)("p",null,"For sorting by ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String")," values, you can specify collation (comparison). Example: ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY SearchPhrase COLLATE 'tr'")," - for sorting by keyword in ascending order, using the Turkish alphabet, case insensitive, assuming that strings are UTF-8 encoded. ",(0,l.kt)("inlineCode",{parentName:"p"},"COLLATE")," can be specified or not for each expression in ORDER BY independently. If ",(0,l.kt)("inlineCode",{parentName:"p"},"ASC")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"DESC")," is specified, ",(0,l.kt)("inlineCode",{parentName:"p"},"COLLATE")," is specified after it. When using ",(0,l.kt)("inlineCode",{parentName:"p"},"COLLATE"),", sorting is always case-insensitive."),(0,l.kt)("p",null,"Collate is supported in ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/lowcardinality"},"LowCardinality"),", ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/nullable"},"Nullable"),", ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/array"},"Array")," and ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/tuple"},"Tuple"),"."),(0,l.kt)("p",null,"We only recommend using ",(0,l.kt)("inlineCode",{parentName:"p"},"COLLATE")," for final sorting of a small number of rows, since sorting with ",(0,l.kt)("inlineCode",{parentName:"p"},"COLLATE")," is less efficient than normal sorting by bytes."),(0,l.kt)("h2",{id:"collation-examples"},"Collation Examples"),(0,l.kt)("p",null,"Example only with ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String")," values:"),(0,l.kt)("p",null,"Input table:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500s\u2500\u2500\u2500\u2500\u2510\n\u2502 1 \u2502 bca  \u2502\n\u2502 2 \u2502 ABC  \u2502\n\u2502 3 \u2502 123a \u2502\n\u2502 4 \u2502 abc  \u2502\n\u2502 5 \u2502 BCA  \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM collate_test ORDER BY s ASC COLLATE 'en';\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500s\u2500\u2500\u2500\u2500\u2510\n\u2502 3 \u2502 123a \u2502\n\u2502 4 \u2502 abc  \u2502\n\u2502 2 \u2502 ABC  \u2502\n\u2502 1 \u2502 bca  \u2502\n\u2502 5 \u2502 BCA  \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Example with ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/nullable"},"Nullable"),":"),(0,l.kt)("p",null,"Input table:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500s\u2500\u2500\u2500\u2500\u2510\n\u2502 1 \u2502 bca  \u2502\n\u2502 2 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 3 \u2502 ABC  \u2502\n\u2502 4 \u2502 123a \u2502\n\u2502 5 \u2502 abc  \u2502\n\u2502 6 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 7 \u2502 BCA  \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM collate_test ORDER BY s ASC COLLATE 'en';\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500s\u2500\u2500\u2500\u2500\u2510\n\u2502 4 \u2502 123a \u2502\n\u2502 5 \u2502 abc  \u2502\n\u2502 3 \u2502 ABC  \u2502\n\u2502 1 \u2502 bca  \u2502\n\u2502 7 \u2502 BCA  \u2502\n\u2502 6 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 2 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Example with ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/array"},"Array"),":"),(0,l.kt)("p",null,"Input table:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500s\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1 \u2502 ['Z']         \u2502\n\u2502 2 \u2502 ['z']         \u2502\n\u2502 3 \u2502 ['a']         \u2502\n\u2502 4 \u2502 ['A']         \u2502\n\u2502 5 \u2502 ['z','a']     \u2502\n\u2502 6 \u2502 ['z','a','a'] \u2502\n\u2502 7 \u2502 ['']          \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM collate_test ORDER BY s ASC COLLATE 'en';\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500s\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 7 \u2502 ['']          \u2502\n\u2502 3 \u2502 ['a']         \u2502\n\u2502 4 \u2502 ['A']         \u2502\n\u2502 2 \u2502 ['z']         \u2502\n\u2502 5 \u2502 ['z','a']     \u2502\n\u2502 6 \u2502 ['z','a','a'] \u2502\n\u2502 1 \u2502 ['Z']         \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Example with ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/lowcardinality"},"LowCardinality")," string:"),(0,l.kt)("p",null,"Input table:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500s\u2500\u2500\u2500\u2510\n\u2502 1 \u2502 Z   \u2502\n\u2502 2 \u2502 z   \u2502\n\u2502 3 \u2502 a   \u2502\n\u2502 4 \u2502 A   \u2502\n\u2502 5 \u2502 za  \u2502\n\u2502 6 \u2502 zaa \u2502\n\u2502 7 \u2502     \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM collate_test ORDER BY s ASC COLLATE 'en';\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500s\u2500\u2500\u2500\u2510\n\u2502 7 \u2502     \u2502\n\u2502 3 \u2502 a   \u2502\n\u2502 4 \u2502 A   \u2502\n\u2502 2 \u2502 z   \u2502\n\u2502 1 \u2502 Z   \u2502\n\u2502 5 \u2502 za  \u2502\n\u2502 6 \u2502 zaa \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Example with ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/tuple"},"Tuple"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500s\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1 \u2502 (1,'Z') \u2502\n\u2502 2 \u2502 (1,'z') \u2502\n\u2502 3 \u2502 (1,'a') \u2502\n\u2502 4 \u2502 (2,'z') \u2502\n\u2502 5 \u2502 (1,'A') \u2502\n\u2502 6 \u2502 (2,'Z') \u2502\n\u2502 7 \u2502 (2,'A') \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM collate_test ORDER BY s ASC COLLATE 'en';\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500s\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 3 \u2502 (1,'a') \u2502\n\u2502 5 \u2502 (1,'A') \u2502\n\u2502 2 \u2502 (1,'z') \u2502\n\u2502 1 \u2502 (1,'Z') \u2502\n\u2502 7 \u2502 (2,'A') \u2502\n\u2502 4 \u2502 (2,'z') \u2502\n\u2502 6 \u2502 (2,'Z') \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"implementation-details"},"Implementation Details"),(0,l.kt)("p",null,"Less RAM is used if a small enough ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/select/limit"},"LIMIT")," is specified in addition to ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY"),". Otherwise, the amount of memory spent is proportional to the volume of data for sorting. For distributed query processing, if ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/select/group-by"},"GROUP BY")," is omitted, sorting is partially done on remote servers, and the results are merged on the requestor server. This means that for distributed sorting, the volume of data to sort can be greater than the amount of memory on a single server."),(0,l.kt)("p",null,"If there is not enough RAM, it is possible to perform sorting in external memory (creating temporary files on a disk). Use the setting ",(0,l.kt)("inlineCode",{parentName:"p"},"max_bytes_before_external_sort")," for this purpose. If it is set to 0 (the default), external sorting is disabled. If it is enabled, when the volume of data to sort reaches the specified number of bytes, the collected data is sorted and dumped into a temporary file. After all data is read, all the sorted files are merged and the results are output. Files are written to the ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/lib/clickhouse/tmp/")," directory in the config (by default, but you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"tmp_path")," parameter to change this setting)."),(0,l.kt)("p",null,"Running a query may use more memory than ",(0,l.kt)("inlineCode",{parentName:"p"},"max_bytes_before_external_sort"),". For this reason, this setting must have a value significantly smaller than ",(0,l.kt)("inlineCode",{parentName:"p"},"max_memory_usage"),". As an example, if your server has 128 GB of RAM and you need to run a single query, set ",(0,l.kt)("inlineCode",{parentName:"p"},"max_memory_usage")," to 100 GB, and ",(0,l.kt)("inlineCode",{parentName:"p"},"max_bytes_before_external_sort")," to 80 GB."),(0,l.kt)("p",null,"External sorting works much less effectively than sorting in RAM."),(0,l.kt)("h2",{id:"optimize_read_in_order"},"Optimization of Data Reading"),(0,l.kt)("p",null," If ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY")," expression has a prefix that coincides with the table sorting key, you can optimize the query by using the ",(0,l.kt)("a",{parentName:"p",href:"/en/operations/settings/#optimize_read_in_order"},"optimize_read_in_order")," setting."),(0,l.kt)("p",null," When the ",(0,l.kt)("inlineCode",{parentName:"p"},"optimize_read_in_order")," setting is enabled, the ClickHouse server uses the table index and reads the data in order of the ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY")," key. This allows to avoid reading all data in case of specified ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/select/limit"},"LIMIT"),". So queries on big data with small limit are processed faster."),(0,l.kt)("p",null,"Optimization works with both ",(0,l.kt)("inlineCode",{parentName:"p"},"ASC")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"DESC")," and does not work together with ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/select/group-by"},"GROUP BY")," clause and ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/select/from#select-from-final"},"FINAL")," modifier."),(0,l.kt)("p",null,"When the ",(0,l.kt)("inlineCode",{parentName:"p"},"optimize_read_in_order")," setting is disabled, the ClickHouse server does not use the table index while processing ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," queries."),(0,l.kt)("p",null,"Consider disabling ",(0,l.kt)("inlineCode",{parentName:"p"},"optimize_read_in_order")," manually, when running queries that have ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY")," clause, large ",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT")," and ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/select/where"},"WHERE")," condition that requires to read huge amount of records before queried data is found."),(0,l.kt)("p",null,"Optimization is supported in the following table engines:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/en/engines/table-engines/special/merge"},"Merge"),", ",(0,l.kt)("a",{parentName:"li",href:"/en/engines/table-engines/special/buffer"},"Buffer"),", and ",(0,l.kt)("a",{parentName:"li",href:"/en/engines/table-engines/special/materializedview"},"MaterializedView")," table engines over ",(0,l.kt)("inlineCode",{parentName:"li"},"MergeTree"),"-engine tables")),(0,l.kt)("p",null,"In ",(0,l.kt)("inlineCode",{parentName:"p"},"MaterializedView"),"-engine tables the optimization works with views like ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT ... FROM merge_tree_table ORDER BY pk"),". But it is not supported in the queries like ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT ... FROM view ORDER BY pk")," if the view query does not have the ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY")," clause."),(0,l.kt)("h2",{id:"orderby-with-fill"},"ORDER BY Expr WITH FILL Modifier"),(0,l.kt)("p",null,"This modifier also can be combined with ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/select/limit#limit-with-ties"},"LIMIT \u2026 WITH TIES modifier"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"WITH FILL")," modifier can be set after ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY expr")," with optional ",(0,l.kt)("inlineCode",{parentName:"p"},"FROM expr"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"TO expr")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"STEP expr")," parameters.\nAll missed values of ",(0,l.kt)("inlineCode",{parentName:"p"},"expr")," column will be filled sequentially and other columns will be filled as defaults."),(0,l.kt)("p",null,"To fill multiple columns, add ",(0,l.kt)("inlineCode",{parentName:"p"},"WITH FILL")," modifier with optional parameters after each field name in ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY")," section."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ORDER BY expr [WITH FILL] [FROM const_expr] [TO const_expr] [STEP const_numeric_expr], ... exprN [WITH FILL] [FROM expr] [TO expr] [STEP numeric_expr]\n[INTERPOLATE [(col [AS expr], ... colN [AS exprN])]]\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"WITH FILL")," can be applied for fields with Numeric (all kinds of float, decimal, int) or Date/DateTime types. When applied for ",(0,l.kt)("inlineCode",{parentName:"p"},"String")," fields, missed values are filled with empty strings.\nWhen ",(0,l.kt)("inlineCode",{parentName:"p"},"FROM const_expr")," not defined sequence of filling use minimal ",(0,l.kt)("inlineCode",{parentName:"p"},"expr")," field value from ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY"),".\nWhen ",(0,l.kt)("inlineCode",{parentName:"p"},"TO const_expr")," not defined sequence of filling use maximum ",(0,l.kt)("inlineCode",{parentName:"p"},"expr")," field value from ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY"),".\nWhen ",(0,l.kt)("inlineCode",{parentName:"p"},"STEP const_numeric_expr")," defined then ",(0,l.kt)("inlineCode",{parentName:"p"},"const_numeric_expr")," interprets ",(0,l.kt)("inlineCode",{parentName:"p"},"as is")," for numeric types, as ",(0,l.kt)("inlineCode",{parentName:"p"},"days")," for Date type, as ",(0,l.kt)("inlineCode",{parentName:"p"},"seconds")," for DateTime type. It also supports ",(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/data-types/special-data-types/interval/"},"INTERVAL")," data type representing time and date intervals.\nWhen ",(0,l.kt)("inlineCode",{parentName:"p"},"STEP const_numeric_expr")," omitted then sequence of filling use ",(0,l.kt)("inlineCode",{parentName:"p"},"1.0")," for numeric type, ",(0,l.kt)("inlineCode",{parentName:"p"},"1 day")," for Date type and ",(0,l.kt)("inlineCode",{parentName:"p"},"1 second")," for DateTime type.\n",(0,l.kt)("inlineCode",{parentName:"p"},"INTERPOLATE")," can be applied to columns not participating in ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY WITH FILL"),". Such columns are filled based on previous fields values by applying ",(0,l.kt)("inlineCode",{parentName:"p"},"expr"),". If ",(0,l.kt)("inlineCode",{parentName:"p"},"expr")," is not present will repeate previous value. Omitted list will result in including all allowed columns."),(0,l.kt)("p",null,"Example of a query without ",(0,l.kt)("inlineCode",{parentName:"p"},"WITH FILL"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT n, source FROM (\n   SELECT toFloat32(number % 10) AS n, 'original' AS source\n   FROM numbers(10) WHERE number % 3 = 1\n) ORDER BY n;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500n\u2500\u252c\u2500source\u2500\u2500\u2500\u2510\n\u2502 1 \u2502 original \u2502\n\u2502 4 \u2502 original \u2502\n\u2502 7 \u2502 original \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Same query after applying ",(0,l.kt)("inlineCode",{parentName:"p"},"WITH FILL")," modifier:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT n, source FROM (\n   SELECT toFloat32(number % 10) AS n, 'original' AS source\n   FROM numbers(10) WHERE number % 3 = 1\n) ORDER BY n WITH FILL FROM 0 TO 5.51 STEP 0.5;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500n\u2500\u252c\u2500source\u2500\u2500\u2500\u2510\n\u2502   0 \u2502          \u2502\n\u2502 0.5 \u2502          \u2502\n\u2502   1 \u2502 original \u2502\n\u2502 1.5 \u2502          \u2502\n\u2502   2 \u2502          \u2502\n\u2502 2.5 \u2502          \u2502\n\u2502   3 \u2502          \u2502\n\u2502 3.5 \u2502          \u2502\n\u2502   4 \u2502 original \u2502\n\u2502 4.5 \u2502          \u2502\n\u2502   5 \u2502          \u2502\n\u2502 5.5 \u2502          \u2502\n\u2502   7 \u2502 original \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"For the case with multiple fields ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY field2 WITH FILL, field1 WITH FILL")," order of filling will follow the order of fields in the ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY")," clause."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    toDate((number * 10) * 86400) AS d1,\n    toDate(number * 86400) AS d2,\n    'original' AS source\nFROM numbers(10)\nWHERE (number % 3) = 1\nORDER BY\n    d2 WITH FILL,\n    d1 WITH FILL STEP 5;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500d1\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500d2\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500source\u2500\u2500\u2500\u2510\n\u2502 1970-01-11 \u2502 1970-01-02 \u2502 original \u2502\n\u2502 1970-01-01 \u2502 1970-01-03 \u2502          \u2502\n\u2502 1970-01-01 \u2502 1970-01-04 \u2502          \u2502\n\u2502 1970-02-10 \u2502 1970-01-05 \u2502 original \u2502\n\u2502 1970-01-01 \u2502 1970-01-06 \u2502          \u2502\n\u2502 1970-01-01 \u2502 1970-01-07 \u2502          \u2502\n\u2502 1970-03-12 \u2502 1970-01-08 \u2502 original \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Field ",(0,l.kt)("inlineCode",{parentName:"p"},"d1")," does not fill in and use the default value cause we do not have repeated values for ",(0,l.kt)("inlineCode",{parentName:"p"},"d2")," value, and the sequence for ",(0,l.kt)("inlineCode",{parentName:"p"},"d1")," can\u2019t be properly calculated."),(0,l.kt)("p",null,"The following query with the changed field in ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    toDate((number * 10) * 86400) AS d1,\n    toDate(number * 86400) AS d2,\n    'original' AS source\nFROM numbers(10)\nWHERE (number % 3) = 1\nORDER BY\n    d1 WITH FILL STEP 5,\n    d2 WITH FILL;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500d1\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500d2\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500source\u2500\u2500\u2500\u2510\n\u2502 1970-01-11 \u2502 1970-01-02 \u2502 original \u2502\n\u2502 1970-01-16 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-01-21 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-01-26 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-01-31 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-05 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-10 \u2502 1970-01-05 \u2502 original \u2502\n\u2502 1970-02-15 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-20 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-25 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-03-02 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-03-07 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-03-12 \u2502 1970-01-08 \u2502 original \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"The following query uses the ",(0,l.kt)("inlineCode",{parentName:"p"},"INTERVAL")," data type of 1 day for each data filled on column ",(0,l.kt)("inlineCode",{parentName:"p"},"d1"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    toDate((number * 10) * 86400) AS d1,\n    toDate(number * 86400) AS d2,\n    'original' AS source\nFROM numbers(10)\nWHERE (number % 3) = 1\nORDER BY\n    d1 WITH FILL STEP INTERVAL 1 DAY,\n    d2 WITH FILL;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500d1\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500d2\u2500\u252c\u2500source\u2500\u2500\u2500\u2510\n\u2502 1970-01-11 \u2502 1970-01-02 \u2502 original \u2502\n\u2502 1970-01-12 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-01-13 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-01-14 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-01-15 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-01-16 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-01-17 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-01-18 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-01-19 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-01-20 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-01-21 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-01-22 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-01-23 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-01-24 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-01-25 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-01-26 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-01-27 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-01-28 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-01-29 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-01-30 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-01-31 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-01 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-02 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-03 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-04 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-05 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-06 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-07 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-08 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-09 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-10 \u2502 1970-01-05 \u2502 original \u2502\n\u2502 1970-02-11 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-12 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-13 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-14 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-15 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-16 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-17 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-18 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-19 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-20 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-21 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-22 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-23 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-24 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-25 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-26 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-27 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-28 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-03-01 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-03-02 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-03-03 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-03-04 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-03-05 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-03-06 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-03-07 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-03-08 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-03-09 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-03-10 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-03-11 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-03-12 \u2502 1970-01-08 \u2502 original \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Example of a query without ",(0,l.kt)("inlineCode",{parentName:"p"},"INTERPOLATE"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT n, source, inter FROM (\n   SELECT toFloat32(number % 10) AS n, 'original' AS source, number as inter\n   FROM numbers(10) WHERE number % 3 = 1\n) ORDER BY n WITH FILL FROM 0 TO 5.51 STEP 0.5;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500n\u2500\u252c\u2500source\u2500\u2500\u2500\u252c\u2500inter\u2500\u2510\n\u2502   0 \u2502          \u2502     0 \u2502\n\u2502 0.5 \u2502          \u2502     0 \u2502\n\u2502   1 \u2502 original \u2502     1 \u2502\n\u2502 1.5 \u2502          \u2502     0 \u2502\n\u2502   2 \u2502          \u2502     0 \u2502\n\u2502 2.5 \u2502          \u2502     0 \u2502\n\u2502   3 \u2502          \u2502     0 \u2502\n\u2502 3.5 \u2502          \u2502     0 \u2502\n\u2502   4 \u2502 original \u2502     4 \u2502\n\u2502 4.5 \u2502          \u2502     0 \u2502\n\u2502   5 \u2502          \u2502     0 \u2502\n\u2502 5.5 \u2502          \u2502     0 \u2502\n\u2502   7 \u2502 original \u2502     7 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Same query after applying ",(0,l.kt)("inlineCode",{parentName:"p"},"INTERPOLATE"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT n, source, inter FROM (\n   SELECT toFloat32(number % 10) AS n, 'original' AS source, number as inter\n   FROM numbers(10) WHERE number % 3 = 1\n) ORDER BY n WITH FILL FROM 0 TO 5.51 STEP 0.5 INTERPOLATE (inter AS inter + 1);\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500n\u2500\u252c\u2500source\u2500\u2500\u2500\u252c\u2500inter\u2500\u2510\n\u2502   0 \u2502          \u2502     0 \u2502\n\u2502 0.5 \u2502          \u2502     0 \u2502\n\u2502   1 \u2502 original \u2502     1 \u2502\n\u2502 1.5 \u2502          \u2502     2 \u2502\n\u2502   2 \u2502          \u2502     3 \u2502\n\u2502 2.5 \u2502          \u2502     4 \u2502\n\u2502   3 \u2502          \u2502     5 \u2502\n\u2502 3.5 \u2502          \u2502     6 \u2502\n\u2502   4 \u2502 original \u2502     4 \u2502\n\u2502 4.5 \u2502          \u2502     5 \u2502\n\u2502   5 \u2502          \u2502     6 \u2502\n\u2502 5.5 \u2502          \u2502     7 \u2502\n\u2502   7 \u2502 original \u2502     7 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/statements/select/order-by/"},"Original article")," "))}c.isMDXComponent=!0}}]);
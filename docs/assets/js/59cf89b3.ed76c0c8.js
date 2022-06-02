"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[4058],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),k=r,d=m["".concat(o,".").concat(k)]||m[k]||c[k]||l;return n?a.createElement(d,p(p({ref:t},s),{},{components:n})):a.createElement(d,p({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var u=2;u<l;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3675:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),p=["components"],i={sidebar_position:65,sidebar_label:"Map(key, value)"},o="Map(key, value)",u={unversionedId:"ru/sql-reference/data-types/map",id:"ru/sql-reference/data-types/map",title:"Map(key, value)",description:"data_type-map}",source:"@site/docs/ru/sql-reference/data-types/map.md",sourceDirName:"ru/sql-reference/data-types",slug:"/ru/sql-reference/data-types/map",permalink:"/docs/ru/sql-reference/data-types/map",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/data-types/map.md",tags:[],version:"current",sidebarPosition:65,frontMatter:{sidebar_position:65,sidebar_label:"Map(key, value)"},sidebar:"russia",previous:{title:"\u0413\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b",permalink:"/docs/ru/sql-reference/data-types/geo"},next:{title:"SimpleAggregateFunction(func, type)",permalink:"/docs/ru/sql-reference/data-types/simpleaggregatefunction"}},s={},c=[{value:"\u041f\u043e\u0434\u0441\u0442\u043e\u043b\u0431\u0446\u044b Map.keys \u0438 Map.values",id:"map-subcolumns",level:2}],m={toc:c};function k(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"data_type-map"},"Map(key, value)"),(0,l.kt)("p",null,"\u0422\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,l.kt)("inlineCode",{parentName:"p"},"Map(key, value)")," \u0445\u0440\u0430\u043d\u0438\u0442 \u043f\u0430\u0440\u044b ",(0,l.kt)("inlineCode",{parentName:"p"},"\u043a\u043b\u044e\u0447:\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"key")," \u2014 \u043a\u043b\u044e\u0447. ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"Integer"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/lowcardinality"},"LowCardinality"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/fixedstring"},"FixedString"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/uuid"},"UUID"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/date"},"Date"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/datetime"},"DateTime"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/date32"},"Date32"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/enum"},"Enum"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value")," \u2014 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435. \u041b\u044e\u0431\u043e\u0439 \u0442\u0438\u043f, \u0432\u043a\u043b\u044e\u0447\u0430\u044f ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/map"},"Map")," \u0438 ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/array"},"Array"),".")),(0,l.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u0437 \u043a\u043e\u043b\u043e\u043d\u043a\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"a Map('key', 'value')"),", \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 ",(0,l.kt)("inlineCode",{parentName:"p"},"a['key']"),". \u0412 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0442\u0430\u043a\u0430\u044f \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043f\u043e \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0443 \u0441 \u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0439 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c\u044e."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b")),(0,l.kt)("p",null,"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0442\u0430\u0431\u043b\u0438\u0446\u0443:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_map (a Map(String, UInt64)) ENGINE=Memory;\nINSERT INTO table_map VALUES ({'key1':1, 'key2':10}), ({'key1':2,'key2':20}), ({'key1':3,'key2':30});\n")),(0,l.kt)("p",null,"\u0412\u044b\u0431\u043e\u0440\u043a\u0430 \u0432\u0441\u0435\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043a\u043b\u044e\u0447\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"key2"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a['key2'] FROM table_map;\n")),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500arrayElement(a, 'key2')\u2500\u2510\n\u2502                      10 \u2502\n\u2502                      20 \u2502\n\u2502                      30 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0434\u043b\u044f \u043a\u0430\u043a\u043e\u0433\u043e-\u0442\u043e \u043a\u043b\u044e\u0447\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"key")," \u0432 \u043a\u043e\u043b\u043e\u043d\u043a\u0435 \u0441 \u0442\u0438\u043f\u043e\u043c ",(0,l.kt)("inlineCode",{parentName:"p"},"Map()")," \u043d\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f, \u0437\u0430\u043f\u0440\u043e\u0441 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043d\u0443\u043b\u0438 \u0434\u043b\u044f \u0447\u0438\u0441\u043b\u043e\u0432\u044b\u0445 \u043a\u043e\u043b\u043e\u043d\u043e\u043a, \u043f\u0443\u0441\u0442\u044b\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0438\u043b\u0438 \u043f\u0443\u0441\u0442\u044b\u0435 \u043c\u0430\u0441\u0441\u0438\u0432\u044b."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO table_map VALUES ({'key3':100}), ({});\nSELECT a['key3'] FROM table_map;\n")),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500arrayElement(a, 'key3')\u2500\u2510\n\u2502                     100 \u2502\n\u2502                       0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500arrayElement(a, 'key3')\u2500\u2510\n\u2502                       0 \u2502\n\u2502                       0 \u2502\n\u2502                       0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"map-subcolumns"},"\u041f\u043e\u0434\u0441\u0442\u043e\u043b\u0431\u0446\u044b Map.keys \u0438 Map.values"),(0,l.kt)("p",null,"\u0414\u043b\u044f \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 ",(0,l.kt)("inlineCode",{parentName:"p"},"Map")," \u0432 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0434\u0441\u0442\u043e\u043b\u0431\u0446\u044b ",(0,l.kt)("inlineCode",{parentName:"p"},"keys")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"values")," \u0432\u043c\u0435\u0441\u0442\u043e \u0447\u0442\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0433\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u0430."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t_map (`a` Map(String, UInt64)) ENGINE = Memory;\n\nINSERT INTO t_map VALUES (map('key1', 1, 'key2', 2, 'key3', 3));\n\nSELECT a.keys FROM t_map;\n\nSELECT a.values FROM t_map;\n")),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a.keys\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ['key1','key2','key3'] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\u250c\u2500a.values\u2500\u2510\n\u2502 [1,2,3]  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0444\u0443\u043d\u043a\u0446\u0438\u044f ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/functions/tuple-map-functions#function-map"},"map()")),(0,l.kt)("li",{parentName:"ul"},"\u0444\u0443\u043d\u043a\u0446\u0438\u044f ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/functions/type-conversion-functions#type_conversion_function-cast"},"CAST()"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/ru/data-types/map/"},"Original article")," "))}k.isMDXComponent=!0}}]);
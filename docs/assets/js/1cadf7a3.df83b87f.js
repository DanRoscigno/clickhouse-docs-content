"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[11572],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(o,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35691:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],s={slug:"/en/sql-reference/statements/check-table",sidebar_position:41,sidebar_label:"CHECK",title:"CHECK TABLE Statement"},o=void 0,c={unversionedId:"en/sql-reference/statements/check-table",id:"en/sql-reference/statements/check-table",title:"CHECK TABLE Statement",description:"Checks if the data in the table is corrupted.",source:"@site/docs/en/sql-reference/statements/check-table.md",sourceDirName:"en/sql-reference/statements",slug:"/en/sql-reference/statements/check-table",permalink:"/docs/en/sql-reference/statements/check-table",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/check-table.md",tags:[],version:"current",sidebarPosition:41,frontMatter:{slug:"/en/sql-reference/statements/check-table",sidebar_position:41,sidebar_label:"CHECK",title:"CHECK TABLE Statement"},sidebar:"english",previous:{title:"ATTACH",permalink:"/docs/en/sql-reference/statements/attach"},next:{title:"DESCRIBE",permalink:"/docs/en/sql-reference/statements/describe-table"}},u={},p=[{value:"Checking the MergeTree Family Tables",id:"checking-the-mergetree-family-tables",level:2},{value:"If the Data Is Corrupted",id:"if-the-data-is-corrupted",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Checks if the data in the table is corrupted."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CHECK TABLE [db.]name\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"CHECK TABLE")," query compares actual file sizes with the expected values which are stored on the server. If the file sizes do not match the stored values, it means the data is corrupted. This can be caused, for example, by a system crash during query execution."),(0,l.kt)("p",null,"The query response contains the ",(0,l.kt)("inlineCode",{parentName:"p"},"result")," column with a single row. The row has a value of\n",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/boolean"},"Boolean")," type:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"0 - The data in the table is corrupted."),(0,l.kt)("li",{parentName:"ul"},"1 - The data maintains integrity.")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"CHECK TABLE")," query supports the following table engines:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/log-family/log"},"Log")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/log-family/tinylog"},"TinyLog")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/log-family/stripelog"},"StripeLog")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree family"))),(0,l.kt)("p",null,"Performed over the tables with another table engines causes an exception."),(0,l.kt)("p",null,"Engines from the ",(0,l.kt)("inlineCode",{parentName:"p"},"*Log")," family do not provide automatic data recovery on failure. Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"CHECK TABLE")," query to track data loss in a timely manner."),(0,l.kt)("h2",{id:"checking-the-mergetree-family-tables"},"Checking the MergeTree Family Tables"),(0,l.kt)("p",null,"For ",(0,l.kt)("inlineCode",{parentName:"p"},"MergeTree")," family engines, if ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#check_query_single_value_result"},"check_query_single_value_result")," = 0, the ",(0,l.kt)("inlineCode",{parentName:"p"},"CHECK TABLE")," query shows a check status for every individual data part of a table on the local server."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SET check_query_single_value_result = 0;\nCHECK TABLE test_table;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500part_path\u2500\u252c\u2500is_passed\u2500\u252c\u2500message\u2500\u2510\n\u2502 all_1_4_1 \u2502         1 \u2502         \u2502\n\u2502 all_1_4_2 \u2502         1 \u2502         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"check_query_single_value_result")," = 1, the ",(0,l.kt)("inlineCode",{parentName:"p"},"CHECK TABLE")," query shows the general table check status."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SET check_query_single_value_result = 1;\nCHECK TABLE test_table;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500result\u2500\u2510\n\u2502      1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"if-the-data-is-corrupted"},"If the Data Is Corrupted"),(0,l.kt)("p",null,"If the table is corrupted, you can copy the non-corrupted data to another table. To do this:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create a new table with the same structure as damaged table. To do this execute the query ",(0,l.kt)("inlineCode",{parentName:"li"},"CREATE TABLE <new_table_name> AS <damaged_table_name>"),"."),(0,l.kt)("li",{parentName:"ol"},"Set the ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/operations/settings/settings#settings-max_threads"},"max_threads")," value to 1 to process the next query in a single thread. To do this run the query ",(0,l.kt)("inlineCode",{parentName:"li"},"SET max_threads = 1"),"."),(0,l.kt)("li",{parentName:"ol"},"Execute the query ",(0,l.kt)("inlineCode",{parentName:"li"},"INSERT INTO <new_table_name> SELECT * FROM <damaged_table_name>"),". This request copies the non-corrupted data from the damaged table to another table. Only the data before the corrupted part will be copied."),(0,l.kt)("li",{parentName:"ol"},"Restart the ",(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse-client")," to reset the ",(0,l.kt)("inlineCode",{parentName:"li"},"max_threads")," value.")))}d.isMDXComponent=!0}}]);
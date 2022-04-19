"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[93550],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40745:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],o={sidebar_position:70,sidebar_label:"Join"},s="Join Table Engine",p={unversionedId:"en/engines/table-engines/special/join",id:"en/engines/table-engines/special/join",title:"Join Table Engine",description:"join}",source:"@site/docs/en/engines/table-engines/special/join.md",sourceDirName:"en/engines/table-engines/special",slug:"/en/engines/table-engines/special/join",permalink:"/en/engines/table-engines/special/join",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/special/join.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70,sidebar_label:"Join"},sidebar:"english",previous:{title:"Set",permalink:"/en/engines/table-engines/special/set"},next:{title:"URL",permalink:"/en/engines/table-engines/special/url"}},c={},d=[{value:"Creating a Table",id:"creating-a-table",level:2},{value:"Specifics and Recommendations",id:"specifics-and-recommendations",level:2},{value:"Data Storage",id:"data-storage",level:3},{value:"Selecting and Inserting Data",id:"selecting-and-inserting-data",level:3},{value:"Deleting Data",id:"deleting-data",level:3},{value:"Limitations and Settings",id:"join-limitations-and-settings",level:3},{value:"Usage Examples",id:"example",level:2}],m={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"join"},"Join Table Engine"),(0,r.kt)("p",null,"Optional prepared data structure for usage in ",(0,r.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/select/join#select-join"},"JOIN")," operations."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This is not an article about the ",(0,r.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/select/join#select-join"},"JOIN clause")," itself."))),(0,r.kt)("h2",{id:"creating-a-table"},"Creating a Table"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1] [TTL expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2] [TTL expr2],\n) ENGINE = Join(join_strictness, join_type, k1[, k2, ...])\n")),(0,r.kt)("p",null,"See the detailed description of the ",(0,r.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/create/table#create-table-query"},"CREATE TABLE")," query."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Engine Parameters")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"join_strictness")," \u2013 ",(0,r.kt)("a",{parentName:"li",href:"/en/sql-reference/statements/select/join#select-join-types"},"JOIN strictness"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"join_type")," \u2013 ",(0,r.kt)("a",{parentName:"li",href:"/en/sql-reference/statements/select/join#select-join-types"},"JOIN type"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"k1[, k2, ...]")," \u2013 Key columns from the ",(0,r.kt)("inlineCode",{parentName:"li"},"USING")," clause that the ",(0,r.kt)("inlineCode",{parentName:"li"},"JOIN")," operation is made with.")),(0,r.kt)("p",null,"Enter ",(0,r.kt)("inlineCode",{parentName:"p"},"join_strictness")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"join_type")," parameters without quotes, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"Join(ANY, LEFT, col1)"),". They must match the ",(0,r.kt)("inlineCode",{parentName:"p"},"JOIN")," operation that the table will be used for. If the parameters do not match, ClickHouse does not throw an exception and may return incorrect data."),(0,r.kt)("h2",{id:"specifics-and-recommendations"},"Specifics and Recommendations"),(0,r.kt)("h3",{id:"data-storage"},"Data Storage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Join")," table data is always located in the RAM. When inserting rows into a table, ClickHouse writes data blocks to the directory on the disk so that they can be restored when the server restarts."),(0,r.kt)("p",null,"If the server restarts incorrectly, the data block on the disk might get lost or damaged. In this case, you may need to manually delete the file with damaged data."),(0,r.kt)("h3",{id:"selecting-and-inserting-data"},"Selecting and Inserting Data"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," queries to add data to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Join"),"-engine tables. If the table was created with the ",(0,r.kt)("inlineCode",{parentName:"p"},"ANY")," strictness, data for duplicate keys are ignored. With the ",(0,r.kt)("inlineCode",{parentName:"p"},"ALL")," strictness, all rows are added."),(0,r.kt)("p",null,"Main use-cases for ",(0,r.kt)("inlineCode",{parentName:"p"},"Join"),"-engine tables are following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Place the table to the right side in a ",(0,r.kt)("inlineCode",{parentName:"li"},"JOIN")," clause."),(0,r.kt)("li",{parentName:"ul"},"Call the ",(0,r.kt)("a",{parentName:"li",href:"/en/sql-reference/functions/other-functions#joinget"},"joinGet")," function, which lets you extract data from the table the same way as from a dictionary.")),(0,r.kt)("h3",{id:"deleting-data"},"Deleting Data"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ALTER DELETE")," queries for ",(0,r.kt)("inlineCode",{parentName:"p"},"Join"),"-engine tables are implemented as ",(0,r.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/alter/#mutations"},"mutations"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," mutation reads filtered data and overwrites data of memory and disk."),(0,r.kt)("h3",{id:"join-limitations-and-settings"},"Limitations and Settings"),(0,r.kt)("p",null,"When creating a table, the following settings are applied:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/en/operations/settings/#join_use_nulls"},"join_use_nulls")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/en/operations/settings/query-complexity#settings-max_rows_in_join"},"max_rows_in_join")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/en/operations/settings/query-complexity#settings-max_bytes_in_join"},"max_bytes_in_join")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/en/operations/settings/query-complexity#settings-join_overflow_mode"},"join_overflow_mode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/en/operations/settings/#settings-join_any_take_last_row"},"join_any_take_last_row")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/en/operations/settings/#persistent"},"persistent"))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Join"),"-engine tables can\u2019t be used in ",(0,r.kt)("inlineCode",{parentName:"p"},"GLOBAL JOIN")," operations."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Join"),"-engine allows to specify ",(0,r.kt)("a",{parentName:"p",href:"/en/operations/settings/#join_use_nulls"},"join_use_nulls")," setting in the ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," statement. ",(0,r.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/select/"},"SELECT")," query should have the same ",(0,r.kt)("inlineCode",{parentName:"p"},"join_use_nulls")," value."),(0,r.kt)("h2",{id:"example"},"Usage Examples"),(0,r.kt)("p",null,"Creating the left-side table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE id_val(`id` UInt32, `val` UInt32) ENGINE = TinyLog;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO id_val VALUES (1,11)(2,12)(3,13);\n")),(0,r.kt)("p",null,"Creating the right-side ",(0,r.kt)("inlineCode",{parentName:"p"},"Join")," table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE id_val_join(`id` UInt32, `val` UInt8) ENGINE = Join(ANY, LEFT, id);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO id_val_join VALUES (1,21)(1,22)(3,23);\n")),(0,r.kt)("p",null,"Joining the tables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM id_val ANY LEFT JOIN id_val_join USING (id);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500val\u2500\u252c\u2500id_val_join.val\u2500\u2510\n\u2502  1 \u2502  11 \u2502              21 \u2502\n\u2502  2 \u2502  12 \u2502               0 \u2502\n\u2502  3 \u2502  13 \u2502              23 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"As an alternative, you can retrieve data from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Join")," table, specifying the join key value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT joinGet('id_val_join', 'val', toUInt32(1));\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500joinGet('id_val_join', 'val', toUInt32(1))\u2500\u2510\n\u2502                                         21 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Deleting a row from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Join")," table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE id_val_join DELETE WHERE id = 3;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500val\u2500\u2510\n\u2502  1 \u2502  21 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/table_engines/special/join/"},"Original article")," "))}u.isMDXComponent=!0}}]);
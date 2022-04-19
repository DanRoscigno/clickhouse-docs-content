"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[61624],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||s;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<s;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44125:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),l=["components"],o={sidebar_position:42,sidebar_label:"postgresql"},i="postgresql",p={unversionedId:"en/sql-reference/table-functions/postgresql",id:"en/sql-reference/table-functions/postgresql",title:"postgresql",description:"postgresql}",source:"@site/docs/en/sql-reference/table-functions/postgresql.md",sourceDirName:"en/sql-reference/table-functions",slug:"/en/sql-reference/table-functions/postgresql",permalink:"/en/sql-reference/table-functions/postgresql",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/table-functions/postgresql.md",tags:[],version:"current",sidebarPosition:42,frontMatter:{sidebar_position:42,sidebar_label:"postgresql"},sidebar:"english",previous:{title:"mysql",permalink:"/en/sql-reference/table-functions/mysql"},next:{title:"jdbc",permalink:"/en/sql-reference/table-functions/jdbc"}},c={},u=[{value:"Implementation Details",id:"implementation-details",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"postgresql"},"postgresql"),(0,s.kt)("p",null,"Allows ",(0,s.kt)("inlineCode",{parentName:"p"},"SELECT")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"INSERT")," queries to be performed on data that is stored on a remote PostgreSQL server."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"postgresql('host:port', 'database', 'table', 'user', 'password'[, `schema`])\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Arguments")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"host:port")," \u2014 PostgreSQL server address."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"database")," \u2014 Remote database name."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"table")," \u2014 Remote table name."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"user")," \u2014 PostgreSQL user."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"password")," \u2014 User password."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"schema")," \u2014 Non-default table schema. Optional.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returned Value")),(0,s.kt)("p",null,"A table object with the same columns as the original PostgreSQL table."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"In the ",(0,s.kt)("inlineCode",{parentName:"p"},"INSERT")," query to distinguish table function ",(0,s.kt)("inlineCode",{parentName:"p"},"postgresql(...)")," from table name with column names list you must use keywords ",(0,s.kt)("inlineCode",{parentName:"p"},"FUNCTION")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"TABLE FUNCTION"),". See examples below."))),(0,s.kt)("h2",{id:"implementation-details"},"Implementation Details"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"SELECT")," queries on PostgreSQL side run as ",(0,s.kt)("inlineCode",{parentName:"p"},"COPY (SELECT ...) TO STDOUT")," inside read-only PostgreSQL transaction with commit after each ",(0,s.kt)("inlineCode",{parentName:"p"},"SELECT")," query."),(0,s.kt)("p",null,"Simple ",(0,s.kt)("inlineCode",{parentName:"p"},"WHERE")," clauses such as ",(0,s.kt)("inlineCode",{parentName:"p"},"="),", ",(0,s.kt)("inlineCode",{parentName:"p"},"!="),", ",(0,s.kt)("inlineCode",{parentName:"p"},">"),", ",(0,s.kt)("inlineCode",{parentName:"p"},">="),", ",(0,s.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"<="),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"IN")," are executed on the PostgreSQL server."),(0,s.kt)("p",null,"All joins, aggregations, sorting, ",(0,s.kt)("inlineCode",{parentName:"p"},"IN [ array ]")," conditions and the ",(0,s.kt)("inlineCode",{parentName:"p"},"LIMIT")," sampling constraint are executed in ClickHouse only after the query to PostgreSQL finishes."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"INSERT")," queries on PostgreSQL side run as ",(0,s.kt)("inlineCode",{parentName:"p"},'COPY "table_name" (field1, field2, ... fieldN) FROM STDIN')," inside PostgreSQL transaction with auto-commit after each ",(0,s.kt)("inlineCode",{parentName:"p"},"INSERT")," statement."),(0,s.kt)("p",null,"PostgreSQL Array types converts into ClickHouse arrays."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Be careful, in PostgreSQL an array data type column like Integer[] may contain arrays of different dimensions in different rows, but in ClickHouse it is only allowed to have multidimensional arrays of the same dimension in all rows."))),(0,s.kt)("p",null,"Supports multiple replicas that must be listed by ",(0,s.kt)("inlineCode",{parentName:"p"},"|"),". For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name FROM postgresql(`postgres{1|2|3}:5432`, 'postgres_database', 'postgres_table', 'user', 'password');\n")),(0,s.kt)("p",null,"or"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name FROM postgresql(`postgres1:5431|postgres2:5432`, 'postgres_database', 'postgres_table', 'user', 'password');\n")),(0,s.kt)("p",null,"Supports replicas priority for PostgreSQL dictionary source. The bigger the number in map, the less the priority. The highest priority is ",(0,s.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Examples")),(0,s.kt)("p",null,"Table in PostgreSQL:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'postgres=# CREATE TABLE "public"."test" (\n"int_id" SERIAL,\n"int_nullable" INT NULL DEFAULT NULL,\n"float" FLOAT NOT NULL,\n"str" VARCHAR(100) NOT NULL DEFAULT \'\',\n"float_nullable" FLOAT NULL DEFAULT NULL,\nPRIMARY KEY (int_id));\n\nCREATE TABLE\n\npostgres=# INSERT INTO test (int_id, str, "float") VALUES (1,\'test\',2);\nINSERT 0 1\n\npostgresql> SELECT * FROM test;\n  int_id | int_nullable | float | str  | float_nullable\n --------+--------------+-------+------+----------------\n       1 |              |     2 | test |\n(1 row)\n')),(0,s.kt)("p",null,"Selecting data from ClickHouse:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM postgresql('localhost:5432', 'test', 'test', 'postgresql_user', 'password') WHERE str IN ('test');\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500int_id\u2500\u252c\u2500int_nullable\u2500\u252c\u2500float\u2500\u252c\u2500str\u2500\u2500\u252c\u2500float_nullable\u2500\u2510\n\u2502      1 \u2502         \u1d3a\u1d41\u1d38\u1d38 \u2502     2 \u2502 test \u2502           \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,"Inserting:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO TABLE FUNCTION postgresql('localhost:5432', 'test', 'test', 'postgrsql_user', 'password') (int_id, float) VALUES (2, 3);\nSELECT * FROM postgresql('localhost:5432', 'test', 'test', 'postgresql_user', 'password');\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500int_id\u2500\u252c\u2500int_nullable\u2500\u252c\u2500float\u2500\u252c\u2500str\u2500\u2500\u252c\u2500float_nullable\u2500\u2510\n\u2502      1 \u2502         \u1d3a\u1d41\u1d38\u1d38 \u2502     2 \u2502 test \u2502           \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502      2 \u2502         \u1d3a\u1d41\u1d38\u1d38 \u2502     3 \u2502      \u2502           \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,"Using Non-default Schema:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'postgres=# CREATE SCHEMA "nice.schema";\n\npostgres=# CREATE TABLE "nice.schema"."nice.table" (a integer);\n\npostgres=# INSERT INTO "nice.schema"."nice.table" SELECT i FROM generate_series(0, 99) as t(i)\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE pg_table_schema_with_dots (a UInt32)\n        ENGINE PostgreSQL('localhost:5432', 'clickhouse', 'nice.table', 'postgrsql_user', 'password', 'nice.schema');\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"See Also")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/en/engines/table-engines/integrations/postgresql"},"The PostgreSQL table engine")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources#dicts-external_dicts_dict_sources-postgresql"},"Using PostgreSQL as a source of external dictionary"))),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/table-functions/postgresql/"},"Original article")," "))}d.isMDXComponent=!0}}]);
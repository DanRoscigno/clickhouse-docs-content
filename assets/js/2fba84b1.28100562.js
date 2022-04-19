"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[4298],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),o=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=o(a),c=r,k=m["".concat(i,".").concat(c)]||m[c]||d[c]||l;return a?n.createElement(k,s(s({ref:t},u),{},{components:a})):n.createElement(k,s({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var o=2;o<l;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},10997:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return d}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),s=["components"],p={sidebar_position:35,sidebar_label:"PostgreSQL"},i="PostgreSQL",o={unversionedId:"zh/engines/database-engines/postgresql",id:"zh/engines/database-engines/postgresql",title:"PostgreSQL",description:"postgresql}",source:"@site/docs/zh/engines/database-engines/postgresql.md",sourceDirName:"zh/engines/database-engines",slug:"/zh/engines/database-engines/postgresql",permalink:"/zh/engines/database-engines/postgresql",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/database-engines/postgresql.md",tags:[],version:"current",sidebarPosition:35,frontMatter:{sidebar_position:35,sidebar_label:"PostgreSQL"},sidebar:"chinese",previous:{title:"SQLite",permalink:"/zh/engines/database-engines/sqlite"},next:{title:"[experimental] Replicated",permalink:"/zh/engines/database-engines/replicated"}},u={},d=[{value:"\u521b\u5efa\u6570\u636e\u5e93",id:"creating-a-database",level:2},{value:"\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b",id:"data_types-support",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"examples-of-use",level:2}],m={toc:d};function c(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"postgresql"},"PostgreSQL"),(0,l.kt)("p",null,"\u5141\u8bb8\u8fde\u63a5\u5230\u8fdc\u7a0b",(0,l.kt)("a",{parentName:"p",href:"https://www.postgresql.org"},"PostgreSQL"),"\u670d\u52a1\u3002\u652f\u6301\u8bfb\u5199\u64cd\u4f5c(",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT"),"\u67e5\u8be2)\uff0c\u4ee5\u5728ClickHouse\u548cPostgreSQL\u4e4b\u95f4\u4ea4\u6362\u6570\u636e\u3002"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"SHOW TABLES"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"DESCRIBE TABLE"),"\u67e5\u8be2\u7684\u5e2e\u52a9\u4e0b\uff0c\u4ece\u8fdc\u7a0bPostgreSQL\u5b9e\u65f6\u8bbf\u95ee\u8868\u5217\u8868\u548c\u8868\u7ed3\u6784\u3002"),(0,l.kt)("p",null,"\u652f\u6301\u8868\u7ed3\u6784\u4fee\u6539(",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER TABLE ... ADD|DROP COLUMN"),")\u3002\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"p"},"use_table_cache"),"\u53c2\u6570(\u53c2\u89c1\u4e0b\u9762\u7684\u5f15\u64ce\u53c2\u6570)\u8bbe\u7f6e\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"1"),"\uff0c\u5219\u4f1a\u7f13\u5b58\u8868\u7ed3\u6784\uff0c\u4e0d\u4f1a\u68c0\u67e5\u662f\u5426\u88ab\u4fee\u6539\uff0c\u4f46\u53ef\u4ee5\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"DETACH"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"ATTACH"),"\u67e5\u8be2\u8fdb\u884c\u66f4\u65b0\u3002"),(0,l.kt)("h2",{id:"creating-a-database"},"\u521b\u5efa\u6570\u636e\u5e93"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE test_database \nENGINE = PostgreSQL('host:port', 'database', 'user', 'password'[, `use_table_cache`]);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5f15\u64ce\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"host:port")," \u2014 PostgreSQL\u670d\u52a1\u5730\u5740"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"database")," \u2014 \u8fdc\u7a0b\u6570\u636e\u5e93\u540d\u6b21"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"user")," \u2014 PostgreSQL\u7528\u6237\u540d\u79f0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"password")," \u2014 PostgreSQL\u7528\u6237\u5bc6\u7801"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"schema")," - PostgreSQL \u6a21\u5f0f"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"use_table_cache")," \u2014  \u5b9a\u4e49\u6570\u636e\u5e93\u8868\u7ed3\u6784\u662f\u5426\u5df2\u7f13\u5b58\u6216\u4e0d\u8fdb\u884c\u3002\u53ef\u9009\u7684\u3002\u9ed8\u8ba4\u503c\uff1a ",(0,l.kt)("inlineCode",{parentName:"li"},"0"),".")),(0,l.kt)("h2",{id:"data_types-support"},"\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"PostgerSQL"),(0,l.kt)("th",{parentName:"tr",align:null},"ClickHouse"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATE"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh/sql-reference/data-types/date"},"Date"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh/sql-reference/data-types/datetime"},"DateTime"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REAL"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh/sql-reference/data-types/float"},"Float32"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh/sql-reference/data-types/float"},"Float64"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL, NUMERIC"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh/sql-reference/data-types/decimal"},"Decimal"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SMALLINT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh/sql-reference/data-types/int-uint"},"Int16"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh/sql-reference/data-types/int-uint"},"Int32"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BIGINT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh/sql-reference/data-types/int-uint"},"Int64"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SERIAL"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh/sql-reference/data-types/int-uint"},"UInt32"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BIGSERIAL"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh/sql-reference/data-types/int-uint"},"UInt64"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TEXT, CHAR"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh/sql-reference/data-types/string"},"String"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:null},"Nullable(",(0,l.kt)("a",{parentName:"td",href:"/zh/sql-reference/data-types/int-uint"},"Int32"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ARRAY"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh/sql-reference/data-types/array"},"Array"))))),(0,l.kt)("h2",{id:"examples-of-use"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.kt)("p",null,"ClickHouse\u4e2d\u7684\u6570\u636e\u5e93\uff0c\u4e0ePostgreSQL\u670d\u52a1\u5668\u4ea4\u6362\u6570\u636e:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE test_database \nENGINE = PostgreSQL('postgres1:5432', 'test_database', 'postgres', 'mysecretpassword', 1);\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW DATABASES;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 default       \u2502\n\u2502 test_database \u2502\n\u2502 system        \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW TABLES FROM test_database;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 test_table \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u4ecePostgreSQL\u8868\u4e2d\u8bfb\u53d6\u6570\u636e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM test_database.test_table;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500value\u2500\u2510\n\u2502  1 \u2502     2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u5c06\u6570\u636e\u5199\u5165PostgreSQL\u8868\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO test_database.test_table VALUES (3,4);\nSELECT * FROM test_database.test_table;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500int_id\u2500\u252c\u2500value\u2500\u2510\n\u2502      1 \u2502     2 \u2502\n\u2502      3 \u2502     4 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u5728PostgreSQL\u4e2d\u4fee\u6539\u4e86\u8868\u7ed3\u6784\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"postgre> ALTER TABLE test_table ADD COLUMN data Text\n")),(0,l.kt)("p",null,"\u5f53\u521b\u5efa\u6570\u636e\u5e93\u65f6\uff0c\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"use_table_cache"),"\u88ab\u8bbe\u7f6e\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"1"),"\uff0cClickHouse\u4e2d\u7684\u8868\u7ed3\u6784\u88ab\u7f13\u5b58\uff0c\u56e0\u6b64\u6ca1\u6709\u88ab\u4fee\u6539:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DESCRIBE TABLE test_database.test_table;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u252c\u2500type\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 id     \u2502 Nullable(Integer) \u2502\n\u2502 value  \u2502 Nullable(Integer) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u5206\u79bb\u8868\u5e76\u518d\u6b21\u9644\u52a0\u5b83\u4e4b\u540e\uff0c\u7ed3\u6784\u88ab\u66f4\u65b0\u4e86:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DETACH TABLE test_database.test_table;\nATTACH TABLE test_database.test_table;\nDESCRIBE TABLE test_database.test_table;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u252c\u2500type\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 id     \u2502 Nullable(Integer) \u2502\n\u2502 value  \u2502 Nullable(Integer) \u2502\n\u2502 data   \u2502 Nullable(String)  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/database-engines/postgresql/"},"\u6765\u6e90\u6587\u7ae0")," "))}c.isMDXComponent=!0}}]);
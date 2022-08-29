"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[59791,86892],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),o=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=o(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||s;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var o=2;o<s;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18675:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),i=["components"],l={slug:"/en/sql-reference/statements/attach",sidebar_position:40,sidebar_label:"ATTACH",title:"ATTACH Statement"},c=void 0,o={unversionedId:"en/sql-reference/statements/attach",id:"en/sql-reference/statements/attach",title:"ATTACH Statement",description:"Attaches a table or a dictionary, for example, when moving a database to another server.",source:"@site/docs/en/sql-reference/statements/attach.md",sourceDirName:"en/sql-reference/statements",slug:"/en/sql-reference/statements/attach",permalink:"/docs/en/sql-reference/statements/attach",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/attach.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{slug:"/en/sql-reference/statements/attach",sidebar_position:40,sidebar_label:"ATTACH",title:"ATTACH Statement"},sidebar:"english",previous:{title:"REVOKE",permalink:"/docs/en/sql-reference/statements/revoke"},next:{title:"CHECK",permalink:"/docs/en/sql-reference/statements/check-table"}},u={},p=[{value:"Attach Existing Table",id:"attach-existing-table",level:2},{value:"Create New Table And Attach Data",id:"create-new-table-and-attach-data",level:2},{value:"With Specified Path to Table Data",id:"with-specified-path-to-table-data",level:3},{value:"With Specified Table UUID",id:"with-specified-table-uuid",level:3},{value:"Attach Existing Dictionary",id:"attach-existing-dictionary",level:2}],d={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Attaches a table or a dictionary, for example, when moving a database to another server."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"ATTACH TABLE|DICTIONARY [IF NOT EXISTS] [db.]name [ON CLUSTER cluster] ...\n")),(0,s.kt)("p",null,"The query does not create data on the disk, but assumes that data is already in the appropriate places, and just adds information about the table or the dictionary to the server. After executing the ",(0,s.kt)("inlineCode",{parentName:"p"},"ATTACH")," query, the server will know about the existence of the table or the dictionary."),(0,s.kt)("p",null,"If a table was previously detached (",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/detach"},"DETACH")," query), meaning that its structure is known, you can use shorthand without defining the structure."),(0,s.kt)("h2",{id:"attach-existing-table"},"Attach Existing Table"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"ATTACH TABLE [IF NOT EXISTS] [db.]name [ON CLUSTER cluster]\n")),(0,s.kt)("p",null,"This query is used when starting the server. The server stores table metadata as files with ",(0,s.kt)("inlineCode",{parentName:"p"},"ATTACH")," queries, which it simply runs at launch (with the exception of some system tables, which are explicitly created on the server)."),(0,s.kt)("p",null,"If the table was detached permanently, it won't be reattached at the server start, so you need to use ",(0,s.kt)("inlineCode",{parentName:"p"},"ATTACH")," query explicitly."),(0,s.kt)("h2",{id:"create-new-table-and-attach-data"},"Create New Table And Attach Data"),(0,s.kt)("h3",{id:"with-specified-path-to-table-data"},"With Specified Path to Table Data"),(0,s.kt)("p",null,"The query creates a new table with provided structure and attaches table data from the provided directory in ",(0,s.kt)("inlineCode",{parentName:"p"},"user_files"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"ATTACH TABLE name FROM 'path/to/data/' (col1 Type1, ...)\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example")),(0,s.kt)("p",null,"Query:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE IF EXISTS test;\nINSERT INTO TABLE FUNCTION file('01188_attach/test/data.TSV', 'TSV', 's String, n UInt8') VALUES ('test', 42);\nATTACH TABLE test FROM '01188_attach/test' (s String, n UInt8) ENGINE = File(TSV);\nSELECT * FROM test;\n")),(0,s.kt)("p",null,"Result:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"\u250c\u2500s\u2500\u2500\u2500\u2500\u252c\u2500\u2500n\u2500\u2510\n\u2502 test \u2502 42 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("h3",{id:"with-specified-table-uuid"},"With Specified Table UUID"),(0,s.kt)("p",null,"This query creates a new table with provided structure and attaches data from the table with the specified UUID.\nIt is supported by the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/engines/database-engines/atomic"},"Atomic")," database engine."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"ATTACH TABLE name UUID '<uuid>' (col1 Type1, ...)\n")),(0,s.kt)("h2",{id:"attach-existing-dictionary"},"Attach Existing Dictionary"),(0,s.kt)("p",null,"Attaches a previously detached dictionary."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"ATTACH DICTIONARY [IF NOT EXISTS] [db.]name [ON CLUSTER cluster]\n")))}h.isMDXComponent=!0},69548:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),i=n(18675),l=["components"],c={slug:"/zh/sql-reference/statements/attach",sidebar_position:40,sidebar_label:"ATTACH",title:"ATTACH Statement"},o=void 0,u={unversionedId:"zh/sql-reference/statements/attach",id:"zh/sql-reference/statements/attach",title:"ATTACH Statement",description:"",source:"@site/docs/zh/sql-reference/statements/attach.mdx",sourceDirName:"zh/sql-reference/statements",slug:"/zh/sql-reference/statements/attach",permalink:"/docs/zh/sql-reference/statements/attach",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/attach.mdx",tags:[],version:"current",sidebarPosition:40,frontMatter:{slug:"/zh/sql-reference/statements/attach",sidebar_position:40,sidebar_label:"ATTACH",title:"ATTACH Statement"},sidebar:"chinese",previous:{title:"\u6388\u6743\u64cd\u4f5c",permalink:"/docs/zh/sql-reference/statements/grant"},next:{title:"REVOKE",permalink:"/docs/zh/sql-reference/statements/revoke"}},p={},d=[],h={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.default,{mdxType:"Content"}))}m.isMDXComponent=!0}}]);
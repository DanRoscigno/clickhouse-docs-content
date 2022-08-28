"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[76363],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return T}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),T=a,f=m["".concat(s,".").concat(T)]||m[T]||u[T]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function T(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73031:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return T},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={slug:"/en/sql-reference/statements/alter/ttl",sidebar_position:44,sidebar_label:"TTL"},s="Manipulations with Table TTL",c={unversionedId:"en/sql-reference/statements/alter/ttl",id:"en/sql-reference/statements/alter/ttl",title:"Manipulations with Table TTL",description:"MODIFY TTL",source:"@site/docs/en/sql-reference/statements/alter/ttl.md",sourceDirName:"en/sql-reference/statements/alter",slug:"/en/sql-reference/statements/alter/ttl",permalink:"/docs/en/sql-reference/statements/alter/ttl",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/alter/ttl.md",tags:[],version:"current",sidebarPosition:44,frontMatter:{slug:"/en/sql-reference/statements/alter/ttl",sidebar_position:44,sidebar_label:"TTL"},sidebar:"english",previous:{title:"CONSTRAINT",permalink:"/docs/en/sql-reference/statements/alter/constraint"},next:{title:"USER",permalink:"/docs/en/sql-reference/statements/alter/user"}},p={},u=[{value:"MODIFY TTL",id:"modify-ttl",level:2},{value:"REMOVE TTL",id:"remove-ttl",level:2}],m={toc:u};function T(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"manipulations-with-table-ttl"},"Manipulations with Table TTL"),(0,l.kt)("h2",{id:"modify-ttl"},"MODIFY TTL"),(0,l.kt)("p",null,"You can change ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree#mergetree-table-ttl"},"table TTL")," with a request of the following form:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name MODIFY TTL ttl_expression;\n")),(0,l.kt)("h2",{id:"remove-ttl"},"REMOVE TTL"),(0,l.kt)("p",null,"TTL-property can be removed from table with the following query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name REMOVE TTL\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Consider the table with table ",(0,l.kt)("inlineCode",{parentName:"p"},"TTL"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_with_ttl\n(\n    event_time DateTime,\n    UserID UInt64,\n    Comment String\n)\nENGINE MergeTree()\nORDER BY tuple()\nTTL event_time + INTERVAL 3 MONTH\nSETTINGS min_bytes_for_wide_part = 0;\n\nINSERT INTO table_with_ttl VALUES (now(), 1, 'username1');\n\nINSERT INTO table_with_ttl VALUES (now() - INTERVAL 4 MONTH, 2, 'username2');\n")),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"OPTIMIZE")," to force ",(0,l.kt)("inlineCode",{parentName:"p"},"TTL")," cleanup:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE table_with_ttl FINAL;\nSELECT * FROM table_with_ttl FORMAT PrettyCompact;\n")),(0,l.kt)("p",null,"Second row was deleted from table."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500event_time\u2500\u2500\u2500\u2500\u252c\u2500\u2500UserID\u2500\u252c\u2500\u2500\u2500\u2500\u2500Comment\u2500\u2500\u2510\n\u2502   2020-12-11 12:44:57 \u2502       1 \u2502    username1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Now remove table ",(0,l.kt)("inlineCode",{parentName:"p"},"TTL")," with the following query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_with_ttl REMOVE TTL;\n")),(0,l.kt)("p",null,"Re-insert the deleted row and force the ",(0,l.kt)("inlineCode",{parentName:"p"},"TTL")," cleanup again with ",(0,l.kt)("inlineCode",{parentName:"p"},"OPTIMIZE"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO table_with_ttl VALUES (now() - INTERVAL 4 MONTH, 2, 'username2');\nOPTIMIZE TABLE table_with_ttl FINAL;\nSELECT * FROM table_with_ttl FORMAT PrettyCompact;\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"TTL")," is no longer there, so the second row is not deleted:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500event_time\u2500\u2500\u2500\u2500\u252c\u2500\u2500UserID\u2500\u252c\u2500\u2500\u2500\u2500\u2500Comment\u2500\u2500\u2510\n\u2502   2020-12-11 12:44:57 \u2502       1 \u2502    username1 \u2502\n\u2502   2020-08-11 12:44:57 \u2502       2 \u2502    username2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See Also")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"More about the ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/create/table#ttl-expression"},"TTL-expression"),"."),(0,l.kt)("li",{parentName:"ul"},"Modify column ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/column#alter_modify-column"},"with TTL"),".")))}T.isMDXComponent=!0}}]);
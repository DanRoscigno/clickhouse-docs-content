"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[43064],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(o,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3248:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],s={sidebar_position:42,sidebar_label:"DESCRIBE"},o="DESCRIBE TABLE",c={unversionedId:"en/sql-reference/statements/describe-table",id:"en/sql-reference/statements/describe-table",title:"DESCRIBE TABLE",description:"misc-describe-table}",source:"@site/docs/en/sql-reference/statements/describe-table.md",sourceDirName:"en/sql-reference/statements",slug:"/en/sql-reference/statements/describe-table",permalink:"/en/sql-reference/statements/describe-table",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/describe-table.md",tags:[],version:"current",sidebarPosition:42,frontMatter:{sidebar_position:42,sidebar_label:"DESCRIBE"},sidebar:"english",previous:{title:"CHECK",permalink:"/en/sql-reference/statements/check-table"},next:{title:"DETACH",permalink:"/en/sql-reference/statements/detach"}},u={},p=[],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"misc-describe-table"},"DESCRIBE TABLE"),(0,l.kt)("p",null,"Returns information about table columns."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DESC|DESCRIBE TABLE [db.]table [INTO OUTFILE filename] [FORMAT format]\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"DESCRIBE")," statement returns a row for each table column with the following ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String")," values:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," \u2014 A column name."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"type")," \u2014 A column type."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"default_type")," \u2014 A clause that is used in the column ",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/statements/create/table#create-default-values"},"default expression"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"DEFAULT"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"MATERIALIZED")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"ALIAS"),". If there is no default expression, then empty string is returned."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"default_expression")," \u2014 An expression specified after the ",(0,l.kt)("inlineCode",{parentName:"li"},"DEFAULT")," clause."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"comment")," \u2014 A ",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/statements/alter/column#alter_comment-column"},"column comment"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"codec_expression")," \u2014 A ",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/statements/create/table#codecs"},"codec")," that is applied to the column."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ttl_expression")," \u2014 A ",(0,l.kt)("a",{parentName:"li",href:"/en/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-ttl"},"TTL")," expression."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"is_subcolumn")," \u2014 A flag that equals ",(0,l.kt)("inlineCode",{parentName:"li"},"1")," for internal subcolumns. It is included into the result only if subcolumn description is enabled by the ",(0,l.kt)("a",{parentName:"li",href:"/en/operations/settings/#describe_include_subcolumns"},"describe_include_subcolumns")," setting.")),(0,l.kt)("p",null,"All columns in ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/nested-data-structures/nested"},"Nested")," data structures are described separately. The name of each column is prefixed with a parent column name and a dot."),(0,l.kt)("p",null,"To show internal subcolumns of other data types, use the ",(0,l.kt)("a",{parentName:"p",href:"/en/operations/settings/#describe_include_subcolumns"},"describe_include_subcolumns")," setting. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE describe_example (\n    id UInt64, text String DEFAULT 'unknown' CODEC(ZSTD),\n    user Tuple (name String, age UInt8)\n) ENGINE = MergeTree() ORDER BY id;\n\nDESCRIBE TABLE describe_example;\nDESCRIBE TABLE describe_example SETTINGS describe_include_subcolumns=1;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u252c\u2500type\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500default_type\u2500\u252c\u2500default_expression\u2500\u252c\u2500comment\u2500\u252c\u2500codec_expression\u2500\u252c\u2500ttl_expression\u2500\u2510\n\u2502 id   \u2502 UInt64                        \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 text \u2502 String                        \u2502 DEFAULT      \u2502 'unknown'          \u2502         \u2502 ZSTD(1)          \u2502                \u2502\n\u2502 user \u2502 Tuple(name String, age UInt8) \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"The second query additionally shows subcolumns:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500type\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500default_type\u2500\u252c\u2500default_expression\u2500\u252c\u2500comment\u2500\u252c\u2500codec_expression\u2500\u252c\u2500ttl_expression\u2500\u252c\u2500is_subcolumn\u2500\u2510\n\u2502 id        \u2502 UInt64                        \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502            0 \u2502\n\u2502 text      \u2502 String                        \u2502 DEFAULT      \u2502 'unknown'          \u2502         \u2502 ZSTD(1)          \u2502                \u2502            0 \u2502\n\u2502 user      \u2502 Tuple(name String, age UInt8) \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502            0 \u2502\n\u2502 user.name \u2502 String                        \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502            1 \u2502\n\u2502 user.age  \u2502 UInt8                         \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502            1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See Also")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/en/operations/settings/#describe_include_subcolumns"},"describe_include_subcolumns")," setting.")))}d.isMDXComponent=!0}}]);
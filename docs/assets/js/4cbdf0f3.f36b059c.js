"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[62857],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return k}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(t),k=r,u=d["".concat(p,".").concat(k)]||d[k]||m[k]||i;return t?a.createElement(u,l(l({ref:n},c),{},{components:t})):a.createElement(u,l({ref:n},c))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},52552:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),l=["components"],o={slug:"/en/sql-reference/statements/optimize",sidebar_position:47,sidebar_label:"OPTIMIZE"},p="OPTIMIZE Statement",s={unversionedId:"en/sql-reference/statements/optimize",id:"en/sql-reference/statements/optimize",title:"OPTIMIZE Statement",description:"This query tries to initialize an unscheduled merge of data parts for tables.",source:"@site/docs/en/sql-reference/statements/optimize.md",sourceDirName:"en/sql-reference/statements",slug:"/en/sql-reference/statements/optimize",permalink:"/docs/en/sql-reference/statements/optimize",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/optimize.md",tags:[],version:"current",sidebarPosition:47,frontMatter:{slug:"/en/sql-reference/statements/optimize",sidebar_position:47,sidebar_label:"OPTIMIZE"},sidebar:"english",previous:{title:"KILL",permalink:"/docs/en/sql-reference/statements/kill"},next:{title:"RENAME",permalink:"/docs/en/sql-reference/statements/rename"}},c={},m=[{value:"BY expression",id:"by-expression",level:2}],d={toc:m};function k(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"optimize-statement"},"OPTIMIZE Statement"),(0,i.kt)("p",null,"This query tries to initialize an unscheduled merge of data parts for tables."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"OPTIMIZE")," can\u2019t fix the ",(0,i.kt)("inlineCode",{parentName:"p"},"Too many parts")," error."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE [db.]name [ON CLUSTER cluster] [PARTITION partition | PARTITION ID 'partition_id'] [FINAL] [DEDUPLICATE [BY expression]]\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"OPTIMIZE")," query is supported for ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," family, the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/materializedview"},"MaterializedView")," and the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/buffer"},"Buffer")," engines. Other table engines aren\u2019t supported."),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"OPTIMIZE")," is used with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/replication"},"ReplicatedMergeTree")," family of table engines, ClickHouse creates a task for merging and waits for execution on all replicas (if the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#replication-alter-partitions-sync"},"replication_alter_partitions_sync")," setting is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),") or on current replica (if the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#replication-alter-partitions-sync"},"replication_alter_partitions_sync")," setting is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),")."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"OPTIMIZE")," does not perform a merge for any reason, it does not notify the client. To enable notifications, use the ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/operations/settings/settings#setting-optimize_throw_if_noop"},"optimize_throw_if_noop")," setting."),(0,i.kt)("li",{parentName:"ul"},"If you specify a ",(0,i.kt)("inlineCode",{parentName:"li"},"PARTITION"),", only the specified partition is optimized. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/#alter-how-to-specify-part-expr"},"How to set partition expression"),"."),(0,i.kt)("li",{parentName:"ul"},"If you specify ",(0,i.kt)("inlineCode",{parentName:"li"},"FINAL"),", optimization is performed even when all the data is already in one part. Also merge is forced even if concurrent merges are performed."),(0,i.kt)("li",{parentName:"ul"},"If you specify ",(0,i.kt)("inlineCode",{parentName:"li"},"DEDUPLICATE"),", then completely identical rows (unless by-clause is specified) will be deduplicated (all columns are compared), it makes sense only for the MergeTree engine.")),(0,i.kt)("p",null,"You can specify how long (in seconds) to wait for inactive replicas to execute ",(0,i.kt)("inlineCode",{parentName:"p"},"OPTIMIZE")," queries by the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#replication-wait-for-inactive-replica-timeout"},"replication_wait_for_inactive_replica_timeout")," setting."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"replication_alter_partitions_sync")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," and some replicas are not active for more than the time, specified by the ",(0,i.kt)("inlineCode",{parentName:"p"},"replication_wait_for_inactive_replica_timeout")," setting, then an exception ",(0,i.kt)("inlineCode",{parentName:"p"},"UNFINISHED")," is thrown."))),(0,i.kt)("h2",{id:"by-expression"},"BY expression"),(0,i.kt)("p",null,"If you want to perform deduplication on custom set of columns rather than on all, you can specify list of columns explicitly or use any combination of ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/#asterisk"},(0,i.kt)("inlineCode",{parentName:"a"},"*")),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/#columns-expression"},(0,i.kt)("inlineCode",{parentName:"a"},"COLUMNS"))," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/#except-modifier"},(0,i.kt)("inlineCode",{parentName:"a"},"EXCEPT"))," expressions. The explictly written or implicitly expanded list of columns must include all columns specified in row ordering expression (both primary and sorting keys) and partitioning expression (partitioning key)."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Notice that ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," behaves just like in ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/table#materialized"},"MATERIALIZED")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/table#alias"},"ALIAS")," columns are not used for expansion."),(0,i.kt)("p",{parentName:"div"},"Also, it is an error to specify empty list of columns, or write an expression that results in an empty list of columns, or deduplicate by an ",(0,i.kt)("inlineCode",{parentName:"p"},"ALIAS")," column."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE table DEDUPLICATE; -- all columns\nOPTIMIZE TABLE table DEDUPLICATE BY *; -- excludes MATERIALIZED and ALIAS columns\nOPTIMIZE TABLE table DEDUPLICATE BY colX,colY,colZ;\nOPTIMIZE TABLE table DEDUPLICATE BY * EXCEPT colX;\nOPTIMIZE TABLE table DEDUPLICATE BY * EXCEPT (colX, colY);\nOPTIMIZE TABLE table DEDUPLICATE BY COLUMNS('column-matched-by-regex');\nOPTIMIZE TABLE table DEDUPLICATE BY COLUMNS('column-matched-by-regex') EXCEPT colX;\nOPTIMIZE TABLE table DEDUPLICATE BY COLUMNS('column-matched-by-regex') EXCEPT (colX, colY);\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples")),(0,i.kt)("p",null,"Consider the table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE example (\n    primary_key Int32,\n    secondary_key Int32,\n    value UInt32,\n    partition_key UInt32,\n    materialized_value UInt32 MATERIALIZED 12345,\n    aliased_value UInt32 ALIAS 2,\n    PRIMARY KEY primary_key\n) ENGINE=MergeTree\nPARTITION BY partition_key\nORDER BY (primary_key, secondary_key);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO example (primary_key, secondary_key, value, partition_key)\nVALUES (0, 0, 0, 0), (0, 0, 0, 0), (1, 1, 2, 2), (1, 1, 2, 3), (1, 1, 3, 3);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM example;\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           0 \u2502             0 \u2502     0 \u2502             0 \u2502\n\u2502           0 \u2502             0 \u2502     0 \u2502             0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             3 \u2502\n\u2502           1 \u2502             1 \u2502     3 \u2502             3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"When columns for deduplication are not specified, all of them are taken into account. Row is removed only if all values in all columns are equal to corresponding values in previous row:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE example FINAL DEDUPLICATE;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM example;\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           0 \u2502             0 \u2502     0 \u2502             0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             3 \u2502\n\u2502           1 \u2502             1 \u2502     3 \u2502             3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"When columns are specified implicitly, the table is deduplicated by all columns that are not ",(0,i.kt)("inlineCode",{parentName:"p"},"ALIAS")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"MATERIALIZED"),". Considering the table above, these are ",(0,i.kt)("inlineCode",{parentName:"p"},"primary_key"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"secondary_key"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"partition_key")," columns:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE example FINAL DEDUPLICATE BY *;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM example;\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           0 \u2502             0 \u2502     0 \u2502             0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             3 \u2502\n\u2502           1 \u2502             1 \u2502     3 \u2502             3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Deduplicate by all columns that are not ",(0,i.kt)("inlineCode",{parentName:"p"},"ALIAS")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"MATERIALIZED")," and explicitly not ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"primary_key"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"secondary_key"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"partition_key")," columns."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE example FINAL DEDUPLICATE BY * EXCEPT value;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM example;\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           0 \u2502             0 \u2502     0 \u2502             0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Deduplicate explicitly by ",(0,i.kt)("inlineCode",{parentName:"p"},"primary_key"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"secondary_key"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"partition_key")," columns:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE example FINAL DEDUPLICATE BY primary_key, secondary_key, partition_key;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM example;\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           0 \u2502             0 \u2502     0 \u2502             0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Deduplicate by any column matching a regex: ",(0,i.kt)("inlineCode",{parentName:"p"},"primary_key"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"secondary_key"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"partition_key")," columns:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE example FINAL DEDUPLICATE BY COLUMNS('.*_key');\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM example;\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           0 \u2502             0 \u2502     0 \u2502             0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500primary_key\u2500\u252c\u2500secondary_key\u2500\u252c\u2500value\u2500\u252c\u2500partition_key\u2500\u2510\n\u2502           1 \u2502             1 \u2502     2 \u2502             3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}k.isMDXComponent=!0}}]);
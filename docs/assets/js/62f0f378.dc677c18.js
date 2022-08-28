"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[97546],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23323:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={slug:"/en/engines/table-engines/mergetree-family/custom-partitioning-key",sidebar_position:30,sidebar_label:"Custom Partitioning Key"},l="Custom Partitioning Key",p={unversionedId:"en/engines/table-engines/mergetree-family/custom-partitioning-key",id:"en/engines/table-engines/mergetree-family/custom-partitioning-key",title:"Custom Partitioning Key",description:"In most cases you do not need a partition key, and in most other cases you do not need a partition key more granular than by months. Partitioning does not speed up queries (in contrast to the ORDER BY expression).",source:"@site/docs/en/engines/table-engines/mergetree-family/custom-partitioning-key.md",sourceDirName:"en/engines/table-engines/mergetree-family",slug:"/en/engines/table-engines/mergetree-family/custom-partitioning-key",permalink:"/docs/en/engines/table-engines/mergetree-family/custom-partitioning-key",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/mergetree-family/custom-partitioning-key.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{slug:"/en/engines/table-engines/mergetree-family/custom-partitioning-key",sidebar_position:30,sidebar_label:"Custom Partitioning Key"},sidebar:"english",previous:{title:"Data Replication",permalink:"/docs/en/engines/table-engines/mergetree-family/replication"},next:{title:"ReplacingMergeTree",permalink:"/docs/en/engines/table-engines/mergetree-family/replacingmergetree"}},m={},c=[],d={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-partitioning-key"},"Custom Partitioning Key"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In most cases you do not need a partition key, and in most other cases you do not need a partition key more granular than by months. Partitioning does not speed up queries (in contrast to the ORDER BY expression)."),(0,r.kt)("p",{parentName:"div"},"You should never use too granular of partitioning. Don't partition your data by client identifiers or names. Instead, make a client identifier or name the first column in the ORDER BY expression."))),(0,r.kt)("p",null,"Partitioning is available for the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," family tables (including ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/replication"},"replicated")," tables). ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/materializedview#materializedview"},"Materialized views")," based on MergeTree tables support partitioning, as well."),(0,r.kt)("p",null,"A partition is a logical combination of records in a table by a specified criterion. You can set a partition by an arbitrary criterion, such as by month, by day, or by event type. Each partition is stored separately to simplify manipulations of this data. When accessing the data, ClickHouse uses the smallest subset of partitions possible."),(0,r.kt)("p",null,"The partition is specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"PARTITION BY expr")," clause when ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-creating-a-table"},"creating a table"),". The partition key can be any expression from the table columns. For example, to specify partitioning by month, use the expression ",(0,r.kt)("inlineCode",{parentName:"p"},"toYYYYMM(date_column)"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE visits\n(\n    VisitDate Date,\n    Hour UInt8,\n    ClientID UUID\n)\nENGINE = MergeTree()\nPARTITION BY toYYYYMM(VisitDate)\nORDER BY Hour;\n")),(0,r.kt)("p",null,"The partition key can also be a tuple of expressions (similar to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree#primary-keys-and-indexes-in-queries"},"primary key"),"). For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ENGINE = ReplicatedCollapsingMergeTree('/clickhouse/tables/name', 'replica1', Sign)\nPARTITION BY (toMonday(StartDate), EventType)\nORDER BY (CounterID, StartDate, intHash32(UserID));\n")),(0,r.kt)("p",null,"In this example, we set partitioning by the event types that occurred during the current week."),(0,r.kt)("p",null,"By default, the floating-point partition key is not supported. To use it enable the setting ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/merge-tree-settings#allow_floating_point_partition_key"},"allow_floating_point_partition_key"),"."),(0,r.kt)("p",null,"When inserting new data to a table, this data is stored as a separate part (chunk) sorted by the primary key. In 10-15 minutes after inserting, the parts of the same partition are merged into the entire part."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A merge only works for data parts that have the same value for the partitioning expression. This means ",(0,r.kt)("strong",{parentName:"p"},"you shouldn\u2019t make overly granular partitions")," (more than about a thousand partitions). Otherwise, the ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," query performs poorly because of an unreasonably large number of files in the file system and open file descriptors."))),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/system-tables/parts#system_tables-parts"},"system.parts")," table to view the table parts and partitions. For example, let\u2019s assume that we have a ",(0,r.kt)("inlineCode",{parentName:"p"},"visits")," table with partitioning by month. Let\u2019s perform the ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," query for the ",(0,r.kt)("inlineCode",{parentName:"p"},"system.parts")," table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    partition,\n    name,\n    active\nFROM system.parts\nWHERE table = 'visits'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500partition\u2500\u252c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500active\u2500\u2510\n\u2502 201901    \u2502 201901_1_3_1      \u2502      0 \u2502\n\u2502 201901    \u2502 201901_1_9_2_11   \u2502      1 \u2502\n\u2502 201901    \u2502 201901_8_8_0      \u2502      0 \u2502\n\u2502 201901    \u2502 201901_9_9_0      \u2502      0 \u2502\n\u2502 201902    \u2502 201902_4_6_1_11   \u2502      1 \u2502\n\u2502 201902    \u2502 201902_10_10_0_11 \u2502      1 \u2502\n\u2502 201902    \u2502 201902_11_11_0_11 \u2502      1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"partition")," column contains the names of the partitions. There are two partitions in this example: ",(0,r.kt)("inlineCode",{parentName:"p"},"201901")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"201902"),". You can use this column value to specify the partition name in ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/partition"},"ALTER \u2026 PARTITION")," queries."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," column contains the names of the partition data parts. You can use this column to specify the name of the part in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/partition#alter_attach-partition"},"ALTER ATTACH PART")," query."),(0,r.kt)("p",null,"Let\u2019s break down the name of the part: ",(0,r.kt)("inlineCode",{parentName:"p"},"201901_1_9_2_11"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"201901")," is the partition name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1")," is the minimum number of the data block."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"9")," is the maximum number of the data block."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"2")," is the chunk level (the depth of the merge tree it is formed from)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"11")," is the mutation version (if a part mutated)")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The parts of old-type tables have the name: ",(0,r.kt)("inlineCode",{parentName:"p"},"20190117_20190123_2_2_0")," (minimum date - maximum date - minimum block number - maximum block number - level)."))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"active")," column shows the status of the part. ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," is active; ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," is inactive. The inactive parts are, for example, source parts remaining after merging to a larger part. The corrupted data parts are also indicated as inactive."),(0,r.kt)("p",null,"As you can see in the example, there are several separated parts of the same partition (for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"201901_1_3_1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"201901_1_9_2"),"). This means that these parts are not merged yet. ClickHouse merges the inserted parts of data periodically, approximately 15 minutes after inserting. In addition, you can perform a non-scheduled merge using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/optimize"},"OPTIMIZE")," query. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE visits PARTITION 201902;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500partition\u2500\u252c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500active\u2500\u2510\n\u2502 201901    \u2502 201901_1_3_1     \u2502      0 \u2502\n\u2502 201901    \u2502 201901_1_9_2_11  \u2502      1 \u2502\n\u2502 201901    \u2502 201901_8_8_0     \u2502      0 \u2502\n\u2502 201901    \u2502 201901_9_9_0     \u2502      0 \u2502\n\u2502 201902    \u2502 201902_4_6_1     \u2502      0 \u2502\n\u2502 201902    \u2502 201902_4_11_2_11 \u2502      1 \u2502\n\u2502 201902    \u2502 201902_10_10_0   \u2502      0 \u2502\n\u2502 201902    \u2502 201902_11_11_0   \u2502      0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Inactive parts will be deleted approximately 10 minutes after merging."),(0,r.kt)("p",null,"Another way to view a set of parts and partitions is to go into the directory of the table: ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/clickhouse/data/<database>/<table>/"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/var/lib/clickhouse/data/default/visits$ ls -l\ntotal 40\ndrwxr-xr-x 2 clickhouse clickhouse 4096 Feb  1 16:48 201901_1_3_1\ndrwxr-xr-x 2 clickhouse clickhouse 4096 Feb  5 16:17 201901_1_9_2_11\ndrwxr-xr-x 2 clickhouse clickhouse 4096 Feb  5 15:52 201901_8_8_0\ndrwxr-xr-x 2 clickhouse clickhouse 4096 Feb  5 15:52 201901_9_9_0\ndrwxr-xr-x 2 clickhouse clickhouse 4096 Feb  5 16:17 201902_10_10_0\ndrwxr-xr-x 2 clickhouse clickhouse 4096 Feb  5 16:17 201902_11_11_0\ndrwxr-xr-x 2 clickhouse clickhouse 4096 Feb  5 16:19 201902_4_11_2_11\ndrwxr-xr-x 2 clickhouse clickhouse 4096 Feb  5 12:09 201902_4_6_1\ndrwxr-xr-x 2 clickhouse clickhouse 4096 Feb  1 16:48 detached\n")),(0,r.kt)("p",null,"The folders \u2018201901_1_1_0\u2019, \u2018201901_1_7_1\u2019 and so on are the directories of the parts. Each part relates to a corresponding partition and contains data just for a certain month (the table in this example has partitioning by month)."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"detached")," directory contains parts that were detached from the table using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/partition#alter_detach-partition"},"DETACH")," query. The corrupted parts are also moved to this directory, instead of being deleted. The server does not use the parts from the ",(0,r.kt)("inlineCode",{parentName:"p"},"detached")," directory. You can add, delete, or modify the data in this directory at any time \u2013 the server will not know about this until you run the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/partition#alter_attach-partition"},"ATTACH")," query."),(0,r.kt)("p",null,"Note that on the operating server, you cannot manually change the set of parts or their data on the file system, since the server will not know about it. For non-replicated tables, you can do this when the server is stopped, but it isn\u2019t recommended. For replicated tables, the set of parts cannot be changed in any case."),(0,r.kt)("p",null,"ClickHouse allows you to perform operations with the partitions: delete them, copy from one table to another, or create a backup. See the list of all operations in the section ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/partition#alter_manipulations-with-partitions"},"Manipulations With Partitions and Parts"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/table_engines/custom_partitioning_key/"},"Original article")," "))}u.isMDXComponent=!0}}]);
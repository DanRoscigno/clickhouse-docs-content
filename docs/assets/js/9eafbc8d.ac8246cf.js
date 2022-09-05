"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[78114],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,h=u["".concat(o,".").concat(m)]||u[m]||c[m]||i;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var d=2;d<i;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7766:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),s=["components"],l={slug:"/en/engines/database-engines/replicated",sidebar_position:30,sidebar_label:"Replicated"},o="[experimental] Replicated",d={unversionedId:"en/engines/database-engines/replicated",id:"en/engines/database-engines/replicated",title:"[experimental] Replicated",description:"The engine is based on the Atomic engine. It supports replication of metadata via DDL log being written to ZooKeeper and executed on all of the replicas for a given database.",source:"@site/docs/en/engines/database-engines/replicated.md",sourceDirName:"en/engines/database-engines",slug:"/en/engines/database-engines/replicated",permalink:"/docs/en/engines/database-engines/replicated",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/database-engines/replicated.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{slug:"/en/engines/database-engines/replicated",sidebar_position:30,sidebar_label:"Replicated"},sidebar:"english",previous:{title:"Lazy",permalink:"/docs/en/engines/database-engines/lazy"},next:{title:"PostgreSQL",permalink:"/docs/en/engines/database-engines/postgresql"}},p={},c=[{value:"Creating a Database",id:"creating-a-database",level:2},{value:"Specifics and Recommendations",id:"specifics-and-recommendations",level:2},{value:"Usage Example",id:"usage-example",level:2}],u={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"experimental-replicated"},"[experimental]"," Replicated"),(0,i.kt)("p",null,"The engine is based on the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/database-engines/atomic"},"Atomic")," engine. It supports replication of metadata via DDL log being written to ZooKeeper and executed on all of the replicas for a given database."),(0,i.kt)("p",null,"One ClickHouse server can have multiple replicated databases running and updating at the same time. But there can't be multiple replicas of the same replicated database."),(0,i.kt)("h2",{id:"creating-a-database"},"Creating a Database"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE testdb ENGINE = Replicated('zoo_path', 'shard_name', 'replica_name') [SETTINGS ...]\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Engine Parameters")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"zoo_path")," \u2014 ZooKeeper path. The same ZooKeeper path corresponds to the same database."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"shard_name")," \u2014 Shard name. Database replicas are grouped into shards by ",(0,i.kt)("inlineCode",{parentName:"li"},"shard_name"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"replica_name")," \u2014 Replica name. Replica names must be different for all replicas of the same shard.")),(0,i.kt)("p",null,"For ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/replication#table_engines-replication"},"ReplicatedMergeTree")," tables if no arguments provided, then default arguments are used: ",(0,i.kt)("inlineCode",{parentName:"p"},"/clickhouse/tables/{uuid}/{shard}")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"{replica}"),". These can be changed in the server settings ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/server-configuration-parameters/settings#default_replica_path"},"default_replica_path")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/server-configuration-parameters/settings#default_replica_name"},"default_replica_name"),". Macro ",(0,i.kt)("inlineCode",{parentName:"p"},"{uuid}")," is unfolded to table's uuid, ",(0,i.kt)("inlineCode",{parentName:"p"},"{shard}")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"{replica}")," are unfolded to values from server config, not from database engine arguments. But in the future, it will be possible to use ",(0,i.kt)("inlineCode",{parentName:"p"},"shard_name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"replica_name")," of Replicated database."),(0,i.kt)("h2",{id:"specifics-and-recommendations"},"Specifics and Recommendations"),(0,i.kt)("p",null,"DDL queries with ",(0,i.kt)("inlineCode",{parentName:"p"},"Replicated")," database work in a similar way to ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/distributed-ddl"},"ON CLUSTER")," queries, but with minor differences."),(0,i.kt)("p",null,"First, the DDL request tries to execute on the initiator (the host that originally received the request from the user). If the request is not fulfilled, then the user immediately receives an error, other hosts do not try to fulfill it. If the request has been successfully completed on the initiator, then all other hosts will automatically retry until they complete it. The initiator will try to wait for the query to be completed on other hosts (no longer than ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#distributed_ddl_task_timeout"},"distributed_ddl_task_timeout"),") and will return a table with the query execution statuses on each host."),(0,i.kt)("p",null,"The behavior in case of errors is regulated by the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#distributed_ddl_output_mode"},"distributed_ddl_output_mode")," setting, for a ",(0,i.kt)("inlineCode",{parentName:"p"},"Replicated")," database it is better to set it to ",(0,i.kt)("inlineCode",{parentName:"p"},"null_status_on_timeout")," \u2014 i.e. if some hosts did not have time to execute the request for ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#distributed_ddl_task_timeout"},"distributed_ddl_task_timeout"),", then do not throw an exception, but show the ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," status for them in the table."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/system-tables/clusters"},"system.clusters")," system table contains a cluster named like the replicated database, which consists of all replicas of the database. This cluster is updated automatically when creating/deleting replicas, and it can be used for ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/distributed#distributed"},"Distributed")," tables."),(0,i.kt)("p",null,"When creating a new replica of the database, this replica creates tables by itself. If the replica has been unavailable for a long time and has lagged behind the replication log \u2014 it checks its local metadata with the current metadata in ZooKeeper, moves the extra tables with data to a separate non-replicated database (so as not to accidentally delete anything superfluous), creates the missing tables, updates the table names if they have been renamed. The data is replicated at the ",(0,i.kt)("inlineCode",{parentName:"p"},"ReplicatedMergeTree")," level, i.e. if the table is not replicated, the data will not be replicated (the database is responsible only for metadata)."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/partition"},(0,i.kt)("inlineCode",{parentName:"a"},"ALTER TABLE ATTACH|FETCH|DROP|DROP DETACHED|DETACH PARTITION|PART"))," queries are allowed but not replicated. The database engine will only add/fetch/remove the partition/part to the current replica. However, if the table itself uses a Replicated table engine, then the data will be replicated after using ",(0,i.kt)("inlineCode",{parentName:"p"},"ATTACH"),"."),(0,i.kt)("h2",{id:"usage-example"},"Usage Example"),(0,i.kt)("p",null,"Creating a cluster with three hosts:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"node1 :) CREATE DATABASE r ENGINE=Replicated('some/path/r','shard1','replica1');\nnode2 :) CREATE DATABASE r ENGINE=Replicated('some/path/r','shard1','other_replica');\nnode3 :) CREATE DATABASE r ENGINE=Replicated('some/path/r','other_shard','{replica}');\n")),(0,i.kt)("p",null,"Running the DDL-query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE r.rmt (n UInt64) ENGINE=ReplicatedMergeTree ORDER BY n;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500hosts\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500status\u2500\u252c\u2500error\u2500\u252c\u2500num_hosts_remaining\u2500\u252c\u2500num_hosts_active\u2500\u2510\n\u2502 shard1|replica1      \u2502    0    \u2502       \u2502          2          \u2502        0         \u2502\n\u2502 shard1|other_replica \u2502    0    \u2502       \u2502          1          \u2502        0         \u2502\n\u2502 other_shard|r1       \u2502    0    \u2502       \u2502          0          \u2502        0         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Showing the system table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT cluster, shard_num, replica_num, host_name, host_address, port, is_local\nFROM system.clusters WHERE cluster='r';\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500cluster\u2500\u252c\u2500shard_num\u2500\u252c\u2500replica_num\u2500\u252c\u2500host_name\u2500\u252c\u2500host_address\u2500\u252c\u2500port\u2500\u252c\u2500is_local\u2500\u2510\n\u2502 r       \u2502     1     \u2502      1      \u2502   node3   \u2502  127.0.0.1   \u2502 9002 \u2502     0    \u2502\n\u2502 r       \u2502     2     \u2502      1      \u2502   node2   \u2502  127.0.0.1   \u2502 9001 \u2502     0    \u2502\n\u2502 r       \u2502     2     \u2502      2      \u2502   node1   \u2502  127.0.0.1   \u2502 9000 \u2502     1    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Creating a distributed table and inserting the data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"node2 :) CREATE TABLE r.d (n UInt64) ENGINE=Distributed('r','r','rmt', n % 2);\nnode3 :) INSERT INTO r.d SELECT * FROM numbers(10);\nnode1 :) SELECT materialize(hostName()) AS host, groupArray(n) FROM r.d GROUP BY host;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500hosts\u2500\u252c\u2500groupArray(n)\u2500\u2510\n\u2502 node1 \u2502  [1,3,5,7,9]  \u2502\n\u2502 node2 \u2502  [0,2,4,6,8]  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Adding replica on the one more host:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"node4 :) CREATE DATABASE r ENGINE=Replicated('some/path/r','other_shard','r2');\n")),(0,i.kt)("p",null,"The cluster configuration will look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500cluster\u2500\u252c\u2500shard_num\u2500\u252c\u2500replica_num\u2500\u252c\u2500host_name\u2500\u252c\u2500host_address\u2500\u252c\u2500port\u2500\u252c\u2500is_local\u2500\u2510\n\u2502 r       \u2502     1     \u2502      1      \u2502   node3   \u2502  127.0.0.1   \u2502 9002 \u2502     0    \u2502\n\u2502 r       \u2502     1     \u2502      2      \u2502   node4   \u2502  127.0.0.1   \u2502 9003 \u2502     0    \u2502\n\u2502 r       \u2502     2     \u2502      1      \u2502   node2   \u2502  127.0.0.1   \u2502 9001 \u2502     0    \u2502\n\u2502 r       \u2502     2     \u2502      2      \u2502   node1   \u2502  127.0.0.1   \u2502 9000 \u2502     1    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"The distributed table also will get data from the new host:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"node2 :) SELECT materialize(hostName()) AS host, groupArray(n) FROM r.d GROUP BY host;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500hosts\u2500\u252c\u2500groupArray(n)\u2500\u2510\n\u2502 node2 \u2502  [1,3,5,7,9]  \u2502\n\u2502 node4 \u2502  [0,2,4,6,8]  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);
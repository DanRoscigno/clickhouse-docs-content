"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[45801],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=o(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55956:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],p={},s="[experimental] Replicated",o={unversionedId:"zh/engines/database-engines/replicated",id:"zh/engines/database-engines/replicated",title:"[experimental] Replicated",description:"replicated}",source:"@site/docs/zh/engines/database-engines/replicated.md",sourceDirName:"zh/engines/database-engines",slug:"/zh/engines/database-engines/replicated",permalink:"/zh/engines/database-engines/replicated",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/database-engines/replicated.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"PostgreSQL",permalink:"/zh/engines/database-engines/postgresql"},next:{title:"index",permalink:"/zh/engines/"}},d={},c=[{value:"\u521b\u5efa\u6570\u636e\u5e93",id:"creating-a-database",level:2},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"specifics-and-recommendations",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"usage-example",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"replicated"},"[experimental]"," Replicated"),(0,l.kt)("p",null,"\u8be5\u5f15\u64ce\u57fa\u4e8e",(0,l.kt)("a",{parentName:"p",href:"/zh/engines/database-engines/atomic"},"Atomic"),"\u5f15\u64ce\u3002\u5b83\u652f\u6301\u901a\u8fc7\u5c06DDL\u65e5\u5fd7\u5199\u5165ZooKeeper\u5e76\u5728\u7ed9\u5b9a\u6570\u636e\u5e93\u7684\u6240\u6709\u526f\u672c\u4e0a\u6267\u884c\u7684\u5143\u6570\u636e\u590d\u5236\u3002"),(0,l.kt)("p",null,"\u4e00\u4e2aClickHouse\u670d\u52a1\u5668\u53ef\u4ee5\u540c\u65f6\u8fd0\u884c\u548c\u66f4\u65b0\u591a\u4e2a\u590d\u5236\u7684\u6570\u636e\u5e93\u3002\u4f46\u662f\u540c\u4e00\u4e2a\u590d\u5236\u7684\u6570\u636e\u5e93\u4e0d\u80fd\u6709\u591a\u4e2a\u526f\u672c\u3002"),(0,l.kt)("h2",{id:"creating-a-database"},"\u521b\u5efa\u6570\u636e\u5e93"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE testdb ENGINE = Replicated('zoo_path', 'shard_name', 'replica_name') [SETTINGS ...]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5f15\u64ce\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"zoo_path")," \u2014 ZooKeeper\u5730\u5740\uff0c\u540c\u4e00\u4e2aZooKeeper\u8def\u5f84\u5bf9\u5e94\u540c\u4e00\u4e2a\u6570\u636e\u5e93\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"shard_name")," \u2014 \u5206\u7247\u7684\u540d\u5b57\u3002\u6570\u636e\u5e93\u526f\u672c\u6309",(0,l.kt)("inlineCode",{parentName:"li"},"shard_name"),"\u5206\u7ec4\u5230\u5206\u7247\u4e2d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"replica_name")," \u2014 \u526f\u672c\u7684\u540d\u5b57\u3002\u540c\u4e00\u5206\u7247\u7684\u6240\u6709\u526f\u672c\u7684\u526f\u672c\u540d\u79f0\u5fc5\u987b\u4e0d\u540c\u3002")),(0,l.kt)("p",null,'!!! note "\u8b66\u544a"\n\u5bf9\u4e8e',(0,l.kt)("a",{parentName:"p",href:"/zh/engines/table-engines/mergetree-family/replication#table_engines-replication"},"ReplicatedMergeTree"),"\u8868\uff0c\u5982\u679c\u6ca1\u6709\u63d0\u4f9b\u53c2\u6570\uff0c\u5219\u4f7f\u7528\u9ed8\u8ba4\u53c2\u6570:",(0,l.kt)("inlineCode",{parentName:"p"},"/clickhouse/tables/{uuid}/{shard}"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"{replica}"),"\u3002\u8fd9\u4e9b\u53ef\u4ee5\u5728\u670d\u52a1\u5668\u8bbe\u7f6e",(0,l.kt)("a",{parentName:"p",href:"/zh/operations/server-configuration-parameters/settings#default_replica_path"},"default_replica_path"),"\u548c",(0,l.kt)("a",{parentName:"p",href:"/zh/operations/server-configuration-parameters/settings#default_replica_name"},"default_replica_name"),"\u4e2d\u66f4\u6539\u3002\u5b8f",(0,l.kt)("inlineCode",{parentName:"p"},"{uuid}"),"\u88ab\u5c55\u5f00\u5230\u8868\u7684uuid\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"{shard}"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"{replica}"),"\u88ab\u5c55\u5f00\u5230\u670d\u52a1\u5668\u914d\u7f6e\u7684\u503c\uff0c\u800c\u4e0d\u662f\u6570\u636e\u5e93\u5f15\u64ce\u53c2\u6570\u3002\u4f46\u662f\u5728\u5c06\u6765\uff0c\u53ef\u4ee5\u4f7f\u7528Replicated\u6570\u636e\u5e93\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"shard_name"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"replica_name"),"\u3002"),(0,l.kt)("h2",{id:"specifics-and-recommendations"},"\u4f7f\u7528\u65b9\u5f0f"),(0,l.kt)("p",null,"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"Replicated"),"\u6570\u636e\u5e93\u7684DDL\u67e5\u8be2\u7684\u5de5\u4f5c\u65b9\u5f0f\u7c7b\u4f3c\u4e8e",(0,l.kt)("a",{parentName:"p",href:"/zh/sql-reference/distributed-ddl"},"ON CLUSTER"),"\u67e5\u8be2\uff0c\u4f46\u6709\u7ec6\u5fae\u5dee\u5f02\u3002"),(0,l.kt)("p",null,"\u9996\u5148\uff0cDDL\u8bf7\u6c42\u5c1d\u8bd5\u5728\u542f\u52a8\u5668(\u6700\u521d\u4ece\u7528\u6237\u63a5\u6536\u8bf7\u6c42\u7684\u4e3b\u673a)\u4e0a\u6267\u884c\u3002\u5982\u679c\u8bf7\u6c42\u6ca1\u6709\u5b8c\u6210\uff0c\u90a3\u4e48\u7528\u6237\u7acb\u5373\u6536\u5230\u4e00\u4e2a\u9519\u8bef\uff0c\u5176\u4ed6\u4e3b\u673a\u4e0d\u4f1a\u5c1d\u8bd5\u5b8c\u6210\u5b83\u3002\u5982\u679c\u5728\u542f\u52a8\u5668\u4e0a\u6210\u529f\u5730\u5b8c\u6210\u4e86\u8bf7\u6c42\uff0c\u90a3\u4e48\u6240\u6709\u5176\u4ed6\u4e3b\u673a\u5c06\u81ea\u52a8\u91cd\u8bd5\uff0c\u76f4\u5230\u5b8c\u6210\u8bf7\u6c42\u3002\u542f\u52a8\u5668\u5c06\u5c1d\u8bd5\u5728\u5176\u4ed6\u4e3b\u673a\u4e0a\u7b49\u5f85\u67e5\u8be2\u5b8c\u6210(\u4e0d\u8d85\u8fc7",(0,l.kt)("a",{parentName:"p",href:"/zh/operations/settings/#distributed_ddl_task_timeout"},"distributed_ddl_task_timeout"),")\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u6bcf\u4e2a\u4e3b\u673a\u4e0a\u67e5\u8be2\u6267\u884c\u72b6\u6001\u7684\u8868\u3002"),(0,l.kt)("p",null,"\u9519\u8bef\u60c5\u51b5\u4e0b\u7684\u884c\u4e3a\u662f\u7531",(0,l.kt)("a",{parentName:"p",href:"/zh/operations/settings/#distributed_ddl_output_mode"},"distributed_ddl_output_mode"),"\u8bbe\u7f6e\u8c03\u8282\u7684\uff0c\u5bf9\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"Replicated"),"\u6570\u636e\u5e93\uff0c\u6700\u597d\u5c06\u5176\u8bbe\u7f6e\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"null_status_on_timeout")," - \u4f8b\u5982\uff0c\u5982\u679c\u4e00\u4e9b\u4e3b\u673a\u6ca1\u6709\u65f6\u95f4\u6267\u884c",(0,l.kt)("a",{parentName:"p",href:"/zh/operations/settings/#distributed_ddl_task_timeout"},"distributed_ddl_task_timeout"),"\u7684\u8bf7\u6c42\uff0c\u90a3\u4e48\u4e0d\u8981\u629b\u51fa\u5f02\u5e38\uff0c\u4f46\u5728\u8868\u4e2d\u663e\u793a\u5b83\u4eec\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"NULL"),"\u72b6\u6001\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/zh/operations/system-tables/clusters"},"system.clusters"),"\u7cfb\u7edf\u8868\u5305\u542b\u4e00\u4e2a\u540d\u4e3a\u590d\u5236\u6570\u636e\u5e93\u7684\u96c6\u7fa4\uff0c\u5b83\u5305\u542b\u6570\u636e\u5e93\u7684\u6240\u6709\u526f\u672c\u3002\u5f53\u521b\u5efa/\u5220\u9664\u526f\u672c\u65f6\uff0c\u8fd9\u4e2a\u96c6\u7fa4\u4f1a\u81ea\u52a8\u66f4\u65b0\uff0c\u5b83\u53ef\u4ee5\u7528\u4e8e",(0,l.kt)("a",{parentName:"p",href:"/zh/engines/table-engines/special/distributed#distributed"},"Distributed"),"\u8868\u3002"),(0,l.kt)("p",null,"\u5f53\u521b\u5efa\u6570\u636e\u5e93\u7684\u65b0\u526f\u672c\u65f6\uff0c\u8be5\u526f\u672c\u4f1a\u81ea\u5df1\u521b\u5efa\u8868\u3002\u5982\u679c\u526f\u672c\u5df2\u7ecf\u4e0d\u53ef\u7528\u5f88\u957f\u4e00\u6bb5\u65f6\u95f4\uff0c\u5e76\u4e14\u5df2\u7ecf\u6ede\u540e\u4e8e\u590d\u5236\u65e5\u5fd7-\u5b83\u7528ZooKeeper\u4e2d\u7684\u5f53\u524d\u5143\u6570\u636e\u68c0\u67e5\u5b83\u7684\u672c\u5730\u5143\u6570\u636e\uff0c\u5c06\u5e26\u6709\u6570\u636e\u7684\u989d\u5916\u8868\u79fb\u52a8\u5230\u4e00\u4e2a\u5355\u72ec\u7684\u975e\u590d\u5236\u6570\u636e\u5e93(\u4ee5\u514d\u610f\u5916\u5730\u5220\u9664\u4efb\u4f55\u591a\u4f59\u7684\u4e1c\u897f)\uff0c\u521b\u5efa\u7f3a\u5931\u7684\u8868\uff0c\u5982\u679c\u8868\u540d\u5df2\u7ecf\u88ab\u91cd\u547d\u540d\uff0c\u5219\u66f4\u65b0\u8868\u540d\u3002\u6570\u636e\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"ReplicatedMergeTree"),"\u7ea7\u522b\u88ab\u590d\u5236\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5982\u679c\u8868\u6ca1\u6709\u88ab\u590d\u5236\uff0c\u6570\u636e\u5c06\u4e0d\u4f1a\u88ab\u590d\u5236(\u6570\u636e\u5e93\u53ea\u8d1f\u8d23\u5143\u6570\u636e)\u3002"),(0,l.kt)("p",null,"\u5141\u8bb8",(0,l.kt)("a",{parentName:"p",href:"/zh/sql-reference/statements/alter/partition"},(0,l.kt)("inlineCode",{parentName:"a"},"ALTER TABLE ATTACH|FETCH|DROP|DROP DETACHED|DETACH PARTITION|PART")),"\u67e5\u8be2\uff0c\u4f46\u4e0d\u5141\u8bb8\u590d\u5236\u3002\u6570\u636e\u5e93\u5f15\u64ce\u5c06\u53ea\u5411\u5f53\u524d\u526f\u672c\u6dfb\u52a0/\u83b7\u53d6/\u5220\u9664\u5206\u533a/\u90e8\u4ef6\u3002\u4f46\u662f\uff0c\u5982\u679c\u8868\u672c\u8eab\u4f7f\u7528\u4e86Replicated\u8868\u5f15\u64ce\uff0c\u90a3\u4e48\u6570\u636e\u5c06\u5728\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"ATTACH"),"\u540e\u88ab\u590d\u5236\u3002"),(0,l.kt)("h2",{id:"usage-example"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.kt)("p",null,"\u521b\u5efa\u4e09\u53f0\u4e3b\u673a\u7684\u96c6\u7fa4:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"node1 :) CREATE DATABASE r ENGINE=Replicated('some/path/r','shard1','replica1');\nnode2 :) CREATE DATABASE r ENGINE=Replicated('some/path/r','shard1','other_replica');\nnode3 :) CREATE DATABASE r ENGINE=Replicated('some/path/r','other_shard','{replica}');\n")),(0,l.kt)("p",null,"\u8fd0\u884cDDL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE r.rmt (n UInt64) ENGINE=ReplicatedMergeTree ORDER BY n;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500hosts\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500status\u2500\u252c\u2500error\u2500\u252c\u2500num_hosts_remaining\u2500\u252c\u2500num_hosts_active\u2500\u2510 \n\u2502 shard1|replica1      \u2502    0    \u2502       \u2502          2          \u2502        0         \u2502 \n\u2502 shard1|other_replica \u2502    0    \u2502       \u2502          1          \u2502        0         \u2502\n\u2502 other_shard|r1       \u2502    0    \u2502       \u2502          0          \u2502        0         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u663e\u793a\u7cfb\u7edf\u8868:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT cluster, shard_num, replica_num, host_name, host_address, port, is_local \nFROM system.clusters WHERE cluster='r';\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500cluster\u2500\u252c\u2500shard_num\u2500\u252c\u2500replica_num\u2500\u252c\u2500host_name\u2500\u252c\u2500host_address\u2500\u252c\u2500port\u2500\u252c\u2500is_local\u2500\u2510 \n\u2502 r       \u2502     1     \u2502      1      \u2502   node3   \u2502  127.0.0.1   \u2502 9002 \u2502     0    \u2502 \n\u2502 r       \u2502     2     \u2502      1      \u2502   node2   \u2502  127.0.0.1   \u2502 9001 \u2502     0    \u2502\n\u2502 r       \u2502     2     \u2502      2      \u2502   node1   \u2502  127.0.0.1   \u2502 9000 \u2502     1    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u521b\u5efa\u5206\u5e03\u5f0f\u8868\u5e76\u63d2\u5165\u6570\u636e:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"node2 :) CREATE TABLE r.d (n UInt64) ENGINE=Distributed('r','r','rmt', n % 2);\nnode3 :) INSERT INTO r SELECT * FROM numbers(10);\nnode1 :) SELECT materialize(hostName()) AS host, groupArray(n) FROM r.d GROUP BY host;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500hosts\u2500\u252c\u2500groupArray(n)\u2500\u2510 \n\u2502 node1 \u2502  [1,3,5,7,9]  \u2502   \n\u2502 node2 \u2502  [0,2,4,6,8]  \u2502    \n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u5411\u4e00\u53f0\u4e3b\u673a\u6dfb\u52a0\u526f\u672c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"node4 :) CREATE DATABASE r ENGINE=Replicated('some/path/r','other_shard','r2');\n")),(0,l.kt)("p",null,"\u96c6\u7fa4\u914d\u7f6e\u5982\u4e0b\u6240\u793a:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500cluster\u2500\u252c\u2500shard_num\u2500\u252c\u2500replica_num\u2500\u252c\u2500host_name\u2500\u252c\u2500host_address\u2500\u252c\u2500port\u2500\u252c\u2500is_local\u2500\u2510 \n\u2502 r       \u2502     1     \u2502      1      \u2502   node3   \u2502  127.0.0.1   \u2502 9002 \u2502     0    \u2502 \n\u2502 r       \u2502     1     \u2502      2      \u2502   node4   \u2502  127.0.0.1   \u2502 9003 \u2502     0    \u2502\n\u2502 r       \u2502     2     \u2502      1      \u2502   node2   \u2502  127.0.0.1   \u2502 9001 \u2502     0    \u2502\n\u2502 r       \u2502     2     \u2502      2      \u2502   node1   \u2502  127.0.0.1   \u2502 9000 \u2502     1    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u5206\u5e03\u5f0f\u8868\u4e5f\u5c06\u4ece\u65b0\u4e3b\u673a\u83b7\u53d6\u6570\u636e:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"node2 :) SELECT materialize(hostName()) AS host, groupArray(n) FROM r.d GROUP BY host;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500hosts\u2500\u252c\u2500groupArray(n)\u2500\u2510 \n\u2502 node2 \u2502  [1,3,5,7,9]  \u2502   \n\u2502 node4 \u2502  [0,2,4,6,8]  \u2502    \n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);
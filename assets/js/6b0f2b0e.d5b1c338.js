"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[13435],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=o(n),m=a,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var o=2;o<i;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},28035:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],l={},u="system.distributed_ddl_queue",o={unversionedId:"zh/operations/system-tables/distributed_ddl_queue",id:"zh/operations/system-tables/distributed_ddl_queue",title:"system.distributed_ddl_queue",description:"systemtables-distributedddl_queue}",source:"@site/docs/zh/operations/system-tables/distributed_ddl_queue.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/distributed_ddl_queue",permalink:"/zh/operations/system-tables/distributed_ddl_queue",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/distributed_ddl_queue.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"system.disks",permalink:"/zh/operations/system-tables/disks"},next:{title:"system.distribution_queue",permalink:"/zh/operations/system-tables/distribution_queue"}},p={},d=[],c={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system_tables-distributed_ddl_queue"},"system.distributed_ddl_queue"),(0,i.kt)("p",null,"\u5305\u542b\u6709\u5173\u5728\u96c6\u7fa4\u4e0a\u6267\u884c\u7684",(0,i.kt)("a",{parentName:"p",href:"/zh/sql-reference/distributed-ddl"},"\u5206\u5e03\u5f0fddl\u67e5\u8be2(\u96c6\u7fa4\u73af\u5883)"),"\u7684\u4fe1\u606f."),(0,i.kt)("p",null,"\u5217\u4fe1\u606f:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"entry")," (",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/string"},"String"),") \u2014 \u67e5\u8be2ID."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"host_name")," (",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/string"},"String"),") \u2014 \u4e3b\u673a\u540d\u79f0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"host_address")," (",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/string"},"String"),") \u2014 \u4e3b\u673a\u540d\u89e3\u6790\u5230\u7684IP\u5730\u5740."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"port")," (",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/int-uint"},"UInt16"),") \u2014 \u4e3b\u673a\u7aef\u53e3."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status")," (",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/enum"},"Enum8"),") \u2014 \u67e5\u8be2\u72b6\u6001."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cluster")," (",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/string"},"String"),") \u2014 \u7fa4\u96c6\u540d\u79f0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query")," (",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/string"},"String"),") \u2014 \u6267\u884c\u67e5\u8be2."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initiator")," (",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/string"},"String"),") \u2014 \u6267\u884c\u67e5\u8be2\u7684\u8282\u70b9."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query_start_time")," (",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/datetime"},"DateTime"),") \u2014 \u67e5\u8be2\u5f00\u59cb\u65f6\u95f4."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query_finish_time")," (",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/datetime"},"DateTime"),") \u2014 \u67e5\u8be2\u7ed3\u675f\u65f6\u95f4."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query_duration_ms")," (",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u67e5\u8be2\u6267\u884c\u65f6\u95f4(\u6beb\u79d2)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"exception_code")," (",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/enum"},"Enum8"),") \u2014 \u6765\u81ea\u4e8e",(0,i.kt)("a",{parentName:"li",href:"/zh/operations/tips#zookeeper"},"ZooKeeper"),"\u7684\u5f02\u5e38\u4ee3\u7801.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM system.distributed_ddl_queue\nWHERE cluster = 'test_cluster'\nLIMIT 2\nFORMAT Vertical\n\nQuery id: f544e72a-6641-43f1-836b-24baa1c9632a\n\nRow 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nentry:             query-0000000000\nhost_name:         clickhouse01\nhost_address:      172.23.0.11\nport:              9000\nstatus:            Finished\ncluster:           test_cluster\nquery:             CREATE DATABASE test_db UUID '4a82697e-c85e-4e5b-a01e-a36f2a758456' ON CLUSTER test_cluster\ninitiator:         clickhouse01:9000\nquery_start_time:  2020-12-30 13:07:51\nquery_finish_time: 2020-12-30 13:07:51\nquery_duration_ms: 6\nexception_code:    ZOK\n\nRow 2:\n\u2500\u2500\u2500\u2500\u2500\u2500\nentry:             query-0000000000\nhost_name:         clickhouse02\nhost_address:      172.23.0.12\nport:              9000\nstatus:            Finished\ncluster:           test_cluster\nquery:             CREATE DATABASE test_db UUID '4a82697e-c85e-4e5b-a01e-a36f2a758456' ON CLUSTER test_cluster\ninitiator:         clickhouse01:9000\nquery_start_time:  2020-12-30 13:07:51\nquery_finish_time: 2020-12-30 13:07:51\nquery_duration_ms: 6\nexception_code:    ZOK\n\n2 rows in set. Elapsed: 0.025 sec.\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system_tables/distributed_ddl_queuedistributed_ddl_queue.md"},"\u539f\u59cb\u6587\u7ae0")," "))}m.isMDXComponent=!0}}]);
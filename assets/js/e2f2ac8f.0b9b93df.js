"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[21116],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),o=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=o(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||p;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,i=new Array(p);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var o=2;o<p;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69039:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return u}});var n=r(87462),a=r(63366),p=(r(67294),r(3905)),i=["components"],l={},s="replicated_fetches",o={unversionedId:"en/operations/system-tables/replicated_fetches",id:"en/operations/system-tables/replicated_fetches",title:"replicated_fetches",description:"systemtables-replicatedfetches}",source:"@site/docs/en/operations/system-tables/replicated_fetches.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/replicated_fetches",permalink:"/en/operations/system-tables/replicated_fetches",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/replicated_fetches.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"replicas",permalink:"/en/operations/system-tables/replicas"},next:{title:"replication_queue",permalink:"/en/operations/system-tables/replication_queue"}},c={},u=[],m={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,p.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"system_tables-replicated_fetches"},"replicated_fetches"),(0,p.kt)("p",null,"Contains information about currently running background fetches."),(0,p.kt)("p",null,"Columns:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"database")," (",(0,p.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 Name of the database.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"table")," (",(0,p.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 Name of the table.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"elapsed")," (",(0,p.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/float"},"Float64"),") \u2014 The time elapsed (in seconds) since showing currently running background fetches started.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"progress")," (",(0,p.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/float"},"Float64"),") \u2014 The percentage of completed work from 0 to 1.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"result_part_name")," (",(0,p.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 The name of the part that will be formed as the result of showing currently running background fetches.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"result_part_path")," (",(0,p.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 Absolute path to the part that will be formed as the result of showing currently running background fetches.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"partition_id")," (",(0,p.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 ID of the partition.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"total_size_bytes_compressed")," (",(0,p.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 The total size (in bytes) of the compressed data in the result part.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"bytes_read_compressed")," (",(0,p.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 The number of compressed bytes read from the result part.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"source_replica_path")," (",(0,p.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 Absolute path to the source replica.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"source_replica_hostname")," (",(0,p.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 Hostname of the source replica.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"source_replica_port")," (",(0,p.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt16"),") \u2014 Port number of the source replica.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"interserver_scheme")," (",(0,p.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 Name of the interserver scheme.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"URI")," (",(0,p.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 Uniform resource identifier.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"to_detached")," (",(0,p.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 The flag indicates whether the currently running background fetch is being performed using the ",(0,p.kt)("inlineCode",{parentName:"p"},"TO DETACHED")," expression.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"thread_id")," (",(0,p.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 Thread identifier."))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Example")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.replicated_fetches LIMIT 1 FORMAT Vertical;\n")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ndatabase:                    default\ntable:                       t\nelapsed:                     7.243039876\nprogress:                    0.41832135995612835\nresult_part_name:            all_0_0_0\nresult_part_path:            /var/lib/clickhouse/store/700/70080a04-b2de-4adf-9fa5-9ea210e81766/all_0_0_0/\npartition_id:                all\ntotal_size_bytes_compressed: 1052783726\nbytes_read_compressed:       440401920\nsource_replica_path:         /clickhouse/test/t/replicas/1\nsource_replica_hostname:     node1\nsource_replica_port:         9009\ninterserver_scheme:          http\nURI:                         http://node1:9009/?endpoint=DataPartsExchange%3A%2Fclickhouse%2Ftest%2Ft%2Freplicas%2F1&part=all_0_0_0&client_protocol_version=4&compress=false\nto_detached:                 0\nthread_id:                   54\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"See Also")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"../../sql-reference/statements/system/#query-language-system-replicated"},"Managing ReplicatedMergeTree Tables"))),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system_tables/replicated_fetches"},"Original article")," "))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[28133],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,f=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18903:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={slug:"/en/operations/system-tables/part_log"},s="part_log",p={unversionedId:"en/operations/system-tables/part_log",id:"en/operations/system-tables/part_log",title:"part_log",description:"The system.partlog table is created only if the partlog server setting is specified.",source:"@site/docs/en/operations/system-tables/part_log.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/part_log",permalink:"/docs/en/operations/system-tables/part_log",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/part_log.md",tags:[],version:"current",frontMatter:{slug:"/en/operations/system-tables/part_log"},sidebar:"english",previous:{title:"opentelemetry_span_log",permalink:"/docs/en/operations/system-tables/opentelemetry_span_log"},next:{title:"parts",permalink:"/docs/en/operations/system-tables/parts"}},m={},d=[],c={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"part_log"},"part_log"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"system.part_log")," table is created only if the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/server-configuration-parameters/settings#server_configuration_parameters-part-log"},"part_log")," server setting is specified."),(0,i.kt)("p",null,"This table contains information about events that occurred with ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/custom-partitioning-key"},"data parts")," in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," family tables, such as adding or merging data."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"system.part_log")," table contains the following columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query_id")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Identifier of the ",(0,i.kt)("inlineCode",{parentName:"li"},"INSERT")," query that created this data part."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event_type")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/enum"},"Enum8"),") \u2014 Type of the event that occurred with the data part. Can have one of the following values:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NEW_PART")," \u2014 Inserting of a new data part."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MERGE_PARTS")," \u2014 Merging of data parts."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DOWNLOAD_PART")," \u2014 Downloading a data part."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"REMOVE_PART")," \u2014 Removing or detaching a data part using ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/partition#alter_detach-partition"},"DETACH PARTITION"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MUTATE_PART")," \u2014 Mutating of a data part."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MOVE_PART")," \u2014 Moving the data part from the one disk to another one."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"merge_reason")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/enum"},"Enum8"),") \u2014 The reason for the event with type ",(0,i.kt)("inlineCode",{parentName:"li"},"MERGE_PARTS"),". Can have one of the following values:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NOT_A_MERGE")," \u2014 The current event has the type other than ",(0,i.kt)("inlineCode",{parentName:"li"},"MERGE_PARTS"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"REGULAR_MERGE")," \u2014 Some regular merge."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TTL_DELETE_MERGE")," \u2014 Cleaning up expired data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TTL_RECOMPRESS_MERGE")," \u2014 Recompressing data part with the."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"merge_algorithm")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/enum"},"Enum8"),") \u2014 Merge algorithm for the event with type ",(0,i.kt)("inlineCode",{parentName:"li"},"MERGE_PARTS"),". Can have one of the following values:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UNDECIDED")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HORIZONTAL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"VERTICAL")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event_date")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/date"},"Date"),") \u2014 Event date."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event_time")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime"),") \u2014 Event time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event_time_microseconds")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/datetime64"},"DateTime64"),") \u2014 Event time with microseconds precision."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"duration_ms")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 Duration."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"database")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Name of the database the data part is in."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Name of the table the data part is in."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"part_name")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Name of the data part."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"partition_id")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 ID of the partition that the data part was inserted to. The column takes the ",(0,i.kt)("inlineCode",{parentName:"li"},"all")," value if the partitioning is by ",(0,i.kt)("inlineCode",{parentName:"li"},"tuple()"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path_on_disk")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Absolute path to the folder with data part files."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rows")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 The number of rows in the data part."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"size_in_bytes")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 Size of the data part in bytes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"merged_from")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/array"},"Array(String)"),") \u2014 An array of names of the parts which the current part was made up from (after the merge)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bytes_uncompressed")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 Size of uncompressed bytes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"read_rows")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 The number of rows was read during the merge."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"read_bytes")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 The number of bytes was read during the merge."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"peak_memory_usage")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Int64"),") \u2014 The maximum difference between the amount of allocated and freed memory in context of this thread."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"error")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt16"),") \u2014 The code number of the occurred error."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"exception")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Text message of the occurred error.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"system.part_log")," table is created after the first inserting data to the ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeTree")," table."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.part_log LIMIT 1 FORMAT Vertical;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nquery_id:                      983ad9c7-28d5-4ae1-844e-603116b7de31\nevent_type:                    NewPart\nmerge_reason:                  NotAMerge\nmerge_algorithm:               Undecided\nevent_date:                    2021-02-02\nevent_time:                    2021-02-02 11:14:28\nevent_time_microseconds:                    2021-02-02 11:14:28.861919\nduration_ms:                   35\ndatabase:                      default\ntable:                         log_mt_2\npart_name:                     all_1_1_0\npartition_id:                  all\npath_on_disk:                  db/data/default/log_mt_2/all_1_1_0/\nrows:                          115418\nsize_in_bytes:                 1074311\nmerged_from:                   []\nbytes_uncompressed:            0\nread_rows:                     0\nread_bytes:                    0\npeak_memory_usage:             0\nerror:                         0\nexception:\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/part_log"},"Original article")," "))}u.isMDXComponent=!0}}]);
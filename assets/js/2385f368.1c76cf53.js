"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[26662],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),o=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=o(a),c=r,d=f["".concat(u,".").concat(c)]||f[c]||m[c]||l;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},9710:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return m}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],s={},u="quotas_usage",o={unversionedId:"en/operations/system-tables/quotas_usage",id:"en/operations/system-tables/quotas_usage",title:"quotas_usage",description:"systemtables-quotasusage}",source:"@site/docs/en/operations/system-tables/quotas_usage.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/quotas_usage",permalink:"/en/operations/system-tables/quotas_usage",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/quotas_usage.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"quotas",permalink:"/en/operations/system-tables/quotas"},next:{title:"replicas",permalink:"/en/operations/system-tables/replicas"}},p={},m=[{value:"See Also",id:"see-also",level:2}],f={toc:m};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"system_tables-quotas_usage"},"quotas_usage"),(0,l.kt)("p",null,"Quota usage by all users."),(0,l.kt)("p",null,"Columns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"quota_name")," (",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 Quota name."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"quota_key")," (",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 Key value."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"is_current")," (",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 Quota usage for current user."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"start_time")," (",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/datetime"},"DateTime"),"))) \u2014 Start time for calculating resource consumption."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"end_time")," (",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/datetime"},"DateTime"),"))) \u2014 End time for calculating resource consumption."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"duration")," (",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"UInt32"),")) \u2014 Length of the time interval for calculating resource consumption, in seconds."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"queries")," (",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 The total number of requests in this interval."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_queries")," (",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 Maximum number of requests."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"query_selects")," (",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 The total number of select requests in this interval."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_query_selects")," (",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 Maximum number of select requests."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"query_inserts")," (",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 The total number of insert requests in this interval."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_query_inserts")," (",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 Maximum number of insert requests."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"errors")," (",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 The number of queries that threw an exception."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_errors")," (",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 Maximum number of errors."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"result_rows")," (",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 The total number of rows given as a result."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_result_rows")," (",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 Maximum of source rows read from tables."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"result_bytes")," (",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 RAM volume in bytes used to store a queries result."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_result_bytes")," (",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 Maximum RAM volume used to store a queries result, in bytes."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"read_rows")," (",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),"))) \u2014 The total number of source rows read from tables for running the query on all remote servers."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_read_rows")," (",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 Maximum number of rows read from all tables and table functions participated in queries."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"read_bytes")," (",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 The total number of bytes read from all tables and table functions participated in queries."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_read_bytes")," (",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 Maximum of bytes read from all tables and table functions."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"execution_time")," (",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/float"},"Float64"),")) \u2014 The total query execution time, in seconds (wall time)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_execution_time")," (",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/float"},"Float64"),")) \u2014 Maximum of query execution time.")),(0,l.kt)("h2",{id:"see-also"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/statements/show#show-quota-statement"},"SHOW QUOTA"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/quotas_usage"},"Original article")," "))}c.isMDXComponent=!0}}]);
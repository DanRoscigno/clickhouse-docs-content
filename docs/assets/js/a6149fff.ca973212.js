"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[75139],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(n),f=a,d=c["".concat(l,".").concat(f)]||c[f]||u[f]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},26:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={slug:"/en/operations/system-tables/merges"},l="merges",m={unversionedId:"en/operations/system-tables/merges",id:"en/operations/system-tables/merges",title:"merges",description:"Contains information about merges and part mutations currently in process for tables in the MergeTree family.",source:"@site/docs/en/operations/system-tables/merges.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/merges",permalink:"/docs/en/operations/system-tables/merges",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/merges.md",tags:[],version:"current",frontMatter:{slug:"/en/operations/system-tables/merges"},sidebar:"english",previous:{title:"merge_tree_settings",permalink:"/docs/en/operations/system-tables/merge_tree_settings"},next:{title:"metric_log",permalink:"/docs/en/operations/system-tables/metric_log"}},p={},u=[],c={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"merges"},"merges"),(0,i.kt)("p",null,"Contains information about merges and part mutations currently in process for tables in the MergeTree family."),(0,i.kt)("p",null,"Columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"database")," (String) \u2014 The name of the database the table is in."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table")," (String) \u2014 Table name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"elapsed")," (Float64) \u2014 The time elapsed (in seconds) since the merge started."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"progress")," (Float64) \u2014 The percentage of completed work from 0 to 1."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"num_parts")," (UInt64) \u2014 The number of pieces to be merged."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"result_part_name")," (String) \u2014 The name of the part that will be formed as the result of merging."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_mutation")," (UInt8) \u2014 1 if this process is a part mutation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"total_size_bytes_compressed")," (UInt64) \u2014 The total size of the compressed data in the merged chunks."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"total_size_marks")," (UInt64) \u2014 The total number of marks in the merged parts."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bytes_read_uncompressed")," (UInt64) \u2014 Number of bytes read, uncompressed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rows_read")," (UInt64) \u2014 Number of rows read."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bytes_written_uncompressed")," (UInt64) \u2014 Number of bytes written, uncompressed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rows_written")," (UInt64) \u2014 Number of rows written."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"memory_usage")," (UInt64) \u2014 Memory consumption of the merge process."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"thread_id")," (UInt64) \u2014 Thread ID of the merge process."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"merge_type")," \u2014 The type of current merge. Empty if it's an mutation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"merge_algorithm")," \u2014 The algorithm used in current merge. Empty if it's an mutation.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/merges"},"Original article")," "))}f.isMDXComponent=!0}}]);
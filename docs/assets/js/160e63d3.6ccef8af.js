"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[49491],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return g}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(t),g=a,f=c["".concat(s,".").concat(g)]||c[g]||u[g]||i;return t?r.createElement(f,o(o({ref:n},m),{},{components:t})):r.createElement(f,o({ref:n},m))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},42812:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={sidebar_position:20,sidebar_label:"Log Family"},s="Log Engine Family",p={unversionedId:"en/engines/table-engines/log-family/index",id:"en/engines/table-engines/log-family/index",title:"Log Engine Family",description:"log-engine-family}",source:"@site/docs/en/engines/table-engines/log-family/index.md",sourceDirName:"en/engines/table-engines/log-family",slug:"/en/engines/table-engines/log-family/",permalink:"/en/engines/table-engines/log-family/",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/en/engines/table-engines/log-family/index.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,sidebar_label:"Log Family"},sidebar:"english",previous:{title:"GraphiteMergeTree",permalink:"/en/engines/table-engines/mergetree-family/graphitemergetree"},next:{title:"Log",permalink:"/en/engines/table-engines/log-family/log"}},m={},u=[{value:"Common Properties",id:"common-properties",level:2},{value:"Differences",id:"differences",level:2}],c={toc:u};function g(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"log-engine-family"},"Log Engine Family"),(0,i.kt)("p",null,"These engines were developed for scenarios when you need to quickly write many small tables (up to about 1 million rows) and read them later as a whole."),(0,i.kt)("p",null,"Engines of the family:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/engines/table-engines/log-family/stripelog"},"StripeLog")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/engines/table-engines/log-family/log"},"Log")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/engines/table-engines/log-family/tinylog"},"TinyLog"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Log")," family table engines can store data to ",(0,i.kt)("a",{parentName:"p",href:"/en/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-hdfs"},"HDFS")," or ",(0,i.kt)("a",{parentName:"p",href:"/en/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-s3"},"S3")," distributed file systems."),(0,i.kt)("h2",{id:"common-properties"},"Common Properties"),(0,i.kt)("p",null,"Engines:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Store data on a disk.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Append data to the end of file when writing.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Support locks for concurrent data access."),(0,i.kt)("p",{parentName:"li"},"During ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," queries, the table is locked, and other queries for reading and writing data both wait for the table to unlock. If there are no data writing queries, any number of data reading queries can be performed concurrently.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Do not support ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/alter/#alter-mutations"},"mutations"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Do not support indexes."),(0,i.kt)("p",{parentName:"li"},"This means that ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," queries for ranges of data are not efficient.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Do not write data atomically."),(0,i.kt)("p",{parentName:"li"},"You can get a table with corrupted data if something breaks the write operation, for example, abnormal server shutdown."))),(0,i.kt)("h2",{id:"differences"},"Differences"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"TinyLog")," engine is the simplest in the family and provides the poorest functionality and lowest efficiency. The ",(0,i.kt)("inlineCode",{parentName:"p"},"TinyLog")," engine does not support parallel data reading by several threads in a single query. It reads data slower than other engines in the family that support parallel reading from a single query and it uses almost as many file descriptors as the ",(0,i.kt)("inlineCode",{parentName:"p"},"Log")," engine because it stores each column in a separate file. Use it only in simple scenarios."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Log")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"StripeLog")," engines support parallel data reading. When reading data, ClickHouse uses multiple threads. Each thread processes a separate data block. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Log")," engine uses a separate file for each column of the table. ",(0,i.kt)("inlineCode",{parentName:"p"},"StripeLog")," stores all the data in one file. As a result, the ",(0,i.kt)("inlineCode",{parentName:"p"},"StripeLog")," engine uses fewer file descriptors, but the ",(0,i.kt)("inlineCode",{parentName:"p"},"Log")," engine provides higher efficiency when reading data."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/table_engines/log_family/"},"Original article")," "))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[40501],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23337:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],s={sidebar_position:12,sidebar_label:"ExternalDistributed"},o="ExternalDistributed",p={unversionedId:"en/engines/table-engines/integrations/ExternalDistributed",id:"en/engines/table-engines/integrations/ExternalDistributed",title:"ExternalDistributed",description:"externaldistributed}",source:"@site/docs/en/engines/table-engines/integrations/ExternalDistributed.md",sourceDirName:"en/engines/table-engines/integrations",slug:"/en/engines/table-engines/integrations/ExternalDistributed",permalink:"/en/engines/table-engines/integrations/ExternalDistributed",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/integrations/ExternalDistributed.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,sidebar_label:"ExternalDistributed"},sidebar:"english",previous:{title:"PostgreSQL",permalink:"/en/engines/table-engines/integrations/postgresql"},next:{title:"MaterializedPostgreSQL",permalink:"/en/engines/table-engines/integrations/materialized-postgresql"}},u={},c=[{value:"Creating a Table",id:"creating-a-table",level:2},{value:"Implementation Details",id:"implementation-details",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"externaldistributed"},"ExternalDistributed"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ExternalDistributed")," engine allows to perform ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," queries on data that is stored on a remote servers MySQL or PostgreSQL. Accepts ",(0,i.kt)("a",{parentName:"p",href:"/en/engines/table-engines/integrations/mysql"},"MySQL")," or ",(0,i.kt)("a",{parentName:"p",href:"/en/engines/table-engines/integrations/postgresql"},"PostgreSQL")," engines as an argument so sharding is possible."),(0,i.kt)("h2",{id:"creating-a-table"},"Creating a Table"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1] [TTL expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2] [TTL expr2],\n    ...\n) ENGINE = ExternalDistributed('engine', 'host:port', 'database', 'table', 'user', 'password');\n")),(0,i.kt)("p",null,"See a detailed description of the ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/create/table#create-table-query"},"CREATE TABLE")," query."),(0,i.kt)("p",null,"The table structure can differ from the original table structure:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Column names should be the same as in the original table, but you can use just some of these columns and in any order."),(0,i.kt)("li",{parentName:"ul"},"Column types may differ from those in the original table. ClickHouse tries to ",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/functions/type-conversion-functions#type_conversion_function-cast"},"cast")," values to the ClickHouse data types.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Engine Parameters")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"engine")," \u2014 The table engine ",(0,i.kt)("inlineCode",{parentName:"li"},"MySQL")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"PostgreSQL"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"host:port")," \u2014 MySQL or PostgreSQL server address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"database")," \u2014 Remote database name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table")," \u2014 Remote table name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user")," \u2014 User name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"password")," \u2014 User password.")),(0,i.kt)("h2",{id:"implementation-details"},"Implementation Details"),(0,i.kt)("p",null,"Supports multiple replicas that must be listed by ",(0,i.kt)("inlineCode",{parentName:"p"},"|")," and shards must be listed by ",(0,i.kt)("inlineCode",{parentName:"p"},","),". For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test_shards (id UInt32, name String, age UInt32, money UInt32) ENGINE = ExternalDistributed('MySQL', `mysql{1|2}:3306,mysql{3|4}:3306`, 'clickhouse', 'test_replicas', 'root', 'clickhouse');\n")),(0,i.kt)("p",null,"When specifying replicas, one of the available replicas is selected for each of the shards when reading. If the connection fails, the next replica is selected, and so on for all the replicas. If the connection attempt fails for all the replicas, the attempt is repeated the same way several times."),(0,i.kt)("p",null,"You can specify any number of shards and any number of replicas for each shard."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See Also")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/engines/table-engines/integrations/mysql"},"MySQL table engine")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/engines/table-engines/integrations/postgresql"},"PostgreSQL table engine")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/engines/table-engines/special/distributed"},"Distributed table engine"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/integrations/ExternalDistributed/"},"Original article")," "))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[55402],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(r),u=a,f=c["".concat(l,".").concat(u)]||c[u]||d[u]||s;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},88414:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),i=["components"],o={sidebar_position:40,sidebar_label:"remote"},l="remote, remoteSecure",p={unversionedId:"en/sql-reference/table-functions/remote",id:"en/sql-reference/table-functions/remote",title:"remote, remoteSecure",description:"remote-remotesecure}",source:"@site/docs/en/sql-reference/table-functions/remote.md",sourceDirName:"en/sql-reference/table-functions",slug:"/en/sql-reference/table-functions/remote",permalink:"/docs/en/sql-reference/table-functions/remote",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/table-functions/remote.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,sidebar_label:"remote"},sidebar:"english",previous:{title:"numbers",permalink:"/docs/en/sql-reference/table-functions/numbers"},next:{title:"url",permalink:"/docs/en/sql-reference/table-functions/url"}},m={},d=[{value:"Globs in Addresses {globs-in-addresses}",id:"globs-in-addresses-globs-in-addresses",level:2}],c={toc:d};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"remote-remotesecure"},"remote, remoteSecure"),(0,s.kt)("p",null,"Allows to access remote servers without creating a ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/distributed"},"Distributed")," table. ",(0,s.kt)("inlineCode",{parentName:"p"},"remoteSecure")," - same as ",(0,s.kt)("inlineCode",{parentName:"p"},"remote")," but with a secured connection."),(0,s.kt)("p",null,"Both functions can be used in ",(0,s.kt)("inlineCode",{parentName:"p"},"SELECT")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"INSERT")," queries."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"remote('addresses_expr', db, table[, 'user'[, 'password'], sharding_key])\nremote('addresses_expr', db.table[, 'user'[, 'password'], sharding_key])\nremoteSecure('addresses_expr', db, table[, 'user'[, 'password'], sharding_key])\nremoteSecure('addresses_expr', db.table[, 'user'[, 'password'], sharding_key])\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Parameters")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"addresses_expr")," \u2014 An expression that generates addresses of remote servers. This may be just one server address. The server address is ",(0,s.kt)("inlineCode",{parentName:"p"},"host:port"),", or just ",(0,s.kt)("inlineCode",{parentName:"p"},"host"),"."),(0,s.kt)("p",{parentName:"li"},"  The host can be specified as the server name, or as the IPv4 or IPv6 address. An IPv6 address is specified in square brackets."),(0,s.kt)("p",{parentName:"li"},"  The port is the TCP port on the remote server. If the port is omitted, it uses ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/server-configuration-parameters/settings#server_configuration_parameters-tcp_port"},"tcp_port")," from the server\u2019s config file in ",(0,s.kt)("inlineCode",{parentName:"p"},"remote")," (by default, 9000) and ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/server-configuration-parameters/settings#server_configuration_parameters-tcp_port_secure"},"tcp_port_secure")," in ",(0,s.kt)("inlineCode",{parentName:"p"},"remoteSecure")," (by default, 9440)."),(0,s.kt)("p",{parentName:"li"},"  The port is required for an IPv6 address."),(0,s.kt)("p",{parentName:"li"},"  Type: ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"db")," \u2014 Database name. Type: ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"table")," \u2014 Table name. Type: ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"user")," \u2014 User name. If the user is not specified, ",(0,s.kt)("inlineCode",{parentName:"p"},"default")," is used. Type: ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"password")," \u2014 User password. If the password is not specified, an empty password is used. Type: ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"sharding_key")," \u2014 Sharding key to support distributing data across nodes. For example: ",(0,s.kt)("inlineCode",{parentName:"p"},"insert into remote('127.0.0.1:9000,127.0.0.2', db, table, 'default', rand())"),". Type: ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt32"),"."))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returned value")),(0,s.kt)("p",null,"The dataset from remote servers."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Usage")),(0,s.kt)("p",null,"Using the ",(0,s.kt)("inlineCode",{parentName:"p"},"remote")," table function is less optimal than creating a ",(0,s.kt)("inlineCode",{parentName:"p"},"Distributed")," table because in this case the server connection is re-established for every request. Also, if hostnames are set, the names are resolved, and errors are not counted when working with various replicas. When processing a large number of queries, always create the ",(0,s.kt)("inlineCode",{parentName:"p"},"Distributed")," table ahead of time, and do not use the ",(0,s.kt)("inlineCode",{parentName:"p"},"remote")," table function."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"remote")," table function can be useful in the following cases:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Accessing a specific server for data comparison, debugging, and testing."),(0,s.kt)("li",{parentName:"ul"},"Queries between various ClickHouse clusters for research purposes."),(0,s.kt)("li",{parentName:"ul"},"Infrequent distributed requests that are made manually."),(0,s.kt)("li",{parentName:"ul"},"Distributed requests where the set of servers is re-defined each time.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Adresses")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"example01-01-1\nexample01-01-1:9000\nlocalhost\n127.0.0.1\n[::]:9000\n[2a02:6b8:0:1111::11]:9000\n")),(0,s.kt)("p",null,"Multiple addresses can be comma-separated. In this case, ClickHouse will use distributed processing, so it will send the query to all specified addresses (like shards with different data). Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"example01-01-1,example01-02-1\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Examples")),(0,s.kt)("p",null,"Selecting data from a remote server:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM remote('127.0.0.1', db.remote_engine_table) LIMIT 3;\n")),(0,s.kt)("p",null,"Inserting data from a remote server into a table:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE remote_table (name String, value UInt32) ENGINE=Memory;\nINSERT INTO FUNCTION remote('127.0.0.1', currentDatabase(), 'remote_table') VALUES ('test', 42);\nSELECT * FROM remote_table;\n")),(0,s.kt)("h2",{id:"globs-in-addresses-globs-in-addresses"},"Globs in Addresses {globs-in-addresses}"),(0,s.kt)("p",null,"Patterns in curly brackets ",(0,s.kt)("inlineCode",{parentName:"p"},"{ }")," are used to generate a set of shards and to specify replicas. If there are multiple pairs of curly brackets, then the direct product of the corresponding sets is generated.\nThe following pattern types are supported."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"{",(0,s.kt)("em",{parentName:"li"},"a"),",",(0,s.kt)("em",{parentName:"li"},"b"),"} - Any number of variants separated by a comma. The pattern is replaced with ",(0,s.kt)("em",{parentName:"li"},"a")," in the first shard address and it is replaced with ",(0,s.kt)("em",{parentName:"li"},"b")," in the second shard address and so on. For instance, ",(0,s.kt)("inlineCode",{parentName:"li"},"example0{1,2}-1")," generates addresses ",(0,s.kt)("inlineCode",{parentName:"li"},"example01-1")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"example02-1"),"."),(0,s.kt)("li",{parentName:"ul"},"{",(0,s.kt)("em",{parentName:"li"},"n"),"..",(0,s.kt)("em",{parentName:"li"},"m"),"} - A range of numbers. This pattern generates shard addresses with incrementing indices from ",(0,s.kt)("em",{parentName:"li"},"n")," to ",(0,s.kt)("em",{parentName:"li"},"m"),". ",(0,s.kt)("inlineCode",{parentName:"li"},"example0{1..2}-1")," generates ",(0,s.kt)("inlineCode",{parentName:"li"},"example01-1")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"example02-1"),"."),(0,s.kt)("li",{parentName:"ul"},"{",(0,s.kt)("em",{parentName:"li"},"0n"),"..",(0,s.kt)("em",{parentName:"li"},"0m"),"} - A range of numbers with leading zeroes. This modification preserves leading zeroes in indices. The pattern ",(0,s.kt)("inlineCode",{parentName:"li"},"example{01..03}-1")," generates ",(0,s.kt)("inlineCode",{parentName:"li"},"example01-1"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"example02-1")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"example03-1"),"."),(0,s.kt)("li",{parentName:"ul"},"{",(0,s.kt)("em",{parentName:"li"},"a"),"|",(0,s.kt)("em",{parentName:"li"},"b"),"} - Any number of variants separated by a ",(0,s.kt)("inlineCode",{parentName:"li"},"|"),". The pattern specifies replicas. For instance, ",(0,s.kt)("inlineCode",{parentName:"li"},"example01-{1|2}")," generates replicas ",(0,s.kt)("inlineCode",{parentName:"li"},"example01-1")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"example01-2"),".")),(0,s.kt)("p",null,"The query will be sent to the first healthy replica. However, for ",(0,s.kt)("inlineCode",{parentName:"p"},"remote")," the replicas are iterated in the order currently set in the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/#settings-load_balancing"},"load_balancing")," setting.\nThe number of generated addresses is limited by ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/#table_function_remote_max_addresses"},"table_function_remote_max_addresses")," setting."))}u.isMDXComponent=!0}}]);
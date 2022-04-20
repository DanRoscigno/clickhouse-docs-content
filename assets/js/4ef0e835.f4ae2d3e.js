"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[9837],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69930:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={},s="clickhouse-odbc-bridge",c={unversionedId:"en/operations/utilities/odbc-bridge",id:"en/operations/utilities/odbc-bridge",title:"clickhouse-odbc-bridge",description:"Simple HTTP-server which works like a proxy for ODBC driver. The main motivation",source:"@site/docs/en/operations/utilities/odbc-bridge.md",sourceDirName:"en/operations/utilities",slug:"/en/operations/utilities/odbc-bridge",permalink:"/docs/en/operations/utilities/odbc-bridge",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/utilities/odbc-bridge.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"clickhouse-obfuscator",permalink:"/docs/en/operations/utilities/clickhouse-obfuscator"},next:{title:"Usage Recommendations",permalink:"/docs/en/operations/tips"}},u={},p=[{value:"Usage",id:"usage",level:2},{value:"Example:",id:"example",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"clickhouse-odbc-bridge"},"clickhouse-odbc-bridge"),(0,o.kt)("p",null,"Simple HTTP-server which works like a proxy for ODBC driver. The main motivation\nwas possible segfaults or another faults in ODBC implementations, which can\ncrash whole clickhouse-server process."),(0,o.kt)("p",null,"This tool works via HTTP, not via pipes, shared memory, or TCP because:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It's simpler to implement"),(0,o.kt)("li",{parentName:"ul"},"It's simpler to debug"),(0,o.kt)("li",{parentName:"ul"},"jdbc-bridge can be implemented in the same way")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-server")," use this tool inside odbc table function and StorageODBC.\nHowever it can be used as standalone tool from command line with the following\nparameters in POST-request URL:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"connection_string")," -- ODBC connection string."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"columns")," -- columns in ClickHouse NamesAndTypesList format, name in backticks,\ntype as string. Name and type are space separated, rows separated with\nnewline."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"max_block_size")," -- optional parameter, sets maximum size of single block.\nQuery is send in post body. Response is returned in RowBinary format.")),(0,o.kt)("h2",{id:"example"},"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-odbc-bridge --http-port 9018 --daemon\n\n$ curl -d "query=SELECT PageID, ImpID, AdType FROM Keys ORDER BY PageID, ImpID" --data-urlencode "connection_string=DSN=ClickHouse;DATABASE=stat" --data-urlencode "sample_block=columns format version: 1\n3 columns:\n\\`PageID\\` String\n\\`ImpID\\` String\n\\`AdType\\` String\n"  "http://localhost:9018/" > result.txt\n\n$ cat result.txt\n12246623837185725195925621517\n')))}d.isMDXComponent=!0}}]);
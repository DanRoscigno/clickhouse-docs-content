"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[17630],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||l;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},63103:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={sidebar_position:41,sidebar_label:"url"},c="url",u={unversionedId:"zh/sql-reference/table-functions/url",id:"zh/sql-reference/table-functions/url",title:"url",description:"url}",source:"@site/docs/zh/sql-reference/table-functions/url.md",sourceDirName:"zh/sql-reference/table-functions",slug:"/zh/sql-reference/table-functions/url",permalink:"/docs/zh/sql-reference/table-functions/url",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/table-functions/url.md",tags:[],version:"current",sidebarPosition:41,frontMatter:{sidebar_position:41,sidebar_label:"url"},sidebar:"chinese",previous:{title:"numbers",permalink:"/docs/zh/sql-reference/table-functions/numbers"},next:{title:"postgresql",permalink:"/docs/zh/sql-reference/table-functions/postgresql"}},p={},s=[],f={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"url"},"url"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"url")," \u51fd\u6570\u4ece ",(0,l.kt)("inlineCode",{parentName:"p"},"URL")," \u521b\u5efa\u4e00\u4e2a\u5177\u6709\u7ed9\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"format")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"structure")," \u7684\u8868\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"url")," \u51fd\u6570\u53ef\u7528\u4e8e\u5bf9",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/special/url"},"URL"),"\u8868\u4e2d\u7684\u6570\u636e\u8fdb\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT")," \u7684\u67e5\u8be2\u4e2d\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"url(URL, format, structure)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"URL")," \u2014 HTTP\u6216HTTPS\u670d\u52a1\u5668\u5730\u5740\uff0c\u5b83\u53ef\u4ee5\u63a5\u53d7 ",(0,l.kt)("inlineCode",{parentName:"li"},"GET")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"POST")," \u8bf7\u6c42 (\u5bf9\u5e94\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"SELECT")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"INSERT")," \u67e5\u8be2)\u3002\u7c7b\u578b: ",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"format")," \u2014 \u6570\u636e",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/interfaces/formats#formats"},"\u683c\u5f0f"),"\u3002\u7c7b\u578b: ",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"structure")," \u2014 \u4ee5 ",(0,l.kt)("inlineCode",{parentName:"li"},"'UserID UInt64, Name String'")," \u683c\u5f0f\u7684\u8868\u7ed3\u6784\u3002\u786e\u5b9a\u5217\u540d\u548c\u7c7b\u578b\u3002 \u7c7b\u578b: ",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),"\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,l.kt)("p",null,"A table with the specified format and structure and with data from the defined ",(0,l.kt)("inlineCode",{parentName:"p"},"URL"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("p",null,"\u83b7\u53d6\u4e00\u4e2a\u8868\u7684\u524d3\u884c\uff0c\u8be5\u8868\u662f\u4eceHTTP\u670d\u52a1\u5668\u83b7\u53d6\u7684\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"p"},"String")," \u548c ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt32")," \u7c7b\u578b\u7684\u5217\uff0c\u4ee5",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/interfaces/formats#csv"},"CSV"),"\u683c\u5f0f\u8fd4\u56de\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM url('http://127.0.0.1:12345/', CSV, 'column1 String, column2 UInt32') LIMIT 3;\n")),(0,l.kt)("p",null,"\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"URL")," \u7684\u6570\u636e\u63d2\u5165\u5230\u8868\u4e2d:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test_table (column1 String, column2 UInt32) ENGINE=Memory;\nINSERT INTO FUNCTION url('http://127.0.0.1:8123/?query=INSERT+INTO+test_table+FORMAT+CSV', 'CSV', 'column1 String, column2 UInt32') VALUES ('http interface', 42);\nSELECT * FROM test_table;\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/table_functions/url/"},"\u539f\u59cb\u6587\u7ae0")," "))}m.isMDXComponent=!0}}]);
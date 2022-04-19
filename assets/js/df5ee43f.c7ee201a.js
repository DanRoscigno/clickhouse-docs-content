"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[9578],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),m=i,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},82137:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={title:"\u5982\u4f55\u4ece ClickHouse \u5bfc\u51fa\u6570\u636e\u5230\u4e00\u4e2a\u6587\u4ef6?",toc_hidden:!0,sidebar_position:10},c="\u5982\u4f55\u4ece ClickHouse \u5bfc\u51fa\u6570\u636e\u5230\u4e00\u4e2a\u6587\u4ef6?",u={unversionedId:"zh/faq/integration/file-export",id:"zh/faq/integration/file-export",title:"\u5982\u4f55\u4ece ClickHouse \u5bfc\u51fa\u6570\u636e\u5230\u4e00\u4e2a\u6587\u4ef6?",description:"how-to-export-to-file}",source:"@site/docs/zh/faq/integration/file-export.md",sourceDirName:"zh/faq/integration",slug:"/zh/faq/integration/file-export",permalink:"/zh/faq/integration/file-export",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/faq/integration/file-export.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\u5982\u4f55\u4ece ClickHouse \u5bfc\u51fa\u6570\u636e\u5230\u4e00\u4e2a\u6587\u4ef6?",toc_hidden:!0,sidebar_position:10},sidebar:"chinese",previous:{title:"Integration",permalink:"/zh/faq/integration/"},next:{title:"How to import JSON into ClickHouse?",permalink:"/zh/faq/integration/json-import"}},s={},p=[{value:"\u4f7f\u7528 INTO OUTFILE \u8bed\u6cd5",id:"using-into-outfile-clause",level:2},{value:"\u4f7f\u7528\u4e00\u4e2a\u6587\u4ef6\u5f15\u64ce\u8868",id:"using-a-file-engine-table",level:2},{value:"\u4f7f\u7528\u547d\u4ee4\u884c\u91cd\u5b9a\u5411",id:"using-command-line-redirection",level:2}],f={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-export-to-file"},"\u5982\u4f55\u4ece ClickHouse \u5bfc\u51fa\u6570\u636e\u5230\u4e00\u4e2a\u6587\u4ef6?"),(0,o.kt)("h2",{id:"using-into-outfile-clause"},"\u4f7f\u7528 INTO OUTFILE \u8bed\u6cd5"),(0,o.kt)("p",null,"\u52a0\u4e00\u4e2a ",(0,o.kt)("a",{parentName:"p",href:"/zh/sql-reference/statements/select/into-outfile#into-outfile-clause"},"INTO OUTFILE")," \u8bed\u6cd5\u5230\u4f60\u7684\u67e5\u8be2\u8bed\u53e5\u4e2d."),(0,o.kt)("p",null,"\u4f8b\u5982:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM table INTO OUTFILE 'file'\n")),(0,o.kt)("p",null,"ClickHouse \u9ed8\u8ba4\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"/zh/interfaces/formats#tabseparated"},"TabSeparated")," \u683c\u5f0f\u5199\u5165\u6570\u636e. \u4fee\u6539",(0,o.kt)("a",{parentName:"p",href:"/zh/interfaces/formats"},"\u6570\u636e\u683c\u5f0f"),", \u8bf7\u7528 ",(0,o.kt)("a",{parentName:"p",href:"/zh/sql-reference/statements/select/format#format-clause"},"FORMAT \u8bed\u6cd5"),"."),(0,o.kt)("p",null,"\u4f8b\u5982:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM table INTO OUTFILE 'file' FORMAT CSV\n")),(0,o.kt)("h2",{id:"using-a-file-engine-table"},"\u4f7f\u7528\u4e00\u4e2a\u6587\u4ef6\u5f15\u64ce\u8868"),(0,o.kt)("p",null,"\u67e5\u770b ",(0,o.kt)("a",{parentName:"p",href:"/zh/engines/table-engines/special/file"},"File")," \u8868\u5f15\u64ce."),(0,o.kt)("h2",{id:"using-command-line-redirection"},"\u4f7f\u7528\u547d\u4ee4\u884c\u91cd\u5b9a\u5411"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-client --query "SELECT * from table" --format FormatName > result.txt\n')),(0,o.kt)("p",null,"\u67e5\u770b ",(0,o.kt)("a",{parentName:"p",href:"/zh/interfaces/cli"},"clickhouse-client"),"."))}m.isMDXComponent=!0}}]);
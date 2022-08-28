"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[77397],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=c(n),m=l,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},90839:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=n(87462),l=n(63366),a=(n(67294),n(3905)),i=["components"],o={slug:"/en/sql-reference/table-functions/sqlite",sidebar_position:55,sidebar_label:"sqlite"},s=void 0,c={unversionedId:"en/sql-reference/table-functions/sqlite",id:"en/sql-reference/table-functions/sqlite",title:"sqlite",description:"sqlite",source:"@site/docs/en/sql-reference/table-functions/sqlite.md",sourceDirName:"en/sql-reference/table-functions",slug:"/en/sql-reference/table-functions/sqlite",permalink:"/docs/en/sql-reference/table-functions/sqlite",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/table-functions/sqlite.md",tags:[],version:"current",sidebarPosition:55,frontMatter:{slug:"/en/sql-reference/table-functions/sqlite",sidebar_position:55,sidebar_label:"sqlite"},sidebar:"english",previous:{title:"s3Cluster",permalink:"/docs/en/sql-reference/table-functions/s3Cluster"},next:{title:"Dictionaries",permalink:"/docs/en/sql-reference/dictionaries/"}},u={},p=[{value:"sqlite",id:"sqlite",level:2}],f={toc:p};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"sqlite"},"sqlite"),(0,a.kt)("p",null,"Allows to perform queries on a data stored in an ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/engines/database-engines/sqlite"},"SQLite")," database."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"    sqlite('db_path', 'table_name')\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")," "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"db_path")," \u2014 Path to a file with an SQLite database. ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"table_name")," \u2014 Name of a table in the SQLite database. ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A table object with the same columns as in the original ",(0,a.kt)("inlineCode",{parentName:"li"},"SQLite")," table.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"Query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM sqlite('sqlite.db', 'table1') ORDER BY col2;\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500col1\u2500\u2500\u252c\u2500col2\u2500\u2510\n\u2502 line1 \u2502    1 \u2502\n\u2502 line2 \u2502    2 \u2502\n\u2502 line3 \u2502    3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See Also")," "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/sqlite"},"SQLite")," table engine")))}m.isMDXComponent=!0}}]);
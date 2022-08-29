"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[38215],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,b=f["".concat(c,".").concat(m)]||f[m]||p[m]||l;return n?r.createElement(b,o(o({ref:t},i),{},{components:n})):r.createElement(b,o({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},55271:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],s={slug:"/en/sql-reference/table-functions/view",sidebar_position:51,sidebar_label:"view",title:"view"},c=void 0,u={unversionedId:"en/sql-reference/table-functions/view",id:"en/sql-reference/table-functions/view",title:"view",description:"Turns a subquery into a table. The function implements views (see CREATE VIEW). The resulting table does not store data, but only stores the specified SELECT query. When reading from the table, ClickHouse executes the query and deletes all unnecessary columns from the result.",source:"@site/docs/en/sql-reference/table-functions/view.md",sourceDirName:"en/sql-reference/table-functions",slug:"/en/sql-reference/table-functions/view",permalink:"/docs/en/sql-reference/table-functions/view",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/table-functions/view.md",tags:[],version:"current",sidebarPosition:51,frontMatter:{slug:"/en/sql-reference/table-functions/view",sidebar_position:51,sidebar_label:"view",title:"view"},sidebar:"english",previous:{title:"cluster",permalink:"/docs/en/sql-reference/table-functions/cluster"},next:{title:"null function",permalink:"/docs/en/sql-reference/table-functions/null"}},i={},p=[],f={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Turns a subquery into a table. The function implements views (see ",(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/statements/create/view/#create-view"},"CREATE VIEW"),"). The resulting table does not store data, but only stores the specified ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," query. When reading from the table, ClickHouse executes the query and deletes all unnecessary columns from the result."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"view(subquery)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"subquery")," \u2014 ",(0,l.kt)("inlineCode",{parentName:"li"},"SELECT")," query.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A table.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Input table:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500name\u2500\u2500\u2500\u2500\u2500\u252c\u2500days\u2500\u2510\n\u2502  1 \u2502 January  \u2502   31 \u2502\n\u2502  2 \u2502 February \u2502   29 \u2502\n\u2502  3 \u2502 March    \u2502   31 \u2502\n\u2502  4 \u2502 April    \u2502   30 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM view(SELECT name FROM months);\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 January  \u2502\n\u2502 February \u2502\n\u2502 March    \u2502\n\u2502 April    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"You can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"view")," function as a parameter of the ",(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/table-functions/remote/#remote-remotesecure"},"remote")," and ",(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/table-functions/cluster/#cluster-clusterallreplicas"},"cluster")," table functions:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM remote(`127.0.0.1`, view(SELECT a, b, c FROM table_name));\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM cluster(`cluster_name`, view(SELECT a, b, c FROM table_name));\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See Also")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/engines/table-engines/special/view/"},"View Table Engine"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/table-functions/view/"},"Original article")," "))}m.isMDXComponent=!0}}]);
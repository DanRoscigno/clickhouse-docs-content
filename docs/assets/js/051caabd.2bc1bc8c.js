"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[88675],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<l;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34179:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),s=["components"],i={sidebar_position:11,sidebar_label:"PostgreSQL"},o=void 0,p={unversionedId:"ru/engines/table-engines/integrations/postgresql",id:"ru/engines/table-engines/integrations/postgresql",title:"postgresql",description:"postgresql}",source:"@site/docs/ru/engines/table-engines/integrations/postgresql.md",sourceDirName:"ru/engines/table-engines/integrations",slug:"/ru/engines/table-engines/integrations/postgresql",permalink:"/docs/ru/engines/table-engines/integrations/postgresql",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/engines/table-engines/integrations/postgresql.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,sidebar_label:"PostgreSQL"},sidebar:"russia",previous:{title:"EmbeddedRocksDB",permalink:"/docs/ru/engines/table-engines/integrations/embedded-rocksdb"},next:{title:"ExternalDistributed",permalink:"/docs/ru/engines/table-engines/integrations/ExternalDistributed"}},u={},c=[{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b",id:"creating-a-table",level:2},{value:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438",id:"implementation-details",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",id:"usage-example",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"#PostgreSQL {#postgresql}"),(0,l.kt)("p",null,"\u0414\u0432\u0438\u0436\u043e\u043a PostgreSQL \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u044b ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT")," \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446 \u043d\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0435 PostgreSQL."),(0,l.kt)("h2",{id:"creating-a-table"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1] [TTL expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2] [TTL expr2],\n    ...\n) ENGINE = PostgreSQL('host:port', 'database', 'table', 'user', 'password'[, `schema`]);\n")),(0,l.kt)("p",null,"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/create/table#create-table-query"},"CREATE TABLE"),"."),(0,l.kt)("p",null,"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043c\u043e\u0436\u0435\u0442 \u043e\u0442\u043b\u0438\u0447\u0430\u0442\u044c\u0441\u044f \u043e\u0442 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b PostgreSQL:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0418\u043c\u0435\u043d\u0430 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0442\u0430\u043a\u0438\u043c\u0438 \u0436\u0435, \u043a\u0430\u043a \u0432 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 PostgreSQL, \u043d\u043e \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0437 \u044d\u0442\u0438\u0445 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0438 \u0432 \u043b\u044e\u0431\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435."),(0,l.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f\u044b \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u043c\u043e\u0433\u0443\u0442 \u043e\u0442\u043b\u0438\u0447\u0430\u0442\u044c\u0441\u044f \u043e\u0442 \u0442\u0438\u043f\u043e\u0432 \u0432 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 PostgreSQL. ClickHouse \u043f\u044b\u0442\u0430\u0435\u0442\u0441\u044f ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/engines/database-engines/postgresql#data_types-support"},"\u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438")," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043a \u0442\u0438\u043f\u0430\u043c \u0434\u0430\u043d\u043d\u044b\u0445 ClickHouse."),(0,l.kt)("li",{parentName:"ul"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/operations/settings/settings#external-table-functions-use-nulls"},"external_table_functions_use_nulls")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u043a\u0430\u043a \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c Nullable \u0441\u0442\u043e\u043b\u0431\u0446\u044b. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: 1. \u0415\u0441\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 0, \u0442\u043e \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043d\u0435 \u0434\u0435\u043b\u0430\u0435\u0442 Nullable \u0441\u0442\u043e\u043b\u0431\u0446\u044b, \u0430 \u0432\u043c\u0435\u0441\u0442\u043e NULL \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0434\u043b\u044f \u0441\u043a\u0430\u043b\u044f\u0440\u043d\u043e\u0433\u043e \u0442\u0438\u043f\u0430. \u042d\u0442\u043e \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u043e \u0434\u043b\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 NULL \u0432\u043d\u0443\u0442\u0440\u0438 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u0432\u0438\u0436\u043a\u0430")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"host:port")," \u2014 \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 PostgreSQL."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"database")," \u2014 \u0438\u043c\u044f \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 PostgreSQL."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"table")," \u2014 \u0438\u043c\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"user")," \u2014 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f PostgreSQL."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"password")," \u2014 \u043f\u0430\u0440\u043e\u043b\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f PostgreSQL."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"schema")," \u2014 \u0438\u043c\u044f \u0441\u0445\u0435\u043c\u044b, \u0435\u0441\u043b\u0438 \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0441\u0445\u0435\u043c\u0430 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e. \u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442.")),(0,l.kt)("h2",{id:"implementation-details"},"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438"),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441\u044b ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u0435 PostgreSQL \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u043a\u0430\u043a ",(0,l.kt)("inlineCode",{parentName:"p"},"COPY (SELECT ...) TO STDOUT")," \u0432\u043d\u0443\u0442\u0440\u0438 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438 PostgreSQL \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u0447\u0442\u0435\u043d\u0438\u0435 \u0441 \u043a\u043e\u043c\u043c\u0438\u0442\u043e\u043c \u043f\u043e\u0441\u043b\u0435 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT"),"."),(0,l.kt)("p",null,"\u041f\u0440\u043e\u0441\u0442\u044b\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0434\u043b\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE"),", \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a ",(0,l.kt)("inlineCode",{parentName:"p"},"="),", ",(0,l.kt)("inlineCode",{parentName:"p"},"!="),", ",(0,l.kt)("inlineCode",{parentName:"p"},">"),", ",(0,l.kt)("inlineCode",{parentName:"p"},">="),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<=")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"IN"),", \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u0435 PostgreSQL \u0441\u0435\u0440\u0432\u0435\u0440\u0430."),(0,l.kt)("p",null,"\u0412\u0441\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f, \u0430\u0433\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0438, \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438, \u0443\u0441\u043b\u043e\u0432\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"IN [ array ]")," \u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT")," \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u0435 ClickHouse \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u0437\u0430\u043f\u0440\u043e\u0441 \u043a PostgreSQL \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f."),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441\u044b ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT")," \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u0435 PostgreSQL \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u043a\u0430\u043a ",(0,l.kt)("inlineCode",{parentName:"p"},'COPY "table_name" (field1, field2, ... fieldN) FROM STDIN')," \u0432\u043d\u0443\u0442\u0440\u0438 PostgreSQL \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438 \u0441 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u043a\u043e\u043c\u043c\u0438\u0442\u043e\u043c \u043f\u043e\u0441\u043b\u0435 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT"),"."),(0,l.kt)("p",null,"PostgreSQL \u043c\u0430\u0441\u0441\u0438\u0432\u044b \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u044b ClickHouse."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),'"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435"')),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre"},"\u0411\u0443\u0434\u044c\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u0442\u0435\u043b\u044c\u043d\u044b, \u0432 PostgreSQL \u043c\u0430\u0441\u0441\u0438\u0432\u044b, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0435 \u043a\u0430\u043a `type_name[]`, \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043c\u043d\u043e\u0433\u043e\u043c\u0435\u0440\u043d\u044b\u043c\u0438 \u0438 \u043c\u043e\u0433\u0443\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0432 \u0441\u0435\u0431\u0435 \u0440\u0430\u0437\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u0439 \u0432 \u0440\u0430\u0437\u043d\u044b\u0445 \u0441\u0442\u0440\u043e\u043a\u0430\u0445 \u043e\u0434\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b. \u0412\u043d\u0443\u0442\u0440\u0438 ClickHouse \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u043c\u043d\u043e\u0433\u043e\u043c\u0435\u0440\u043d\u044b\u0435 \u043c\u0430\u0441\u0441\u0438\u0432\u044b \u0441 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u043c \u043a\u043e\u043b-\u0432\u043e\u043c \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u0439 \u0432\u043e \u0432\u0441\u0435\u0445 \u0441\u0442\u0440\u043e\u043a\u0430\u0445 \u0442\u0430\u0431\u043b\u0438\u0446\u044b.\n")))),(0,l.kt)("p",null,"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0435\u043f\u043b\u0438\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u044b \u0447\u0435\u0440\u0435\u0437 ",(0,l.kt)("inlineCode",{parentName:"p"},"|"),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test_replicas (id UInt32, name String) ENGINE = PostgreSQL(`postgres{2|3|4}:5432`, 'clickhouse', 'test_replicas', 'postgres', 'mysecretpassword');\n")),(0,l.kt)("p",null,"\u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0441\u043b\u043e\u0432\u0430\u0440\u044f PostgreSQL \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 \u0440\u0435\u043f\u043b\u0438\u043a. \u0427\u0435\u043c \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u043e\u043c\u0435\u0440 \u0440\u0435\u043f\u043b\u0438\u043a\u0438, \u0442\u0435\u043c \u043d\u0438\u0436\u0435 \u0435\u0435 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442. \u041d\u0430\u0438\u0432\u044b\u0441\u0448\u0438\u0439 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 \u0443 \u0440\u0435\u043f\u043b\u0438\u043a\u0438 \u0441 \u043d\u043e\u043c\u0435\u0440\u043e\u043c ",(0,l.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,l.kt)("p",null,"\u0412 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u043d\u0438\u0436\u0435 \u0440\u0435\u043f\u043b\u0438\u043a\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"example01-1")," \u0438\u043c\u0435\u0435\u0442 \u0431\u043e\u043b\u0435\u0435 \u0432\u044b\u0441\u043e\u043a\u0438\u0439 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<postgresql>\n    <port>5432</port>\n    <user>clickhouse</user>\n    <password>qwerty</password>\n    <replica>\n        <host>example01-1</host>\n        <priority>1</priority>\n    </replica>\n    <replica>\n        <host>example01-2</host>\n        <priority>2</priority>\n    </replica>\n    <db>db_name</db>\n    <table>table_name</table>\n    <where>id=10</where>\n    <invalidate_query>SQL_QUERY</invalidate_query>\n</postgresql>\n</source>\n")),(0,l.kt)("h2",{id:"usage-example"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),(0,l.kt)("p",null,"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0432 PostgreSQL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'postgres=# CREATE TABLE "public"."test" (\n"int_id" SERIAL,\n"int_nullable" INT NULL DEFAULT NULL,\n"float" FLOAT NOT NULL,\n"str" VARCHAR(100) NOT NULL DEFAULT \'\',\n"float_nullable" FLOAT NULL DEFAULT NULL,\nPRIMARY KEY (int_id));\n\nCREATE TABLE\n\npostgres=# INSERT INTO test (int_id, str, "float") VALUES (1,\'test\',2);\nINSERT 0 1\n\npostgresql> SELECT * FROM test;\n  int_id | int_nullable | float | str  | float_nullable\n --------+--------------+-------+------+----------------\n       1 |              |     2 | test |\n (1 row)\n')),(0,l.kt)("p",null,"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0432 ClickHouse, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 PostgreSQL \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u043e\u0439 \u0432\u044b\u0448\u0435:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE default.postgresql_table\n(\n    `float_nullable` Nullable(Float32),\n    `str` String,\n    `int_id` Int32\n)\nENGINE = PostgreSQL('localhost:5432', 'public', 'test', 'postges_user', 'postgres_password');\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM postgresql_table WHERE str IN ('test');\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500float_nullable\u2500\u252c\u2500str\u2500\u2500\u252c\u2500int_id\u2500\u2510\n\u2502           \u1d3a\u1d41\u1d38\u1d38 \u2502 test \u2502      1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Using Non-default Schema:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'postgres=# CREATE SCHEMA "nice.schema";\n\npostgres=# CREATE TABLE "nice.schema"."nice.table" (a integer);\n\npostgres=# INSERT INTO "nice.schema"."nice.table" SELECT i FROM generate_series(0, 99) as t(i)\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE pg_table_schema_with_dots (a UInt32)\n        ENGINE PostgreSQL('localhost:5432', 'clickhouse', 'nice.table', 'postgrsql_user', 'password', 'nice.schema');\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/table-functions/postgresql"},"\u0422\u0430\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"a"},"postgresql"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources#dicts-external_dicts_dict_sources-postgresql"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 PostgreSQL \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430 \u0434\u043b\u044f \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u0441\u043b\u043e\u0432\u0430\u0440\u044f"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/ru/engines/table-engines/integrations/postgresql/"},"\u041e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0442\u0430\u0442\u044c\u044f")," "))}m.isMDXComponent=!0}}]);
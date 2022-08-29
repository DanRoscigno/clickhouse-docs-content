"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[91703],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(o,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<l;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47087:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),s=["components"],i={slug:"/en/sql-reference/statements/kill",sidebar_position:46,sidebar_label:"KILL",title:"KILL Statements"},o=void 0,u={unversionedId:"en/sql-reference/statements/kill",id:"en/sql-reference/statements/kill",title:"KILL Statements",description:"There are two kinds of kill statements: to kill a query and to kill a mutation",source:"@site/docs/en/sql-reference/statements/kill.md",sourceDirName:"en/sql-reference/statements",slug:"/en/sql-reference/statements/kill",permalink:"/docs/en/sql-reference/statements/kill",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/kill.md",tags:[],version:"current",sidebarPosition:46,frontMatter:{slug:"/en/sql-reference/statements/kill",sidebar_position:46,sidebar_label:"KILL",title:"KILL Statements"},sidebar:"english",previous:{title:"EXISTS",permalink:"/docs/en/sql-reference/statements/exists"},next:{title:"OPTIMIZE",permalink:"/docs/en/sql-reference/statements/optimize"}},c={},p=[{value:"KILL QUERY",id:"kill-query",level:2},{value:"KILL MUTATION",id:"kill-mutation",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"There are two kinds of kill statements: to kill a query and to kill a mutation"),(0,l.kt)("h2",{id:"kill-query"},"KILL QUERY"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"KILL QUERY [ON CLUSTER cluster]\n  WHERE <where expression to SELECT FROM system.processes query>\n  [SYNC|ASYNC|TEST]\n  [FORMAT format]\n")),(0,l.kt)("p",null,"Attempts to forcibly terminate the currently running queries.\nThe queries to terminate are selected from the system.processes table using the criteria defined in the ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," clause of the ",(0,l.kt)("inlineCode",{parentName:"p"},"KILL")," query."),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Forcibly terminates all queries with the specified query_id:\nKILL QUERY WHERE query_id='2-857d-4a57-9ee0-327da5d60a90'\n\n-- Synchronously terminates all queries run by 'username':\nKILL QUERY WHERE user='username' SYNC\n")),(0,l.kt)("p",null,"Read-only users can only stop their own queries."),(0,l.kt)("p",null,"By default, the asynchronous version of queries is used (",(0,l.kt)("inlineCode",{parentName:"p"},"ASYNC"),"), which does not wait for confirmation that queries have stopped."),(0,l.kt)("p",null,"The synchronous version (",(0,l.kt)("inlineCode",{parentName:"p"},"SYNC"),") waits for all queries to stop and displays information about each process as it stops.\nThe response contains the ",(0,l.kt)("inlineCode",{parentName:"p"},"kill_status")," column, which can take the following values:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"finished")," \u2013 The query was terminated successfully."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"waiting")," \u2013 Waiting for the query to end after sending it a signal to terminate."),(0,l.kt)("li",{parentName:"ol"},"The other values \u200b\u200bexplain why the query can\u2019t be stopped.")),(0,l.kt)("p",null,"A test query (",(0,l.kt)("inlineCode",{parentName:"p"},"TEST"),") only checks the user\u2019s rights and displays a list of queries to stop."),(0,l.kt)("h2",{id:"kill-mutation"},"KILL MUTATION"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"KILL MUTATION [ON CLUSTER cluster]\n  WHERE <where expression to SELECT FROM system.mutations query>\n  [TEST]\n  [FORMAT format]\n")),(0,l.kt)("p",null,"Tries to cancel and remove ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/#alter-mutations"},"mutations")," that are currently executing. Mutations to cancel are selected from the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/operations/system-tables/mutations#system_tables-mutations"},(0,l.kt)("inlineCode",{parentName:"a"},"system.mutations"))," table using the filter specified by the ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," clause of the ",(0,l.kt)("inlineCode",{parentName:"p"},"KILL")," query."),(0,l.kt)("p",null,"A test query (",(0,l.kt)("inlineCode",{parentName:"p"},"TEST"),") only checks the user\u2019s rights and displays a list of mutations to stop."),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Cancel and remove all mutations of the single table:\nKILL MUTATION WHERE database = 'default' AND table = 'table'\n\n-- Cancel the specific mutation:\nKILL MUTATION WHERE database = 'default' AND table = 'table' AND mutation_id = 'mutation_3.txt'\n")),(0,l.kt)("p",null,"The query is useful when a mutation is stuck and cannot finish (e.g.\xa0if some function in the mutation query throws an exception when applied to the data contained in the table)."),(0,l.kt)("p",null,"Changes already made by the mutation are not rolled back."))}d.isMDXComponent=!0}}]);
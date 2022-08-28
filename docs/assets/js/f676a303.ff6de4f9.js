"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[76397],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,v=m["".concat(o,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(v,s(s({ref:t},u),{},{components:n})):a.createElement(v,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<l;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81780:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),s=["components"],i={slug:"/en/sql-reference/statements/watch",sidebar_position:53,sidebar_label:"WATCH"},o="WATCH Statement (Experimental)",c={unversionedId:"en/sql-reference/statements/watch",id:"en/sql-reference/statements/watch",title:"WATCH Statement (Experimental)",description:"This is an experimental feature that may change in backwards-incompatible ways in the future releases. Enable live views and WATCH query using set allowexperimentallive_view = 1.",source:"@site/docs/en/sql-reference/statements/watch.md",sourceDirName:"en/sql-reference/statements",slug:"/en/sql-reference/statements/watch",permalink:"/docs/en/sql-reference/statements/watch",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/watch.md",tags:[],version:"current",sidebarPosition:53,frontMatter:{slug:"/en/sql-reference/statements/watch",sidebar_position:53,sidebar_label:"WATCH"},sidebar:"english",previous:{title:"USE",permalink:"/docs/en/sql-reference/statements/use"},next:{title:"Miscellaneous Statements",permalink:"/docs/en/sql-reference/statements/misc"}},u={},p=[{value:"Virtual columns",id:"virtual-columns",level:2},{value:"EVENTS Clause",id:"events-clause",level:2},{value:"LIMIT Clause",id:"limit-clause",level:2},{value:"FORMAT Clause",id:"format-clause",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"watch-statement-experimental"},"WATCH Statement (Experimental)"),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This is an experimental feature that may change in backwards-incompatible ways in the future releases. Enable live views and ",(0,l.kt)("inlineCode",{parentName:"p"},"WATCH")," query using ",(0,l.kt)("inlineCode",{parentName:"p"},"set allow_experimental_live_view = 1"),"."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"WATCH [db.]live_view\n[EVENTS]\n[LIMIT n]\n[FORMAT format]\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"WATCH")," query performs continuous data retrieval from a ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/view#live-view"},"LIVE VIEW")," table. Unless the ",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT")," clause is specified it provides an infinite stream of query results from a ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/view#live-view"},"LIVE VIEW"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"WATCH [db.]live_view [EVENTS] [LIMIT n] [FORMAT format]\n")),(0,l.kt)("h2",{id:"virtual-columns"},"Virtual columns"),(0,l.kt)("p",null,"The virtual ",(0,l.kt)("inlineCode",{parentName:"p"},"_version")," column in the query result indicates the current result version."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE LIVE VIEW lv WITH REFRESH 5 AS SELECT now();\nWATCH lv;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500now()\u2500\u252c\u2500_version\u2500\u2510\n\u2502 2021-02-21 09:17:21 \u2502        1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500now()\u2500\u252c\u2500_version\u2500\u2510\n\u2502 2021-02-21 09:17:26 \u2502        2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500now()\u2500\u252c\u2500_version\u2500\u2510\n\u2502 2021-02-21 09:17:31 \u2502        3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n...\n")),(0,l.kt)("p",null,"By default, the requested data is returned to the client, while in conjunction with ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/insert-into"},"INSERT INTO")," it can be forwarded to a different table."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO [db.]table WATCH [db.]live_view ...\n")),(0,l.kt)("h2",{id:"events-clause"},"EVENTS Clause"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"EVENTS")," clause can be used to obtain a short form of the ",(0,l.kt)("inlineCode",{parentName:"p"},"WATCH")," query where instead of the query result you will just get the latest query result version."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"WATCH [db.]live_view EVENTS;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE LIVE VIEW lv WITH REFRESH 5 AS SELECT now();\nWATCH lv EVENTS;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u250c\u2500version\u2500\u2510\n\u2502       1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500version\u2500\u2510\n\u2502       2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n...\n")),(0,l.kt)("h2",{id:"limit-clause"},"LIMIT Clause"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT n")," clause specifies the number of updates the ",(0,l.kt)("inlineCode",{parentName:"p"},"WATCH")," query should wait for before terminating. By default there is no limit on the number of updates and therefore the query will not terminate. The value of ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," indicates that the ",(0,l.kt)("inlineCode",{parentName:"p"},"WATCH")," query should not wait for any new query results and therefore will return immediately once query result is evaluated."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"WATCH [db.]live_view LIMIT 1;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE LIVE VIEW lv WITH REFRESH 5 AS SELECT now();\nWATCH lv EVENTS LIMIT 1;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u250c\u2500version\u2500\u2510\n\u2502       1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"format-clause"},"FORMAT Clause"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"FORMAT")," clause works the same way as for the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/format#format-clause"},"SELECT"),"."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats#jsoneachrowwithprogress"},"JSONEachRowWithProgress")," format should be used when watching ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/view#live-view"},"LIVE VIEW")," tables over the HTTP interface. The progress messages will be added to the output to keep the long-lived HTTP connection alive until the query result changes. The interval between progress messages is controlled using the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/view#live-view-settings"},"live_view_heartbeat_interval")," setting."))))}d.isMDXComponent=!0}}]);
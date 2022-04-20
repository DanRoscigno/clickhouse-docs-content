"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[78047],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,O=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(O,o(o({ref:t},u),{},{components:n})):r.createElement(O,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30237:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],s={sidebar_position:44,sidebar_label:"DROP"},p="DROP\u8bed\u6cd5",i={unversionedId:"zh/sql-reference/statements/drop",id:"zh/sql-reference/statements/drop",title:"DROP\u8bed\u6cd5",description:"drop}",source:"@site/docs/zh/sql-reference/statements/drop.md",sourceDirName:"zh/sql-reference/statements",slug:"/zh/sql-reference/statements/drop",permalink:"/docs/zh/sql-reference/statements/drop",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/drop.md",tags:[],version:"current",sidebarPosition:44,frontMatter:{sidebar_position:44,sidebar_label:"DROP"},sidebar:"chinese",previous:{title:"DETACH",permalink:"/docs/zh/sql-reference/statements/detach"},next:{title:"EXISTS",permalink:"/docs/zh/sql-reference/statements/exists"}},u={},c=[{value:"DROP DATABASE",id:"drop-database",level:2},{value:"DROP TABLE",id:"drop-table",level:2},{value:"DROP DICTIONARY",id:"drop-dictionary",level:2},{value:"DROP USER",id:"drop-user-statement",level:2},{value:"DROP ROLE",id:"drop-role-statement",level:2},{value:"DROP ROW POLICY",id:"drop-row-policy-statement",level:2},{value:"DROP QUOTA",id:"drop-quota-statement",level:2},{value:"DROP SETTINGS PROFILE",id:"drop-settings-profile-statement",level:2},{value:"DROP VIEW",id:"drop-view",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"drop"},"DROP\u8bed\u6cd5"),(0,l.kt)("p",null,"\u5220\u9664\u73b0\u6709\u5b9e\u4f53\u3002 \u5982\u679c\u6307\u5b9a\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"IF EXISTS"),"\u5b50\u53e5\uff0c\u5982\u679c\u5b9e\u4f53\u4e0d\u5b58\u5728\uff0c\u8fd9\u4e9b\u67e5\u8be2\u4e0d\u4f1a\u8fd4\u56de\u9519\u8bef\u3002"),(0,l.kt)("h2",{id:"drop-database"},"DROP DATABASE"),(0,l.kt)("p",null,"\u5220\u9664",(0,l.kt)("inlineCode",{parentName:"p"},"db"),"\u6570\u636e\u5e93\u4e2d\u7684\u6240\u6709\u8868\uff0c\u7136\u540e\u5220\u9664",(0,l.kt)("inlineCode",{parentName:"p"},"db"),"\u6570\u636e\u5e93\u672c\u8eab\u3002"),(0,l.kt)("p",null,"\u8bed\u6cd5:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP DATABASE [IF EXISTS] db [ON CLUSTER cluster]\n")),(0,l.kt)("h2",{id:"drop-table"},"DROP TABLE"),(0,l.kt)("p",null,"\u5220\u9664\u6570\u636e\u8868"),(0,l.kt)("p",null,"\u8bed\u6cd5:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP [TEMPORARY] TABLE [IF EXISTS] [db.]name [ON CLUSTER cluster]\n")),(0,l.kt)("h2",{id:"drop-dictionary"},"DROP DICTIONARY"),(0,l.kt)("p",null,"\u5220\u9664\u5b57\u5178\u3002"),(0,l.kt)("p",null,"\u8bed\u6cd5:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP DICTIONARY [IF EXISTS] [db.]name\n")),(0,l.kt)("h2",{id:"drop-user-statement"},"DROP USER"),(0,l.kt)("p",null,"\u5220\u9664\u7528\u6237."),(0,l.kt)("p",null,"\u8bed\u6cd5:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP USER [IF EXISTS] name [,...] [ON CLUSTER cluster_name]\n")),(0,l.kt)("h2",{id:"drop-role-statement"},"DROP ROLE"),(0,l.kt)("p",null,"\u5220\u9664\u89d2\u8272\u3002\u5220\u9664\u7684\u89d2\u8272\u5c06\u4ece\u5206\u914d\u7ed9\u5b83\u7684\u6240\u6709\u5b9e\u4f53\u4e2d\u64a4\u6d88\u3002"),(0,l.kt)("p",null,"\u8bed\u6cd5:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP ROLE [IF EXISTS] name [,...] [ON CLUSTER cluster_name]\n")),(0,l.kt)("h2",{id:"drop-row-policy-statement"},"DROP ROW POLICY"),(0,l.kt)("p",null,"\u5220\u9664\u884c\u7b56\u7565\u3002 \u5220\u9664\u7684\u884c\u7b56\u7565\u4ece\u5206\u914d\u5230\u5b83\u7684\u6240\u6709\u5b9e\u4f53\u4e2d\u64a4\u6d88\u3002"),(0,l.kt)("p",null,"\u8bed\u6cd5:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP [ROW] POLICY [IF EXISTS] name [,...] ON [database.]table [,...] [ON CLUSTER cluster_name]\n")),(0,l.kt)("h2",{id:"drop-quota-statement"},"DROP QUOTA"),(0,l.kt)("p",null,"Deletes a quota. The deleted quota is revoked from all the entities where it was assigned."),(0,l.kt)("p",null,"\u8bed\u6cd5:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP QUOTA [IF EXISTS] name [,...] [ON CLUSTER cluster_name]\n")),(0,l.kt)("h2",{id:"drop-settings-profile-statement"},"DROP SETTINGS PROFILE"),(0,l.kt)("p",null,"\u5220\u9664\u914d\u7f6e\u6587\u4ef6\u3002 \u5df2\u5220\u9664\u7684\u8bbe\u7f6e\u914d\u7f6e\u6587\u4ef6\u5c06\u4ece\u5206\u914d\u7ed9\u5b83\u7684\u6240\u6709\u5b9e\u4f53\u4e2d\u64a4\u9500\u3002"),(0,l.kt)("p",null,"\u8bed\u6cd5:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP [SETTINGS] PROFILE [IF EXISTS] name [,...] [ON CLUSTER cluster_name]\n")),(0,l.kt)("h2",{id:"drop-view"},"DROP VIEW"),(0,l.kt)("p",null,"\u5220\u9664\u89c6\u56fe\u3002 \u89c6\u56fe\u4e5f\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"DROP TABLE"),"\u547d\u4ee4\u5220\u9664\uff0c\u4f46",(0,l.kt)("inlineCode",{parentName:"p"},"DROP VIEW"),"\u4f1a\u68c0\u67e5",(0,l.kt)("inlineCode",{parentName:"p"},"[db.]name"),"\u662f\u5426\u662f\u4e00\u4e2a\u89c6\u56fe\u3002"),(0,l.kt)("p",null,"\u8bed\u6cd5:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP VIEW [IF EXISTS] [db.]name [ON CLUSTER cluster]\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/sql-reference/statements/drop/"},"\u539f\u59cb\u6587\u7ae0")," "))}m.isMDXComponent=!0}}]);
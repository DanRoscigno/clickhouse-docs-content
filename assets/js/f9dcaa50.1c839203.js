"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[13430],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,O=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(O,o(o({ref:t},i),{},{components:n})):r.createElement(O,o({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69743:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],p={sidebar_position:44,sidebar_label:"DROP"},u="DROP",s={unversionedId:"ru/sql-reference/statements/drop",id:"ru/sql-reference/statements/drop",title:"DROP",description:"drop}",source:"@site/docs/ru/sql-reference/statements/drop.md",sourceDirName:"ru/sql-reference/statements",slug:"/ru/sql-reference/statements/drop",permalink:"/ru/sql-reference/statements/drop",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/drop.md",tags:[],version:"current",sidebarPosition:44,frontMatter:{sidebar_position:44,sidebar_label:"DROP"},sidebar:"russia",previous:{title:"DETACH",permalink:"/ru/sql-reference/statements/detach"},next:{title:"EXISTS",permalink:"/ru/sql-reference/statements/exists"}},i={},c=[{value:"DROP DATABASE",id:"drop-database",level:2},{value:"DROP TABLE",id:"drop-table",level:2},{value:"DROP DICTIONARY",id:"drop-dictionary",level:2},{value:"DROP USER",id:"drop-user-statement",level:2},{value:"DROP ROLE",id:"drop-role-statement",level:2},{value:"DROP ROW POLICY",id:"drop-row-policy-statement",level:2},{value:"DROP QUOTA",id:"drop-quota-statement",level:2},{value:"DROP SETTINGS PROFILE",id:"drop-settings-profile-statement",level:2},{value:"DROP VIEW",id:"drop-view",level:2},{value:"DROP FUNCTION",id:"drop-function",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"drop"},"DROP"),(0,l.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 \u043e\u0431\u044a\u0435\u043a\u0442. \u0415\u0441\u043b\u0438 \u0443\u043a\u0430\u0437\u0430\u043d\u043e ",(0,l.kt)("inlineCode",{parentName:"p"},"IF EXISTS")," - \u043d\u0435 \u0432\u044b\u0434\u0430\u0432\u0430\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0443, \u0435\u0441\u043b\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442."),(0,l.kt)("h2",{id:"drop-database"},"DROP DATABASE"),(0,l.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u0432\u0441\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0432 \u0431\u0430\u0437\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,l.kt)("inlineCode",{parentName:"p"},"db"),", \u0437\u0430\u0442\u0435\u043c \u0443\u0434\u0430\u043b\u044f\u0435\u0442 \u0441\u0430\u043c\u0443 \u0431\u0430\u0437\u0443 \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,l.kt)("inlineCode",{parentName:"p"},"db"),"."),(0,l.kt)("p",null,"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP DATABASE [IF EXISTS] db [ON CLUSTER cluster]\n")),(0,l.kt)("h2",{id:"drop-table"},"DROP TABLE"),(0,l.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u0442\u0430\u0431\u043b\u0438\u0446\u0443."),(0,l.kt)("p",null,"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP [TEMPORARY] TABLE [IF EXISTS] [db.]name [ON CLUSTER cluster]\n")),(0,l.kt)("h2",{id:"drop-dictionary"},"DROP DICTIONARY"),(0,l.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u0441\u043b\u043e\u0432\u0430\u0440\u044c."),(0,l.kt)("p",null,"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP DICTIONARY [IF EXISTS] [db.]name\n")),(0,l.kt)("h2",{id:"drop-user-statement"},"DROP USER"),(0,l.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f."),(0,l.kt)("p",null,"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP USER [IF EXISTS] name [,...] [ON CLUSTER cluster_name]\n")),(0,l.kt)("h2",{id:"drop-role-statement"},"DROP ROLE"),(0,l.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u0440\u043e\u043b\u044c. \u041f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0440\u043e\u043b\u044c \u043e\u0442\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0443 \u0432\u0441\u0435\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0434\u043e\u0441\u0442\u0443\u043f\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u043e\u043d\u0430 \u043f\u0440\u0438\u0441\u0432\u043e\u0435\u043d\u0430."),(0,l.kt)("p",null,"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP ROLE [IF EXISTS] name [,...] [ON CLUSTER cluster_name]\n")),(0,l.kt)("h2",{id:"drop-row-policy-statement"},"DROP ROW POLICY"),(0,l.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0441\u0442\u0440\u043e\u043a\u0430\u043c. \u041f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043e\u0442\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0443 \u0432\u0441\u0435\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0434\u043e\u0441\u0442\u0443\u043f\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u043e\u043d\u0430 \u043f\u0440\u0438\u0441\u0432\u043e\u0435\u043d\u0430."),(0,l.kt)("p",null,"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP [ROW] POLICY [IF EXISTS] name [,...] ON [database.]table [,...] [ON CLUSTER cluster_name]\n")),(0,l.kt)("h2",{id:"drop-quota-statement"},"DROP QUOTA"),(0,l.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u043a\u0432\u043e\u0442\u0443. \u041f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u043a\u0432\u043e\u0442\u0430 \u043e\u0442\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0443 \u0432\u0441\u0435\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0434\u043e\u0441\u0442\u0443\u043f\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u043e\u043d\u0430 \u043f\u0440\u0438\u0441\u0432\u043e\u0435\u043d\u0430."),(0,l.kt)("p",null,"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP QUOTA [IF EXISTS] name [,...] [ON CLUSTER cluster_name]\n")),(0,l.kt)("h2",{id:"drop-settings-profile-statement"},"DROP SETTINGS PROFILE"),(0,l.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u043f\u0440\u043e\u0444\u0438\u043b\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a. \u041f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u043f\u0440\u043e\u0444\u0438\u043b\u044c \u043e\u0442\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0443 \u0432\u0441\u0435\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0434\u043e\u0441\u0442\u0443\u043f\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u043e\u043d \u043f\u0440\u0438\u0441\u0432\u043e\u0435\u043d."),(0,l.kt)("p",null,"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP [SETTINGS] PROFILE [IF EXISTS] name [,...] [ON CLUSTER cluster_name]\n")),(0,l.kt)("h2",{id:"drop-view"},"DROP VIEW"),(0,l.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435. \u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0443\u0434\u0430\u043b\u0435\u043d\u044b \u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439 ",(0,l.kt)("inlineCode",{parentName:"p"},"DROP TABLE"),", \u043d\u043e \u043a\u043e\u043c\u0430\u043d\u0434\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"DROP VIEW")," \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442, \u0447\u0442\u043e ",(0,l.kt)("inlineCode",{parentName:"p"},"[db.]name")," \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c."),(0,l.kt)("p",null,"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP VIEW [IF EXISTS] [db.]name [ON CLUSTER cluster]\n")),(0,l.kt)("h2",{id:"drop-function"},"DROP FUNCTION"),(0,l.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u044e, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u0443\u044e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/create/function"},"CREATE FUNCTION"),".\n\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043d\u0435\u043b\u044c\u0437\u044f."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DROP FUNCTION [IF EXISTS] function_name\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE FUNCTION linear_equation AS (x, k, b) -> k*x + b;\nDROP FUNCTION linear_equation;\n")))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[94976],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52666:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={sidebar_position:52,sidebar_label:"TRUNCATE"},c="TRUNCATE Statement",l={unversionedId:"en/sql-reference/statements/truncate",id:"en/sql-reference/statements/truncate",title:"TRUNCATE Statement",description:"truncate-statement}",source:"@site/docs/en/sql-reference/statements/truncate.md",sourceDirName:"en/sql-reference/statements",slug:"/en/sql-reference/statements/truncate",permalink:"/docs/en/sql-reference/statements/truncate",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/truncate.md",tags:[],version:"current",sidebarPosition:52,frontMatter:{sidebar_position:52,sidebar_label:"TRUNCATE"},sidebar:"english",previous:{title:"SET ROLE",permalink:"/docs/en/sql-reference/statements/set-role"},next:{title:"USE",permalink:"/docs/en/sql-reference/statements/use"}},p={},u=[],m={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"truncate-statement"},"TRUNCATE Statement"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"TRUNCATE TABLE [IF EXISTS] [db.]name [ON CLUSTER cluster]\n")),(0,i.kt)("p",null,"Removes all data from a table. When the clause ",(0,i.kt)("inlineCode",{parentName:"p"},"IF EXISTS")," is omitted, the query returns an error if the table does not exist."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"TRUNCATE")," query is not supported for ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/view"},"View"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/file"},"File"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/url"},"URL"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/buffer"},"Buffer")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/null"},"Null")," table engines."),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/#replication-alter-partitions-sync"},"replication_alter_partitions_sync")," setting to set up waiting for actions to be executed on replicas."),(0,i.kt)("p",null,"You can specify how long (in seconds) to wait for inactive replicas to execute ",(0,i.kt)("inlineCode",{parentName:"p"},"TRUNCATE")," queries with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/#replication-wait-for-inactive-replica-timeout"},"replication_wait_for_inactive_replica_timeout")," setting."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"replication_alter_partitions_sync")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," and some replicas are not active for more than the time, specified by the ",(0,i.kt)("inlineCode",{parentName:"p"},"replication_wait_for_inactive_replica_timeout")," setting, then an exception ",(0,i.kt)("inlineCode",{parentName:"p"},"UNFINISHED")," is thrown."))))}f.isMDXComponent=!0}}]);
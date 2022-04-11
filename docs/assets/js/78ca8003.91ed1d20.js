"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[4622],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},88509:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={sidebar_label:"HAVING"},l="HAVING Clause",c={unversionedId:"en/sql-reference/statements/select/having",id:"en/sql-reference/statements/select/having",title:"HAVING Clause",description:"having-clause}",source:"@site/docs/en/sql-reference/statements/select/having.md",sourceDirName:"en/sql-reference/statements/select",slug:"/en/sql-reference/statements/select/having",permalink:"/en/sql-reference/statements/select/having",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/en/sql-reference/statements/select/having.md",tags:[],version:"current",frontMatter:{sidebar_label:"HAVING"},sidebar:"english",previous:{title:"GROUP BY",permalink:"/en/sql-reference/statements/select/group-by"},next:{title:"INTERSECT",permalink:"/en/sql-reference/statements/select/intersect"}},u={},p=[{value:"Limitations",id:"limitations",level:2}],f={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"having-clause"},"HAVING Clause"),(0,i.kt)("p",null,"Allows filtering the aggregation results produced by ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/select/group-by"},"GROUP BY"),". It is similar to the ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/select/where"},"WHERE")," clause, but the difference is that ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE")," is performed before aggregation, while ",(0,i.kt)("inlineCode",{parentName:"p"},"HAVING")," is performed after it."),(0,i.kt)("p",null,"It is possible to reference aggregation results from ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," clause in ",(0,i.kt)("inlineCode",{parentName:"p"},"HAVING")," clause by their alias. Alternatively, ",(0,i.kt)("inlineCode",{parentName:"p"},"HAVING")," clause can filter on results of additional aggregates that are not returned in query results."),(0,i.kt)("h2",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"HAVING")," can\u2019t be used if aggregation is not performed. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE")," instead."))}m.isMDXComponent=!0}}]);
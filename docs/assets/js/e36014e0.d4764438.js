"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[40850],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13686:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={slug:"/en/sql-reference/statements/select/prewhere",sidebar_label:"PREWHERE"},l="PREWHERE Clause",p={unversionedId:"en/sql-reference/statements/select/prewhere",id:"en/sql-reference/statements/select/prewhere",title:"PREWHERE Clause",description:"Prewhere is an optimization to apply filtering more efficiently. It is enabled by default even if PREWHERE clause is not specified explicitly. It works by automatically moving part of WHERE condition to prewhere stage. The role of PREWHERE clause is only to control this optimization if you think that you know how to do it better than it happens by default.",source:"@site/docs/en/sql-reference/statements/select/prewhere.md",sourceDirName:"en/sql-reference/statements/select",slug:"/en/sql-reference/statements/select/prewhere",permalink:"/docs/en/sql-reference/statements/select/prewhere",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/select/prewhere.md",tags:[],version:"current",frontMatter:{slug:"/en/sql-reference/statements/select/prewhere",sidebar_label:"PREWHERE"},sidebar:"english",previous:{title:"ORDER BY",permalink:"/docs/en/sql-reference/statements/select/order-by"},next:{title:"SAMPLE",permalink:"/docs/en/sql-reference/statements/select/sample"}},c={},m=[{value:"Controlling Prewhere Manually",id:"controlling-prewhere-manually",level:2},{value:"Limitations",id:"limitations",level:2}],u={toc:m};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prewhere-clause"},"PREWHERE Clause"),(0,a.kt)("p",null,"Prewhere is an optimization to apply filtering more efficiently. It is enabled by default even if ",(0,a.kt)("inlineCode",{parentName:"p"},"PREWHERE")," clause is not specified explicitly. It works by automatically moving part of ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/where"},"WHERE")," condition to prewhere stage. The role of ",(0,a.kt)("inlineCode",{parentName:"p"},"PREWHERE")," clause is only to control this optimization if you think that you know how to do it better than it happens by default."),(0,a.kt)("p",null,"With prewhere optimization, at first only the columns necessary for executing prewhere expression are read. Then the other columns are read that are needed for running the rest of the query, but only those blocks where the prewhere expression is ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," at least for some rows. If there are a lot of blocks where prewhere expression is ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," for all rows and prewhere needs less columns than other parts of query, this often allows to read a lot less data from disk for query execution."),(0,a.kt)("h2",{id:"controlling-prewhere-manually"},"Controlling Prewhere Manually"),(0,a.kt)("p",null,"The clause has the same meaning as the ",(0,a.kt)("inlineCode",{parentName:"p"},"WHERE")," clause. The difference is in which data is read from the table. When manually controlling ",(0,a.kt)("inlineCode",{parentName:"p"},"PREWHERE")," for filtration conditions that are used by a minority of the columns in the query, but that provide strong data filtration. This reduces the volume of data to read."),(0,a.kt)("p",null,"A query may simultaneously specify ",(0,a.kt)("inlineCode",{parentName:"p"},"PREWHERE")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"WHERE"),". In this case, ",(0,a.kt)("inlineCode",{parentName:"p"},"PREWHERE")," precedes ",(0,a.kt)("inlineCode",{parentName:"p"},"WHERE"),"."),(0,a.kt)("p",null,"If the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#optimize_move_to_prewhere"},"optimize_move_to_prewhere")," setting is set to 0, heuristics to automatically move parts of expressions from ",(0,a.kt)("inlineCode",{parentName:"p"},"WHERE")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"PREWHERE")," are disabled."),(0,a.kt)("p",null,"If query has ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/from#select-from-final"},"FINAL")," modifier, the ",(0,a.kt)("inlineCode",{parentName:"p"},"PREWHERE")," optimization is not always correct. It is enabled only if both settings ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#optimize_move_to_prewhere"},"optimize_move_to_prewhere")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#optimize_move_to_prewhere_if_final"},"optimize_move_to_prewhere_if_final")," are turned on."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"PREWHERE")," section is executed before ",(0,a.kt)("inlineCode",{parentName:"p"},"FINAL"),", so the results of ",(0,a.kt)("inlineCode",{parentName:"p"},"FROM ... FINAL")," queries may be skewed when using ",(0,a.kt)("inlineCode",{parentName:"p"},"PREWHERE")," with fields not in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER BY")," section of a table."))),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PREWHERE")," is only supported by tables from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/"},"*MergeTree")," family."))}f.isMDXComponent=!0}}]);
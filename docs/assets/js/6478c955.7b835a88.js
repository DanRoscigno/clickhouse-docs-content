"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[82660,67466],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),f=i,y=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(y,o(o({ref:n},u),{},{components:t})):r.createElement(y,o({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},71134:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],c={slug:"/en/sql-reference/table-functions/dictionary",sidebar_position:54,sidebar_label:"dictionary function",title:"dictionary"},l=void 0,s={unversionedId:"en/sql-reference/table-functions/dictionary",id:"en/sql-reference/table-functions/dictionary",title:"dictionary",description:"Displays the dictionary data as a ClickHouse table. Works the same way as Dictionary engine.",source:"@site/docs/en/sql-reference/table-functions/dictionary.md",sourceDirName:"en/sql-reference/table-functions",slug:"/en/sql-reference/table-functions/dictionary",permalink:"/docs/en/sql-reference/table-functions/dictionary",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/table-functions/dictionary.md",tags:[],version:"current",sidebarPosition:54,frontMatter:{slug:"/en/sql-reference/table-functions/dictionary",sidebar_position:54,sidebar_label:"dictionary function",title:"dictionary"},sidebar:"english",previous:{title:"null function",permalink:"/docs/en/sql-reference/table-functions/null"},next:{title:"hdfsCluster",permalink:"/docs/en/sql-reference/table-functions/hdfsCluster"}},u={},p=[],d={toc:p};function f(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Displays the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts"},"dictionary")," data as a ClickHouse table. Works the same way as ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/dictionary"},"Dictionary")," engine."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"dictionary('dict')\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dict")," \u2014 A dictionary name. ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("p",null,"A ClickHouse table."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"Input table ",(0,a.kt)("inlineCode",{parentName:"p"},"dictionary_source_table"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500value\u2500\u2510\n\u2502  0 \u2502     0 \u2502\n\u2502  1 \u2502     1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"Create a dictionary:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY new_dictionary(id UInt64, value UInt64 DEFAULT 0) PRIMARY KEY id\nSOURCE(CLICKHOUSE(HOST 'localhost' PORT tcpPort() USER 'default' TABLE 'dictionary_source_table')) LAYOUT(DIRECT());\n")),(0,a.kt)("p",null,"Query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM dictionary('new_dictionary');\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500value\u2500\u2510\n\u2502  0 \u2502     0 \u2502\n\u2502  1 \u2502     1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See Also")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/special/dictionary#dictionary"},"Dictionary engine"))))}f.isMDXComponent=!0},76657:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=t(71134),c=["components"],l={slug:"/zh/sql-reference/table-functions/dictionary",sidebar_position:54,sidebar_label:"dictionary function",title:"dictionary"},s=void 0,u={unversionedId:"zh/sql-reference/table-functions/dictionary",id:"zh/sql-reference/table-functions/dictionary",title:"dictionary",description:"",source:"@site/docs/zh/sql-reference/table-functions/dictionary.mdx",sourceDirName:"zh/sql-reference/table-functions",slug:"/zh/sql-reference/table-functions/dictionary",permalink:"/docs/zh/sql-reference/table-functions/dictionary",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/table-functions/dictionary.mdx",tags:[],version:"current",sidebarPosition:54,frontMatter:{slug:"/zh/sql-reference/table-functions/dictionary",sidebar_position:54,sidebar_label:"dictionary function",title:"dictionary"},sidebar:"chinese",previous:{title:"null function",permalink:"/docs/zh/sql-reference/table-functions/null"},next:{title:"s3Cluster",permalink:"/docs/zh/sql-reference/table-functions/s3Cluster"}},p={},d=[],f={toc:d};function y(e){var n=e.components,t=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(o.default,{mdxType:"Content"}))}y.isMDXComponent=!0}}]);
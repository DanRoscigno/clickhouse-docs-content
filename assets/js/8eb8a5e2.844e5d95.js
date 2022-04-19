"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[65129],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,g=f["".concat(l,".").concat(m)]||f[m]||s[m]||o;return r?t.createElement(g,i(i({ref:n},p),{},{components:r})):t.createElement(g,i({ref:n},p))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},10130:function(e,n,r){r.r(n),r.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var t=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={sidebar_position:142},l="minMap",u={unversionedId:"en/sql-reference/aggregate-functions/reference/minmap",id:"en/sql-reference/aggregate-functions/reference/minmap",title:"minMap",description:"agg_functions-minmap}",source:"@site/docs/en/sql-reference/aggregate-functions/reference/minmap.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/minmap",permalink:"/en/sql-reference/aggregate-functions/reference/minmap",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/minmap.md",tags:[],version:"current",sidebarPosition:142,frontMatter:{sidebar_position:142},sidebar:"english",previous:{title:"sumMap",permalink:"/en/sql-reference/aggregate-functions/reference/summap"},next:{title:"maxMap",permalink:"/en/sql-reference/aggregate-functions/reference/maxmap"}},p={},s=[],f={toc:s};function m(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"agg_functions-minmap"},"minMap"),(0,o.kt)("p",null,"Syntax: ",(0,o.kt)("inlineCode",{parentName:"p"},"minMap(key, value)")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"minMap(Tuple(key, value))")),(0,o.kt)("p",null,"Calculates the minimum from ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," array according to the keys specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," array."),(0,o.kt)("p",null,"Passing a tuple of keys and value \u200b\u200barrays is identical to passing two arrays of keys and values."),(0,o.kt)("p",null,"The number of elements in ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," must be the same for each row that is totaled."),(0,o.kt)("p",null,"Returns a tuple of two arrays: keys in sorted order, and values calculated for the corresponding keys."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT minMap(a, b)\nFROM values('a Array(Int32), b Array(Int64)', ([1, 2], [2, 2]), ([2, 3], [1, 1]))\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500minMap(a, b)\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ([1,2,3],[2,1,1]) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);
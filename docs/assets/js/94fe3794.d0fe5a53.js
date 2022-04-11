"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[92795],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return m}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),l=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},s=function(e){var n=l(e.components);return t.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,g=p["".concat(u,".").concat(m)]||p[m]||f[m]||o;return r?t.createElement(g,c(c({ref:n},s),{},{components:r})):t.createElement(g,c({ref:n},s))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},47499:function(e,n,r){r.r(n),r.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return f}});var t=r(87462),a=r(63366),o=(r(67294),r(3905)),c=["components"],i={sidebar_position:3},u="max",l={unversionedId:"en/sql-reference/aggregate-functions/reference/max",id:"en/sql-reference/aggregate-functions/reference/max",title:"max",description:"agg_function-max}",source:"@site/docs/en/sql-reference/aggregate-functions/reference/max.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/max",permalink:"/en/sql-reference/aggregate-functions/reference/max",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/en/sql-reference/aggregate-functions/reference/max.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"english",previous:{title:"min",permalink:"/en/sql-reference/aggregate-functions/reference/min"},next:{title:"sum",permalink:"/en/sql-reference/aggregate-functions/reference/sum"}},s={},f=[],p={toc:f};function m(e){var n=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"agg_function-max"},"max"),(0,o.kt)("p",null,"Aggregate function that calculates the maximum across a group of values."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SELECT max(salary) FROM employees;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SELECT department, max(salary) FROM employees GROUP BY department;\n")),(0,o.kt)("p",null,"If you need non-aggregate function to choose a maximum of two values, see ",(0,o.kt)("inlineCode",{parentName:"p"},"greatest"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SELECT greatest(a, b) FROM table;\n")))}m.isMDXComponent=!0}}]);
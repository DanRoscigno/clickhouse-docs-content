"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[1064],{3905:function(e,r,t){t.d(r,{Zo:function(){return i},kt:function(){return g}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},i=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),f=p(t),g=o,m=f["".concat(s,".").concat(g)]||f[g]||l[g]||a;return t?n.createElement(m,c(c({ref:r},i),{},{components:t})):n.createElement(m,c({ref:r},i))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var u={};for(var s in r)hasOwnProperty.call(r,s)&&(u[s]=r[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var p=2;p<a;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},61649:function(e,r,t){t.r(r),t.d(r,{assets:function(){return i},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return l}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),c=["components"],u={slug:"/en/sql-reference/aggregate-functions/reference/kurtpop",sidebar_position:153},s="kurtPop",p={unversionedId:"en/sql-reference/aggregate-functions/reference/kurtpop",id:"en/sql-reference/aggregate-functions/reference/kurtpop",title:"kurtPop",description:"Computes the kurtosis of a sequence.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/kurtpop.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/kurtpop",permalink:"/docs/en/sql-reference/aggregate-functions/reference/kurtpop",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/kurtpop.md",tags:[],version:"current",sidebarPosition:153,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/kurtpop",sidebar_position:153},sidebar:"english",previous:{title:"skewSamp",permalink:"/docs/en/sql-reference/aggregate-functions/reference/skewsamp"},next:{title:"kurtSamp",permalink:"/docs/en/sql-reference/aggregate-functions/reference/kurtsamp"}},i={},l=[],f={toc:l};function g(e){var r=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kurtpop"},"kurtPop"),(0,a.kt)("p",null,"Computes the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Kurtosis"},"kurtosis")," of a sequence."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"kurtPop(expr)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"expr")," \u2014 ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/syntax#syntax-expressions"},"Expression")," returning a number."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("p",null,"The kurtosis of the given distribution. Type \u2014 ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/float"},"Float64")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT kurtPop(value) FROM series_with_value_column;\n")))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[7749],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),m=i,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85399:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],c={},l="MaterializedView",s={unversionedId:"zh/engines/table-engines/special/materializedview",id:"zh/engines/table-engines/special/materializedview",title:"MaterializedView",description:"materializedview}",source:"@site/docs/zh/engines/table-engines/special/materializedview.md",sourceDirName:"zh/engines/table-engines/special",slug:"/zh/engines/table-engines/special/materializedview",permalink:"/zh/engines/table-engines/special/materializedview",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/zh/engines/table-engines/special/materializedview.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"\u6587\u4ef6(\u8f93\u5165\u683c\u5f0f)",permalink:"/zh/engines/table-engines/special/file"},next:{title:"\u5408\u5e76",permalink:"/zh/engines/table-engines/special/merge"}},u={},p=[],f={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"materializedview"},"MaterializedView"),(0,a.kt)("p",null,"\u7269\u5316\u89c6\u56fe\u7684\u4f7f\u7528\uff08\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"/zh/sql-reference/statements/create#create-table-query"},"CREATE TABLE")," \uff09\u3002\u5b83\u9700\u8981\u4f7f\u7528\u4e00\u4e2a\u4e0d\u540c\u7684\u5f15\u64ce\u6765\u5b58\u50a8\u6570\u636e\uff0c\u8fd9\u4e2a\u5f15\u64ce\u8981\u5728\u521b\u5efa\u7269\u5316\u89c6\u56fe\u65f6\u6307\u5b9a\u3002\u5f53\u4ece\u8868\u4e2d\u8bfb\u53d6\u65f6\uff0c\u5b83\u5c31\u4f1a\u4f7f\u7528\u8be5\u5f15\u64ce\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/table_engines/materializedview/"},"\u6765\u6e90\u6587\u7ae0")," "))}m.isMDXComponent=!0}}]);
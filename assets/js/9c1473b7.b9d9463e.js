"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[72798],{3905:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return m}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=t.createContext({}),u=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},s=function(e){var r=u(e.components);return t.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,g=f["".concat(p,".").concat(m)]||f[m]||l[m]||o;return n?t.createElement(g,c(c({ref:r},s),{},{components:n})):t.createElement(g,c({ref:r},s))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},24356:function(e,r,n){n.r(r),n.d(r,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var t=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],i={sidebar_position:37},p="covarSamp",u={unversionedId:"zh/sql-reference/aggregate-functions/reference/covarsamp",id:"zh/sql-reference/aggregate-functions/reference/covarsamp",title:"covarSamp",description:"covarsamp}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/covarsamp.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/covarsamp",permalink:"/zh/sql-reference/aggregate-functions/reference/covarsamp",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/covarsamp.md",tags:[],version:"current",sidebarPosition:37,frontMatter:{sidebar_position:37},sidebar:"chinese",previous:{title:"covarPop",permalink:"/zh/sql-reference/aggregate-functions/reference/covarpop"},next:{title:"anyHeavy",permalink:"/zh/sql-reference/aggregate-functions/reference/anyheavy"}},s={},l=[],f={toc:l};function m(e){var r=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"covarsamp"},"covarSamp"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"covarSamp(x, y)\n")),(0,o.kt)("p",null,"\u8ba1\u7b97 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u03a3((x - x\u0305)(y - y\u0305)) / (n - 1)")," \u7684\u503c\u3002"),(0,o.kt)("p",null,"\u8fd4\u56deFloat64\u3002 \u5f53 ",(0,o.kt)("inlineCode",{parentName:"p"},"n <= 1"),", \u8fd4\u56de +\u221e\u3002"),(0,o.kt)("p",null,'!!! note "\u6ce8"\n\u8be5\u51fd\u6570\u4f7f\u7528\u6570\u503c\u4e0d\u7a33\u5b9a\u7684\u7b97\u6cd5\u3002 \u5982\u679c\u4f60\u9700\u8981 ',(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Numerical_stability"},"\u6570\u503c\u7a33\u5b9a\u6027")," \u5728\u8ba1\u7b97\u4e2d\uff0c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"covarSampStable")," \u51fd\u6570\u3002 \u5b83\u7684\u5de5\u4f5c\u901f\u5ea6\u8f83\u6162\uff0c\u4f46\u63d0\u4f9b\u8f83\u4f4e\u7684\u8ba1\u7b97\u9519\u8bef\u3002"))}m.isMDXComponent=!0}}]);
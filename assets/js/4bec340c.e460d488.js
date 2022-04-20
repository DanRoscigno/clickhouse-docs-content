"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[51184],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return g}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),f=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=f(e.components);return t.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=f(r),g=o,y=p["".concat(u,".").concat(g)]||p[g]||s[g]||a;return r?t.createElement(y,c(c({ref:n},l),{},{components:r})):t.createElement(y,c({ref:n},l))}));function g(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var f=2;f<a;f++)c[f]=r[f];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},67512:function(e,n,r){r.r(n),r.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return i},metadata:function(){return f},toc:function(){return s}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],i={sidebar_position:6},u="any",f={unversionedId:"zh/sql-reference/aggregate-functions/reference/any",id:"zh/sql-reference/aggregate-functions/reference/any",title:"any",description:"agg_function-any}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/any.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/any",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/any",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/any.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"chinese",previous:{title:"avg",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/avg"},next:{title:"stddevPop",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/stddevpop"}},l={},s=[],p={toc:s};function g(e){var n=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"agg_function-any"},"any"),(0,a.kt)("p",null,"\u9009\u62e9\u7b2c\u4e00\u4e2a\u9047\u5230\u7684\u503c\u3002\n\u67e5\u8be2\u53ef\u4ee5\u4ee5\u4efb\u4f55\u987a\u5e8f\u6267\u884c\uff0c\u751a\u81f3\u6bcf\u6b21\u90fd\u4ee5\u4e0d\u540c\u7684\u987a\u5e8f\u6267\u884c\uff0c\u56e0\u6b64\u6b64\u51fd\u6570\u7684\u7ed3\u679c\u662f\u4e0d\u786e\u5b9a\u7684\u3002\n\u8981\u83b7\u5f97\u786e\u5b9a\u7684\u7ed3\u679c\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 \u2018min\u2019 \u6216 \u2018max\u2019 \u529f\u80fd\uff0c\u800c\u4e0d\u662f \u2018any\u2019."),(0,a.kt)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u4f9d\u9760\u6267\u884c\u7684\u987a\u5e8f\u3002 \u8fd9\u9002\u7528\u4e8eSELECT\u6765\u81ea\u4f7f\u7528ORDER BY\u7684\u5b50\u67e5\u8be2\u7684\u60c5\u51b5\u3002"),(0,a.kt)("p",null,"\u5f53\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," \u67e5\u8be2\u5177\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"GROUP BY")," \u5b50\u53e5\u6216\u81f3\u5c11\u4e00\u4e2a\u805a\u5408\u51fd\u6570\uff0cClickHouse\uff08\u76f8\u5bf9\u4e8eMySQL\uff09\u8981\u6c42\u5728\u6240\u6709\u8868\u8fbe\u5f0f ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"HAVING"),"\uff0c\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER BY")," \u5b50\u53e5\u53ef\u4ee5\u4ece\u952e\u6216\u805a\u5408\u51fd\u6570\u8ba1\u7b97\u3002 \u6362\u53e5\u8bdd\u8bf4\uff0c\u4ece\u8868\u4e2d\u9009\u62e9\u7684\u6bcf\u4e2a\u5217\u5fc5\u987b\u5728\u952e\u6216\u805a\u5408\u51fd\u6570\u5185\u4f7f\u7528\u3002 \u8981\u83b7\u5f97\u50cfMySQL\u8fd9\u6837\u7684\u884c\u4e3a\uff0c\u60a8\u53ef\u4ee5\u5c06\u5176\u4ed6\u5217\u653e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"any")," \u805a\u5408\u51fd\u6570\u3002"))}g.isMDXComponent=!0}}]);
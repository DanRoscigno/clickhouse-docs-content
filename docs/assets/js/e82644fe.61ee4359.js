"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[47681,73617],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=s(n),g=a,h=p["".concat(u,".").concat(g)]||p[g]||f[g]||i;return n?r.createElement(h,c(c({ref:t},l),{},{components:n})):r.createElement(h,c({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4331:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return f}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),c=["components"],o={slug:"/en/sql-reference/aggregate-functions/reference/uniqthetasketch",sidebar_position:195,title:"uniqTheta"},u=void 0,s={unversionedId:"en/sql-reference/aggregate-functions/reference/uniqthetasketch",id:"en/sql-reference/aggregate-functions/reference/uniqthetasketch",title:"uniqTheta",description:"Calculates the approximate number of different argument values, using the Theta Sketch Framework.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/uniqthetasketch.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/uniqthetasketch",permalink:"/docs/en/sql-reference/aggregate-functions/reference/uniqthetasketch",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/uniqthetasketch.md",tags:[],version:"current",sidebarPosition:195,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/uniqthetasketch",sidebar_position:195,title:"uniqTheta"},sidebar:"english",previous:{title:"uniqHLL12",permalink:"/docs/en/sql-reference/aggregate-functions/reference/uniqhll12"},next:{title:"quantile",permalink:"/docs/en/sql-reference/aggregate-functions/reference/quantile"}},l={},f=[],p={toc:f};function g(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Calculates the approximate number of different argument values, using the ",(0,i.kt)("a",{parentName:"p",href:"https://datasketches.apache.org/docs/Theta/ThetaSketchFramework.html"},"Theta Sketch Framework"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"uniqTheta(x[, ...])\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("p",null,"The function takes a variable number of parameters. Parameters can be ",(0,i.kt)("inlineCode",{parentName:"p"},"Tuple"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Array"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Date"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"String"),", or numeric types."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),"-type number.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Implementation details")),(0,i.kt)("p",null,"Function:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Calculates a hash for all parameters in the aggregate, then uses it in calculations.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Uses the ",(0,i.kt)("a",{parentName:"p",href:"https://datasketches.apache.org/docs/Theta/InverseEstimate.html"},"KMV")," algorithm to approximate the number of different argument values."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"4096(2^12) 64-bit sketch are used. The size of the state is about 41 KB.\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The relative error is 3.125% (95% confidence), see the ",(0,i.kt)("a",{parentName:"p",href:"https://datasketches.apache.org/docs/Theta/ThetaErrorTable.html"},"relative error table")," for detail."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See Also")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/uniq#agg_function-uniq"},"uniq")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/uniqcombined#agg_function-uniqcombined"},"uniqCombined")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/uniqcombined64#agg_function-uniqcombined64"},"uniqCombined64")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/uniqhll12#agg_function-uniqhll12"},"uniqHLL12")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/uniqexact#agg_function-uniqexact"},"uniqExact"))))}g.isMDXComponent=!0},21965:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),c=n(4331),o=["components"],u={slug:"/zh/sql-reference/aggregate-functions/reference/uniqthetasketch",sidebar_position:195,title:"uniqTheta"},s=void 0,l={unversionedId:"zh/sql-reference/aggregate-functions/reference/uniqthetasketch",id:"zh/sql-reference/aggregate-functions/reference/uniqthetasketch",title:"uniqTheta",description:"",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/uniqthetasketch.mdx",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/uniqthetasketch",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/uniqthetasketch",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/uniqthetasketch.mdx",tags:[],version:"current",sidebarPosition:195,frontMatter:{slug:"/zh/sql-reference/aggregate-functions/reference/uniqthetasketch",sidebar_position:195,title:"uniqTheta"},sidebar:"chinese",previous:{title:"uniqHLL12",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/uniqhll12"},next:{title:"quantile",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/quantile"}},f={},p=[],g={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(c.default,{mdxType:"Content"}))}h.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[19577],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return g}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(t),g=a,m=p["".concat(l,".").concat(g)]||p[g]||f[g]||i;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1022:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return f}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],u={slug:"/en/sql-reference/aggregate-functions/reference/uniqhll12",sidebar_position:194},l="uniqHLL12",c={unversionedId:"en/sql-reference/aggregate-functions/reference/uniqhll12",id:"en/sql-reference/aggregate-functions/reference/uniqhll12",title:"uniqHLL12",description:"Calculates the approximate number of different argument values, using the HyperLogLog algorithm.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/uniqhll12.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/uniqhll12",permalink:"/docs/en/sql-reference/aggregate-functions/reference/uniqhll12",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/uniqhll12.md",tags:[],version:"current",sidebarPosition:194,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/uniqhll12",sidebar_position:194},sidebar:"english",previous:{title:"uniqCombined64",permalink:"/docs/en/sql-reference/aggregate-functions/reference/uniqcombined64"},next:{title:"uniqTheta",permalink:"/docs/en/sql-reference/aggregate-functions/reference/uniqthetasketch"}},s={},f=[],p={toc:f};function g(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"uniqhll12"},"uniqHLL12"),(0,i.kt)("p",null,"Calculates the approximate number of different argument values, using the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HyperLogLog"},"HyperLogLog")," algorithm."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"uniqHLL12(x[, ...])\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("p",null,"The function takes a variable number of parameters. Parameters can be ",(0,i.kt)("inlineCode",{parentName:"p"},"Tuple"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Array"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Date"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"String"),", or numeric types."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),"-type number.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Implementation details")),(0,i.kt)("p",null,"Function:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Calculates a hash for all parameters in the aggregate, then uses it in calculations.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Uses the HyperLogLog algorithm to approximate the number of different argument values."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"2^12 5-bit cells are used. The size of the state is slightly more than 2.5 KB. The result is not very accurate (up to ~10% error) for small data sets (<10K elements). However, the result is fairly accurate for high-cardinality data sets (10K-100M), with a maximum error of ~1.6%. Starting from 100M, the estimation error increases, and the function will return very inaccurate results for data sets with extremely high cardinality (1B+ elements).\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Provides the determinate result (it does not depend on the query processing order)."))),(0,i.kt)("p",null,"We do not recommend using this function. In most cases, use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/aggregate-functions/reference/uniq#agg_function-uniq"},"uniq")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/aggregate-functions/reference/uniqcombined#agg_function-uniqcombined"},"uniqCombined")," function."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See Also")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/uniq#agg_function-uniq"},"uniq")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/uniqcombined#agg_function-uniqcombined"},"uniqCombined")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/uniqexact#agg_function-uniqexact"},"uniqExact")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/uniqthetasketch#agg_function-uniqthetasketch"},"uniqTheta"))))}g.isMDXComponent=!0}}]);
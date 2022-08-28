"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[86788],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=s(n),m=a,g=f["".concat(u,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85621:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={slug:"/en/sql-reference/aggregate-functions/reference/quantiletdigest",sidebar_position:207},u="quantileTDigest",s={unversionedId:"en/sql-reference/aggregate-functions/reference/quantiletdigest",id:"en/sql-reference/aggregate-functions/reference/quantiletdigest",title:"quantileTDigest",description:"Computes an approximate quantile of a numeric data sequence using the t-digest algorithm.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/quantiletdigest.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/quantiletdigest",permalink:"/docs/en/sql-reference/aggregate-functions/reference/quantiletdigest",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/quantiletdigest.md",tags:[],version:"current",sidebarPosition:207,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/quantiletdigest",sidebar_position:207},sidebar:"english",previous:{title:"quantileDeterministic",permalink:"/docs/en/sql-reference/aggregate-functions/reference/quantiledeterministic"},next:{title:"quantileTDigestWeighted",permalink:"/docs/en/sql-reference/aggregate-functions/reference/quantiletdigestweighted"}},c={},p=[],f={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quantiletdigest"},"quantileTDigest"),(0,i.kt)("p",null,"Computes an approximate ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quantile"},"quantile")," of a numeric data sequence using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tdunning/t-digest/blob/master/docs/t-digest-paper/histo.pdf"},"t-digest")," algorithm."),(0,i.kt)("p",null,"Memory consumption is ",(0,i.kt)("inlineCode",{parentName:"p"},"log(n)"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," is a number of values. The result depends on the order of running the query, and is nondeterministic."),(0,i.kt)("p",null,"The performance of the function is lower than performance of ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/aggregate-functions/reference/quantile#quantile"},"quantile")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/aggregate-functions/reference/quantiletiming#quantiletiming"},"quantileTiming"),". In terms of the ratio of State size to precision, this function is much better than ",(0,i.kt)("inlineCode",{parentName:"p"},"quantile"),"."),(0,i.kt)("p",null,"When using multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"quantile*")," functions with different levels in a query, the internal states are not combined (that is, the query works less efficiently than it could). In this case, use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles")," function."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"quantileTDigest(level)(expr)\n")),(0,i.kt)("p",null,"Alias: ",(0,i.kt)("inlineCode",{parentName:"p"},"medianTDigest"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"level")," \u2014 Level of quantile. Optional parameter. Constant floating-point number from 0 to 1. We recommend using a ",(0,i.kt)("inlineCode",{parentName:"li"},"level")," value in the range of ",(0,i.kt)("inlineCode",{parentName:"li"},"[0.01, 0.99]"),". Default value: 0.5. At ",(0,i.kt)("inlineCode",{parentName:"li"},"level=0.5")," the function calculates ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Median"},"median"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expr")," \u2014 Expression over the column values resulting in numeric ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/#data_types"},"data types"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/date"},"Date")," or ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Approximate quantile of the specified level.")),(0,i.kt)("p",null,"Type:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float64")," for numeric data type input."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/date"},"Date")," if input values have the ",(0,i.kt)("inlineCode",{parentName:"li"},"Date")," type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime")," if input values have the ",(0,i.kt)("inlineCode",{parentName:"li"},"DateTime")," type.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT quantileTDigest(number) FROM numbers(10)\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500quantileTDigest(number)\u2500\u2510\n\u2502                     4.5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See Also")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/median#median"},"median")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles"))))}m.isMDXComponent=!0}}]);
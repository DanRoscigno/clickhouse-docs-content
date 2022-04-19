"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[86582],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),f=r,g=m["".concat(s,".").concat(f)]||m[f]||p[f]||i;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68606:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={sidebar_position:208},s="quantileTDigestWeighted",u={unversionedId:"en/sql-reference/aggregate-functions/reference/quantiletdigestweighted",id:"en/sql-reference/aggregate-functions/reference/quantiletdigestweighted",title:"quantileTDigestWeighted",description:"quantiletdigestweighted}",source:"@site/docs/en/sql-reference/aggregate-functions/reference/quantiletdigestweighted.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/quantiletdigestweighted",permalink:"/en/sql-reference/aggregate-functions/reference/quantiletdigestweighted",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/quantiletdigestweighted.md",tags:[],version:"current",sidebarPosition:208,frontMatter:{sidebar_position:208},sidebar:"english",previous:{title:"quantileTDigest",permalink:"/en/sql-reference/aggregate-functions/reference/quantiletdigest"},next:{title:"quantileBFloat16",permalink:"/en/sql-reference/aggregate-functions/reference/quantilebfloat16"}},c={},p=[],m={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quantiletdigestweighted"},"quantileTDigestWeighted"),(0,i.kt)("p",null,"Computes an approximate ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quantile"},"quantile")," of a numeric data sequence using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tdunning/t-digest/blob/master/docs/t-digest-paper/histo.pdf"},"t-digest")," algorithm. The function takes into account the weight of each sequence member. The maximum error is 1%. Memory consumption is ",(0,i.kt)("inlineCode",{parentName:"p"},"log(n)"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," is a number of values."),(0,i.kt)("p",null,"The performance of the function is lower than performance of ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/aggregate-functions/reference/quantile#quantile"},"quantile")," or ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/aggregate-functions/reference/quantiletiming#quantiletiming"},"quantileTiming"),". In terms of the ratio of State size to precision, this function is much better than ",(0,i.kt)("inlineCode",{parentName:"p"},"quantile"),"."),(0,i.kt)("p",null,"The result depends on the order of running the query, and is nondeterministic."),(0,i.kt)("p",null,"When using multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"quantile*")," functions with different levels in a query, the internal states are not combined (that is, the query works less efficiently than it could). In this case, use the ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles")," function."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"quantileTDigestWeighted")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tdunning/t-digest/issues/167#issuecomment-828650275"},"is not recommended for tiny data sets")," and can lead to significat error. In this case, consider possibility of using ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/aggregate-functions/reference/quantiletdigest"},(0,i.kt)("inlineCode",{parentName:"a"},"quantileTDigest"))," instead."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"quantileTDigestWeighted(level)(expr, weight)\n")),(0,i.kt)("p",null,"Alias: ",(0,i.kt)("inlineCode",{parentName:"p"},"medianTDigestWeighted"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"level")," \u2014 Level of quantile. Optional parameter. Constant floating-point number from 0 to 1. We recommend using a ",(0,i.kt)("inlineCode",{parentName:"li"},"level")," value in the range of ",(0,i.kt)("inlineCode",{parentName:"li"},"[0.01, 0.99]"),". Default value: 0.5. At ",(0,i.kt)("inlineCode",{parentName:"li"},"level=0.5")," the function calculates ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Median"},"median"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expr")," \u2014 Expression over the column values resulting in numeric ",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/#data_types"},"data types"),", ",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/date"},"Date")," or ",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/datetime"},"DateTime"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"weight")," \u2014 Column with weights of sequence elements. Weight is a number of value occurrences.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Approximate quantile of the specified level.")),(0,i.kt)("p",null,"Type:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/float"},"Float64")," for numeric data type input."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/date"},"Date")," if input values have the ",(0,i.kt)("inlineCode",{parentName:"li"},"Date")," type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/datetime"},"DateTime")," if input values have the ",(0,i.kt)("inlineCode",{parentName:"li"},"DateTime")," type.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT quantileTDigestWeighted(number, 1) FROM numbers(10)\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500quantileTDigestWeighted(number, 1)\u2500\u2510\n\u2502                                4.5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See Also")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/aggregate-functions/reference/median#median"},"median")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles"))))}f.isMDXComponent=!0}}]);
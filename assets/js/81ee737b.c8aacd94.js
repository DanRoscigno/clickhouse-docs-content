"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[85698],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(n),f=r,k=m["".concat(p,".").concat(f)]||m[f]||o[f]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18424:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return o}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],u={sidebar_position:201},p="\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043a\u0432\u0430\u043d\u0442\u0438\u043b\u0435\u0439",s={unversionedId:"ru/sql-reference/aggregate-functions/reference/quantiles",id:"ru/sql-reference/aggregate-functions/reference/quantiles",title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043a\u0432\u0430\u043d\u0442\u0438\u043b\u0435\u0439",description:"quantiles-functions}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/quantiles.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/quantiles",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/quantiles",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/quantiles.md",tags:[],version:"current",sidebarPosition:201,frontMatter:{sidebar_position:201},sidebar:"russia",previous:{title:"quantile",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/quantile"},next:{title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 quantileExact",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/quantileexact"}},c={},o=[{value:"quantiles",id:"quantiles",level:2},{value:"quantilesExactExclusive",id:"quantilesexactexclusive",level:2},{value:"quantilesExactInclusive",id:"quantilesexactinclusive",level:2}],m={toc:o};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"quantiles-functions"},"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043a\u0432\u0430\u043d\u0442\u0438\u043b\u0435\u0439"),(0,l.kt)("h2",{id:"quantiles"},"quantiles"),(0,l.kt)("p",null,"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441: ",(0,l.kt)("inlineCode",{parentName:"p"},"quantiles(level1, level2, \u2026)(x)")),(0,l.kt)("p",null,"\u0412\u0441\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u043a\u0432\u0430\u043d\u0442\u0438\u043b\u0435\u0439 \u0438\u043c\u0435\u044e\u0442 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043a\u0432\u0430\u043d\u0442\u0438\u043b\u0435\u0439: ",(0,l.kt)("inlineCode",{parentName:"p"},"quantiles"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"quantilesDeterministic"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"quantilesTiming"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"quantilesTimingWeighted"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"quantilesExact"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"quantilesExactWeighted"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"quantilesTDigest"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"quantilesBFloat16"),". \u042d\u0442\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u044e\u0442 \u0432\u0441\u0435 \u043a\u0432\u0430\u043d\u0442\u0438\u043b\u0438 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0445 \u0443\u0440\u043e\u0432\u043d\u0435\u0439 \u0432 \u043e\u0434\u0438\u043d \u043f\u0440\u043e\u0445\u043e\u0434 \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0442 \u043c\u0430\u0441\u0441\u0438\u0432 \u0441 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438."),(0,l.kt)("h2",{id:"quantilesexactexclusive"},"quantilesExactExclusive"),(0,l.kt)("p",null,"\u0422\u043e\u0447\u043d\u043e \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 ",(0,l.kt)("a",{parentName:"p",href:"https://ru.wikipedia.org/wiki/%D0%9A%D0%B2%D0%B0%D0%BD%D1%82%D0%B8%D0%BB%D1%8C"},"\u043a\u0432\u0430\u043d\u0442\u0438\u043b\u0438")," \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0439 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438."),(0,l.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0442\u043e\u0447\u043d\u044b\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442, \u0432\u0441\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0441\u043e\u0431\u0438\u0440\u0430\u044e\u0442\u0441\u044f \u0432 \u043c\u0430\u0441\u0441\u0438\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0437\u0430\u0442\u0435\u043c \u0447\u0430\u0441\u0442\u0438\u0447\u043d\u043e \u0441\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f. \u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u043e\u0442\u0440\u0435\u0431\u043b\u044f\u0435\u0442 \u043e\u0431\u044a\u0435\u043c \u043f\u0430\u043c\u044f\u0442\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"O(n)"),", \u0433\u0434\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," \u2014 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439. \u0414\u043b\u044f \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u044d\u0442\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0430."),(0,l.kt)("p",null,"\u042d\u0442\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u0430 Excel \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,l.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/office/percentile-exc-function-bbaa7204-e9e1-4010-85bf-c31dc5dce4ba"},"PERCENTILE.EXC"),", ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quantile#Estimating_quantiles_from_a_sample"},"\u0442\u0438\u043f R6"),"."),(0,l.kt)("p",null,"\u0421 \u043d\u0430\u0431\u043e\u0440\u0430\u043c\u0438 \u0443\u0440\u043e\u0432\u043d\u0435\u0439 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0435\u0435, \u0447\u0435\u043c ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/aggregate-functions/reference/quantileexact#quantileexactexclusive"},"quantileExactExclusive"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"quantilesExactExclusive(level1, level2, ...)(expr)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"expr")," \u2014 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435, \u0437\u0430\u0432\u0438\u0441\u044f\u0449\u0435\u0435 \u043e\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432. \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/#data_types"},"\u0447\u0438\u0441\u043b\u043e\u0432\u044b\u0445 \u0442\u0438\u043f\u043e\u0432"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/date"},"Date")," \u0438\u043b\u0438 ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/datetime"},"DateTime"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"level")," \u2014 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u043a\u0432\u0430\u043d\u0442\u0438\u043b\u0435\u0439. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f: (0, 1) \u2014 \u0433\u0440\u0430\u043d\u0438\u0447\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043d\u0435 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u044e\u0442\u0441\u044f. ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/float"},"Float"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/array"},"\u041c\u0430\u0441\u0441\u0438\u0432")," \u043a\u0432\u0430\u043d\u0442\u0438\u043b\u0435\u0439 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0445 \u0443\u0440\u043e\u0432\u043d\u0435\u0439.")),(0,l.kt)("p",null,"\u0422\u0438\u043f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043c\u0430\u0441\u0441\u0438\u0432\u0430:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/float"},"Float64")," \u0434\u043b\u044f \u0432\u0445\u043e\u0434\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0433\u043e \u0442\u0438\u043f\u0430."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/date"},"Date"),", \u0435\u0441\u043b\u0438 \u0432\u0445\u043e\u0434\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0438\u043c\u0435\u044e\u0442 \u0442\u0438\u043f ",(0,l.kt)("inlineCode",{parentName:"li"},"Date"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/datetime"},"DateTime"),", \u0435\u0441\u043b\u0438 \u0432\u0445\u043e\u0434\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0438\u043c\u0435\u044e\u0442 \u0442\u0438\u043f ",(0,l.kt)("inlineCode",{parentName:"li"},"DateTime"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE num AS numbers(1000);\n\nSELECT quantilesExactExclusive(0.25, 0.5, 0.75, 0.9, 0.95, 0.99, 0.999)(x) FROM (SELECT number AS x FROM num);\n")),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500quantilesExactExclusive(0.25, 0.5, 0.75, 0.9, 0.95, 0.99, 0.999)(x)\u2500\u2510\n\u2502 [249.25,499.5,749.75,899.9,949.9499999999999,989.99,998.999]        \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"quantilesexactinclusive"},"quantilesExactInclusive"),(0,l.kt)("p",null,"\u0422\u043e\u0447\u043d\u043e \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 ",(0,l.kt)("a",{parentName:"p",href:"https://ru.wikipedia.org/wiki/%D0%9A%D0%B2%D0%B0%D0%BD%D1%82%D0%B8%D0%BB%D1%8C"},"\u043a\u0432\u0430\u043d\u0442\u0438\u043b\u0438")," \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0439 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438."),(0,l.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0442\u043e\u0447\u043d\u044b\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442, \u0432\u0441\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0441\u043e\u0431\u0438\u0440\u0430\u044e\u0442\u0441\u044f \u0432 \u043c\u0430\u0441\u0441\u0438\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0437\u0430\u0442\u0435\u043c \u0447\u0430\u0441\u0442\u0438\u0447\u043d\u043e \u0441\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f. \u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u043e\u0442\u0440\u0435\u0431\u043b\u044f\u0435\u0442 \u043e\u0431\u044a\u0435\u043c \u043f\u0430\u043c\u044f\u0442\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"O(n)"),", \u0433\u0434\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," \u2014 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439. \u0414\u043b\u044f \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u044d\u0442\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0430."),(0,l.kt)("p",null,"\u042d\u0442\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u0430 Excel \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,l.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/office/percentile-inc-function-680f9539-45eb-410b-9a5e-c1355e5fe2ed"},"PERCENTILE.INC"),", ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quantile#Estimating_quantiles_from_a_sample"},"\u0442\u0438\u043f R7"),"."),(0,l.kt)("p",null,"\u0421 \u043d\u0430\u0431\u043e\u0440\u0430\u043c\u0438 \u0443\u0440\u043e\u0432\u043d\u0435\u0439 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0435\u0435, \u0447\u0435\u043c ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/aggregate-functions/reference/quantileexact#quantileexactinclusive"},"quantileExactInclusive"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"quantilesExactInclusive(level1, level2, ...)(expr)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"expr")," \u2014 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435, \u0437\u0430\u0432\u0438\u0441\u044f\u0449\u0435\u0435 \u043e\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432. \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/#data_types"},"\u0447\u0438\u0441\u043b\u043e\u0432\u044b\u0445 \u0442\u0438\u043f\u043e\u0432"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/date"},"Date")," \u0438\u043b\u0438 ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/datetime"},"DateTime"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"level")," \u2014 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u043a\u0432\u0430\u043d\u0442\u0438\u043b\u0435\u0439. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f: ","[0, 1]"," \u2014 \u0433\u0440\u0430\u043d\u0438\u0447\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u044e\u0442\u0441\u044f. ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/float"},"Float"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/array"},"\u041c\u0430\u0441\u0441\u0438\u0432")," \u043a\u0432\u0430\u043d\u0442\u0438\u043b\u0435\u0439 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0445 \u0443\u0440\u043e\u0432\u043d\u0435\u0439.")),(0,l.kt)("p",null,"\u0422\u0438\u043f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043c\u0430\u0441\u0441\u0438\u0432\u0430:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/float"},"Float64")," \u0434\u043b\u044f \u0432\u0445\u043e\u0434\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0433\u043e \u0442\u0438\u043f\u0430."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/date"},"Date"),", \u0435\u0441\u043b\u0438 \u0432\u0445\u043e\u0434\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0438\u043c\u0435\u044e\u0442 \u0442\u0438\u043f ",(0,l.kt)("inlineCode",{parentName:"li"},"Date"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/datetime"},"DateTime"),", \u0435\u0441\u043b\u0438 \u0432\u0445\u043e\u0434\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0438\u043c\u0435\u044e\u0442 \u0442\u0438\u043f ",(0,l.kt)("inlineCode",{parentName:"li"},"DateTime"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE num AS numbers(1000);\n\nSELECT quantilesExactInclusive(0.25, 0.5, 0.75, 0.9, 0.95, 0.99, 0.999)(x) FROM (SELECT number AS x FROM num);\n")),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500quantilesExactInclusive(0.25, 0.5, 0.75, 0.9, 0.95, 0.99, 0.999)(x)\u2500\u2510\n\u2502 [249.75,499.5,749.25,899.1,949.05,989.01,998.001]                   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}f.isMDXComponent=!0}}]);
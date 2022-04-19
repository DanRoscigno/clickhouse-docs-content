"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[61463],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),o=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=o(n),k=r,f=m["".concat(u,".").concat(k)]||m[k]||c[k]||l;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1845:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],p={sidebar_position:202},u="quantileExact",o={unversionedId:"zh/sql-reference/aggregate-functions/reference/quantileexact",id:"zh/sql-reference/aggregate-functions/reference/quantileexact",title:"quantileExact",description:"quantileexact}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/quantileexact.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/quantileexact",permalink:"/zh/sql-reference/aggregate-functions/reference/quantileexact",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/quantileexact.md",tags:[],version:"current",sidebarPosition:202,frontMatter:{sidebar_position:202},sidebar:"chinese",previous:{title:"quantiles",permalink:"/zh/sql-reference/aggregate-functions/reference/quantiles"},next:{title:"quantileExactWeighted",permalink:"/zh/sql-reference/aggregate-functions/reference/quantileexactweighted"}},s={},c=[],m={toc:c};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"quantileexact"},"quantileExact"),(0,l.kt)("p",null,"\u51c6\u786e\u8ba1\u7b97\u6570\u5b57\u5e8f\u5217\u7684",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quantile"},"\u5206\u4f4d\u6570"),"\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u51c6\u786e\u8ba1\u7b97\uff0c\u6240\u6709\u8f93\u5165\u7684\u6570\u636e\u88ab\u5408\u5e76\u4e3a\u4e00\u4e2a\u6570\u7ec4\uff0c\u5e76\u4e14\u90e8\u5206\u7684\u6392\u5e8f\u3002\u56e0\u6b64\u8be5\u51fd\u6570\u9700\u8981 ",(0,l.kt)("inlineCode",{parentName:"p"},"O(n)")," \u7684\u5185\u5b58\uff0cn\u4e3a\u8f93\u5165\u6570\u636e\u7684\u4e2a\u6570\u3002\u4f46\u662f\u5bf9\u4e8e\u5c11\u91cf\u6570\u636e\u6765\u8bf4\uff0c\u8be5\u51fd\u6570\u8fd8\u662f\u975e\u5e38\u6709\u6548\u7684\u3002"),(0,l.kt)("p",null,"\u5f53\u5728\u4e00\u4e2a\u67e5\u8be2\u4e2d\u4f7f\u7528\u591a\u4e2a\u4e0d\u540c\u5c42\u6b21\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"quantile*")," \u65f6\uff0c\u5185\u90e8\u72b6\u6001\u4e0d\u4f1a\u88ab\u7ec4\u5408\uff08\u5373\u67e5\u8be2\u7684\u5de5\u4f5c\u6548\u7387\u4f4e\u4e8e\u7ec4\u5408\u60c5\u51b5\uff09\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"/zh/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles")," \u51fd\u6570\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"quantileExact(level)(expr)\n")),(0,l.kt)("p",null,"\u522b\u540d: ",(0,l.kt)("inlineCode",{parentName:"p"},"medianExact"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"level")," \u2014 \u5206\u4f4d\u6570\u5c42\u6b21\u3002\u53ef\u9009\u53c2\u6570\u3002\u4ece0\u52301\u7684\u4e00\u4e2afloat\u7c7b\u578b\u7684\u5e38\u91cf\u3002\u6211\u4eec\u63a8\u8350 ",(0,l.kt)("inlineCode",{parentName:"li"},"level")," \u503c\u7684\u8303\u56f4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"[0.01, 0.99]"),"\u3002\u9ed8\u8ba4\u503c\uff1a0.5\u3002\u5f53 ",(0,l.kt)("inlineCode",{parentName:"li"},"level=0.5")," \u65f6\uff0c\u8be5\u51fd\u6570\u8ba1\u7b97",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Median"},"\u4e2d\u4f4d\u6570"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"expr")," \u2014 \u6c42\u503c\u8868\u8fbe\u5f0f\uff0c\u7c7b\u578b\u4e3a\u6570\u503c\u7c7b\u578b",(0,l.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/#data_types"},"data types"),", ",(0,l.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/date"},"Date")," \u6216 ",(0,l.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/datetime"},"DateTime"),"\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u5c42\u6b21\u7684\u5206\u4f4d\u6570\u3002")),(0,l.kt)("p",null,"\u7c7b\u578b:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/float"},"Float64")," \u5bf9\u4e8e\u6570\u5b57\u6570\u636e\u7c7b\u578b\u8f93\u5165\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/date"},"\u65e5\u671f")," \u5982\u679c\u8f93\u5165\u503c\u5177\u6709 ",(0,l.kt)("inlineCode",{parentName:"li"},"Date")," \u7c7b\u578b\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/datetime"},"\u65e5\u671f\u65f6\u95f4")," \u5982\u679c\u8f93\u5165\u503c\u5177\u6709 ",(0,l.kt)("inlineCode",{parentName:"li"},"DateTime")," \u7c7b\u578b\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("p",null,"\u67e5\u8be2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT quantileExact(number) FROM numbers(10)\n")),(0,l.kt)("p",null,"\u7ed3\u679c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500quantileExact(number)\u2500\u2510\n\u2502                     5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h1",{id:"quantileexactlow"},"quantileExactLow"),(0,l.kt)("p",null,"\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"quantileExact")," \u76f8\u4f3c, \u51c6\u786e\u8ba1\u7b97\u6570\u5b57\u5e8f\u5217\u7684",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quantile"},"\u5206\u4f4d\u6570"),"\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u51c6\u786e\u8ba1\u7b97\uff0c\u6240\u6709\u8f93\u5165\u7684\u6570\u636e\u88ab\u5408\u5e76\u4e3a\u4e00\u4e2a\u6570\u7ec4\uff0c\u5e76\u4e14\u5168\u6392\u5e8f\u3002\u8fd9\u6392\u5e8f",(0,l.kt)("a",{parentName:"p",href:"https://en.cppreference.com/w/cpp/algorithm/sort"},"\u7b97\u6cd5"),"\u7684\u590d\u6742\u5ea6\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"O(N\xb7log(N))"),", \u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"N = std::distance(first, last)")," \u6bd4\u8f83\u3002"),(0,l.kt)("p",null,"\u8fd4\u56de\u503c\u53d6\u51b3\u4e8e\u5206\u4f4d\u6570\u7ea7\u522b\u548c\u6240\u9009\u53d6\u7684\u5143\u7d20\u6570\u91cf\uff0c\u5373\u5982\u679c\u7ea7\u522b\u662f 0.5, \u51fd\u6570\u8fd4\u56de\u5076\u6570\u5143\u7d20\u7684\u4f4e\u4f4d\u4e2d\u4f4d\u6570\uff0c\u5947\u6570\u5143\u7d20\u7684\u4e2d\u4f4d\u6570\u3002\u4e2d\u4f4d\u6570\u8ba1\u7b97\u7c7b\u4f3c\u4e8e python \u4e2d\u4f7f\u7528\u7684",(0,l.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/statistics.html#statistics.median_low"},"median_low"),"\u7684\u5b9e\u73b0\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u6240\u6709\u5176\u4ed6\u7ea7\u522b\uff0c \u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"level * size_of_array")," \u503c\u6240\u5bf9\u5e94\u7684\u7d22\u5f15\u7684\u5143\u7d20\u503c\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT quantileExactLow(0.1)(number) FROM numbers(10)\n\n\u250c\u2500quantileExactLow(0.1)(number)\u2500\u2510\n\u2502                             1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u5f53\u5728\u4e00\u4e2a\u67e5\u8be2\u4e2d\u4f7f\u7528\u591a\u4e2a\u4e0d\u540c\u5c42\u6b21\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"quantile*")," \u65f6\uff0c\u5185\u90e8\u72b6\u6001\u4e0d\u4f1a\u88ab\u7ec4\u5408\uff08\u5373\u67e5\u8be2\u7684\u5de5\u4f5c\u6548\u7387\u4f4e\u4e8e\u7ec4\u5408\u60c5\u51b5\uff09\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"/zh/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles")," \u51fd\u6570\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"quantileExactLow(level)(expr)\n")),(0,l.kt)("p",null,"\u522b\u540d: ",(0,l.kt)("inlineCode",{parentName:"p"},"medianExactLow"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"level")," \u2014 \u5206\u4f4d\u6570\u5c42\u6b21\u3002\u53ef\u9009\u53c2\u6570\u3002\u4ece0\u52301\u7684\u4e00\u4e2afloat\u7c7b\u578b\u7684\u5e38\u91cf\u3002\u6211\u4eec\u63a8\u8350 ",(0,l.kt)("inlineCode",{parentName:"li"},"level")," \u503c\u7684\u8303\u56f4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"[0.01, 0.99]"),"\u3002\u9ed8\u8ba4\u503c\uff1a0.5\u3002\u5f53 ",(0,l.kt)("inlineCode",{parentName:"li"},"level=0.5")," \u65f6\uff0c\u8be5\u51fd\u6570\u8ba1\u7b97 ",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Median"},"\u4e2d\u4f4d\u6570"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"expr")," \u2014 \u2014 \u6c42\u503c\u8868\u8fbe\u5f0f\uff0c\u7c7b\u578b\u4e3a\u6570\u503c\u7c7b\u578b",(0,l.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/#data_types"},"data types"),", ",(0,l.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/date"},"Date")," \u6216 ",(0,l.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/datetime"},"DateTime"),"\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u5c42\u6b21\u7684\u5206\u4f4d\u6570\u3002")),(0,l.kt)("p",null,"\u7c7b\u578b:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/float"},"Float64")," \u7528\u4e8e\u6570\u5b57\u6570\u636e\u7c7b\u578b\u8f93\u5165\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/date"},"Date")," \u5982\u679c\u8f93\u5165\u503c\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"Date")," \u7c7b\u578b\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/datetime"},"DateTime")," \u5982\u679c\u8f93\u5165\u503c\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"DateTime")," \u7c7b\u578b\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("p",null,"\u67e5\u8be2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT quantileExactLow(number) FROM numbers(10)\n")),(0,l.kt)("p",null,"\u7ed3\u679c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500quantileExactLow(number)\u2500\u2510\n\u2502                        4 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h1",{id:"quantileexacthigh"},"quantileExactHigh"),(0,l.kt)("p",null,"\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"quantileExact")," \u76f8\u4f3c, \u51c6\u786e\u8ba1\u7b97\u6570\u5b57\u5e8f\u5217\u7684",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quantile"},"\u5206\u4f4d\u6570"),"\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u51c6\u786e\u8ba1\u7b97\uff0c\u6240\u6709\u8f93\u5165\u7684\u6570\u636e\u88ab\u5408\u5e76\u4e3a\u4e00\u4e2a\u6570\u7ec4\uff0c\u5e76\u4e14\u5168\u6392\u5e8f\u3002\u8fd9\u6392\u5e8f",(0,l.kt)("a",{parentName:"p",href:"https://en.cppreference.com/w/cpp/algorithm/sort"},"\u7b97\u6cd5"),"\u7684\u590d\u6742\u5ea6\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"O(N\xb7log(N))"),", \u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"N = std::distance(first, last)")," \u6bd4\u8f83\u3002"),(0,l.kt)("p",null,"\u8fd4\u56de\u503c\u53d6\u51b3\u4e8e\u5206\u4f4d\u6570\u7ea7\u522b\u548c\u6240\u9009\u53d6\u7684\u5143\u7d20\u6570\u91cf\uff0c\u5373\u5982\u679c\u7ea7\u522b\u662f 0.5, \u51fd\u6570\u8fd4\u56de\u5076\u6570\u5143\u7d20\u7684\u4f4e\u4f4d\u4e2d\u4f4d\u6570\uff0c\u5947\u6570\u5143\u7d20\u7684\u4e2d\u4f4d\u6570\u3002\u4e2d\u4f4d\u6570\u8ba1\u7b97\u7c7b\u4f3c\u4e8e python \u4e2d\u4f7f\u7528\u7684",(0,l.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/statistics.html#statistics.median_high"},"median_high"),"\u7684\u5b9e\u73b0\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u6240\u6709\u5176\u4ed6\u7ea7\u522b\uff0c \u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"level * size_of_array")," \u503c\u6240\u5bf9\u5e94\u7684\u7d22\u5f15\u7684\u5143\u7d20\u503c\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u5b9e\u73b0\u4e0e\u5f53\u524d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"quantileExact")," \u5b9e\u73b0\u5b8c\u5168\u76f8\u4f3c\u3002"),(0,l.kt)("p",null,"\u5f53\u5728\u4e00\u4e2a\u67e5\u8be2\u4e2d\u4f7f\u7528\u591a\u4e2a\u4e0d\u540c\u5c42\u6b21\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"quantile*")," \u65f6\uff0c\u5185\u90e8\u72b6\u6001\u4e0d\u4f1a\u88ab\u7ec4\u5408\uff08\u5373\u67e5\u8be2\u7684\u5de5\u4f5c\u6548\u7387\u4f4e\u4e8e\u7ec4\u5408\u60c5\u51b5\uff09\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"/zh/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles")," \u51fd\u6570\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"quantileExactHigh(level)(expr)\n")),(0,l.kt)("p",null,"\u522b\u540d: ",(0,l.kt)("inlineCode",{parentName:"p"},"medianExactHigh"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"level")," \u2014 \u5206\u4f4d\u6570\u5c42\u6b21\u3002\u53ef\u9009\u53c2\u6570\u3002\u4ece0\u52301\u7684\u4e00\u4e2afloat\u7c7b\u578b\u7684\u5e38\u91cf\u3002\u6211\u4eec\u63a8\u8350 ",(0,l.kt)("inlineCode",{parentName:"li"},"level")," \u503c\u7684\u8303\u56f4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"[0.01, 0.99]"),"\u3002\u9ed8\u8ba4\u503c\uff1a0.5\u3002\u5f53 ",(0,l.kt)("inlineCode",{parentName:"li"},"level=0.5")," \u65f6\uff0c\u8be5\u51fd\u6570\u8ba1\u7b97 ",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Median"},"\u4e2d\u4f4d\u6570"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"expr")," \u2014 \u2014 \u6c42\u503c\u8868\u8fbe\u5f0f\uff0c\u7c7b\u578b\u4e3a\u6570\u503c\u7c7b\u578b",(0,l.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/#data_types"},"data types"),", ",(0,l.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/date"},"Date")," \u6216 ",(0,l.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/datetime"},"DateTime"),"\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u5c42\u6b21\u7684\u5206\u4f4d\u6570\u3002")),(0,l.kt)("p",null,"\u7c7b\u578b:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/float"},"Float64")," \u7528\u4e8e\u6570\u5b57\u6570\u636e\u7c7b\u578b\u8f93\u5165\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/date"},"Date")," \u5982\u679c\u8f93\u5165\u503c\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"Date")," \u7c7b\u578b\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/datetime"},"DateTime")," \u5982\u679c\u8f93\u5165\u503c\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"DateTime")," \u7c7b\u578b\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("p",null,"\u67e5\u8be2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT quantileExactHigh(number) FROM numbers(10)\n")),(0,l.kt)("p",null,"\u7ed3\u679c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500quantileExactHigh(number)\u2500\u2510\n\u2502                         5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u89c1")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh/sql-reference/aggregate-functions/reference/median#median"},"\u4e2d\u4f4d\u6570")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"\u5206\u4f4d\u6570"))))}k.isMDXComponent=!0}}]);
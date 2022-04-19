"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[35971],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),g=o(n),m=a,f=g["".concat(u,".").concat(m)]||g[m]||c[m]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=g;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},71377:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],p={sidebar_position:205},u="quantileTimingWeighted",o={unversionedId:"zh/sql-reference/aggregate-functions/reference/quantiletimingweighted",id:"zh/sql-reference/aggregate-functions/reference/quantiletimingweighted",title:"quantileTimingWeighted",description:"quantiletimingweighted}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/quantiletimingweighted.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/quantiletimingweighted",permalink:"/zh/sql-reference/aggregate-functions/reference/quantiletimingweighted",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/quantiletimingweighted.md",tags:[],version:"current",sidebarPosition:205,frontMatter:{sidebar_position:205},sidebar:"chinese",previous:{title:"quantileTiming",permalink:"/zh/sql-reference/aggregate-functions/reference/quantiletiming"},next:{title:"quantileDeterministic",permalink:"/zh/sql-reference/aggregate-functions/reference/quantiledeterministic"}},s={},c=[],g={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quantiletimingweighted"},"quantileTimingWeighted"),(0,i.kt)("p",null,"\u6839\u636e\u6bcf\u4e2a\u5e8f\u5217\u6210\u5458\u7684\u6743\u91cd\uff0c\u4f7f\u7528\u786e\u5b9a\u7684\u7cbe\u5ea6\u8ba1\u7b97\u6570\u5b57\u5e8f\u5217\u7684",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quantile"},"\u5206\u4f4d\u6570"),"\u3002"),(0,i.kt)("p",null,"\u7ed3\u679c\u662f\u786e\u5b9a\u6027\u7684\uff08\u5b83\u4e0d\u4f9d\u8d56\u4e8e\u67e5\u8be2\u5904\u7406\u987a\u5e8f\uff09\u3002\u8be5\u51fd\u6570\u9488\u5bf9\u63cf\u8ff0\u52a0\u8f7d\u7f51\u9875\u65f6\u95f4\u6216\u540e\u7aef\u54cd\u5e94\u65f6\u95f4\u7b49\u5206\u5e03\u7684\u5e8f\u5217\u8fdb\u884c\u4e86\u4f18\u5316\u3002"),(0,i.kt)("p",null,"\u5f53\u5728\u4e00\u4e2a\u67e5\u8be2\u4e2d\u4f7f\u7528\u591a\u4e2a\u4e0d\u540c\u5c42\u6b21\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"quantile*")," \u65f6\uff0c\u5185\u90e8\u72b6\u6001\u4e0d\u4f1a\u88ab\u7ec4\u5408\uff08\u5373\u67e5\u8be2\u7684\u5de5\u4f5c\u6548\u7387\u4f4e\u4e8e\u7ec4\u5408\u60c5\u51b5\uff09\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"/zh/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles"),"\u529f\u80fd\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"quantileTimingWeighted(level)(expr, weight)\n")),(0,i.kt)("p",null,"\u522b\u540d: ",(0,i.kt)("inlineCode",{parentName:"p"},"medianTimingWeighted"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"level")," \u2014 \u5206\u4f4d\u6570\u5c42\u6b21\u3002\u53ef\u9009\u53c2\u6570\u3002\u4ece0\u52301\u7684\u4e00\u4e2afloat\u7c7b\u578b\u7684\u5e38\u91cf\u3002\u6211\u4eec\u63a8\u8350 ",(0,i.kt)("inlineCode",{parentName:"p"},"level")," \u503c\u7684\u8303\u56f4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"[0.01, 0.99]")," \u3002\u9ed8\u8ba4\u503c\uff1a0.5\u3002\u5f53 ",(0,i.kt)("inlineCode",{parentName:"p"},"level=0.5")," \u65f6\uff0c\u8be5\u51fd\u6570\u8ba1\u7b97 ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Median"},"\u4e2d\u4f4d\u6570"),"\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"expr")," \u2014 \u6c42\u503c",(0,i.kt)("a",{parentName:"p",href:"/zh/sql-reference/syntax#syntax-expressions"},"\u8868\u8fbe\u5f0f")," \u8fd4\u56de ",(0,i.kt)("a",{parentName:"p",href:"/zh/sql-reference/data-types/float"},"Float","*")," \u7c7b\u578b\u6570\u503c\u3002"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u8f93\u5165\u8d1f\u503c\uff0c\u90a3\u7ed3\u679c\u662f\u4e0d\u53ef\u9884\u671f\u7684\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u8f93\u5165\u503c\u5927\u4e8e30000\uff08\u9875\u9762\u52a0\u8f7d\u65f6\u95f4\u5927\u4e8e30s\uff09\uff0c\u90a3\u6211\u4eec\u5047\u8bbe\u4e3a30000\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"weight")," \u2014 \u6743\u91cd\u5e8f\u5217\u3002 \u6743\u91cd\u662f\u4e00\u4e2a\u6570\u636e\u51fa\u73b0\u7684\u6570\u503c\u3002"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7cbe\u5ea6")),(0,i.kt)("p",null,"\u8ba1\u7b97\u662f\u51c6\u786e\u7684\uff0c\u5982\u679c:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u503c\u7684\u603b\u6570\u4e0d\u8d85\u8fc75670\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u603b\u6570\u503c\u8d85\u8fc75670\uff0c\u4f46\u9875\u9762\u52a0\u8f7d\u65f6\u95f4\u5c0f\u4e8e1024ms\u3002")),(0,i.kt)("p",null,"\u5426\u5219\uff0c\u8ba1\u7b97\u7ed3\u679c\u5c06\u56db\u820d\u4e94\u5165\u523016\u6beb\u79d2\u7684\u6700\u63a5\u8fd1\u500d\u6570\u3002"),(0,i.kt)("p",null,'!!! note "\u6ce8"\n\u5bf9\u4e8e\u8ba1\u7b97\u9875\u9762\u52a0\u8f7d\u65f6\u95f4\u5206\u4f4d\u6570\uff0c \u6b64\u51fd\u6570\u6bd4',(0,i.kt)("a",{parentName:"p",href:"/zh/sql-reference/aggregate-functions/reference/quantile#quantile"},"quantile"),"\u66f4\u6709\u6548\u548c\u51c6\u786e\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u5c42\u6b21\u7684\u5206\u4f4d\u6570\u3002")),(0,i.kt)("p",null,"\u7c7b\u578b: ",(0,i.kt)("inlineCode",{parentName:"p"},"Float32"),"\u3002"),(0,i.kt)("p",null,'!!! note "\u6ce8"\n\u5982\u679c\u6ca1\u6709\u503c\u4f20\u9012\u7ed9\u51fd\u6570\uff08\u5f53\u4f7f\u7528 ',(0,i.kt)("inlineCode",{parentName:"p"},"quantileTimingIf"),"), ",(0,i.kt)("a",{parentName:"p",href:"/zh/sql-reference/data-types/float#data_type-float-nan-inf"},"NaN"),"\u88ab\u8fd4\u56de\u3002 \u8fd9\u6837\u505a\u7684\u76ee\u7684\u662f\u5c06\u8fd9\u4e9b\u6848\u4f8b\u4e0e\u5bfc\u81f4\u96f6\u7684\u6848\u4f8b\u533a\u5206\u5f00\u6765\u3002 \u53c2\u89c1 ",(0,i.kt)("a",{parentName:"p",href:"/zh/sql-reference/statements/select/order-by#select-order-by"},"ORDER BY clause")," \u5bf9\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"NaN")," \u503c\u6392\u5e8f\u6ce8\u610f\u4e8b\u9879\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,i.kt)("p",null,"\u8f93\u5165\u8868:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500response_time\u2500\u252c\u2500weight\u2500\u2510\n\u2502            68 \u2502      1 \u2502\n\u2502           104 \u2502      2 \u2502\n\u2502           112 \u2502      3 \u2502\n\u2502           126 \u2502      2 \u2502\n\u2502           138 \u2502      1 \u2502\n\u2502           162 \u2502      1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"\u67e5\u8be2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT quantileTimingWeighted(response_time, weight) FROM t\n")),(0,i.kt)("p",null,"\u7ed3\u679c:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500quantileTimingWeighted(response_time, weight)\u2500\u2510\n\u2502                                           112 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h1",{id:"quantilestimingweighted"},"quantilesTimingWeighted"),(0,i.kt)("p",null,"\u7c7b\u4f3c\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"quantileTimingWeighted")," , \u4f46\u63a5\u53d7\u591a\u4e2a\u5206\u4f4d\u6570\u5c42\u6b21\u53c2\u6570\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u7531\u8fd9\u4e9b\u5206\u4f4d\u6570\u503c\u7ec4\u6210\u7684\u6570\u7ec4\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,i.kt)("p",null,"\u8f93\u5165\u8868:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500response_time\u2500\u252c\u2500weight\u2500\u2510\n\u2502            68 \u2502      1 \u2502\n\u2502           104 \u2502      2 \u2502\n\u2502           112 \u2502      3 \u2502\n\u2502           126 \u2502      2 \u2502\n\u2502           138 \u2502      1 \u2502\n\u2502           162 \u2502      1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"\u67e5\u8be2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT quantilesTimingWeighted(0,5, 0.99)(response_time, weight) FROM t\n")),(0,i.kt)("p",null,"\u7ed3\u679c:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500quantilesTimingWeighted(0.5, 0.99)(response_time, weight)\u2500\u2510\n\u2502 [112,162]                                                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53c2\u89c1")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/aggregate-functions/reference/median#median"},"\u4e2d\u4f4d\u6570")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"\u5206\u4f4d\u6570"))))}m.isMDXComponent=!0}}]);
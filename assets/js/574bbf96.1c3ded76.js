"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[77631],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,g=f["".concat(o,".").concat(d)]||f[d]||s[d]||i;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1958:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],c={sidebar_position:203},o="quantileExactWeighted",u={unversionedId:"zh/sql-reference/aggregate-functions/reference/quantileexactweighted",id:"zh/sql-reference/aggregate-functions/reference/quantileexactweighted",title:"quantileExactWeighted",description:"quantileexactweighted}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/quantileexactweighted.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/quantileexactweighted",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/quantileexactweighted",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/quantileexactweighted.md",tags:[],version:"current",sidebarPosition:203,frontMatter:{sidebar_position:203},sidebar:"chinese",previous:{title:"quantileExact",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/quantileexact"},next:{title:"quantileTiming",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/quantiletiming"}},p={},s=[],f={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quantileexactweighted"},"quantileExactWeighted"),(0,i.kt)("p",null,"\u8003\u8651\u5230\u6bcf\u4e2a\u5143\u7d20\u7684\u6743\u91cd\uff0c\u7136\u540e\u51c6\u786e\u8ba1\u7b97\u6570\u503c\u5e8f\u5217\u7684",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quantile"},"\u5206\u4f4d\u6570"),"\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u51c6\u786e\u8ba1\u7b97\uff0c\u6240\u6709\u8f93\u5165\u7684\u6570\u636e\u88ab\u5408\u5e76\u4e3a\u4e00\u4e2a\u6570\u7ec4\uff0c\u5e76\u4e14\u90e8\u5206\u7684\u6392\u5e8f\u3002\u6bcf\u4e2a\u8f93\u5165\u503c\u9700\u8981\u6839\u636e ",(0,i.kt)("inlineCode",{parentName:"p"},"weight")," \u8ba1\u7b97\u6c42\u548c\u3002\u8be5\u7b97\u6cd5\u4f7f\u7528\u54c8\u5e0c\u8868\u3002\u6b63\u56e0\u4e3a\u5982\u6b64\uff0c\u5728\u6570\u636e\u91cd\u590d\u8f83\u591a\u7684\u65f6\u5019\u4f7f\u7528\u7684\u5185\u5b58\u662f\u5c11\u4e8e",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/aggregate-functions/reference/quantileexact#quantileexact"},"quantileExact"),"\u7684\u3002 \u60a8\u53ef\u4ee5\u4f7f\u7528\u6b64\u51fd\u6570\u4ee3\u66ff ",(0,i.kt)("inlineCode",{parentName:"p"},"quantileExact")," \u5e76\u6307\u5b9a",(0,i.kt)("inlineCode",{parentName:"p"},"weight"),"\u4e3a 1 \u3002"),(0,i.kt)("p",null,"\u5f53\u5728\u4e00\u4e2a\u67e5\u8be2\u4e2d\u4f7f\u7528\u591a\u4e2a\u4e0d\u540c\u5c42\u6b21\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"quantile*")," \u65f6\uff0c\u5185\u90e8\u72b6\u6001\u4e0d\u4f1a\u88ab\u7ec4\u5408\uff08\u5373\u67e5\u8be2\u7684\u5de5\u4f5c\u6548\u7387\u4f4e\u4e8e\u7ec4\u5408\u60c5\u51b5\uff09\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles")," \u51fd\u6570\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"quantileExactWeighted(level)(expr, weight)\n")),(0,i.kt)("p",null,"\u522b\u540d: ",(0,i.kt)("inlineCode",{parentName:"p"},"medianExactWeighted"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"level")," \u2014 \u5206\u4f4d\u6570\u5c42\u6b21\u3002\u53ef\u9009\u53c2\u6570\u3002\u4ece0\u52301\u7684\u4e00\u4e2afloat\u7c7b\u578b\u7684\u5e38\u91cf\u3002\u6211\u4eec\u63a8\u8350 ",(0,i.kt)("inlineCode",{parentName:"li"},"level")," \u503c\u7684\u8303\u56f4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"[0.01, 0.99]"),". \u9ed8\u8ba4\u503c\uff1a0.5\u3002\u5f53 ",(0,i.kt)("inlineCode",{parentName:"li"},"level=0.5")," \u65f6\uff0c\u8be5\u51fd\u6570\u8ba1\u7b97 ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Median"},"\u4e2d\u4f4d\u6570"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expr"),"  \u2014 \u6c42\u503c\u8868\u8fbe\u5f0f\uff0c\u7c7b\u578b\u4e3a\u6570\u503c\u7c7b\u578b",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/#data_types"},"data types"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/date"},"Date")," \u6216 ",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/datetime"},"DateTime"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"weight")," \u2014 \u6743\u91cd\u5e8f\u5217\u3002 \u6743\u91cd\u662f\u4e00\u4e2a\u6570\u636e\u51fa\u73b0\u7684\u6570\u503c\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u5c42\u6b21\u7684\u5206\u4f4d\u6570\u3002")),(0,i.kt)("p",null,"\u7c7b\u578b:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/float"},"Float64")," \u5bf9\u4e8e\u6570\u5b57\u6570\u636e\u7c7b\u578b\u8f93\u5165\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/date"},"\u65e5\u671f")," \u5982\u679c\u8f93\u5165\u503c\u5177\u6709 ",(0,i.kt)("inlineCode",{parentName:"li"},"Date")," \u7c7b\u578b\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/datetime"},"\u65e5\u671f\u65f6\u95f4")," \u5982\u679c\u8f93\u5165\u503c\u5177\u6709 ",(0,i.kt)("inlineCode",{parentName:"li"},"DateTime")," \u7c7b\u578b\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,i.kt)("p",null,"\u8f93\u5165\u8868:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500n\u2500\u252c\u2500val\u2500\u2510\n\u2502 0 \u2502   3 \u2502\n\u2502 1 \u2502   2 \u2502\n\u2502 2 \u2502   1 \u2502\n\u2502 5 \u2502   4 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"\u67e5\u8be2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT quantileExactWeighted(n, val) FROM t\n")),(0,i.kt)("p",null,"\u7ed3\u679c:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500quantileExactWeighted(n, val)\u2500\u2510\n\u2502                             1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53c2\u89c1")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/aggregate-functions/reference/median#median"},"\u4e2d\u4f4d\u6570")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"\u5206\u4f4d\u6570"))))}d.isMDXComponent=!0}}]);
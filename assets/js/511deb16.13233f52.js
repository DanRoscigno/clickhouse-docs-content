"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[17830],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return g}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),m=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=m(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=m(t),g=i,f=c["".concat(p,".").concat(g)]||c[g]||u[g]||a;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var m=2;m<a;m++)l[m]=t[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},91662:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return u}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),l=["components"],o={sidebar_label:"\u65e5\u5fd7\u5f15\u64ce\u7cfb\u5217",sidebar_position:29},p="\u65e5\u5fd7\u5f15\u64ce\u7cfb\u5217",m={unversionedId:"zh/engines/table-engines/log-family/index",id:"zh/engines/table-engines/log-family/index",title:"\u65e5\u5fd7\u5f15\u64ce\u7cfb\u5217",description:"table_engines-log-engine-family}",source:"@site/docs/zh/engines/table-engines/log-family/index.md",sourceDirName:"zh/engines/table-engines/log-family",slug:"/zh/engines/table-engines/log-family/",permalink:"/zh/engines/table-engines/log-family/",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/table-engines/log-family/index.md",tags:[],version:"current",sidebarPosition:29,frontMatter:{sidebar_label:"\u65e5\u5fd7\u5f15\u64ce\u7cfb\u5217",sidebar_position:29},sidebar:"chinese",previous:{title:"SummingMergeTree",permalink:"/zh/engines/table-engines/mergetree-family/summingmergetree"},next:{title:"Log",permalink:"/zh/engines/table-engines/log-family/log"}},s={},u=[{value:"\u5171\u540c\u5c5e\u6027",id:"table_engines-log-engine-family-common-properties",level:2},{value:"\u5dee\u5f02",id:"table_engines-log-engine-family-differences",level:2}],c={toc:u};function g(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"table_engines-log-engine-family"},"\u65e5\u5fd7\u5f15\u64ce\u7cfb\u5217"),(0,a.kt)("p",null,"\u8fd9\u4e9b\u5f15\u64ce\u662f\u4e3a\u4e86\u9700\u8981\u5199\u5165\u8bb8\u591a\u5c0f\u6570\u636e\u91cf\uff08\u5c11\u4e8e\u4e00\u767e\u4e07\u884c\uff09\u7684\u8868\u7684\u573a\u666f\u800c\u5f00\u53d1\u7684\u3002"),(0,a.kt)("p",null,"\u8fd9\u7cfb\u5217\u7684\u5f15\u64ce\u6709\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/log-family/stripelog"},"StripeLog")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/log-family/log"},"\u65e5\u5fd7")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/log-family/tinylog"},"TinyLog"))),(0,a.kt)("h2",{id:"table_engines-log-engine-family-common-properties"},"\u5171\u540c\u5c5e\u6027"),(0,a.kt)("p",null,"\u5f15\u64ce\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6570\u636e\u5b58\u50a8\u5728\u78c1\u76d8\u4e0a\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5199\u5165\u65f6\u5c06\u6570\u636e\u8ffd\u52a0\u5728\u6587\u4ef6\u672b\u5c3e\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e0d\u652f\u6301",(0,a.kt)("a",{parentName:"p",href:"/zh/engines/table-engines/log-family/#alter-mutations"},"\u7a81\u53d8"),"\u64cd\u4f5c\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e0d\u652f\u6301\u7d22\u5f15\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"\u8fd9\u610f\u5473\u7740 `SELECT` \u5728\u8303\u56f4\u67e5\u8be2\u65f6\u6548\u7387\u4e0d\u9ad8\u3002\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u975e\u539f\u5b50\u5730\u5199\u5165\u6570\u636e\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"\u5982\u679c\u67d0\u4e9b\u4e8b\u60c5\u7834\u574f\u4e86\u5199\u64cd\u4f5c\uff0c\u4f8b\u5982\u670d\u52a1\u5668\u7684\u5f02\u5e38\u5173\u95ed\uff0c\u4f60\u5c06\u4f1a\u5f97\u5230\u4e00\u5f20\u5305\u542b\u4e86\u635f\u574f\u6570\u636e\u7684\u8868\u3002\n")))),(0,a.kt)("h2",{id:"table_engines-log-engine-family-differences"},"\u5dee\u5f02"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Log")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"StripeLog")," \u5f15\u64ce\u652f\u6301\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5e76\u53d1\u8bbf\u95ee\u6570\u636e\u7684\u9501\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"`INSERT` \u8bf7\u6c42\u6267\u884c\u8fc7\u7a0b\u4e2d\u8868\u4f1a\u88ab\u9501\u5b9a\uff0c\u5e76\u4e14\u5176\u4ed6\u7684\u8bfb\u5199\u6570\u636e\u7684\u8bf7\u6c42\u90fd\u4f1a\u7b49\u5f85\u76f4\u5230\u9501\u5b9a\u88ab\u89e3\u9664\u3002\u5982\u679c\u6ca1\u6709\u5199\u6570\u636e\u7684\u8bf7\u6c42\uff0c\u4efb\u610f\u6570\u91cf\u7684\u8bfb\u8bf7\u6c42\u90fd\u53ef\u4ee5\u5e76\u53d1\u6267\u884c\u3002\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5e76\u884c\u8bfb\u53d6\u6570\u636e\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"\u5728\u8bfb\u53d6\u6570\u636e\u65f6\uff0cClickHouse \u4f7f\u7528\u591a\u7ebf\u7a0b\u3002 \u6bcf\u4e2a\u7ebf\u7a0b\u5904\u7406\u4e0d\u540c\u7684\u6570\u636e\u5757\u3002\n")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Log")," \u5f15\u64ce\u4e3a\u8868\u4e2d\u7684\u6bcf\u4e00\u5217\u4f7f\u7528\u4e0d\u540c\u7684\u6587\u4ef6\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"StripeLog")," \u5c06\u6240\u6709\u7684\u6570\u636e\u5b58\u50a8\u5728\u4e00\u4e2a\u6587\u4ef6\u4e2d\u3002\u56e0\u6b64 ",(0,a.kt)("inlineCode",{parentName:"p"},"StripeLog")," \u5f15\u64ce\u5728\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u4f7f\u7528\u66f4\u5c11\u7684\u63cf\u8ff0\u7b26\uff0c\u4f46\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"Log")," \u5f15\u64ce\u63d0\u4f9b\u66f4\u9ad8\u7684\u8bfb\u6027\u80fd\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"TinyLog")," \u5f15\u64ce\u662f\u8be5\u7cfb\u5217\u4e2d\u6700\u7b80\u5355\u7684\u5f15\u64ce\u5e76\u4e14\u63d0\u4f9b\u4e86\u6700\u5c11\u7684\u529f\u80fd\u548c\u6700\u4f4e\u7684\u6027\u80fd\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"TinyLog")," \u5f15\u64ce\u4e0d\u652f\u6301\u5e76\u884c\u8bfb\u53d6\u548c\u5e76\u53d1\u6570\u636e\u8bbf\u95ee\uff0c\u5e76\u5c06\u6bcf\u4e00\u5217\u5b58\u50a8\u5728\u4e0d\u540c\u7684\u6587\u4ef6\u4e2d\u3002\u5b83\u6bd4\u5176\u4f59\u4e24\u79cd\u652f\u6301\u5e76\u884c\u8bfb\u53d6\u7684\u5f15\u64ce\u7684\u8bfb\u53d6\u901f\u5ea6\u66f4\u6162\uff0c\u5e76\u4e14\u4f7f\u7528\u4e86\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"Log")," \u5f15\u64ce\u540c\u6837\u591a\u7684\u63cf\u8ff0\u7b26\u3002\u4f60\u53ef\u4ee5\u5728\u7b80\u5355\u7684\u4f4e\u8d1f\u8f7d\u7684\u60c5\u666f\u4e0b\u4f7f\u7528\u5b83\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/table_engines/log_family/"},"\u6765\u6e90\u6587\u7ae0")," "))}g.isMDXComponent=!0}}]);
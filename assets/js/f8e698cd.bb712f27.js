"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[93518],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),c=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=c(e.components);return i.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=c(t),f=r,h=d["".concat(o,".").concat(f)]||d[f]||p[f]||l;return t?i.createElement(h,u(u({ref:n},s),{},{components:t})):i.createElement(h,u({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,u=new Array(l);u[0]=d;var a={};for(var o in n)hasOwnProperty.call(n,o)&&(a[o]=n[o]);a.originalType=e,a.mdxType="string"==typeof e?e:r,u[1]=a;for(var c=2;c<l;c++)u[c]=t[c];return i.createElement.apply(null,u)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},23669:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var i=t(87462),r=t(63366),l=(t(67294),t(3905)),u=["components"],a={sidebar_label:"\u51fd\u6570",sidebar_position:32},o="\u51fd\u6570",c={unversionedId:"zh/sql-reference/functions/index",id:"zh/sql-reference/functions/index",title:"\u51fd\u6570",description:"han-shu}",source:"@site/docs/zh/sql-reference/functions/index.md",sourceDirName:"zh/sql-reference/functions",slug:"/zh/sql-reference/functions/",permalink:"/zh/sql-reference/functions/",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/functions/index.md",tags:[],version:"current",sidebarPosition:32,frontMatter:{sidebar_label:"\u51fd\u6570",sidebar_position:32},sidebar:"chinese",previous:{title:"Distributed DDL",permalink:"/zh/sql-reference/distributed-ddl"},next:{title:"\u7b97\u672f\u51fd\u6570",permalink:"/zh/sql-reference/functions/arithmetic-functions"}},s={},p=[{value:"\u5f3a\u7c7b\u578b",id:"qiang-lei-xing",level:2},{value:"\u5e38\u89c1\u7684\u5b50\u8868\u8fbe\u5f0f\u6d88\u9664",id:"chang-jian-de-zi-biao-da-shi-xiao-chu",level:2},{value:"\u7ed3\u679c\u7c7b\u578b",id:"jie-guo-lei-xing",level:2},{value:"\u5e38\u91cf",id:"chang-liang",level:2},{value:"NULL\u503c\u5904\u7406",id:"nullzhi-chu-li",level:2},{value:"\u4e0d\u53ef\u53d8\u6027",id:"bu-ke-bian-xing",level:2},{value:"\u9519\u8bef\u5904\u7406",id:"cuo-wu-chu-li",level:2},{value:"\u8868\u8fbe\u5f0f\u53c2\u6570\u7684\u8ba1\u7b97",id:"biao-da-shi-can-shu-de-ji-suan",level:2},{value:"\u6267\u884c\u5206\u5e03\u5f0f\u67e5\u8be2\u5904\u7406\u7684\u529f\u80fd",id:"zhi-xing-fen-bu-shi-cha-xun-chu-li-de-gong-neng",level:2}],d={toc:p};function f(e){var n=e.components,t=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"han-shu"},"\u51fd\u6570"),(0,l.kt)("p",null,"ClickHouse\u4e2d\u81f3\u5c11\u5b58\u5728\u4e24\u79cd\u7c7b\u578b\u7684\u51fd\u6570 - \u5e38\u89c4\u51fd\u6570\uff08\u5b83\u4eec\u79f0\u4e4b\u4e3a\xab\u51fd\u6570\xbb\uff09\u548c\u805a\u5408\u51fd\u6570\u3002 \u5e38\u89c4\u51fd\u6570\u7684\u5de5\u4f5c\u5c31\u50cf\u5206\u522b\u4e3a\u6bcf\u4e00\u884c\u6267\u884c\u4e00\u6b21\u51fd\u6570\u8ba1\u7b97\u4e00\u6837\uff08\u5bf9\u4e8e\u6bcf\u4e00\u884c\uff0c\u51fd\u6570\u7684\u7ed3\u679c\u4e0d\u4f9d\u8d56\u4e8e\u5176\u4ed6\u884c\uff09\u3002 \u805a\u5408\u51fd\u6570\u5219\u4ece\u5404\u884c\u7d2f\u79ef\u4e00\u7ec4\u503c\uff08\u5373\u51fd\u6570\u7684\u7ed3\u679c\u4ee5\u6765\u6574\u4e2a\u7ed3\u679c\u96c6\uff09\u3002"),(0,l.kt)("p",null,"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u8ba8\u8bba\u5e38\u89c4\u51fd\u6570\u3002 \u6709\u5173\u805a\u5408\u51fd\u6570\uff0c\u8bf7\u53c2\u9605\xab\u805a\u5408\u51fd\u6570\xbb\u4e00\u8282\u3002"),(0,l.kt)("p",null,"\xa0","*"," - \u2019arrayJoin\u2019\u51fd\u6570\u4e0e\u8868\u51fd\u6570\u5747\u5c5e\u4e8e\u7b2c\u4e09\u79cd\u7c7b\u578b\u7684\u51fd\u6570\u3002\xa0","*"),(0,l.kt)("h2",{id:"qiang-lei-xing"},"\u5f3a\u7c7b\u578b"),(0,l.kt)("p",null,"\u4e0e\u6807\u51c6SQL\u76f8\u6bd4\uff0cClickHouse\u5177\u6709\u5f3a\u7c7b\u578b\u3002 \u6362\u53e5\u8bdd\u8bf4\uff0c\u5b83\u4e0d\u4f1a\u5728\u7c7b\u578b\u4e4b\u95f4\u8fdb\u884c\u9690\u5f0f\u8f6c\u6362\u3002 \u6bcf\u4e2a\u51fd\u6570\u9002\u7528\u4e8e\u7279\u5b9a\u7684\u4e00\u7ec4\u7c7b\u578b\u3002 \u8fd9\u610f\u5473\u7740\u6709\u65f6\u60a8\u9700\u8981\u4f7f\u7528\u7c7b\u578b\u8f6c\u6362\u51fd\u6570\u3002"),(0,l.kt)("h2",{id:"chang-jian-de-zi-biao-da-shi-xiao-chu"},"\u5e38\u89c1\u7684\u5b50\u8868\u8fbe\u5f0f\u6d88\u9664"),(0,l.kt)("p",null,"\u67e5\u8be2\u4e2d\u5177\u6709\u76f8\u540cAST\uff08\u76f8\u540c\u8bed\u53e5\u6216\u8bed\u6cd5\u5206\u6790\u7ed3\u679c\u76f8\u540c\uff09\u7684\u6240\u6709\u8868\u8fbe\u5f0f\u90fd\u88ab\u89c6\u4e3a\u5177\u6709\u76f8\u540c\u7684\u503c\u3002 \u8fd9\u6837\u7684\u8868\u8fbe\u5f0f\u88ab\u8fde\u63a5\u5e76\u6267\u884c\u4e00\u6b21\u3002 \u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u4e5f\u53ef\u4ee5\u6d88\u9664\u76f8\u540c\u7684\u5b50\u67e5\u8be2\u3002"),(0,l.kt)("h2",{id:"jie-guo-lei-xing"},"\u7ed3\u679c\u7c7b\u578b"),(0,l.kt)("p",null,"\u6240\u6709\u51fd\u6570\u90fd\u53ea\u80fd\u591f\u8fd4\u56de\u4e00\u4e2a\u8fd4\u56de\u503c\u3002 \u7ed3\u679c\u7c7b\u578b\u901a\u5e38\u7531\u53c2\u6570\u7684\u7c7b\u578b\u51b3\u5b9a\u3002 \u4f46tupleElement\u51fd\u6570\uff08a.N\u8fd0\u7b97\u7b26\uff09\u548ctoFixedString\u51fd\u6570\u662f\u4f8b\u5916\u7684\u3002"),(0,l.kt)("h2",{id:"chang-liang"},"\u5e38\u91cf"),(0,l.kt)("p",null,"\u4e3a\u4e86\u7b80\u5355\u8d77\u89c1\uff0c\u67d0\u4e9b\u51fd\u6570\u7684\u67d0\u4e9b\u53c2\u6570\u53ea\u80fd\u662f\u5e38\u91cf\u3002 \u4f8b\u5982\uff0cLIKE\u8fd0\u7b97\u7b26\u7684\u53f3\u53c2\u6570\u5fc5\u987b\u662f\u5e38\u91cf\u3002\n\u51e0\u4e4e\u6240\u6709\u51fd\u6570\u90fd\u4e3a\u5e38\u91cf\u53c2\u6570\u8fd4\u56de\u5e38\u91cf\u3002 \u9664\u4e86\u7528\u4e8e\u751f\u6210\u968f\u673a\u6570\u7684\u51fd\u6570\u3002\n\u2019now\u2019\u51fd\u6570\u4e3a\u5728\u4e0d\u540c\u65f6\u95f4\u8fd0\u884c\u7684\u67e5\u8be2\u8fd4\u56de\u4e0d\u540c\u7684\u503c\uff0c\u4f46\u7ed3\u679c\u88ab\u89c6\u4e3a\u5e38\u91cf\uff0c\u56e0\u4e3a\u5e38\u91cf\u5728\u5355\u4e2a\u67e5\u8be2\u4e2d\u5f88\u91cd\u8981\u3002\n\u5e38\u91cf\u8868\u8fbe\u5f0f\u4e5f\u88ab\u89c6\u4e3a\u5e38\u91cf\uff08\u4f8b\u5982\uff0cLIKE\u8fd0\u7b97\u7b26\u7684\u53f3\u534a\u90e8\u5206\u53ef\u4ee5\u7531\u591a\u4e2a\u5e38\u91cf\u6784\u9020\uff09\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u5e38\u91cf\u548c\u975e\u5e38\u91cf\u53c2\u6570\uff0c\u53ef\u4ee5\u4ee5\u4e0d\u540c\u65b9\u5f0f\u5b9e\u73b0\u51fd\u6570\uff08\u6267\u884c\u4e0d\u540c\u7684\u4ee3\u7801\uff09\u3002 \u4f46\u662f\uff0c\u5bf9\u4e8e\u5305\u542b\u76f8\u540c\u6570\u636e\u7684\u5e38\u91cf\u548c\u975e\u5e38\u91cf\u53c2\u6570\u5b83\u4eec\u7684\u7ed3\u679c\u5e94\u8be5\u662f\u4e00\u81f4\u7684\u3002"),(0,l.kt)("h2",{id:"nullzhi-chu-li"},"NULL\u503c\u5904\u7406"),(0,l.kt)("p",null,"\u51fd\u6570\u5177\u6709\u4ee5\u4e0b\u884c\u4e3a\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u51fd\u6570\u7684\u53c2\u6570\u81f3\u5c11\u4e00\u4e2a\u662f\xabNULL\xbb\uff0c\u5219\u51fd\u6570\u7ed3\u679c\u4e5f\u662f\xabNULL\xbb\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u6bcf\u4e2a\u51fd\u6570\u7684\u63cf\u8ff0\u4e2d\u5355\u72ec\u6307\u5b9a\u7684\u7279\u6b8a\u884c\u4e3a\u3002\u5728ClickHouse\u6e90\u4ee3\u7801\u4e2d\uff0c\u8fd9\u4e9b\u51fd\u6570\u5177\u6709\xabUseDefaultImplementationForNulls = false\xbb\u3002")),(0,l.kt)("h2",{id:"bu-ke-bian-xing"},"\u4e0d\u53ef\u53d8\u6027"),(0,l.kt)("p",null,"\u51fd\u6570\u4e0d\u80fd\u66f4\u6539\u5176\u53c2\u6570\u7684\u503c - \u4efb\u4f55\u66f4\u6539\u90fd\u5c06\u4f5c\u4e3a\u7ed3\u679c\u8fd4\u56de\u3002\u56e0\u6b64\uff0c\u8ba1\u7b97\u5355\u72ec\u51fd\u6570\u7684\u7ed3\u679c\u4e0d\u4f9d\u8d56\u4e8e\u5728\u67e5\u8be2\u4e2d\u5199\u5165\u51fd\u6570\u7684\u987a\u5e8f\u3002"),(0,l.kt)("h2",{id:"cuo-wu-chu-li"},"\u9519\u8bef\u5904\u7406"),(0,l.kt)("p",null,"\u5982\u679c\u6570\u636e\u65e0\u6548\uff0c\u67d0\u4e9b\u51fd\u6570\u53ef\u80fd\u4f1a\u629b\u51fa\u5f02\u5e38\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5c06\u53d6\u6d88\u67e5\u8be2\u5e76\u5c06\u9519\u8bef\u4fe1\u606f\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u3002\u5bf9\u4e8e\u5206\u5e03\u5f0f\u5904\u7406\uff0c\u5f53\u5176\u4e2d\u4e00\u4e2a\u670d\u52a1\u5668\u53d1\u751f\u5f02\u5e38\u65f6\uff0c\u5176\u4ed6\u670d\u52a1\u5668\u4e5f\u4f1a\u5c1d\u8bd5\u4e2d\u6b62\u67e5\u8be2\u3002"),(0,l.kt)("h2",{id:"biao-da-shi-can-shu-de-ji-suan"},"\u8868\u8fbe\u5f0f\u53c2\u6570\u7684\u8ba1\u7b97"),(0,l.kt)("p",null,"\u5728\u51e0\u4e4e\u6240\u6709\u7f16\u7a0b\u8bed\u8a00\u4e2d\uff0c\u67d0\u4e9b\u51fd\u6570\u53ef\u80fd\u65e0\u6cd5\u9884\u5148\u8ba1\u7b97\u5176\u4e2d\u4e00\u4e2a\u53c2\u6570\u3002\u8fd9\u901a\u5e38\u662f\u8fd0\u7b97\u7b26",(0,l.kt)("inlineCode",{parentName:"p"},"&&"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"||"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"? :"),"\u3002\n\u4f46\u662f\u5728ClickHouse\u4e2d\uff0c\u51fd\u6570\uff08\u8fd0\u7b97\u7b26\uff09\u7684\u53c2\u6570\u603b\u662f\u88ab\u9884\u5148\u8ba1\u7b97\u3002\u8fd9\u662f\u56e0\u4e3a\u4e00\u6b21\u8bc4\u4f30\u5217\u7684\u6574\u4e2a\u90e8\u5206\uff0c\u800c\u4e0d\u662f\u5206\u522b\u8ba1\u7b97\u6bcf\u4e00\u884c\u3002"),(0,l.kt)("h2",{id:"zhi-xing-fen-bu-shi-cha-xun-chu-li-de-gong-neng"},"\u6267\u884c\u5206\u5e03\u5f0f\u67e5\u8be2\u5904\u7406\u7684\u529f\u80fd"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u5206\u5e03\u5f0f\u67e5\u8be2\u5904\u7406\uff0c\u5728\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u6267\u884c\u5c3d\u53ef\u80fd\u591a\u7684\u67e5\u8be2\u5904\u7406\u9636\u6bb5\uff0c\u5e76\u4e14\u5728\u8bf7\u6c42\u8005\u670d\u52a1\u5668\u4e0a\u6267\u884c\u5176\u4f59\u9636\u6bb5\uff08\u5408\u5e76\u4e2d\u95f4\u7ed3\u679c\u548c\u4e4b\u540e\u7684\u6240\u6709\u5185\u5bb9\uff09\u3002"),(0,l.kt)("p",null,"\u8fd9\u610f\u5473\u7740\u53ef\u4ee5\u5728\u4e0d\u540c\u7684\u670d\u52a1\u5668\u4e0a\u6267\u884c\u529f\u80fd\u3002\n\u4f8b\u5982\uff0c\u5728\u67e5\u8be2",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT f\uff08sum\uff08g\uff08x\uff09\uff09\uff09FROM distributed_table GROUP BY h\uff08y\uff09\u4e2d\uff0c")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"li"},"distributed_table"),"\u81f3\u5c11\u6709\u4e24\u4e2a\u5206\u7247\uff0c\u5219\u5728\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u6267\u884c\u51fd\u6570\u2019g\u2019\u548c\u2019h\u2019\uff0c\u5e76\u5728\u8bf7\u6c42\u670d\u52a1\u5668\u4e0a\u6267\u884c\u51fd\u6570\u2019f\u2019\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"li"},"distributed_table"),"\u53ea\u6709\u4e00\u4e2a\u5206\u7247\uff0c\u5219\u5728\u8be5\u5206\u7247\u7684\u670d\u52a1\u5668\u4e0a\u6267\u884c\u6240\u6709\u2019f\u2019\uff0c\u2019g\u2019\u548c\u2019h\u2019\u529f\u80fd\u3002")),(0,l.kt)("p",null,"\u51fd\u6570\u7684\u7ed3\u679c\u901a\u5e38\u4e0d\u4f9d\u8d56\u4e8e\u5b83\u5728\u54ea\u4e2a\u670d\u52a1\u5668\u4e0a\u6267\u884c\u3002\u4f46\u662f\uff0c\u6709\u65f6\u8fd9\u5f88\u91cd\u8981\u3002\n\u4f8b\u5982\uff0c\u4f7f\u7528\u5b57\u5178\u7684\u51fd\u6570\u65f6\u5c06\u4f7f\u7528\u8fd0\u884c\u5b83\u4eec\u7684\u670d\u52a1\u5668\u4e0a\u5b58\u5728\u7684\u5b57\u5178\u3002\n\u53e6\u4e00\u4e2a\u4f8b\u5b50\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"hostName"),"\u51fd\u6570\uff0c\u5b83\u8fd4\u56de\u8fd0\u884c\u5b83\u7684\u670d\u52a1\u5668\u7684\u540d\u79f0\uff0c\u4ee5\u4fbf\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT"),"\u67e5\u8be2\u4e2d\u5bf9\u670d\u52a1\u5668\u8fdb\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"GROUP BY"),"\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u67e5\u8be2\u4e2d\u7684\u51fd\u6570\u5728\u8bf7\u6c42\u670d\u52a1\u5668\u4e0a\u6267\u884c\uff0c\u4f46\u60a8\u9700\u8981\u5728\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u6267\u884c\u5b83\uff0c\u5219\u53ef\u4ee5\u5c06\u5176\u5305\u88c5\u5728\xabany\xbb\u805a\u5408\u51fd\u6570\u4e2d\uff0c\u6216\u5c06\u5176\u6dfb\u52a0\u5230\xabGROUP BY\xbb\u4e2d\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/functions/"},"\u6765\u6e90\u6587\u7ae0")," "))}f.isMDXComponent=!0}}]);
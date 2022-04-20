"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[71771],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,k=u["".concat(o,".").concat(d)]||u[d]||c[d]||l;return t?r.createElement(k,i(i({ref:n},m),{},{components:t})):r.createElement(k,i({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=u;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},85935:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),i=["components"],p={sidebar_label:"ORDER BY"},o="ORDER BY",s={unversionedId:"zh/sql-reference/statements/select/order-by",id:"zh/sql-reference/statements/select/order-by",title:"ORDER BY",description:"select-order-by}",source:"@site/docs/zh/sql-reference/statements/select/order-by.md",sourceDirName:"zh/sql-reference/statements/select",slug:"/zh/sql-reference/statements/select/order-by",permalink:"/docs/zh/sql-reference/statements/select/order-by",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/select/order-by.md",tags:[],version:"current",frontMatter:{sidebar_label:"ORDER BY"},sidebar:"chinese",previous:{title:"OFFSET",permalink:"/docs/zh/sql-reference/statements/select/offset"},next:{title:"PREWHERE",permalink:"/docs/zh/sql-reference/statements/select/prewhere"}},m={},c=[{value:"\u7279\u6b8a\u503c\u7684\u6392\u5e8f",id:"sorting-of-special-values",level:2},{value:"\u793a\u4f8b",id:"example",level:3},{value:"\u6392\u5e8f\u89c4\u5219\u652f\u6301",id:"collation-support",level:2},{value:"\u5b9e\u73b0\u7ec6\u8282",id:"implementation-details",level:2},{value:"ORDER BY Expr WITH FILL Modifier",id:"orderby-with-fill",level:2}],u={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"select-order-by"},"ORDER BY"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY")," \u5b50\u53e5\u5305\u542b\u4e00\u4e2a\u8868\u8fbe\u5f0f\u5217\u8868\uff0c\u6bcf\u4e2a\u8868\u8fbe\u5f0f\u90fd\u53ef\u4ee5\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"DESC")," \uff08\u964d\u5e8f\uff09\u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"ASC")," \uff08\u5347\u5e8f\uff09\u4fee\u9970\u7b26\u786e\u5b9a\u6392\u5e8f\u65b9\u5411\u3002 \u5982\u679c\u672a\u6307\u5b9a\u65b9\u5411, \u9ed8\u8ba4\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"ASC")," \uff0c\u6240\u4ee5\u5b83\u901a\u5e38\u88ab\u7701\u7565\u3002 \u6392\u5e8f\u65b9\u5411\u9002\u7528\u4e8e\u5355\u4e2a\u8868\u8fbe\u5f0f\uff0c\u800c\u4e0d\u9002\u7528\u4e8e\u6574\u4e2a\u5217\u8868\u3002 \u793a\u4f8b: ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY Visits DESC, SearchPhrase")),(0,l.kt)("p",null,"\u5bf9\u4e8e\u6392\u5e8f\u8868\u8fbe\u5f0f\u5217\u8868\u5177\u6709\u76f8\u540c\u503c\u7684\u884c\u4ee5\u4efb\u610f\u987a\u5e8f\u8f93\u51fa\uff0c\u4e5f\u53ef\u4ee5\u662f\u975e\u786e\u5b9a\u6027\u7684\uff08\u6bcf\u6b21\u90fd\u4e0d\u540c\uff09\u3002\n\u5982\u679c\u7701\u7565ORDER BY\u5b50\u53e5\uff0c\u5219\u884c\u7684\u987a\u5e8f\u4e5f\u662f\u672a\u5b9a\u4e49\u7684\uff0c\u5e76\u4e14\u53ef\u80fd\u4e5f\u662f\u975e\u786e\u5b9a\u6027\u7684\u3002"),(0,l.kt)("h2",{id:"sorting-of-special-values"},"\u7279\u6b8a\u503c\u7684\u6392\u5e8f"),(0,l.kt)("p",null,"\u6709\u4e24\u79cd\u65b9\u6cd5 ",(0,l.kt)("inlineCode",{parentName:"p"},"NaN")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," \u6392\u5e8f\u987a\u5e8f:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u6216\u4e0e ",(0,l.kt)("inlineCode",{parentName:"li"},"NULLS LAST")," \u4fee\u9970\u7b26\uff1a\u9996\u5148\u662f\u503c\uff0c\u7136\u540e ",(0,l.kt)("inlineCode",{parentName:"li"},"NaN"),"\uff0c\u7136\u540e ",(0,l.kt)("inlineCode",{parentName:"li"},"NULL"),"."),(0,l.kt)("li",{parentName:"ul"},"\u4e0e ",(0,l.kt)("inlineCode",{parentName:"li"},"NULLS FIRST")," \u4fee\u9970\u7b26\uff1a\u7b2c\u4e00 ",(0,l.kt)("inlineCode",{parentName:"li"},"NULL"),"\uff0c\u7136\u540e ",(0,l.kt)("inlineCode",{parentName:"li"},"NaN"),"\uff0c\u7136\u540e\u5176\u4ed6\u503c\u3002")),(0,l.kt)("h3",{id:"example"},"\u793a\u4f8b"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500\u2500\u2500\u2500y\u2500\u2510\n\u2502 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 2 \u2502    2 \u2502\n\u2502 1 \u2502  nan \u2502\n\u2502 2 \u2502    2 \u2502\n\u2502 3 \u2502    4 \u2502\n\u2502 5 \u2502    6 \u2502\n\u2502 6 \u2502  nan \u2502\n\u2502 7 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 6 \u2502    7 \u2502\n\u2502 8 \u2502    9 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u8fd0\u884c\u67e5\u8be2 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT * FROM t_null_nan ORDER BY y NULLS FIRST")," \u83b7\u5f97:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500\u2500\u2500\u2500y\u2500\u2510\n\u2502 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 7 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 1 \u2502  nan \u2502\n\u2502 6 \u2502  nan \u2502\n\u2502 2 \u2502    2 \u2502\n\u2502 2 \u2502    2 \u2502\n\u2502 3 \u2502    4 \u2502\n\u2502 5 \u2502    6 \u2502\n\u2502 6 \u2502    7 \u2502\n\u2502 8 \u2502    9 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u5f53\u5bf9\u6d6e\u70b9\u6570\u8fdb\u884c\u6392\u5e8f\u65f6\uff0cNan\u4e0e\u5176\u4ed6\u503c\u662f\u5206\u5f00\u7684\u3002 \u65e0\u8bba\u6392\u5e8f\u987a\u5e8f\u5982\u4f55\uff0cNan\u90fd\u5728\u6700\u540e\u3002 \u6362\u53e5\u8bdd\u8bf4\uff0c\u5bf9\u4e8e\u5347\u5e8f\u6392\u5e8f\uff0c\u5b83\u4eec\u88ab\u653e\u7f6e\u4e3a\u597d\u50cf\u5b83\u4eec\u6bd4\u6240\u6709\u5176\u4ed6\u6570\u5b57\u5927\uff0c\u800c\u5bf9\u4e8e\u964d\u5e8f\u6392\u5e8f\uff0c\u5b83\u4eec\u88ab\u653e\u7f6e\u4e3a\u597d\u50cf\u5b83\u4eec\u6bd4\u5176\u4ed6\u6570\u5b57\u5c0f\u3002"),(0,l.kt)("h2",{id:"collation-support"},"\u6392\u5e8f\u89c4\u5219\u652f\u6301"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u6309\u5b57\u7b26\u4e32\u503c\u6392\u5e8f\uff0c\u53ef\u4ee5\u6307\u5b9a\u6392\u5e8f\u89c4\u5219\uff08\u6bd4\u8f83\uff09\u3002 \u793a\u4f8b: ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY SearchPhrase COLLATE 'tr'")," -\u5bf9\u4e8e\u6309\u5173\u952e\u5b57\u5347\u5e8f\u6392\u5e8f\uff0c\u4f7f\u7528\u571f\u8033\u5176\u5b57\u6bcd\uff0c\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff0c\u5047\u8bbe\u5b57\u7b26\u4e32\u662fUTF-8\u7f16\u7801\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"COLLATE")," \u53ef\u4ee5\u6309\u987a\u5e8f\u72ec\u7acb\u5730\u6307\u5b9a\u6216\u4e0d\u6309\u6bcf\u4e2a\u8868\u8fbe\u5f0f\u3002 \u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"ASC")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"DESC")," \u88ab\u6307\u5b9a, ",(0,l.kt)("inlineCode",{parentName:"p"},"COLLATE")," \u5728\u5b83\u4e4b\u540e\u6307\u5b9a\u3002 \u4f7f\u7528\u65f6 ",(0,l.kt)("inlineCode",{parentName:"p"},"COLLATE"),"\uff0c\u6392\u5e8f\u59cb\u7ec8\u4e0d\u533a\u5206\u5927\u5c0f\u5199\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u53ea\u5efa\u8bae\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"COLLATE")," \u5bf9\u4e8e\u5c11\u91cf\u884c\u7684\u6700\u7ec8\u6392\u5e8f\uff0c\u56e0\u4e3a\u6392\u5e8f\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"COLLATE")," \u6bd4\u6b63\u5e38\u7684\u6309\u5b57\u8282\u6392\u5e8f\u6548\u7387\u4f4e\u3002"),(0,l.kt)("h2",{id:"implementation-details"},"\u5b9e\u73b0\u7ec6\u8282"),(0,l.kt)("p",null,"\u66f4\u5c11\u7684RAM\u4f7f\u7528\uff0c\u5982\u679c\u4e00\u4e2a\u8db3\u591f\u5c0f ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/select/limit"},"LIMIT")," \u9664\u4e86\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY"),". \u5426\u5219\uff0c\u6240\u82b1\u8d39\u7684\u5185\u5b58\u91cf\u4e0e\u7528\u4e8e\u6392\u5e8f\u7684\u6570\u636e\u91cf\u6210\u6b63\u6bd4\u3002 \u5bf9\u4e8e\u5206\u5e03\u5f0f\u67e5\u8be2\u5904\u7406\uff0c\u5982\u679c ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/select/group-by"},"GROUP BY")," \u7701\u7565\u6392\u5e8f\uff0c\u5728\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u90e8\u5206\u5b8c\u6210\u6392\u5e8f\uff0c\u5e76\u5c06\u7ed3\u679c\u5408\u5e76\u5230\u8bf7\u6c42\u8005\u670d\u52a1\u5668\u4e0a\u3002 \u8fd9\u610f\u5473\u7740\u5bf9\u4e8e\u5206\u5e03\u5f0f\u6392\u5e8f\uff0c\u8981\u6392\u5e8f\u7684\u6570\u636e\u91cf\u53ef\u4ee5\u5927\u4e8e\u5355\u4e2a\u670d\u52a1\u5668\u4e0a\u7684\u5185\u5b58\u91cf\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u8db3\u591f\u7684RAM\uff0c\u5219\u53ef\u4ee5\u5728\u5916\u90e8\u5b58\u50a8\u5668\u4e2d\u6267\u884c\u6392\u5e8f\uff08\u5728\u78c1\u76d8\u4e0a\u521b\u5efa\u4e34\u65f6\u6587\u4ef6\uff09\u3002 \u4f7f\u7528\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"max_bytes_before_external_sort")," \u4e3a\u6b64\u76ee\u7684\u3002 \u5982\u679c\u5c06\u5176\u8bbe\u7f6e\u4e3a0\uff08\u9ed8\u8ba4\u503c\uff09\uff0c\u5219\u7981\u7528\u5916\u90e8\u6392\u5e8f\u3002 \u5982\u679c\u542f\u7528\uff0c\u5219\u5f53\u8981\u6392\u5e8f\u7684\u6570\u636e\u91cf\u8fbe\u5230\u6307\u5b9a\u7684\u5b57\u8282\u6570\u65f6\uff0c\u5c06\u5bf9\u6536\u96c6\u7684\u6570\u636e\u8fdb\u884c\u6392\u5e8f\u5e76\u8f6c\u50a8\u5230\u4e34\u65f6\u6587\u4ef6\u4e2d\u3002 \u8bfb\u53d6\u6240\u6709\u6570\u636e\u540e\uff0c\u5c06\u5408\u5e76\u6240\u6709\u5df2\u6392\u5e8f\u7684\u6587\u4ef6\u5e76\u8f93\u51fa\u7ed3\u679c\u3002 \u6587\u4ef6\u88ab\u5199\u5165\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/lib/clickhouse/tmp/")," \u76ee\u5f55\u4e2d\u7684\u914d\u7f6e\uff08\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4f46\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"tmp_path")," \u53c2\u6570\u6765\u66f4\u6539\u6b64\u8bbe\u7f6e\uff09\u3002"),(0,l.kt)("p",null,"\u8fd0\u884c\u67e5\u8be2\u53ef\u80fd\u5360\u7528\u7684\u5185\u5b58\u6bd4 ",(0,l.kt)("inlineCode",{parentName:"p"},"max_bytes_before_external_sort")," \u5927. \u56e0\u6b64\uff0c\u6b64\u8bbe\u7f6e\u7684\u503c\u5fc5\u987b\u5927\u5927\u5c0f\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"max_memory_usage"),". \u4f8b\u5982\uff0c\u5982\u679c\u60a8\u7684\u670d\u52a1\u5668\u6709128GB\u7684RAM\uff0c\u5e76\u4e14\u60a8\u9700\u8981\u8fd0\u884c\u5355\u4e2a\u67e5\u8be2\uff0c\u8bf7\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"max_memory_usage")," \u5230100GB\uff0c\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"max_bytes_before_external_sort")," \u81f380GB\u3002"),(0,l.kt)("p",null,"\u5916\u90e8\u6392\u5e8f\u7684\u5de5\u4f5c\u6548\u7387\u8fdc\u8fdc\u4f4e\u4e8e\u5728RAM\u4e2d\u8fdb\u884c\u6392\u5e8f\u3002"),(0,l.kt)("h2",{id:"orderby-with-fill"},"ORDER BY Expr WITH FILL Modifier"),(0,l.kt)("p",null,"\u6b64\u4fee\u9970\u7b26\u53ef\u4ee5\u4e0e ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/select/limit#limit-with-ties"},"LIMIT \u2026 WITH TIES modifier")," \u8fdb\u884c\u7ec4\u5408\u4f7f\u7528."),(0,l.kt)("p",null,"\u53ef\u4ee5\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY expr"),"\u4e4b\u540e\u7528\u53ef\u9009\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"FROM expr"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"TO expr"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"STEP expr"),"\u53c2\u6570\u6765\u8bbe\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"WITH FILL"),"\u4fee\u9970\u7b26\u3002\n\u6240\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"expr"),"\u5217\u7684\u7f3a\u5931\u503c\u5c06\u88ab\u987a\u5e8f\u586b\u5145\uff0c\u800c\u5176\u4ed6\u5217\u5c06\u88ab\u586b\u5145\u4e3a\u9ed8\u8ba4\u503c\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u8bed\u6cd5\u586b\u5145\u591a\u5217\uff0c\u5728ORDER BY\u90e8\u5206\u7684\u6bcf\u4e2a\u5b57\u6bb5\u540d\u79f0\u540e\u6dfb\u52a0\u5e26\u6709\u53ef\u9009\u53c2\u6570\u7684WITH FILL\u4fee\u9970\u7b26\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ORDER BY expr [WITH FILL] [FROM const_expr] [TO const_expr] [STEP const_numeric_expr], ... exprN [WITH FILL] [FROM expr] [TO expr] [STEP numeric_expr]\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"WITH FILL")," \u4ec5\u9002\u7528\u4e8e\u5177\u6709\u6570\u5b57\uff08\u6240\u6709\u7c7b\u578b\u7684\u6d6e\u70b9\uff0c\u5c0f\u6570\uff0c\u6574\u6570\uff09\u6216\u65e5\u671f/\u65e5\u671f\u65f6\u95f4\u7c7b\u578b\u7684\u5b57\u6bb5\u3002\n\u5f53\u672a\u5b9a\u4e49 ",(0,l.kt)("inlineCode",{parentName:"p"},"FROM const_expr")," \u586b\u5145\u987a\u5e8f\u65f6\uff0c\u5219\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY")," \u4e2d\u7684\u6700\u5c0f ",(0,l.kt)("inlineCode",{parentName:"p"},"expr")," \u5b57\u6bb5\u503c\u3002\n\u5982\u679c\u672a\u5b9a\u4e49 ",(0,l.kt)("inlineCode",{parentName:"p"},"TO const_expr")," \u586b\u5145\u987a\u5e8f\uff0c\u5219\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY")," \u4e2d\u7684\u6700\u5927",(0,l.kt)("inlineCode",{parentName:"p"},"expr"),"\u5b57\u6bb5\u503c\u3002\n\u5f53\u5b9a\u4e49\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"STEP const_numeric_expr")," \u65f6\uff0c\u5bf9\u4e8e\u6570\u5b57\u7c7b\u578b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"const_numeric_expr")," \u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"as is")," \u89e3\u91ca\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"days")," \u4f5c\u4e3a\u65e5\u671f\u7c7b\u578b\uff0c\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"seconds")," \u89e3\u91ca\u4e3aDateTime\u7c7b\u578b\u3002\n\u5982\u679c\u7701\u7565\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"STEP const_numeric_expr"),"\uff0c\u5219\u586b\u5145\u987a\u5e8f\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"1.0")," \u8868\u793a\u6570\u5b57\u7c7b\u578b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"1 day"),"\u8868\u793a\u65e5\u671f\u7c7b\u578b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"1 second")," \u8868\u793a\u65e5\u671f\u65f6\u95f4\u7c7b\u578b\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\u4e0b\u9762\u7684\u67e5\u8be2\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT n, source FROM (\n   SELECT toFloat32(number % 10) AS n, 'original' AS source\n   FROM numbers(10) WHERE number % 3 = 1\n) ORDER BY n\n")),(0,l.kt)("p",null,"\u8fd4\u56de"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500n\u2500\u252c\u2500source\u2500\u2500\u2500\u2510\n\u2502 1 \u2502 original \u2502\n\u2502 4 \u2502 original \u2502\n\u2502 7 \u2502 original \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u4f46\u662f\u5982\u679c\u914d\u7f6e\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"WITH FILL")," \u4fee\u9970\u7b26"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT n, source FROM (\n   SELECT toFloat32(number % 10) AS n, 'original' AS source\n   FROM numbers(10) WHERE number % 3 = 1\n) ORDER BY n WITH FILL FROM 0 TO 5.51 STEP 0.5\n")),(0,l.kt)("p",null,"\u8fd4\u56de"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500n\u2500\u252c\u2500source\u2500\u2500\u2500\u2510\n\u2502   0 \u2502          \u2502\n\u2502 0.5 \u2502          \u2502\n\u2502   1 \u2502 original \u2502\n\u2502 1.5 \u2502          \u2502\n\u2502   2 \u2502          \u2502\n\u2502 2.5 \u2502          \u2502\n\u2502   3 \u2502          \u2502\n\u2502 3.5 \u2502          \u2502\n\u2502   4 \u2502 original \u2502\n\u2502 4.5 \u2502          \u2502\n\u2502   5 \u2502          \u2502\n\u2502 5.5 \u2502          \u2502\n\u2502   7 \u2502 original \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"For the case when we have multiple fields ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY field2 WITH FILL, field1 WITH FILL")," order of filling will follow the order of fields in ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY")," clause.\n\u5bf9\u4e8e\u6211\u4eec\u6709\u591a\u4e2a\u5b57\u6bb5 ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY field2 WITH FILL, field1 WITH FILL ")," \u7684\u60c5\u51b5\uff0c\u586b\u5145\u987a\u5e8f\u5c06\u9075\u5faa",(0,l.kt)("inlineCode",{parentName:"p"}," ORDER BY"),"\u5b50\u53e5\u4e2d\u5b57\u6bb5\u7684\u987a\u5e8f\u3002"),(0,l.kt)("p",null,"\u793a\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    toDate((number * 10) * 86400) AS d1,\n    toDate(number * 86400) AS d2,\n    'original' AS source\nFROM numbers(10)\nWHERE (number % 3) = 1\nORDER BY\n    d2 WITH FILL,\n    d1 WITH FILL STEP 5;\n")),(0,l.kt)("p",null,"\u8fd4\u56de"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500d1\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500d2\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500source\u2500\u2500\u2500\u2510\n\u2502 1970-01-11 \u2502 1970-01-02 \u2502 original \u2502\n\u2502 1970-01-01 \u2502 1970-01-03 \u2502          \u2502\n\u2502 1970-01-01 \u2502 1970-01-04 \u2502          \u2502\n\u2502 1970-02-10 \u2502 1970-01-05 \u2502 original \u2502\n\u2502 1970-01-01 \u2502 1970-01-06 \u2502          \u2502\n\u2502 1970-01-01 \u2502 1970-01-07 \u2502          \u2502\n\u2502 1970-03-12 \u2502 1970-01-08 \u2502 original \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u5b57\u6bb5 ",(0,l.kt)("inlineCode",{parentName:"p"},"d1")," \u6ca1\u6709\u586b\u5145\u5e76\u4f7f\u7528\u9ed8\u8ba4\u503c\uff0c\u56e0\u4e3a\u6211\u4eec\u6ca1\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"d2")," \u503c\u7684\u91cd\u590d\u503c\uff0c\u5e76\u4e14\u65e0\u6cd5\u6b63\u786e\u8ba1\u7b97 ",(0,l.kt)("inlineCode",{parentName:"p"},"d1")," \u7684\u987a\u5e8f\u3002\n\u4ee5\u4e0b\u67e5\u8be2\u4e2d",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY")," \u4e2d\u7684\u5b57\u6bb5\u5c06\u88ab\u66f4\u6539"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    toDate((number * 10) * 86400) AS d1,\n    toDate(number * 86400) AS d2,\n    'original' AS source\nFROM numbers(10)\nWHERE (number % 3) = 1\nORDER BY\n    d1 WITH FILL STEP 5,\n    d2 WITH FILL;\n")),(0,l.kt)("p",null,"\u8fd4\u56de"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500d1\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500d2\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500source\u2500\u2500\u2500\u2510\n\u2502 1970-01-11 \u2502 1970-01-02 \u2502 original \u2502\n\u2502 1970-01-16 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-01-21 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-01-26 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-01-31 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-05 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-10 \u2502 1970-01-05 \u2502 original \u2502\n\u2502 1970-02-15 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-20 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-02-25 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-03-02 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-03-07 \u2502 1970-01-01 \u2502          \u2502\n\u2502 1970-03-12 \u2502 1970-01-08 \u2502 original \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[52287],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=c(n),d=a,f=b["".concat(u,".").concat(d)]||b[d]||s[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},86169:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={sidebar_position:35,sidebar_label:"\u7b97\u672f\u51fd\u6570"},u="\u7b97\u672f\u51fd\u6570",c={unversionedId:"zh/sql-reference/functions/arithmetic-functions",id:"zh/sql-reference/functions/arithmetic-functions",title:"\u7b97\u672f\u51fd\u6570",description:"arithmetic-functions}",source:"@site/docs/zh/sql-reference/functions/arithmetic-functions.md",sourceDirName:"zh/sql-reference/functions",slug:"/zh/sql-reference/functions/arithmetic-functions",permalink:"/docs/zh/sql-reference/functions/arithmetic-functions",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/functions/arithmetic-functions.md",tags:[],version:"current",sidebarPosition:35,frontMatter:{sidebar_position:35,sidebar_label:"\u7b97\u672f\u51fd\u6570"},sidebar:"chinese",previous:{title:"\u51fd\u6570",permalink:"/docs/zh/sql-reference/functions/"},next:{title:"\u6bd4\u8f83\u51fd\u6570",permalink:"/docs/zh/sql-reference/functions/comparison-functions"}},p={},s=[{value:"plus(a, b), a + b operator",id:"plusa-b-a-b-operator",level:2},{value:"minus(a, b), a - b operator",id:"minusa-b-a-b-operator",level:2},{value:"multiply(a, b), a * b operator",id:"multiplya-b-a-b-operator",level:2},{value:"divide(a, b), a / b operator",id:"dividea-b-a-b-operator",level:2},{value:"intDiv(a,b)",id:"intdiva-b",level:2},{value:"intDivOrZero(a,b)",id:"intdivorzeroa-b",level:2},{value:"modulo(a, b), a % b operator",id:"modulo",level:2},{value:"moduloOrZero(a, b)",id:"modulo-or-zero",level:2},{value:"negate(a), -a operator",id:"negatea-a-operator",level:2},{value:"abs(a)",id:"arithm_func-abs",level:2},{value:"gcd(a,b)",id:"gcda-b",level:2},{value:"lcm(a,b)",id:"lcma-b",level:2}],b={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"arithmetic-functions"},"\u7b97\u672f\u51fd\u6570"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u6240\u6709\u7b97\u672f\u51fd\u6570\uff0c\u7ed3\u679c\u7c7b\u578b\u4e3a\u7ed3\u679c\u9002\u5408\u7684\u6700\u5c0f\u6570\u503c\u7c7b\u578b\uff08\u5982\u679c\u5b58\u5728\u8fd9\u6837\u7684\u7c7b\u578b\uff09\u3002\u6700\u5c0f\u6570\u503c\u7c7b\u578b\u662f\u6839\u636e\u6570\u503c\u7684\u4f4d\u6570\uff0c\u662f\u5426\u6709\u7b26\u53f7\u4ee5\u53ca\u662f\u5426\u662f\u6d6e\u70b9\u7c7b\u578b\u800c\u540c\u65f6\u8fdb\u884c\u7684\u3002\u5982\u679c\u6ca1\u6709\u8db3\u591f\u7684\u4f4d\uff0c\u5219\u91c7\u7528\u6700\u9ad8\u4f4d\u7c7b\u578b\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toTypeName(0), toTypeName(0 + 0), toTypeName(0 + 0 + 0), toTypeName(0 + 0 + 0 + 0)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u250c\u2500toTypeName(0)\u2500\u252c\u2500toTypeName(plus(0, 0))\u2500\u252c\u2500toTypeName(plus(plus(0, 0), 0))\u2500\u252c\u2500toTypeName(plus(plus(plus(0, 0), 0), 0))\u2500\u2510\n\u2502 UInt8         \u2502 UInt16                 \u2502 UInt32                          \u2502 UInt64                                   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"\u7b97\u672f\u51fd\u6570\u9002\u7528\u4e8eUInt8\uff0cUInt16\uff0cUInt32\uff0cUInt64\uff0cInt8\uff0cInt16\uff0cInt32\uff0cInt64\uff0cFloat32\u6216Float64\u4e2d\u7684\u4efb\u4f55\u7c7b\u578b\u3002"),(0,o.kt)("p",null,"\u6ea2\u51fa\u7684\u4ea7\u751f\u65b9\u5f0f\u4e0eC++\u76f8\u540c\u3002"),(0,o.kt)("h2",{id:"plusa-b-a-b-operator"},"plus(a, b), a + b operator"),(0,o.kt)("p",null,"\u8ba1\u7b97\u6570\u503c\u7684\u603b\u548c\u3002\n\u60a8\u8fd8\u53ef\u4ee5\u5c06Date\u6216DateTime\u4e0e\u6574\u6570\u8fdb\u884c\u76f8\u52a0\u3002\u5728Date\u7684\u60c5\u51b5\u4e0b\uff0c\u548c\u6574\u6570\u76f8\u52a0\u6574\u6570\u610f\u5473\u7740\u6dfb\u52a0\u76f8\u5e94\u7684\u5929\u6570\u3002\u5bf9\u4e8eDateTime\uff0c\u8fd9\u610f\u5473\u7740\u6dfb\u52a0\u76f8\u5e94\u7684\u79d2\u6570\u3002"),(0,o.kt)("h2",{id:"minusa-b-a-b-operator"},"minus(a, b), a - b operator"),(0,o.kt)("p",null,"\u8ba1\u7b97\u6570\u503c\u4e4b\u95f4\u7684\u5dee\uff0c\u7ed3\u679c\u603b\u662f\u6709\u7b26\u53f7\u7684\u3002"),(0,o.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u5c06Date\u6216DateTime\u4e0e\u6574\u6570\u8fdb\u884c\u76f8\u51cf\u3002\u89c1\u4e0a\u9762\u7684\u2019plus\u2019\u3002"),(0,o.kt)("h2",{id:"multiplya-b-a-b-operator"},"multiply(a, b), a ","*"," b operator"),(0,o.kt)("p",null,"\u8ba1\u7b97\u6570\u503c\u7684\u4e58\u79ef\u3002"),(0,o.kt)("h2",{id:"dividea-b-a-b-operator"},"divide(a, b), a / b operator"),(0,o.kt)("p",null,"\u8ba1\u7b97\u6570\u503c\u7684\u5546\u3002\u7ed3\u679c\u7c7b\u578b\u59cb\u7ec8\u662f\u6d6e\u70b9\u7c7b\u578b\u3002\n\u5b83\u4e0d\u662f\u6574\u6570\u9664\u6cd5\u3002\u5bf9\u4e8e\u6574\u6570\u9664\u6cd5\uff0c\u8bf7\u4f7f\u7528\u2019intDiv\u2019\u51fd\u6570\u3002\n\u5f53\u9664\u4ee5\u96f6\u65f6\uff0c\u4f60\u5f97\u5230\u2019inf\u2019\uff0c\u2018- inf\u2019\u6216\u2019nan\u2019\u3002"),(0,o.kt)("h2",{id:"intdiva-b"},"intDiv(a,b)"),(0,o.kt)("p",null,"\u8ba1\u7b97\u6570\u503c\u7684\u5546\uff0c\u5411\u4e0b\u820d\u5165\u53d6\u6574\uff08\u6309\u7edd\u5bf9\u503c\uff09\u3002\n\u9664\u4ee5\u96f6\u6216\u5c06\u6700\u5c0f\u8d1f\u6570\u9664\u4ee5-1\u65f6\u629b\u51fa\u5f02\u5e38\u3002"),(0,o.kt)("h2",{id:"intdivorzeroa-b"},"intDivOrZero(a,b)"),(0,o.kt)("p",null,"\u4e0e\u2019intDiv\u2019\u7684\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\u5b83\u5728\u9664\u4ee5\u96f6\u6216\u5c06\u6700\u5c0f\u8d1f\u6570\u9664\u4ee5-1\u65f6\u8fd4\u56de\u96f6\u3002"),(0,o.kt)("h2",{id:"modulo"},"modulo(a, b), a % b operator"),(0,o.kt)("p",null,"\u8ba1\u7b97\u9664\u6cd5\u540e\u7684\u4f59\u6570\u3002\n\u5982\u679c\u53c2\u6570\u662f\u6d6e\u70b9\u6570\uff0c\u5219\u901a\u8fc7\u5220\u9664\u5c0f\u6570\u90e8\u5206\u5c06\u5b83\u4eec\u9884\u8f6c\u6362\u4e3a\u6574\u6570\u3002\n\u5176\u4f59\u90e8\u5206\u4e0eC++\u4e2d\u7684\u542b\u4e49\u76f8\u540c\u3002\u622a\u65ad\u9664\u6cd5\u7528\u4e8e\u8d1f\u6570\u3002\n\u9664\u4ee5\u96f6\u6216\u5c06\u6700\u5c0f\u8d1f\u6570\u9664\u4ee5-1\u65f6\u629b\u51fa\u5f02\u5e38\u3002"),(0,o.kt)("h2",{id:"modulo-or-zero"},"moduloOrZero(a, b)"),(0,o.kt)("p",null,"\u548c",(0,o.kt)("a",{parentName:"p",href:"#modulo"},"modulo"),"\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\uff0c\u9664\u4ee50\u65f6\u7ed3\u679c\u8fd4\u56de0"),(0,o.kt)("h2",{id:"negatea-a-operator"},"negate(a), -a operator"),(0,o.kt)("p",null,"\u901a\u8fc7\u6539\u53d8\u6570\u503c\u7684\u7b26\u53f7\u4f4d\u5bf9\u6570\u503c\u53d6\u53cd\uff0c\u7ed3\u679c\u603b\u662f\u6709\u7b26\u53f7\u7684"),(0,o.kt)("h2",{id:"arithm_func-abs"},"abs(a)"),(0,o.kt)("p",null,"\u8ba1\u7b97\u6570\u503c\uff08a\uff09\u7684\u7edd\u5bf9\u503c\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5982\u679ca \\< 0\uff0c\u5b83\u8fd4\u56de-a\u3002\u5bf9\u4e8e\u65e0\u7b26\u53f7\u7c7b\u578b\uff0c\u5b83\u4e0d\u6267\u884c\u4efb\u4f55\u64cd\u4f5c\u3002\u5bf9\u4e8e\u6709\u7b26\u53f7\u6574\u6570\u7c7b\u578b\uff0c\u5b83\u8fd4\u56de\u65e0\u7b26\u53f7\u6570\u3002"),(0,o.kt)("h2",{id:"gcda-b"},"gcd(a,b)"),(0,o.kt)("p",null,"\u8fd4\u56de\u6570\u503c\u7684\u6700\u5927\u516c\u7ea6\u6570\u3002\n\u9664\u4ee5\u96f6\u6216\u5c06\u6700\u5c0f\u8d1f\u6570\u9664\u4ee5-1\u65f6\u629b\u51fa\u5f02\u5e38\u3002"),(0,o.kt)("h2",{id:"lcma-b"},"lcm(a,b)"),(0,o.kt)("p",null,"\u8fd4\u56de\u6570\u503c\u7684\u6700\u5c0f\u516c\u500d\u6570\u3002\n\u9664\u4ee5\u96f6\u6216\u5c06\u6700\u5c0f\u8d1f\u6570\u9664\u4ee5-1\u65f6\u629b\u51fa\u5f02\u5e38\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/functions/arithmetic_functions/"},"\u6765\u6e90\u6587\u7ae0")," "))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[31909],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return g}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):u(u({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=l(r),g=a,m=s["".concat(c,".").concat(g)]||s[g]||f[g]||i;return r?t.createElement(m,u(u({ref:n},p),{},{components:r})):t.createElement(m,u({ref:n},p))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,u=new Array(i);u[0]=s;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var l=2;l<i;l++)u[l]=r[l];return t.createElement.apply(null,u)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},18666:function(e,n,r){r.r(n),r.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return f}});var t=r(87462),a=r(63366),i=(r(67294),r(3905)),u=["components"],o={sidebar_position:194},c="uniqHLL12",l={unversionedId:"ru/sql-reference/aggregate-functions/reference/uniqhll12",id:"ru/sql-reference/aggregate-functions/reference/uniqhll12",title:"uniqHLL12",description:"agg_function-uniqhll12}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/uniqhll12.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/uniqhll12",permalink:"/ru/sql-reference/aggregate-functions/reference/uniqhll12",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/uniqhll12.md",tags:[],version:"current",sidebarPosition:194,frontMatter:{sidebar_position:194},sidebar:"russia",previous:{title:"uniqCombined64",permalink:"/ru/sql-reference/aggregate-functions/reference/uniqcombined64"},next:{title:"uniqTheta",permalink:"/ru/sql-reference/aggregate-functions/reference/uniqthetasketch"}},p={},f=[],s={toc:f};function g(e){var n=e.components,r=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"agg_function-uniqhll12"},"uniqHLL12"),(0,i.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HyperLogLog"},"HyperLogLog"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"uniqHLL12(x[, ...])\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,i.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0432\u0445\u043e\u0434\u043d\u044b\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432. \u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u0432\u044b\u0445 \u0442\u0438\u043f\u043e\u0432, \u0430 \u0442\u0430\u043a\u0436\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"Tuple"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Array"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Date"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"String"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0445\u044d\u0448\u0430 \u0441 \u0442\u0438\u043f\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/int-uint"},"UInt64"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0414\u0435\u0442\u0430\u043b\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438")),(0,i.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u0445\u044d\u0448 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0438, \u0430 \u0437\u0430\u0442\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0435\u0433\u043e \u0432 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f\u0445.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c HyperLogLog \u0434\u043b\u044f \u0430\u043f\u043f\u0440\u043e\u043a\u0441\u0438\u043c\u0430\u0446\u0438\u0438 \u0447\u0438\u0441\u043b\u0430 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f 2^12 5-\u0431\u0438\u0442\u043e\u0432\u044b\u0445 \u044f\u0447\u0435\u0435\u043a. \u0420\u0430\u0437\u043c\u0435\u0440 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0447\u0443\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 2.5 \u041a\u0411. \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043d\u0435 \u0442\u043e\u0447\u043d\u044b\u0439 (\u043e\u0448\u0438\u0431\u043a\u0430 \u0434\u043e ~10%) \u0434\u043b\u044f \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432 (<10K \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432). \u041e\u0434\u043d\u0430\u043a\u043e \u0434\u043b\u044f \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u043a\u0430\u0440\u0434\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 (10K - 100M) \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0434\u043e\u0432\u043e\u043b\u044c\u043d\u043e \u0442\u043e\u0447\u0435\u043d (\u043e\u0448\u0438\u0431\u043a\u0430 \u0434\u043e ~1.6%). \u041d\u0430\u0447\u0438\u043d\u0430\u044f \u0441 100M \u043e\u0448\u0438\u0431\u043a\u0430 \u043e\u0446\u0435\u043d\u043a\u0438 \u0431\u0443\u0434\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0441\u0442\u0438 \u0438 \u0434\u043b\u044f \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432 \u043e\u0433\u0440\u043e\u043c\u043d\u043e\u0439 \u043a\u0430\u0440\u0434\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 (1B+ \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432) \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0441 \u043e\u0447\u0435\u043d\u044c \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u043d\u0435\u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c\u044e.\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0434\u0435\u0442\u0435\u0440\u043c\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u043d (\u043d\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u043f\u043e\u0440\u044f\u0434\u043a\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430)."))),(0,i.kt)("p",null,"\u041c\u044b \u043d\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u0443 \u0444\u0443\u043d\u043a\u0446\u0438\u044e. \u0412 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u0435 \u0441\u043b\u0443\u0447\u0430\u0435\u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,i.kt)("a",{parentName:"p",href:"/ru/sql-reference/aggregate-functions/reference/uniq#agg_function-uniq"},"uniq")," \u0438\u043b\u0438 ",(0,i.kt)("a",{parentName:"p",href:"/ru/sql-reference/aggregate-functions/reference/uniqcombined#agg_function-uniqcombined"},"uniqCombined"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/aggregate-functions/reference/uniq#agg_function-uniq"},"uniq")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/aggregate-functions/reference/uniqcombined#agg_function-uniqcombined"},"uniqCombined")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/aggregate-functions/reference/uniqexact#agg_function-uniqexact"},"uniqExact"))))}g.isMDXComponent=!0}}]);
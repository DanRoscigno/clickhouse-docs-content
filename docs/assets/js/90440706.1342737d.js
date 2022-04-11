"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[95821],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),k=r,y=c["".concat(o,".").concat(k)]||c[k]||m[k]||i;return n?a.createElement(y,l(l({ref:t},u),{},{components:n})):a.createElement(y,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85670:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],s={},o="system.quotas",p={unversionedId:"zh/operations/system-tables/quotas",id:"zh/operations/system-tables/quotas",title:"system.quotas",description:"system_tables-quotas}",source:"@site/docs/zh/operations/system-tables/quotas.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/quotas",permalink:"/zh/operations/system-tables/quotas",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/zh/operations/system-tables/quotas.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"system.quota_usage",permalink:"/zh/operations/system-tables/quota_usage"},next:{title:"system.quotas_usage",permalink:"/zh/operations/system-tables/quotas_usage"}},u={},m=[{value:"\u53e6\u8bf7\u53c2\u9605",id:"see-also",level:2}],c={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system_tables-quotas"},"system.quotas"),(0,i.kt)("p",null,"\u5305\u542b ",(0,i.kt)("a",{parentName:"p",href:"/zh/operations/system-tables/quotas"},"quotas")," \u4fe1\u606f."),(0,i.kt)("p",null,"\u5217\u4fe1\u606f:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," (",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/string"},"String"),") \u2014 \u914d\u989d\u540d\u79f0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")," (",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/uuid"},"UUID"),") \u2014 \u914d\u989d ID."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"storage"),"(",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/string"},"String"),") \u2014 \u5b58\u50a8\u914d\u989d. \u53ef\u80fd\u7684\u503c\uff1a\u201cusers.xml\u201d(\u5982\u679c\u5728 users.xml \u6587\u4ef6\u4e2d\u914d\u7f6e\u4e86\u914d\u989d), \u201cdisk\u201d(\u5982\u679c\u7531 SQL \u67e5\u8be2\u914d\u7f6e\u7684\u914d\u989d)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"keys")," (",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/array"},"Array"),"(",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/enum"},"Enum8"),")) \u2014 Key\u6307\u5b9a\u914d\u989d\u5e94\u8be5\u5982\u4f55\u5171\u4eab. \u5982\u679c\u4e24\u4e2a\u8fde\u63a5\u4f7f\u7528\u76f8\u540c\u7684\u914d\u989d\u548c\u952e\uff0c\u5219\u5b83\u4eec\u5171\u4eab\u76f8\u540c\u6570\u91cf\u7684\u8d44\u6e90. \u503c:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[]")," \u2014 \u6240\u6709\u7528\u6237\u5171\u4eab\u76f8\u540c\u7684\u914d\u989d."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"['user_name']")," \u2014 \u76f8\u540c\u7528\u6237\u540d\u7684\u8fde\u63a5\u5171\u4eab\u76f8\u540c\u7684\u914d\u989d."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"['ip_address']")," \u2014 \u6765\u81ea\u540c\u4e00IP\u7684\u8fde\u63a5\u5171\u4eab\u76f8\u540c\u7684\u914d\u989d."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"['client_key']")," \u2014 \u5177\u6709\u76f8\u540c\u5bc6\u94a5\u7684\u8fde\u63a5\u5171\u4eab\u76f8\u540c\u914d\u989d. \u5bc6\u94a5\u5fc5\u987b\u7531\u5ba2\u6237\u7aef\u663e\u5f0f\u63d0\u4f9b. \u4f7f\u7528",(0,i.kt)("a",{parentName:"li",href:"/zh/interfaces/cli"},"clickhouse-client"),"\u65f6, \u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"--quota_key")," \u53c2\u6570\u4e2d\u4f20\u9012\u4e00\u4e2akey\u503c, \u6216\u8005\u5728\u5ba2\u6237\u7aef\u914d\u7f6e\u6587\u4ef6\u4e2d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"quota_key")," \u53c2\u6570. \u4f7f\u7528 HTTP \u63a5\u53e3\u65f6, \u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"X-ClickHouse-Quota")," \u62a5\u5934."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"['user_name', 'client_key']")," \u2014 \u5177\u6709\u76f8\u540c ",(0,i.kt)("inlineCode",{parentName:"li"},"client_key")," \u7684\u8fde\u63a5\u5171\u4eab\u76f8\u540c\u7684\u914d\u989d. \u5982\u679c\u5ba2\u6237\u7aef\u6ca1\u6709\u63d0\u4f9b\u5bc6\u94a5, \u914d\u989d\u5c06\u8ddf\u8e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"user_name"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"['client_key', 'ip_address']")," \u2014 \u5177\u6709\u76f8\u540c ",(0,i.kt)("inlineCode",{parentName:"li"},"client_key")," \u7684\u8fde\u63a5\u5171\u4eab\u76f8\u540c\u7684\u914d\u989d. \u5982\u679c\u5ba2\u6237\u7aef\u6ca1\u6709\u63d0\u4f9b\u5bc6\u94a5, \u914d\u989d\u5c06\u8ddf\u8e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"ip_address"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"durations")," (",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/array"},"Array"),"(",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u65f6\u95f4\u95f4\u9694\u4ee5\u79d2\u4e3a\u5355\u4f4d."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apply_to_all")," (",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u903b\u8f91\u503c. \u5b83\u663e\u793a\u4e86\u914d\u989d\u5e94\u7528\u4e8e\u54ea\u4e9b\u7528\u6237. \u503c:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0")," \u2014 \u914d\u989d\u5e94\u7528\u4e8e ",(0,i.kt)("inlineCode",{parentName:"li"},"apply_to_list")," \u4e2d\u6307\u5b9a\u7684\u7528\u6237."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1")," \u2014 \u914d\u989d\u9002\u7528\u4e8e\u9664 ",(0,i.kt)("inlineCode",{parentName:"li"},"apply_to_except")," \u4e2d\u5217\u51fa\u7684\u7528\u6237\u4e4b\u5916\u7684\u6240\u6709\u7528\u6237."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apply_to_list")," (",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/array"},"Array"),"(",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/string"},"String"),")) \u2014 \u9700\u8981\u5e94\u7528\u914d\u989d\u7684\u7528\u6237\u540d/",(0,i.kt)("a",{parentName:"li",href:"/zh/operations/access-rights#role-management"},"\u89d2\u8272")," \u5217\u8868."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apply_to_except")," (",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/array"},"Array"),"(",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/string"},"String"),")) \u2014 \u4e0d\u9700\u8981\u5e94\u7528\u914d\u989d\u7684\u7528\u6237\u540d/\u89d2\u8272\u5217\u8868.")),(0,i.kt)("h2",{id:"see-also"},"\u53e6\u8bf7\u53c2\u9605"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/statements/show#show-quotas-statement"},"\u67e5\u770b\u914d\u989d\u4fe1\u606f"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/quotas"},"\u539f\u59cb\u6587\u7ae0")," "))}k.isMDXComponent=!0}}]);
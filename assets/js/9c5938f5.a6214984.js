"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[15470],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),o=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=o(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=o(r),f=n,k=c["".concat(l,".").concat(f)]||c[f]||m[f]||s;return r?a.createElement(k,p(p({ref:t},u),{},{components:r})):a.createElement(k,p({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,p=new Array(s);p[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var o=2;o<s;o++)p[o]=r[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},90517:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return m}});var a=r(87462),n=r(63366),s=(r(67294),r(3905)),p=["components"],i={},l="system.users",o={unversionedId:"ru/operations/system-tables/users",id:"ru/operations/system-tables/users",title:"system.users",description:"system_tables-users}",source:"@site/docs/ru/operations/system-tables/users.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/users",permalink:"/ru/operations/system-tables/users",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/users.md",tags:[],version:"current",frontMatter:{},sidebar:"russia",previous:{title:"system.trace_log",permalink:"/ru/operations/system-tables/trace_log"},next:{title:"system.zookeeper",permalink:"/ru/operations/system-tables/zookeeper"}},u={},m=[{value:"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435",id:"see-also",level:2}],c={toc:m};function f(e){var t=e.components,r=(0,n.Z)(e,p);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"system_tables-users"},"system.users"),(0,s.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u043f\u0438\u0441\u043e\u043a ",(0,s.kt)("a",{parentName:"p",href:"/ru/operations/access-rights#user-account-management"},"\u0430\u043a\u043a\u0430\u0443\u043d\u0442\u043e\u0432 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"),", \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0445 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435."),(0,s.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"name")," (",(0,s.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"id")," (",(0,s.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/uuid"},"UUID"),") \u2014 ID \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"storage")," (",(0,s.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/string"},"String"),") \u2014 \u041f\u0443\u0442\u044c \u043a \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439. \u041d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0435 ",(0,s.kt)("inlineCode",{parentName:"p"},"access_control_path"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"auth_type")," (",(0,s.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/enum"},"Enum8"),"('no_password' = 0,'plaintext_password' = 1, 'sha256_password' = 2, 'double_sha1_password' = 3)) \u2014 \u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0442\u0438\u043f \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438. \u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u0432 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: \u0431\u0435\u0437 \u043f\u0430\u0440\u043e\u043b\u044f, \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043e\u0431\u044b\u0447\u043d\u043e\u0433\u043e \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u043f\u0430\u0440\u043e\u043b\u044f, \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u044f ","[SHA256]"," (",(0,s.kt)("a",{parentName:"p",href:"https://ru.wikipedia.org/wiki/SHA-2"},"https://ru.wikipedia.org/wiki/SHA-2"),") \u0438\u043b\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u044f ","[double SHA-1]"," (",(0,s.kt)("a",{parentName:"p",href:"https://ru.wikipedia.org/wiki/SHA-1"},"https://ru.wikipedia.org/wiki/SHA-1"),").")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"auth_params")," (",(0,s.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/string"},"String"),") \u2014 \u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 JSON, \u0437\u0430\u0432\u0438\u0441\u044f\u0442 \u043e\u0442 ",(0,s.kt)("inlineCode",{parentName:"p"},"auth_type"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"host_ip")," (",(0,s.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/array"},"Array"),"(",(0,s.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/string"},"String"),")) \u2014 IP-\u0430\u0434\u0440\u0435\u0441\u0430 \u0445\u043e\u0441\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443 ClickHouse.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"host_names")," (",(0,s.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/array"},"Array"),"(",(0,s.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u0418\u043c\u0435\u043d\u0430 \u0445\u043e\u0441\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443 ClickHouse.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"host_names_regexp")," (",(0,s.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/array"},"Array"),"(",(0,s.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u0420\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0438\u043c\u0435\u043d \u0445\u043e\u0441\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443 ClickHouse.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"host_names_like")," (",(0,s.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/array"},"Array"),"(",(0,s.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u0418\u043c\u0435\u043d\u0430 \u0445\u043e\u0441\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443 ClickHouse, \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043f\u0440\u0435\u0434\u0438\u043a\u0430\u0442\u0430 LIKE.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"default_roles_all")," (",(0,s.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u0447\u0442\u043e \u0432\u0441\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0440\u043e\u043b\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"default_roles_list")," (",(0,s.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/array"},"Array"),"(",(0,s.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u0440\u043e\u043b\u0435\u0439 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"default_roles_except")," (",(0,s.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/array"},"Array"),"(",(0,s.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u0412\u0441\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0440\u043e\u043b\u0438 \u0437\u0430\u0434\u0430\u044e\u0442\u0441\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u0437\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0445."))),(0,s.kt)("h2",{id:"see-also"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/ru/sql-reference/statements/show#show-users-statement"},"SHOW USERS"))))}f.isMDXComponent=!0}}]);
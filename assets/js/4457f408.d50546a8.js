"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[54935],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33889:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={},s=void 0,p={unversionedId:"zh/operations/system-tables/role-grants",id:"zh/operations/system-tables/role-grants",title:"role-grants",description:"systemtables-rolegrants}",source:"@site/docs/zh/operations/system-tables/role-grants.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/role-grants",permalink:"/docs/zh/operations/system-tables/role-grants",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/role-grants.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"system.replication_queue",permalink:"/docs/zh/operations/system-tables/replication_queue"},next:{title:"system.roles",permalink:"/docs/zh/operations/system-tables/roles"}},c={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"#system.role_grants {#system_tables-role_grants}"),(0,o.kt)("p",null,"\u5305\u542b\u7528\u6237\u548c\u89d2\u8272\u7684\u89d2\u8272\u6388\u4e88. \u5411\u8be5\u8868\u6dfb\u52a0\u9879, \u8bf7\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"GRANT role TO user"),"."),(0,o.kt)("p",null,"\u5217\u4fe1\u606f:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"user_name")," (",(0,o.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,o.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),")) \u2014 \u7528\u6237\u540d\u79f0.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"role_name")," (",(0,o.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,o.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),")) \u2014 \u89d2\u8272\u540d\u79f0.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"granted_role_name")," (",(0,o.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u6388\u4e88 ",(0,o.kt)("inlineCode",{parentName:"p"},"role_name")," \u89d2\u8272\u7684\u89d2\u8272\u540d\u79f0. \u8981\u5c06\u4e00\u4e2a\u89d2\u8272\u6388\u4e88\u53e6\u4e00\u4e2a\u89d2\u8272, \u8bf7\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"GRANT role1 TO role2"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"granted_role_is_default")," (",(0,o.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u663e\u793a ",(0,o.kt)("inlineCode",{parentName:"p"},"granted_role")," \u662f\u5426\u4e3a\u9ed8\u8ba4\u89d2\u8272\u7684\u6807\u5fd7. \u53c2\u8003\u503c:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"1 \u2014 ",(0,o.kt)("inlineCode",{parentName:"li"},"granted_role")," is a default role."),(0,o.kt)("li",{parentName:"ul"},"0 \u2014 ",(0,o.kt)("inlineCode",{parentName:"li"},"granted_role")," is not a default role."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"with_admin_option")," (",(0,o.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u663e\u793a ",(0,o.kt)("inlineCode",{parentName:"p"},"granted_role")," \u662f\u5426\u662f\u5177\u6709 ",(0,o.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/grant#admin-option-privilege"},"ADMIN OPTION")," \u7279\u6743\u7684\u89d2\u8272\u7684\u6807\u5fd7. \u53c2\u8003\u503c:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"1 \u2014 \u8be5\u89d2\u8272\u5177\u6709 ",(0,o.kt)("inlineCode",{parentName:"li"},"ADMIN OPTION")," \u6743\u9650."),(0,o.kt)("li",{parentName:"ul"},"0 \u2014 \u8be5\u89d2\u8272\u4e0d\u5177\u6709  ",(0,o.kt)("inlineCode",{parentName:"li"},"ADMIN OPTION")," \u6743\u9650.")))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/role-grants"},"\u539f\u59cb\u6587\u7ae0")," "))}d.isMDXComponent=!0}}]);
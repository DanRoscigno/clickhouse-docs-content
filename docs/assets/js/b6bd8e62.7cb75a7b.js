"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[32059],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=o(n),f=a,k=m["".concat(p,".").concat(f)]||m[f]||u[f]||s;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var o=2;o<s;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51903:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return u}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),l=["components"],i={},p="grants",o={unversionedId:"en/operations/system-tables/grants",id:"en/operations/system-tables/grants",title:"grants",description:"system_tables-grants}",source:"@site/docs/en/operations/system-tables/grants.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/grants",permalink:"/en/operations/system-tables/grants",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/en/operations/system-tables/grants.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"functions",permalink:"/en/operations/system-tables/functions"},next:{title:"graphite_retentions",permalink:"/en/operations/system-tables/graphite_retentions"}},c={},u=[],m={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"system_tables-grants"},"grants"),(0,s.kt)("p",null,"Privileges granted to ClickHouse user accounts."),(0,s.kt)("p",null,"Columns:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"user_name")," (",(0,s.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,s.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),")) \u2014 User name.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"role_name")," (",(0,s.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,s.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),")) \u2014 Role assigned to user account.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"access_type")," (",(0,s.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/enum"},"Enum8"),") \u2014 Access parameters for ClickHouse user account.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"database")," (",(0,s.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,s.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),")) \u2014 Name of a database.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"table")," (",(0,s.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,s.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),")) \u2014 Name of a table.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"column")," (",(0,s.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,s.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),")) \u2014 Name of a column to which access is granted.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"is_partial_revoke")," (",(0,s.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 Logical value. It shows whether some privileges have been revoked. Possible values:")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"0")," \u2014 The row describes a partial revoke.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"1")," \u2014 The row describes a grant.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"grant_option")," (",(0,s.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 Permission is granted ",(0,s.kt)("inlineCode",{parentName:"p"},"WITH GRANT OPTION"),", see ",(0,s.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/grant#grant-privigele-syntax"},"GRANT"),"."))),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/grants"},"Original article")," "))}f.isMDXComponent=!0}}]);
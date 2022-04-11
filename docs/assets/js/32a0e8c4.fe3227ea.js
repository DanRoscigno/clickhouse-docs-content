"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[73416],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,y=u["".concat(l,".").concat(m)]||u[m]||f[m]||s;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},16654:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return f}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),i=["components"],o={},l="settings_profiles",p={unversionedId:"en/operations/system-tables/settings_profiles",id:"en/operations/system-tables/settings_profiles",title:"settings_profiles",description:"systemtables-settingsprofiles}",source:"@site/docs/en/operations/system-tables/settings_profiles.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/settings_profiles",permalink:"/en/operations/system-tables/settings_profiles",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/en/operations/system-tables/settings_profiles.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"settings_profile_elements",permalink:"/en/operations/system-tables/settings_profile_elements"},next:{title:"stack_trace",permalink:"/en/operations/system-tables/stack_trace"}},c={},f=[{value:"See Also",id:"see-also",level:2}],u={toc:f};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"system_tables-settings_profiles"},"settings_profiles"),(0,s.kt)("p",null,"Contains properties of configured setting profiles."),(0,s.kt)("p",null,"Columns:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"name")," (",(0,s.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 Setting profile name.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"id")," (",(0,s.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/uuid"},"UUID"),") \u2014 Setting profile ID.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"storage")," (",(0,s.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 Path to the storage of setting profiles. Configured in the ",(0,s.kt)("inlineCode",{parentName:"p"},"access_control_path")," parameter.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"num_elements")," (",(0,s.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 Number of elements for this profile in the ",(0,s.kt)("inlineCode",{parentName:"p"},"system.settings_profile_elements")," table.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"apply_to_all")," (",(0,s.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 Shows that the settings profile set for all roles and/or users.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"apply_to_list")," (",(0,s.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/array"},"Array"),"(",(0,s.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),")) \u2014 List of the roles and/or users to which the setting profile is applied.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"apply_to_except")," (",(0,s.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/array"},"Array"),"(",(0,s.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),")) \u2014 The setting profile is applied to all roles and/or users excepting of the listed ones."))),(0,s.kt)("h2",{id:"see-also"},"See Also"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/en/sql-reference/statements/show#show-profiles-statement"},"SHOW PROFILES"))),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/settings_profiles"},"Original article")," "))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[46277],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,y=m["".concat(l,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80946:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={},l="system.storage_policies",p={unversionedId:"zh/operations/system-tables/storage_policies",id:"zh/operations/system-tables/storage_policies",title:"system.storage_policies",description:"systemtables-storagepolicies}",source:"@site/docs/zh/operations/system-tables/storage_policies.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/storage_policies",permalink:"/zh/operations/system-tables/storage_policies",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/storage_policies.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"system.stack_trace",permalink:"/zh/operations/system-tables/stack_trace"},next:{title:"\u7cfb\u7edf\u3002\u8868_engines",permalink:"/zh/operations/system-tables/table_engines"}},c={},u=[],m={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system_tables-storage_policies"},"system.storage_policies"),(0,i.kt)("p",null,"\u5305\u542b\u6709\u5173 ",(0,i.kt)("a",{parentName:"p",href:"/zh/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-multiple-volumes_configure"},"\u670d\u52a1\u5668\u914d\u7f6e")," \u4e2d\u5b9a\u4e49\u7684\u5b58\u50a8\u7b56\u7565\u548c\u5377\u4fe1\u606f\u3002"),(0,i.kt)("p",null,"\u5217:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"policy_name")," (",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/string"},"String"),") \u2014 \u5b58\u50a8\u7b56\u7565\u7684\u540d\u79f0\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"volume_name")," (",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/string"},"String"),") \u2014 \u5b58\u50a8\u7b56\u7565\u4e2d\u5b9a\u4e49\u7684\u5377\u540d\u79f0\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"volume_priority")," (",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u914d\u7f6e\u4e2d\u7684\u5377\u987a\u5e8f\u53f7\uff0c\u6570\u636e\u6839\u636e\u8fd9\u4e2a\u4f18\u5148\u7ea7\u586b\u5145\u5377\uff0c\u6bd4\u5982\u63d2\u5165\u548c\u5408\u5e76\u671f\u95f4\u7684\u6570\u636e\u5c06\u88ab\u5199\u5165\u4f18\u5148\u7ea7\u8f83\u4f4e\u7684\u5377 (\u8fd8\u9700\u8003\u8651\u5176\u4ed6\u89c4\u5219: TTL, ",(0,i.kt)("inlineCode",{parentName:"li"},"max_data_part_size"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"move_factor"),")\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"disks")," (",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/array"},"Array(String)"),") \u2014 \u5b58\u50a8\u7b56\u7565\u4e2d\u5b9a\u4e49\u7684\u78c1\u76d8\u540d\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_data_part_size")," (",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u53ef\u4ee5\u5b58\u50a8\u5728\u5377\u78c1\u76d8\u4e0a\u6570\u636e\u90e8\u5206\u7684\u6700\u5927\u5927\u5c0f (0 - \u4e0d\u9650\u5236)\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"move_factor")," (",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/float"},"Float64"),") \u2014 \u78c1\u76d8\u7a7a\u95f2\u7684\u6bd4\u7387\u3002\u5f53\u6bd4\u7387\u8d85\u8fc7\u914d\u7f6e\u7684\u503c\uff0cClickHouse \u5c06\u628a\u6570\u636e\u5411\u4e0b\u4e00\u4e2a\u5377\u79fb\u52a8\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prefer_not_to_merge")," (",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 \u8bbe\u7f6e\u4e2d ",(0,i.kt)("inlineCode",{parentName:"li"},"prefer_not_to_merge")," \u7684\u503c. \u5f53\u8fd9\u4e2a\u8bbe\u7f6e\u542f\u7528\u65f6\uff0c\u4e0d\u5141\u8bb8\u5728\u6b64\u5377\u4e0a\u5408\u5e76\u6570\u636e\u3002\u8fd9\u5c06\u5141\u8bb8\u63a7\u5236 ClickHouse \u5982\u4f55\u4e0e\u8fd0\u884c\u901f\u5ea6\u8f83\u6162\u7684\u78c1\u76d8\u4e00\u8d77\u5de5\u4f5c\u3002")),(0,i.kt)("p",null,"\u5982\u679c\u5b58\u50a8\u7b56\u7565\u5305\u542b\u591a\u4e2a\u5377\uff0c\u5219\u6bcf\u4e2a\u5377\u7684\u4fe1\u606f\u5c06\u5728\u8868\u4e2d\u4f5c\u4e3a\u5355\u72ec\u4e00\u884c\u5b58\u50a8\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/operations/system-tables/storage_policies"},"\u539f\u6587")," "))}f.isMDXComponent=!0}}]);
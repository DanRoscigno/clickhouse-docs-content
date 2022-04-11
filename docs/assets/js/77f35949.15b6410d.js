"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[33619],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(r),m=n,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return r?i.createElement(d,a(a({ref:t},u),{},{components:r})):i.createElement(d,a({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},12532:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var i=r(87462),n=r(63366),o=(r(67294),r(3905)),a=["components"],s={sidebar_position:56,sidebar_label:"Utilities"},l="ClickHouse Utility",c={unversionedId:"en/operations/utilities/index",id:"en/operations/utilities/index",title:"ClickHouse Utility",description:"-   clickhouse-local \u2014 Allows running SQL queries on data without starting the ClickHouse server, similar to how awk does this.",source:"@site/docs/en/operations/utilities/index.md",sourceDirName:"en/operations/utilities",slug:"/en/operations/utilities/",permalink:"/en/operations/utilities/",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/en/operations/utilities/index.md",tags:[],version:"current",sidebarPosition:56,frontMatter:{sidebar_position:56,sidebar_label:"Utilities"},sidebar:"english",previous:{title:"Server Settings",permalink:"/en/operations/server-configuration-parameters/settings"},next:{title:"clickhouse-copier",permalink:"/en/operations/utilities/clickhouse-copier"}},u={},p=[],f={toc:p};function m(e){var t=e.components,r=(0,n.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"clickhouse-utility"},"ClickHouse Utility"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/en/operations/utilities/clickhouse-local"},"clickhouse-local")," \u2014 Allows running SQL queries on data without starting the ClickHouse server, similar to how ",(0,o.kt)("inlineCode",{parentName:"li"},"awk")," does this."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/en/operations/utilities/clickhouse-copier"},"clickhouse-copier")," \u2014 Copies (and reshards) data from one cluster to another cluster."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/en/operations/utilities/clickhouse-benchmark"},"clickhouse-benchmark")," \u2014 Loads server with the custom queries and settings."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/en/operations/utilities/clickhouse-format"},"clickhouse-format")," \u2014 Enables formatting input queries."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/en/operations/utilities/clickhouse-obfuscator"},"ClickHouse obfuscator")," \u2014 Obfuscates data."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/en/operations/utilities/clickhouse-compressor"},"ClickHouse compressor")," \u2014 Compresses and decompresses data."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/en/operations/utilities/odbc-bridge"},"clickhouse-odbc-bridge")," \u2014 A proxy server for ODBC driver.")))}m.isMDXComponent=!0}}]);
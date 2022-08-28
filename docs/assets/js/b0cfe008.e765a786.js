"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[40687],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=u(r),d=i,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||c;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,o=new Array(c);o[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var u=2;u<c;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},54278:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var n=r(87462),i=r(63366),c=(r(67294),r(3905)),o=["components"],a={slug:"/en/interfaces/jdbc",sidebar_position:22,sidebar_label:"JDBC Driver"},s="JDBC Driver",u={unversionedId:"en/interfaces/jdbc",id:"en/interfaces/jdbc",title:"JDBC Driver",description:"Use the official JDBC driver (and Java client) to access ClickHouse from your Java applications.",source:"@site/docs/en/interfaces/jdbc.md",sourceDirName:"en/interfaces",slug:"/en/interfaces/jdbc",permalink:"/docs/en/interfaces/jdbc",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/interfaces/jdbc.md",tags:[],version:"current",sidebarPosition:22,frontMatter:{slug:"/en/interfaces/jdbc",sidebar_position:22,sidebar_label:"JDBC Driver"},sidebar:"english",previous:{title:"Input and Output Formats",permalink:"/docs/en/interfaces/formats"},next:{title:"ODBC Driver",permalink:"/docs/en/interfaces/odbc"}},l={},p=[],f={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"jdbc-driver"},"JDBC Driver"),(0,c.kt)("p",null,"Use the ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/clickhouse-jdbc"},"official JDBC driver")," (and Java client) to access ClickHouse from your Java applications."),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Third-party drivers:",(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://github.com/housepower/ClickHouse-Native-JDBC"},"ClickHouse-Native-JDBC")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://github.com/blynkkk/clickhouse4j"},"clickhouse4j"))))),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/interfaces/jdbc/"},"Original article")," "))}d.isMDXComponent=!0}}]);
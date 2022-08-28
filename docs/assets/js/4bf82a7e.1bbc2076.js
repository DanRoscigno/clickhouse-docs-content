"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[88885],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(r),d=i,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},70828:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],c={slug:"/en/interfaces/overview",sidebar_label:"Overview",sidebar_position:1,keywords:["clickhouse","network","interfaces","http","tcp","grpc","command-line","client","jdbc","odbc","driver"],description:"ClickHouse provides three network interfaces"},l="Interfaces",s={unversionedId:"en/interfaces/overview",id:"en/interfaces/overview",title:"Interfaces",description:"ClickHouse provides three network interfaces",source:"@site/docs/en/interfaces/overview.md",sourceDirName:"en/interfaces",slug:"/en/interfaces/overview",permalink:"/docs/en/interfaces/overview",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/interfaces/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/en/interfaces/overview",sidebar_label:"Overview",sidebar_position:1,keywords:["clickhouse","network","interfaces","http","tcp","grpc","command-line","client","jdbc","odbc","driver"],description:"ClickHouse provides three network interfaces"},sidebar:"english",previous:{title:"Interfaces",permalink:"/docs/en/interfaces"},next:{title:"Command-Line Client",permalink:"/docs/en/interfaces/cli"}},p={},u=[],f={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interfaces"},"Interfaces"),(0,a.kt)("p",null,"ClickHouse provides three network interfaces (they can be optionally wrapped in TLS for additional security):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/interfaces/http"},"HTTP"),", which is documented and easy to use directly."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/interfaces/tcp"},"Native TCP"),", which has less overhead."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/interfaces/grpc"},"gRPC"),".")),(0,a.kt)("p",null,"In most cases it is recommended to use an appropriate tool or library instead of interacting with those directly. The following are officially supported by ClickHouse:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/interfaces/cli"},"Command-line client")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/interfaces/jdbc"},"JDBC driver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/interfaces/odbc"},"ODBC driver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/interfaces/cpp"},"C++ client library"))),(0,a.kt)("p",null,"There are also a wide range of third-party libraries for working with ClickHouse:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/interfaces/third-party/client-libraries"},"Client libraries")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/interfaces/third-party/integrations"},"Integrations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/interfaces/third-party/gui"},"Visual interfaces"))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[25637,42018],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||l[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},10331:function(e,t,r){r.d(t,{ZP:function(){return c}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={toc:[]};function c(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This page is not applicable to ClickHouse Cloud. The feature documented here is not available in ClickHouse Cloud services.\nSee the ClickHouse ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/whats-new/cloud-compatibility"},"Cloud Compatibility")," guide for more information."))))}c.isMDXComponent=!0},79271:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=r(10331),s=["components"],c={slug:"/en/operations/performance-test",sidebar_position:54,sidebar_label:"Testing Hardware",title:"How to Test Your Hardware with ClickHouse"},u=void 0,p={unversionedId:"en/operations/performance-test",id:"en/operations/performance-test",title:"How to Test Your Hardware with ClickHouse",description:"You can run a basic ClickHouse performance test on any server without installation of ClickHouse packages.",source:"@site/docs/en/operations/performance-test.md",sourceDirName:"en/operations",slug:"/en/operations/performance-test",permalink:"/docs/en/operations/performance-test",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/performance-test.md",tags:[],version:"current",sidebarPosition:54,frontMatter:{slug:"/en/operations/performance-test",sidebar_position:54,sidebar_label:"Testing Hardware",title:"How to Test Your Hardware with ClickHouse"},sidebar:"english",previous:{title:"Query Profiling",permalink:"/docs/en/operations/optimizing-performance/sampling-query-profiler"},next:{title:"Caches",permalink:"/docs/en/operations/caches"}},l={},m=[{value:"Automated Run",id:"automated-run",level:2}],d={toc:m};function f(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.ZP,{mdxType:"SelfManaged"}),(0,a.kt)("p",null,"You can run a basic ClickHouse performance test on any server without installation of ClickHouse packages."),(0,a.kt)("h2",{id:"automated-run"},"Automated Run"),(0,a.kt)("p",null,"You can run the benchmark with a single script."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the script.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"wget https://raw.githubusercontent.com/ClickHouse/ClickBench/main/hardware/hardware.sh\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Run the script.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"chmod a+x ./hardware.sh\n./hardware.sh\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Copy the output and send it to ",(0,a.kt)("a",{parentName:"li",href:"mailto:feedback@clickhouse.com"},"feedback@clickhouse.com"))),(0,a.kt)("p",null,"All the results are published here: ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/benchmark/hardware/"},"https://clickhouse.com/benchmark/hardware/")))}f.isMDXComponent=!0},78734:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=r(79271),s=["components"],c={slug:"/ru/operations/performance-test",sidebar_position:54,sidebar_label:"Testing Hardware",title:"How to Test Your Hardware with ClickHouse"},u=void 0,p={unversionedId:"ru/operations/performance-test",id:"ru/operations/performance-test",title:"How to Test Your Hardware with ClickHouse",description:"",source:"@site/docs/ru/operations/performance-test.mdx",sourceDirName:"ru/operations",slug:"/ru/operations/performance-test",permalink:"/docs/ru/operations/performance-test",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/performance-test.mdx",tags:[],version:"current",sidebarPosition:54,frontMatter:{slug:"/ru/operations/performance-test",sidebar_position:54,sidebar_label:"Testing Hardware",title:"How to Test Your Hardware with ClickHouse"},sidebar:"russia",previous:{title:"system.zookeeper_log",permalink:"/docs/ru/operations/system-tables/zookeeper_log"},next:{title:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0441\u0435\u0440\u0432\u0435\u0440\u0430",permalink:"/docs/ru/operations/server-configuration-parameters/"}},l={},m=[],d={toc:m};function f(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.default,{mdxType:"Content"}))}f.isMDXComponent=!0}}]);
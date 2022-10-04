"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[90060],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},45998:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={slug:"/en/guides/sre/network-ports",sidebar_label:"Network ports"},s="Network ports",p={unversionedId:"en/guides/sre/network-ports",id:"en/guides/sre/network-ports",title:"Network ports",description:"Ports described as default mean that the port number is configured in /etc/clickhouse-server/config.xml.  To customize your settings add a file to /etc/clickhouse-server/config.d/.  See the configuration file documentation.",source:"@site/docs/en/guides/sre/network-ports.md",sourceDirName:"en/guides/sre",slug:"/en/guides/sre/network-ports",permalink:"/docs/en/guides/sre/network-ports",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/guides/sre/network-ports.md",tags:[],version:"current",frontMatter:{slug:"/en/guides/sre/network-ports",sidebar_label:"Network ports"},sidebar:"english",previous:{title:"Configuring SSL-TLS",permalink:"/docs/en/guides/sre/configuring-ssl"},next:{title:"External Disks for Storing Data",permalink:"/docs/en/operations/storing-data"}},c={},u=[],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"network-ports"},"Network ports"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Ports described as ",(0,o.kt)("strong",{parentName:"p"},"default")," mean that the port number is configured in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/clickhouse-server/config.xml"),".  To customize your settings add a file to ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/clickhouse-server/config.d/"),".  See the ",(0,o.kt)("a",{parentName:"p",href:"../../operations/configuration-files/#override"},"configuration file")," documentation."))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Port"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2181"),(0,o.kt)("td",{parentName:"tr",align:null},"Zookeeper default service port. ",(0,o.kt)("strong",{parentName:"td"},"Note: see ",(0,o.kt)("inlineCode",{parentName:"strong"},"9181")," for ClickHouse Keeper"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"8123"),(0,o.kt)("td",{parentName:"tr",align:null},"HTTP API Port for http requests. used by JDBC, ODBC and web interfaces.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"8443"),(0,o.kt)("td",{parentName:"tr",align:null},"HTTP SSL/TLS port default port")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9000"),(0,o.kt)("td",{parentName:"tr",align:null},"Native Protocol port (also referred to as ClickHouse TCP protocol). Used by ClickHouse apps and processes like ",(0,o.kt)("inlineCode",{parentName:"td"},"clickhouse-server"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"clickhouse-client"),", and native ClickHouse tools. used for inter-server communication for distributed queries.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9004"),(0,o.kt)("td",{parentName:"tr",align:null},"MySQL emulation port")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9005"),(0,o.kt)("td",{parentName:"tr",align:null},"PostgreSQL emulation port (also used for secure comms if SSL is enabled for ClickHouse)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9009"),(0,o.kt)("td",{parentName:"tr",align:null},"Inter-server communication port for low-level data access.  used for data exchange, replication, inter-server communication")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9010"),(0,o.kt)("td",{parentName:"tr",align:null},"SSL/TLS for inter-server communications")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9011"),(0,o.kt)("td",{parentName:"tr",align:null},"Native protocol PROXYv1 protocol port")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9019"),(0,o.kt)("td",{parentName:"tr",align:null},"JDBC Bridge")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9100"),(0,o.kt)("td",{parentName:"tr",align:null},"gRPC port")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9181"),(0,o.kt)("td",{parentName:"tr",align:null},"Recommended ClickHouse Keeper port")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9234"),(0,o.kt)("td",{parentName:"tr",align:null},"Recommended ClickHouse Keeper Raft port (also used for secure comms if ",(0,o.kt)("inlineCode",{parentName:"td"},"<secure>1</secure>")," enabled)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9363"),(0,o.kt)("td",{parentName:"tr",align:null},"Prometheus default metrics port")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9281"),(0,o.kt)("td",{parentName:"tr",align:null},"Recommended Secure SSL ClickHouse Keeper port")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"9440"),(0,o.kt)("td",{parentName:"tr",align:null},"Native protocol SSL/TLS port")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"42000"),(0,o.kt)("td",{parentName:"tr",align:null},"Graphite default port")))))}m.isMDXComponent=!0}}]);
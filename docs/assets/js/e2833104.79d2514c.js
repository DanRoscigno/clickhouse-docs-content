"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[57247],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),y=s,b=m["".concat(o,".").concat(y)]||m[y]||u[y]||a;return n?r.createElement(b,c(c({ref:t},p),{},{components:n})):r.createElement(b,c({ref:t},p))}));function y(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97250:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return y},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=n(87462),s=n(63366),a=(n(67294),n(3905)),c=["components"],i={},o="system.licenses {#system-tables_system.licenses}",l={unversionedId:"ru/operations/system-tables/licenses",id:"ru/operations/system-tables/licenses",title:"system.licenses {#system-tables_system.licenses}",description:"system-tables_system.licenses}",source:"@site/docs/ru/operations/system-tables/licenses.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/licenses",permalink:"/ru/operations/system-tables/licenses",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/ru/operations/system-tables/licenses.md",tags:[],version:"current",frontMatter:{},sidebar:"russia",previous:{title:"INFORMATION_SCHEMA",permalink:"/ru/operations/system-tables/information_schema"},next:{title:"merge_tree_settings",permalink:"/ru/operations/system-tables/merge_tree_settings"}},p={},u=[],m={toc:u};function y(e){var t=e.components,n=(0,s.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"systemlicenses-system-tables_systemlicenses"},"system.licenses {#system-tables_system.licenses}"),(0,a.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043b\u0438\u0446\u0435\u043d\u0437\u0438\u044f\u0445 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0445 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/tree/master/contrib"},"contrib")," \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0445 \u043a\u043e\u0434\u043e\u0432 ClickHouse."),(0,a.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"library_name")," (",(0,a.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/string"},"String"),") \u2014 \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438, \u043a \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0441\u044f \u043b\u0438\u0446\u0435\u043d\u0437\u0438\u044f."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"license_type")," (",(0,a.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0422\u0438\u043f \u043b\u0438\u0446\u0435\u043d\u0437\u0438\u0438, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, Apache, MIT."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"license_path")," (",(0,a.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/string"},"String"),") \u2014 \u041f\u0443\u0442\u044c \u043a \u0444\u0430\u0439\u043b\u0443 \u0441 \u0442\u0435\u043a\u0441\u0442\u043e\u043c \u043b\u0438\u0446\u0435\u043d\u0437\u0438\u0438."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"license_text")," (",(0,a.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0422\u0435\u043a\u0441\u0442 \u043b\u0438\u0446\u0435\u043d\u0437\u0438\u0438.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT library_name, license_type, license_path FROM system.licenses LIMIT 15\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500library_name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500license_type\u2500\u252c\u2500license_path\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 FastMemcpy         \u2502 MIT          \u2502 /contrib/FastMemcpy/LICENSE         \u2502\n\u2502 arrow              \u2502 Apache       \u2502 /contrib/arrow/LICENSE.txt          \u2502\n\u2502 avro               \u2502 Apache       \u2502 /contrib/avro/LICENSE.txt           \u2502\n\u2502 aws-c-common       \u2502 Apache       \u2502 /contrib/aws-c-common/LICENSE       \u2502\n\u2502 aws-c-event-stream \u2502 Apache       \u2502 /contrib/aws-c-event-stream/LICENSE \u2502\n\u2502 aws-checksums      \u2502 Apache       \u2502 /contrib/aws-checksums/LICENSE      \u2502\n\u2502 aws                \u2502 Apache       \u2502 /contrib/aws/LICENSE.txt            \u2502\n\u2502 base64             \u2502 BSD 2-clause \u2502 /contrib/base64/LICENSE             \u2502\n\u2502 boost              \u2502 Boost        \u2502 /contrib/boost/LICENSE_1_0.txt      \u2502\n\u2502 brotli             \u2502 MIT          \u2502 /contrib/brotli/LICENSE             \u2502\n\u2502 capnproto          \u2502 MIT          \u2502 /contrib/capnproto/LICENSE          \u2502\n\u2502 cassandra          \u2502 Apache       \u2502 /contrib/cassandra/LICENSE.txt      \u2502\n\u2502 cctz               \u2502 Apache       \u2502 /contrib/cctz/LICENSE.txt           \u2502\n\u2502 cityhash102        \u2502 MIT          \u2502 /contrib/cityhash102/COPYING        \u2502\n\u2502 cppkafka           \u2502 BSD 2-clause \u2502 /contrib/cppkafka/LICENSE           \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")))}y.isMDXComponent=!0}}]);
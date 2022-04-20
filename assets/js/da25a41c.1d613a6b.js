"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[12299],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,k=c["".concat(o,".").concat(d)]||c[d]||m[d]||i;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},57194:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],s={},o="system.query_views_log",u={unversionedId:"ru/operations/system-tables/query_views_log",id:"ru/operations/system-tables/query_views_log",title:"system.query_views_log",description:"systemtables-queryviews_log}",source:"@site/docs/ru/operations/system-tables/query_views_log.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/query_views_log",permalink:"/docs/ru/operations/system-tables/query_views_log",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/query_views_log.md",tags:[],version:"current",frontMatter:{},sidebar:"russia",previous:{title:"system.query_thread_log",permalink:"/docs/ru/operations/system-tables/query_thread_log"},next:{title:"system.quota_limits",permalink:"/docs/ru/operations/system-tables/quota_limits"}},p={},m=[],c={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system_tables-query_views_log"},"system.query_views_log"),(0,i.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0445 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f\u0445, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0445 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0442\u0438\u043f \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438\u043b\u0438 \u0432\u0440\u0435\u043c\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f."),(0,i.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0436\u0443\u0440\u043d\u0430\u043b\u0430:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/operations/server-configuration-parameters/settings#server_configuration_parameters-query_views_log"},"query_views_log"),"."),(0,i.kt)("li",{parentName:"ol"},"\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/operations/settings/#settings-log-query-views"},"log_query_views=1"),".")),(0,i.kt)("p",null,"\u041f\u0435\u0440\u0438\u043e\u0434 \u0441\u0431\u0440\u043e\u0441\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u0431\u0443\u0444\u0435\u0440\u0430 \u0432 \u043f\u0430\u043c\u044f\u0442\u0438 \u0437\u0430\u0434\u0430\u0435\u0442\u0441\u044f \u0432 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"flush_interval_milliseconds")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0430 ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/operations/server-configuration-parameters/settings#server_configuration_parameters-query_views_log"},"query_views_log"),". \u0414\u043b\u044f \u043f\u0440\u0438\u043d\u0443\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0431\u0440\u043e\u0441\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441 ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/system#query_language-system-flush_logs"},"SYSTEM FLUSH LOGS"),"."),(0,i.kt)("p",null,"ClickHouse \u043d\u0435 \u0443\u0434\u0430\u043b\u044f\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438. \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0440\u0430\u0437\u0434\u0435\u043b ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/operations/system-tables/#system-tables-introduction"},"\u0421\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b"),"."),(0,i.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0443\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u043c\u044b\u0445 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"query_views_log"),", \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/operations/settings/#log-queries-probability"},"log_queries_probability"),"."),(0,i.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event_date")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/date"},"Date"),") \u2014 \u0434\u0430\u0442\u0430, \u043a\u043e\u0433\u0434\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u0435 \u0441 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event_time")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/datetime"},"DateTime"),") \u2014 \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event_time_microseconds")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/datetime"},"DateTime"),") \u2014 \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0441 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c\u044e \u0434\u043e \u043c\u0438\u043a\u0440\u043e\u0441\u0435\u043a\u0443\u043d\u0434."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"view_duration_ms")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f (\u0441\u0443\u043c\u043c\u0430 \u0435\u0433\u043e \u044d\u0442\u0430\u043f\u043e\u0432) \u0432 \u043c\u0438\u043b\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initial_query_id")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 (\u043f\u0440\u0438 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u043e\u043c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"view_name")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"view_uuid")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/uuid"},"UUID"),") \u2014 UUID \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"view_type")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/enum"},"Enum8"),") \u2014 \u0442\u0438\u043f \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'Default' = 1")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/create/view#normal"},"\u043e\u0431\u044b\u0447\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f"),". \u041d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u043f\u043e\u044f\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u0432 \u044d\u0442\u043e\u043c \u0436\u0443\u0440\u043d\u0430\u043b\u0435."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'Materialized' = 2")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/create/view#materialized"},"\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'Live' = 3")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/create/view#live-view"},"live \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"view_query")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0437\u0430\u043f\u0440\u043e\u0441, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0439 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"view_target")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u0446\u0435\u043b\u0435\u0432\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"read_rows")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0445 \u0441\u0442\u0440\u043e\u043a."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"read_bytes")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0445 \u0431\u0430\u0439\u0442."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"written_rows")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0445 \u0441\u0442\u0440\u043e\u043a."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"written_bytes")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt64"),") \u2014 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0445 \u0431\u0430\u0439\u0442."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"peak_memory_usage")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"Int64"),") \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0440\u0430\u0437\u043d\u0438\u0446\u0430 \u043c\u0435\u0436\u0434\u0443 \u043e\u0431\u044a\u0435\u043c\u043e\u043c \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0438 \u043e\u0441\u0432\u043e\u0431\u043e\u0436\u0434\u0435\u043d\u043d\u043e\u0439 \u043f\u0430\u043c\u044f\u0442\u0438 \u0432 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0435 \u044d\u0442\u043e\u0433\u043e \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ProfileEvents")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/array"},"Map(String, UInt64)"),") \u2014 \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0437\u043c\u0435\u0440\u044f\u044e\u0442 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0438. \u0418\u0445 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0439\u0442\u0438 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/operations/system-tables/events#system_tables-events"},"system.events"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/enum"},"Enum8"),") \u2014 \u0441\u0442\u0430\u0442\u0443\u0441 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'QueryStart' = 1")," \u2014 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0435 \u043d\u0430\u0447\u0430\u043b\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f. \u041d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'QueryFinish' = 2")," \u2014 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'ExceptionBeforeStart' = 3")," \u2014 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0434\u043e \u043d\u0430\u0447\u0430\u043b\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'ExceptionWhileProcessing' = 4")," \u2014 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"exception_code")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"Int32"),") \u2014 \u043a\u043e\u0434 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"exception")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stack_trace")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 ",(0,i.kt)("a",{parentName:"li",href:"https://ru.wikipedia.org/wiki/%D0%A2%D1%80%D0%B0%D1%81%D1%81%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0_%D1%81%D1%82%D0%B5%D0%BA%D0%B0"},"\u0442\u0440\u0430\u0441\u0441\u0438\u0440\u043e\u0432\u043a\u0430 \u0441\u0442\u0435\u043a\u0430"),". \u041f\u0443\u0441\u0442\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430, \u0435\u0441\u043b\u0438 \u0437\u0430\u043f\u0440\u043e\u0441 \u0431\u044b\u043b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,i.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.query_views_log LIMIT 1 \\G;\n")),(0,i.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nevent_date:              2021-06-22\nevent_time:              2021-06-22 13:23:07\nevent_time_microseconds: 2021-06-22 13:23:07.738221\nview_duration_ms:        0\ninitial_query_id:        c3a1ac02-9cad-479b-af54-9e9c0a7afd70\nview_name:               default.matview_inner\nview_uuid:               00000000-0000-0000-0000-000000000000\nview_type:               Materialized\nview_query:              SELECT * FROM default.table_b\nview_target:             default.`.inner.matview_inner`\nread_rows:               4\nread_bytes:              64\nwritten_rows:            2\nwritten_bytes:           32\npeak_memory_usage:       4196188\nProfileEvents:           {'FileOpen':2,'WriteBufferFromFileDescriptorWrite':2,'WriteBufferFromFileDescriptorWriteBytes':187,'IOBufferAllocs':3,'IOBufferAllocBytes':3145773,'FunctionExecute':3,'DiskWriteElapsedMicroseconds':13,'InsertedRows':2,'InsertedBytes':16,'SelectedRows':4,'SelectedBytes':48,'ContextLock':16,'RWLockAcquiredReadLocks':1,'RealTimeMicroseconds':698,'SoftPageFaults':4,'OSReadChars':463}\nstatus:                  QueryFinish\nexception_code:          0\nexception:\nstack_trace:\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ru/operations/system-tables/query_log#system_tables-query_log"},"system.query_log")," \u2014 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b ",(0,i.kt)("inlineCode",{parentName:"li"},"query_log"),", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043e\u0431\u0449\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ru/operations/system-tables/query_thread_log#system_tables-query_thread_log"},"system.query_thread_log")," \u2014 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b ",(0,i.kt)("inlineCode",{parentName:"li"},"query_thread_log"),", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043a\u0430\u0436\u0434\u043e\u043c \u043f\u043e\u0442\u043e\u043a\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430.")))}d.isMDXComponent=!0}}]);
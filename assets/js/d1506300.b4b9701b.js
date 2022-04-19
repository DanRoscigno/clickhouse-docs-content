"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[29446],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(o,".").concat(f)]||m[f]||p[f]||l;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},82442:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),i=["components"],s={},o="system.crash_log",u={unversionedId:"ru/operations/system-tables/crash-log",id:"ru/operations/system-tables/crash-log",title:"system.crash_log",description:"system-tablescrashlog}",source:"@site/docs/ru/operations/system-tables/crash-log.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/crash-log",permalink:"/ru/operations/system-tables/crash-log",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/crash-log.md",tags:[],version:"current",frontMatter:{},sidebar:"russia",previous:{title:"system.contributors",permalink:"/ru/operations/system-tables/contributors"},next:{title:"system.current_roles",permalink:"/ru/operations/system-tables/current-roles"}},c={},p=[],m={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"system-tables_crash_log"},"system.crash_log"),(0,l.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0442\u0440\u0430\u0441\u0441\u0438\u0440\u043e\u0432\u043a\u0430\u0445 \u0441\u0442\u0435\u043a\u0430 \u0434\u043b\u044f \u0444\u0430\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u043e\u0448\u0438\u0431\u043e\u043a. \u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u043d\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442\u0441\u044f \u0432 \u0431\u0430\u0437\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u0430 \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0432\u043e\u0437\u043d\u0438\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u0438 \u0444\u0430\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u043e\u0448\u0438\u0431\u043e\u043a."),(0,l.kt)("p",null,"\u041a\u043e\u043b\u043e\u043d\u043a\u0438:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"event_date")," (",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/datetime"},"Datetime"),") \u2014 \u0414\u0430\u0442\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u044f."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"event_time")," (",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/datetime"},"Datetime"),") \u2014 \u0412\u0440\u0435\u043c\u044f \u0441\u043e\u0431\u044b\u0442\u0438\u044f."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timestamp_ns")," (",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u0412\u0440\u0435\u043c\u044f \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u0441 \u043d\u0430\u043d\u043e\u0441\u0435\u043a\u0443\u043d\u0434\u0430\u043c\u0438."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"signal")," (",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/int-uint"},"Int32"),") \u2014 \u041d\u043e\u043c\u0435\u0440 \u0441\u0438\u0433\u043d\u0430\u043b\u0430, \u043f\u0440\u0438\u0448\u0435\u0434\u0448\u0435\u0433\u043e \u0432 \u043f\u043e\u0442\u043e\u043a."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"thread_id")," (",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0442\u0440\u0435\u0434\u0430."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"query_id")," (",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"trace")," (",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/array"},"Array"),"(",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u0422\u0440\u0430\u0441\u0441\u0438\u0440\u043e\u0432\u043a\u0430 \u0441\u0442\u0435\u043a\u0430 \u0432 \u043c\u043e\u043c\u0435\u043d\u0442 \u043e\u0448\u0438\u0431\u043a\u0438. \u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0430\u0434\u0440\u0435\u0441\u043e\u0432, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u044b \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u043c\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u044b."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"trace_full")," (",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/array"},"Array"),"(",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u0422\u0440\u0430\u0441\u0441\u0438\u0440\u043e\u0432\u043a\u0430 \u0441\u0442\u0435\u043a\u0430 \u0432 \u043c\u043e\u043c\u0435\u043d\u0442 \u043e\u0448\u0438\u0431\u043a\u0438. \u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u043c\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u044b."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"version")," (",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0412\u0435\u0440\u0441\u0438\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 ClickHouse."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"revision")," (",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 \u0420\u0435\u0432\u0438\u0437\u0438\u044f \u0441\u0431\u043e\u0440\u043a\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 ClickHouse."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build_id")," (",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/string"},"String"),") \u2014 BuildID, \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u043e\u043c.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.crash_log ORDER BY event_time DESC LIMIT 1;\n")),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 (\u043f\u0440\u0438\u0432\u0435\u0434\u0451\u043d \u043d\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nevent_date:   2020-10-14\nevent_time:   2020-10-14 15:47:40\ntimestamp_ns: 1602679660271312710\nsignal:       11\nthread_id:    23624\nquery_id:     428aab7c-8f5c-44e9-9607-d16b44467e69\ntrace:        [188531193,...]\ntrace_full:   ['3. DB::(anonymous namespace)::FunctionFormatReadableTimeDelta::executeImpl(std::__1::vector<DB::ColumnWithTypeAndName, std::__1::allocator<DB::ColumnWithTypeAndName> >&, std::__1::vector<unsigned long, std::__1::allocator<unsigned long> > const&, unsigned long, unsigned long) const @ 0xb3cc1f9 in /home/username/work/ClickHouse/build/programs/clickhouse',...]\nversion:      ClickHouse 20.11.1.1\nrevision:     54442\nbuild_id:\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0421\u0438\u0441\u0442\u0435\u043c\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430 ",(0,l.kt)("a",{parentName:"li",href:"/ru/operations/system-tables/trace_log"},"trace_log"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/crash-log"},"Original article")))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[12819],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||p;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<p;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94819:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return m}});var r=n(87462),a=n(63366),p=(n(67294),n(3905)),o=["components"],i={slug:"/en/operations/system-tables/opentelemetry_span_log"},s="opentelemetry_span_log",l={unversionedId:"en/operations/system-tables/opentelemetry_span_log",id:"en/operations/system-tables/opentelemetry_span_log",title:"opentelemetry_span_log",description:"Contains information about trace spans for executed queries.",source:"@site/docs/en/operations/system-tables/opentelemetry_span_log.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/opentelemetry_span_log",permalink:"/docs/en/operations/system-tables/opentelemetry_span_log",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/opentelemetry_span_log.md",tags:[],version:"current",frontMatter:{slug:"/en/operations/system-tables/opentelemetry_span_log"},sidebar:"english",previous:{title:"one",permalink:"/docs/en/operations/system-tables/one"},next:{title:"part_log",permalink:"/docs/en/operations/system-tables/part_log"}},c={},m=[],u={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"opentelemetry_span_log"},"opentelemetry_span_log"),(0,p.kt)("p",null,"Contains information about ",(0,p.kt)("a",{parentName:"p",href:"https://opentracing.io/docs/overview/spans/"},"trace spans")," for executed queries."),(0,p.kt)("p",null,"Columns:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"trace_id")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/uuid"},"UUID"),") \u2014 ID of the trace for executed query.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"span_id")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 ID of the ",(0,p.kt)("inlineCode",{parentName:"p"},"trace span"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"parent_span_id")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 ID of the parent ",(0,p.kt)("inlineCode",{parentName:"p"},"trace span"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"operation_name")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 The name of the operation.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"start_time_us")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 The start time of the ",(0,p.kt)("inlineCode",{parentName:"p"},"trace span")," (in microseconds).")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"finish_time_us")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 The finish time of the ",(0,p.kt)("inlineCode",{parentName:"p"},"trace span")," (in microseconds).")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"finish_date")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/date"},"Date"),") \u2014 The finish date of the ",(0,p.kt)("inlineCode",{parentName:"p"},"trace span"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"attribute.names")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/array"},"Array"),"(",(0,p.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),")) \u2014 ",(0,p.kt)("a",{parentName:"p",href:"https://opentelemetry.io/docs/go/instrumentation/#attributes"},"Attribute")," names depending on the ",(0,p.kt)("inlineCode",{parentName:"p"},"trace span"),". They are filled in according to the recommendations in the ",(0,p.kt)("a",{parentName:"p",href:"https://opentelemetry.io/"},"OpenTelemetry")," standard.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"attribute.values")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/array"},"Array"),"(",(0,p.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),")) \u2014 Attribute values depending on the ",(0,p.kt)("inlineCode",{parentName:"p"},"trace span"),". They are filled in according to the recommendations in the ",(0,p.kt)("inlineCode",{parentName:"p"},"OpenTelemetry")," standard."))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Example")),(0,p.kt)("p",null,"Query:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.opentelemetry_span_log LIMIT 1 FORMAT Vertical;\n")),(0,p.kt)("p",null,"Result:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ntrace_id:         cdab0847-0d62-61d5-4d38-dd65b19a1914\nspan_id:          701487461015578150\nparent_span_id:   2991972114672045096\noperation_name:   DB::Block DB::InterpreterSelectQuery::getSampleBlockImpl()\nstart_time_us:    1612374594529090\nfinish_time_us:   1612374594529108\nfinish_date:      2021-02-03\nattribute.names:  []\nattribute.values: []\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"See Also")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs/en/operations/opentelemetry"},"OpenTelemetry"))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[69414],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return p}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=u(a),p=n,h=g["".concat(l,".").concat(p)]||g[p]||d[p]||i;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},38688:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=["components"],s={sidebar_label:"ClickHouse History",sidebar_position:10,description:"Where it all began..."},l="ClickHouse History",u={unversionedId:"en/about-us/history",id:"en/about-us/history",title:"ClickHouse History",description:"Where it all began...",source:"@site/docs/en/about-us/history.md",sourceDirName:"en/about-us",slug:"/en/about-us/history",permalink:"/en/about-us/history",editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/about-us/history.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_label:"ClickHouse History",sidebar_position:10,description:"Where it all began..."},sidebar:"english",previous:{title:"Commercial Support",permalink:"/en/about-us/support"},next:{title:"Distinctive Features",permalink:"/en/about-us/distinctive-features"}},c={},d=[{value:"Usage in Yandex.Metrica and Other Yandex Services",id:"usage-in-yandex-metrica-and-other-yandex-services",level:2},{value:"Aggregated and Non-aggregated Data",id:"aggregated-and-non-aggregated-data",level:2}],g={toc:d};function p(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"clickhouse-history"},"ClickHouse History"),(0,i.kt)("p",null,"ClickHouse has been developed initially to power ",(0,i.kt)("a",{parentName:"p",href:"https://metrica.yandex.com/"},"Yandex.Metrica"),", ",(0,i.kt)("a",{parentName:"p",href:"http://w3techs.com/technologies/overview/traffic_analysis/all"},"the second largest web analytics platform in the world"),", and continues to be the core component of this system. With more than 13 trillion records in the database and more than 20 billion events daily, ClickHouse allows generating custom reports on the fly directly from non-aggregated data. This article briefly covers the goals of ClickHouse in the early stages of its development."),(0,i.kt)("p",null,"Yandex.Metrica builds customized reports on the fly based on hits and sessions, with arbitrary segments defined by the user. Doing so often requires building complex aggregates, such as the number of unique users. New data for building a report arrives in real-time."),(0,i.kt)("p",null,"As of April 2014, Yandex.Metrica was tracking about 12 billion events (page views and clicks) daily. All these events must be stored to build custom reports. A single query may require scanning millions of rows within a few hundred milliseconds, or hundreds of millions of rows in just a few seconds."),(0,i.kt)("h2",{id:"usage-in-yandex-metrica-and-other-yandex-services"},"Usage in Yandex.Metrica and Other Yandex Services"),(0,i.kt)("p",null,"ClickHouse serves multiple purposes in Yandex.Metrica.\nIts main task is to build reports in online mode using non-aggregated data. It uses a cluster of 374 servers, which store over 20.3 trillion rows in the database. The volume of compressed data is about 2 PB, without accounting for duplicates and replicas. The volume of uncompressed data (in TSV format) would be approximately 17 PB."),(0,i.kt)("p",null,"ClickHouse also plays a key role in the following processes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Storing data for Session Replay from Yandex.Metrica."),(0,i.kt)("li",{parentName:"ul"},"Processing intermediate data."),(0,i.kt)("li",{parentName:"ul"},"Building global reports with Analytics."),(0,i.kt)("li",{parentName:"ul"},"Running queries for debugging the Yandex.Metrica engine."),(0,i.kt)("li",{parentName:"ul"},"Analyzing logs from the API and the user interface.")),(0,i.kt)("p",null,"Nowadays, there are multiple dozen ClickHouse installations in other Yandex services and departments: search verticals, e-commerce, advertisement, business analytics, mobile development, personal services, and others."),(0,i.kt)("h2",{id:"aggregated-and-non-aggregated-data"},"Aggregated and Non-aggregated Data"),(0,i.kt)("p",null,"There is a widespread opinion that to calculate statistics effectively, you must aggregate data since this reduces the volume of data."),(0,i.kt)("p",null,"But data aggregation comes with a lot of limitations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You must have a pre-defined list of required reports."),(0,i.kt)("li",{parentName:"ul"},"The user can\u2019t make custom reports."),(0,i.kt)("li",{parentName:"ul"},"When aggregating over a large number of distinct keys, the data volume is barely reduced, so aggregation is useless."),(0,i.kt)("li",{parentName:"ul"},"For a large number of reports, there are too many aggregation variations (combinatorial explosion)."),(0,i.kt)("li",{parentName:"ul"},"When aggregating keys with high cardinality (such as URLs), the volume of data is not reduced by much (less than twofold)."),(0,i.kt)("li",{parentName:"ul"},"For this reason, the volume of data with aggregation might grow instead of shrink."),(0,i.kt)("li",{parentName:"ul"},"Users do not view all the reports we generate for them. A large portion of those calculations is useless."),(0,i.kt)("li",{parentName:"ul"},"The logical integrity of data may be violated for various aggregations.")),(0,i.kt)("p",null,"If we do not aggregate anything and work with non-aggregated data, this might reduce the volume of calculations."),(0,i.kt)("p",null,"However, with aggregation, a significant part of the work is taken offline and completed relatively calmly. In contrast, online calculations require calculating as fast as possible, since the user is waiting for the result."),(0,i.kt)("p",null,"Yandex.Metrica has a specialized system for aggregating data called Metrage, which was used for the majority of reports.\nStarting in 2009, Yandex.Metrica also used a specialized OLAP database for non-aggregated data called OLAPServer, which was previously used for the report builder.\nOLAPServer worked well for non-aggregated data, but it had many restrictions that did not allow it to be used for all reports as desired. These included the lack of support for data types (only numbers), and the inability to incrementally update data in real-time (it could only be done by rewriting data daily). OLAPServer is not a DBMS, but a specialized DB."),(0,i.kt)("p",null,"The initial goal for ClickHouse was to remove the limitations of OLAPServer and solve the problem of working with non-aggregated data for all reports, but over the years, it has grown into a general-purpose database management system suitable for a wide range of analytical tasks."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/introduction/history/"},"Original article")," "))}p.isMDXComponent=!0}}]);
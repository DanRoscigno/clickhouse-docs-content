"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[80857],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=o,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||r;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},70689:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),s=["components"],i={title:"Why ClickHouse is so fast?",toc_hidden:!0,sidebar_position:8},l="Why ClickHouse Is So Fast?",c={unversionedId:"zh/faq/general/why-clickhouse-is-so-fast",id:"zh/faq/general/why-clickhouse-is-so-fast",title:"Why ClickHouse is so fast?",description:"why-clickhouse-is-so-fast}",source:"@site/docs/zh/faq/general/why-clickhouse-is-so-fast.md",sourceDirName:"zh/faq/general",slug:"/zh/faq/general/why-clickhouse-is-so-fast",permalink:"/docs/zh/faq/general/why-clickhouse-is-so-fast",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/faq/general/why-clickhouse-is-so-fast.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Why ClickHouse is so fast?",toc_hidden:!0,sidebar_position:8},sidebar:"chinese",previous:{title:"General",permalink:"/docs/zh/faq/general/"},next:{title:"\u8c01\u5728\u4f7f\u7528 ClickHouse?",permalink:"/docs/zh/faq/general/who-is-using-clickhouse"}},u={},p=[],m={toc:p};function d(e){var t=e.components,a=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"why-clickhouse-is-so-fast"},"Why ClickHouse Is So Fast?"),(0,r.kt)("p",null,"It was designed to be fast. Query execution performance has always been a top priority during the development process, but other important characteristics like user-friendliness, scalability, and security were also considered so ClickHouse could become a real production system."),(0,r.kt)("p",null,"ClickHouse was initially built as a prototype to do just a single task well: to filter and aggregate data as fast as possible. That\u2019s what needs to be done to build a typical analytical report and that\u2019s what a typical ",(0,r.kt)("a",{parentName:"p",href:"../../sql-reference/statements/select/group-by/"},"GROUP BY")," query does. ClickHouse team has made several high-level decisions that combined made achieving this task possible:"),(0,r.kt)("p",null,"Column-oriented storage\n:   Source data often contain hundreds or even thousands of columns, while a report can use just a few of them. The system needs to avoid reading unnecessary columns, or most expensive disk read operations would be wasted."),(0,r.kt)("p",null,"Indexes\n:   ClickHouse keeps data structures in memory that allows reading not only used columns but only necessary row ranges of those columns."),(0,r.kt)("p",null,"Data compression\n:   Storing different values of the same column together often leads to better compression ratios (compared to row-oriented systems) because in real data column often has the same or not so many different values for neighboring rows. In addition to general-purpose compression, ClickHouse supports ",(0,r.kt)("a",{parentName:"p",href:"../../sql-reference/statements/create/table/#create-query-specialized-codecs"},"specialized codecs")," that can make data even more compact."),(0,r.kt)("p",null,"Vectorized query execution\n:   ClickHouse not only stores data in columns but also processes data in columns. It leads to better CPU cache utilization and allows for ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SIMD"},"SIMD")," CPU instructions usage."),(0,r.kt)("p",null,"Scalability\n:   ClickHouse can leverage all available CPU cores and disks to execute even a single query. Not only on a single server but all CPU cores and disks of a cluster as well."),(0,r.kt)("p",null,"But many other database management systems use similar techniques. What really makes ClickHouse stand out is ",(0,r.kt)("strong",{parentName:"p"},"attention to low-level details"),". Most programming languages provide implementations for most common algorithms and data structures, but they tend to be too generic to be effective. Every task can be considered as a landscape with various characteristics, instead of just throwing in random implementation. For example, if you need a hash table, here are some key questions to consider:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Which hash function to choose?"),(0,r.kt)("li",{parentName:"ul"},"Collision resolution algorithm: ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Open_addressing"},"open addressing")," vs ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Hash_table#Separate_chaining"},"chaining"),"?"),(0,r.kt)("li",{parentName:"ul"},"Memory layout: one array for keys and values or separate arrays? Will it store small or large values?"),(0,r.kt)("li",{parentName:"ul"},"Fill factor: when and how to resize? How to move values around on resize?"),(0,r.kt)("li",{parentName:"ul"},"Will values be removed and which algorithm will work better if they will?"),(0,r.kt)("li",{parentName:"ul"},"Will we need fast probing with bitmaps, inline placement of string keys, support for non-movable values, prefetch, and batching?")),(0,r.kt)("p",null,"Hash table is a key data structure for ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY")," implementation and ClickHouse automatically chooses one of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/blob/master/src/Interpreters/Aggregator.h"},"30+ variations")," for each specific query."),(0,r.kt)("p",null,"The same goes for algorithms, for example, in sorting you might consider:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What will be sorted: an array of numbers, tuples, strings, or structures?"),(0,r.kt)("li",{parentName:"ul"},"Is all data available completely in RAM?"),(0,r.kt)("li",{parentName:"ul"},"Do we need a stable sort?"),(0,r.kt)("li",{parentName:"ul"},"Do we need a full sort? Maybe partial sort or n-th element will suffice?"),(0,r.kt)("li",{parentName:"ul"},"How to implement comparisons?"),(0,r.kt)("li",{parentName:"ul"},"Are we sorting data that has already been partially sorted?")),(0,r.kt)("p",null,"Algorithms that they rely on characteristics of data they are working with can often do better than their generic counterparts. If it is not really known in advance, the system can try various implementations and choose the one that works best in runtime. For example, see an ",(0,r.kt)("a",{parentName:"p",href:"https://habr.com/en/company/yandex/blog/457612/"},"article on how LZ4 decompression is implemented in ClickHouse"),"."),(0,r.kt)("p",null,"Last but not least, the ClickHouse team always monitors the Internet on people claiming that they came up with the best implementation, algorithm, or data structure to do something and tries it out. Those claims mostly appear to be false, but from time to time you\u2019ll indeed find a gem."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Tips for building your own high-performance software")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Keep in mind low-level details when designing your system."),(0,r.kt)("li",{parentName:"ul"},"Design based on hardware capabilities."),(0,r.kt)("li",{parentName:"ul"},"Choose data structures and abstractions based on the needs of the task."),(0,r.kt)("li",{parentName:"ul"},"Provide specializations for special cases."),(0,r.kt)("li",{parentName:"ul"},"Try new, \u201cbest\u201d algorithms, that you read about yesterday."),(0,r.kt)("li",{parentName:"ul"},"Choose an algorithm in runtime based on statistics."),(0,r.kt)("li",{parentName:"ul"},"Benchmark on real datasets."),(0,r.kt)("li",{parentName:"ul"},"Test for performance regressions in CI."),(0,r.kt)("li",{parentName:"ul"},"Measure and observe everything.")))))}d.isMDXComponent=!0}}]);
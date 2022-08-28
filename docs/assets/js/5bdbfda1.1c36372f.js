"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[831],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,g=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64287:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],o={slug:"/en/guides/sre/scaling-clusters",sidebar_label:"Rebalancing Shards",sidebar_position:20,description:"ClickHouse does not support automatic shard rebalancing, so we provide some best practices for how to rebalance shards."},c="Rebalancing Data",l={unversionedId:"en/guides/sre/scaling-clusters",id:"en/guides/sre/scaling-clusters",title:"Rebalancing Data",description:"ClickHouse does not support automatic shard rebalancing, so we provide some best practices for how to rebalance shards.",source:"@site/docs/en/guides/sre/scaling-clusters.md",sourceDirName:"en/guides/sre",slug:"/en/guides/sre/scaling-clusters",permalink:"/docs/en/guides/sre/scaling-clusters",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/guides/sre/scaling-clusters.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{slug:"/en/guides/sre/scaling-clusters",sidebar_label:"Rebalancing Shards",sidebar_position:20,description:"ClickHouse does not support automatic shard rebalancing, so we provide some best practices for how to rebalance shards."},sidebar:"english",previous:{title:"Configuring SSL-TLS",permalink:"/docs/en/guides/sre/configuring-ssl"},next:{title:"Use S3 Object Storage as a ClickHouse disk",permalink:"/docs/en/guides/sre/configuring-s3-for-clickhouse-use"}},u={},p=[],d={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rebalancing-data"},"Rebalancing Data"),(0,i.kt)("p",null,"ClickHouse does not support automatic shard rebalancing. However, there are ways to rebalance shards in order of preference:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Adjust the shard for the ",(0,i.kt)("a",{parentName:"p",href:"../../engines/table-engines/special/distributed/"},"distributed table"),", allowing writes to be biased to the new shard. This potentially will cause load imbalances and hot spots on the cluster but can be viable in most scenarios where write throughput is not extremely high. It does not require the user to change their write target i.e. It can remain as the distributed table. This does not assist with rebalancing existing data.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"As an alternative to (1), modify the existing cluster and write exclusively to the new shard until the cluster is balanced - manually weighting writes. This has the same limitations as (1).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you need to rebalance existing data and you have partitioned your data, consider detaching partitions and manually relocating them to another node before reattaching to the new shard. This is more manual than subsequent techniques but may be faster and less resource-intensive. This is a manual operation and thus needs to consider the rebalancing of the data.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a new cluster with the new topology and copy the data using ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/utilities/clickhouse-copier"},"ClickHouse Copier"),".  Alternatively, create a new database within the existing cluster and migrate the data using ClickHouse Copier. This can be potentially computationally expensive and may impact your production environment. Building a new cluster on separate hardware, and applying this technique, is an option to mitigate this at the expense of cost.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Export the data from the source cluster to the new cluster via an",(0,i.kt)("a",{parentName:"p",href:"../../sql-reference/statements/insert-into/#insert_query_insert-select"}," INSERT FROM SELECT"),". This will not be performant on very large datasets and will potentially incur significant IO on the source cluster and use considerable network resources. This represents a last resort."))),(0,i.kt)("p",null,"There is an internal effort to reconsider how rebalancing could be implemented. There is some relevant discussion ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/issues/13574"},"here"),"."))}h.isMDXComponent=!0}}]);
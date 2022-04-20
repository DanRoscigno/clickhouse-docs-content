"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[98230],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,b=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return t?r.createElement(b,o(o({ref:n},d),{},{components:t})):r.createElement(b,o({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},24526:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],l={sidebar_position:9,sidebar_label:"EmbeddedRocksDB"},s="EmbeddedRocksDB Engine",c={unversionedId:"en/engines/table-engines/integrations/embedded-rocksdb",id:"en/engines/table-engines/integrations/embedded-rocksdb",title:"EmbeddedRocksDB Engine",description:"EmbeddedRocksDB-engine}",source:"@site/docs/en/engines/table-engines/integrations/embedded-rocksdb.md",sourceDirName:"en/engines/table-engines/integrations",slug:"/en/engines/table-engines/integrations/embedded-rocksdb",permalink:"/docs/en/engines/table-engines/integrations/embedded-rocksdb",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/integrations/embedded-rocksdb.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,sidebar_label:"EmbeddedRocksDB"},sidebar:"english",previous:{title:"Kafka",permalink:"/docs/en/engines/table-engines/integrations/kafka"},next:{title:"RabbitMQ",permalink:"/docs/en/engines/table-engines/integrations/rabbitmq"}},d={},u=[{value:"Creating a Table",id:"table_engine-EmbeddedRocksDB-creating-a-table",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Configuration",id:"configuration",level:2}],p={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"EmbeddedRocksDB-engine"},"EmbeddedRocksDB Engine"),(0,a.kt)("p",null,"This engine allows integrating ClickHouse with ",(0,a.kt)("a",{parentName:"p",href:"http://rocksdb.org/"},"rocksdb"),"."),(0,a.kt)("h2",{id:"table_engine-EmbeddedRocksDB-creating-a-table"},"Creating a Table"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE = EmbeddedRocksDB PRIMARY KEY(primary_key_name)\n")),(0,a.kt)("p",null,"Required parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"primary_key_name")," \u2013 any column name in the column list."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"primary key")," must be specified, it supports only one column in the primary key. The primary key will be serialized in binary as a ",(0,a.kt)("inlineCode",{parentName:"li"},"rocksdb key"),"."),(0,a.kt)("li",{parentName:"ul"},"columns other than the primary key will be serialized in binary as ",(0,a.kt)("inlineCode",{parentName:"li"},"rocksdb")," value in corresponding order."),(0,a.kt)("li",{parentName:"ul"},"queries with key ",(0,a.kt)("inlineCode",{parentName:"li"},"equals")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"in")," filtering will be optimized to multi keys lookup from ",(0,a.kt)("inlineCode",{parentName:"li"},"rocksdb"),".")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test\n(\n    `key` String,\n    `v1` UInt32,\n    `v2` String,\n    `v3` Float32\n)\nENGINE = EmbeddedRocksDB\nPRIMARY KEY key\n")),(0,a.kt)("h2",{id:"metrics"},"Metrics"),(0,a.kt)("p",null,"There is also ",(0,a.kt)("inlineCode",{parentName:"p"},"system.rocksdb")," table, that expose rocksdb statistics:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    name,\n    value\nFROM system.rocksdb\n\n\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500value\u2500\u2510\n\u2502 no.file.opens             \u2502     1 \u2502\n\u2502 number.block.decompressed \u2502     1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"You can also change any ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/rocksdb/wiki/Option-String-and-Option-Map"},"rocksdb options")," using config:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<rocksdb>\n    <options>\n        <max_background_jobs>8</max_background_jobs>\n    </options>\n    <column_family_options>\n        <num_levels>2</num_levels>\n    </column_family_options>\n    <tables>\n        <table>\n            <name>TABLE</name>\n            <options>\n                <max_background_jobs>8</max_background_jobs>\n            </options>\n            <column_family_options>\n                <num_levels>2</num_levels>\n            </column_family_options>\n        </table>\n    </tables>\n</rocksdb>\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/integrations/embedded-rocksdb/"},"Original article")," "))}m.isMDXComponent=!0}}]);
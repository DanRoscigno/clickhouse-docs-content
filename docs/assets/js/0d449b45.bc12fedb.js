"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[9800],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return u}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=s(n),u=r,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(k,l(l({ref:e},d),{},{components:n})):a.createElement(k,l({ref:e},d))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},67429:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],i={slug:"/en/native-protocol/compression",sidebar_position:6},p="Compression",s={unversionedId:"en/native-protocol/compression",id:"en/native-protocol/compression",title:"Compression",description:"ClickHouse protocol supports data blocks compression with checksums.",source:"@site/docs/en/native-protocol/compression.md",sourceDirName:"en/native-protocol",slug:"/en/native-protocol/compression",permalink:"/docs/en/native-protocol/compression",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/native-protocol/compression.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{slug:"/en/native-protocol/compression",sidebar_position:6},sidebar:"english",previous:{title:"CityHash",permalink:"/docs/en/native-protocol/hash"},next:{title:"FAQ",permalink:"/docs/en/faq"}},d={},m=[{value:"Modes",id:"modes",level:2},{value:"Block",id:"block",level:2},{value:"None mode",id:"none-mode",level:2}],c={toc:m};function u(t){var e=t.components,i=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"compression"},"Compression"),(0,o.kt)("p",null,"ClickHouse protocol supports ",(0,o.kt)("strong",{parentName:"p"},"data blocks")," compression with checksums.\nUse ",(0,o.kt)("inlineCode",{parentName:"p"},"LZ4")," if not sure what mode to pick."),(0,o.kt)("h2",{id:"modes"},"Modes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"value"),(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"0x02")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#none-mode"},"None")),(0,o.kt)("td",{parentName:"tr",align:null},"No compression, only checksums")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"0x82")),(0,o.kt)("td",{parentName:"tr",align:null},"LZ4"),(0,o.kt)("td",{parentName:"tr",align:null},"Extremely fast, good compression")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"0x90")),(0,o.kt)("td",{parentName:"tr",align:null},"ZSTD"),(0,o.kt)("td",{parentName:"tr",align:null},"Zstandard, pretty fast, best compression")))),(0,o.kt)("p",null,"Both LZ4 and ZSTD are made by same author, but with different tradeoffs.\nFrom ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/zstd/#benchmarks"},"facebook benchmarks"),":"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"ratio"),(0,o.kt)("th",{parentName:"tr",align:null},"encoding"),(0,o.kt)("th",{parentName:"tr",align:null},"decoding"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"zstd")," 1.4.5 -1"),(0,o.kt)("td",{parentName:"tr",align:null},"2.8"),(0,o.kt)("td",{parentName:"tr",align:null},"500 MB/s"),(0,o.kt)("td",{parentName:"tr",align:null},"1660 MB/s")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"lz4")," 1.9.2"),(0,o.kt)("td",{parentName:"tr",align:null},"2.1"),(0,o.kt)("td",{parentName:"tr",align:null},"740 MB/s"),(0,o.kt)("td",{parentName:"tr",align:null},"4530 MB/s")))),(0,o.kt)("h2",{id:"block"},"Block"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"field"),(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"checksum"),(0,o.kt)("td",{parentName:"tr",align:null},"uint128"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/en/native-protocol/hash"},"Hash")," of (header + compressed data)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"raw_size"),(0,o.kt)("td",{parentName:"tr",align:null},"uint32"),(0,o.kt)("td",{parentName:"tr",align:null},"Raw size without header")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"data_size"),(0,o.kt)("td",{parentName:"tr",align:null},"uint32"),(0,o.kt)("td",{parentName:"tr",align:null},"Uncompressed data size")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"mode"),(0,o.kt)("td",{parentName:"tr",align:null},"byte"),(0,o.kt)("td",{parentName:"tr",align:null},"Compression mode")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"compressed_data"),(0,o.kt)("td",{parentName:"tr",align:null},"binary"),(0,o.kt)("td",{parentName:"tr",align:null},"Block of compressed data")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"compression block diagram",src:n(93116).Z,width:"574",height:"161"})," "),(0,o.kt)("p",null,"Header is (raw_size + data_size + mode), raw size consists of len(header + compressed_data)."),(0,o.kt)("p",null,"Checksum is ",(0,o.kt)("inlineCode",{parentName:"p"},"hash(header + compressed_data)"),", using ",(0,o.kt)("a",{parentName:"p",href:"./hash"},"ClickHouse CityHash"),"."),(0,o.kt)("h2",{id:"none-mode"},"None mode"),(0,o.kt)("p",null,"If ",(0,o.kt)("em",{parentName:"p"},"None")," mode is used, ",(0,o.kt)("inlineCode",{parentName:"p"},"compressed_data")," is equal to original data.\nNo compression mode is useful to ensure additional data integrity with checksums, because\nhashing overhead is negligible."))}u.isMDXComponent=!0},93116:function(t,e,n){e.Z=n.p+"assets/images/ch_compression_block.drawio-ca3ebf78ba66358fb9f32f0da1aca27a.svg"}}]);
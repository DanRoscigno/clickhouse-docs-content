"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[34461],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),g=a,f=m["".concat(u,".").concat(g)]||m[g]||s[g]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23266:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],p={sidebar_position:129},u="groupBitmapAnd",c={unversionedId:"en/sql-reference/aggregate-functions/reference/groupbitmapand",id:"en/sql-reference/aggregate-functions/reference/groupbitmapand",title:"groupBitmapAnd",description:"groupbitmapand}",source:"@site/docs/en/sql-reference/aggregate-functions/reference/groupbitmapand.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/groupbitmapand",permalink:"/en/sql-reference/aggregate-functions/reference/groupbitmapand",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/en/sql-reference/aggregate-functions/reference/groupbitmapand.md",tags:[],version:"current",sidebarPosition:129,frontMatter:{sidebar_position:129},sidebar:"english",previous:{title:"groupBitmap",permalink:"/en/sql-reference/aggregate-functions/reference/groupbitmap"},next:{title:"groupBitmapOr",permalink:"/en/sql-reference/aggregate-functions/reference/groupbitmapor"}},l={},s=[],m={toc:s};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"groupbitmapand"},"groupBitmapAnd"),(0,o.kt)("p",null,"Calculations the AND of a bitmap column, return cardinality of type UInt64, if add suffix -State, then return ",(0,o.kt)("a",{parentName:"p",href:"/en/sql-reference/functions/bitmap-functions"},"bitmap object"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"groupBitmapAnd(expr)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"expr")," \u2013 An expression that results in ",(0,o.kt)("inlineCode",{parentName:"p"},"AggregateFunction(groupBitmap, UInt*)")," type."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Return value")),(0,o.kt)("p",null,"Value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"UInt64")," type."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE IF EXISTS bitmap_column_expr_test2;\nCREATE TABLE bitmap_column_expr_test2\n(\n    tag_id String,\n    z AggregateFunction(groupBitmap, UInt32)\n)\nENGINE = MergeTree\nORDER BY tag_id;\n\nINSERT INTO bitmap_column_expr_test2 VALUES ('tag1', bitmapBuild(cast([1,2,3,4,5,6,7,8,9,10] as Array(UInt32))));\nINSERT INTO bitmap_column_expr_test2 VALUES ('tag2', bitmapBuild(cast([6,7,8,9,10,11,12,13,14,15] as Array(UInt32))));\nINSERT INTO bitmap_column_expr_test2 VALUES ('tag3', bitmapBuild(cast([2,4,6,8,10,12] as Array(UInt32))));\n\nSELECT groupBitmapAnd(z) FROM bitmap_column_expr_test2 WHERE like(tag_id, 'tag%');\n\u250c\u2500groupBitmapAnd(z)\u2500\u2510\n\u2502               3   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nSELECT arraySort(bitmapToArray(groupBitmapAndState(z))) FROM bitmap_column_expr_test2 WHERE like(tag_id, 'tag%');\n\u250c\u2500arraySort(bitmapToArray(groupBitmapAndState(z)))\u2500\u2510\n\u2502 [6,8,10]                                         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[5265],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61858:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={sidebar_position:60,sidebar_label:"IPv6"},p=void 0,s={unversionedId:"ru/sql-reference/data-types/domains/ipv6",id:"ru/sql-reference/data-types/domains/ipv6",title:"ipv6",description:"IPv6",source:"@site/docs/ru/sql-reference/data-types/domains/ipv6.md",sourceDirName:"ru/sql-reference/data-types/domains",slug:"/ru/sql-reference/data-types/domains/ipv6",permalink:"/ru/sql-reference/data-types/domains/ipv6",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/data-types/domains/ipv6.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60,sidebar_label:"IPv6"},sidebar:"russia",previous:{title:"IPv4",permalink:"/ru/sql-reference/data-types/domains/ipv4"},next:{title:"\u0421\u043e\u0441\u0442\u0430\u0432\u043d\u044b\u0435 \u0442\u0438\u043f\u044b",permalink:"/ru/sql-reference/data-types/multiword-types"}},c={},u=[{value:"IPv6",id:"ipv6",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435",id:"primenenie",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ipv6"},"IPv6"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"IPv6")," \u2014 \u044d\u0442\u043e \u0434\u043e\u043c\u0435\u043d, \u0431\u0430\u0437\u0438\u0440\u0443\u044e\u0449\u0438\u0439\u0441\u044f \u043d\u0430 \u0442\u0438\u043f\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,i.kt)("inlineCode",{parentName:"p"},"FixedString(16)"),", \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0439 \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0430\u0434\u0440\u0435\u0441\u043e\u0432 IPv6. \u041e\u043d \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043a\u043e\u043c\u043f\u0430\u043a\u0442\u043d\u043e\u0435 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u0443\u0434\u043e\u0431\u043d\u044b\u043c \u0434\u043b\u044f \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430 \u0444\u043e\u0440\u043c\u0430\u0442\u043e\u043c \u0432\u0432\u043e\u0434\u0430-\u0432\u044b\u0432\u043e\u0434\u0430, \u0438 \u044f\u0432\u043d\u043e \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u043c\u044b\u043c \u0442\u0438\u043f\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b."),(0,i.kt)("h3",{id:"primenenie"},"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE hits (url String, from IPv6) ENGINE = MergeTree() ORDER BY url;\n\nDESCRIBE TABLE hits;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u252c\u2500type\u2500\u2500\u2500\u252c\u2500default_type\u2500\u252c\u2500default_expression\u2500\u252c\u2500comment\u2500\u252c\u2500codec_expression\u2500\u2510\n\u2502 url  \u2502 String \u2502              \u2502                    \u2502         \u2502                  \u2502\n\u2502 from \u2502 IPv6   \u2502              \u2502                    \u2502         \u2502                  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"\u0418\u043b\u0438 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043e\u043c\u0435\u043d ",(0,i.kt)("inlineCode",{parentName:"p"},"IPv6")," \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043a\u043b\u044e\u0447\u0430:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE hits (url String, from IPv6) ENGINE = MergeTree() ORDER BY from;\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"IPv6")," \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u0441\u0442\u0430\u0432\u043a\u0443 \u0432 \u0432\u0438\u0434\u0435 \u0441\u0442\u0440\u043e\u043a \u0441 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u043c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c IPv6 \u0430\u0434\u0440\u0435\u0441\u0430:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO hits (url, from) VALUES ('https://wikipedia.org', '2a02:aa08:e000:3100::2')('https://clickhouse.com', '2001:44c8:129:2632:33:0:252:2')('https://clickhouse.com/docs/en/', '2a02:e980:1e::1');\n\nSELECT * FROM hits;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500url\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500from\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 https://clickhouse.com          \u2502 2001:44c8:129:2632:33:0:252:2 \u2502\n\u2502 https://clickhouse.com/docs/en/ \u2502 2a02:e980:1e::1               \u2502\n\u2502 https://wikipedia.org              \u2502 2a02:aa08:e000:3100::2        \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0432 \u043a\u043e\u043c\u043f\u0430\u043a\u0442\u043d\u043e\u0439 \u0431\u0438\u043d\u0430\u0440\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u0435:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toTypeName(from), hex(from) FROM hits LIMIT 1;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500toTypeName(from)\u2500\u252c\u2500hex(from)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 IPv6             \u2502 200144C8012926320033000002520002 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0441 \u0434\u043e\u043c\u0435\u043d\u043d\u044b\u043c \u0442\u0438\u043f\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0435 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u044e\u0442\u0441\u044f \u043d\u0435\u044f\u0432\u043d\u043e \u0432 \u0434\u0440\u0443\u0433\u0438\u0435 \u0442\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445, \u043a\u0440\u043e\u043c\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"FixedString(16)"),".\n\u0415\u0441\u043b\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0442\u0438\u043f\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"IPv6")," \u0432 \u0441\u0442\u0440\u043e\u043a\u0443, \u0442\u043e \u044d\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u0435\u043b\u0430\u0442\u044c \u044f\u0432\u043d\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"IPv6NumToString()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toTypeName(s), IPv6NumToString(from) AS s FROM hits LIMIT 1;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500toTypeName(IPv6NumToString(from))\u2500\u252c\u2500s\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 String                            \u2502 2001:44c8:129:2632:33:0:252:2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"\u0418\u043b\u0438 \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442\u044c \u043a \u0442\u0438\u043f\u0443 \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,i.kt)("inlineCode",{parentName:"p"},"FixedString(16)"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toTypeName(i), CAST(from AS FixedString(16)) AS i FROM hits LIMIT 1;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500toTypeName(CAST(from, 'FixedString(16)'))\u2500\u252c\u2500i\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 FixedString(16)                           \u2502  \ufffd\ufffd\ufffd \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}d.isMDXComponent=!0}}]);
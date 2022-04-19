"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[16946],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=o,f=p["".concat(s,".").concat(d)]||p[d]||g[d]||i;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},93492:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return g}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],l={},s="\u4f7f\u7528 Yandex.Metrica \u5b57\u5178\u51fd\u6570",u={unversionedId:"zh/sql-reference/functions/ym-dict-functions",id:"zh/sql-reference/functions/ym-dict-functions",title:"\u4f7f\u7528 Yandex.Metrica \u5b57\u5178\u51fd\u6570",description:"functions-for-working-with-yandex-metrica-dictionaries}",source:"@site/docs/zh/sql-reference/functions/ym-dict-functions.md",sourceDirName:"zh/sql-reference/functions",slug:"/zh/sql-reference/functions/ym-dict-functions",permalink:"/zh/sql-reference/functions/ym-dict-functions",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/functions/ym-dict-functions.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"UUID\u51fd\u6570",permalink:"/zh/sql-reference/functions/uuid-functions"},next:{title:"\u805a\u5408\u51fd\u6570",permalink:"/zh/sql-reference/aggregate-functions/"}},c={},g=[{value:"\u591a\u4e2a\u5730\u7406\u57fa",id:"multiple-geobases",level:2},{value:"regionToCity(id, geobase)",id:"regiontocityid-geobase",level:3},{value:"regionToArea(id, geobase)",id:"regiontoareaid-geobase",level:3},{value:"regionToDistrict(id[,geobase])",id:"regiontodistrictid-geobase",level:3},{value:"regionToCountry(id, geobase)",id:"regiontocountryid-geobase",level:3},{value:"regionToContinent(id, geobase)",id:"regiontocontinentid-geobase",level:3},{value:"regionToTopContinent (#regiontotopcontinent)",id:"regiontotopcontinent-regiontotopcontinent",level:3},{value:"regionToPopulation(id[, geobase])",id:"regiontopopulationid-geobase",level:3},{value:"regionIn(lhs,rhs[,\u5730\u7406\u6570\u636e\u5e93])",id:"regioninlhs-rhs-geobase",level:3},{value:"regionHierarchy(id[, geobase])",id:"regionhierarchyid-geobase",level:3},{value:"regionToName(id[, lang])",id:"regiontonameid-lang",level:3}],p={toc:g};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"functions-for-working-with-yandex-metrica-dictionaries"},"\u4f7f\u7528 Yandex.Metrica \u5b57\u5178\u51fd\u6570"),(0,i.kt)("p",null,"\u4e3a\u4e86\u4f7f\u4e0b\u9762\u7684\u529f\u80fd\u6b63\u5e38\u5de5\u4f5c\uff0c\u670d\u52a1\u5668\u914d\u7f6e\u5fc5\u987b\u6307\u5b9a\u83b7\u53d6\u6240\u6709 Yandex.Metrica \u5b57\u5178\u7684\u8def\u5f84\u548c\u5730\u5740\u3002Yandex.Metrica \u5b57\u5178\u5728\u4efb\u4f55\u8fd9\u4e9b\u51fd\u6570\u7684\u7b2c\u4e00\u6b21\u8c03\u7528\u65f6\u52a0\u8f7d\u3002 \u5982\u679c\u65e0\u6cd5\u52a0\u8f7d\u5f15\u7528\u5217\u8868\uff0c\u5219\u4f1a\u5f15\u53d1\u5f02\u5e38\u3002"),(0,i.kt)("p",null,"\u6709\u5173\u521b\u5efa\u5f15\u7528\u5217\u8868\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 \xab\u5b57\u5178\xbb \u90e8\u5206."),(0,i.kt)("h2",{id:"multiple-geobases"},"\u591a\u4e2a\u5730\u7406\u57fa"),(0,i.kt)("p",null,"ClickHouse\u652f\u6301\u540c\u65f6\u4f7f\u7528\u591a\u4e2a\u5907\u9009\u5730\u7406\u57fa\uff08\u533a\u57df\u5c42\u6b21\u7ed3\u6784\uff09\uff0c\u4ee5\u652f\u6301\u67d0\u4e9b\u5730\u533a\u6240\u5c5e\u56fd\u5bb6\u7684\u5404\u79cd\u89c2\u70b9\u3002"),(0,i.kt)("p",null,"\u8be5 \u2018clickhouse-server\u2019 config\u6307\u5b9a\u5177\u6709\u533a\u57df\u5c42\u6b21\u7ed3\u6784\u7684\u6587\u4ef6::",(0,i.kt)("inlineCode",{parentName:"p"},"<path_to_regions_hierarchy_file>/opt/geo/regions_hierarchy.txt</path_to_regions_hierarchy_file>")),(0,i.kt)("p",null,"\u9664\u4e86\u8fd9\u4e2a\u6587\u4ef6\uff0c\u5b83\u8fd8\u641c\u7d22\u9644\u8fd1\u6709_\u7b26\u53f7\u548c\u4efb\u4f55\u540e\u7f00\u9644\u52a0\u5230\u540d\u79f0\uff08\u6587\u4ef6\u6269\u5c55\u540d\u4e4b\u524d\uff09\u7684\u6587\u4ef6\u3002\n\u4f8b\u5982\uff0c\u5b83\u8fd8\u4f1a\u627e\u5230\u8be5\u6587\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"p"},"/opt/geo/regions_hierarchy_ua.txt"),"\uff0c\u5982\u679c\u5b58\u5728\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ua")," \u88ab\u79f0\u4e3a\u5b57\u5178\u952e\u3002 \u5bf9\u4e8e\u6ca1\u6709\u540e\u7f00\u7684\u5b57\u5178\uff0c\u952e\u662f\u7a7a\u5b57\u7b26\u4e32\u3002"),(0,i.kt)("p",null,"\u6240\u6709\u5b57\u5178\u90fd\u5728\u8fd0\u884c\u65f6\u91cd\u65b0\u52a0\u8f7d\uff08\u6bcf\u9694\u4e00\u5b9a\u6570\u91cf\u7684\u79d2\u91cd\u65b0\u52a0\u8f7d\u4e00\u6b21\uff0c\u5982builtin_dictionaries_reload_interval config\u53c2\u6570\u4e2d\u5b9a\u4e49\uff0c\u6216\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u6bcf\u5c0f\u65f6\u4e00\u6b21\uff09\u3002 \u4f46\u662f\uff0c\u53ef\u7528\u5b57\u5178\u5217\u8868\u5728\u670d\u52a1\u5668\u542f\u52a8\u65f6\u5b9a\u4e49\u4e00\u6b21\u3002"),(0,i.kt)("p",null,"\u6240\u6709\u5904\u7406\u533a\u57df\u7684\u51fd\u6570\u90fd\u5728\u672b\u5c3e\u6709\u4e00\u4e2a\u53ef\u9009\u53c2\u6570\u2014\u5b57\u5178\u952e\u3002\u5b83\u88ab\u79f0\u4e3a\u5730\u57fa\u3002\n\u793a\u4f8b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"regionToCountry(RegionID) \u2013 \u4f7f\u7528\u9ed8\u8ba4\u8def\u5f84: /opt/geo/regions_hierarchy.txt\nregionToCountry(RegionID, '') \u2013 \u4f7f\u7528\u9ed8\u8ba4\u8def\u5f84: /opt/geo/regions_hierarchy.txt\nregionToCountry(RegionID, 'ua') \u2013 \u4f7f\u7528\u5b57\u5178\u4e2d\u7684'ua' \u952e: /opt/geo/regions_hierarchy_ua.txt\n")),(0,i.kt)("h3",{id:"regiontocityid-geobase"},"regionToCity(id","[, geobase]",")"),(0,i.kt)("p",null,"\u4ece Yandex geobase \u63a5\u6536\u4e00\u4e2a UInt32 \u6570\u5b57\u7c7b\u578b\u7684\u533a\u57dfID \u3002\u5982\u679c\u8be5\u533a\u57df\u662f\u4e00\u4e2a\u57ce\u5e02\u6216\u57ce\u5e02\u7684\u4e00\u90e8\u5206\uff0c\u5b83\u5c06\u8fd4\u56de\u76f8\u5e94\u57ce\u5e02\u7684\u533a\u57dfID\u3002\u5426\u5219,\u8fd4\u56de0\u3002"),(0,i.kt)("h3",{id:"regiontoareaid-geobase"},"regionToArea(id","[, geobase]",")"),(0,i.kt)("p",null,"\u5c06\u533a\u57df\u8f6c\u6362\u4e3a\u533a\u57df\uff08\u5730\u7406\u6570\u636e\u5e93\u4e2d\u7684\u7c7b\u578b5\uff09\u3002 \u5728\u6240\u6709\u5176\u4ed6\u65b9\u5f0f\uff0c\u8fd9\u4e2a\u529f\u80fd\u662f\u4e00\u6837\u7684 \u2018regionToCity\u2019."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DISTINCT regionToName(regionToArea(toUInt32(number), 'ua'))\nFROM system.numbers\nLIMIT 15\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u250c\u2500regionToName(regionToArea(toUInt32(number), \\'ua\\'))\u2500\u2510\n\u2502                                                      \u2502\n\u2502 Moscow and Moscow region                             \u2502\n\u2502 St. Petersburg and Leningrad region                  \u2502\n\u2502 Belgorod region                                      \u2502\n\u2502 Ivanovsk region                                      \u2502\n\u2502 Kaluga region                                        \u2502\n\u2502 Kostroma region                                      \u2502\n\u2502 Kursk region                                         \u2502\n\u2502 Lipetsk region                                       \u2502\n\u2502 Orlov region                                         \u2502\n\u2502 Ryazan region                                        \u2502\n\u2502 Smolensk region                                      \u2502\n\u2502 Tambov region                                        \u2502\n\u2502 Tver region                                          \u2502\n\u2502 Tula region                                          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h3",{id:"regiontodistrictid-geobase"},"regionToDistrict(id","[",",geobase","]",")"),(0,i.kt)("p",null,"\u5c06\u533a\u57df\u8f6c\u6362\u4e3a\u8054\u90a6\u533a\uff08\u5730\u7406\u6570\u636e\u5e93\u4e2d\u7684\u7c7b\u578b4\uff09\u3002 \u5728\u6240\u6709\u5176\u4ed6\u65b9\u5f0f\uff0c\u8fd9\u4e2a\u529f\u80fd\u662f\u4e00\u6837\u7684 \u2018regionToCity\u2019."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DISTINCT regionToName(regionToDistrict(toUInt32(number), 'ua'))\nFROM system.numbers\nLIMIT 15\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u250c\u2500regionToName(regionToDistrict(toUInt32(number), \\'ua\\'))\u2500\u2510\n\u2502                                                          \u2502\n\u2502 Central federal district                                 \u2502\n\u2502 Northwest federal district                               \u2502\n\u2502 South federal district                                   \u2502\n\u2502 North Caucases federal district                          \u2502\n\u2502 Privolga federal district                                \u2502\n\u2502 Ural federal district                                    \u2502\n\u2502 Siberian federal district                                \u2502\n\u2502 Far East federal district                                \u2502\n\u2502 Scotland                                                 \u2502\n\u2502 Faroe Islands                                            \u2502\n\u2502 Flemish region                                           \u2502\n\u2502 Brussels capital region                                  \u2502\n\u2502 Wallonia                                                 \u2502\n\u2502 Federation of Bosnia and Herzegovina                     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h3",{id:"regiontocountryid-geobase"},"regionToCountry(id","[, geobase]",")"),(0,i.kt)("p",null,"\u5c06\u533a\u57df\u8f6c\u6362\u4e3a\u56fd\u5bb6\u3002 \u5728\u6240\u6709\u5176\u4ed6\u65b9\u5f0f\uff0c\u8fd9\u4e2a\u529f\u80fd\u662f\u4e00\u6837\u7684 \u2018regionToCity\u2019.\n\u793a\u4f8b: ",(0,i.kt)("inlineCode",{parentName:"p"},"regionToCountry(toUInt32(213)) = 225")," \u8f6c\u6362\u83ab\u65af\u79d1\uff08213\uff09\u5230\u4fc4\u7f57\u65af\uff08225\uff09\u3002"),(0,i.kt)("h3",{id:"regiontocontinentid-geobase"},"regionToContinent(id","[, geobase]",")"),(0,i.kt)("p",null,"\u5c06\u533a\u57df\u8f6c\u6362\u4e3a\u5927\u9646\u3002 \u5728\u6240\u6709\u5176\u4ed6\u65b9\u5f0f\uff0c\u8fd9\u4e2a\u529f\u80fd\u662f\u4e00\u6837\u7684 \u2018regionToCity\u2019.\n\u793a\u4f8b: ",(0,i.kt)("inlineCode",{parentName:"p"},"regionToContinent(toUInt32(213)) = 10001")," \u5c06\u83ab\u65af\u79d1\uff08213\uff09\u8f6c\u6362\u4e3a\u6b27\u4e9a\u5927\u9646\uff0810001\uff09\u3002"),(0,i.kt)("h3",{id:"regiontotopcontinent-regiontotopcontinent"},"regionToTopContinent (#regiontotopcontinent)"),(0,i.kt)("p",null,"\u67e5\u627e\u8be5\u533a\u57df\u5c42\u6b21\u7ed3\u6784\u4e2d\u6700\u9ad8\u7684\u5927\u9646\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"regionToTopContinent(id[, geobase])\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")," \u2014 Yandex geobase \u7684\u533a\u57df ID. ",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/int-uint"},"UInt32"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"geobase")," \u2014 \u5b57\u5178\u7684\u5efa. \u53c2\u9605 ",(0,i.kt)("a",{parentName:"li",href:"#multiple-geobases"},"Multiple Geobases"),". ",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/string"},"String"),". \u53ef\u9009.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9876\u7ea7\u5927\u9646\u7684\u6807\u8bc6\u7b26(\u5f53\u60a8\u5728\u533a\u57df\u5c42\u6b21\u7ed3\u6784\u4e2d\u6500\u722c\u65f6\uff0c\u662f\u540e\u8005)\u3002"),(0,i.kt)("li",{parentName:"ul"},"0\uff0c\u5982\u679c\u6ca1\u6709\u3002")),(0,i.kt)("p",null,"\u7c7b\u578b: ",(0,i.kt)("inlineCode",{parentName:"p"},"UInt32"),"."),(0,i.kt)("h3",{id:"regiontopopulationid-geobase"},"regionToPopulation(id","[",", geobase","]",")"),(0,i.kt)("p",null,"\u83b7\u53d6\u533a\u57df\u7684\u4eba\u53e3\u3002\n\u4eba\u53e3\u53ef\u4ee5\u8bb0\u5f55\u5728\u6587\u4ef6\u4e0e\u5730\u7403\u57fa\u3002\u8bf7\u53c2\u9605\xab\u5916\u90e8\u8bcd\u5178\xbb\u90e8\u5206\u3002\n\u5982\u679c\u6ca1\u6709\u4e3a\u8be5\u533a\u57df\u8bb0\u5f55\u4eba\u53e3\uff0c\u5219\u8fd4\u56de0\u3002\n\u5728Yandex\u5730\u7406\u6570\u636e\u5e93\u4e2d\uff0c\u53ef\u80fd\u4f1a\u4e3a\u5b50\u533a\u57df\u8bb0\u5f55\u4eba\u53e3\uff0c\u4f46\u4e0d\u4f1a\u4e3a\u7236\u533a\u57df\u8bb0\u5f55\u4eba\u53e3\u3002"),(0,i.kt)("h3",{id:"regioninlhs-rhs-geobase"},"regionIn(lhs,rhs","[",",\u5730\u7406\u6570\u636e\u5e93","]",")"),(0,i.kt)("p",null,"\u68c0\u67e5\u662f\u5426 \u2018lhs\u2019 \u5c5e\u4e8e\u4e00\u4e2a\u533a\u57df \u2018rhs\u2019 \u533a\u57df\u3002 \u5982\u679c\u5c5e\u4e8eUInt8\uff0c\u5219\u8fd4\u56de\u7b49\u4e8e1\u7684\u6570\u5b57\uff0c\u5982\u679c\u4e0d\u5c5e\u4e8e\u5219\u8fd4\u56de0\u3002\n\u8fd9\u79cd\u5173\u7cfb\u662f\u53cd\u5c04\u7684\u2014\u2014\u4efb\u4f55\u5730\u533a\u4e5f\u5c5e\u4e8e\u81ea\u5df1\u3002"),(0,i.kt)("h3",{id:"regionhierarchyid-geobase"},"regionHierarchy(id","[",", geobase","]",")"),(0,i.kt)("p",null,"\u4ece Yandex geobase \u63a5\u6536\u4e00\u4e2a UInt32 \u6570\u5b57\u7c7b\u578b\u7684\u533a\u57dfID\u3002\u8fd4\u56de\u4e00\u4e2a\u533a\u57dfID\u6570\u7ec4\uff0c\u7531\u4f20\u9012\u7684\u533a\u57df\u548c\u94fe\u4e0a\u7684\u6240\u6709\u7236\u8282\u70b9\u7ec4\u6210\u3002\n\u793a\u4f8b: ",(0,i.kt)("inlineCode",{parentName:"p"},"regionHierarchy(toUInt32(213)) = [213,1,3,225,10001,10000]"),"."),(0,i.kt)("h3",{id:"regiontonameid-lang"},"regionToName(id","[",", lang","]",")"),(0,i.kt)("p",null,"\u4ece Yandex geobase \u63a5\u6536\u4e00\u4e2a UInt32 \u6570\u5b57\u7c7b\u578b\u7684\u533a\u57dfID\u3002\u5e26\u6709\u8bed\u8a00\u540d\u79f0\u7684\u5b57\u7b26\u4e32\u53ef\u4ee5\u4f5c\u4e3a\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4f20\u9012\u3002\u652f\u6301\u7684\u8bed\u8a00\u6709:ru, en, ua, uk, by, kz, tr\u3002\u5982\u679c\u7701\u7565\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u5219\u4f7f\u7528' ru '\u8bed\u8a00\u3002\u5982\u679c\u4e0d\u652f\u6301\u8be5\u8bed\u8a00\uff0c\u5219\u629b\u51fa\u5f02\u5e38\u3002\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32-\u5bf9\u5e94\u8bed\u8a00\u7684\u533a\u57df\u540d\u79f0\u3002\u5982\u679c\u6307\u5b9aID\u7684\u533a\u57df\u4e0d\u5b58\u5728\uff0c\u5219\u8fd4\u56de\u4e00\u4e2a\u7a7a\u5b57\u7b26\u4e32\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ua")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"uk")," \u90fd\u610f\u5473\u7740\u4e4c\u514b\u5170\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/functions/ym_dict_functions/"},"\u539f\u59cb\u6587\u7ae0")," "))}d.isMDXComponent=!0}}]);
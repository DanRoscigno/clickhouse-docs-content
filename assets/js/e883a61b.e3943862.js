"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[59413],{3905:function(e,n,t){t.d(n,{Zo:function(){return i},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},i=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),f=s(t),m=a,d=f["".concat(o,".").concat(m)]||f[m]||u[m]||l;return t?r.createElement(d,c(c({ref:n},i),{},{components:t})):r.createElement(d,c({ref:n},i))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,c=new Array(l);c[0]=f;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var s=2;s<l;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},56867:function(e,n,t){t.r(n),t.d(n,{assets:function(){return i},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),c=["components"],p={sidebar_position:42,sidebar_label:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u043e\u0438\u0441\u043a\u0430 \u0438 \u0437\u0430\u043c\u0435\u043d\u044b \u0432 \u0441\u0442\u0440\u043e\u043a\u0430\u0445"},o="\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u043e\u0438\u0441\u043a\u0430 \u0438 \u0437\u0430\u043c\u0435\u043d\u044b \u0432 \u0441\u0442\u0440\u043e\u043a\u0430\u0445",s={unversionedId:"ru/sql-reference/functions/string-replace-functions",id:"ru/sql-reference/functions/string-replace-functions",title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u043e\u0438\u0441\u043a\u0430 \u0438 \u0437\u0430\u043c\u0435\u043d\u044b \u0432 \u0441\u0442\u0440\u043e\u043a\u0430\u0445",description:"funktsii-poiska-i-zameny-v-strokakh}",source:"@site/docs/ru/sql-reference/functions/string-replace-functions.md",sourceDirName:"ru/sql-reference/functions",slug:"/ru/sql-reference/functions/string-replace-functions",permalink:"/ru/sql-reference/functions/string-replace-functions",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/functions/string-replace-functions.md",tags:[],version:"current",sidebarPosition:42,frontMatter:{sidebar_position:42,sidebar_label:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u043e\u0438\u0441\u043a\u0430 \u0438 \u0437\u0430\u043c\u0435\u043d\u044b \u0432 \u0441\u0442\u0440\u043e\u043a\u0430\u0445"},sidebar:"russia",previous:{title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u043e\u0438\u0441\u043a\u0430 \u0432 \u0441\u0442\u0440\u043e\u043a\u0430\u0445",permalink:"/ru/sql-reference/functions/string-search-functions"},next:{title:"\u0423\u0441\u043b\u043e\u0432\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438",permalink:"/ru/sql-reference/functions/conditional-functions"}},i={},u=[{value:"replaceOne(haystack, pattern, replacement)",id:"replaceonehaystack-pattern-replacement",level:2},{value:"replaceAll(haystack, pattern, replacement)",id:"replaceallhaystack-pattern-replacement",level:2},{value:"replaceRegexpOne(haystack, pattern, replacement)",id:"replaceregexponehaystack-pattern-replacement",level:2},{value:"replaceRegexpAll(haystack, pattern, replacement)",id:"replaceregexpallhaystack-pattern-replacement",level:2}],f={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,c);return(0,l.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"funktsii-poiska-i-zameny-v-strokakh"},"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u043e\u0438\u0441\u043a\u0430 \u0438 \u0437\u0430\u043c\u0435\u043d\u044b \u0432 \u0441\u0442\u0440\u043e\u043a\u0430\u0445"),(0,l.kt)("h2",{id:"replaceonehaystack-pattern-replacement"},"replaceOne(haystack, pattern, replacement)"),(0,l.kt)("p",null,"\u0417\u0430\u043c\u0435\u043d\u0430 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0432\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f, \u0435\u0441\u043b\u0438 \u0442\u0430\u043a\u043e\u0435 \u0435\u0441\u0442\u044c, \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a\u0438 pattern \u0432 haystack \u043d\u0430 \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a\u0443 replacement.\n\u0417\u0434\u0435\u0441\u044c \u0438 \u0434\u0430\u043b\u0435\u0435, pattern \u0438 replacement \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0430\u043c\u0438."),(0,l.kt)("h2",{id:"replaceallhaystack-pattern-replacement"},"replaceAll(haystack, pattern, replacement)"),(0,l.kt)("p",null,"\u0417\u0430\u043c\u0435\u043d\u0430 \u0432\u0441\u0435\u0445 \u0432\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0439 \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a\u0438 pattern \u0432 haystack \u043d\u0430 \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a\u0443 replacement."),(0,l.kt)("h2",{id:"replaceregexponehaystack-pattern-replacement"},"replaceRegexpOne(haystack, pattern, replacement)"),(0,l.kt)("p",null,"\u0417\u0430\u043c\u0435\u043d\u0430 \u043f\u043e \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u043c\u0443 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044e pattern. \u0420\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 re2.\n\u0417\u0430\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0435\u0440\u0432\u043e\u0435 \u0432\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435, \u0435\u0441\u043b\u0438 \u0435\u0441\u0442\u044c.\n\u0412 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 replacement \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0443\u043a\u0430\u0437\u0430\u043d \u0448\u0430\u0431\u043b\u043e\u043d \u0434\u043b\u044f \u0437\u0430\u043c\u0435\u043d. \u042d\u0442\u043e\u0442 \u0448\u0430\u0431\u043b\u043e\u043d \u043c\u043e\u0436\u0435\u0442 \u0432\u043a\u043b\u044e\u0447\u0430\u0442\u044c \u0432 \u0441\u0435\u0431\u044f \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"\\0-\\9"),".\n\u041f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"\\0")," - \u0432\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0433\u043e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0446\u0435\u043b\u0438\u043a\u043e\u043c. \u041f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"\\1-\\9")," - \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043f\u043e \u043d\u043e\u043c\u0435\u0440\u0443 subpattern-\u044b.\n\u0414\u043b\u044f \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u0441\u0438\u043c\u0432\u043e\u043b\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"\\")," \u0432 \u0448\u0430\u0431\u043b\u043e\u043d\u0435, \u043e\u043d \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u044d\u043a\u0440\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u0438\u043c\u0432\u043e\u043b\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"\\"),".\n\u0422\u0430\u043a\u0436\u0435 \u043f\u043e\u043c\u043d\u0438\u0442\u0435 \u043e \u0442\u043e\u043c, \u0447\u0442\u043e \u0441\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0439 \u043b\u0438\u0442\u0435\u0440\u0430\u043b \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0435\u0449\u0451 \u043e\u0434\u043d\u043e \u044d\u043a\u0440\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435."),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 1. \u041f\u0435\u0440\u0435\u0432\u0435\u0434\u0451\u043c \u0434\u0430\u0442\u0443 \u0432 \u0430\u043c\u0435\u0440\u0438\u043a\u0430\u043d\u0441\u043a\u0438\u0439 \u0444\u043e\u0440\u043c\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DISTINCT\n    EventDate,\n    replaceRegexpOne(toString(EventDate), '(\\\\d{4})-(\\\\d{2})-(\\\\d{2})', '\\\\2/\\\\3/\\\\1') AS res\nFROM test.hits\nLIMIT 7\nFORMAT TabSeparated\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"2014-03-17      03/17/2014\n2014-03-18      03/18/2014\n2014-03-19      03/19/2014\n2014-03-20      03/20/2014\n2014-03-21      03/21/2014\n2014-03-22      03/22/2014\n2014-03-23      03/23/2014\n")),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 2. \u0420\u0430\u0437\u043c\u043d\u043e\u0436\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0443 \u0434\u0435\u0441\u044f\u0442\u044c \u0440\u0430\u0437:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT replaceRegexpOne('Hello, World!', '.*', '\\\\0\\\\0\\\\0\\\\0\\\\0\\\\0\\\\0\\\\0\\\\0\\\\0') AS res\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World! \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"replaceregexpallhaystack-pattern-replacement"},"replaceRegexpAll(haystack, pattern, replacement)"),(0,l.kt)("p",null,"\u0422\u043e \u0436\u0435 \u0441\u0430\u043c\u043e\u0435, \u043d\u043e \u0434\u0435\u043b\u0430\u0435\u0442\u0441\u044f \u0437\u0430\u043c\u0435\u043d\u0430 \u0432\u0441\u0435\u0445 \u0432\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0439. \u041f\u0440\u0438\u043c\u0435\u0440:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT replaceRegexpAll('Hello, World!', '.', '\\\\0\\\\0') AS res\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 HHeelllloo,,  WWoorrlldd!! \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u0412 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f, \u0435\u0441\u043b\u0438 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0441\u0440\u0430\u0431\u043e\u0442\u0430\u043b\u043e \u043d\u0430 \u043f\u0443\u0441\u0442\u043e\u0439 \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a\u0435, \u0442\u043e \u0437\u0430\u043c\u0435\u043d\u0430 \u0434\u0435\u043b\u0430\u0435\u0442\u0441\u044f \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u0430.\n\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT replaceRegexpAll('Hello, World!', '^', 'here: ') AS res\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 here: Hello, World! \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);
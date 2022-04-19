"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[57391],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(o,".").concat(f)]||m[f]||c[f]||l;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44068:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],s={sidebar_position:46,sidebar_label:"KILL"},o="KILL",u={unversionedId:"ru/sql-reference/statements/kill",id:"ru/sql-reference/statements/kill",title:"KILL",description:"kill-statements}",source:"@site/docs/ru/sql-reference/statements/kill.md",sourceDirName:"ru/sql-reference/statements",slug:"/ru/sql-reference/statements/kill",permalink:"/ru/sql-reference/statements/kill",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/kill.md",tags:[],version:"current",sidebarPosition:46,frontMatter:{sidebar_position:46,sidebar_label:"KILL"},sidebar:"russia",previous:{title:"EXISTS",permalink:"/ru/sql-reference/statements/exists"},next:{title:"OPTIMIZE",permalink:"/ru/sql-reference/statements/optimize"}},p={},c=[{value:"KILL QUERY",id:"kill-query",level:2},{value:"KILL MUTATION",id:"kill-mutation",level:2}],m={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"kill-statements"},"KILL"),(0,l.kt)("p",null,"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u0432\u0430 \u0432\u0438\u0434\u0430 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u0432 KILL: KILL QUERY \u0438 KILL MUTATION"),(0,l.kt)("h2",{id:"kill-query"},"KILL QUERY"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"KILL QUERY [ON CLUSTER cluster]\n  WHERE <where expression to SELECT FROM system.processes query>\n  [SYNC|ASYNC|TEST]\n  [FORMAT format]\n")),(0,l.kt)("p",null,"\u041f\u044b\u0442\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0438\u043d\u0443\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u044e\u0449\u0438\u0435\u0441\u044f \u0432 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u044b.\n\u0417\u0430\u043f\u0440\u043e\u0441\u044b \u0434\u043b\u044f \u043f\u0440\u0438\u043d\u0443\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0432\u044b\u0431\u0438\u0440\u0430\u044e\u0442\u0441\u044f \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b system.processes \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0443\u0441\u043b\u043e\u0432\u0438\u044f, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u0432 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"KILL"),"."),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u041f\u0440\u0438\u043d\u0443\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043e\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0432\u0441\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c query_id:\nKILL QUERY WHERE query_id='2-857d-4a57-9ee0-327da5d60a90'\n\n-- \u0421\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e \u043e\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0432\u0441\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f 'username':\nKILL QUERY WHERE user='username' SYNC\n")),(0,l.kt)("p",null,"Readonly-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u043c\u043e\u0433\u0443\u0442 \u043e\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u0432\u043e\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u044b."),(0,l.kt)("p",null,"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 (",(0,l.kt)("inlineCode",{parentName:"p"},"ASYNC"),"), \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0435 \u0434\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432."),(0,l.kt)("p",null,"\u0421\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 (",(0,l.kt)("inlineCode",{parentName:"p"},"SYNC"),") \u043e\u0436\u0438\u0434\u0430\u0435\u0442 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0432\u0441\u0435\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0438 \u043f\u043e\u0441\u0442\u0440\u043e\u0447\u043d\u043e \u0432\u044b\u0432\u043e\u0434\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430\u0445 \u043f\u043e \u0445\u043e\u0434\u0443 \u0438\u0445 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438.\n\u041e\u0442\u0432\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043a\u043e\u043b\u043e\u043d\u043a\u0443 ",(0,l.kt)("inlineCode",{parentName:"p"},"kill_status"),", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u2018finished\u2019 - \u0437\u0430\u043f\u0440\u043e\u0441 \u0431\u044b\u043b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d;"),(0,l.kt)("li",{parentName:"ol"},"\u2018waiting\u2019 - \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d \u0441\u0438\u0433\u043d\u0430\u043b \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f, \u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f \u0435\u0433\u043e \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430;"),(0,l.kt)("li",{parentName:"ol"},"\u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0442 \u043f\u0440\u0438\u0447\u0438\u043d\u0443 \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430.")),(0,l.kt)("p",null,"\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 (",(0,l.kt)("inlineCode",{parentName:"p"},"TEST"),") \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u043f\u0440\u0430\u0432\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438 \u0432\u044b\u0432\u043e\u0434\u0438\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0434\u043b\u044f \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438."),(0,l.kt)("h2",{id:"kill-mutation"},"KILL MUTATION"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"KILL MUTATION [ON CLUSTER cluster]\n  WHERE <where expression to SELECT FROM system.mutations query>\n  [TEST]\n  [FORMAT format]\n")),(0,l.kt)("p",null,"\u041f\u044b\u0442\u0430\u0435\u0442\u0441\u044f \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0449\u0438\u0435\u0441\u044f \u0432 \u0434\u0430\u043d\u043d\u044b\u0435 \u043c\u043e\u043c\u0435\u043d\u0442 ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/alter/#mutations"},"\u043c\u0443\u0442\u0430\u0446\u0438\u0438"),". \u041c\u0443\u0442\u0430\u0446\u0438\u0438 \u0434\u043b\u044f \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0432\u044b\u0431\u0438\u0440\u0430\u044e\u0442\u0441\u044f \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b ",(0,l.kt)("a",{parentName:"p",href:"/ru/operations/system-tables/mutations#system_tables-mutations"},(0,l.kt)("inlineCode",{parentName:"a"},"system.mutations"))," \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0443\u0441\u043b\u043e\u0432\u0438\u044f, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u0432 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"KILL"),"."),(0,l.kt)("p",null,"\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 (",(0,l.kt)("inlineCode",{parentName:"p"},"TEST"),") \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u043f\u0440\u0430\u0432\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438 \u0432\u044b\u0432\u043e\u0434\u0438\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0434\u043b\u044f \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438."),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440\u044b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u041e\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0432\u0441\u0435 \u043c\u0443\u0442\u0430\u0446\u0438\u0438 \u043e\u0434\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b:\nKILL MUTATION WHERE database = 'default' AND table = 'table'\n\n-- \u041e\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u0443\u044e \u043c\u0443\u0442\u0430\u0446\u0438\u044e:\nKILL MUTATION WHERE database = 'default' AND table = 'table' AND mutation_id = 'mutation_3.txt'\n")),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441 \u043f\u043e\u043b\u0435\u0437\u0435\u043d \u0432 \u0441\u043b\u0443\u0447\u0430\u044f\u0445, \u043a\u043e\u0433\u0434\u0430 \u043c\u0443\u0442\u0430\u0446\u0438\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c\u0441\u044f \u0434\u043e \u043a\u043e\u043d\u0446\u0430 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u043c\u0443\u0442\u0430\u0446\u0438\u0438 \u0431\u0440\u043e\u0441\u0430\u0435\u0442 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0430\u0431\u043b\u0438\u0446\u044b)."),(0,l.kt)("p",null,"\u0414\u0430\u043d\u043d\u044b\u0435, \u0443\u0436\u0435 \u0438\u0437\u043c\u0435\u043d\u0451\u043d\u043d\u044b\u0435 \u043c\u0443\u0442\u0430\u0446\u0438\u0435\u0439, \u043e\u0441\u0442\u0430\u044e\u0442\u0441\u044f \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 (\u043e\u0442\u043a\u0430\u0442\u0430 \u043d\u0430 \u0441\u0442\u0430\u0440\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0435 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442)."))}f.isMDXComponent=!0}}]);
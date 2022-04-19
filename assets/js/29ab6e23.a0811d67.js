"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[41451],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return k}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=c(n),k=o,d=m["".concat(p,".").concat(k)]||m[k]||u[k]||r;return n?a.createElement(d,l(l({ref:t},i),{},{components:n})):a.createElement(d,l({ref:t},i))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59943:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),l=["components"],s={sidebar_position:41,sidebar_label:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 CatBoost \u0432 ClickHouse"},p="\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 CatBoost \u0432 ClickHouse",c={unversionedId:"ru/guides/apply-catboost-model",id:"ru/guides/apply-catboost-model",title:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 CatBoost \u0432 ClickHouse",description:"applying-catboost-model-in-clickhouse}",source:"@site/docs/ru/guides/apply-catboost-model.md",sourceDirName:"ru/guides",slug:"/ru/guides/apply-catboost-model",permalink:"/ru/guides/apply-catboost-model",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/guides/apply-catboost-model.md",tags:[],version:"current",sidebarPosition:41,frontMatter:{sidebar_position:41,sidebar_label:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 CatBoost \u0432 ClickHouse"},sidebar:"russia",previous:{title:"\u0420\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0430",permalink:"/ru/guides/"},next:{title:"\u042d\u043a\u0441\u043f\u043b\u0443\u0430\u0442\u0430\u0446\u0438\u044f",permalink:"/ru/operations/"}},i={},u=[{value:"\u041f\u0435\u0440\u0435\u0434 \u043d\u0430\u0447\u0430\u043b\u043e\u043c \u0440\u0430\u0431\u043e\u0442\u044b",id:"prerequisites",level:2},{value:"1. \u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u0443",id:"create-table",level:2},{value:"2. \u0412\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443",id:"insert-data-to-table",level:2},{value:"3. \u0418\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0439\u0442\u0435 CatBoost \u0432 ClickHouse",id:"integrate-catboost-into-clickhouse",level:2},{value:"4. \u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u0432\u044b\u0432\u043e\u0434 \u043c\u043e\u0434\u0435\u043b\u0438 \u0438\u0437 SQL",id:"run-model-inference",level:2}],m={toc:u};function k(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"applying-catboost-model-in-clickhouse"},"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 CatBoost \u0432 ClickHouse"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://catboost.ai"},"CatBoost")," \u2014 \u043e\u0442\u043a\u0440\u044b\u0442\u0430\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u0430\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0435\u0439 ",(0,r.kt)("a",{parentName:"p",href:"https://yandex.ru/company/"},"\u042f\u043d\u0434\u0435\u043a\u0441")," \u0434\u043b\u044f \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0441\u0445\u0435\u043c\u0443 \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442\u043d\u043e\u0433\u043e \u0431\u0443\u0441\u0442\u0438\u043d\u0433\u0430."),(0,r.kt)("p",null,"\u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u044d\u0442\u043e\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0432\u044b \u043d\u0430\u0443\u0447\u0438\u0442\u0435\u0441\u044c \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0442\u044c \u043f\u0440\u0435\u0434\u043e\u0431\u0443\u0447\u0435\u043d\u043d\u044b\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u0432 ClickHouse: \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0432\u044b \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u0432\u044b\u0432\u043e\u0434 \u043c\u043e\u0434\u0435\u043b\u0438 \u0438\u0437 SQL."),(0,r.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u044c CatBoost \u0432 ClickHouse:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#create-table"},"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u0443"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#insert-data-to-table"},"\u0412\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#integrate-catboost-into-clickhouse"},"\u0418\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0439\u0442\u0435 CatBoost \u0432 ClickHouse")," (\u041e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0448\u0430\u0433)."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#run-model-inference"},"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u0432\u044b\u0432\u043e\u0434 \u043c\u043e\u0434\u0435\u043b\u0438 \u0438\u0437 SQL"),".")),(0,r.kt)("p",null,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e\u0431 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0438 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u0432 CatBoost, \u0441\u043c. ",(0,r.kt)("a",{parentName:"p",href:"https://catboost.ai/docs/features/training.html#training"},"\u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0435\u0439"),"."),(0,r.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u0438 CatBoost, \u0435\u0441\u043b\u0438 \u0438\u0445 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u0431\u044b\u043b\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0430, \u0431\u0435\u0437 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b ",(0,r.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/system#query_language-system-reload-model"},"RELOAD MODEL")," \u0438 ",(0,r.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/system#query_language-system-reload-models"},"RELOAD MODELS"),"."),(0,r.kt)("h2",{id:"prerequisites"},"\u041f\u0435\u0440\u0435\u0434 \u043d\u0430\u0447\u0430\u043b\u043e\u043c \u0440\u0430\u0431\u043e\u0442\u044b"),(0,r.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0449\u0435 \u043d\u0435\u0442 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"Docker"),", \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0435\u0433\u043e."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},':::note "\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"\n[Docker](https://www.docker.com) \u2013 \u044d\u0442\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u0430\u044f \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0437\u043e\u043b\u0438\u0440\u0443\u044e\u0442 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0443 CatBoost \u0438 ClickHouse \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u0439 \u0447\u0430\u0441\u0442\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u044b.\n:::\n')),(0,r.kt)("p",null,"\u041f\u0435\u0440\u0435\u0434 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435\u043c \u043c\u043e\u0434\u0435\u043b\u0438 CatBoost:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," \u0421\u043a\u0430\u0447\u0430\u0439\u0442\u0435 ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/yandex/tutorial-catboost-clickhouse"},"Docker-\u043e\u0431\u0440\u0430\u0437")," \u0438\u0437 \u0440\u0435\u0435\u0441\u0442\u0440\u0430:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker pull yandex/tutorial-catboost-clickhouse\n")),(0,r.kt)("p",null,"\u0414\u0430\u043d\u043d\u044b\u0439 Docker-\u043e\u0431\u0440\u0430\u0437 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0432\u0441\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0435 \u0434\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 CatBoost \u0438 ClickHouse: \u043a\u043e\u0434, \u0441\u0440\u0435\u0434\u0443 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f, \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438, \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0438 \u0444\u0430\u0439\u043b\u044b \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435, \u0447\u0442\u043e Docker-\u043e\u0431\u0440\u0430\u0437 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043a\u0430\u0447\u0430\u043b\u0441\u044f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker image ls\nREPOSITORY                            TAG                 IMAGE ID            CREATED             SIZE\nyandex/tutorial-catboost-clickhouse   latest              622e4d17945b        22 hours ago        1.37GB\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.")," \u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 Docker-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043d\u0430 \u0434\u0430\u043d\u043d\u043e\u043c \u043e\u0431\u0440\u0430\u0437\u0435:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker run -it -p 8888:8888 yandex/tutorial-catboost-clickhouse\n")),(0,r.kt)("h2",{id:"create-table"},"1. \u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u0443"),(0,r.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0434\u043b\u044f \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0438:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," \u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u043a\u043b\u0438\u0435\u043d\u0442 ClickHouse:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ clickhouse client\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},':::note "\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"\n\u0421\u0435\u0440\u0432\u0435\u0440 ClickHouse \u0443\u0436\u0435 \u0437\u0430\u043f\u0443\u0449\u0435\u043d \u0432\u043d\u0443\u0442\u0440\u0438 Docker-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430.\n:::\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," \u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0432 ClickHouse \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u044b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},":) CREATE TABLE amazon_train\n(\n    date Date MATERIALIZED today(),\n    ACTION UInt8,\n    RESOURCE UInt32,\n    MGR_ID UInt32,\n    ROLE_ROLLUP_1 UInt32,\n    ROLE_ROLLUP_2 UInt32,\n    ROLE_DEPTNAME UInt32,\n    ROLE_TITLE UInt32,\n    ROLE_FAMILY_DESC UInt32,\n    ROLE_FAMILY UInt32,\n    ROLE_CODE UInt32\n)\nENGINE = MergeTree ORDER BY date\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.")," \u0412\u044b\u0439\u0434\u0438\u0442\u0435 \u0438\u0437 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 ClickHouse:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},":) exit\n")),(0,r.kt)("h2",{id:"insert-data-to-table"},"2. \u0412\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443"),(0,r.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," \u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u0443:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ clickhouse client --host 127.0.0.1 --query 'INSERT INTO amazon_train FORMAT CSVWithNames' < ~/amazon/train.csv\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," \u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u043a\u043b\u0438\u0435\u043d\u0442 ClickHouse:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ clickhouse client\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.")," \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435, \u0447\u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043b\u0438\u0441\u044c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},":) SELECT count() FROM amazon_train\n\nSELECT count()\nFROM amazon_train\n\n+-count()-+\n|   65538 |\n+---------+\n")),(0,r.kt)("h2",{id:"integrate-catboost-into-clickhouse"},"3. \u0418\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0439\u0442\u0435 CatBoost \u0432 ClickHouse"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},':::note "\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"\n**\u041e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0448\u0430\u0433.** Docker-\u043e\u0431\u0440\u0430\u0437 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0432\u0441\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0435 \u0434\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 CatBoost \u0438 ClickHouse.\n:::\n')),(0,r.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c CatBoost \u0432 ClickHouse:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," \u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443 \u0434\u043b\u044f \u043e\u0446\u0435\u043d\u043a\u0438 \u043c\u043e\u0434\u0435\u043b\u0438."),(0,r.kt)("p",null,"\u041d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0431\u044b\u0441\u0442\u0440\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u043e\u0446\u0435\u043d\u0438\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u044c CatBoost \u2014 \u044d\u0442\u043e \u0441\u043a\u043e\u043c\u043f\u0438\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443 ",(0,r.kt)("inlineCode",{parentName:"p"},"libcatboostmodel.<so|dll|dylib>"),". \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e \u0442\u043e\u043c, \u043a\u0430\u043a \u0441\u043a\u043e\u043c\u043f\u0438\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443, \u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0432 ",(0,r.kt)("a",{parentName:"p",href:"https://catboost.ai/docs/concepts/c-plus-plus-api_dynamic-c-pluplus-wrapper.html"},"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 CatBoost"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," \u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0432 \u043b\u044e\u0431\u043e\u043c \u043c\u0435\u0441\u0442\u0435 \u043d\u043e\u0432\u0443\u044e \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e \u0441 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u043c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," \u0438 \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u0435 \u0432 \u043d\u0435\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u0443\u044e \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443. Docker-\u043e\u0431\u0440\u0430\u0437 \u0443\u0436\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443 ",(0,r.kt)("inlineCode",{parentName:"p"},"data/libcatboostmodel.so"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.")," \u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0432 \u043b\u044e\u0431\u043e\u043c \u043c\u0435\u0441\u0442\u0435 \u043d\u043e\u0432\u0443\u044e \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e \u0434\u043b\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043c\u043e\u0434\u0435\u043b\u0438 \u0441 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u043c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,r.kt)("inlineCode",{parentName:"p"},"models"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4.")," \u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0444\u0430\u0439\u043b \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043c\u043e\u0434\u0435\u043b\u0438 \u0441 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u043c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,r.kt)("inlineCode",{parentName:"p"},"models/amazon_model.xml"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5.")," \u041e\u043f\u0438\u0448\u0438\u0442\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u043c\u043e\u0434\u0435\u043b\u0438:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<models>\n    <model>\n        \x3c!-- \u0422\u0438\u043f \u043c\u043e\u0434\u0435\u043b\u0438. \u0412 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 ClickHouse \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043c\u043e\u0434\u0435\u043b\u044c catboost. --\x3e\n        <type>catboost</type>\n        \x3c!-- \u0418\u043c\u044f \u043c\u043e\u0434\u0435\u043b\u0438. --\x3e\n        <name>amazon</name>\n        \x3c!-- \u041f\u0443\u0442\u044c \u043a \u043e\u0431\u0443\u0447\u0435\u043d\u043d\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438. --\x3e\n        <path>/home/catboost/tutorial/catboost_model.bin</path>\n        \x3c!-- \u0418\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f. --\x3e\n        <lifetime>0</lifetime>\n    </model>\n</models>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"6.")," \u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e ClickHouse \u043f\u0443\u0442\u044c \u043a CatBoost \u0438 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043c\u043e\u0434\u0435\u043b\u0438:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- \u0424\u0430\u0439\u043b etc/clickhouse-server/config.d/models_config.xml. --\x3e\n<catboost_dynamic_library_path>/home/catboost/data/libcatboostmodel.so</catboost_dynamic_library_path>\n<models_config>/home/catboost/models/*_model.xml</models_config>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},':::note "\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"\n\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u0437\u0434\u043d\u0435\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0443\u0442\u044c \u043a \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043c\u043e\u0434\u0435\u043b\u0438 CatBoost \u0431\u0435\u0437 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430.\n:::\n')),(0,r.kt)("h2",{id:"run-model-inference"},"4. \u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u0432\u044b\u0432\u043e\u0434 \u043c\u043e\u0434\u0435\u043b\u0438 \u0438\u0437 SQL"),(0,r.kt)("p",null,"\u0414\u043b\u044f \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043c\u043e\u0434\u0435\u043b\u0438 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u043a\u043b\u0438\u0435\u043d\u0442 ClickHouse ",(0,r.kt)("inlineCode",{parentName:"p"},"$ clickhouse client"),"."),(0,r.kt)("p",null,"\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435, \u0447\u0442\u043e \u043c\u043e\u0434\u0435\u043b\u044c \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},":) SELECT\n    modelEvaluate('amazon',\n                RESOURCE,\n                MGR_ID,\n                ROLE_ROLLUP_1,\n                ROLE_ROLLUP_2,\n                ROLE_DEPTNAME,\n                ROLE_TITLE,\n                ROLE_FAMILY_DESC,\n                ROLE_FAMILY,\n                ROLE_CODE) > 0 AS prediction,\n    ACTION AS target\nFROM amazon_train\nLIMIT 10\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},':::note "\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"\n\u0424\u0443\u043d\u043a\u0446\u0438\u044f [modelEvaluate](/ru/sql-reference/functions/other-functions#function-modelevaluate) \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043a\u043e\u0440\u0442\u0435\u0436\u0438 (tuple) \u0441 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u043c\u0438 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0430\u043c\u0438 \u043f\u043e \u043a\u043b\u0430\u0441\u0441\u0430\u043c \u0434\u043b\u044f \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u0441 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 \u043a\u043b\u0430\u0441\u0441\u0430\u043c\u0438.\n:::\n')),(0,r.kt)("p",null,"\u0421\u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u0443\u0439\u0442\u0435 \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},":) SELECT\n    modelEvaluate('amazon',\n                RESOURCE,\n                MGR_ID,\n                ROLE_ROLLUP_1,\n                ROLE_ROLLUP_2,\n                ROLE_DEPTNAME,\n                ROLE_TITLE,\n                ROLE_FAMILY_DESC,\n                ROLE_FAMILY,\n                ROLE_CODE) AS prediction,\n    1. / (1 + exp(-prediction)) AS probability,\n    ACTION AS target\nFROM amazon_train\nLIMIT 10\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},':::note "\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"\n\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043f\u0440\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044e [exp()](/ru/sql-reference/functions/math-functions).\n:::\n')),(0,r.kt)("p",null,"\u041f\u043e\u0441\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u043b\u043e\u0433\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u043f\u043e\u0442\u0435\u0440\u044c (LogLoss) \u043d\u0430 \u0432\u0441\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},":) SELECT -avg(tg * log(prob) + (1 - tg) * log(1 - prob)) AS logloss\nFROM\n(\n    SELECT\n        modelEvaluate('amazon',\n                    RESOURCE,\n                    MGR_ID,\n                    ROLE_ROLLUP_1,\n                    ROLE_ROLLUP_2,\n                    ROLE_DEPTNAME,\n                    ROLE_TITLE,\n                    ROLE_FAMILY_DESC,\n                    ROLE_FAMILY,\n                    ROLE_CODE) AS prediction,\n        1. / (1. + exp(-prediction)) AS prob,\n        ACTION AS tg\n    FROM amazon_train\n)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},':::note "\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"\n\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043f\u0440\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u0438 [avg()](/ru/sql-reference/aggregate-functions/reference/avg#agg_function-avg), [log()](/ru/sql-reference/functions/math-functions).\n:::\n')))}k.isMDXComponent=!0}}]);
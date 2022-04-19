"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[67729],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),k=a,d=u["".concat(o,".").concat(k)]||u[k]||m[k]||i;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},16325:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],p={sidebar_position:32,sidebar_label:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"},o="\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",s={unversionedId:"ru/engines/table-engines/mergetree-family/custom-partitioning-key",id:"ru/engines/table-engines/mergetree-family/custom-partitioning-key",title:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",description:"proizvolnyi-kliuch-partitsionirovaniia}",source:"@site/docs/ru/engines/table-engines/mergetree-family/custom-partitioning-key.md",sourceDirName:"ru/engines/table-engines/mergetree-family",slug:"/ru/engines/table-engines/mergetree-family/custom-partitioning-key",permalink:"/ru/engines/table-engines/mergetree-family/custom-partitioning-key",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/engines/table-engines/mergetree-family/custom-partitioning-key.md",tags:[],version:"current",sidebarPosition:32,frontMatter:{sidebar_position:32,sidebar_label:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"},sidebar:"russia",previous:{title:"\u0420\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445",permalink:"/ru/engines/table-engines/mergetree-family/replication"},next:{title:"ReplacingMergeTree",permalink:"/ru/engines/table-engines/mergetree-family/replacingmergetree"}},c={},m=[],u={toc:m};function k(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"proizvolnyi-kliuch-partitsionirovaniia"},"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"),(0,i.kt)("p",null,"\u041f\u0430\u0440\u0442\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0430 ",(0,i.kt)("a",{parentName:"p",href:"/ru/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," (\u0432\u043a\u043b\u044e\u0447\u0430\u044f ",(0,i.kt)("a",{parentName:"p",href:"/ru/engines/table-engines/mergetree-family/replication"},"\u0440\u0435\u043f\u043b\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b"),"). \u0422\u0430\u0431\u043b\u0438\u0446\u044b ",(0,i.kt)("a",{parentName:"p",href:"/ru/engines/table-engines/special/materializedview#materializedview"},"MaterializedView"),", \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0442\u0430\u0431\u043b\u0438\u0446 MergeTree, \u0442\u0430\u043a\u0436\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435."),(0,i.kt)("p",null,"\u041f\u0430\u0440\u0442\u0438\u0446\u0438\u044f \u2013 \u044d\u0442\u043e \u043d\u0430\u0431\u043e\u0440 \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435, \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u043d\u044b\u0445 \u043f\u043e \u043a\u0430\u043a\u043e\u043c\u0443-\u043b\u0438\u0431\u043e \u043a\u0440\u0438\u0442\u0435\u0440\u0438\u044e. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u044f \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u043e \u043c\u0435\u0441\u044f\u0446\u0443, \u043f\u043e \u0434\u043d\u044e \u0438\u043b\u0438 \u043f\u043e \u0442\u0438\u043f\u0443 \u0441\u043e\u0431\u044b\u0442\u0438\u044f. \u0414\u0430\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0439 \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e. \u042d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0443 \u0441 \u0434\u0430\u043d\u043d\u044b\u043c\u0438, \u0442\u0430\u043a \u043a\u0430\u043a \u043f\u0440\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0435 \u043f\u043e\u0434\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0438\u0437 \u0432\u0441\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0437\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439 \u043c\u0435\u0441\u044f\u0446, ClickHouse \u0431\u0443\u0434\u0435\u0442 \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0437\u0430 \u044d\u0442\u043e\u0442 \u043c\u0435\u0441\u044f\u0446."),(0,i.kt)("p",null,"\u041a\u043b\u044e\u0447 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0438 ",(0,i.kt)("a",{parentName:"p",href:"/ru/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-creating-a-table"},"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b"),", \u0432 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"PARTITION BY expr"),". \u041a\u043b\u044e\u0447 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u0441\u043e\u0431\u043e\u0439 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0438\u0437 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u044b. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u0434\u0430\u0442\u044c \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u043e \u043c\u0435\u0441\u044f\u0446\u0430\u043c, \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"toYYYYMM(date_column)"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE visits\n(\n    VisitDate Date,\n    Hour UInt8,\n    ClientID UUID\n)\nENGINE = MergeTree()\nPARTITION BY toYYYYMM(VisitDate)\nORDER BY Hour\n")),(0,i.kt)("p",null,"\u041a\u043b\u044e\u0447\u043e\u043c \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043a\u043e\u0440\u0442\u0435\u0436 \u0438\u0437 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0439 (\u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e ",(0,i.kt)("a",{parentName:"p",href:"/ru/engines/table-engines/mergetree-family/mergetree#primary-keys-and-indexes-in-queries"},"\u043f\u0435\u0440\u0432\u0438\u0447\u043d\u043e\u043c\u0443 \u043a\u043b\u044e\u0447\u0443"),"). \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ENGINE = ReplicatedCollapsingMergeTree('/clickhouse/tables/name', 'replica1', Sign)\nPARTITION BY (toMonday(StartDate), EventType)\nORDER BY (CounterID, StartDate, intHash32(UserID));\n")),(0,i.kt)("p",null,"\u0412 \u044d\u0442\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0437\u0430\u0434\u0430\u043d\u043e \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u043e \u0442\u0438\u043f\u0430\u043c \u0441\u043e\u0431\u044b\u0442\u0438\u0439, \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u0435\u0434\u0448\u0438\u0445 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u043d\u0435\u0434\u0435\u043b\u0438."),(0,i.kt)("p",null,"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u043a\u043b\u044e\u0447 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0441 \u043f\u043b\u0430\u0432\u0430\u044e\u0449\u0435\u0439 \u0437\u0430\u043f\u044f\u0442\u043e\u0439 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f. \u0427\u0442\u043e\u0431\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0435\u0433\u043e, \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 ",(0,i.kt)("a",{parentName:"p",href:"/ru/operations/settings/merge-tree-settings#allow_floating_point_partition_key"},"allow_floating_point_partition_key"),"."),(0,i.kt)("p",null,"\u041a\u0430\u0436\u0434\u0430\u044f \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u044f \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u043e\u0432 \u0438\u043b\u0438 \u0442\u0430\u043a \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u043c\u044b\u0445 ",(0,i.kt)("em",{parentName:"p"},"\u043a\u0443\u0441\u043a\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445"),". \u041a\u0430\u0436\u0434\u044b\u0439 \u043a\u0443\u0441\u043e\u043a \u043e\u0442\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d \u043f\u043e \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u043e\u043c\u0443 \u043a\u043b\u044e\u0447\u0443. \u041f\u0440\u0438 \u0432\u0441\u0442\u0430\u0432\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u043a\u0430\u0436\u0434\u0430\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f \u0432 \u0432\u0438\u0434\u0435 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u0443\u0441\u043a\u0430. \u0427\u0435\u0440\u0435\u0437 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u043f\u043e\u0441\u043b\u0435 \u0432\u0441\u0442\u0430\u0432\u043a\u0438 (\u043e\u0431\u044b\u0447\u043d\u043e \u0434\u043e 10 \u043c\u0438\u043d\u0443\u0442), ClickHouse \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0432 \u0444\u043e\u043d\u043e\u0432\u043e\u043c \u0440\u0435\u0436\u0438\u043c\u0435 \u0441\u043b\u0438\u044f\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u2014 \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u043a\u0443\u0441\u043a\u0438 \u0434\u043b\u044f \u043e\u0434\u043d\u043e\u0439 \u0438 \u0442\u043e\u0439 \u0436\u0435 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438 \u0431\u0443\u0434\u0443\u0442 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u044b \u0432 \u0431\u043e\u043b\u0435\u0435 \u043a\u0440\u0443\u043f\u043d\u044b\u0439 \u043a\u0443\u0441\u043e\u043a."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),'"Info"')),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"\u041d\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0434\u0435\u043b\u0430\u0442\u044c \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0433\u0440\u0430\u043d\u0443\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u2013 \u0442\u043e \u0435\u0441\u0442\u044c \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044c \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438 \u043f\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u0443, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0431\u0443\u0434\u0435\u0442 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0440\u0430\u0437\u0431\u0440\u043e\u0441 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 (\u0440\u0435\u0447\u044c \u0438\u0434\u0435\u0442 \u043e \u043f\u043e\u0440\u044f\u0434\u043a\u0435 \u0431\u043e\u043b\u0435\u0435 \u0442\u044b\u0441\u044f\u0447\u0438 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0439). \u042d\u0442\u043e \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043a \u0441\u043a\u043e\u043f\u043b\u0435\u043d\u0438\u044e \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430 \u0444\u0430\u0439\u043b\u043e\u0432 \u0438 \u0444\u0430\u0439\u043b\u043e\u0432\u044b\u0445 \u0434\u0435\u0441\u043a\u0440\u0438\u043f\u0442\u043e\u0440\u043e\u0432 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0435, \u0447\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0441\u043d\u0438\u0437\u0438\u0442\u044c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 `SELECT`.\n")),(0,i.kt)("p",{parentName:"div"},"\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043d\u0430\u0431\u043e\u0440 \u043a\u0443\u0441\u043a\u043e\u0432 \u0438 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u043c\u043e\u0436\u043d\u043e \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0435\u0439 ",(0,i.kt)("a",{parentName:"p",href:"/ru/engines/table-engines/mergetree-family/custom-partitioning-key#system_tables-parts"},"system.parts"),". \u0412 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0442\u0430\u0431\u043b\u0438\u0446\u0443 ",(0,i.kt)("inlineCode",{parentName:"p"},"visits"),", \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0437\u0430\u0434\u0430\u043d\u043e \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u043e \u043c\u0435\u0441\u044f\u0446\u0430\u043c. \u0412\u044b\u043f\u043e\u043b\u043d\u0438\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b ",(0,i.kt)("inlineCode",{parentName:"p"},"system.parts"),":"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    partition,\n    name,\n    active\nFROM system.parts\nWHERE table = 'visits'\n")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500partition\u2500\u252c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500active\u2500\u2510\n\u2502 201901    \u2502 201901_1_3_1      \u2502      0 \u2502\n\u2502 201901    \u2502 201901_1_9_2_11   \u2502      1 \u2502\n\u2502 201901    \u2502 201901_8_8_0      \u2502      0 \u2502\n\u2502 201901    \u2502 201901_9_9_0      \u2502      0 \u2502\n\u2502 201902    \u2502 201902_4_6_1_11   \u2502      1 \u2502\n\u2502 201902    \u2502 201902_10_10_0_11 \u2502      1 \u2502\n\u2502 201902    \u2502 201902_11_11_0_11 \u2502      1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",{parentName:"div"},"\u0421\u0442\u043e\u043b\u0431\u0435\u0446 ",(0,i.kt)("inlineCode",{parentName:"p"},"partition")," \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043c\u0435\u043d\u0430 \u0432\u0441\u0435\u0445 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b. \u0422\u0430\u0431\u043b\u0438\u0446\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"visits")," \u0438\u0437 \u043d\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0434\u0432\u0435 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438: ",(0,i.kt)("inlineCode",{parentName:"p"},"201901")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"201902"),". \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0438\u0437 \u044d\u0442\u043e\u0433\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u0430 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445 ",(0,i.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/alter/partition"},"ALTER \u2026 PARTITION"),"."),(0,i.kt)("p",{parentName:"div"},"\u0421\u0442\u043e\u043b\u0431\u0435\u0446 ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u043a\u0443\u0441\u043a\u043e\u0432 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0439. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0438\u0437 \u044d\u0442\u043e\u0433\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u0430 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445 ",(0,i.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/alter/partition#alter_attach-partition"},"ALTER ATTACH PART"),"."),(0,i.kt)("p",{parentName:"div"},"\u0421\u0442\u043e\u043b\u0431\u0435\u0446 ",(0,i.kt)("inlineCode",{parentName:"p"},"active")," \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043a\u0443\u0441\u043a\u0430. ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u043a\u0443\u0441\u043e\u043a \u0430\u043a\u0442\u0438\u0432\u0435\u043d; ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," \u2013 \u043d\u0435\u0430\u043a\u0442\u0438\u0432\u0435\u043d. \u041a \u043d\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u043c \u043c\u043e\u0436\u043d\u043e \u043e\u0442\u043d\u0435\u0441\u0442\u0438 \u043a\u0443\u0441\u043a\u0438, \u043e\u0441\u0442\u0430\u0432\u0448\u0438\u0435\u0441\u044f \u043f\u043e\u0441\u043b\u0435 \u0441\u043b\u0438\u044f\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445. \u041f\u043e\u0432\u0440\u0435\u0436\u0434\u0435\u043d\u043d\u044b\u0435 \u043a\u0443\u0441\u043a\u0438 \u0442\u0430\u043a\u0436\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u044e\u0442\u0441\u044f \u043a\u0430\u043a \u043d\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0435. \u041d\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u043a\u0443\u0441\u043a\u0438 \u0443\u0434\u0430\u043b\u044f\u044e\u0442\u0441\u044f \u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 10 \u043c\u0438\u043d\u0443\u0442 \u043f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u0431\u044b\u043b\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u0441\u043b\u0438\u044f\u043d\u0438\u0435."),(0,i.kt)("p",{parentName:"div"},"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0434\u0435\u0442\u0430\u043b\u044c\u043d\u0435\u0435 \u0438\u043c\u044f \u043a\u0443\u0441\u043a\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"201901_1_9_2_11"),":"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"201901")," \u0438\u043c\u044f \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1")," \u2013 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0431\u043b\u043e\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"9")," \u2013 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0431\u043b\u043e\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2")," \u2013 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u043a\u0443\u0441\u043a\u0430 (\u0433\u043b\u0443\u0431\u0438\u043d\u0430 \u0434\u0435\u0440\u0435\u0432\u0430 \u0441\u043b\u0438\u044f\u043d\u0438\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438 \u044d\u0442\u043e\u0442 \u043a\u0443\u0441\u043e\u043a \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"11")," - \u0432\u0435\u0440\u0441\u0438\u044f \u043c\u0443\u0442\u0430\u0446\u0438\u0438 (\u0435\u0441\u043b\u0438 \u043f\u0430\u0440\u0442 \u043c\u0443\u0442\u0438\u0440\u043e\u0432\u0430\u043b)")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u043a\u0443\u0441\u043a\u043e\u0432 \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446 \u0441\u0442\u0430\u0440\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \u043e\u0431\u0440\u0430\u0437\u0443\u044e\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c: `20190117_20190123_2_2_0` (\u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u0430\u0442\u0430 _ \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u0430\u0442\u0430 _ \u043d\u043e\u043c\u0435\u0440 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430 _ \u043d\u043e\u043c\u0435\u0440 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430 _ \u0443\u0440\u043e\u0432\u0435\u043d\u044c).\n")),(0,i.kt)("p",null,"\u041a\u0430\u043a \u0432\u0438\u0434\u043d\u043e \u0438\u0437 \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u0432\u044b\u0448\u0435, \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u043a\u0443\u0441\u043a\u043e\u0432 \u0434\u043b\u044f \u043e\u0434\u043d\u043e\u0439 \u0438 \u0442\u043e\u0439 \u0436\u0435 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043a\u0443\u0441\u043a\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"201901_1_3_1")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"201901_1_9_2")," \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0430\u0442 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"201901"),"). \u042d\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u044d\u0442\u0438 \u043a\u0443\u0441\u043a\u0438 \u0435\u0449\u0435 \u043d\u0435 \u0431\u044b\u043b\u0438 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u044b \u2013 \u0432 \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0435 \u043e\u043d\u0438 \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e. \u041f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e \u043a\u0430\u043a \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0441\u043b\u0438\u044f\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 (\u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e \u0441\u043f\u0443\u0441\u0442\u044f 10 \u043c\u0438\u043d\u0443\u0442 \u043f\u043e\u0441\u043b\u0435 \u0432\u0441\u0442\u0430\u0432\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445), \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0435 \u043a\u0443\u0441\u043a\u0438 \u0431\u0443\u0434\u0443\u0442 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u044b \u0432 \u043e\u0434\u0438\u043d \u0431\u043e\u043b\u0435\u0435 \u043a\u0440\u0443\u043f\u043d\u044b\u0439 \u043a\u0443\u0441\u043e\u043a \u0438 \u043f\u043e\u043c\u0435\u0447\u0435\u043d\u044b \u043a\u0430\u043a \u043d\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0435."),(0,i.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0432\u043d\u0435\u043e\u0447\u0435\u0440\u0435\u0434\u043d\u043e\u0435 \u0441\u043b\u0438\u044f\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,i.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/optimize"},"OPTIMIZE"),". \u041f\u0440\u0438\u043c\u0435\u0440:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE visits PARTITION 201902;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500partition\u2500\u252c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500active\u2500\u2510\n\u2502 201901    \u2502 201901_1_3_1     \u2502      0 \u2502\n\u2502 201901    \u2502 201901_1_9_2_11  \u2502      1 \u2502\n\u2502 201901    \u2502 201901_8_8_0     \u2502      0 \u2502\n\u2502 201901    \u2502 201901_9_9_0     \u2502      0 \u2502\n\u2502 201902    \u2502 201902_4_6_1     \u2502      0 \u2502\n\u2502 201902    \u2502 201902_4_11_2_11 \u2502      1 \u2502\n\u2502 201902    \u2502 201902_10_10_0   \u2502      0 \u2502\n\u2502 201902    \u2502 201902_11_11_0   \u2502      0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"\u041d\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u043a\u0443\u0441\u043a\u0438 \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043b\u0435\u043d\u044b \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e \u0447\u0435\u0440\u0435\u0437 10 \u043c\u0438\u043d\u0443\u0442 \u043f\u043e\u0441\u043b\u0435 \u0441\u043b\u0438\u044f\u043d\u0438\u044f."),(0,i.kt)("p",null,"\u0414\u0440\u0443\u0433\u043e\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043d\u0430\u0431\u043e\u0440 \u043a\u0443\u0441\u043a\u043e\u0432 \u0438 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0439 \u2013 \u0437\u0430\u0439\u0442\u0438 \u0432 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e \u0441 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b: ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/clickhouse/data/<database>/<table>/"),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"/var/lib/clickhouse/data/default/visits$ ls -l\ntotal 40\ndrwxr-xr-x 2 clickhouse clickhouse 4096 Feb  1 16:48 201901_1_3_1\ndrwxr-xr-x 2 clickhouse clickhouse 4096 Feb  5 16:17 201901_1_9_2_11\ndrwxr-xr-x 2 clickhouse clickhouse 4096 Feb  5 15:52 201901_8_8_0\ndrwxr-xr-x 2 clickhouse clickhouse 4096 Feb  5 15:52 201901_9_9_0\ndrwxr-xr-x 2 clickhouse clickhouse 4096 Feb  5 16:17 201902_10_10_0\ndrwxr-xr-x 2 clickhouse clickhouse 4096 Feb  5 16:17 201902_11_11_0\ndrwxr-xr-x 2 clickhouse clickhouse 4096 Feb  5 16:19 201902_4_11_2_11\ndrwxr-xr-x 2 clickhouse clickhouse 4096 Feb  5 12:09 201902_4_6_1\ndrwxr-xr-x 2 clickhouse clickhouse 4096 Feb  1 16:48 detached\n")),(0,i.kt)("p",null,"\u2018201901_1_1_0\u2019, \u2018201901_1_7_1\u2019 \u0438 \u0442. \u0434. \u2013 \u044d\u0442\u043e \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u043a\u0443\u0441\u043a\u043e\u0432 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438. \u041a\u0430\u0436\u0434\u044b\u0439 \u043a\u0443\u0441\u043e\u043a \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u043c\u0435\u0441\u044f\u0446\u0430 (\u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u043e \u043c\u0435\u0441\u044f\u0446\u0430\u043c)."),(0,i.kt)("p",null,"\u0414\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f ",(0,i.kt)("inlineCode",{parentName:"p"},"detached")," \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043a\u0443\u0441\u043a\u0438, \u043e\u0442\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u043d\u044b\u0435 \u043e\u0442 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,i.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/alter/partition#alter_detach-partition"},"DETACH"),". \u041f\u043e\u0432\u0440\u0435\u0436\u0434\u0435\u043d\u043d\u044b\u0435 \u043a\u0443\u0441\u043a\u0438 \u0442\u0430\u043a\u0436\u0435 \u043f\u043e\u043f\u0430\u0434\u0430\u044e\u0442 \u0432 \u044d\u0442\u0443 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e \u2013 \u043e\u043d\u0438 \u043d\u0435 \u0443\u0434\u0430\u043b\u044f\u044e\u0442\u0441\u044f \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430."),(0,i.kt)("p",null,"\u0421\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043a\u0443\u0441\u043a\u0438 \u0438\u0437 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"detached"),". \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432 \u043b\u044e\u0431\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c, \u0443\u0434\u0430\u043b\u044f\u0442\u044c, \u043c\u043e\u0434\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 detached - \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043e\u0431 \u044d\u0442\u043e\u043c \u0437\u043d\u0430\u0442\u044c, \u043f\u043e\u043a\u0430 \u0432\u044b \u043d\u0435 \u0441\u0434\u0435\u043b\u0430\u0435\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441 ",(0,i.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/alter/partition#alter_attach-partition"},"ATTACH"),"."),(0,i.kt)("p",null,"\u0421\u043b\u0435\u0434\u0443\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u0432 \u0432\u0438\u0434\u0443, \u0447\u0442\u043e \u043f\u0440\u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0435\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u043d\u0435\u043b\u044c\u0437\u044f \u0432\u0440\u0443\u0447\u043d\u0443\u044e \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u043d\u0430\u0431\u043e\u0440 \u043a\u0443\u0441\u043a\u043e\u0432 \u043d\u0430 \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0435, \u0442\u0430\u043a \u043a\u0430\u043a \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0437\u043d\u0430\u0442\u044c \u043e\u0431 \u044d\u0442\u043e\u043c.\n\u0414\u043b\u044f \u043d\u0435\u0440\u0435\u043f\u043b\u0438\u0446\u0438\u0440\u0443\u0435\u043c\u044b\u0445 \u0442\u0430\u0431\u043b\u0438\u0446, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u044d\u0442\u043e \u0434\u0435\u043b\u0430\u0442\u044c \u043f\u0440\u0438 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u043e\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0435, \u043e\u0434\u043d\u0430\u043a\u043e \u044d\u0442\u043e \u043d\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f.\n\u0414\u043b\u044f \u0440\u0435\u043f\u043b\u0438\u0446\u0438\u0440\u0443\u0435\u043c\u044b\u0445 \u0442\u0430\u0431\u043b\u0438\u0446, \u043d\u0430\u0431\u043e\u0440 \u043a\u0443\u0441\u043a\u043e\u0432 \u043d\u0435\u043b\u044c\u0437\u044f \u043c\u0435\u043d\u044f\u0442\u044c \u0432 \u043b\u044e\u0431\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435."),(0,i.kt)("p",null,"ClickHouse \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u044c \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u043c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0438 \u0441 \u043a\u0443\u0441\u043a\u0430\u043c\u0438: \u0443\u0434\u0430\u043b\u044f\u0442\u044c, \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u0437 \u043e\u0434\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0432 \u0434\u0440\u0443\u0433\u0443\u044e \u0438\u043b\u0438 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0438\u0445 \u0440\u0435\u0437\u0435\u0440\u0432\u043d\u044b\u0435 \u043a\u043e\u043f\u0438\u0438. \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u0441\u043c. \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,i.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/alter/partition"},"\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0438 \u0441 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u044f\u043c\u0438 \u0438 \u043a\u0443\u0441\u043a\u0430\u043c\u0438"),"."))}k.isMDXComponent=!0}}]);
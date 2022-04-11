"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[8521],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=o(n),d=l,c=k["".concat(s,".").concat(d)]||k[d]||u[d]||r;return n?a.createElement(c,i(i({ref:t},m),{},{components:n})):a.createElement(c,i({ref:t},m))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},58393:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return u}});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),i=["components"],p={machine_translated:!0,machine_translated_rev:"72537a2d527c63c07aa5d2361a8829f3895cf2bd",sidebar_position:41,sidebar_label:"\u5176\u4ed6"},s="\u6742\u9879\u67e5\u8be2",o={unversionedId:"zh/sql-reference/statements/misc",id:"zh/sql-reference/statements/misc",title:"\u6742\u9879\u67e5\u8be2",description:"miscellaneous-queries}",source:"@site/docs/zh/sql-reference/statements/misc.md",sourceDirName:"zh/sql-reference/statements",slug:"/zh/sql-reference/statements/misc",permalink:"/zh/sql-reference/statements/misc",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/zh/sql-reference/statements/misc.md",tags:[],version:"current",sidebarPosition:41,frontMatter:{machine_translated:!0,machine_translated_rev:"72537a2d527c63c07aa5d2361a8829f3895cf2bd",sidebar_position:41,sidebar_label:"\u5176\u4ed6"},sidebar:"chinese",previous:{title:"CHECK",permalink:"/zh/sql-reference/statements/check-table"},next:{title:"DESCRIBE",permalink:"/zh/sql-reference/statements/describe-table"}},m={},u=[{value:"ATTACH",id:"attach",level:2},{value:"CHECK TABLE",id:"check-table",level:2},{value:"DESCRIBE TABLE",id:"misc-describe-table",level:2},{value:"DETACH",id:"detach",level:2},{value:"DROP",id:"drop",level:2},{value:"DROP DATABASE",id:"drop-database",level:2},{value:"DROP TABLE",id:"drop-table",level:2},{value:"DROP DICTIONARY",id:"drop-dictionary",level:2},{value:"DROP USER",id:"drop-user-statement",level:2},{value:"DROP ROLE",id:"drop-role-statement",level:2},{value:"DROP ROW POLICY",id:"drop-row-policy-statement",level:2},{value:"DROP QUOTA",id:"drop-quota-statement",level:2},{value:"DROP SETTINGS PROFILE",id:"drop-settings-profile-statement",level:2},{value:"DROP VIEW",id:"drop-view",level:2},{value:"EXISTS",id:"exists-statement",level:2},{value:"KILL QUERY",id:"kill-query-statement",level:2},{value:"KILL MUTATION",id:"kill-mutation",level:2},{value:"OPTIMIZE",id:"misc_operations-optimize",level:2},{value:"RENAME",id:"misc_operations-rename",level:2},{value:"SET",id:"query-set",level:2},{value:"SET ROLE",id:"set-role-statement",level:2},{value:"SET DEFAULT ROLE",id:"set-default-role-statement",level:2},{value:"\u793a\u4f8b",id:"set-default-role-examples",level:3},{value:"TRUNCATE",id:"truncate-statement",level:2},{value:"USE",id:"use",level:2}],k={toc:u};function d(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"miscellaneous-queries"},"\u6742\u9879\u67e5\u8be2"),(0,r.kt)("h2",{id:"attach"},"ATTACH"),(0,r.kt)("p",null,"\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE"),"\u7c7b\u4f3c\uff0c\u4f46\u6709\u6240\u533a\u522b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5173\u952e\u8bcd ",(0,r.kt)("inlineCode",{parentName:"li"},"ATTACH")),(0,r.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u4e0d\u4f1a\u5728\u78c1\u76d8\u4e0a\u521b\u5efa\u6570\u636e\u3002\u4f46\u4f1a\u5047\u5b9a\u6570\u636e\u5df2\u7ecf\u5728\u5bf9\u5e94\u4f4d\u7f6e\u5b58\u653e\uff0c\u540c\u65f6\u5c06\u4e0e\u8868\u76f8\u5173\u7684\u4fe1\u606f\u6dfb\u52a0\u5230\u670d\u52a1\u5668\u3002\n\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"ATTACH")," \u67e5\u8be2\u540e\uff0c\u670d\u52a1\u5668\u5c06\u77e5\u9053\u8868\u5df2\u7ecf\u88ab\u521b\u5efa\u3002")),(0,r.kt)("p",null,"\u5982\u679c\u8868\u4e4b\u524d\u5df2\u5206\u79bb (",(0,r.kt)("inlineCode",{parentName:"p"},"DETACH"),"\uff09\uff0c\u610f\u5473\u7740\u5176\u7ed3\u6784\u662f\u5df2\u77e5\u7684\uff0c\u53ef\u4ee5\u4f7f\u7528\u7b80\u8981\u7684\u5199\u6cd5\u6765\u5efa\u7acb\u8868\uff0c\u5373\u4e0d\u9700\u8981\u5b9a\u4e49\u8868\u7ed3\u6784\u7684Schema\u7ec6\u8282\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ATTACH TABLE [IF NOT EXISTS] [db.]name [ON CLUSTER cluster]\n")),(0,r.kt)("p",null,"\u542f\u52a8\u670d\u52a1\u5668\u65f6\u4f1a\u81ea\u52a8\u89e6\u53d1\u6b64\u67e5\u8be2\u3002"),(0,r.kt)("p",null,"\u670d\u52a1\u5668\u5c06\u8868\u7684\u5143\u6570\u636e\u4f5c\u4e3a\u6587\u4ef6\u5b58\u50a8 ",(0,r.kt)("inlineCode",{parentName:"p"},"ATTACH")," \u67e5\u8be2\uff0c\u5b83\u53ea\u662f\u5728\u542f\u52a8\u65f6\u8fd0\u884c\u3002\u6709\u4e9b\u8868\u4f8b\u5916\uff0c\u5982\u7cfb\u7edf\u8868\uff0c\u5b83\u4eec\u662f\u5728\u670d\u52a1\u5668\u4e0a\u663e\u5f0f\u6307\u5b9a\u7684\u3002"),(0,r.kt)("h2",{id:"check-table"},"CHECK TABLE"),(0,r.kt)("p",null,"\u68c0\u67e5\u8868\u4e2d\u7684\u6570\u636e\u662f\u5426\u5df2\u635f\u574f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CHECK TABLE [db.]name\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CHECK TABLE")," \u67e5\u8be2\u4f1a\u6bd4\u8f83\u5b58\u50a8\u5728\u670d\u52a1\u5668\u4e0a\u7684\u5b9e\u9645\u6587\u4ef6\u5927\u5c0f\u4e0e\u9884\u671f\u503c\u3002 \u5982\u679c\u6587\u4ef6\u5927\u5c0f\u4e0e\u5b58\u50a8\u7684\u503c\u4e0d\u5339\u914d\uff0c\u5219\u8868\u793a\u6570\u636e\u5df2\u635f\u574f\u3002 \u4f8b\u5982\uff0c\u8fd9\u53ef\u80fd\u662f\u7531\u67e5\u8be2\u6267\u884c\u671f\u95f4\u7684\u7cfb\u7edf\u5d29\u6e83\u5f15\u8d77\u7684\u3002"),(0,r.kt)("p",null,"\u67e5\u8be2\u8fd4\u56de\u4e00\u884c\u7ed3\u679c\uff0c\u5217\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"result"),", \u8be5\u884c\u7684\u503c\u4e3a ",(0,r.kt)("a",{parentName:"p",href:"/zh/sql-reference/data-types/boolean"},"\u5e03\u5c14\u503c")," \u7c7b\u578b:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"0-\u8868\u4e2d\u7684\u6570\u636e\u5df2\u635f\u574f\uff1b"),(0,r.kt)("li",{parentName:"ul"},"1-\u6570\u636e\u4fdd\u6301\u5b8c\u6574\u6027\uff1b")),(0,r.kt)("p",null,"\u8be5 ",(0,r.kt)("inlineCode",{parentName:"p"},"CHECK TABLE")," \u67e5\u8be2\u652f\u6301\u4e0b\u8868\u5f15\u64ce:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/log-family/log"},"Log")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/log-family/tinylog"},"TinyLog")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/log-family/stripelog"},"StripeLog")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/mergetree-family/mergetree"},"MergeTree \u5bb6\u65cf"))),(0,r.kt)("p",null,"\u5bf9\u5176\u4ed6\u4e0d\u652f\u6301\u7684\u8868\u5f15\u64ce\u7684\u8868\u6267\u884c\u4f1a\u5bfc\u81f4\u5f02\u5e38\u3002"),(0,r.kt)("p",null,"\u6765\u81ea ",(0,r.kt)("inlineCode",{parentName:"p"},"*Log")," \u5bb6\u65cf\u7684\u5f15\u64ce\u4e0d\u63d0\u4f9b\u6545\u969c\u81ea\u52a8\u6570\u636e\u6062\u590d\u3002 \u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"CHECK TABLE")," \u67e5\u8be2\u53ca\u65f6\u8ddf\u8e2a\u6570\u636e\u4e22\u5931\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"MergeTree")," \u5bb6\u65cf\u5f15\u64ce\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"CHECK TABLE")," \u67e5\u8be2\u663e\u793a\u672c\u5730\u670d\u52a1\u5668\u4e0a\u8868\u7684\u6bcf\u4e2a\u5355\u72ec\u6570\u636e\u90e8\u5206\u7684\u68c0\u67e5\u72b6\u6001\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5982\u679c\u6570\u636e\u5df2\u635f\u574f")),(0,r.kt)("p",null,"\u5982\u679c\u8868\u5df2\u635f\u574f\uff0c\u5219\u53ef\u4ee5\u5c06\u672a\u635f\u574f\u7684\u6570\u636e\u590d\u5236\u5230\u53e6\u4e00\u4e2a\u8868\u3002 \u8981\u505a\u5230\u8fd9\u4e00\u70b9:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a\u4e0e\u635f\u574f\u7684\u8868\u7ed3\u6784\u76f8\u540c\u7684\u65b0\u8868\u3002 \u8bf7\u6267\u884c\u67e5\u8be2 ",(0,r.kt)("inlineCode",{parentName:"li"},"CREATE TABLE <new_table_name> AS <damaged_table_name>"),"."),(0,r.kt)("li",{parentName:"ol"},"\u5c06 ",(0,r.kt)("a",{parentName:"li",href:"/zh/operations/settings/#settings-max_threads"},"max_threads")," \u503c\u8bbe\u7f6e\u4e3a1\uff0c\u4ee5\u5728\u5355\u4e2a\u7ebf\u7a0b\u4e2d\u5904\u7406\u4e0b\u4e00\u4e2a\u67e5\u8be2\u3002 \u8981\u8fd9\u6837\u505a\uff0c\u8bf7\u8fd0\u884c\u67e5\u8be2 ",(0,r.kt)("inlineCode",{parentName:"li"},"SET max_threads = 1"),"."),(0,r.kt)("li",{parentName:"ol"},"\u6267\u884c\u67e5\u8be2 ",(0,r.kt)("inlineCode",{parentName:"li"},"INSERT INTO <new_table_name> SELECT * FROM <damaged_table_name>"),". \u6b64\u8bf7\u6c42\u5c06\u672a\u635f\u574f\u7684\u6570\u636e\u4ece\u635f\u574f\u7684\u8868\u590d\u5236\u5230\u53e6\u4e00\u4e2a\u8868\u3002 \u53ea\u6709\u635f\u574f\u90e8\u5206\u4e4b\u524d\u7684\u6570\u636e\u624d\u4f1a\u88ab\u590d\u5236\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u91cd\u65b0\u542f\u52a8 ",(0,r.kt)("inlineCode",{parentName:"li"},"clickhouse-client")," \u4ee5\u91cd\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"max_threads")," \u503c\u3002")),(0,r.kt)("h2",{id:"misc-describe-table"},"DESCRIBE TABLE"),(0,r.kt)("p",null,"\u67e5\u770b\u8868\u7684\u63cf\u8ff0\u4fe1\u606f\uff0c\u8fd4\u56de\u5404\u5217\u7684Schema\uff0c\u8bed\u6cd5\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DESC|DESCRIBE TABLE [db.]table [INTO OUTFILE filename] [FORMAT format]\n")),(0,r.kt)("p",null,"\u8fd4\u56de\u4ee5\u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," \u7c7b\u578b\u5217:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," \u2014 \u5217\u540d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type"),"\u2014 \u5217\u7684\u7c7b\u578b\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default_type")," \u2014 ",(0,r.kt)("a",{parentName:"li",href:"/zh/sql-reference/statements/create#create-default-values"},"\u9ed8\u8ba4\u8868\u8fbe\u5f0f")," (",(0,r.kt)("inlineCode",{parentName:"li"},"DEFAULT"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"MATERIALIZED")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"ALIAS"),")\u4e2d\u4f7f\u7528\u7684\u5b50\u53e5\u3002 \u5982\u679c\u6ca1\u6709\u6307\u5b9a\u9ed8\u8ba4\u8868\u8fbe\u5f0f\uff0c\u5219\u5217\u5305\u542b\u4e00\u4e2a\u7a7a\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default_expression")," \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"DEFAULT")," \u5b50\u53e5\u4e2d\u6307\u5b9a\u7684\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"comment_expression")," \u2014 \u6ce8\u91ca\u4fe1\u606f\u3002")),(0,r.kt)("p",null,"\u5d4c\u5957\u6570\u636e\u7ed3\u6784\u4ee5 \u201cexpanded\u201d \u683c\u5f0f\u8f93\u51fa\u3002 \u6bcf\u5217\u5206\u522b\u663e\u793a\uff0c\u5217\u540d\u540e\u52a0\u70b9\u53f7\u3002"),(0,r.kt)("h2",{id:"detach"},"DETACH"),(0,r.kt)("p",null,"\u4ece\u670d\u52a1\u5668\u4e2d\u5220\u9664\u76ee\u6807\u8868\u4fe1\u606f\uff08\u5220\u9664\u5bf9\u8c61\u662f\u8868), \u6267\u884c\u67e5\u8be2\u540e,\u670d\u52a1\u5668\u89c6\u4f5c\u8be5\u8868\u5df2\u7ecf\u4e0d\u5b58\u5728\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DETACH TABLE [IF EXISTS] [db.]name [ON CLUSTER cluster]\n")),(0,r.kt)("p",null,"\u8fd9\u4e0d\u4f1a\u5220\u9664\u8868\u7684\u6570\u636e\u6216\u5143\u6570\u636e\u3002 \u5728\u4e0b\u4e00\u6b21\u670d\u52a1\u5668\u542f\u52a8\u65f6\uff0c\u670d\u52a1\u5668\u5c06\u8bfb\u53d6\u5143\u6570\u636e\u5e76\u518d\u6b21\u67e5\u627e\u8be5\u8868\u3002\n\u4e5f\u53ef\u4ee5\u4e0d\u505c\u6b62\u670d\u52a1\u5668\u7684\u60c5\u51b5\u4e0b\uff0c\u4f7f\u7528\u524d\u9762\u4ecb\u7ecd\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ATTACH")," \u67e5\u8be2\u6765\u91cd\u65b0\u5173\u8054\u8be5\u8868\uff08\u7cfb\u7edf\u8868\u9664\u5916\uff0c\u6ca1\u6709\u4e3a\u5b83\u4eec\u5b58\u50a8\u5143\u6570\u636e\uff09\u3002"),(0,r.kt)("h2",{id:"drop"},"DROP"),(0,r.kt)("p",null,"\u5220\u9664\u5df2\u7ecf\u5b58\u5728\u7684\u5b9e\u4f53\u3002\u5982\u679c\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"IF EXISTS"),"\uff0c \u5219\u5982\u679c\u5b9e\u4f53\u4e0d\u5b58\u5728\uff0c\u5219\u4e0d\u8fd4\u56de\u9519\u8bef\u3002\n\u5efa\u8bae\u4f7f\u7528\u65f6\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"IF EXISTS")," \u4fee\u9970\u7b26\u3002"),(0,r.kt)("h2",{id:"drop-database"},"DROP DATABASE"),(0,r.kt)("p",null,"\u5220\u9664 ",(0,r.kt)("inlineCode",{parentName:"p"},"db")," \u6570\u636e\u5e93\u4e2d\u7684\u6240\u6709\u8868\uff0c\u7136\u540e\u5220\u9664 ",(0,r.kt)("inlineCode",{parentName:"p"},"db")," \u6570\u636e\u5e93\u672c\u8eab\u3002"),(0,r.kt)("p",null,"\u8bed\u6cd5:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DROP DATABASE [IF EXISTS] db [ON CLUSTER cluster]\n")),(0,r.kt)("h2",{id:"drop-table"},"DROP TABLE"),(0,r.kt)("p",null,"\u5220\u9664\u8868\u3002"),(0,r.kt)("p",null,"\u8bed\u6cd5:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DROP [TEMPORARY] TABLE [IF EXISTS] [db.]name [ON CLUSTER cluster]\n")),(0,r.kt)("h2",{id:"drop-dictionary"},"DROP DICTIONARY"),(0,r.kt)("p",null,"\u5220\u9664\u5b57\u5178\u3002"),(0,r.kt)("p",null,"\u8bed\u6cd5:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DROP DICTIONARY [IF EXISTS] [db.]name\n")),(0,r.kt)("h2",{id:"drop-user-statement"},"DROP USER"),(0,r.kt)("p",null,"\u5220\u9664\u7528\u6237\u3002"),(0,r.kt)("p",null,"\u8bed\u6cd5:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DROP USER [IF EXISTS] name [,...] [ON CLUSTER cluster_name]\n")),(0,r.kt)("h2",{id:"drop-role-statement"},"DROP ROLE"),(0,r.kt)("p",null,"\u5220\u9664\u89d2\u8272\u3002"),(0,r.kt)("p",null,"\u540c\u65f6\u8be5\u89d2\u8272\u6240\u62e5\u6709\u7684\u6743\u9650\u4e5f\u4f1a\u88ab\u6536\u56de\u3002"),(0,r.kt)("p",null,"\u8bed\u6cd5:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DROP ROLE [IF EXISTS] name [,...] [ON CLUSTER cluster_name]\n")),(0,r.kt)("h2",{id:"drop-row-policy-statement"},"DROP ROW POLICY"),(0,r.kt)("p",null,"\u5220\u9664\u884c\u7b56\u7565\u3002"),(0,r.kt)("p",null,"\u5df2\u5220\u9664\u884c\u7b56\u7565\u5c06\u4ece\u5206\u914d\u8be5\u7b56\u7565\u7684\u6240\u6709\u5b9e\u4f53\u64a4\u9500\u3002"),(0,r.kt)("p",null,"\u8bed\u6cd5:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DROP [ROW] POLICY [IF EXISTS] name [,...] ON [database.]table [,...] [ON CLUSTER cluster_name]\n")),(0,r.kt)("h2",{id:"drop-quota-statement"},"DROP QUOTA"),(0,r.kt)("p",null,"\u5220\u9664\u914d\u989d\u3002"),(0,r.kt)("p",null,"\u5df2\u5220\u9664\u7684\u914d\u989d\u5c06\u4ece\u5206\u914d\u8be5\u914d\u989d\u7684\u6240\u6709\u5b9e\u4f53\u64a4\u9500\u3002"),(0,r.kt)("p",null,"\u8bed\u6cd5:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DROP QUOTA [IF EXISTS] name [,...] [ON CLUSTER cluster_name]\n")),(0,r.kt)("h2",{id:"drop-settings-profile-statement"},"DROP SETTINGS PROFILE"),(0,r.kt)("p",null,"\u5220\u9664settings\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u5df2\u5220\u9664\u7684settings\u914d\u7f6e\u5c06\u4ece\u5206\u914d\u8be5settings\u914d\u7f6e\u7684\u6240\u6709\u5b9e\u4f53\u64a4\u9500\u3002"),(0,r.kt)("p",null,"\u8bed\u6cd5:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DROP [SETTINGS] PROFILE [IF EXISTS] name [,...] [ON CLUSTER cluster_name]\n")),(0,r.kt)("h2",{id:"drop-view"},"DROP VIEW"),(0,r.kt)("p",null,"\u5220\u9664\u89c6\u56fe\u3002\u89c6\u56fe\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"DROP TABLE")," \u5220\u9664\uff0c\u4f46\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"DROP VIEW")," \u68c0\u67e5 ",(0,r.kt)("inlineCode",{parentName:"p"},"[db.]name")," \u662f\u89c6\u56fe\u3002"),(0,r.kt)("p",null,"\u8bed\u6cd5:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DROP VIEW [IF EXISTS] [db.]name [ON CLUSTER cluster]\n")),(0,r.kt)("h2",{id:"exists-statement"},"EXISTS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"EXISTS [TEMPORARY] [TABLE|DICTIONARY] [db.]name [INTO OUTFILE filename] [FORMAT format]\n")),(0,r.kt)("p",null,"\u8fd4\u56de\u5355\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"UInt8")," \u7c7b\u578b\u7684\u5217\uff0c\u5176\u4e2d\u5305\u542b\u5355\u4e2a\u503c ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," \u5982\u679c\u8868\u6216\u6570\u636e\u5e93\u4e0d\u5b58\u5728\uff0c\u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," \u5982\u679c\u8be5\u8868\u5b58\u5728\u4e8e\u6307\u5b9a\u7684\u6570\u636e\u5e93\u4e2d\u3002"),(0,r.kt)("h2",{id:"kill-query-statement"},"KILL QUERY"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"KILL QUERY [ON CLUSTER cluster]\n  WHERE <where expression to SELECT FROM system.processes query>\n  [SYNC|ASYNC|TEST]\n  [FORMAT format]\n")),(0,r.kt)("p",null,"\u5c1d\u8bd5\u5f3a\u5236\u7ec8\u6b62\u5f53\u524d\u6b63\u5728\u8fd0\u884c\u7684\u67e5\u8be2\u3002\n\u8981\u7ec8\u6b62\u7684\u67e5\u8be2\u662f\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"KILL")," \u67e5\u8be2\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE")," \u5b50\u53e5\u5b9a\u4e49\u7684\u6807\u51c6\u4ecesystem.processes\u8868\u4e2d\u9009\u62e9\u7684\u3002"),(0,r.kt)("p",null,"\u4f8b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Forcibly terminates all queries with the specified query_id:\nKILL QUERY WHERE query_id='2-857d-4a57-9ee0-327da5d60a90'\n\n-- Synchronously terminates all queries run by 'username':\nKILL QUERY WHERE user='username' SYNC\n")),(0,r.kt)("p",null,"\u53ea\u8bfb\u7528\u6237\u53ea\u80fd\u505c\u6b62\u81ea\u5df1\u63d0\u4ea4\u7684\u67e5\u8be2\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4f7f\u7528\u5f02\u6b65\u7248\u672c\u7684\u67e5\u8be2 (",(0,r.kt)("inlineCode",{parentName:"p"},"ASYNC"),"\uff09\uff0c\u4e0d\u9700\u8981\u7b49\u5f85\u786e\u8ba4\u67e5\u8be2\u5df2\u505c\u6b62\u3002"),(0,r.kt)("p",null,"\u800c\u76f8\u5bf9\u7684\uff0c\u7ec8\u6b62\u540c\u6b65\u7248\u672c (",(0,r.kt)("inlineCode",{parentName:"p"},"SYNC"),"\uff09\u7684\u67e5\u8be2\u4f1a\u663e\u793a\u6bcf\u6b65\u505c\u6b62\u65f6\u95f4\u3002"),(0,r.kt)("p",null,"\u8fd4\u56de\u4fe1\u606f\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"p"},"kill_status")," \u5217\uff0c\u8be5\u5217\u53ef\u4ee5\u91c7\u7528\u4ee5\u4e0b\u503c:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u2018finished\u2019 \u2013 \u67e5\u8be2\u5df2\u6210\u529f\u7ec8\u6b62\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u2018waiting\u2019 \u2013 \u53d1\u9001\u67e5\u8be2\u4fe1\u53f7\u7ec8\u6b62\u540e\uff0c\u7b49\u5f85\u67e5\u8be2\u7ed3\u675f\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5176\u4ed6\u503c\uff0c\u4f1a\u89e3\u91ca\u4e3a\u4ec0\u4e48\u67e5\u8be2\u4e0d\u80fd\u505c\u6b62\u3002")),(0,r.kt)("p",null,"\u6d4b\u8bd5\u67e5\u8be2 (",(0,r.kt)("inlineCode",{parentName:"p"},"TEST"),"\uff09\u4ec5\u68c0\u67e5\u7528\u6237\u7684\u6743\u9650\uff0c\u5e76\u663e\u793a\u8981\u505c\u6b62\u7684\u67e5\u8be2\u5217\u8868\u3002"),(0,r.kt)("h2",{id:"kill-mutation"},"KILL MUTATION"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"KILL MUTATION [ON CLUSTER cluster]\n  WHERE <where expression to SELECT FROM system.mutations query>\n  [TEST]\n  [FORMAT format]\n")),(0,r.kt)("p",null,"\u5c1d\u8bd5\u53d6\u6d88\u548c\u5220\u9664\u5f53\u524d\u6b63\u5728\u6267\u884c\u7684 ",(0,r.kt)("a",{parentName:"p",href:"/zh/sql-reference/statements/alter#alter-mutations"},"mutations")," \u3002 \u8981\u53d6\u6d88\u7684mutation\u662f\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"KILL")," \u67e5\u8be2\u7684WHERE\u5b50\u53e5\u6307\u5b9a\u7684\u8fc7\u6ee4\u5668\u4ece",(0,r.kt)("a",{parentName:"p",href:"/zh/operations/system-tables/mutations#system_tables-mutations"},(0,r.kt)("inlineCode",{parentName:"a"},"system.mutations"))," \u8868\u4e2d\u9009\u62e9\u7684\u3002"),(0,r.kt)("p",null,"\u6d4b\u8bd5\u67e5\u8be2 (",(0,r.kt)("inlineCode",{parentName:"p"},"TEST"),"\uff09\u4ec5\u68c0\u67e5\u7528\u6237\u7684\u6743\u9650\u5e76\u663e\u793a\u8981\u505c\u6b62\u7684mutations\u5217\u8868\u3002"),(0,r.kt)("p",null,"\u4f8b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Cancel and remove all mutations of the single table:\nKILL MUTATION WHERE database = 'default' AND table = 'table'\n\n-- Cancel the specific mutation:\nKILL MUTATION WHERE database = 'default' AND table = 'table' AND mutation_id = 'mutation_3.txt'\n")),(0,r.kt)("p",null,"\u5f53mutation\u5361\u4f4f\u4e14\u65e0\u6cd5\u5b8c\u6210\u65f6\uff0c\u8be5\u67e5\u8be2\u662f\u6709\u7528\u7684(\u4f8b\u5982\uff0c\u5f53mutation\u67e5\u8be2\u4e2d\u7684\u67d0\u4e9b\u51fd\u6570\u5728\u5e94\u7528\u4e8e\u8868\u4e2d\u5305\u542b\u7684\u6570\u636e\u65f6\u629b\u51fa\u5f02\u5e38)\u3002"),(0,r.kt)("p",null,"Mutation\u5df2\u7ecf\u505a\u51fa\u7684\u66f4\u6539\u4e0d\u4f1a\u56de\u6eda\u3002"),(0,r.kt)("h2",{id:"misc_operations-optimize"},"OPTIMIZE"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE [db.]name [ON CLUSTER cluster] [PARTITION partition | PARTITION ID 'partition_id'] [FINAL] [DEDUPLICATE]\n")),(0,r.kt)("p",null,"\u6b64\u67e5\u8be2\u5c1d\u8bd5\u521d\u59cb\u5316 ",(0,r.kt)("a",{parentName:"p",href:"/zh/engines/table-engines/mergetree-family/mergetree"},"MergeTree"),"\u5bb6\u65cf\u7684\u8868\u5f15\u64ce\u7684\u8868\u4e2d\u672a\u8ba1\u5212\u5408\u5e76\u6570\u636e\u90e8\u5206\u3002"),(0,r.kt)("p",null,"\u8be5 ",(0,r.kt)("inlineCode",{parentName:"p"},"OPTMIZE")," \u67e5\u8be2\u4e5f\u652f\u6301 ",(0,r.kt)("a",{parentName:"p",href:"/zh/engines/table-engines/special/materializedview"},"MaterializedView")," \u548c ",(0,r.kt)("a",{parentName:"p",href:"/zh/engines/table-engines/special/buffer"},"Buffer")," \u5f15\u64ce\u3002 \u4e0d\u652f\u6301\u5176\u4ed6\u8868\u5f15\u64ce\u3002"),(0,r.kt)("p",null,"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"OPTIMIZE")," \u4e0e ",(0,r.kt)("a",{parentName:"p",href:"/zh/engines/table-engines/mergetree-family/replication"},"ReplicatedMergeTree")," \u5bb6\u65cf\u7684\u8868\u5f15\u64ce\u4e00\u8d77\u4f7f\u7528\u65f6\uff0cClickHouse\u5c06\u521b\u5efa\u4e00\u4e2a\u5408\u5e76\u4efb\u52a1\uff0c\u5e76\u7b49\u5f85\u6240\u6709\u8282\u70b9\u4e0a\u7684\u6267\u884c\uff08\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"replication_alter_partitions_sync")," \u8bbe\u7f6e\u5df2\u542f\u7528\uff09\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"li"},"OPTIMIZE")," \u51fa\u4e8e\u4efb\u4f55\u539f\u56e0\u4e0d\u6267\u884c\u5408\u5e76\uff0c\u5b83\u4e0d\u901a\u77e5\u5ba2\u6237\u7aef\u3002 \u8981\u542f\u7528\u901a\u77e5\uff0c\u8bf7\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"li",href:"/zh/operations/settings/#setting-optimize_throw_if_noop"},"optimize_throw_if_noop")," \u8bbe\u7f6e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"li"},"PARTITION"),"\uff0c\u4ec5\u4f18\u5316\u6307\u5b9a\u7684\u5206\u533a\u3002 ",(0,r.kt)("a",{parentName:"li",href:"/zh/sql-reference/statements/alter#alter-how-to-specify-part-expr"},"\u5982\u4f55\u8bbe\u7f6e\u5206\u533a\u8868\u8fbe\u5f0f"),"."),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"li"},"FINAL"),"\uff0c\u5373\u4f7f\u6240\u6709\u6570\u636e\u5df2\u7ecf\u5728\u4e00\u4e2a\u90e8\u5206\u4e2d\uff0c\u4e5f\u4f1a\u6267\u884c\u4f18\u5316\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"li"},"DEDUPLICATE"),"\uff0c\u5219\u5c06\u5bf9\u5b8c\u5168\u76f8\u540c\u7684\u884c\u8fdb\u884c\u91cd\u590d\u6570\u636e\u5220\u9664\uff08\u6240\u6709\u5217\u8fdb\u884c\u6bd4\u8f83\uff09\uff0c\u8fd9\u4ec5\u9002\u7528\u4e8eMergeTree\u5f15\u64ce\u3002")),(0,r.kt)("p",null,'!!! warning "\u8b66\u544a"\n',(0,r.kt)("inlineCode",{parentName:"p"},"OPTIMIZE")," \u65e0\u6cd5\u4fee\u590d \u201cToo many parts\u201d \u9519\u8bef\u3002"),(0,r.kt)("h2",{id:"misc_operations-rename"},"RENAME"),(0,r.kt)("p",null,"\u91cd\u547d\u540d\u4e00\u4e2a\u6216\u591a\u4e2a\u8868\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"RENAME TABLE [db11.]name11 TO [db12.]name12, [db21.]name21 TO [db22.]name22, ... [ON CLUSTER cluster]\n")),(0,r.kt)("p",null,"\u6240\u6709\u8868\u90fd\u5728\u5168\u5c40\u9501\u5b9a\u4e0b\u91cd\u547d\u540d\u3002 \u91cd\u547d\u540d\u8868\u662f\u4e00\u4e2a\u8f7b\u578b\u64cd\u4f5c\u3002 \u5982\u679c\u60a8\u5728TO\u4e4b\u540e\u6307\u5b9a\u4e86\u53e6\u4e00\u4e2a\u6570\u636e\u5e93\uff0c\u5219\u8868\u5c06\u88ab\u79fb\u52a8\u5230\u6b64\u6570\u636e\u5e93\u3002 \u4f46\u662f\uff0c\u5305\u542b\u6570\u636e\u5e93\u7684\u76ee\u5f55\u5fc5\u987b\u4f4d\u4e8e\u540c\u4e00\u6587\u4ef6\u7cfb\u7edf\u4e2d\uff08\u5426\u5219\uff0c\u5c06\u8fd4\u56de\u9519\u8bef\uff09\u3002\n\u5982\u679c\u60a8\u5728\u4e00\u4e2a\u67e5\u8be2\u4e2d\u91cd\u547d\u540d\u591a\u4e2a\u8868\uff0c\u8fd9\u662f\u4e00\u4e2a\u975e\u539f\u5b50\u64cd\u4f5c\uff0c\u5b83\u53ef\u80fd\u88ab\u90e8\u5206\u6267\u884c\uff0c\u5176\u4ed6\u4f1a\u8bdd\u4e2d\u7684\u67e5\u8be2\u53ef\u80fd\u4f1a\u63a5\u6536\u9519\u8bef Table ... doesn't exist ...\u3002"),(0,r.kt)("h2",{id:"query-set"},"SET"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET param = value\n")),(0,r.kt)("p",null,"\u4e3a\u5f53\u524d\u4f1a\u8bdd\u7684 ",(0,r.kt)("a",{parentName:"p",href:"/zh/operations/settings/"},"\u8bbe\u7f6e")," ",(0,r.kt)("inlineCode",{parentName:"p"},"param")," \u5206\u914d\u503c ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"\u3002 \u60a8\u4e0d\u80fd\u4ee5\u8fd9\u79cd\u65b9\u5f0f\u66f4\u6539 ",(0,r.kt)("a",{parentName:"p",href:"/zh/operations/server-configuration-parameters/"},"\u670d\u52a1\u5668\u8bbe\u7f6e"),"\u3002"),(0,r.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u5728\u5355\u4e2a\u67e5\u8be2\u4e2d\u4ece\u6307\u5b9a\u7684\u8bbe\u7f6e\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u7f6e\u6240\u6709\u503c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET profile = 'profile-name-from-the-settings-file'\n")),(0,r.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/zh/operations/settings/"},"\u8bbe\u7f6e"),"."),(0,r.kt)("h2",{id:"set-role-statement"},"SET ROLE"),(0,r.kt)("p",null,"\u6fc0\u6d3b\u5f53\u524d\u7528\u6237\u7684\u89d2\u8272\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET ROLE {DEFAULT | NONE | role [,...] | ALL | ALL EXCEPT role [,...]}\n")),(0,r.kt)("h2",{id:"set-default-role-statement"},"SET DEFAULT ROLE"),(0,r.kt)("p",null,"\u5c06\u9ed8\u8ba4\u89d2\u8272\u8bbe\u7f6e\u4e3a\u7528\u6237\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u89d2\u8272\u5728\u7528\u6237\u767b\u5f55\u65f6\u81ea\u52a8\u6fc0\u6d3b\u3002 \u60a8\u53ea\u80fd\u5c06\u4ee5\u524d\u6388\u4e88\u7684\u89d2\u8272\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u503c\u3002 \u5982\u679c\u89d2\u8272\u6ca1\u6709\u6388\u4e88\u7528\u6237\uff0cClickHouse\u4f1a\u629b\u51fa\u5f02\u5e38\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET DEFAULT ROLE {NONE | role [,...] | ALL | ALL EXCEPT role [,...]} TO {user|CURRENT_USER} [,...]\n")),(0,r.kt)("h3",{id:"set-default-role-examples"},"\u793a\u4f8b"),(0,r.kt)("p",null,"\u4e3a\u7528\u6237\u8bbe\u7f6e\u591a\u4e2a\u9ed8\u8ba4\u89d2\u8272:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET DEFAULT ROLE role1, role2, ... TO user\n")),(0,r.kt)("p",null,"\u5c06\u6240\u6709\u6388\u4e88\u7684\u89d2\u8272\u8bbe\u7f6e\u4e3a\u7528\u6237\u7684\u9ed8\u8ba4\u89d2\u8272:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET DEFAULT ROLE ALL TO user\n")),(0,r.kt)("p",null,"\u6e05\u9664\u7528\u6237\u7684\u9ed8\u8ba4\u89d2\u8272:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET DEFAULT ROLE NONE TO user\n")),(0,r.kt)("p",null,"\u5c06\u6240\u6709\u6388\u4e88\u7684\u89d2\u8272\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u89d2\u8272\uff0c\u4f46\u5176\u4e2d\u4e00\u4e9b\u89d2\u8272\u9664\u5916:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET DEFAULT ROLE ALL EXCEPT role1, role2 TO user\n")),(0,r.kt)("h2",{id:"truncate-statement"},"TRUNCATE"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"TRUNCATE TABLE [IF EXISTS] [db.]name [ON CLUSTER cluster]\n")),(0,r.kt)("p",null,"\u4ece\u8868\u4e2d\u5220\u9664\u6240\u6709\u6570\u636e\u3002 \u5f53\u7701\u7565 ",(0,r.kt)("inlineCode",{parentName:"p"},"IF EXISTS"),"\u5b50\u53e5\u65f6\uff0c\u5982\u679c\u8be5\u8868\u4e0d\u5b58\u5728\uff0c\u5219\u67e5\u8be2\u8fd4\u56de\u9519\u8bef\u3002"),(0,r.kt)("p",null,"\u8be5 ",(0,r.kt)("inlineCode",{parentName:"p"},"TRUNCATE")," \u67e5\u8be2\u4e0d\u652f\u6301 ",(0,r.kt)("a",{parentName:"p",href:"/zh/engines/table-engines/special/view"},"View"),", ",(0,r.kt)("a",{parentName:"p",href:"/zh/engines/table-engines/special/file"},"File"),", ",(0,r.kt)("a",{parentName:"p",href:"/zh/engines/table-engines/special/url"},"URL")," \u548c ",(0,r.kt)("a",{parentName:"p",href:"/zh/engines/table-engines/special/null"},"Null")," \u8868\u5f15\u64ce."),(0,r.kt)("h2",{id:"use"},"USE"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"USE db\n")),(0,r.kt)("p",null,"\u7528\u4e8e\u8bbe\u7f6e\u4f1a\u8bdd\u7684\u5f53\u524d\u6570\u636e\u5e93\u3002\n\u5f53\u524d\u6570\u636e\u5e93\u7528\u4e8e\u641c\u7d22\u8868\uff0c\u5982\u679c\u6570\u636e\u5e93\u6ca1\u6709\u5728\u67e5\u8be2\u4e2d\u660e\u786e\u5b9a\u4e49\u4e0e\u8868\u540d\u4e4b\u524d\u7684\u70b9\u3002\n\u4f7f\u7528HTTP\u534f\u8bae\u65f6\u65e0\u6cd5\u8fdb\u884c\u6b64\u67e5\u8be2\uff0c\u56e0\u4e3a\u6ca1\u6709\u4f1a\u8bdd\u7684\u6982\u5ff5\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/misc/"},"\u539f\u59cb\u6587\u7ae0")," "))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[40653],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(t),f=a,k=c["".concat(p,".").concat(f)]||c[f]||m[f]||l;return t?r.createElement(k,i(i({ref:n},s),{},{components:t})):r.createElement(k,i({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},48316:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),i=["components"],o={sidebar_position:37,sidebar_label:"file"},p="file",u={unversionedId:"ru/sql-reference/table-functions/file",id:"ru/sql-reference/table-functions/file",title:"file",description:"file}",source:"@site/docs/ru/sql-reference/table-functions/file.md",sourceDirName:"ru/sql-reference/table-functions",slug:"/ru/sql-reference/table-functions/file",permalink:"/ru/sql-reference/table-functions/file",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/table-functions/file.md",tags:[],version:"current",sidebarPosition:37,frontMatter:{sidebar_position:37,sidebar_label:"file"},sidebar:"russia",previous:{title:"\u0422\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438",permalink:"/ru/sql-reference/table-functions/"},next:{title:"merge",permalink:"/ru/sql-reference/table-functions/merge"}},s={},m=[{value:"\u0428\u0430\u0431\u043b\u043e\u043d\u044b \u043f\u043e\u0438\u0441\u043a\u0430 \u0432 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u0445 \u043f\u0443\u0442\u0438",id:"globs-in-path",level:2}],c={toc:m};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"file"},"file"),(0,l.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0451\u0442 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0438\u0437 \u0444\u0430\u0439\u043b\u0430. \u0414\u0430\u043d\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u043e\u0445\u043e\u0436\u0430 \u043d\u0430 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/table-functions/url"},"url")," \u0438 ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/table-functions/hdfs"},"hdfs"),"."),(0,l.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"file")," \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT")," \u043f\u0440\u0438 \u0440\u0430\u0431\u043e\u0442\u0435 \u0441 \u0434\u0432\u0438\u0436\u043a\u043e\u043c \u0442\u0430\u0431\u043b\u0438\u0446 ",(0,l.kt)("a",{parentName:"p",href:"/ru/engines/table-engines/special/file"},"File"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"file(path, format, structure)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path")," \u2014 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0443\u0442\u044c \u0434\u043e \u0444\u0430\u0439\u043b\u0430 \u043e\u0442 ",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/table-functions/file#server_configuration_parameters-user_files_path"},"user_files_path"),". \u041f\u0443\u0442\u044c \u043a \u0444\u0430\u0439\u043b\u0443 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0448\u0430\u0431\u043b\u043e\u043d\u044b \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0447\u0442\u0435\u043d\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"li"},"*"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"?"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"{abc,def}")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"{N..M}"),", \u0433\u0434\u0435 ",(0,l.kt)("inlineCode",{parentName:"li"},"N"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"M")," \u2014 \u0447\u0438\u0441\u043b\u0430, ",(0,l.kt)("inlineCode",{parentName:"li"},"'abc', 'def'")," \u2014 \u0441\u0442\u0440\u043e\u043a\u0438."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"format")," \u2014 ",(0,l.kt)("a",{parentName:"li",href:"/ru/interfaces/formats#formats"},"\u0444\u043e\u0440\u043c\u0430\u0442")," \u0444\u0430\u0439\u043b\u0430."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"structure")," \u2014 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b. \u0424\u043e\u0440\u043c\u0430\u0442: ",(0,l.kt)("inlineCode",{parentName:"li"},"'colunmn1_name column1_ype, column2_name column2_type, ...'"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,l.kt)("p",null,"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043e\u0439, \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u0430\u044f \u0434\u043b\u044f \u0447\u0442\u0435\u043d\u0438\u044f \u0438\u043b\u0438 \u0437\u0430\u043f\u0438\u0441\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b")),(0,l.kt)("p",null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"user_files_path")," \u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0444\u0430\u0439\u043b\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"test.csv"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ grep user_files_path /etc/clickhouse-server/config.xml\n    <user_files_path>/var/lib/clickhouse/user_files/</user_files_path>\n\n$ cat /var/lib/clickhouse/user_files/test.csv\n    1,2,3\n    3,2,1\n    78,43,45\n")),(0,l.kt)("p",null,"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"test.csv")," \u0438 \u0432\u044b\u0431\u043e\u0440\u043a\u0430 \u043f\u0435\u0440\u0432\u044b\u0445 \u0434\u0432\u0443\u0445 \u0441\u0442\u0440\u043e\u043a \u0438\u0437 \u043d\u0435\u0451:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM file('test.csv', 'CSV', 'column1 UInt32, column2 UInt32, column3 UInt32') LIMIT 2;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500column1\u2500\u252c\u2500column2\u2500\u252c\u2500column3\u2500\u2510\n\u2502       1 \u2502       2 \u2502       3 \u2502\n\u2502       3 \u2502       2 \u2502       1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u0435\u0440\u0432\u044b\u0445 10 \u0441\u0442\u0440\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0435\u0439 3 \u0441\u0442\u043e\u043b\u0431\u0446\u0430 \u0442\u0438\u043f\u0430 ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/int-uint"},"UInt32"),", \u0438\u0437 CSV-\u0444\u0430\u0439\u043b\u0430:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM file('test.csv', 'CSV', 'column1 UInt32, column2 UInt32, column3 UInt32') LIMIT 10;\n")),(0,l.kt)("p",null,"\u0412\u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u0444\u0430\u0439\u043b\u0430 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO FUNCTION file('test.csv', 'CSV', 'column1 UInt32, column2 UInt32, column3 UInt32') VALUES (1, 2, 3), (3, 2, 1);\nSELECT * FROM file('test.csv', 'CSV', 'column1 UInt32, column2 UInt32, column3 UInt32');\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500column1\u2500\u252c\u2500column2\u2500\u252c\u2500column3\u2500\u2510\n\u2502       1 \u2502       2 \u2502       3 \u2502\n\u2502       3 \u2502       2 \u2502       1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"globs-in-path"},"\u0428\u0430\u0431\u043b\u043e\u043d\u044b \u043f\u043e\u0438\u0441\u043a\u0430 \u0432 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u0445 \u043f\u0443\u0442\u0438"),(0,l.kt)("p",null,"\u041f\u0440\u0438 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0438 \u043f\u0443\u0442\u0438 \u043a \u0444\u0430\u0439\u043b\u0443 \u043c\u043e\u0433\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u044b \u043f\u043e\u0438\u0441\u043a\u0430. \u041e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u0435 \u0444\u0430\u0439\u043b\u044b, \u0443 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043f\u0443\u0442\u044c \u0438 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u0448\u0430\u0431\u043b\u043e\u043d\u0443 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e (\u0430 \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0435\u0444\u0438\u043a\u0441 \u0438\u043b\u0438 \u0441\u0443\u0444\u0444\u0438\u043a\u0441)."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*")," \u2014 \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u0442 \u043b\u044e\u0431\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043b\u044e\u0431\u044b\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u043a\u0440\u043e\u043c\u0435 ",(0,l.kt)("inlineCode",{parentName:"li"},"/"),", \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"?")," \u2014 \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u0442 \u0440\u043e\u0432\u043d\u043e \u043e\u0434\u0438\u043d \u043b\u044e\u0431\u043e\u0439 \u0441\u0438\u043c\u0432\u043e\u043b."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{some_string,another_string,yet_another_one}")," \u2014 \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u0442 \u043b\u044e\u0431\u0443\u044e \u0438\u0437 \u0441\u0442\u0440\u043e\u043a ",(0,l.kt)("inlineCode",{parentName:"li"},"'some_string', 'another_string', 'yet_another_one'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{N..M}")," \u2014 \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u0442 \u043b\u044e\u0431\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0432 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0435 \u043e\u0442 ",(0,l.kt)("inlineCode",{parentName:"li"},"N")," \u0434\u043e ",(0,l.kt)("inlineCode",{parentName:"li"},"M")," \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e (\u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0432\u0435\u0434\u0443\u0449\u0438\u0435 \u043d\u0443\u043b\u0438).")),(0,l.kt)("p",null,"\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0441 ",(0,l.kt)("inlineCode",{parentName:"p"},"{}")," \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u0430 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/table-functions/remote"},"remote"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("p",null,"\u041f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0438\u043c, \u0443 \u043d\u0430\u0441 \u0435\u0441\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0444\u0430\u0439\u043b\u043e\u0432 \u0441\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c\u0438 \u043f\u0443\u0442\u044f\u043c\u0438:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"'some_dir/some_file_1'"),(0,l.kt)("li",{parentName:"ul"},"'some_dir/some_file_2'"),(0,l.kt)("li",{parentName:"ul"},"'some_dir/some_file_3'"),(0,l.kt)("li",{parentName:"ul"},"'another_dir/some_file_1'"),(0,l.kt)("li",{parentName:"ul"},"'another_dir/some_file_2'"),(0,l.kt)("li",{parentName:"ul"},"'another_dir/some_file_3'")),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u043c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a \u0432 \u044d\u0442\u0438\u0445 \u0444\u0430\u0439\u043b\u0430\u0445:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*) FROM file('{some,another}_dir/some_file_{1..3}', 'TSV', 'name String, value UInt32');\n")),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u043c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a \u0432\u043e \u0432\u0441\u0435\u0445 \u0444\u0430\u0439\u043b\u0430\u0445 \u044d\u0442\u0438\u0445 \u0434\u0432\u0443\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*) FROM file('{some,another}_dir/*', 'TSV', 'name String, value UInt32');\n")),(0,l.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),'"\u041f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435"')),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre"},"\u0415\u0441\u043b\u0438 \u0432\u0430\u0448 \u0441\u043f\u0438\u0441\u043e\u043a \u0444\u0430\u0439\u043b\u043e\u0432 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0441 \u0432\u0435\u0434\u0443\u0449\u0438\u043c\u0438 \u043d\u0443\u043b\u044f\u043c\u0438, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044e \u0441 \u0444\u0438\u0433\u0443\u0440\u043d\u044b\u043c\u0438 \u0441\u043a\u043e\u0431\u043a\u0430\u043c\u0438 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0446\u0438\u0444\u0440\u044b \u043f\u043e \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0438\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 `?`.\n")),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("p",{parentName:"div"},"\u0417\u0430\u043f\u0440\u043e\u0441 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u0444\u0430\u0439\u043b\u043e\u0432 \u0441 \u0438\u043c\u0435\u043d\u0430\u043c\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"file000"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"file001"),", \u2026 , ",(0,l.kt)("inlineCode",{parentName:"p"},"file999"),":"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*) FROM file('big_dir/file{0..9}{0..9}{0..9}', 'CSV', 'name String, value UInt32');\n")),(0,l.kt)("h2",{parentName:"div",id:"virtualnye-stolbtsy"},"\u0412\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_path")," \u2014 \u043f\u0443\u0442\u044c \u043a \u0444\u0430\u0439\u043b\u0443."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_file")," \u2014 \u0438\u043c\u044f \u0444\u0430\u0439\u043b\u0430.")),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/table-functions/#table_engines-virtual_columns"},"\u0412\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b"))))))}f.isMDXComponent=!0}}]);
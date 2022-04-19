"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[70932],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),f=l,b=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(b,i(i({ref:n},u),{},{components:t})):r.createElement(b,i({ref:n},u))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},15502:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var r=t(87462),l=t(63366),a=(t(67294),t(3905)),i=["components"],o={sidebar_position:44,sidebar_label:"odbc"},c="odbc",s={unversionedId:"zh/sql-reference/table-functions/odbc",id:"zh/sql-reference/table-functions/odbc",title:"odbc",description:"table-functions-odbc}",source:"@site/docs/zh/sql-reference/table-functions/odbc.md",sourceDirName:"zh/sql-reference/table-functions",slug:"/zh/sql-reference/table-functions/odbc",permalink:"/zh/sql-reference/table-functions/odbc",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/table-functions/odbc.md",tags:[],version:"current",sidebarPosition:44,frontMatter:{sidebar_position:44,sidebar_label:"odbc"},sidebar:"chinese",previous:{title:"jdbc",permalink:"/zh/sql-reference/table-functions/jdbc"},next:{title:"hdfs",permalink:"/zh/sql-reference/table-functions/hdfs"}},u={},p=[{value:"\u7528\u6cd5\u793a\u4f8b",id:"usage-example",level:2},{value:"\u53e6\u8bf7\u53c2\u9605",id:"see-also",level:2}],d={toc:p};function f(e){var n=e.components,t=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"table-functions-odbc"},"odbc"),(0,a.kt)("p",null,"\u8fd4\u56de\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Open_Database_Connectivity"},"ODBC")," \u8fde\u63a5\u7684\u8868\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"odbc(connection_settings, external_database, external_table)\n")),(0,a.kt)("p",null,"\u53c2\u6570:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"connection_settings")," \u2014 \u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"odbc.ini")," \u6587\u4ef6\u4e2d\u8fde\u63a5\u8bbe\u7f6e\u7684\u90e8\u5206\u7684\u540d\u79f0\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"external_database")," \u2014 \u5916\u90e8DBMS\u7684\u6570\u636e\u5e93\u540d\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"external_table")," \u2014  ",(0,a.kt)("inlineCode",{parentName:"li"},"external_database")," \u6570\u636e\u5e93\u4e2d\u7684\u8868\u540d\u3002")),(0,a.kt)("p",null,"\u4e3a\u4e86\u5b89\u5168\u5730\u5b9e\u73b0ODBC\u8fde\u63a5\uff0cClickHouse\u4f7f\u7528\u5355\u72ec\u7684\u7a0b\u5e8f ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse-odbc-bridge"),"\u3002 \u5982\u679cODBC\u9a71\u52a8\u7a0b\u5e8f\u76f4\u63a5\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse-server")," \u52a0\u8f7d\uff0c\u5219\u9a71\u52a8\u7a0b\u5e8f\u95ee\u9898\u53ef\u80fd\u4f1a\u5bfc\u81f4ClickHouse\u670d\u52a1\u5668\u5d29\u6e83\u3002 \u5f53\u9700\u8981\u65f6\uff0cClickHouse\u81ea\u52a8\u542f\u52a8 ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse-odbc-bridge"),"\u3002 ODBC\u6865\u7a0b\u5e8f\u662f\u4ece\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse-server")," \u76f8\u540c\u7684\u8f6f\u4ef6\u5305\u5b89\u88c5\u7684\u3002"),(0,a.kt)("p",null,"\u5916\u90e8\u8868\u4e2d\u5b57\u6bb5\u5305\u542b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," \u503c\u5c06\u8f6c\u6362\u4e3a\u57fa\u672c\u636e\u7c7b\u578b\u7684\u9ed8\u8ba4\u503c\u3002 \u4f8b\u5982\uff0c\u5982\u679c\u8fdc\u7a0bMySQL\u8868\u5b57\u6bb5\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},"INT NULL")," \u7c7b\u578b\uff0c\u5219\u5c06\u88ab\u8f6c\u6362\u4e3a0\uff08ClickHouse",(0,a.kt)("inlineCode",{parentName:"p"},"Int32")," \u6570\u636e\u7c7b\u578b\u7684\u9ed8\u8ba4\u503c\uff09\u3002"),(0,a.kt)("h2",{id:"usage-example"},"\u7528\u6cd5\u793a\u4f8b"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u901a\u8fc7ODBC\u4ece\u672c\u5730\u5b89\u88c5\u7684MySQL\u83b7\u53d6\u6570\u636e")),(0,a.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u68c0\u67e5Ubuntu Linux18.04\u548cMySQL\u670d\u52a1\u56685.7\u3002"),(0,a.kt)("p",null,"\u786e\u4fdd\u5df2\u7ecf\u5b89\u88c5\u4e86unixODBC\u548cMySQL\u8fde\u63a5\u5668\u3002"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff08\u5982\u679c\u4ece\u8f6f\u4ef6\u5305\u5b89\u88c5\uff09\uff0cClickHouse\u4ee5\u7528\u6237 ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse")," \u542f\u52a8\u3002 \u56e0\u6b64\uff0c\u60a8\u9700\u8981\u5728MySQL\u670d\u52a1\u5668\u4e2d\u521b\u5efa\u548c\u914d\u7f6e\u6b64\u7528\u6237\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo mysql\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> CREATE USER 'clickhouse'@'localhost' IDENTIFIED BY 'clickhouse';\nmysql> GRANT ALL PRIVILEGES ON *.* TO 'clickhouse'@'clickhouse' WITH GRANT OPTION;\n")),(0,a.kt)("p",null,"\u7136\u540e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/odbc.ini")," \u4e2d\u914d\u7f6e\u8fde\u63a5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat /etc/odbc.ini\n[mysqlconn]\nDRIVER = /usr/local/lib/libmyodbc5w.so\nSERVER = 127.0.0.1\nPORT = 3306\nDATABASE = test\nUSERNAME = clickhouse\nPASSWORD = clickhouse\n")),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528unixODBC\u5b89\u88c5\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"isql")," \u5b9e\u7528\u7a0b\u5e8f\u68c0\u67e5\u8fde\u63a5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ isql -v mysqlconn\n+-------------------------+\n| Connected!                            |\n|                                       |\n...\n")),(0,a.kt)("p",null,"MySQL\u4e2d\u7684\u8868:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"mysql> CREATE TABLE `test`.`test` (\n    ->   `int_id` INT NOT NULL AUTO_INCREMENT,\n    ->   `int_nullable` INT NULL DEFAULT NULL,\n    ->   `float` FLOAT NOT NULL,\n    ->   `float_nullable` FLOAT NULL DEFAULT NULL,\n    ->   PRIMARY KEY (`int_id`));\nQuery OK, 0 rows affected (0,09 sec)\n\nmysql> insert into test (`int_id`, `float`) VALUES (1,2);\nQuery OK, 1 row affected (0,00 sec)\n\nmysql> select * from test;\n+------+----------+-----+----------+\n| int_id | int_nullable | float | float_nullable |\n+------+----------+-----+----------+\n|      1 |         NULL |     2 |           NULL |\n+------+----------+-----+----------+\n1 row in set (0,00 sec)\n")),(0,a.kt)("p",null,"\u4eceClickHouse\u4e2d\u7684MySQL\u8868\u4e2d\u68c0\u7d22\u6570\u636e:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM odbc('DSN=mysqlconn', 'test', 'test')\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500int_id\u2500\u252c\u2500int_nullable\u2500\u252c\u2500float\u2500\u252c\u2500float_nullable\u2500\u2510\n\u2502      1 \u2502            0 \u2502     2 \u2502              0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"see-also"},"\u53e6\u8bf7\u53c2\u9605"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources#dicts-external_dicts_dict_sources-odbc"},"ODBC\u5916\u90e8\u5b57\u5178")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/integrations/odbc"},"ODBC\u8868\u5f15\u64ce"),".")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/table_functions/jdbc/"},"\u539f\u59cb\u6587\u7ae0")," "))}f.isMDXComponent=!0}}]);
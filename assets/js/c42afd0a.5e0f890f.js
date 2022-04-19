"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[84716],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),c=i,k=u["".concat(o,".").concat(c)]||u[c]||m[c]||r;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},20182:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),l=["components"],s={sidebar_label:"MaterializedMySQL",sidebar_position:70},o="[experimental] MaterializedMySQL",p={unversionedId:"en/engines/database-engines/materialized-mysql",id:"en/engines/database-engines/materialized-mysql",title:"[experimental] MaterializedMySQL",description:"This is an experimental feature that should not be used in production.",source:"@site/docs/en/engines/database-engines/materialized-mysql.md",sourceDirName:"en/engines/database-engines",slug:"/en/engines/database-engines/materialized-mysql",permalink:"/en/engines/database-engines/materialized-mysql",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/database-engines/materialized-mysql.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_label:"MaterializedMySQL",sidebar_position:70},sidebar:"english",previous:{title:"MaterializedPostgreSQL",permalink:"/en/engines/database-engines/materialized-postgresql"},next:{title:"Table Engines",permalink:"/en/engines/table-engines/"}},d={},m=[{value:"Creating a Database",id:"creating-a-database",level:2},{value:"Virtual Columns",id:"virtual-columns",level:2},{value:"Data Types Support",id:"data_types-support",level:2},{value:"Specifics and Recommendations",id:"specifics-and-recommendations",level:2},{value:"Compatibility Restrictions",id:"compatibility-restrictions",level:3},{value:"DDL Queries",id:"ddl-queries",level:3},{value:"Data Replication",id:"data-replication",level:3},{value:"Selecting from MaterializedMySQL Tables",id:"select",level:3},{value:"Index Conversion",id:"index-conversion",level:3},{value:"Table Overrides",id:"table-overrides",level:3},{value:"Examples of Use",id:"examples-of-use",level:2}],u={toc:m};function c(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"experimental-materializedmysql"},"[experimental]"," MaterializedMySQL"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This is an experimental feature that should not be used in production."))),(0,r.kt)("p",null,"Creates a ClickHouse database with all the tables existing in MySQL, and all the data in those tables. The ClickHouse server works as MySQL replica. It reads ",(0,r.kt)("inlineCode",{parentName:"p"},"binlog")," and performs DDL and DML queries."),(0,r.kt)("h2",{id:"creating-a-database"},"Creating a Database"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE [IF NOT EXISTS] db_name [ON CLUSTER cluster]\nENGINE = MaterializedMySQL('host:port', ['database' | database], 'user', 'password') [SETTINGS ...]\n[TABLE OVERRIDE table1 (...), TABLE OVERRIDE table2 (...)]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Engine Parameters")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"host:port")," \u2014 MySQL server endpoint."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"database")," \u2014 MySQL database name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user")," \u2014 MySQL user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"password")," \u2014 User password.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Engine Settings")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_rows_in_buffer")," \u2014 Maximum number of rows that data is allowed to cache in memory (for single table and the cache data unable to query). When this number is exceeded, the data will be materialized. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"65 505"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_bytes_in_buffer")," \u2014  Maximum number of bytes that data is allowed to cache in memory (for single table and the cache data unable to query). When this number is exceeded, the data will be materialized. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1 048 576"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_flush_data_time")," \u2014 Maximum number of milliseconds that data is allowed to cache in memory (for database and the cache data unable to query). When this time is exceeded, the data will be materialized. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1000"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_wait_time_when_mysql_unavailable")," \u2014 Retry interval when MySQL is not available (milliseconds). Negative value disables retry. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1000"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"allows_query_when_mysql_lost")," \u2014 Allows to query a materialized table when MySQL is lost. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," (",(0,r.kt)("inlineCode",{parentName:"li"},"false"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"materialized_mysql_tables_list")," \u2014 a comma-separated list of mysql database tables, which will be replicated by MaterializedMySQL database engine. Default value: empty list \u2014 means whole tables will be replicated.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE mysql ENGINE = MaterializedMySQL('localhost:3306', 'db', 'user', '***')\n     SETTINGS\n        allows_query_when_mysql_lost=true,\n        max_wait_time_when_mysql_unavailable=10000;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Settings on MySQL-server Side")),(0,r.kt)("p",null,"For the correct work of ",(0,r.kt)("inlineCode",{parentName:"p"},"MaterializedMySQL"),", there are few mandatory ",(0,r.kt)("inlineCode",{parentName:"p"},"MySQL"),"-side configuration settings that must be set:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default_authentication_plugin = mysql_native_password")," since ",(0,r.kt)("inlineCode",{parentName:"li"},"MaterializedMySQL")," can only authorize with this method."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gtid_mode = on")," since GTID based logging is a mandatory for providing correct ",(0,r.kt)("inlineCode",{parentName:"li"},"MaterializedMySQL")," replication.")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"While turning on ",(0,r.kt)("inlineCode",{parentName:"p"},"gtid_mode")," you should also specify ",(0,r.kt)("inlineCode",{parentName:"p"},"enforce_gtid_consistency = on"),"."))),(0,r.kt)("h2",{id:"virtual-columns"},"Virtual Columns"),(0,r.kt)("p",null,"When working with the ",(0,r.kt)("inlineCode",{parentName:"p"},"MaterializedMySQL")," database engine, ",(0,r.kt)("a",{parentName:"p",href:"/en/engines/table-engines/mergetree-family/replacingmergetree"},"ReplacingMergeTree")," tables are used with virtual ",(0,r.kt)("inlineCode",{parentName:"p"},"_sign")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"_version")," columns."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_version")," \u2014 Transaction counter. Type ",(0,r.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_sign")," \u2014 Deletion mark. Type ",(0,r.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"Int8"),". Possible values:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1")," \u2014 Row is not deleted,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-1")," \u2014 Row is deleted.")))),(0,r.kt)("h2",{id:"data_types-support"},"Data Types Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"MySQL"),(0,r.kt)("th",{parentName:"tr",align:null},"ClickHouse"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TINY"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/int-uint"},"Int8"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SHORT"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/int-uint"},"Int16"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INT24"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/int-uint"},"Int32"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LONG"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/int-uint"},"UInt32"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LONGLONG"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/int-uint"},"UInt64"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/float"},"Float32"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/float"},"Float64"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL, NEWDECIMAL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/decimal"},"Decimal"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATE, NEWDATE"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/date"},"Date"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATETIME, TIMESTAMP"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/datetime"},"DateTime"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATETIME2, TIMESTAMP2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/datetime64"},"DateTime64"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"YEAR"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/int-uint"},"UInt16"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIME"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/int-uint"},"Int64"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ENUM"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/enum"},"Enum"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STRING"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/string"},"String"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR, VAR_STRING"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/string"},"String"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BLOB"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/string"},"String"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GEOMETRY"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/string"},"String"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BINARY"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/fixedstring"},"FixedString"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BIT"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/int-uint"},"UInt64"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SET"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/int-uint"},"UInt64"))))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/nullable"},"Nullable")," is supported."),(0,r.kt)("p",null,"The data of TIME type in MySQL is converted to microseconds in ClickHouse."),(0,r.kt)("p",null,'Other types are not supported. If MySQL table contains a column of such type, ClickHouse throws exception "Unhandled data type" and stops replication.'),(0,r.kt)("h2",{id:"specifics-and-recommendations"},"Specifics and Recommendations"),(0,r.kt)("h3",{id:"compatibility-restrictions"},"Compatibility Restrictions"),(0,r.kt)("p",null,"Apart of the data types limitations there are few restrictions comparing to ",(0,r.kt)("inlineCode",{parentName:"p"},"MySQL")," databases, that should be resolved before replication will be possible:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Each table in ",(0,r.kt)("inlineCode",{parentName:"p"},"MySQL")," should contain ",(0,r.kt)("inlineCode",{parentName:"p"},"PRIMARY KEY"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Replication for tables, those are containing rows with ",(0,r.kt)("inlineCode",{parentName:"p"},"ENUM")," field values out of range (specified in ",(0,r.kt)("inlineCode",{parentName:"p"},"ENUM")," signature) will not work."))),(0,r.kt)("h3",{id:"ddl-queries"},"DDL Queries"),(0,r.kt)("p",null,"MySQL DDL queries are converted into the corresponding ClickHouse DDL queries (",(0,r.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/alter/"},"ALTER"),", ",(0,r.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/create/"},"CREATE"),", ",(0,r.kt)("a",{parentName:"p",href:"../../sql-reference/statements/drop"},"DROP"),", ",(0,r.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/rename"},"RENAME"),"). If ClickHouse cannot parse some DDL query, the query is ignored."),(0,r.kt)("h3",{id:"data-replication"},"Data Replication"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MaterializedMySQL")," does not support direct ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE")," queries. However, they are supported in terms of data replication:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MySQL ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," query is converted into ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"_sign=1"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MySQL ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," query is converted into ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"_sign=-1"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MySQL ",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE")," query is converted into ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"_sign=-1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"_sign=1")," if the primary key has been changed, or\n",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"_sign=1")," if not."))),(0,r.kt)("h3",{id:"select"},"Selecting from MaterializedMySQL Tables"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," query from ",(0,r.kt)("inlineCode",{parentName:"p"},"MaterializedMySQL")," tables has some specifics:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If ",(0,r.kt)("inlineCode",{parentName:"p"},"_version")," is not specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," query, the\n",(0,r.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/select/from#select-from-final"},"FINAL")," modifier is used, so only rows with\n",(0,r.kt)("inlineCode",{parentName:"p"},"MAX(_version)")," are returned for each primary key value.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If ",(0,r.kt)("inlineCode",{parentName:"p"},"_sign")," is not specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," query, ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE _sign=1")," is used by default. So the deleted rows are not\nincluded into the result set.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The result includes columns comments in case they exist in MySQL database tables."))),(0,r.kt)("h3",{id:"index-conversion"},"Index Conversion"),(0,r.kt)("p",null,"MySQL ",(0,r.kt)("inlineCode",{parentName:"p"},"PRIMARY KEY")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"INDEX")," clauses are converted into ",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY")," tuples in ClickHouse tables."),(0,r.kt)("p",null,"ClickHouse has only one physical order, which is determined by ",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY")," clause. To create a new physical order, use\n",(0,r.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/create/view#materialized"},"materialized views"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rows with ",(0,r.kt)("inlineCode",{parentName:"li"},"_sign=-1")," are not deleted physically from the tables."),(0,r.kt)("li",{parentName:"ul"},"Cascade ",(0,r.kt)("inlineCode",{parentName:"li"},"UPDATE/DELETE")," queries are not supported by the ",(0,r.kt)("inlineCode",{parentName:"li"},"MaterializedMySQL")," engine, as they are not visible in the\nMySQL binlog."),(0,r.kt)("li",{parentName:"ul"},"Replication can be easily broken."),(0,r.kt)("li",{parentName:"ul"},"Manual operations on database and tables are forbidden."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MaterializedMySQL")," is affected by the ",(0,r.kt)("a",{parentName:"li",href:"/en/operations/settings/#optimize-on-insert"},"optimize_on_insert"),"\nsetting. Data is merged in the corresponding table in the ",(0,r.kt)("inlineCode",{parentName:"li"},"MaterializedMySQL")," database when a table in the MySQL\nserver changes.")),(0,r.kt)("h3",{id:"table-overrides"},"Table Overrides"),(0,r.kt)("p",null,"Table overrides can be used to customize the ClickHouse DDL queries, allowing you to make schema optimizations for your\napplication. This is especially useful for controlling partitioning, which is important for the overall performance of\nMaterializedMySQL."),(0,r.kt)("p",null,"These are the schema conversion manipulations you can do with table overrides for MaterializedMySQL:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Modify column type. Must be compatible with the original type, or replication will fail. For example,\nyou can modify a UInt32 column to UInt64, but you can not modify a String column to Array(String)."),(0,r.kt)("li",{parentName:"ul"},"Modify ",(0,r.kt)("a",{parentName:"li",href:"../table-engines/mergetree-family/mergetree/#mergetree-column-ttl"},"column TTL"),"."),(0,r.kt)("li",{parentName:"ul"},"Modify ",(0,r.kt)("a",{parentName:"li",href:"../../sql-reference/statements/create/table/#codecs"},"column compression codec"),"."),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("a",{parentName:"li",href:"../../sql-reference/statements/create/table/#alias"},"ALIAS columns"),"."),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("a",{parentName:"li",href:"../table-engines/mergetree-family/mergetree/#table_engine-mergetree-data_skipping-indexes"},"skipping indexes")),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("a",{parentName:"li",href:"../table-engines/mergetree-family/mergetree/#projections"},"projections"),". Note that projection optimizations are\ndisabled when using ",(0,r.kt)("inlineCode",{parentName:"li"},"SELECT ... FINAL")," (which MaterializedMySQL does by default), so their utility is limited here.\n",(0,r.kt)("inlineCode",{parentName:"li"},"INDEX ... TYPE hypothesis")," as ","[described in the v21.12 blog post]","](",(0,r.kt)("a",{parentName:"li",href:"https://clickhouse.com/blog/en/2021/clickhouse-v21.12-released/"},"https://clickhouse.com/blog/en/2021/clickhouse-v21.12-released/"),")\nmay be more useful in this case."),(0,r.kt)("li",{parentName:"ul"},"Modify ",(0,r.kt)("a",{parentName:"li",href:"../table-engines/mergetree-family/custom-partitioning-key/"},"PARTITION BY")),(0,r.kt)("li",{parentName:"ul"},"Modify ",(0,r.kt)("a",{parentName:"li",href:"../table-engines/mergetree-family/mergetree/#mergetree-query-clauses"},"ORDER BY")),(0,r.kt)("li",{parentName:"ul"},"Modify ",(0,r.kt)("a",{parentName:"li",href:"../table-engines/mergetree-family/mergetree/#mergetree-query-clauses"},"PRIMARY KEY")),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("a",{parentName:"li",href:"../table-engines/mergetree-family/mergetree/#mergetree-query-clauses"},"SAMPLE BY")),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("a",{parentName:"li",href:"../table-engines/mergetree-family/mergetree/#mergetree-query-clauses"},"table TTL"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE db_name ENGINE = MaterializedMySQL(...)\n[SETTINGS ...]\n[TABLE OVERRIDE table_name (\n    [COLUMNS (\n        [col_name [datatype] [ALIAS expr] [CODEC(...)] [TTL expr], ...]\n        [INDEX index_name expr TYPE indextype[(...)] GRANULARITY val, ...]\n        [PROJECTION projection_name (SELECT <COLUMN LIST EXPR> [GROUP BY] [ORDER BY]), ...]\n    )]\n    [ORDER BY expr]\n    [PRIMARY KEY expr]\n    [PARTITION BY expr]\n    [SAMPLE BY expr]\n    [TTL expr]\n), ...]\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE db_name ENGINE = MaterializedMySQL(...)\nTABLE OVERRIDE table1 (\n    COLUMNS (\n        userid UUID,\n        category LowCardinality(String),\n        timestamp DateTime CODEC(Delta, Default)\n    )\n    PARTITION BY toYear(timestamp)\n),\nTABLE OVERRIDE table2 (\n    COLUMNS (\n        client_ip String TTL created + INTERVAL 72 HOUR\n    )\n    SAMPLE BY ip_hash\n)\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"COLUMNS")," list is sparse; existing columns are modified as specified, extra ALIAS columns are added. It is not\npossible to add ordinary or MATERIALIZED columns.  Modified columns with a different type must be assignable from the\noriginal type. There is currently no validation of this or similar issues when the ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE DATABASE")," query executes, so\nextra care needs to be taken."),(0,r.kt)("p",null,"You may specify overrides for tables that do not exist yet."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It is easy to break replication with table overrides if not used with care. For example:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"If an ALIAS column is added with a table override, and a column with the same name is later added to the source\nMySQL table, the converted ALTER TABLE query in ClickHouse will fail and replication stops."),(0,r.kt)("li",{parentName:"ul"},"It is currently possible to add overrides that reference nullable columns where not-nullable are required, such as in\n",(0,r.kt)("inlineCode",{parentName:"li"},"ORDER BY")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"PARTITION BY"),". This will cause CREATE TABLE queries that will fail, also causing replication to stop.")))),(0,r.kt)("h2",{id:"examples-of-use"},"Examples of Use"),(0,r.kt)("p",null,"Queries in MySQL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> CREATE DATABASE db;\nmysql> CREATE TABLE db.test (a INT PRIMARY KEY, b INT);\nmysql> INSERT INTO db.test VALUES (1, 11), (2, 22);\nmysql> DELETE FROM db.test WHERE a=1;\nmysql> ALTER TABLE db.test ADD COLUMN c VARCHAR(16);\nmysql> UPDATE db.test SET c='Wow!', b=222;\nmysql> SELECT * FROM test;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u252c\u2500\u2500\u2500b\u2500\u252c\u2500c\u2500\u2500\u2500\u2500\u2510\n\u2502 2 \u2502 222 \u2502 Wow! \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Database in ClickHouse, exchanging data with the MySQL server:"),(0,r.kt)("p",null,"The database and the table created:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE mysql ENGINE = MaterializedMySQL('localhost:3306', 'db', 'user', '***');\nSHOW TABLES FROM mysql;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2510\n\u2502 test \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"After inserting data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM mysql.test;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u252c\u2500\u2500b\u2500\u2510\n\u2502 1 \u2502 11 \u2502\n\u2502 2 \u2502 22 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"After deleting data, adding the column and updating:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM mysql.test;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u252c\u2500\u2500\u2500b\u2500\u252c\u2500c\u2500\u2500\u2500\u2500\u2510\n\u2502 2 \u2502 222 \u2502 Wow! \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/database-engines/materialized-mysql/"},"Original article")," "))}c.isMDXComponent=!0}}]);
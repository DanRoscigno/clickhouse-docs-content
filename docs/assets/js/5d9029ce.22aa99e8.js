"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[18879],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return g}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(a),g=i,u=c["".concat(o,".").concat(g)]||c[g]||m[g]||s;return a?n.createElement(u,l(l({ref:t},d),{},{components:a})):n.createElement(u,l({ref:t},d))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,l=new Array(s);l[0]=c;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var p=2;p<s;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},29888:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return m}});var n=a(87462),i=a(63366),s=(a(67294),a(3905)),l=["components"],r={sidebar_label:"MaterializedPostgreSQL",sidebar_position:60},o="[experimental] MaterializedPostgreSQL",p={unversionedId:"en/engines/database-engines/materialized-postgresql",id:"en/engines/database-engines/materialized-postgresql",title:"[experimental] MaterializedPostgreSQL",description:"materialize-postgresql}",source:"@site/docs/en/engines/database-engines/materialized-postgresql.md",sourceDirName:"en/engines/database-engines",slug:"/en/engines/database-engines/materialized-postgresql",permalink:"/en/engines/database-engines/materialized-postgresql",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/en/engines/database-engines/materialized-postgresql.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_label:"MaterializedPostgreSQL",sidebar_position:60},sidebar:"english",previous:{title:"SQLite",permalink:"/en/engines/database-engines/sqlite"},next:{title:"MaterializedMySQL",permalink:"/en/engines/database-engines/materialized-mysql"}},d={},m=[{value:"Creating a Database",id:"creating-a-database",level:2},{value:"Example of Use",id:"example-of-use",level:2},{value:"Dynamically adding new tables to replication",id:"dynamically-adding-table-to-replication",level:2},{value:"Dynamically removing tables from replication",id:"dynamically-removing-table-from-replication",level:2},{value:"PostgreSQL schema",id:"schema",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Settings",id:"settings",level:2},{value:"Notes",id:"notes",level:2},{value:"Failover of the logical replication slot",id:"logical-replication-slot-failover",level:3},{value:"Required permissions",id:"required-permissions",level:3}],c={toc:m};function g(e){var t=e.components,a=(0,i.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"materialize-postgresql"},"[experimental]"," MaterializedPostgreSQL"),(0,s.kt)("p",null,"Creates a ClickHouse database with tables from PostgreSQL database. Firstly, database with engine ",(0,s.kt)("inlineCode",{parentName:"p"},"MaterializedPostgreSQL")," creates a snapshot of PostgreSQL database and loads required tables. Required tables can include any subset of tables from any subset of schemas from specified database. Along with the snapshot database engine acquires LSN and once initial dump of tables is performed - it starts pulling updates from WAL. After database is created, newly added tables to PostgreSQL database are not automatically added to replication. They have to be added manually with ",(0,s.kt)("inlineCode",{parentName:"p"},"ATTACH TABLE db.table")," query."),(0,s.kt)("p",null,"Replication is implemented with PostgreSQL Logical Replication Protocol, which does not allow to replicate DDL, but allows to know whether replication breaking changes happened (column type changes, adding/removing columns). Such changes are detected and according tables stop receiving updates. Such tables can be automatically reloaded in the background in case required setting is turned on (can be used starting from 22.1). Safest way for now is to use ",(0,s.kt)("inlineCode",{parentName:"p"},"ATTACH"),"/ ",(0,s.kt)("inlineCode",{parentName:"p"},"DETACH")," queries to reload table completely. If DDL does not break replication (for example, renaming a column) table will still receive updates (insertion is done by position)."),(0,s.kt)("h2",{id:"creating-a-database"},"Creating a Database"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE [IF NOT EXISTS] db_name [ON CLUSTER cluster]\nENGINE = MaterializedPostgreSQL('host:port', 'database', 'user', 'password') [SETTINGS ...]\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Engine Parameters")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"host:port")," \u2014 PostgreSQL server endpoint."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"database")," \u2014 PostgreSQL database name."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"user")," \u2014 PostgreSQL user."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"password")," \u2014 User password.")),(0,s.kt)("h2",{id:"example-of-use"},"Example of Use"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE postgres_db\nENGINE = MaterializedPostgreSQL('postgres1:5432', 'postgres_database', 'postgres_user', 'postgres_password');\n\nSHOW TABLES FROM postgres_db;\n\n\u250c\u2500name\u2500\u2500\u2500\u2510\n\u2502 table1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nSELECT * FROM postgresql_db.postgres_table;\n")),(0,s.kt)("h2",{id:"dynamically-adding-table-to-replication"},"Dynamically adding new tables to replication"),(0,s.kt)("p",null,"After ",(0,s.kt)("inlineCode",{parentName:"p"},"MaterializedPostgreSQL")," database is created, it does not automatically detect new tables in according PostgreSQL database. Such tables can be added manually:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"ATTACH TABLE postgres_database.new_table;\n")),(0,s.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Before version 22.1, adding a table to replication left an unremoved temporary replication slot (named ",(0,s.kt)("inlineCode",{parentName:"p"},"{db_name}_ch_replication_slot_tmp"),"). If attaching tables in ClickHouse version before 22.1, make sure to delete it manually (",(0,s.kt)("inlineCode",{parentName:"p"},"SELECT pg_drop_replication_slot('{db_name}_ch_replication_slot_tmp')"),"). Otherwise disk usage will grow. This issue is fixed in 22.1."))),(0,s.kt)("h2",{id:"dynamically-removing-table-from-replication"},"Dynamically removing tables from replication"),(0,s.kt)("p",null,"It is possible to remove specific tables from replication:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"DETACH TABLE postgres_database.table_to_remove;\n")),(0,s.kt)("h2",{id:"schema"},"PostgreSQL schema"),(0,s.kt)("p",null,"PostgreSQL ",(0,s.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/9.1/ddl-schemas.html"},"schema")," can be configured in 3 ways (starting from version 21.12)."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"One schema for one ",(0,s.kt)("inlineCode",{parentName:"li"},"MaterializedPostgreSQL")," database engine. Requires to use setting ",(0,s.kt)("inlineCode",{parentName:"li"},"materialized_postgresql_schema"),".\nTables are accessed via table name only:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE postgres_database\nENGINE = MaterializedPostgreSQL('postgres1:5432', 'postgres_database', 'postgres_user', 'postgres_password')\nSETTINGS materialized_postgresql_schema = 'postgres_schema';\n\nSELECT * FROM postgres_database.table1;\n")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Any number of schemas with specified set of tables for one ",(0,s.kt)("inlineCode",{parentName:"li"},"MaterializedPostgreSQL")," database engine. Requires to use setting ",(0,s.kt)("inlineCode",{parentName:"li"},"materialized_postgresql_tables_list"),". Each table is written along with its schema.\nTables are accessed via schema name and table name at the same time:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE database1\nENGINE = MaterializedPostgreSQL('postgres1:5432', 'postgres_database', 'postgres_user', 'postgres_password')\nSETTINGS materialized_postgresql_tables_list = 'schema1.table1,schema2.table2,schema1.table3',\n         materialized_postgresql_tables_list_with_schema = 1;\n\nSELECT * FROM database1.`schema1.table1`;\nSELECT * FROM database1.`schema2.table2`;\n")),(0,s.kt)("p",null,"But in this case all tables in ",(0,s.kt)("inlineCode",{parentName:"p"},"materialized_postgresql_tables_list")," must be written with its schema name.\nRequires ",(0,s.kt)("inlineCode",{parentName:"p"},"materialized_postgresql_tables_list_with_schema = 1"),"."),(0,s.kt)("p",null,"Warning: for this case dots in table name are not allowed."),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Any number of schemas with full set of tables for one ",(0,s.kt)("inlineCode",{parentName:"li"},"MaterializedPostgreSQL")," database engine. Requires to use setting ",(0,s.kt)("inlineCode",{parentName:"li"},"materialized_postgresql_schema_list"),".")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE database1\nENGINE = MaterializedPostgreSQL('postgres1:5432', 'postgres_database', 'postgres_user', 'postgres_password')\nSETTINGS materialized_postgresql_schema_list = 'schema1,schema2,schema3';\n\nSELECT * FROM database1.`schema1.table1`;\nSELECT * FROM database1.`schema1.table2`;\nSELECT * FROM database1.`schema2.table2`;\n")),(0,s.kt)("p",null,"Warning: for this case dots in table name are not allowed."),(0,s.kt)("h2",{id:"requirements"},"Requirements"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"The ",(0,s.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/runtime-config-wal.html"},"wal_level")," setting must have a value ",(0,s.kt)("inlineCode",{parentName:"p"},"logical")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"max_replication_slots")," parameter must have a value at least ",(0,s.kt)("inlineCode",{parentName:"p"},"2")," in the PostgreSQL config file.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Each replicated table must have one of the following ",(0,s.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/10/sql-altertable.html#SQL-CREATETABLE-REPLICA-IDENTITY"},"replica identity"),":"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"primary key (by default)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"index"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"postgres# CREATE TABLE postgres_table (a Integer NOT NULL, b Integer, c Integer NOT NULL, d Integer, e Integer NOT NULL);\npostgres# CREATE unique INDEX postgres_table_index on postgres_table(a, c, e);\npostgres# ALTER TABLE postgres_table REPLICA IDENTITY USING INDEX postgres_table_index;\n")),(0,s.kt)("p",null,"The primary key is always checked first. If it is absent, then the index, defined as replica identity index, is checked.\nIf the index is used as a replica identity, there has to be only one such index in a table.\nYou can check what type is used for a specific table with the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"postgres# SELECT CASE relreplident\n          WHEN 'd' THEN 'default'\n          WHEN 'n' THEN 'nothing'\n          WHEN 'f' THEN 'full'\n          WHEN 'i' THEN 'index'\n       END AS replica_identity\nFROM pg_class\nWHERE oid = 'postgres_table'::regclass;\n")),(0,s.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Replication of ",(0,s.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/9.5/storage-toast.html"},(0,s.kt)("strong",{parentName:"a"},"TOAST"))," values is not supported. The default value for the data type will be used."))),(0,s.kt)("h2",{id:"settings"},"Settings"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"materialized_postgresql_tables_list")," {#materialized-postgresql-tables-list}"),(0,s.kt)("p",{parentName:"li"},"Sets a comma-separated list of PostgreSQL database tables, which will be replicated via ",(0,s.kt)("a",{parentName:"p",href:"/en/engines/database-engines/materialized-postgresql"},"MaterializedPostgreSQL")," database engine."),(0,s.kt)("p",{parentName:"li"},"Default value: empty list \u2014 means whole PostgreSQL database will be replicated.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"materialized_postgresql_schema")," {#materialized-postgresql-schema}"),(0,s.kt)("p",{parentName:"li"},"Default value: empty string. (Default schema is used)")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"materialized_postgresql_schema_list")," {#materialized-postgresql-schema-list}"),(0,s.kt)("p",{parentName:"li"},"Default value: empty list. (Default schema is used)")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"materialized_postgresql_allow_automatic_update")," {#materialized-postgresql-allow-automatic-update}"),(0,s.kt)("p",{parentName:"li"},"Do not use this setting before 22.1 version."),(0,s.kt)("p",{parentName:"li"},"Allows reloading table in the background, when schema changes are detected. DDL queries on the PostgreSQL side are not replicated via ClickHouse ",(0,s.kt)("a",{parentName:"p",href:"/en/engines/database-engines/materialized-postgresql"},"MaterializedPostgreSQL")," engine, because it is not allowed with PostgreSQL logical replication protocol, but the fact of DDL changes is detected transactionally. In this case, the default behaviour is to stop replicating those tables once DDL is detected. However, if this setting is enabled, then, instead of stopping the replication of those tables, they will be reloaded in the background via database snapshot without data losses and replication will continue for them."),(0,s.kt)("p",{parentName:"li"},"Possible values:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"0 \u2014 The table is not automatically updated in the background, when schema changes are detected."),(0,s.kt)("li",{parentName:"ul"},"1 \u2014 The table is automatically updated in the background, when schema changes are detected.")),(0,s.kt)("p",{parentName:"li"},"Default value: ",(0,s.kt)("inlineCode",{parentName:"p"},"0"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"materialized_postgresql_max_block_size")," {#materialized-postgresql-max-block-size}"),(0,s.kt)("p",{parentName:"li"},"Sets the number of rows collected in memory before flushing data into PostgreSQL database table."),(0,s.kt)("p",{parentName:"li"},"Possible values:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Positive integer.")),(0,s.kt)("p",{parentName:"li"},"Default value: ",(0,s.kt)("inlineCode",{parentName:"p"},"65536"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"materialized_postgresql_replication_slot")," {#materialized-postgresql-replication-slot}"),(0,s.kt)("p",{parentName:"li"},"A user-created replication slot. Must be used together with ",(0,s.kt)("inlineCode",{parentName:"p"},"materialized_postgresql_snapshot"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"materialized_postgresql_snapshot")," {#materialized-postgresql-snapshot}"),(0,s.kt)("p",{parentName:"li"},"A text string identifying a snapshot, from which ",(0,s.kt)("a",{parentName:"p",href:"/en/engines/database-engines/materialized-postgresql"},"initial dump of PostgreSQL tables")," will be performed. Must be used together with ",(0,s.kt)("inlineCode",{parentName:"p"},"materialized_postgresql_replication_slot"),"."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE database1\nENGINE = MaterializedPostgreSQL('postgres1:5432', 'postgres_database', 'postgres_user', 'postgres_password')\nSETTINGS materialized_postgresql_tables_list = 'table1,table2,table3';\n\nSELECT * FROM database1.table1;\n")),(0,s.kt)("p",{parentName:"li"},"The settings can be changed, if necessary, using a DDL query. But it is impossible to change the setting ",(0,s.kt)("inlineCode",{parentName:"p"},"materialized_postgresql_tables_list"),". To update the list of tables in this setting use the ",(0,s.kt)("inlineCode",{parentName:"p"},"ATTACH TABLE")," query."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER DATABASE postgres_database MODIFY SETTING materialized_postgresql_max_block_size = <new_size>;\n")))),(0,s.kt)("h2",{id:"notes"},"Notes"),(0,s.kt)("h3",{id:"logical-replication-slot-failover"},"Failover of the logical replication slot"),(0,s.kt)("p",null,"Logical Replication Slots which exist on the primary are not available on standby replicas.\nSo if there is a failover, new primary (the old physical standby) won\u2019t be aware of any slots which were existing with old primary. This will lead to a broken replication from PostgreSQL.\nA solution to this is to manage replication slots yourself and define a permanent replication slot (some information can be found ",(0,s.kt)("a",{parentName:"p",href:"https://patroni.readthedocs.io/en/latest/SETTINGS.html"},"here"),"). You'll need to pass slot name via ",(0,s.kt)("inlineCode",{parentName:"p"},"materialized_postgresql_replication_slot")," setting, and it has to be exported with ",(0,s.kt)("inlineCode",{parentName:"p"},"EXPORT SNAPSHOT")," option. The snapshot identifier needs to be passed via ",(0,s.kt)("inlineCode",{parentName:"p"},"materialized_postgresql_snapshot")," setting."),(0,s.kt)("p",null,"Please note that this should be used only if it is actually needed. If there is no real need for that or full understanding why, then it is better to allow the table engine to create and manage its own replication slot."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example (from ",(0,s.kt)("a",{parentName:"strong",href:"https://github.com/bchrobot"},"@bchrobot"),")")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Configure replication slot in PostgreSQL."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: "acid.zalan.do/v1"\nkind: postgresql\nmetadata:\n  name: acid-demo-cluster\nspec:\n  numberOfInstances: 2\n  postgresql:\n    parameters:\n      wal_level: logical\n  patroni:\n    slots:\n      clickhouse_sync:\n        type: logical\n        database: demodb\n        plugin: pgoutput\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Wait for replication slot to be ready, then begin a transaction and export the transaction snapshot identifier:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"BEGIN;\nSELECT pg_export_snapshot();\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In ClickHouse create database:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE demodb\nENGINE = MaterializedPostgreSQL('postgres1:5432', 'postgres_database', 'postgres_user', 'postgres_password')\nSETTINGS\n  materialized_postgresql_replication_slot = 'clickhouse_sync',\n  materialized_postgresql_snapshot = '0000000A-0000023F-3',\n  materialized_postgresql_tables_list = 'table1,table2,table3';\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"End the PostgreSQL transaction once replication to ClickHouse DB is confirmed. Verify that replication continues after failover:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl exec acid-demo-cluster-0 -c postgres -- su postgres -c 'patronictl failover --candidate acid-demo-cluster-1 --force'\n")))),(0,s.kt)("h3",{id:"required-permissions"},"Required permissions"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://postgrespro.ru/docs/postgresql/14/sql-createpublication"},"CREATE PUBLICATION")," -- create query privilege.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://postgrespro.ru/docs/postgrespro/10/protocol-replication#PROTOCOL-REPLICATION-CREATE-SLOT"},"CREATE_REPLICATION_SLOT")," -- replication privelege.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://postgrespro.ru/docs/postgrespro/9.5/functions-admin#functions-replication"},"pg_drop_replication_slot")," -- replication privilege or superuser.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://postgrespro.ru/docs/postgresql/10/sql-droppublication"},"DROP PUBLICATION")," -- owner of publication (",(0,s.kt)("inlineCode",{parentName:"p"},"username")," in MaterializedPostgreSQL engine itself)."))),(0,s.kt)("p",null,"It is possible to avoid executing ",(0,s.kt)("inlineCode",{parentName:"p"},"2")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"3")," commands and having those permissions. Use settings ",(0,s.kt)("inlineCode",{parentName:"p"},"materialized_postgresql_replication_slot")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"materialized_postgresql_snapshot"),". But with much care."),(0,s.kt)("p",null,"Access to tables:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"pg_publication")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"pg_replication_slots")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"pg_publication_tables"))))}g.isMDXComponent=!0}}]);
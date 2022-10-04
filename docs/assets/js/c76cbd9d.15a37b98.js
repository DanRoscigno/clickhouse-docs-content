"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[30345],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return p}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=c(a),p=o,h=m["".concat(l,".").concat(p)]||m[p]||u[p]||i;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,s=new Array(i);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},34775:function(e,t,a){a.d(t,{ZP:function(){return l}});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),s=["components"],r={toc:[]};function l(e){var t=e.components,l=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},r,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Manage your IP Access List"),(0,i.kt)("p",null,"From your ClickHouse Cloud services list choose the service that you will work with and switch to ",(0,i.kt)("strong",{parentName:"p"},"Security"),".  If the IP Access List does not contain the IP Address or range of the remote system that needs to connect to your ClickHouse Cloud service, then you can resolve the problem with ",(0,i.kt)("strong",{parentName:"p"},"Add entry"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Check to see if the service allows traffic",src:a(62406).Z,width:"999",height:"519"})),(0,i.kt)("p",null,"Add the individual IP Address, or the range of addresses that need to connect to your ClickHouse Cloud service. Modify the form as you see fit and then ",(0,i.kt)("strong",{parentName:"p"},"Add entry")," and ",(0,i.kt)("strong",{parentName:"p"},"Submit entry"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add your current IP address",src:a(68554).Z,width:"595",height:"523"}))))}l.isMDXComponent=!0},87514:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),s=a(34775),r=["components"],l={sidebar_position:10,sidebar_label:"ClickHouse to Clickhouse Cloud",slug:"/en/integrations/migration/clickhouse-to-cloud"},c="Migrating between ClickHouse and Clickhouse Cloud",d={unversionedId:"en/integrations/migration/clickhouse-to-cloud",id:"en/integrations/migration/clickhouse-to-cloud",title:"Migrating between ClickHouse and Clickhouse Cloud",description:"This guide will show how to migrate from a self-managed ClickHouse server to ClickHouse Cloud, and also how to migrate between ClickHouse Cloud services. The remoteSecure function is used in SELECT and INSERT queries to allow access to remote ClickHouse servers, which makes migrating tables as simple as writing an INSERT INTO query with an embedded SELECT.",source:"@site/docs/en/integrations/migration/clickhouse-to-cloud.md",sourceDirName:"en/integrations/migration",slug:"/en/integrations/migration/clickhouse-to-cloud",permalink:"/docs/en/integrations/migration/clickhouse-to-cloud",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/migration/clickhouse-to-cloud.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_label:"ClickHouse to Clickhouse Cloud",slug:"/en/integrations/migration/clickhouse-to-cloud"},sidebar:"english",previous:{title:"Overview",permalink:"/docs/en/integrations/migration/"},next:{title:"Using clickhouse-local",permalink:"/docs/en/integrations/migration/clickhouse-local"}},u={},m=[{value:"Migrating from Self-managed ClickHouse to Clickhouse Cloud",id:"migrating-from-self-managed-clickhouse-to-clickhouse-cloud",level:2},{value:"Overview",id:"overview",level:3},{value:"Migration of tables from one system to another:",id:"migration-of-tables-from-one-system-to-another",level:3},{value:"On the source ClickHouse system (the system that currently hosts the data)",id:"on-the-source-clickhouse-system-the-system-that-currently-hosts-the-data",level:3},{value:"On the destination ClickHouse Cloud system:",id:"on-the-destination-clickhouse-cloud-system",level:3},{value:"Migrating between ClickHouse Cloud services",id:"migrating-between-clickhouse-cloud-services",level:2},{value:"Add a read-only user to the source service",id:"add-a-read-only-user-to-the-source-service",level:4},{value:"Duplicate the table structure on the destination service",id:"duplicate-the-table-structure-on-the-destination-service",level:4},{value:"Allow remote access to the source service",id:"allow-remote-access-to-the-source-service",level:4},{value:"Copy the data from source to destination",id:"copy-the-data-from-source-to-destination",level:4},{value:"Re-establish the IP Access List on the source",id:"re-establish-the-ip-access-list-on-the-source",level:4},{value:"Remove the read-only <code>exporter</code> user",id:"remove-the-read-only-exporter-user",level:4}],p={toc:m};function h(e){var t=e.components,l=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"migrating-between-clickhouse-and-clickhouse-cloud"},"Migrating between ClickHouse and Clickhouse Cloud"),(0,i.kt)("img",{src:a(99969).Z,class:"image",alt:"Migrating Self-managed ClickHouse",style:{width:"80%",padding:"30px"}}),(0,i.kt)("p",null,"This guide will show how to migrate from a self-managed ClickHouse server to ClickHouse Cloud, and also how to migrate between ClickHouse Cloud services. The ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/remote"},(0,i.kt)("inlineCode",{parentName:"a"},"remoteSecure"))," function is used in ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," queries to allow access to remote ClickHouse servers, which makes migrating tables as simple as writing an ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT INTO")," query with an embedded ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT"),"."),(0,i.kt)("h2",{id:"migrating-from-self-managed-clickhouse-to-clickhouse-cloud"},"Migrating from Self-managed ClickHouse to Clickhouse Cloud"),(0,i.kt)("img",{src:a(59353).Z,class:"image",alt:"Migrating Self-managed ClickHouse",style:{width:"30%",padding:"30px"}}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Regardless of if your source table is sharded and/or replicated, on ClickHouse Cloud you just create a destination table (you can leave out the Engine parameter for this table, it will be automatically a ReplicatedMergeTree table),\nand ClickHouse Cloud will automatically take care of vertical and horizontal scaling. There is no need from your side to think about how to replicate and shard the table.   "))),(0,i.kt)("p",null,"In this example the self-managed ClickHouse server is the ",(0,i.kt)("em",{parentName:"p"},"source")," and the ClickHouse Cloud service is the ",(0,i.kt)("em",{parentName:"p"},"destination"),"."),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The process is:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add a read-only user to the source service"),(0,i.kt)("li",{parentName:"ol"},"Duplicate the source table structure on the destination service"),(0,i.kt)("li",{parentName:"ol"},"Pull the data from source to destination, or push the data from the source, depending on the network availability of the source"),(0,i.kt)("li",{parentName:"ol"},"Remove the source server from the IP Access List on the destination (if applicable)"),(0,i.kt)("li",{parentName:"ol"},"Remove the read-only user from the source service")),(0,i.kt)("h3",{id:"migration-of-tables-from-one-system-to-another"},"Migration of tables from one system to another:"),(0,i.kt)("p",null,"This example migrates one table from a self-managed ClickHouse server to ClickHouse Cloud."),(0,i.kt)("h3",{id:"on-the-source-clickhouse-system-the-system-that-currently-hosts-the-data"},"On the source ClickHouse system (the system that currently hosts the data)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add a read only user that can read the source table (",(0,i.kt)("inlineCode",{parentName:"li"},"db.table")," in this example)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER exporter\nIDENTIFIED WITH SHA256_PASSWORD BY 'password-here'\nSETTINGS readonly = 1;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT ON db.table TO exporter;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Copy the table definition")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select create_table_query\nfrom system.tables\nwhere database = 'db' and table = 'table'\n")),(0,i.kt)("h3",{id:"on-the-destination-clickhouse-cloud-system"},"On the destination ClickHouse Cloud system:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create the destination database:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE db\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Using the CREATE TABLE statement from the source, create the destination.")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Change the ENGINE to to ReplicatedMergeTree without any parameters when you run the CREATE statement.  ClickHouse Cloud always replicates tables and provides the correct parameters."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE db.table ...\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"remoteSecure")," function to pull the data from the self-managed source")),(0,i.kt)("img",{src:a(34287).Z,class:"image",alt:"Migrating Self-managed ClickHouse",style:{width:"30%",padding:"30px"}}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO db.table SELECT * FROM\nremoteSecure('source-hostname', db, table, 'exporter', 'password-here')\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If the source system is not available from outside networks then you can push the data rather than pulling it, as the ",(0,i.kt)("inlineCode",{parentName:"p"},"remoteSecure")," function works for both selects and inserts.  See the next option."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"remoteSecure")," function to push the data to the ClickHouse Cloud service")),(0,i.kt)("img",{src:a(23157).Z,class:"image",alt:"Migrating Self-managed ClickHouse",style:{width:"30%",padding:"30px"}}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Add the remote system to your ClickHouse Cloud service IP Access List")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In order for the ",(0,i.kt)("inlineCode",{parentName:"p"},"remoteSecure")," function to connect to your ClickHouse Cloud service the IP Address of the remote system will need to be allowed by the IP Access List.  Expand ",(0,i.kt)("strong",{parentName:"p"},"Manage your IP Access List")," below this tip for more information."))),(0,i.kt)(s.ZP,{mdxType:"AddARemoteSystem"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO FUNCTION\nremoteSecure('HOSTNAME.clickhouse.cloud:9440', 'db.table',\n'default', 'PASS') SELECT * FROM db.table\n")),(0,i.kt)("h2",{id:"migrating-between-clickhouse-cloud-services"},"Migrating between ClickHouse Cloud services"),(0,i.kt)("img",{src:a(53595).Z,class:"image",alt:"Migrating Self-managed ClickHouse",style:{width:"80%",padding:"30px"}}),(0,i.kt)("p",null,"Some example uses for migrating data between ClickHouse Cloud services:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Migrating data from a restored backup"),(0,i.kt)("li",{parentName:"ul"},"Copying data from a development service to a staging service (or staging to production)")),(0,i.kt)("p",null,"In this example there are two ClickHouse Cloud services, and they will be referred to as ",(0,i.kt)("em",{parentName:"p"},"source")," and ",(0,i.kt)("em",{parentName:"p"},"destination"),".  The data will be pulled from the source to the destination. Although you could push if you like, pulling is shown as it uses a read-only user."),(0,i.kt)("img",{src:a(11482).Z,class:"image",alt:"Migrating Self-managed ClickHouse",style:{width:"80%",padding:"30px"}}),(0,i.kt)("p",null,"There are a few steps in the migration:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Identify one ClickHouse Cloud service to be the ",(0,i.kt)("em",{parentName:"li"},"source"),", and the other as the ",(0,i.kt)("em",{parentName:"li"},"destination")),(0,i.kt)("li",{parentName:"ol"},"Add a read-only user to the source service"),(0,i.kt)("li",{parentName:"ol"},"Duplicate the source table structure on the destination service"),(0,i.kt)("li",{parentName:"ol"},"Temporarily allow IP access to the source service"),(0,i.kt)("li",{parentName:"ol"},"Copy the data from source to destination"),(0,i.kt)("li",{parentName:"ol"},"Re-establish the IP Access List on the destination"),(0,i.kt)("li",{parentName:"ol"},"Remove the read-only user from the source service")),(0,i.kt)("h4",{id:"add-a-read-only-user-to-the-source-service"},"Add a read-only user to the source service"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add a read only user that can read the source table (",(0,i.kt)("inlineCode",{parentName:"p"},"db.table")," in this example)"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER exporter\nIDENTIFIED WITH SHA256_PASSWORD BY 'password-here'\nSETTINGS readonly = 1;\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT ON db.table TO exporter;\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Copy the table definition"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select create_table_query\nfrom system.tables\nwhere database = 'db' and table = 'table'\n")))),(0,i.kt)("h4",{id:"duplicate-the-table-structure-on-the-destination-service"},"Duplicate the table structure on the destination service"),(0,i.kt)("p",null,"On the destination create the database if it is not there already:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create the destination database:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE db\n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Using the CREATE TABLE statement from the source, create the destination."),(0,i.kt)("p",{parentName:"li"},"On the destination create the table using the output of the ",(0,i.kt)("inlineCode",{parentName:"p"},"select create_table_query...")," from the source:"),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Change the ENGINE to to ReplicatedMergeTree without any parameters when you run the CREATE statement.  ClickHouse Cloud always replicates tables and provides the correct parameters."))),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE db.table ...\n# highlight-next-line\nENGINE = ReplicatedMergeTree\nORDER BY ...\n")))),(0,i.kt)("h4",{id:"allow-remote-access-to-the-source-service"},"Allow remote access to the source service"),(0,i.kt)("p",null,"In order to pull data from the source to the destination the source service must allow connections.  Temporarily disable the IP Access List functionality on the source service."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you will continue to use the source ClickHouse Cloud service then export the existing IP Access list to a JSON file before switching to allow access from anywhere; this will allow you to import the access list after the data is migrated."))),(0,i.kt)("p",null,"Modify the allow list and allow access from ",(0,i.kt)("strong",{parentName:"p"},"Anywhere")," temporarily.  See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/manage/security/ip-access-list"},"IP Access List")," docs for details."),(0,i.kt)("h4",{id:"copy-the-data-from-source-to-destination"},"Copy the data from source to destination"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"remoteSecure")," function to pull the data from the source ClickHouse Cloud service\nConnect to the destination.  Run this command on the destination ClickHouse Cloud service:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO db.table SELECT * FROM\nremoteSecure('source-hostname', db, table, 'exporter', 'password-here')\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Verify the data in the destination service"))),(0,i.kt)("h4",{id:"re-establish-the-ip-access-list-on-the-source"},"Re-establish the IP Access List on the source"),(0,i.kt)("p",null,"  If you exported the access list earlier, then you can re-import it using ",(0,i.kt)("strong",{parentName:"p"},"Share"),", otherwise re-add your entries to the access list."),(0,i.kt)("h4",{id:"remove-the-read-only-exporter-user"},"Remove the read-only ",(0,i.kt)("inlineCode",{parentName:"h4"},"exporter")," user"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"DROP USER exporter\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Switch the service IP Access List to limit access")))}h.isMDXComponent=!0},99969:function(e,t,a){t.Z=a.p+"assets/images/self-managed-01-9a998ad5f1dd97d42d3c4ba153b492f3.png"},59353:function(e,t,a){t.Z=a.p+"assets/images/self-managed-02-20399b925e5eb4faa44779a3b5e018be.png"},34287:function(e,t,a){t.Z=a.p+"assets/images/self-managed-03-4d9cfa6836774254aadb80110369f5e2.png"},23157:function(e,t,a){t.Z=a.p+"assets/images/self-managed-04-3a64242b05af95c83973019c33c8ecd3.png"},53595:function(e,t,a){t.Z=a.p+"assets/images/self-managed-05-6f74631cc8b3421cf84d24477f9f1459.png"},11482:function(e,t,a){t.Z=a.p+"assets/images/self-managed-06-f80a14f6197a08fb0605488ae71c95cb.png"},68554:function(e,t,a){t.Z=a.p+"assets/images/ip-allow-list-add-current-ip-308aa8c2edde4c6d29569c209968ddbc.png"},62406:function(e,t,a){t.Z=a.p+"assets/images/ip-allow-list-check-list-a3ec1682582a2648eaa2c1727170f893.png"}}]);
"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[42256],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75467:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={sidebar_label:"Configuring ClickHouse Keeper",sidebar_position:10,keywords:["Keeper","ZooKeeper","clickhouse-keeper","replication"],description:"ClickHouse Keeper, or clickhouse-keeper, replaces ZooKeeper and provides replication and coordination."},s="Configuring ClickHouse Keeper (clickhouse-keeper)",p={unversionedId:"en/guides/sre/keeper/clickhouse-keeper",id:"en/guides/sre/keeper/clickhouse-keeper",title:"Configuring ClickHouse Keeper (clickhouse-keeper)",description:"ClickHouse Keeper, or clickhouse-keeper, replaces ZooKeeper and provides replication and coordination.",source:"@site/docs/en/guides/sre/keeper/clickhouse-keeper.md",sourceDirName:"en/guides/sre/keeper",slug:"/en/guides/sre/keeper/clickhouse-keeper",permalink:"/docs/en/guides/sre/keeper/clickhouse-keeper",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/guides/sre/keeper/clickhouse-keeper.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_label:"Configuring ClickHouse Keeper",sidebar_position:10,keywords:["Keeper","ZooKeeper","clickhouse-keeper","replication"],description:"ClickHouse Keeper, or clickhouse-keeper, replaces ZooKeeper and provides replication and coordination."},sidebar:"english",previous:{title:"ClickHouse Keeper",permalink:"/docs/en/guides/sre/clickhouse-keeper"},next:{title:"Creating unique ClickHouse Keeper entries",permalink:"/docs/en/guides/sre/keeper/clickhouse-keeper-uuid"}},c={},d=[{value:"1. Configure Nodes with Keeper settings",id:"1-configure-nodes-with-keeper-settings",level:2},{value:"2.  Configure a cluster in ClickHouse",id:"2--configure-a-cluster-in-clickhouse",level:2},{value:"3. Create and test distributed table",id:"3-create-and-test-distributed-table",level:2},{value:"Summary",id:"summary",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuring-clickhouse-keeper-clickhouse-keeper"},"Configuring ClickHouse Keeper (clickhouse-keeper)"),(0,o.kt)("p",null,"ClickHouse Keeper is a component included in ClickHouse to handle replication and coordinated operations across nodes and clusters.\nThis part of the system replaces the requirement of having a separate ZooKeeper installation and is compatible with ZooKeeper for ClickHouse operations."),(0,o.kt)("p",null,"This guide provides simple and minimal settings to configure ClicKHouse Keeper with an example on how to test distributed operations. This example is performed using 3 nodes on Linux."),(0,o.kt)("h2",{id:"1-configure-nodes-with-keeper-settings"},"1. Configure Nodes with Keeper settings"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install 3 ClickHouse instances on 3 hosts (chnode1, chnode2, chnode3). (View the ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/quick-start"},"Quick Start")," for details on installing ClickHouse.)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On each node, add the following entry to allow external communication through the network interface."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<listen_host>0.0.0.0</listen_host>\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the following ClickHouse Keeper configuration to all three servers updating the ",(0,o.kt)("inlineCode",{parentName:"p"},"<server_id>")," setting for each server; for ",(0,o.kt)("inlineCode",{parentName:"p"},"chnode1")," would be ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"chnode2")," would be ",(0,o.kt)("inlineCode",{parentName:"p"},"2"),", etc."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<keeper_server>\n    <tcp_port>9181</tcp_port>\n    <server_id>1</server_id>\n    <log_storage_path>/var/lib/clickhouse/coordination/log</log_storage_path>\n    <snapshot_storage_path>/var/lib/clickhouse/coordination/snapshots</snapshot_storage_path>\n\n    <coordination_settings>\n        <operation_timeout_ms>10000</operation_timeout_ms>\n        <session_timeout_ms>30000</session_timeout_ms>\n        <raft_logs_level>warning</raft_logs_level>\n    </coordination_settings>\n\n    <raft_configuration>\n        <server>\n            <id>1</id>\n            <hostname>chnode1.domain.com</hostname>\n            <port>9444</port>\n        </server>\n        <server>\n            <id>2</id>\n            <hostname>chnode2.domain.com</hostname>\n            <port>9444</port>\n        </server>\n        <server>\n            <id>3</id>\n            <hostname>chnode3.domain.com</hostname>\n            <port>9444</port>\n        </server>\n    </raft_configuration>\n</keeper_server>\n")),(0,o.kt)("p",{parentName:"li"},"These are the basic settings used above:"),(0,o.kt)("table",{parentName:"li"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"tcp_port"),(0,o.kt)("td",{parentName:"tr",align:null},"port to be used by clients of keeper"),(0,o.kt)("td",{parentName:"tr",align:null},"9181 default equivalent of 2181 as in zookeeper")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"server_id"),(0,o.kt)("td",{parentName:"tr",align:null},"identifier for each CLickHouse Keeper server used in raft configuration"),(0,o.kt)("td",{parentName:"tr",align:null},"1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"coordination_settings"),(0,o.kt)("td",{parentName:"tr",align:null},"section to parameters such as timeouts"),(0,o.kt)("td",{parentName:"tr",align:null},"timeouts: 10000, log level: trace")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"server"),(0,o.kt)("td",{parentName:"tr",align:null},"definition of server participating"),(0,o.kt)("td",{parentName:"tr",align:null},"list of each server definition")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"raft_configuration"),(0,o.kt)("td",{parentName:"tr",align:null},"settings for each server in the keeper cluster"),(0,o.kt)("td",{parentName:"tr",align:null},"server and settings for each")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"id"),(0,o.kt)("td",{parentName:"tr",align:null},"numeric id of the server for keeper services"),(0,o.kt)("td",{parentName:"tr",align:null},"1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"hostname"),(0,o.kt)("td",{parentName:"tr",align:null},"hostname, IP or FQDN of each server in the keeper cluster"),(0,o.kt)("td",{parentName:"tr",align:null},"chnode1.domain.com")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"port"),(0,o.kt)("td",{parentName:"tr",align:null},"port to listen on for interserver keeper connections"),(0,o.kt)("td",{parentName:"tr",align:null},"9444")))),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"  View the ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/operations/clickhouse-keeper"},"ClickHouse Keeper docs page")," for details on all the available parameters."))))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enable the Zookeeper component. It will use the ClickHouse Keeper engine:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"    <zookeeper>\n        <node>\n            <host>chnode1.domain.com</host>\n            <port>9181</port>\n        </node>\n        <node>\n            <host>chnode2.domain.com</host>\n            <port>9181</port>\n        </node>\n        <node>\n            <host>chnode3.domain.com</host>\n            <port>9181</port>\n        </node>\n    </zookeeper>\n")),(0,o.kt)("p",{parentName:"li"},"These are the basic settings used above:"),(0,o.kt)("table",{parentName:"li"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"node"),(0,o.kt)("td",{parentName:"tr",align:null},"list of nodes for ClickHouse Keeper connections"),(0,o.kt)("td",{parentName:"tr",align:null},"settings entry for each server")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"host"),(0,o.kt)("td",{parentName:"tr",align:null},"hostname, IP or FQDN of each ClickHouse keepr node"),(0,o.kt)("td",{parentName:"tr",align:null},"chnode1.domain.com")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"port"),(0,o.kt)("td",{parentName:"tr",align:null},"ClickHouse Keeper client port"),(0,o.kt)("td",{parentName:"tr",align:null},"9181"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Restart ClickHouse and verify that each Keeper instance is running. Execute the following command on each server. The ",(0,o.kt)("inlineCode",{parentName:"p"},"ruok")," command returns ",(0,o.kt)("inlineCode",{parentName:"p"},"imok")," if Keeper is running and healthy:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# echo ruok | nc localhost 9181; echo\nimok\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"system")," database has a table named ",(0,o.kt)("inlineCode",{parentName:"p"},"zookeeper")," that contains the details of your ClickHouse Keeper instances. Let's view the table:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM system.zookeeper\nWHERE path IN ('/', '/clickhouse')\n")),(0,o.kt)("p",{parentName:"li"},"The table looks like:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500value\u2500\u252c\u2500czxid\u2500\u252c\u2500mzxid\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500ctime\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500mtime\u2500\u252c\u2500version\u2500\u252c\u2500cversion\u2500\u252c\u2500aversion\u2500\u252c\u2500ephemeralOwner\u2500\u252c\u2500dataLength\u2500\u252c\u2500numChildren\u2500\u252c\u2500pzxid\u2500\u252c\u2500path\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 clickhouse \u2502       \u2502   124 \u2502   124 \u2502 2022-03-07 00:49:34 \u2502 2022-03-07 00:49:34 \u2502       0 \u2502        2 \u2502        0 \u2502              0 \u2502          0 \u2502           2 \u2502  5693 \u2502 /           \u2502\n\u2502 task_queue \u2502       \u2502   125 \u2502   125 \u2502 2022-03-07 00:49:34 \u2502 2022-03-07 00:49:34 \u2502       0 \u2502        1 \u2502        0 \u2502              0 \u2502          0 \u2502           1 \u2502   126 \u2502 /clickhouse \u2502\n\u2502 tables     \u2502       \u2502  5693 \u2502  5693 \u2502 2022-03-07 00:49:34 \u2502 2022-03-07 00:49:34 \u2502       0 \u2502        3 \u2502        0 \u2502              0 \u2502          0 \u2502           3 \u2502  6461 \u2502 /clickhouse \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))),(0,o.kt)("h2",{id:"2--configure-a-cluster-in-clickhouse"},"2.  Configure a cluster in ClickHouse"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Let's configure a simple cluster with 2 shards and only one replica on 2 of the nodes. The third node will be used to achieve a quorum for the requirement in ClickHouse Keeper. Update the configuration on ",(0,o.kt)("inlineCode",{parentName:"p"},"chnode1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"chnode2"),". The following cluster defines 1 shard on each node for a total of 2 shards with no replication. In this example, some of the data will be on node and some will be on the other node:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"    <cluster_2S_1R>\n        <shard>\n            <replica>\n                <host>chnode1.domain.com</host>\n                <port>9000</port>\n                <user>default</user>\n                <password>ClickHouse123!</password>\n            </replica>\n        </shard>\n        <shard>\n            <replica>\n                <host>chnode2.domain.com</host>\n                <port>9000</port>\n                <user>default</user>\n                <password>ClickHouse123!</password>\n            </replica>\n        </shard>\n    </cluster_2S_1R>\n")),(0,o.kt)("table",{parentName:"li"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"shard"),(0,o.kt)("td",{parentName:"tr",align:null},"list of replicas on the cluster definition"),(0,o.kt)("td",{parentName:"tr",align:null},"list of replicas for each shard")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"replica"),(0,o.kt)("td",{parentName:"tr",align:null},"list of settings for each replica"),(0,o.kt)("td",{parentName:"tr",align:null},"settings entries for each replica")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"host"),(0,o.kt)("td",{parentName:"tr",align:null},"hostname, IP or FQDN of server that will host a replica shard"),(0,o.kt)("td",{parentName:"tr",align:null},"chnode1.domain.com")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"port"),(0,o.kt)("td",{parentName:"tr",align:null},"port used to communicate using the native tcp protocol"),(0,o.kt)("td",{parentName:"tr",align:null},"9000")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"user"),(0,o.kt)("td",{parentName:"tr",align:null},"username that will be used to authenticate to the cluster instances"),(0,o.kt)("td",{parentName:"tr",align:null},"default")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"password"),(0,o.kt)("td",{parentName:"tr",align:null},"password for the user define to allow connections to cluster instances"),(0,o.kt)("td",{parentName:"tr",align:null},"ClickHouse123!")))))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Restart ClickHouse and verify the cluster was created:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"SHOW clusters;\n")),(0,o.kt)("p",{parentName:"li"},"You should see your cluster:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500cluster\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 cluster_2S_1R \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))),(0,o.kt)("h2",{id:"3-create-and-test-distributed-table"},"3. Create and test distributed table"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a new database on the new cluster using ClickHouse client on ",(0,o.kt)("inlineCode",{parentName:"p"},"chnode1"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"ON CLUSTER")," clause automatically creates the database on both nodes."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE db1 ON CLUSTER 'cluster_2S_1R';\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a new table on the ",(0,o.kt)("inlineCode",{parentName:"p"},"db1")," database. Once again, ",(0,o.kt)("inlineCode",{parentName:"p"},"ON CLUSTER")," creates the table on both nodes."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE db1.table1 on cluster 'cluster_2S_1R'\n(\n    `id` UInt64,\n    `column1` String\n)\nENGINE = MergeTree\nORDER BY column1\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("inlineCode",{parentName:"p"},"chnode1")," node, add a couple of rows:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO db1.table1\n    (id, column1)\nVALUES\n    (1, 'abc'),\n    (2, 'def')\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add a couple of rows on the ",(0,o.kt)("inlineCode",{parentName:"p"},"chnode2")," node:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO db1.table1\n    (id, column1)\nVALUES\n    (3, 'ghi'),\n    (4, 'jkl')\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Notice that running a ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT")," statement on each node only shows the data on that node. For example, on ",(0,o.kt)("inlineCode",{parentName:"p"},"chnode1"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM db1.table1\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-response"},"Query id: 7ef1edbc-df25-462b-a9d4-3fe6f9cb0b6d\n\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u2510\n\u2502  1 \u2502 abc     \u2502\n\u2502  2 \u2502 def     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n2 rows in set. Elapsed: 0.006 sec.\n")),(0,o.kt)("p",{parentName:"li"},"On ",(0,o.kt)("inlineCode",{parentName:"p"},"chnode2"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"SELECT *\nFROM db1.table1\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-response"},"Query id: c43763cc-c69c-4bcc-afbe-50e764adfcbf\n\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u2510\n\u2502  3 \u2502 ghi     \u2502\n\u2502  4 \u2502 jkl     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Distributed")," table to represent the data on the two shards. Tables with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Distributed")," table engine do not store any data of their own, but allow distributed query processing on multiple servers. Reads hit all the shards, and writes can be distributed across the shards. Run the following query on ",(0,o.kt)("inlineCode",{parentName:"p"},"chnode1"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE db1.dist_table (\n    id UInt64,\n    column1 String\n)\nENGINE = Distributed(cluster_2S_1R,db1,table1)\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Notice querying ",(0,o.kt)("inlineCode",{parentName:"p"},"dist_table")," returns all four rows of data from the two shards:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM db1.dist_table\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-response"},"Query id: 495bffa0-f849-4a0c-aeea-d7115a54747a\n\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u2510\n\u2502  1 \u2502 abc     \u2502\n\u2502  2 \u2502 def     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u2510\n\u2502  3 \u2502 ghi     \u2502\n\u2502  4 \u2502 jkl     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n4 rows in set. Elapsed: 0.018 sec.\n")))),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"This guide demostrated how to setup a cluster using ClickHouse Keeper. With ClickHouse Keeper, you can configure clusters and define distributed tables that can be replicated across shards."))}m.isMDXComponent=!0}}]);
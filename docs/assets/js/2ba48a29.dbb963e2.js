"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[89536],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(k,i(i({ref:t},c),{},{components:n})):o.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12818:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],s={sidebar_position:66,sidebar_label:"ClickHouse Keeper"},l="ClickHouse Keeper",p={unversionedId:"en/operations/clickhouse-keeper",id:"en/operations/clickhouse-keeper",title:"ClickHouse Keeper",description:"clickHouse-keeper}",source:"@site/docs/en/operations/clickhouse-keeper.md",sourceDirName:"en/operations",slug:"/en/operations/clickhouse-keeper",permalink:"/docs/en/operations/clickhouse-keeper",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/clickhouse-keeper.md",tags:[],version:"current",sidebarPosition:66,frontMatter:{sidebar_position:66,sidebar_label:"ClickHouse Keeper"},sidebar:"english",previous:{title:"Caches",permalink:"/docs/en/operations/caches"},next:{title:"External Disks for Storing Data",permalink:"/docs/en/operations/storing-data"}},c={},u=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Configuration",id:"configuration",level:2},{value:"How to run",id:"how-to-run",level:2},{value:"Four Letter Word Commands",id:"four-letter-word-commands",level:2},{value:"experimental Migration from ZooKeeper",id:"migration-from-zookeeper",level:2},{value:"Recovering after losing quorum",id:"recovering-after-losing-quorum",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"clickHouse-keeper"},"ClickHouse Keeper"),(0,r.kt)("p",null,"ClickHouse Keeper provides the coordination system for data ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/replication"},"replication")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/distributed-ddl"},"distributed DDL")," queries execution. ClickHouse Keeper is compatible with ZooKeeper."),(0,r.kt)("h2",{id:"implementation-details"},"Implementation details"),(0,r.kt)("p",null,"ZooKeeper is one of the first well-known open-source coordination systems. It's implemented in Java, and has quite a simple and powerful data model. ZooKeeper's coordination algorithm, ZooKeeper Atomic Broadcast (ZAB), doesn't provide linearizability guarantees for reads, because each ZooKeeper node serves reads locally. Unlike ZooKeeper ClickHouse Keeper is written in C++ and uses the ",(0,r.kt)("a",{parentName:"p",href:"https://raft.github.io/"},"RAFT algorithm")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eBay/NuRaft"},"implementation"),". This algorithm allows linearizability for reads and writes, and has several open-source implementations in different languages."),(0,r.kt)("p",null,"By default, ClickHouse Keeper provides the same guarantees as ZooKeeper (linearizable writes, non-linearizable reads). It has a compatible client-server protocol, so any standard ZooKeeper client can be used to interact with ClickHouse Keeper. Snapshots and logs have an incompatible format with ZooKeeper, but the ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-keeper-converter")," tool enables the conversion of ZooKeeper data to ClickHouse Keeper snapshots. The interserver protocol in ClickHouse Keeper is also incompatible with ZooKeeper so a mixed ZooKeeper / ClickHouse Keeper cluster is impossible."),(0,r.kt)("p",null,"ClickHouse Keeper supports Access Control Lists (ACLs) the same way as ",(0,r.kt)("a",{parentName:"p",href:"https://zookeeper.apache.org/doc/r3.1.2/zookeeperProgrammers.html#sc_ZooKeeperAccessControl"},"ZooKeeper")," does. ClickHouse Keeper supports the same set of permissions and has the identical built-in schemes: ",(0,r.kt)("inlineCode",{parentName:"p"},"world"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"auth")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"digest"),". The digest authentication scheme uses the pair ",(0,r.kt)("inlineCode",{parentName:"p"},"username:password"),", the password is encoded in Base64."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"External integrations are not supported."))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"ClickHouse Keeper can be used as a standalone replacement for ZooKeeper or as an internal part of the ClickHouse server. In both cases the configuration is almost the same ",(0,r.kt)("inlineCode",{parentName:"p"},".xml")," file. The main ClickHouse Keeper configuration tag is ",(0,r.kt)("inlineCode",{parentName:"p"},"<keeper_server>"),". Keeper configuration has the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tcp_port")," \u2014 Port for a client to connect (default for ZooKeeper is ",(0,r.kt)("inlineCode",{parentName:"li"},"2181"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tcp_port_secure")," \u2014 Secure port for an SSL connection between client and keeper-server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"server_id")," \u2014 Unique server id, each participant of the ClickHouse Keeper cluster must have a unique number (1, 2, 3, and so on)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"log_storage_path")," \u2014 Path to coordination logs, just like ZooKeeper it is best to store logs on non-busy nodes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"snapshot_storage_path")," \u2014 Path to coordination snapshots.")),(0,r.kt)("p",null,"Other common parameters are inherited from the ClickHouse server config (",(0,r.kt)("inlineCode",{parentName:"p"},"listen_host"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"logger"),", and so on)."),(0,r.kt)("p",null,"Internal coordination settings are located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<keeper_server>.<coordination_settings>")," section:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"operation_timeout_ms")," \u2014 Timeout for a single client operation (ms) (default: 10000)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"min_session_timeout_ms")," \u2014 Min timeout for client session (ms) (default: 10000)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"session_timeout_ms")," \u2014 Max timeout for client session (ms) (default: 100000)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dead_session_check_period_ms")," \u2014 How often ClickHouse Keeper checks for dead sessions and removes them (ms) (default: 500)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"heart_beat_interval_ms")," \u2014 How often a ClickHouse Keeper leader will send heartbeats to followers (ms) (default: 500)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"election_timeout_lower_bound_ms")," \u2014 If the follower does not receive a heartbeat from the leader in this interval, then it can initiate leader election (default: 1000)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"election_timeout_upper_bound_ms")," \u2014 If the follower does not receive a heartbeat from the leader in this interval, then it must initiate leader election (default: 2000)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rotate_log_storage_interval")," \u2014 How many log records to store in a single file (default: 100000)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reserved_log_items")," \u2014 How many coordination log records to store before compaction (default: 100000)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"snapshot_distance")," \u2014 How often ClickHouse Keeper will create new snapshots (in the number of records in logs) (default: 100000)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"snapshots_to_keep")," \u2014 How many snapshots to keep (default: 3)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stale_log_gap")," \u2014 Threshold when leader considers follower as stale and sends the snapshot to it instead of logs (default: 10000)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fresh_log_gap")," \u2014 When node became fresh (default: 200)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_requests_batch_size")," - Max size of batch in requests count before it will be sent to RAFT (default: 100)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"force_sync")," \u2014 Call ",(0,r.kt)("inlineCode",{parentName:"li"},"fsync")," on each write to coordination log (default: true)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"quorum_reads")," \u2014 Execute read requests as writes through whole RAFT consensus with similar speed (default: false)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"raft_logs_level")," \u2014 Text logging level about coordination (trace, debug, and so on) (default: system default)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"auto_forwarding")," \u2014 Allow to forward write requests from followers to the leader (default: true)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shutdown_timeout")," \u2014 Wait to finish internal connections and shutdown (ms) (default: 5000)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"startup_timeout")," \u2014 If the server doesn't connect to other quorum participants in the specified timeout it will terminate (ms) (default: 30000)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"four_letter_word_white_list"),' \u2014 White list of 4lw commands (default: "conf,cons,crst,envi,ruok,srst,srvr,stat,wchc,wchs,dirs,mntr,isro").')),(0,r.kt)("p",null,"Quorum configuration is located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<keeper_server>.<raft_configuration>")," section and contain servers description."),(0,r.kt)("p",null,"The only parameter for the whole quorum is ",(0,r.kt)("inlineCode",{parentName:"p"},"secure"),", which enables encrypted connection for communication between quorum participants. The parameter can be set ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if SSL connection is required for internal communication between nodes, or left unspecified otherwise."),(0,r.kt)("p",null,"The main parameters for each ",(0,r.kt)("inlineCode",{parentName:"p"},"<server>")," are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," \u2014 Server identifier in a quorum."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hostname")," \u2014 Hostname where this server is placed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"port")," \u2014 Port where this server listens for connections.")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In the case of a change in the topology of your ClickHouse Keeper cluster (e.g., replacing a server), please make sure to keep the mapping of ",(0,r.kt)("inlineCode",{parentName:"p"},"server_id")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"hostname")," consistent and avoid shuffling or reusing an existing ",(0,r.kt)("inlineCode",{parentName:"p"},"server_id")," for different servers (e.g., it can happen if your rely on automation scripts to deploy ClickHouse Keeper)"))),(0,r.kt)("p",null,"Examples of configuration for quorum with three nodes can be found in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/tree/master/tests/integration"},"integration tests")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"test_keeper_")," prefix. Example configuration for server #1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<keeper_server>\n    <tcp_port>2181</tcp_port>\n    <server_id>1</server_id>\n    <log_storage_path>/var/lib/clickhouse/coordination/log</log_storage_path>\n    <snapshot_storage_path>/var/lib/clickhouse/coordination/snapshots</snapshot_storage_path>\n\n    <coordination_settings>\n        <operation_timeout_ms>10000</operation_timeout_ms>\n        <session_timeout_ms>30000</session_timeout_ms>\n        <raft_logs_level>trace</raft_logs_level>\n    </coordination_settings>\n\n    <raft_configuration>\n        <server>\n            <id>1</id>\n            <hostname>zoo1</hostname>\n            <port>9444</port>\n        </server>\n        <server>\n            <id>2</id>\n            <hostname>zoo2</hostname>\n            <port>9444</port>\n        </server>\n        <server>\n            <id>3</id>\n            <hostname>zoo3</hostname>\n            <port>9444</port>\n        </server>\n    </raft_configuration>\n</keeper_server>\n")),(0,r.kt)("h2",{id:"how-to-run"},"How to run"),(0,r.kt)("p",null,"ClickHouse Keeper is bundled into the ClickHouse server package, just add configuration of ",(0,r.kt)("inlineCode",{parentName:"p"},"<keeper_server>")," and start ClickHouse server as always. If you want to run standalone ClickHouse Keeper you can start it in a similar way with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"clickhouse-keeper --config /etc/your_path_to_config/config.xml\n")),(0,r.kt)("p",null,"If you don't have the symlink (",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-keeper"),") you can create it or specify ",(0,r.kt)("inlineCode",{parentName:"p"},"keeper")," as an argument to ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"clickhouse keeper --config /etc/your_path_to_config/config.xml\n")),(0,r.kt)("h2",{id:"four-letter-word-commands"},"Four Letter Word Commands"),(0,r.kt)("p",null,"ClickHouse Keeper also provides 4lw commands which are almost the same with Zookeeper. Each command is composed of four letters such as ",(0,r.kt)("inlineCode",{parentName:"p"},"mntr"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"stat")," etc. There are some more interesting commands: ",(0,r.kt)("inlineCode",{parentName:"p"},"stat")," gives some general information about the server and connected clients, while ",(0,r.kt)("inlineCode",{parentName:"p"},"srvr")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cons")," give extended details on server and connections respectively."),(0,r.kt)("p",null,"The 4lw commands has a white list configuration ",(0,r.kt)("inlineCode",{parentName:"p"},"four_letter_word_white_list"),' which has default value "conf,cons,crst,envi,ruok,srst,srvr,stat,wchc,wchs,dirs,mntr,isro".'),(0,r.kt)("p",null,"You can issue the commands to ClickHouse Keeper via telnet or nc, at the client port."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"echo mntr | nc localhost 9181\n")),(0,r.kt)("p",null,"Bellow is the detailed 4lw commands:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ruok"),': Tests if server is running in a non-error state. The server will respond with imok if it is running. Otherwise it will not respond at all. A response of "imok" does not necessarily indicate that the server has joined the quorum, just that the server process is active and bound to the specified client port. Use "stat" for details on state wrt quorum and client connection information.')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"imok\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mntr"),": Outputs a list of variables that could be used for monitoring the health of the cluster.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"zk_version      v21.11.1.1-prestable-7a4a0b0edef0ad6e0aa662cd3b90c3f4acf796e7\nzk_avg_latency  0\nzk_max_latency  0\nzk_min_latency  0\nzk_packets_received     68\nzk_packets_sent 68\nzk_num_alive_connections        1\nzk_outstanding_requests 0\nzk_server_state leader\nzk_znode_count  4\nzk_watch_count  1\nzk_ephemerals_count     0\nzk_approximate_data_size        723\nzk_open_file_descriptor_count   310\nzk_max_file_descriptor_count    10240\nzk_followers    0\nzk_synced_followers     0\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"srvr"),": Lists full details for the server.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ClickHouse Keeper version: v21.11.1.1-prestable-7a4a0b0edef0ad6e0aa662cd3b90c3f4acf796e7\nLatency min/avg/max: 0/0/0\nReceived: 2\nSent : 2\nConnections: 1\nOutstanding: 0\nZxid: 34\nMode: leader\nNode count: 4\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stat"),": Lists brief details for the server and connected clients.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ClickHouse Keeper version: v21.11.1.1-prestable-7a4a0b0edef0ad6e0aa662cd3b90c3f4acf796e7\nClients:\n 192.168.1.1:52852(recved=0,sent=0)\n 192.168.1.1:52042(recved=24,sent=48)\nLatency min/avg/max: 0/0/0\nReceived: 4\nSent : 4\nConnections: 1\nOutstanding: 0\nZxid: 36\nMode: leader\nNode count: 4\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"srst"),": Reset server statistics. The command will affect the result of ",(0,r.kt)("inlineCode",{parentName:"li"},"srvr"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"mntr")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"stat"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Server stats reset.\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"conf"),": Print details about serving configuration.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"server_id=1\ntcp_port=2181\nfour_letter_word_white_list=*\nlog_storage_path=./coordination/logs\nsnapshot_storage_path=./coordination/snapshots\nmax_requests_batch_size=100\nsession_timeout_ms=30000\noperation_timeout_ms=10000\ndead_session_check_period_ms=500\nheart_beat_interval_ms=500\nelection_timeout_lower_bound_ms=1000\nelection_timeout_upper_bound_ms=2000\nreserved_log_items=1000000000000000\nsnapshot_distance=10000\nauto_forwarding=true\nshutdown_timeout=5000\nstartup_timeout=240000\nraft_logs_level=information\nsnapshots_to_keep=3\nrotate_log_storage_interval=100000\nstale_log_gap=10000\nfresh_log_gap=200\nmax_requests_batch_size=100\nquorum_reads=false\nforce_sync=false\ncompress_logs=true\ncompress_snapshots_with_zstd_format=true\nconfiguration_change_tries_count=20\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cons"),": List full connection/session details for all clients connected to this server. Includes information on numbers of packets received/sent, session id, operation latencies, last operation performed, etc...")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," 192.168.1.1:52163(recved=0,sent=0,sid=0xffffffffffffffff,lop=NA,est=1636454787393,to=30000,lzxid=0xffffffffffffffff,lresp=0,llat=0,minlat=0,avglat=0,maxlat=0)\n 192.168.1.1:52042(recved=9,sent=18,sid=0x0000000000000001,lop=List,est=1636454739887,to=30000,lcxid=0x0000000000000005,lzxid=0x0000000000000005,lresp=1636454739892,llat=0,minlat=0,avglat=0,maxlat=0)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"crst"),": Reset connection/session statistics for all connections.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Connection stats reset.\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"envi"),": Print details about serving environment")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Environment:\nclickhouse.keeper.version=v21.11.1.1-prestable-7a4a0b0edef0ad6e0aa662cd3b90c3f4acf796e7\nhost.name=ZBMAC-C02D4054M.local\nos.name=Darwin\nos.arch=x86_64\nos.version=19.6.0\ncpu.count=12\nuser.name=root\nuser.home=/Users/JackyWoo/\nuser.dir=/Users/JackyWoo/project/jd/clickhouse/cmake-build-debug/programs/\nuser.tmp=/var/folders/b4/smbq5mfj7578f2jzwn602tt40000gn/T/\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dirs"),": Shows the total size of snapshot and log files in bytes")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"snapshot_dir_size: 0\nlog_dir_size: 3875\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isro"),': Tests if server is running in read-only mode. The server will respond with "ro" if in read-only mode or "rw" if not in read-only mode.')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rw\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wchs"),": Lists brief information on watches for the server.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1 connections watching 1 paths\nTotal watches:1\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wchc"),": Lists detailed information on watches for the server, by session. This outputs a list of sessions (connections) with associated watches (paths). Note, depending on the number of watches this operation may be expensive (ie impact server performance), use it carefully.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"0x0000000000000001\n    /clickhouse/task_queue/ddl\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wchp"),": Lists detailed information on watches for the server, by path. This outputs a list of paths (znodes) with associated sessions. Note, depending on the number of watches this operation may be expensive (i. e. impact server performance), use it carefully.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/clickhouse/task_queue/ddl\n    0x0000000000000001\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dump"),": Lists the outstanding sessions and ephemeral nodes. This only works on the leader.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Sessions dump (2):\n0x0000000000000001\n0x0000000000000002\nSessions with Ephemerals (1):\n0x0000000000000001\n /clickhouse/task_queue/ddl\n")),(0,r.kt)("h2",{id:"migration-from-zookeeper"},"[experimental]"," Migration from ZooKeeper"),(0,r.kt)("p",null,"Seamlessly migration from ZooKeeper to ClickHouse Keeper is impossible you have to stop your ZooKeeper cluster, convert data and start ClickHouse Keeper. ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-keeper-converter")," tool allows converting ZooKeeper logs and snapshots to ClickHouse Keeper snapshot. It works only with ZooKeeper > 3.4. Steps for migration:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Stop all ZooKeeper nodes.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Optional, but recommended: find ZooKeeper leader node, start and stop it again. It will force ZooKeeper to create a consistent snapshot.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-keeper-converter")," on a leader, for example:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"clickhouse-keeper-converter --zookeeper-logs-dir /var/lib/zookeeper/version-2 --zookeeper-snapshots-dir /var/lib/zookeeper/version-2 --output-dir /path/to/clickhouse/keeper/snapshots\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Copy snapshot to ClickHouse server nodes with a configured ",(0,r.kt)("inlineCode",{parentName:"li"},"keeper")," or start ClickHouse Keeper instead of ZooKeeper. The snapshot must persist on all nodes, otherwise, empty nodes can be faster and one of them can become a leader.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/clickhouse-keeper/"},"Original article")," "),(0,r.kt)("h2",{id:"recovering-after-losing-quorum"},"Recovering after losing quorum"),(0,r.kt)("p",null,"Because Clickhouse Keeper uses Raft it can tolerate certain amount of node crashes depending on the cluster size. \\\nE.g. for a 3-node cluster, it will continue working correctly if only 1 node crashes."),(0,r.kt)("p",null,"Cluster configuration can be dynamically configured but there are some limitations. Reconfiguration relies on Raft also\nso to add/remove a node from the cluster you need to have a quorum. If you lose too many nodes in your cluster at the same time without any chance\nof starting them again, Raft will stop working and not allow you to reconfigure your cluster using the convenvtional way."),(0,r.kt)("p",null,"Nevertheless, Clickhouse Keeper has a recovery mode which allows you to forcfully reconfigure your cluster with only 1 node.\nThis should be done only as your last resort if you cannot start your nodes again, or start a new instance on the same endpoint."),(0,r.kt)("p",null,"Important things to note before continuing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make sure that the failed nodes cannot connect to the cluster again."),(0,r.kt)("li",{parentName:"ul"},"Do not start any of the new nodes until it's specified in the steps.")),(0,r.kt)("p",null,"After making sure that the above things are true, you need to do following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Pick a single Keeper node to be your new leader. Be aware that the data of that node will be used for the entire cluster so we recommend to use a node with the most up to date state."),(0,r.kt)("li",{parentName:"ol"},"Before doing anything else, make a backup of the ",(0,r.kt)("inlineCode",{parentName:"li"},"log_storage_path")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"snapshot_storage_path")," folders of the picked node."),(0,r.kt)("li",{parentName:"ol"},"Reconfigure the cluster on all of the nodes you want to use."),(0,r.kt)("li",{parentName:"ol"},"Send the four letter command ",(0,r.kt)("inlineCode",{parentName:"li"},"rcvr")," to the node you picked which will move the node to the recovery mode OR stop Keeper instance on the picked node and start it again with the ",(0,r.kt)("inlineCode",{parentName:"li"},"--force-recovery")," argument."),(0,r.kt)("li",{parentName:"ol"},"One by one, start Keeper instances on the new nodes making sure that ",(0,r.kt)("inlineCode",{parentName:"li"},"mntr")," returns ",(0,r.kt)("inlineCode",{parentName:"li"},"follower")," for the ",(0,r.kt)("inlineCode",{parentName:"li"},"zk_server_state")," before starting the next one."),(0,r.kt)("li",{parentName:"ol"},"While in the recovery mode, the leader node will return error message for ",(0,r.kt)("inlineCode",{parentName:"li"},"mntr")," command until it achieves quorum with the new nodes and refuse any requests from the client and the followers."),(0,r.kt)("li",{parentName:"ol"},"After quorum is achieved, the leader node will return to the normal mode of operation, accepting all the requests using Raft - verify with ",(0,r.kt)("inlineCode",{parentName:"li"},"mntr")," which should return ",(0,r.kt)("inlineCode",{parentName:"li"},"leader")," for the ",(0,r.kt)("inlineCode",{parentName:"li"},"zk_server_state"),".")))}m.isMDXComponent=!0}}]);
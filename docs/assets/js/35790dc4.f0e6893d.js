"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[94778],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(t),u=i,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||r;return t?a.createElement(h,o(o({ref:n},p),{},{components:t})):a.createElement(h,o({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},94881:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),o=["components"],s={slug:"/en/operations/storing-data",sidebar_position:68,sidebar_label:"External Disks for Storing Data"},l="External Disks for Storing Data",d={unversionedId:"en/operations/storing-data",id:"en/operations/storing-data",title:"External Disks for Storing Data",description:"Data, processed in ClickHouse, is usually stored in the local file system \u2014 on the same machine with the ClickHouse server. That requires large-capacity disks, which can be expensive enough. To avoid that you can store the data remotely \u2014 on Amazon S3 disks or in the Hadoop Distributed File System (HDFS).",source:"@site/docs/en/operations/storing-data.md",sourceDirName:"en/operations",slug:"/en/operations/storing-data",permalink:"/docs/en/operations/storing-data",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/storing-data.md",tags:[],version:"current",sidebarPosition:68,frontMatter:{slug:"/en/operations/storing-data",sidebar_position:68,sidebar_label:"External Disks for Storing Data"},sidebar:"english",previous:{title:"ClickHouse Keeper",permalink:"/docs/en/operations/clickhouse-keeper"},next:{title:"Named collections",permalink:"/docs/en/operations/named-collections"}},p={},c=[{value:"Configuring HDFS",id:"configuring-hdfs",level:2},{value:"Using Virtual File System for Data Encryption",id:"encrypted-virtual-file-system",level:2},{value:"Storing Data on Web Server",id:"storing-data-on-webserver",level:2},{value:"Zero-copy Replication (not ready for production)",id:"zero-copy",level:2}],m={toc:c};function u(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"external-disks-for-storing-data"},"External Disks for Storing Data"),(0,r.kt)("p",null,"Data, processed in ClickHouse, is usually stored in the local file system \u2014 on the same machine with the ClickHouse server. That requires large-capacity disks, which can be expensive enough. To avoid that you can store the data remotely \u2014 on ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"Amazon S3")," disks or in the Hadoop Distributed File System (",(0,r.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html"},"HDFS"),")."),(0,r.kt)("p",null,"To work with data stored on ",(0,r.kt)("inlineCode",{parentName:"p"},"Amazon S3")," disks use ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/integrations/s3"},"S3")," table engine, and to work with data in the Hadoop Distributed File System \u2014 ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/integrations/hdfs"},"HDFS")," table engine."),(0,r.kt)("p",null,"To load data from a web server with static files use a disk with type ",(0,r.kt)("a",{parentName:"p",href:"#storing-data-on-webserver"},"web"),"."),(0,r.kt)("h2",{id:"configuring-hdfs"},"Configuring HDFS"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/log-family/log"},"Log")," family table engines can store data to HDFS using a disk with type ",(0,r.kt)("inlineCode",{parentName:"p"},"HDFS"),"."),(0,r.kt)("p",null,"Configuration markup:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <storage_configuration>\n        <disks>\n            <hdfs>\n                <type>hdfs</type>\n                <endpoint>hdfs://hdfs1:9000/clickhouse/</endpoint>\n            </hdfs>\n        </disks>\n        <policies>\n            <hdfs>\n                <volumes>\n                    <main>\n                        <disk>hdfs</disk>\n                    </main>\n                </volumes>\n            </hdfs>\n        </policies>\n    </storage_configuration>\n\n    <merge_tree>\n        <min_bytes_for_wide_part>0</min_bytes_for_wide_part>\n    </merge_tree>\n</clickhouse>\n")),(0,r.kt)("p",null,"Required parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"endpoint")," \u2014 HDFS endpoint URL in ",(0,r.kt)("inlineCode",{parentName:"li"},"path")," format. Endpoint URL should contain a root path to store data.")),(0,r.kt)("p",null,"Optional parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"min_bytes_for_seek")," \u2014 The minimal number of bytes to use seek operation instead of sequential read. Default value: ",(0,r.kt)("inlineCode",{parentName:"li"},"1 Mb"),".")),(0,r.kt)("h2",{id:"encrypted-virtual-file-system"},"Using Virtual File System for Data Encryption"),(0,r.kt)("p",null,"You can encrypt the data stored on ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-s3"},"S3"),", or ",(0,r.kt)("a",{parentName:"p",href:"#configuring-hdfs"},"HDFS")," external disks, or on a local disk. To turn on the encryption mode, in the configuration file you must define a disk with the type ",(0,r.kt)("inlineCode",{parentName:"p"},"encrypted")," and choose a disk on which the data will be saved. An ",(0,r.kt)("inlineCode",{parentName:"p"},"encrypted")," disk ciphers all written files on the fly, and when you read files from an ",(0,r.kt)("inlineCode",{parentName:"p"},"encrypted")," disk it deciphers them automatically. So you can work with an ",(0,r.kt)("inlineCode",{parentName:"p"},"encrypted")," disk like with a normal one."),(0,r.kt)("p",null,"Example of disk configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<disks>\n  <disk1>\n    <type>local</type>\n    <path>/path1/</path>\n  </disk1>\n  <disk2>\n    <type>encrypted</type>\n    <disk>disk1</disk>\n    <path>path2/</path>\n    <key>_16_ascii_chars_</key>\n  </disk2>\n</disks>\n")),(0,r.kt)("p",null,"For example, when ClickHouse writes data from some table to a file ",(0,r.kt)("inlineCode",{parentName:"p"},"store/all_1_1_0/data.bin")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"disk1"),", then in fact this file will be written to the physical disk along the path ",(0,r.kt)("inlineCode",{parentName:"p"},"/path1/store/all_1_1_0/data.bin"),"."),(0,r.kt)("p",null,"When writing the same file to ",(0,r.kt)("inlineCode",{parentName:"p"},"disk2"),", it will actually be written to the physical disk at the path ",(0,r.kt)("inlineCode",{parentName:"p"},"/path1/path2/store/all_1_1_0/data.bin")," in encrypted mode."),(0,r.kt)("p",null,"Required parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"encrypted"),". Otherwise the encrypted disk is not created."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"disk")," \u2014 Type of disk for data storage."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key")," \u2014 The key for encryption and decryption. Type: ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Uint64"),". You can use ",(0,r.kt)("inlineCode",{parentName:"li"},"key_hex")," parameter to encrypt in hexadecimal form.\nYou can specify multiple keys using the ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," attribute (see example above).")),(0,r.kt)("p",null,"Optional parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path")," \u2014 Path to the location on the disk where the data will be saved. If not specified, the data will be saved in the root directory."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"current_key_id")," \u2014 The key used for encryption. All the specified keys can be used for decryption, and you can always switch to another key while maintaining access to previously encrypted data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"algorithm")," \u2014 ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/create/table#create-query-encryption-codecs"},"Algorithm")," for encryption. Possible values: ",(0,r.kt)("inlineCode",{parentName:"li"},"AES_128_CTR"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"AES_192_CTR")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"AES_256_CTR"),". Default value: ",(0,r.kt)("inlineCode",{parentName:"li"},"AES_128_CTR"),". The key length depends on the algorithm: ",(0,r.kt)("inlineCode",{parentName:"li"},"AES_128_CTR")," \u2014 16 bytes, ",(0,r.kt)("inlineCode",{parentName:"li"},"AES_192_CTR")," \u2014 24 bytes, ",(0,r.kt)("inlineCode",{parentName:"li"},"AES_256_CTR")," \u2014 32 bytes.")),(0,r.kt)("p",null,"Example of disk configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<clickhouse>\n    <storage_configuration>\n        <disks>\n            <disk_s3>\n                <type>s3</type>\n                <endpoint>...\n            </disk_s3>\n            <disk_s3_encrypted>\n                <type>encrypted</type>\n                <disk>disk_s3</disk>\n                <algorithm>AES_128_CTR</algorithm>\n                <key_hex id="0">00112233445566778899aabbccddeeff</key_hex>\n                <key_hex id="1">ffeeddccbbaa99887766554433221100</key_hex>\n                <current_key_id>1</current_key_id>\n            </disk_s3_encrypted>\n        </disks>\n    </storage_configuration>\n</clickhouse>\n')),(0,r.kt)("h2",{id:"storing-data-on-webserver"},"Storing Data on Web Server"),(0,r.kt)("p",null,"There is a tool ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-static-files-uploader"),", which prepares a data directory for a given table (",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT data_paths FROM system.tables WHERE name = 'table_name'"),"). For each table you need, you get a directory of files. These files can be uploaded to, for example, a web server with static files. After this preparation, you can load this table into any ClickHouse server via ",(0,r.kt)("inlineCode",{parentName:"p"},"DiskWeb"),"."),(0,r.kt)("p",null,"This is a read-only disk. Its data is only read and never modified. A new table is loaded to this disk via ",(0,r.kt)("inlineCode",{parentName:"p"},"ATTACH TABLE")," query (see example below). Local disk is not actually used, each ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," query will result in a ",(0,r.kt)("inlineCode",{parentName:"p"},"http")," request to fetch required data. All modification of the table data will result in an exception, i.e. the following types of queries are not allowed: ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/table"},"CREATE TABLE"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/"},"ALTER TABLE"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/rename#misc_operations-rename_table"},"RENAME TABLE"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/detach"},"DETACH TABLE")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/truncate"},"TRUNCATE TABLE"),"."),(0,r.kt)("p",null,"Web server storage is supported only for the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/log-family/log"},"Log")," engine families. To access the data stored on a ",(0,r.kt)("inlineCode",{parentName:"p"},"web")," disk, use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree#terms"},"storage_policy")," setting when executing the query. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"ATTACH TABLE table_web UUID '{}' (id Int32) ENGINE = MergeTree() ORDER BY id SETTINGS storage_policy = 'web'"),"."),(0,r.kt)("p",null,"A ready test case. You need to add this configuration to config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <storage_configuration>\n        <disks>\n            <web>\n                <type>web</type>\n                <endpoint>https://clickhouse-datasets.s3.yandex.net/disk-with-static-files-tests/test-hits/</endpoint>\n            </web>\n        </disks>\n        <policies>\n            <web>\n                <volumes>\n                    <main>\n                        <disk>web</disk>\n                    </main>\n                </volumes>\n            </web>\n        </policies>\n    </storage_configuration>\n</clickhouse>\n")),(0,r.kt)("p",null,"And then execute this query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ATTACH TABLE test_hits UUID '1ae36516-d62d-4218-9ae3-6516d62da218'\n(\n    WatchID UInt64,\n    JavaEnable UInt8,\n    Title String,\n    GoodEvent Int16,\n    EventTime DateTime,\n    EventDate Date,\n    CounterID UInt32,\n    ClientIP UInt32,\n    ClientIP6 FixedString(16),\n    RegionID UInt32,\n    UserID UInt64,\n    CounterClass Int8,\n    OS UInt8,\n    UserAgent UInt8,\n    URL String,\n    Referer String,\n    URLDomain String,\n    RefererDomain String,\n    Refresh UInt8,\n    IsRobot UInt8,\n    RefererCategories Array(UInt16),\n    URLCategories Array(UInt16),\n    URLRegions Array(UInt32),\n    RefererRegions Array(UInt32),\n    ResolutionWidth UInt16,\n    ResolutionHeight UInt16,\n    ResolutionDepth UInt8,\n    FlashMajor UInt8,\n    FlashMinor UInt8,\n    FlashMinor2 String,\n    NetMajor UInt8,\n    NetMinor UInt8,\n    UserAgentMajor UInt16,\n    UserAgentMinor FixedString(2),\n    CookieEnable UInt8,\n    JavascriptEnable UInt8,\n    IsMobile UInt8,\n    MobilePhone UInt8,\n    MobilePhoneModel String,\n    Params String,\n    IPNetworkID UInt32,\n    TraficSourceID Int8,\n    SearchEngineID UInt16,\n    SearchPhrase String,\n    AdvEngineID UInt8,\n    IsArtifical UInt8,\n    WindowClientWidth UInt16,\n    WindowClientHeight UInt16,\n    ClientTimeZone Int16,\n    ClientEventTime DateTime,\n    SilverlightVersion1 UInt8,\n    SilverlightVersion2 UInt8,\n    SilverlightVersion3 UInt32,\n    SilverlightVersion4 UInt16,\n    PageCharset String,\n    CodeVersion UInt32,\n    IsLink UInt8,\n    IsDownload UInt8,\n    IsNotBounce UInt8,\n    FUniqID UInt64,\n    HID UInt32,\n    IsOldCounter UInt8,\n    IsEvent UInt8,\n    IsParameter UInt8,\n    DontCountHits UInt8,\n    WithHash UInt8,\n    HitColor FixedString(1),\n    UTCEventTime DateTime,\n    Age UInt8,\n    Sex UInt8,\n    Income UInt8,\n    Interests UInt16,\n    Robotness UInt8,\n    GeneralInterests Array(UInt16),\n    RemoteIP UInt32,\n    RemoteIP6 FixedString(16),\n    WindowName Int32,\n    OpenerName Int32,\n    HistoryLength Int16,\n    BrowserLanguage FixedString(2),\n    BrowserCountry FixedString(2),\n    SocialNetwork String,\n    SocialAction String,\n    HTTPError UInt16,\n    SendTiming Int32,\n    DNSTiming Int32,\n    ConnectTiming Int32,\n    ResponseStartTiming Int32,\n    ResponseEndTiming Int32,\n    FetchTiming Int32,\n    RedirectTiming Int32,\n    DOMInteractiveTiming Int32,\n    DOMContentLoadedTiming Int32,\n    DOMCompleteTiming Int32,\n    LoadEventStartTiming Int32,\n    LoadEventEndTiming Int32,\n    NSToDOMContentLoadedTiming Int32,\n    FirstPaintTiming Int32,\n    RedirectCount Int8,\n    SocialSourceNetworkID UInt8,\n    SocialSourcePage String,\n    ParamPrice Int64,\n    ParamOrderID String,\n    ParamCurrency FixedString(3),\n    ParamCurrencyID UInt16,\n    GoalsReached Array(UInt32),\n    OpenstatServiceName String,\n    OpenstatCampaignID String,\n    OpenstatAdID String,\n    OpenstatSourceID String,\n    UTMSource String,\n    UTMMedium String,\n    UTMCampaign String,\n    UTMContent String,\n    UTMTerm String,\n    FromTag String,\n    HasGCLID UInt8,\n    RefererHash UInt64,\n    URLHash UInt64,\n    CLID UInt32,\n    YCLID UInt64,\n    ShareService String,\n    ShareURL String,\n    ShareTitle String,\n    ParsedParams Nested(\n        Key1 String,\n        Key2 String,\n        Key3 String,\n        Key4 String,\n        Key5 String,\n        ValueDouble Float64),\n    IslandID FixedString(16),\n    RequestNum UInt32,\n    RequestTry UInt8\n)\nENGINE = MergeTree()\nPARTITION BY toYYYYMM(EventDate)\nORDER BY (CounterID, EventDate, intHash32(UserID))\nSAMPLE BY intHash32(UserID)\nSETTINGS storage_policy='web';\n")),(0,r.kt)("p",null,"Required parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"web"),". Otherwise the disk is not created."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"endpoint")," \u2014 The endpoint URL in ",(0,r.kt)("inlineCode",{parentName:"li"},"path")," format. Endpoint URL must contain a root path to store data, where they were uploaded.")),(0,r.kt)("p",null,"Optional parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"min_bytes_for_seek")," \u2014 The minimal number of bytes to use seek operation instead of sequential read. Default value: ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," Mb."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"remote_fs_read_backoff_threashold")," \u2014 The maximum wait time when trying to read data for remote disk. Default value: ",(0,r.kt)("inlineCode",{parentName:"li"},"10000")," seconds."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"remote_fs_read_backoff_max_tries")," \u2014 The maximum number of attempts to read with backoff. Default value: ",(0,r.kt)("inlineCode",{parentName:"li"},"5"),".")),(0,r.kt)("p",null,"If a query fails with an exception ",(0,r.kt)("inlineCode",{parentName:"p"},"DB:Exception Unreachable URL"),", then you can try to adjust the settings: ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#http_connection_timeout"},"http_connection_timeout"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#http_receive_timeout"},"http_receive_timeout"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/server-configuration-parameters/settings#keep-alive-timeout"},"keep_alive_timeout"),"."),(0,r.kt)("p",null,"To get files for upload run:\n",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse static-files-disk-uploader --metadata-path <path> --output-dir <dir>")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--metadata-path")," can be found in query ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT data_paths FROM system.tables WHERE name = 'table_name'"),")."),(0,r.kt)("p",null,"When loading files by ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint"),", they must be loaded into ",(0,r.kt)("inlineCode",{parentName:"p"},"<endpoint>/store/")," path, but config must contain only ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint"),"."),(0,r.kt)("p",null,"If URL is not reachable on disk load when the server is starting up tables, then all errors are caught. If in this case there were errors, tables can be reloaded (become visible) via ",(0,r.kt)("inlineCode",{parentName:"p"},"DETACH TABLE table_name")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"ATTACH TABLE table_name"),". If metadata was successfully loaded at server startup, then tables are available straight away."),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#http-max-single-read-retries"},"http_max_single_read_retries")," setting to limit the maximum number of retries during a single HTTP read."),(0,r.kt)("h2",{id:"zero-copy"},"Zero-copy Replication (not ready for production)"),(0,r.kt)("p",null,"Zero-copy replication is possible, but not recommended, with  ",(0,r.kt)("inlineCode",{parentName:"p"},"S3")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"HDFS")," disks. Zero-copy replication means that if the data is stored remotely on several machines and needs to be synchronized, then only the metadata is replicated (paths to the data parts), but not the data itself."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Zero-copy replication is not ready for production")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Zero-copy replication is disabled by default in ClickHouse version 22.8 and higher.  This feature is not recommended for production use."))))}u.isMDXComponent=!0}}]);
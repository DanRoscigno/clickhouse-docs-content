"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[93322],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),k=r,c=m["".concat(p,".").concat(k)]||m[k]||u[k]||l;return n?a.createElement(c,i(i({ref:t},d),{},{components:n})):a.createElement(c,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46055:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={sidebar_position:6,sidebar_label:"HDFS"},p="HDFS",s={unversionedId:"en/engines/table-engines/integrations/hdfs",id:"en/engines/table-engines/integrations/hdfs",title:"HDFS",description:"table_engines-hdfs}",source:"@site/docs/en/engines/table-engines/integrations/hdfs.md",sourceDirName:"en/engines/table-engines/integrations",slug:"/en/engines/table-engines/integrations/hdfs",permalink:"/docs/en/engines/table-engines/integrations/hdfs",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/integrations/hdfs.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"HDFS"},sidebar:"english",previous:{title:"MongoDB",permalink:"/docs/en/engines/table-engines/integrations/mongodb"},next:{title:"S3",permalink:"/docs/en/engines/table-engines/integrations/s3"}},d={},u=[{value:"Usage",id:"usage",level:2},{value:"Implementation Details",id:"implementation-details",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Configuration Options",id:"configuration-options",level:3},{value:"Supported by libhdfs3",id:"supported-by-libhdfs3",level:4},{value:"ClickHouse extras",id:"clickhouse-extras",level:4},{value:"Limitations",id:"limitations",level:3},{value:"Kerberos support",id:"kerberos-support",level:2},{value:"HDFS Namenode HA support",id:"namenode-ha",level:2},{value:"Virtual Columns",id:"virtual-columns",level:2}],m={toc:u};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"table_engines-hdfs"},"HDFS"),(0,l.kt)("p",null,"This engine provides integration with the ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Apache_Hadoop"},"Apache Hadoop")," ecosystem by allowing to manage data on ",(0,l.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html"},"HDFS")," via ClickHouse. This engine is similar to the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/file#table_engines-file"},"File")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/url#table_engines-url"},"URL")," engines, but provides Hadoop-specific features."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ENGINE = HDFS(URI, format)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Engine Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"URI")," - whole file URI in HDFS. The path part of ",(0,l.kt)("inlineCode",{parentName:"li"},"URI")," may contain globs. In this case the table would be readonly."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"format")," - specifies one of the available file formats. To perform\n",(0,l.kt)("inlineCode",{parentName:"li"},"SELECT")," queries, the format must be supported for input, and to perform\n",(0,l.kt)("inlineCode",{parentName:"li"},"INSERT")," queries \u2013 for output. The available formats are listed in the\n",(0,l.kt)("a",{parentName:"li",href:"/docs/en/interfaces/formats#formats"},"Formats")," section.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1.")," Set up the ",(0,l.kt)("inlineCode",{parentName:"p"},"hdfs_engine_table")," table:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE hdfs_engine_table (name String, value UInt32) ENGINE=HDFS('hdfs://hdfs1:9000/other_storage', 'TSV')\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2.")," Fill file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO hdfs_engine_table VALUES ('one', 1), ('two', 2), ('three', 3)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"3.")," Query the data:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM hdfs_engine_table LIMIT 2\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u252c\u2500value\u2500\u2510\n\u2502 one  \u2502     1 \u2502\n\u2502 two  \u2502     2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"implementation-details"},"Implementation Details"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Reads and writes can be parallel."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/en/operations/storing-data#zero-copy"},"Zero-copy")," replication is supported.  "),(0,l.kt)("li",{parentName:"ul"},"Not supported:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"SELECT...SAMPLE")," operations."),(0,l.kt)("li",{parentName:"ul"},"Indexes.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Globs in path")),(0,l.kt)("p",null,"Multiple path components can have globs. For being processed file should exists and matches to the whole path pattern. Listing of files determines during ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," (not at ",(0,l.kt)("inlineCode",{parentName:"p"},"CREATE")," moment)."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*")," \u2014 Substitutes any number of any characters except ",(0,l.kt)("inlineCode",{parentName:"li"},"/")," including empty string."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"?")," \u2014 Substitutes any single character."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{some_string,another_string,yet_another_one}")," \u2014 Substitutes any of strings ",(0,l.kt)("inlineCode",{parentName:"li"},"'some_string', 'another_string', 'yet_another_one'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{N..M}")," \u2014 Substitutes any number in range from N to M including both borders.")),(0,l.kt)("p",null,"Constructions with ",(0,l.kt)("inlineCode",{parentName:"p"},"{}")," are similar to the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/remote"},"remote")," table function."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Suppose we have several files in TSV format with the following URIs on HDFS:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"'hdfs://hdfs1:9000/some_dir/some_file_1'"),(0,l.kt)("li",{parentName:"ul"},"'hdfs://hdfs1:9000/some_dir/some_file_2'"),(0,l.kt)("li",{parentName:"ul"},"'hdfs://hdfs1:9000/some_dir/some_file_3'"),(0,l.kt)("li",{parentName:"ul"},"'hdfs://hdfs1:9000/another_dir/some_file_1'"),(0,l.kt)("li",{parentName:"ul"},"'hdfs://hdfs1:9000/another_dir/some_file_2'"),(0,l.kt)("li",{parentName:"ul"},"'hdfs://hdfs1:9000/another_dir/some_file_3'"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"There are several ways to make a table consisting of all six files:"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_with_range (name String, value UInt32) ENGINE = HDFS('hdfs://hdfs1:9000/{some,another}_dir/some_file_{1..3}', 'TSV')\n")),(0,l.kt)("p",null,"Another way:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_with_question_mark (name String, value UInt32) ENGINE = HDFS('hdfs://hdfs1:9000/{some,another}_dir/some_file_?', 'TSV')\n")),(0,l.kt)("p",null,"Table consists of all the files in both directories (all files should satisfy format and schema described in query):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_with_asterisk (name String, value UInt32) ENGINE = HDFS('hdfs://hdfs1:9000/{some,another}_dir/*', 'TSV')\n")),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If the listing of files contains number ranges with leading zeros, use the construction with braces for each digit separately or use ",(0,l.kt)("inlineCode",{parentName:"p"},"?"),"."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Create table with files named ",(0,l.kt)("inlineCode",{parentName:"p"},"file000"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"file001"),", \u2026 , ",(0,l.kt)("inlineCode",{parentName:"p"},"file999"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE big_table (name String, value UInt32) ENGINE = HDFS('hdfs://hdfs1:9000/big_dir/file{0..9}{0..9}{0..9}', 'CSV')\n")),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"Similar to GraphiteMergeTree, the HDFS engine supports extended configuration using the ClickHouse config file. There are two configuration keys that you can use: global (",(0,l.kt)("inlineCode",{parentName:"p"},"hdfs"),") and user-level (",(0,l.kt)("inlineCode",{parentName:"p"},"hdfs_*"),"). The global configuration is applied first, and then the user-level configuration is applied (if it exists)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'  \x3c!-- Global configuration options for HDFS engine type --\x3e\n  <hdfs>\n    <hadoop_kerberos_keytab>/tmp/keytab/clickhouse.keytab</hadoop_kerberos_keytab>\n    <hadoop_kerberos_principal>clickuser@TEST.CLICKHOUSE.TECH</hadoop_kerberos_principal>\n    <hadoop_security_authentication>kerberos</hadoop_security_authentication>\n  </hdfs>\n\n  \x3c!-- Configuration specific for user "root" --\x3e\n  <hdfs_root>\n    <hadoop_kerberos_principal>root@TEST.CLICKHOUSE.TECH</hadoop_kerberos_principal>\n  </hdfs_root>\n')),(0,l.kt)("h3",{id:"configuration-options"},"Configuration Options"),(0,l.kt)("h4",{id:"supported-by-libhdfs3"},"Supported by libhdfs3"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"parameter")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"default value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rpc","_","client","_","connect","_","tcpnodelay"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dfs","_","client","_","read","_","shortcircuit"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"output","_","replace-datanode-on-failure"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"input","_","notretry-another-node"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"input","_","localread","_","mappedfile"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dfs","_","client","_","use","_","legacy","_","blockreader","_","local"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rpc","_","client","_","ping","_","interval"),(0,l.kt)("td",{parentName:"tr",align:null},"10  * 1000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rpc","_","client","_","connect","_","timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"600 * 1000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rpc","_","client","_","read","_","timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"3600 * 1000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rpc","_","client","_","write","_","timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"3600 * 1000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rpc","_","client","_","socekt","_","linger","_","timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"-1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rpc","_","client","_","connect","_","retry"),(0,l.kt)("td",{parentName:"tr",align:null},"10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rpc","_","client","_","timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"3600 * 1000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dfs","_","default","_","replica"),(0,l.kt)("td",{parentName:"tr",align:null},"3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"input","_","connect","_","timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"600 * 1000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"input","_","read","_","timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"3600 * 1000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"input","_","write","_","timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"3600 * 1000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"input","_","localread","_","default","_","buffersize"),(0,l.kt)("td",{parentName:"tr",align:null},"1 ",(0,l.kt)("em",{parentName:"td"}," 1024 ")," 1024")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dfs","_","prefetchsize"),(0,l.kt)("td",{parentName:"tr",align:null},"10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"input","_","read","_","getblockinfo","_","retry"),(0,l.kt)("td",{parentName:"tr",align:null},"3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"input","_","localread","_","blockinfo","_","cachesize"),(0,l.kt)("td",{parentName:"tr",align:null},"1000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"input","_","read","_","max","_","retry"),(0,l.kt)("td",{parentName:"tr",align:null},"60")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"output","_","default","_","chunksize"),(0,l.kt)("td",{parentName:"tr",align:null},"512")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"output","_","default","_","packetsize"),(0,l.kt)("td",{parentName:"tr",align:null},"64 * 1024")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"output","_","default","_","write","_","retry"),(0,l.kt)("td",{parentName:"tr",align:null},"10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"output","_","connect","_","timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"600 * 1000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"output","_","read","_","timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"3600 * 1000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"output","_","write","_","timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"3600 * 1000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"output","_","close","_","timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"3600 * 1000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"output","_","packetpool","_","size"),(0,l.kt)("td",{parentName:"tr",align:null},"1024")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"output","_","heeartbeat","_","interval"),(0,l.kt)("td",{parentName:"tr",align:null},"10 * 1000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dfs","_","client","_","failover","_","max","_","attempts"),(0,l.kt)("td",{parentName:"tr",align:null},"15")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dfs","_","client","_","read","_","shortcircuit","_","streams","_","cache","_","size"),(0,l.kt)("td",{parentName:"tr",align:null},"256")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dfs","_","client","_","socketcache","_","expiryMsec"),(0,l.kt)("td",{parentName:"tr",align:null},"3000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dfs","_","client","_","socketcache","_","capacity"),(0,l.kt)("td",{parentName:"tr",align:null},"16")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dfs","_","default","_","blocksize"),(0,l.kt)("td",{parentName:"tr",align:null},"64 ",(0,l.kt)("em",{parentName:"td"}," 1024 ")," 1024")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dfs","_","default","_","uri"),(0,l.kt)("td",{parentName:"tr",align:null},'"hdfs://localhost:9000"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hadoop","_","security","_","authentication"),(0,l.kt)("td",{parentName:"tr",align:null},'"simple"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hadoop","_","security","_","kerberos","_","ticket","_","cache","_","path"),(0,l.kt)("td",{parentName:"tr",align:null},'""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dfs","_","client","_","log","_","severity"),(0,l.kt)("td",{parentName:"tr",align:null},'"INFO"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dfs","_","domain","_","socket","_","path"),(0,l.kt)("td",{parentName:"tr",align:null},'""')))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://hawq.apache.org/docs/userguide/2.3.0.0-incubating/reference/HDFSConfigurationParameterReference.html"},"HDFS Configuration Reference")," might explain some parameters."),(0,l.kt)("h4",{id:"clickhouse-extras"},"ClickHouse extras"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"parameter")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"default value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hadoop","_","kerberos","_","keytab"),(0,l.kt)("td",{parentName:"tr",align:null},'""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hadoop","_","kerberos","_","principal"),(0,l.kt)("td",{parentName:"tr",align:null},'""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hadoop","_","kerberos","_","kinit","_","command"),(0,l.kt)("td",{parentName:"tr",align:null},"kinit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"libhdfs3","_","conf"),(0,l.kt)("td",{parentName:"tr",align:null},'""')))),(0,l.kt)("h3",{id:"limitations"},"Limitations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"hadoop_security_kerberos_ticket_cache_path")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"libhdfs3_conf")," can be global only, not user specific")),(0,l.kt)("h2",{id:"kerberos-support"},"Kerberos support"),(0,l.kt)("p",null,"If the ",(0,l.kt)("inlineCode",{parentName:"p"},"hadoop_security_authentication")," parameter has the value ",(0,l.kt)("inlineCode",{parentName:"p"},"kerberos"),", ClickHouse authenticates via Kerberos.\nParameters are ",(0,l.kt)("a",{parentName:"p",href:"#clickhouse-extras"},"here")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"hadoop_security_kerberos_ticket_cache_path")," may be of help.\nNote that due to libhdfs3 limitations only old-fashioned approach is supported,\ndatanode communications are not secured by SASL (",(0,l.kt)("inlineCode",{parentName:"p"},"HADOOP_SECURE_DN_USER")," is a reliable indicator of such\nsecurity approach). Use ",(0,l.kt)("inlineCode",{parentName:"p"},"tests/integration/test_storage_kerberized_hdfs/hdfs_configs/bootstrap.sh")," for reference."),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"hadoop_kerberos_keytab"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"hadoop_kerberos_principal")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"hadoop_kerberos_kinit_command")," is specified, ",(0,l.kt)("inlineCode",{parentName:"p"},"kinit")," will be invoked. ",(0,l.kt)("inlineCode",{parentName:"p"},"hadoop_kerberos_keytab")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"hadoop_kerberos_principal")," are mandatory in this case. ",(0,l.kt)("inlineCode",{parentName:"p"},"kinit")," tool and krb5 configuration files are required."),(0,l.kt)("h2",{id:"namenode-ha"},"HDFS Namenode HA support"),(0,l.kt)("p",null,"libhdfs3 support HDFS namenode HA."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Copy ",(0,l.kt)("inlineCode",{parentName:"li"},"hdfs-site.xml")," from an HDFS node to ",(0,l.kt)("inlineCode",{parentName:"li"},"/etc/clickhouse-server/"),"."),(0,l.kt)("li",{parentName:"ul"},"Add following piece to ClickHouse config file:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"  <hdfs>\n    <libhdfs3_conf>/etc/clickhouse-server/hdfs-site.xml</libhdfs3_conf>\n  </hdfs>\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Then use ",(0,l.kt)("inlineCode",{parentName:"li"},"dfs.nameservices")," tag value of ",(0,l.kt)("inlineCode",{parentName:"li"},"hdfs-site.xml")," as the namenode address in the HDFS URI. For example, replace ",(0,l.kt)("inlineCode",{parentName:"li"},"hdfs://appadmin@192.168.101.11:8020/abc/")," with ",(0,l.kt)("inlineCode",{parentName:"li"},"hdfs://appadmin@my_nameservice/abc/"),".")),(0,l.kt)("h2",{id:"virtual-columns"},"Virtual Columns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_path")," \u2014 Path to the file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_file")," \u2014 Name of the file.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See Also")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/#table_engines-virtual_columns"},"Virtual columns"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/integrations/hdfs/"},"Original article")," "))}k.isMDXComponent=!0}}]);
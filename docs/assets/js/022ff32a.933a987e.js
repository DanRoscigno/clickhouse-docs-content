"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[90515],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},54579:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),s=["components"],o={sidebar_label:"S3 Table Functions",sidebar_position:2,slug:"/en/integrations/s3/s3-table-functions",description:"The s3 table function allows us to read and write files from and to S3 compatible storage."},l="S3 Table Functions",c={unversionedId:"en/integrations/data-ingestion/s3/s3-table-functions",id:"en/integrations/data-ingestion/s3/s3-table-functions",title:"S3 Table Functions",description:"The s3 table function allows us to read and write files from and to S3 compatible storage.",source:"@site/docs/en/integrations/data-ingestion/s3/s3-table-functions.md",sourceDirName:"en/integrations/data-ingestion/s3",slug:"/en/integrations/s3/s3-table-functions",permalink:"/docs/en/integrations/s3/s3-table-functions",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/s3/s3-table-functions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"S3 Table Functions",sidebar_position:2,slug:"/en/integrations/s3/s3-table-functions",description:"The s3 table function allows us to read and write files from and to S3 compatible storage."},sidebar:"english",previous:{title:"Introduction",permalink:"/docs/en/integrations/s3/s3-intro"},next:{title:"S3 Table Engine",permalink:"/docs/en/integrations/s3/s3-table-engine"}},p={},u=[{value:"Preparation",id:"preparation",level:2},{value:"Reading Data from s3",id:"reading-data-from-s3",level:2},{value:"Using clickhouse-local",id:"using-clickhouse-local",level:2},{value:"Inserting Data from s3",id:"inserting-data-from-s3",level:2},{value:"Remote Insert using ClickHouse Local",id:"remote-insert-using-clickhouse-local",level:3},{value:"Exporting Data",id:"exporting-data",level:2},{value:"Splitting Large Files",id:"splitting-large-files",level:3},{value:"Utilizing Clusters",id:"utilizing-clusters",level:2},{value:"Other Formats &amp; Increasing Throughput",id:"other-formats--increasing-throughput",level:2}],d={toc:u};function m(e){var t=e.components,a=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"s3-table-functions"},"S3 Table Functions"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"s3")," table function allows us to read and write files from and to S3 compatible storage.  Like other table functions, such as URL and Kafka, this relies on convenient syntax, which can be incorporated into existing SELECT and INSERT statements.  The outline for this syntax is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"s3(path, [aws_access_key_id, aws_secret_access_key,] [format, [structure, [compression]]])\n")),(0,r.kt)("p",null,"where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"path \u2014 Bucket URL with a path to the file. This supports following wildcards in read-only mode: ",(0,r.kt)("inlineCode",{parentName:"li"},"*"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"?"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"{abc,def}")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"{N..M}")," where ",(0,r.kt)("inlineCode",{parentName:"li"},"N"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"M")," \u2014 numbers, ",(0,r.kt)("inlineCode",{parentName:"li"},"'abc'"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"'def'")," \u2014 strings. For more information, see ",(0,r.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/engines/table-engines/integrations/s3/#wildcards-in-path"},"here"),"."),(0,r.kt)("li",{parentName:"ul"},"format \u2014 The ",(0,r.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/interfaces/formats/#formats"},"format")," of the file."),(0,r.kt)("li",{parentName:"ul"},"structure \u2014 Structure of the table. Format ",(0,r.kt)("inlineCode",{parentName:"li"},"'column1_name column1_type, column2_name column2_type, ...'"),"."),(0,r.kt)("li",{parentName:"ul"},"compression \u2014 Parameter is optional. Supported values: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"gzip/gz"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"brotli/br"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"xz/LZMA"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"zstd/zst"),". By default, it will autodetect compression by file extension.")),(0,r.kt)("p",null,"We will exploit several features to maximize read and write performance with s3. Note how we can utilize wildcards in the path expression, thus allowing multiple files to be referenced and opening the door for parallelism."),(0,r.kt)("h2",{id:"preparation"},"Preparation"),(0,r.kt)("p",null,"To interact with our s3 based dataset, we prepare a standard merge tree table as our destination. The statement below creates this table under the default database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE trips\n(\n    `trip_id` UInt32,\n    `vendor_id` Enum8('1' = 1, '2' = 2, '3' = 3, '4' = 4, 'CMT' = 5, 'VTS' = 6, 'DDS' = 7, 'B02512' = 10, 'B02598' = 11, 'B02617' = 12, 'B02682' = 13, 'B02764' = 14, '' = 15),\n    `pickup_date` Date,\n    `pickup_datetime` DateTime,\n    `dropoff_date` Date,\n    `dropoff_datetime` DateTime,\n    `store_and_fwd_flag` UInt8,\n    `rate_code_id` UInt8,\n    `pickup_longitude` Float64,\n    `pickup_latitude` Float64,\n    `dropoff_longitude` Float64,\n    `dropoff_latitude` Float64,\n    `passenger_count` UInt8,\n    `trip_distance` Float64,\n    `fare_amount` Float32,\n    `extra` Float32,\n    `mta_tax` Float32,\n    `tip_amount` Float32,\n    `tolls_amount` Float32,\n    `ehail_fee` Float32,\n    `improvement_surcharge` Float32,\n    `total_amount` Float32,\n    `payment_type` Enum8('UNK' = 0, 'CSH' = 1, 'CRE' = 2, 'NOC' = 3, 'DIS' = 4),\n    `trip_type` UInt8,\n    `pickup` FixedString(25),\n    `dropoff` FixedString(25),\n    `cab_type` Enum8('yellow' = 1, 'green' = 2, 'uber' = 3),\n    `pickup_nyct2010_gid` Int8,\n    `pickup_ctlabel` Float32,\n    `pickup_borocode` Int8,\n    `pickup_ct2010` String,\n    `pickup_boroct2010` String,\n    `pickup_cdeligibil` String,\n    `pickup_ntacode` FixedString(4),\n    `pickup_ntaname` String,\n    `pickup_puma` UInt16,\n    `dropoff_nyct2010_gid` UInt8,\n    `dropoff_ctlabel` Float32,\n    `dropoff_borocode` UInt8,\n    `dropoff_ct2010` String,\n    `dropoff_boroct2010` String,\n    `dropoff_cdeligibil` String,\n    `dropoff_ntacode` FixedString(4),\n    `dropoff_ntaname` String,\n    `dropoff_puma` UInt16\n)\nENGINE = MergeTree\nPARTITION BY toYYYYMM(pickup_date)\nORDER BY pickup_datetime\nSETTINGS index_granularity = 8192\n")),(0,r.kt)("p",null,"Note the use of ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/custom-partitioning-key/#custom-partitioning-key"},"partitioning")," on the pickup_date field. Whilst usually a technique to assist with data management, we can later use this key to parallelize writes to S3."),(0,r.kt)("p",null,"Each entry in our taxi dataset contains a taxi trip. This anonymized data consists of 20m records compressed in the S3 bucket ",(0,r.kt)("a",{parentName:"p",href:"https://datasets-documentation.s3.eu-west-3.amazonaws.com/"},"https://datasets-documentation.s3.eu-west-3.amazonaws.com/")," under the folder nyc-taxi. We offer this data in tsv format with approximately 1m rows per file."),(0,r.kt)("h2",{id:"reading-data-from-s3"},"Reading Data from s3"),(0,r.kt)("p",null,"We can query s3 data as a source without requiring persistence in ClickHouse.  In the following query, we sample 10 rows. Note the absence of credentials here as the bucket is publicly accessible:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM s3('https://datasets-documentation.s3.eu-west-3.amazonaws.com/nyc-taxi/trips_*.gz', 'TabSeparatedWithNames') LIMIT 10;\n")),(0,r.kt)("p",null,"Note that we are not required to list the columns since the TabSeparatedWithNames format encodes the column names in the first row. Other formats, such as plain CSV or TSV, will return auto-generated columns for this query, e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"c1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"c2"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"c3")," etc. "),(0,r.kt)("p",null,"Queries additionally support the virtual columns ",(0,r.kt)("inlineCode",{parentName:"p"},"_path")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"_file")," that provide information regards the bucket path and filename respectively e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT  _path, _file, trip_id FROM s3('https://datasets-documentation.s3.eu-west-3.amazonaws.com/nyc-taxi/trips_0.gz', 'TabSeparatedWithNames') LIMIT 5;\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"_","path"),(0,r.kt)("th",{parentName:"tr",align:"left"},"_","file"),(0,r.kt)("th",{parentName:"tr",align:"left"},"trip","_","id"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"datasets-documentation/nyc-taxi/trips","_","0.gz"),(0,r.kt)("td",{parentName:"tr",align:"left"},"trips","_","0.gz"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1199999902")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"datasets-documentation/nyc-taxi/trips","_","0.gz"),(0,r.kt)("td",{parentName:"tr",align:"left"},"trips","_","0.gz"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1199999919")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"datasets-documentation/nyc-taxi/trips","_","0.gz"),(0,r.kt)("td",{parentName:"tr",align:"left"},"trips","_","0.gz"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1199999944")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"datasets-documentation/nyc-taxi/trips","_","0.gz"),(0,r.kt)("td",{parentName:"tr",align:"left"},"trips","_","0.gz"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1199999969")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"datasets-documentation/nyc-taxi/trips","_","0.gz"),(0,r.kt)("td",{parentName:"tr",align:"left"},"trips","_","0.gz"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1199999990")))),(0,r.kt)("p",null,"Confirm the number of rows in this sample dataset. Note the use of wildcards for file expansion, so we consider all twenty files. This query will take around 10s depending on the number of cores on the ClickHouse instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count() as count FROM s3('https://datasets-documentation.s3.eu-west-3.amazonaws.com/nyc-taxi/trips_*.gz', 'TabSeparatedWithNames');\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"count"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"20000000")))),(0,r.kt)("p",null,"Whilst useful for sampling data and executing one-off exploratory queries, reading data directly from s3 is unlikely to perform on larger datasets. "),(0,r.kt)("h2",{id:"using-clickhouse-local"},"Using clickhouse-local"),(0,r.kt)("p",null,"The clickhouse-local program enables you to perform fast processing on local files without deploying and configuring the ClickHouse server. Any queries using the s3 table function can be performed with this utility. For example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"clickhouse-local --query \"SELECT * FROM s3('https://datasets-documentation.s3.eu-west-3.amazonaws.com/nyc-taxi/trips_*.gz', 'TabSeparatedWithNames') LIMIT 10\"\n")),(0,r.kt)("h2",{id:"inserting-data-from-s3"},"Inserting Data from s3"),(0,r.kt)("p",null,"To exploit the full capabilities of ClickHouse, we next read and insert the data into our instance.\nWe combine our s3 function with a simple INSERT statement to achieve this. Note that we aren\u2019t required to list our columns as our target table provides the required structure. This requires the columns to appear in the order specified in the table DDL statement: columns are mapped according to their position in the SELECT clause. The insertion of all 10m rows can take a few minutes depending on the ClickHouse instance. Below we insert 1m to ensure a prompt response. Adjust the LIMIT clause or column selection to import subsets as required:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO trips SELECT * FROM s3('https://datasets-documentation.s3.eu-west-3.amazonaws.com/nyc-taxi/trips_*.gz', 'TabSeparatedWithNames') LIMIT 1000000;\n")),(0,r.kt)("h3",{id:"remote-insert-using-clickhouse-local"},"Remote Insert using ClickHouse Local"),(0,r.kt)("p",null,"If network security policies prevent your ClickHouse cluster from making outbound connections, you can potentially insert s3 data using the ClickHouse local. In the example below, we read from an s3 bucket and insert to ClickHouse using the remote function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"clickhouse-local --query \"INSERT INTO TABLE FUNCTION remote('localhost:9000', 'default.trips', 'username', 'password') (*) SELECT * FROM s3('https://datasets-documentation.s3.eu-west-3.amazonaws.com/nyc-taxi/trips_*.gz', 'TabSeparatedWithNames') LIMIT 10\"\n")),(0,r.kt)("p",null,"To execute this over a secure SSL connection, utilize the remoteSecure function. This approach offers inferior performance to direct inserts on the cluster and is for use in restricted scenarios only. "),(0,r.kt)("h2",{id:"exporting-data"},"Exporting Data"),(0,r.kt)("p",null,"We assume you have a bucket to write data in the following examples. This will require appropriate permissions. We pass the credentials needed in the request. For further options, see ",(0,r.kt)("a",{parentName:"p",href:"./s3-table-engine#managing-credentials"},"Managing Credentials"),"."),(0,r.kt)("p",null,"In the simple example below, we use the table function as a destination instead of a source. Here we stream 10k rows from the trips table to a bucket, specifying lz4 compression and output type of CSV."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO FUNCTION s3('https://datasets-documentation.s3.eu-west-3.amazonaws.com/csv/trips.csv.lz4', 's3_key', 's3_secret', 'CSV') SELECT * FROM trips LIMIT 10000;\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This query requires write access to the bucket."))),(0,r.kt)("p",null,"Note here how the format of the file is inferred from the extension. We also don\u2019t need to specify the columns in the s3 function - this can be inferred from the SELECT."),(0,r.kt)("h3",{id:"splitting-large-files"},"Splitting Large Files"),(0,r.kt)("p",null,"It is unlikely you will want to export your data as a single file. Most tools, including ClickHouse, will achieve higher throughput performance when reading and writing to multiple files due to the possibility of parallelism. We could execute our INSERT command multiple times, targeting a subset of the data. ClickHouse offers a means of automatic splitting files using a PARTITION key."),(0,r.kt)("p",null,"In the example below, we create ten files using a modulus of the rand() function. Notice how the resulting partition id is referenced in the filename. This results in ten files with a numerical suffix, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"trips_0.csv.lz4"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"trips_1.csv.lz4")," etc...:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO FUNCTION s3('https://datasets-documentation.s3.eu-west-3.amazonaws.com/csv/trips_{_partition_id}.csv.lz4', 's3_key', 's3_secret', 'CSV') PARTITION BY rand() % 10  SELECT * FROM trips LIMIT 100000;\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This query requires write access to the bucket."))),(0,r.kt)("p",null,"Alternatively, we can reference a field in the data. For this dataset, the payment_type provides a natural partitioning key with a cardinality of 5."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO FUNCTION s3('https://datasets-documentation.s3.eu-west-3.amazonaws.com/csv/trips_{_partition_id}.csv.lz4', 's3_key', 's3_secret', 'CSV') PARTITION BY payment_type SELECT * FROM trips LIMIT 100000;\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This query requires write access to the bucket."))),(0,r.kt)("h2",{id:"utilizing-clusters"},"Utilizing Clusters"),(0,r.kt)("p",null,"The above functions are all limited to execution on a single node. Read speeds will scale linearly with CPU cores until other resources (typically network) are saturated, allowing users to vertically scale. However, this approach has its limitations. While users can alleviate some resource pressure by inserting into a distributed table when performing an INSERT INTO SELECT query, this still leaves a single node reading, parsing, and processing the data. To address this challenge and allow us to scale reads horizontally, we have the ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/table-functions/s3Cluster/"},"s3Cluster")," function."),(0,r.kt)("p",null,"The node which receives the query, known as the initiator, creates a connection to every node in the cluster. The glob pattern determining which files need to be read is resolved to a set of files. The initiator distributes files to the nodes in the cluster, which act as workers. These workers, in turn, request files to process as they complete reads. This process ensures that we can scale reads horizontally."),(0,r.kt)("p",null,"The s3Cluster function takes the same format as the single node variants, except that a target ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/getting-started/tutorial/#cluster-deployment"},"cluster")," is required to denote the worker nodes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"s3Cluster(cluster_name, source, [access_key_id, secret_access_key,] format, structure)\n")),(0,r.kt)("p",null,"where,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cluster_name \u2014 Name of a cluster that is used to build a set of addresses and connection parameters to remote and local servers."),(0,r.kt)("li",{parentName:"ul"},"source \u2014 URL to a file or a bunch of files. Supports following wildcards in read-only mode: *, ?, {'abc','def'} and {N..M} where N, M \u2014 numbers, abc, def \u2014 strings. For more information see ",(0,r.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/engines/table-engines/integrations/s3/#wildcards-in-path"},"Wildcards In Path"),"."),(0,r.kt)("li",{parentName:"ul"},"access_key_id and secret_access_key \u2014 Keys that specify credentials to use with the given endpoint. Optional."),(0,r.kt)("li",{parentName:"ul"},"format \u2014 The ",(0,r.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/interfaces/formats/#formats"},"format")," of the file."),(0,r.kt)("li",{parentName:"ul"},"structure \u2014 Structure of the table. Format 'column1_name column1_type, column2_name column2_type, ...'.")),(0,r.kt)("p",null,"Like any s3 functions, the credentials are optional if the bucket is insecure or you define security through the ",(0,r.kt)("a",{parentName:"p",href:"#managing-clusters"},"environment"),", e.g., IAM roles. Unlike the s3 function, however, the structure must be specified in the request as of 22.3.1, i.e., the schema is not inferred."),(0,r.kt)("p",null,"This function will be used as part of an INSERT INTO SELECT in most cases. In this case, you will often be inserting a distributed table. We illustrate a simple example below where trips_all is a distributed table. Whilst this table uses the events cluster, the consistency of the nodes used for reads and writes is not a requirement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO default.trips_all SELECT * FROM s3Cluster('events', 'https://datasets-documentation.s3.eu-west-3.amazonaws.com/nyc-taxi/trips_*.gz', 'TabSeparatedWithNames')\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This query requires fixes to support schema inference present in 22.3.1 and later."))),(0,r.kt)("p",null,"Note that as of 22.3.1, inserts will occur against the initiator node. This means that whilst reads will occur on each node, the resulting rows will be routed to the initiator for distribution. In high throughput scenarios, this may prove a bottleneck. To address this, the s3Cluster function will work with the parameter ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},(0,r.kt)("a",{parentName:"em",href:"https://clickhouse.com/docs/en/operations/settings/settings/#parallel_distributed_insert_select"},"parallel_distributed_insert_select")))," in future versions."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"./s3-optimizing-performance"},"Optimizing for Performance")," for further details on ensuring the s3cluster function achieves optimal performance."),(0,r.kt)("h2",{id:"other-formats--increasing-throughput"},"Other Formats & Increasing Throughput"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"./s3-optimizing-performance"},"Optimizing for Performance"),"."))}m.isMDXComponent=!0}}]);
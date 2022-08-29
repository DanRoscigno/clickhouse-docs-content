"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[85951,46541],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return g}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=c(t),g=r,p=d["".concat(s,".").concat(g)]||d[g]||u[g]||l;return t?a.createElement(p,o(o({ref:n},m),{},{components:t})):a.createElement(p,o({ref:n},m))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},24288:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),o=["components"],i={slug:"/en/getting-started/example-datasets/brown-benchmark",sidebar_label:"Brown University Benchmark",description:"A new analytical benchmark for machine-generated log data",title:"Brown University Benchmark"},s=void 0,c={unversionedId:"en/getting-started/example-datasets/brown-benchmark",id:"en/getting-started/example-datasets/brown-benchmark",title:"Brown University Benchmark",description:"A new analytical benchmark for machine-generated log data",source:"@site/docs/en/getting-started/example-datasets/brown-benchmark.md",sourceDirName:"en/getting-started/example-datasets",slug:"/en/getting-started/example-datasets/brown-benchmark",permalink:"/docs/en/getting-started/example-datasets/brown-benchmark",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/getting-started/example-datasets/brown-benchmark.md",tags:[],version:"current",frontMatter:{slug:"/en/getting-started/example-datasets/brown-benchmark",sidebar_label:"Brown University Benchmark",description:"A new analytical benchmark for machine-generated log data",title:"Brown University Benchmark"},sidebar:"english",previous:{title:"AMPLab Big Data Benchmark",permalink:"/docs/en/getting-started/example-datasets/amplab-benchmark"},next:{title:"Cell Towers",permalink:"/docs/en/getting-started/example-datasets/cell-towers"}},m={},u=[{value:"Run benchmark queries:",id:"run-benchmark-queries",level:2}],d={toc:u};function g(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"MgBench")," is a new analytical benchmark for machine-generated log data, ",(0,l.kt)("a",{parentName:"p",href:"http://cs.brown.edu/people/acrotty/"},"Andrew Crotty"),"."),(0,l.kt)("p",null,"Download the data:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"wget https://datasets.clickhouse.com/mgbench{1..3}.csv.xz\n")),(0,l.kt)("p",null,"Unpack the data:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"xz -v -d mgbench{1..3}.csv.xz\n")),(0,l.kt)("p",null,"Create the database and tables:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE mgbench;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"USE mgbench;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE mgbench.logs1 (\n  log_time      DateTime,\n  machine_name  LowCardinality(String),\n  machine_group LowCardinality(String),\n  cpu_idle      Nullable(Float32),\n  cpu_nice      Nullable(Float32),\n  cpu_system    Nullable(Float32),\n  cpu_user      Nullable(Float32),\n  cpu_wio       Nullable(Float32),\n  disk_free     Nullable(Float32),\n  disk_total    Nullable(Float32),\n  part_max_used Nullable(Float32),\n  load_fifteen  Nullable(Float32),\n  load_five     Nullable(Float32),\n  load_one      Nullable(Float32),\n  mem_buffers   Nullable(Float32),\n  mem_cached    Nullable(Float32),\n  mem_free      Nullable(Float32),\n  mem_shared    Nullable(Float32),\n  swap_free     Nullable(Float32),\n  bytes_in      Nullable(Float32),\n  bytes_out     Nullable(Float32)\n)\nENGINE = MergeTree()\nORDER BY (machine_group, machine_name, log_time);\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE mgbench.logs2 (\n  log_time    DateTime,\n  client_ip   IPv4,\n  request     String,\n  status_code UInt16,\n  object_size UInt64\n)\nENGINE = MergeTree()\nORDER BY log_time;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE mgbench.logs3 (\n  log_time     DateTime64,\n  device_id    FixedString(15),\n  device_name  LowCardinality(String),\n  device_type  LowCardinality(String),\n  device_floor UInt8,\n  event_type   LowCardinality(String),\n  event_unit   FixedString(1),\n  event_value  Nullable(Float32)\n)\nENGINE = MergeTree()\nORDER BY (event_type, log_time);\n")),(0,l.kt)("p",null,"Insert data:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'clickhouse-client --query "INSERT INTO mgbench.logs1 FORMAT CSVWithNames" < mgbench1.csv\nclickhouse-client --query "INSERT INTO mgbench.logs2 FORMAT CSVWithNames" < mgbench2.csv\nclickhouse-client --query "INSERT INTO mgbench.logs3 FORMAT CSVWithNames" < mgbench3.csv\n')),(0,l.kt)("h2",{id:"run-benchmark-queries"},"Run benchmark queries:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"USE mgbench;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Q1.1: What is the CPU/network utilization for each web server since midnight?\n\nSELECT machine_name,\n       MIN(cpu) AS cpu_min,\n       MAX(cpu) AS cpu_max,\n       AVG(cpu) AS cpu_avg,\n       MIN(net_in) AS net_in_min,\n       MAX(net_in) AS net_in_max,\n       AVG(net_in) AS net_in_avg,\n       MIN(net_out) AS net_out_min,\n       MAX(net_out) AS net_out_max,\n       AVG(net_out) AS net_out_avg\nFROM (\n  SELECT machine_name,\n         COALESCE(cpu_user, 0.0) AS cpu,\n         COALESCE(bytes_in, 0.0) AS net_in,\n         COALESCE(bytes_out, 0.0) AS net_out\n  FROM logs1\n  WHERE machine_name IN ('anansi','aragog','urd')\n    AND log_time >= TIMESTAMP '2017-01-11 00:00:00'\n) AS r\nGROUP BY machine_name;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Q1.2: Which computer lab machines have been offline in the past day?\n\nSELECT machine_name,\n       log_time\nFROM logs1\nWHERE (machine_name LIKE 'cslab%' OR\n       machine_name LIKE 'mslab%')\n  AND load_one IS NULL\n  AND log_time >= TIMESTAMP '2017-01-10 00:00:00'\nORDER BY machine_name,\n         log_time;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Q1.3: What are the hourly average metrics during the past 10 days for a specific workstation?\n\nSELECT dt,\n       hr,\n       AVG(load_fifteen) AS load_fifteen_avg,\n       AVG(load_five) AS load_five_avg,\n       AVG(load_one) AS load_one_avg,\n       AVG(mem_free) AS mem_free_avg,\n       AVG(swap_free) AS swap_free_avg\nFROM (\n  SELECT CAST(log_time AS DATE) AS dt,\n         EXTRACT(HOUR FROM log_time) AS hr,\n         load_fifteen,\n         load_five,\n         load_one,\n         mem_free,\n         swap_free\n  FROM logs1\n  WHERE machine_name = 'babbage'\n    AND load_fifteen IS NOT NULL\n    AND load_five IS NOT NULL\n    AND load_one IS NOT NULL\n    AND mem_free IS NOT NULL\n    AND swap_free IS NOT NULL\n    AND log_time >= TIMESTAMP '2017-01-01 00:00:00'\n) AS r\nGROUP BY dt,\n         hr\nORDER BY dt,\n         hr;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Q1.4: Over 1 month, how often was each server blocked on disk I/O?\n\nSELECT machine_name,\n       COUNT(*) AS spikes\nFROM logs1\nWHERE machine_group = 'Servers'\n  AND cpu_wio > 0.99\n  AND log_time >= TIMESTAMP '2016-12-01 00:00:00'\n  AND log_time < TIMESTAMP '2017-01-01 00:00:00'\nGROUP BY machine_name\nORDER BY spikes DESC\nLIMIT 10;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Q1.5: Which externally reachable VMs have run low on memory?\n\nSELECT machine_name,\n       dt,\n       MIN(mem_free) AS mem_free_min\nFROM (\n  SELECT machine_name,\n         CAST(log_time AS DATE) AS dt,\n         mem_free\n  FROM logs1\n  WHERE machine_group = 'DMZ'\n    AND mem_free IS NOT NULL\n) AS r\nGROUP BY machine_name,\n         dt\nHAVING MIN(mem_free) < 10000\nORDER BY machine_name,\n         dt;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Q1.6: What is the total hourly network traffic across all file servers?\n\nSELECT dt,\n       hr,\n       SUM(net_in) AS net_in_sum,\n       SUM(net_out) AS net_out_sum,\n       SUM(net_in) + SUM(net_out) AS both_sum\nFROM (\n  SELECT CAST(log_time AS DATE) AS dt,\n         EXTRACT(HOUR FROM log_time) AS hr,\n         COALESCE(bytes_in, 0.0) / 1000000000.0 AS net_in,\n         COALESCE(bytes_out, 0.0) / 1000000000.0 AS net_out\n  FROM logs1\n  WHERE machine_name IN ('allsorts','andes','bigred','blackjack','bonbon',\n      'cadbury','chiclets','cotton','crows','dove','fireball','hearts','huey',\n      'lindt','milkduds','milkyway','mnm','necco','nerds','orbit','peeps',\n      'poprocks','razzles','runts','smarties','smuggler','spree','stride',\n      'tootsie','trident','wrigley','york')\n) AS r\nGROUP BY dt,\n         hr\nORDER BY both_sum DESC\nLIMIT 10;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Q2.1: Which requests have caused server errors within the past 2 weeks?\n\nSELECT *\nFROM logs2\nWHERE status_code >= 500\n  AND log_time >= TIMESTAMP '2012-12-18 00:00:00'\nORDER BY log_time;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Q2.2: During a specific 2-week period, was the user password file leaked?\n\nSELECT *\nFROM logs2\nWHERE status_code >= 200\n  AND status_code < 300\n  AND request LIKE '%/etc/passwd%'\n  AND log_time >= TIMESTAMP '2012-05-06 00:00:00'\n  AND log_time < TIMESTAMP '2012-05-20 00:00:00';\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Q2.3: What was the average path depth for top-level requests in the past month?\n\nSELECT top_level,\n       AVG(LENGTH(request) - LENGTH(REPLACE(request, '/', ''))) AS depth_avg\nFROM (\n  SELECT SUBSTRING(request FROM 1 FOR len) AS top_level,\n         request\n  FROM (\n    SELECT POSITION(SUBSTRING(request FROM 2), '/') AS len,\n           request\n    FROM logs2\n    WHERE status_code >= 200\n      AND status_code < 300\n      AND log_time >= TIMESTAMP '2012-12-01 00:00:00'\n  ) AS r\n  WHERE len > 0\n) AS s\nWHERE top_level IN ('/about','/courses','/degrees','/events',\n                    '/grad','/industry','/news','/people',\n                    '/publications','/research','/teaching','/ugrad')\nGROUP BY top_level\nORDER BY top_level;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Q2.4: During the last 3 months, which clients have made an excessive number of requests?\n\nSELECT client_ip,\n       COUNT(*) AS num_requests\nFROM logs2\nWHERE log_time >= TIMESTAMP '2012-10-01 00:00:00'\nGROUP BY client_ip\nHAVING COUNT(*) >= 100000\nORDER BY num_requests DESC;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Q2.5: What are the daily unique visitors?\n\nSELECT dt,\n       COUNT(DISTINCT client_ip)\nFROM (\n  SELECT CAST(log_time AS DATE) AS dt,\n         client_ip\n  FROM logs2\n) AS r\nGROUP BY dt\nORDER BY dt;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Q2.6: What are the average and maximum data transfer rates (Gbps)?\n\nSELECT AVG(transfer) / 125000000.0 AS transfer_avg,\n       MAX(transfer) / 125000000.0 AS transfer_max\nFROM (\n  SELECT log_time,\n         SUM(object_size) AS transfer\n  FROM logs2\n  GROUP BY log_time\n) AS r;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Q3.1: Did the indoor temperature reach freezing over the weekend?\n\nSELECT *\nFROM logs3\nWHERE event_type = 'temperature'\n  AND event_value <= 32.0\n  AND log_time >= '2019-11-29 17:00:00.000';\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Q3.4: Over the past 6 months, how frequently were each door opened?\n\nSELECT device_name,\n       device_floor,\n       COUNT(*) AS ct\nFROM logs3\nWHERE event_type = 'door_open'\n  AND log_time >= '2019-06-01 00:00:00.000'\nGROUP BY device_name,\n         device_floor\nORDER BY ct DESC;\n")),(0,l.kt)("p",null,"Query 3.5 below uses a UNION.  Set the mode for combining SELECT query results. The setting is only used when shared with UNION without explicitly specifying the UNION ALL or UNION DISTINCT."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SET union_default_mode = 'DISTINCT'\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Q3.5: Where in the building do large temperature variations occur in winter and summer?\n\nWITH temperature AS (\n  SELECT dt,\n         device_name,\n         device_type,\n         device_floor\n  FROM (\n    SELECT dt,\n           hr,\n           device_name,\n           device_type,\n           device_floor,\n           AVG(event_value) AS temperature_hourly_avg\n    FROM (\n      SELECT CAST(log_time AS DATE) AS dt,\n             EXTRACT(HOUR FROM log_time) AS hr,\n             device_name,\n             device_type,\n             device_floor,\n             event_value\n      FROM logs3\n      WHERE event_type = 'temperature'\n    ) AS r\n    GROUP BY dt,\n             hr,\n             device_name,\n             device_type,\n             device_floor\n  ) AS s\n  GROUP BY dt,\n           device_name,\n           device_type,\n           device_floor\n  HAVING MAX(temperature_hourly_avg) - MIN(temperature_hourly_avg) >= 25.0\n)\nSELECT DISTINCT device_name,\n       device_type,\n       device_floor,\n       'WINTER'\nFROM temperature\nWHERE dt >= DATE '2018-12-01'\n  AND dt < DATE '2019-03-01'\nUNION\nSELECT DISTINCT device_name,\n       device_type,\n       device_floor,\n       'SUMMER'\nFROM temperature\nWHERE dt >= DATE '2019-06-01'\n  AND dt < DATE '2019-09-01';\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Q3.6: For each device category, what are the monthly power consumption metrics?\n\nSELECT yr,\n       mo,\n       SUM(coffee_hourly_avg) AS coffee_monthly_sum,\n       AVG(coffee_hourly_avg) AS coffee_monthly_avg,\n       SUM(printer_hourly_avg) AS printer_monthly_sum,\n       AVG(printer_hourly_avg) AS printer_monthly_avg,\n       SUM(projector_hourly_avg) AS projector_monthly_sum,\n       AVG(projector_hourly_avg) AS projector_monthly_avg,\n       SUM(vending_hourly_avg) AS vending_monthly_sum,\n       AVG(vending_hourly_avg) AS vending_monthly_avg\nFROM (\n  SELECT dt,\n         yr,\n         mo,\n         hr,\n         AVG(coffee) AS coffee_hourly_avg,\n         AVG(printer) AS printer_hourly_avg,\n         AVG(projector) AS projector_hourly_avg,\n         AVG(vending) AS vending_hourly_avg\n  FROM (\n    SELECT CAST(log_time AS DATE) AS dt,\n           EXTRACT(YEAR FROM log_time) AS yr,\n           EXTRACT(MONTH FROM log_time) AS mo,\n           EXTRACT(HOUR FROM log_time) AS hr,\n           CASE WHEN device_name LIKE 'coffee%' THEN event_value END AS coffee,\n           CASE WHEN device_name LIKE 'printer%' THEN event_value END AS printer,\n           CASE WHEN device_name LIKE 'projector%' THEN event_value END AS projector,\n           CASE WHEN device_name LIKE 'vending%' THEN event_value END AS vending\n    FROM logs3\n    WHERE device_type = 'meter'\n  ) AS r\n  GROUP BY dt,\n           yr,\n           mo,\n           hr\n) AS s\nGROUP BY yr,\n         mo\nORDER BY yr,\n         mo;\n")),(0,l.kt)("p",null,"The data is also available for interactive queries in the ",(0,l.kt)("a",{parentName:"p",href:"https://play.clickhouse.com/play?user=play"},"Playground"),", ",(0,l.kt)("a",{parentName:"p",href:"https://play.clickhouse.com/play?user=play#U0VMRUNUIG1hY2hpbmVfbmFtZSwKICAgICAgIE1JTihjcHUpIEFTIGNwdV9taW4sCiAgICAgICBNQVgoY3B1KSBBUyBjcHVfbWF4LAogICAgICAgQVZHKGNwdSkgQVMgY3B1X2F2ZywKICAgICAgIE1JTihuZXRfaW4pIEFTIG5ldF9pbl9taW4sCiAgICAgICBNQVgobmV0X2luKSBBUyBuZXRfaW5fbWF4LAogICAgICAgQVZHKG5ldF9pbikgQVMgbmV0X2luX2F2ZywKICAgICAgIE1JTihuZXRfb3V0KSBBUyBuZXRfb3V0X21pbiwKICAgICAgIE1BWChuZXRfb3V0KSBBUyBuZXRfb3V0X21heCwKICAgICAgIEFWRyhuZXRfb3V0KSBBUyBuZXRfb3V0X2F2ZwpGUk9NICgKICBTRUxFQ1QgbWFjaGluZV9uYW1lLAogICAgICAgICBDT0FMRVNDRShjcHVfdXNlciwgMC4wKSBBUyBjcHUsCiAgICAgICAgIENPQUxFU0NFKGJ5dGVzX2luLCAwLjApIEFTIG5ldF9pbiwKICAgICAgICAgQ09BTEVTQ0UoYnl0ZXNfb3V0LCAwLjApIEFTIG5ldF9vdXQKICBGUk9NIG1nYmVuY2gubG9nczEKICBXSEVSRSBtYWNoaW5lX25hbWUgSU4gKCdhbmFuc2knLCdhcmFnb2cnLCd1cmQnKQogICAgQU5EIGxvZ190aW1lID49IFRJTUVTVEFNUCAnMjAxNy0wMS0xMSAwMDowMDowMCcKKSBBUyByCkdST1VQIEJZIG1hY2hpbmVfbmFtZQ=="},"example"),"."))}g.isMDXComponent=!0},50954:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return d}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),o=t(24288),i=["components"],s={slug:"/zh/getting-started/example-datasets/brown-benchmark",sidebar_label:"Brown University Benchmark",description:"A new analytical benchmark for machine-generated log data",title:"Brown University Benchmark"},c=void 0,m={unversionedId:"zh/getting-started/example-datasets/brown-benchmark",id:"zh/getting-started/example-datasets/brown-benchmark",title:"Brown University Benchmark",description:"A new analytical benchmark for machine-generated log data",source:"@site/docs/zh/getting-started/example-datasets/brown-benchmark.mdx",sourceDirName:"zh/getting-started/example-datasets",slug:"/zh/getting-started/example-datasets/brown-benchmark",permalink:"/docs/zh/getting-started/example-datasets/brown-benchmark",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/getting-started/example-datasets/brown-benchmark.mdx",tags:[],version:"current",frontMatter:{slug:"/zh/getting-started/example-datasets/brown-benchmark",sidebar_label:"Brown University Benchmark",description:"A new analytical benchmark for machine-generated log data",title:"Brown University Benchmark"},sidebar:"chinese",previous:{title:"OnTime",permalink:"/docs/zh/getting-started/example-datasets/ontime"},next:{title:"Cell Towers",permalink:"/docs/zh/getting-started/example-datasets/cell-towers"}},u={},d=[],g={toc:d};function p(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)(o.default,{mdxType:"Content"}))}p.isMDXComponent=!0}}]);
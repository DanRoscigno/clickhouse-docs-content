"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[91980],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=i,k=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(k,r(r({ref:t},d),{},{components:a})):n.createElement(k,r({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},19828:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=a(87462),i=a(63366),o=(a(67294),a(3905)),r=["components"],s={sidebar_label:"Airbyte",sidebar_position:10,keywords:["clickhouse","airbyte","connect","integrate","etl","data integration"],description:"Stream data into ClickHouse using Airbyte data pipelines"},l="Connect Airbyte to ClickHouse",c={unversionedId:"en/integrations/airbyte-and-clickhouse",id:"en/integrations/airbyte-and-clickhouse",title:"Connect Airbyte to ClickHouse",description:"Stream data into ClickHouse using Airbyte data pipelines",source:"@site/docs/en/integrations/airbyte-and-clickhouse.md",sourceDirName:"en/integrations",slug:"/en/integrations/airbyte-and-clickhouse",permalink:"/docs/en/integrations/airbyte-and-clickhouse",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/airbyte-and-clickhouse.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_label:"Airbyte",sidebar_position:10,keywords:["clickhouse","airbyte","connect","integrate","etl","data integration"],description:"Stream data into ClickHouse using Airbyte data pipelines"},sidebar:"english",previous:{title:"Integrations",permalink:"/docs/en/integrations/"},next:{title:"Deepnote",permalink:"/docs/en/integrations/deepnote"}},d={},p=[{value:"1. Download and run Airbyte",id:"1-download-and-run-airbyte",level:2},{value:"2. Add ClickHouse as a destination",id:"2-add-clickhouse-as-a-destination",level:2},{value:"3. Add a dataset as a source",id:"3-add-a-dataset-as-a-source",level:2},{value:"4. Create a connection and load the dataset into ClickHouse",id:"4-create-a-connection-and-load-the-dataset-into-clickhouse",level:2}],u={toc:p};function m(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connect-airbyte-to-clickhouse"},"Connect Airbyte to ClickHouse"),(0,o.kt)("a",{href:"https://www.airbyte.com/",target:"_blank"},"Airbyte")," is an open-source data integration platform. It allows the creation of ",(0,o.kt)("a",{href:"https://airbyte.com/blog/why-the-future-of-etl-is-not-elt-but-el",target:"_blank"},"ELT")," data pipelines and is shipped with more than 140 out-of-the-box connectors. This step-by-step tutorial shows how to connect Airbyte to ClickHouse as a destination and load a sample dataset.",(0,o.kt)("h2",{id:"1-download-and-run-airbyte"},"1. Download and run Airbyte"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Airbyte runs on Docker and uses ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose"),". Make sure to download and install the latest versions of Docker.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Deploy Airbyte by cloning the official Github repository and running ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose up")," in your favorite terminal:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/airbytehq/airbyte.git\ncd airbyte\ndocker-compose up\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once you see the Airbyte banner in your terminal, you can connect to ",(0,o.kt)("a",{href:"http://localhost:8000",target:"_blank"},"localhost:8000")),(0,o.kt)("img",{src:a(77723).Z,class:"image",alt:"Airbyte banner",style:{width:"100%"}}),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Alternatively, you can signup and use ",(0,o.kt)("a",{href:"https://docs.airbyte.com/deploying-airbyte/on-cloud",target:"_blank"},"Airbyte Cloud")))))),(0,o.kt)("h2",{id:"2-add-clickhouse-as-a-destination"},"2. Add ClickHouse as a destination"),(0,o.kt)("p",null,"In this section, we will display how to add a ClickHouse instance as a destination."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start your ClickHouse server (Airbyte is compatible with ClickHouse version ",(0,o.kt)("inlineCode",{parentName:"p"},"21.8.10.19")," or above):"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"clickhouse-server start\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Within Airbyte, select the "Destinations" page and add a new destination:'),(0,o.kt)("img",{src:a(61100).Z,class:"image",alt:"Add a destination in Airbyte",style:{width:"100%"}})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Pick a name for your destination and select ClickHouse from the "Destination type" drop-down list:'),(0,o.kt)("img",{src:a(15826).Z,class:"image",alt:"ClickHouse destination creation in Airbyte",style:{width:"70%"}})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Fill out the "Set up the destination" form by providing your ClickHouse hostname and ports, database name, username and password and select if it\'s a TLS connection (equivalent to the ',(0,o.kt)("inlineCode",{parentName:"p"},"--secure")," flag in the  ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-client"),")."),(0,o.kt)("img",{src:a(18614).Z,class:"image",alt:"ClickHouse Destination form in Airbyte",style:{width:"100%"}})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Congratulations! you have now added ClickHouse as a destination in Airbyte."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In order to use ClickHouse as a destination, the user you'll use need to have the permissions to create databases, tables and insert rows. We recommend creating a dedicated user for Airbyte (eg. ",(0,o.kt)("inlineCode",{parentName:"p"},"my_airbyte_user"),") with the following permissions:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-SQL"},"GRANT CREATE ON * TO my_airbyte_user;\n")))),(0,o.kt)("h2",{id:"3-add-a-dataset-as-a-source"},"3. Add a dataset as a source"),(0,o.kt)("p",null,"The example dataset we will use is the ",(0,o.kt)("a",{href:"https://clickhouse.com/docs/en/getting-started/example-datasets/nyc-taxi/",target:"_blank"},"New York City Taxi Data")," (on ",(0,o.kt)("a",{href:"https://github.com/toddwschneider/nyc-taxi-data",target:"_blank"},"Github"),"). For this tutorial, we will use a subset of this dataset which corresponds to the month of July 2021."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Within Airbyte, select the "Sources" page and add a new source of type file.'),(0,o.kt)("img",{src:a(40631).Z,class:"image",alt:"Add a source in Airbyte",style:{width:"100%"}})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Fill out the "Set up the source" form by naming the source and providing the URL of the NYC Taxi July 2021 file (see below). Make sure to pick ',(0,o.kt)("inlineCode",{parentName:"p"},"csv")," as file format, ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTPS Public Web")," as Storage Provider and ",(0,o.kt)("inlineCode",{parentName:"p"},"nyc_taxi_072021")," as Dataset Name."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2021-07.csv\n")),(0,o.kt)("img",{src:a(72963).Z,class:"image",alt:"ClickHouse source creation in Airbyte",style:{width:"100%"}})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Congratulations! You have now added a source file in Airbyte."))),(0,o.kt)("h2",{id:"4-create-a-connection-and-load-the-dataset-into-clickhouse"},"4. Create a connection and load the dataset into ClickHouse"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Within Airbyte, select the "Connections" page and add a new connection'),(0,o.kt)("img",{src:a(24927).Z,class:"image",alt:"Add a connection in Airbyte",style:{width:"100%"}})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Select "Use existing source" and select the New York City Taxi Data, the select "Use existing destination" and select you ClickHouse instance.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Fill out the "Set up the connection" form by choosing a Replication Frequency (we will use ',(0,o.kt)("inlineCode",{parentName:"p"},"manual")," for this tutorial) and select ",(0,o.kt)("inlineCode",{parentName:"p"},"nyc_taxi_072021")," as the stream you want to sync. Make sure you pick ",(0,o.kt)("inlineCode",{parentName:"p"},"Normalized Tabular Data")," as a Normalization."),(0,o.kt)("img",{src:a(3699).Z,class:"image",alt:"Connection creation in Airbyte",style:{width:"100%"}})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Now that the connection is created, click on "Sync now" to trigger the data loading (since we picked ',(0,o.kt)("inlineCode",{parentName:"p"},"Manual")," as a Replication Frequency)"),(0,o.kt)("img",{src:a(99587).Z,class:"image",alt:"Sync now in Airbyte",style:{width:"100%"}}))),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Your data will start loading, you can expand the view to see Airbyte logs and progress. Once the operation finishes, you'll see a ",(0,o.kt)("inlineCode",{parentName:"p"},"Completed successfully")," message in the logs:"),(0,o.kt)("img",{src:a(65689).Z,class:"image",alt:"Completed succesfully",style:{width:"100%"}})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Connect to your ClickHouse instance using your preferred SQL Client and check the resulting table:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM nyc_taxi_072021\nLIMIT 10\n")),(0,o.kt)("p",{parentName:"li"},"The response should look like:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-response"},"Query id: 1dbe609f-9136-49cf-a642-51a2305e1027\n\n\u250c\u2500extra\u2500\u252c\u2500mta_tax\u2500\u252c\u2500VendorID\u2500\u252c\u2500RatecodeID\u2500\u252c\u2500tip_amount\u2500\u252c\u2500fare_amount\u2500\u252c\u2500DOLocationID\u2500\u252c\u2500PULocationID\u2500\u252c\u2500payment_type\u2500\u252c\u2500tolls_amount\u2500\u252c\u2500total_amount\u2500\u252c\u2500trip_distance\u2500\u252c\u2500passenger_count\u2500\u252c\u2500store_and_fwd_flag\u2500\u252c\u2500congestion_surcharge\u2500\u252c\u2500tpep_pickup_datetime\u2500\u252c\u2500improvement_surcharge\u2500\u252c\u2500tpep_dropoff_datetime\u2500\u252c\u2500_airbyte_ab_id\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500_airbyte_emitted_at\u2500\u252c\u2500_airbyte_normalized_at\u2500\u252c\u2500_airbyte_nyc_taxi_072021_hashid\u2500\u2500\u2510\n\u2502   3.5 \u2502     0.5 \u2502        1 \u2502          1 \u2502          0 \u2502        11.5 \u2502          237 \u2502          162 \u2502            2 \u2502            0 \u2502         15.8 \u2502           2.3 \u2502               1 \u2502               \u1d3a\u1d41\u1d38\u1d38 \u2502                  2.5 \u2502 2021-07-07 17:49:32  \u2502                   0.3 \u2502 2021-07-07 18:04:30   \u2502 00000005-a90c-41b7-8883-1ab75c0ad9da \u2502 2022-03-16 13:02:50.000 \u2502    2022-03-16 13:09:48 \u2502 DE8F3E68A49EC6CB00919501E6726335 \u2502\n\u2502     0 \u2502     0.5 \u2502        2 \u2502          1 \u2502         10 \u2502          23 \u2502          256 \u2502          233 \u2502            1 \u2502            0 \u2502         36.3 \u2502           5.4 \u2502               1 \u2502               \u1d3a\u1d41\u1d38\u1d38 \u2502                  2.5 \u2502 2021-07-15 07:23:36  \u2502                   0.3 \u2502 2021-07-15 07:50:28   \u2502 00001877-58ba-4614-90d4-4e5eba3cd593 \u2502 2022-03-16 13:04:46.000 \u2502    2022-03-16 13:09:48 \u2502 7915C6A4D33BCE7CF58D66CF1F2E1A61 \u2502\n\u2502   0.5 \u2502     0.5 \u2502        2 \u2502          1 \u2502          5 \u2502        30.5 \u2502          138 \u2502          137 \u2502            1 \u2502         6.55 \u2502        45.85 \u2502         10.93 \u2502               1 \u2502               \u1d3a\u1d41\u1d38\u1d38 \u2502                  2.5 \u2502 2021-07-18 05:00:28  \u2502                   0.3 \u2502 2021-07-18 05:18:54   \u2502 00001885-d93e-49d7-a92c-c09fd49e8b39 \u2502 2022-03-16 13:05:37.000 \u2502    2022-03-16 13:09:48 \u2502 A7346163EA6D6F0CBBA562CE1C5F9401 \u2502\n\u2502   2.5 \u2502     0.5 \u2502        1 \u2502          1 \u2502          0 \u2502           5 \u2502          100 \u2502          186 \u2502            2 \u2502            0 \u2502          8.3 \u2502             1 \u2502               1 \u2502               \u1d3a\u1d41\u1d38\u1d38 \u2502                  2.5 \u2502 2021-07-07 09:47:59  \u2502                   0.3 \u2502 2021-07-07 09:52:13   \u2502 000029d1-2e26-4d83-9efe-51cb182282d9 \u2502 2022-03-16 13:02:42.000 \u2502    2022-03-16 13:09:48 \u2502 C6389A8B2B6E24A74612F7FB53DAA9A0 \u2502\n\u2502     1 \u2502     0.5 \u2502        2 \u2502          1 \u2502          4 \u2502        19.5 \u2502           13 \u2502          161 \u2502            1 \u2502            0 \u2502         27.8 \u2502          5.06 \u2502               3 \u2502               \u1d3a\u1d41\u1d38\u1d38 \u2502                  2.5 \u2502 2021-07-12 17:54:49  \u2502                   0.3 \u2502 2021-07-12 18:17:43   \u2502 00003433-6886-4267-b8a9-da1b366537c4 \u2502 2022-03-16 13:04:06.000 \u2502    2022-03-16 13:09:48 \u2502 8E7C4E55F366901E4B6DFB02C3CAE838 \u2502\n\u2502     0 \u2502     0.5 \u2502        2 \u2502          1 \u2502          0 \u2502           7 \u2502          233 \u2502          140 \u2502            2 \u2502            0 \u2502         10.3 \u2502           1.3 \u2502               1 \u2502               \u1d3a\u1d41\u1d38\u1d38 \u2502                  2.5 \u2502 2021-07-15 13:06:34  \u2502                   0.3 \u2502 2021-07-15 13:13:24   \u2502 000049ae-b0c8-4e07-a3e6-ea19916fb6c3 \u2502 2022-03-16 13:04:51.000 \u2502    2022-03-16 13:09:48 \u2502 704F99F611D1A71713A4870406E28B54 \u2502\n\u2502   3.5 \u2502     0.5 \u2502        1 \u2502          1 \u2502        9.8 \u2502          35 \u2502          138 \u2502          230 \u2502            1 \u2502            0 \u2502         49.1 \u2502           9.9 \u2502               0 \u2502               \u1d3a\u1d41\u1d38\u1d38 \u2502                  2.5 \u2502 2021-07-09 16:09:24  \u2502                   0.3 \u2502 2021-07-09 16:45:15   \u2502 00004cc2-868e-4465-a24b-7efcb5da8cd4 \u2502 2022-03-16 13:03:20.000 \u2502    2022-03-16 13:09:48 \u2502 8AB6444AD089BA300B303447C4B70500 \u2502\n\u2502   2.5 \u2502     0.5 \u2502        1 \u2502          1 \u2502          3 \u2502          10 \u2502          232 \u2502          224 \u2502            1 \u2502            0 \u2502         16.3 \u2502           2.6 \u2502               0 \u2502               \u1d3a\u1d41\u1d38\u1d38 \u2502                  2.5 \u2502 2021-07-06 15:21:57  \u2502                   0.3 \u2502 2021-07-06 15:30:09   \u2502 00005277-bc5f-4d1e-b116-d3777fef87f7 \u2502 2022-03-16 13:02:33.000 \u2502    2022-03-16 13:09:48 \u2502 AC5A4F12E7EC61116F146DE90375A74B \u2502\n\u2502   0.5 \u2502     0.5 \u2502        2 \u2502          1 \u2502       2.34 \u2502         6.5 \u2502           42 \u2502           41 \u2502            1 \u2502            0 \u2502        10.14 \u2502          1.02 \u2502               1 \u2502               \u1d3a\u1d41\u1d38\u1d38 \u2502                    0 \u2502 2021-07-16 20:27:38  \u2502                   0.3 \u2502 2021-07-16 20:33:46   \u2502 0000571b-6698-43f4-878d-d0d3f91e40d1 \u2502 2022-03-16 13:05:16.000 \u2502    2022-03-16 13:09:48 \u2502 A447703038C0257801F7DA3CBBCA47CB \u2502\n\u2502     0 \u2502     0.5 \u2502        2 \u2502          1 \u2502          0 \u2502          24 \u2502          232 \u2502           48 \u2502            2 \u2502            0 \u2502         27.3 \u2502          6.74 \u2502               1 \u2502               \u1d3a\u1d41\u1d38\u1d38 \u2502                  2.5 \u2502 2021-07-10 15:00:11  \u2502                   0.3 \u2502 2021-07-10 15:27:38   \u2502 000060b7-76b5-4d73-ae7f-0c475f69078b \u2502 2022-03-16 13:03:35.000 \u2502    2022-03-16 13:09:48 \u2502 6A593070389760D2339DDBD76E913447 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*)\nFROM nyc_taxi_072021\n")),(0,o.kt)("p",{parentName:"li"},"The response is:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-response"},"Query id: a9172d39-50f7-421e-8330-296de0baa67e\n\n\u250c\u2500count()\u2500\u2510\n\u2502 2821515 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Notice that Airbyte automatically inferred the data types and added 4 columns to the destination table. These columns are used by Airbyte to manage the replication logic and log the operations. More details are available in the  ",(0,o.kt)("a",{href:"https://docs.airbyte.com/integrations/destinations/clickhouse#output-schema",target:"_blank"},"Airbyte official documentation"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"    `_airbyte_ab_id` String,\n    `_airbyte_emitted_at` DateTime64(3, 'GMT'),\n    `_airbyte_normalized_at` DateTime,\n    `_airbyte_nyc_taxi_072021_hashid` String\n")),(0,o.kt)("p",{parentName:"li"},"Now that the dataset is loaded on your ClickHouse instance, you can create an new table and use more suitable ClickHouse data types (",(0,o.kt)("a",{href:"https://clickhouse.com/docs/en/getting-started/example-datasets/nyc-taxi/",target:"_blank"},"more details"),")."))),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"Congratulations - you have successfully loaded the NYC taxi data into ClickHouse using Airbyte!")))}m.isMDXComponent=!0},77723:function(e,t,a){t.Z=a.p+"assets/images/airbyte_01-8a4808b16747a2abc55f1601ae681d9a.png"},61100:function(e,t,a){t.Z=a.p+"assets/images/airbyte_02-ba170471e3d9d54e3e7ebc963ef04344.png"},15826:function(e,t,a){t.Z=a.p+"assets/images/airbyte_03-ec6ca33fc2f62c7ea1785399ca810d66.png"},18614:function(e,t,a){t.Z=a.p+"assets/images/airbyte_04-5799ab0dac0139301ff05cdfeb7c1406.png"},40631:function(e,t,a){t.Z=a.p+"assets/images/airbyte_05-83d5c46b9528bf6a07d19f8fa1d7e8d6.png"},72963:function(e,t,a){t.Z=a.p+"assets/images/airbyte_06-38d5049005d499833a9c9ee3b4948698.png"},24927:function(e,t,a){t.Z=a.p+"assets/images/airbyte_07-298457848e774ea3c853ecf28432665d.png"},3699:function(e,t,a){t.Z=a.p+"assets/images/airbyte_08-d8f0f9619a832e4023f1df9f770874b6.png"},99587:function(e,t,a){t.Z=a.p+"assets/images/airbyte_09-8e6cdf1d1840fff7014bb3b68e5e9654.png"},65689:function(e,t,a){t.Z=a.p+"assets/images/airbyte_10-02497f40327adc0d851aa1e1894b4ef8.png"}}]);
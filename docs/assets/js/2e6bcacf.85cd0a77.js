"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[99562],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return h}});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var s=n.createContext({}),c=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),p=c(a),h=o,d=p["".concat(s,".").concat(h)]||p[h]||k[h]||r;return a?n.createElement(d,l(l({ref:e},u),{},{components:a})):n.createElement(d,l({ref:e},u))}));function h(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,l=new Array(r);l[0]=p;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},17448:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return k}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),l=["components"],i={sidebar_label:"Tableau",sidebar_position:205,keywords:["clickhouse","tableau","connect","integrate","ui"],description:"Tableau can use ClickHouse databases and tables as a data source."},s="Connecting Tableau to ClickHouse",c={unversionedId:"en/connect-a-ui/tableau-and-clickhouse",id:"en/connect-a-ui/tableau-and-clickhouse",title:"Connecting Tableau to ClickHouse",description:"Tableau can use ClickHouse databases and tables as a data source.",source:"@site/docs/en/connect-a-ui/tableau-and-clickhouse.md",sourceDirName:"en/connect-a-ui",slug:"/en/connect-a-ui/tableau-and-clickhouse",permalink:"/en/connect-a-ui/tableau-and-clickhouse",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/en/connect-a-ui/tableau-and-clickhouse.md",tags:[],version:"current",sidebarPosition:205,frontMatter:{sidebar_label:"Tableau",sidebar_position:205,keywords:["clickhouse","tableau","connect","integrate","ui"],description:"Tableau can use ClickHouse databases and tables as a data source."},sidebar:"english",previous:{title:"Superset",permalink:"/en/connect-a-ui/superset-and-clickhouse"},next:{title:"User Guides",permalink:"/en/guides"}},u={},k=[{value:"1.  Download the JDBC Driver",id:"1--download-the-jdbc-driver",level:2},{value:"3. Download the Connector",id:"3-download-the-connector",level:2},{value:"4.  Configure a ClickHouse data source in Tableau",id:"4--configure-a-clickhouse-data-source-in-tableau",level:2},{value:"5. Building Visualizations in Tableau",id:"5-building-visualizations-in-tableau",level:2}],p={toc:k};function h(t){var e=t.components,a=(0,o.Z)(t,l);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connecting-tableau-to-clickhouse"},"Connecting Tableau to ClickHouse"),(0,r.kt)("p",null,"Tableau can use ClickHouse databases and tables as a data source. This requires a special JDBC driver to be downloaded and saved into a specific location where Tableau can find it."),(0,r.kt)("h2",{id:"1--download-the-jdbc-driver"},"1.  Download the JDBC Driver"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The Tableau connector is an extension of the ClickHouse JDBC driver, so you need to download the JDBC driver and save it in the correct folder.")),(0,r.kt)("p",null,'{{< detail-tag "Show instructions" "2" >}}'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the latest version of the ClickHouse JDBC driver at ",(0,r.kt)("a",{href:"",target:"_blank"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse/clickhouse-jdbc/releases/"},"https://github.com/ClickHouse/clickhouse-jdbc/releases/")),". (We used ",(0,r.kt)("a",{href:"https://github.com/ClickHouse/clickhouse-jdbc/releases/download/v0.3.1-patch/clickhouse-jdbc-0.3.1-patch-shaded.jar"},"this version of the driver")," for this tutorial.) ")),(0,r.kt)("p",null,"{{% notice note %}}\nMake sure you download the ",(0,r.kt)("strong",{parentName:"p"},"clickhouse-jdbc-x.x.x-shaded.jar")," JAR file.\n{{% /notice %}}"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Store the JDBC driver in the following folder (based on your OS):"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operating System"),(0,r.kt)("th",{parentName:"tr",align:null},"Destination folder"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MacOS"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"~/Library/Tableau/Drivers"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Windows"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"C:\\Program Files\\Tableau\\Drivers"))))),(0,r.kt)("br",null),(0,r.kt)("p",{parentName:"li"},"That's it. The driver will be found the next time you start Tableau."))),(0,r.kt)("p",null,"{{< /detail-tag >}}"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"3-download-the-connector"},"3. Download the Connector"),(0,r.kt)("p",null,"ANALYTIKA PLUS has built a handy connector for simplifying connections to ClickHouse from Tableau. You can ",(0,r.kt)("a",{href:"https://github.com/analytikaplus/clickhouse-tableau-connector-jdbc",target:"_blank"}," view the details of the project in Github"),". Follow these steps to download the connector..."),(0,r.kt)("p",null,'{{< detail-tag "Show instructions" "3" >}}'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The connector is built in a ",(0,r.kt)("strong",{parentName:"p"},"taco")," file (short for ",(0,r.kt)("strong",{parentName:"p"},"Ta"),"bleau ",(0,r.kt)("strong",{parentName:"p"},"Co"),"nnector). Download the latest version at ",(0,r.kt)("a",{href:"https://github.com/analytikaplus/clickhouse-tableau-connector-jdbc/releases/",target:"_blank"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/analytikaplus/clickhouse-tableau-connector-jdbc/releases/"},"https://github.com/analytikaplus/clickhouse-tableau-connector-jdbc/releases/")),". (For this lesson, we downloaded ",(0,r.kt)("strong",{parentName:"p"},"v0.1.1")," of ",(0,r.kt)("strong",{parentName:"p"},"clickhouse_jdbc.taco"),".)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Store ",(0,r.kt)("strong",{parentName:"p"},"clickhouse_jdbc.taco")," in the following folder (based on your OS):"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operating System"),(0,r.kt)("th",{parentName:"tr",align:null},"Destination folder"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MacOS"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"~/Documents/My Tableau Repository/Connectors"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Windows"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"C:\\Users","[","Windows User]\\Documents\\My Tableau Repository\\Connectors"))))))),(0,r.kt)("br",null),"The connector is now ready to go.",(0,r.kt)("p",null,"{{< /detail-tag >}}"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"4--configure-a-clickhouse-data-source-in-tableau"},"4.  Configure a ClickHouse data source in Tableau"),(0,r.kt)("p",null,"Now that you have the driver and connector in the approriate folders on your machine, let's see how to define a data source in Tableau that connects to the ",(0,r.kt)("strong",{parentName:"p"},"TPCD")," database in ClickHouse."),(0,r.kt)("p",null,'{{< detail-tag "Show instructions" "4" >}}'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start Tableau. (If you already had it running, then restart it.)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the left-side menu, click on ",(0,r.kt)("strong",{parentName:"p"},"More")," under the ",(0,r.kt)("strong",{parentName:"p"},"To a Server")," section. If everything worked properly, you should see ",(0,r.kt)("strong",{parentName:"p"},"ClickHouse (JDBC) by ANALYTIKA PLUS")," in the list of installed connectors:"))),(0,r.kt)("img",{src:"https://clickhouse.com/learn/lessons/connect-tableau-to-clickhouse/images/connecttoserver.png",width:"100%",alt:"ClickHouse (JDBC) by ANALYTIKA PLUS"}),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"ClickHouse (JDBC) by ANALYTIKA PLUS"),"  and a dialog window pops up. Enter the following details:"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Server"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"localhost"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Port"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"8123"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Database"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"default"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Username"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"default"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"leave blank"))))))),(0,r.kt)("br",null),(0,r.kt)("p",null,"Your settings should look like:"),(0,r.kt)("img",{src:"https://clickhouse.com/learn/lessons/connect-tableau-to-clickhouse/images/clickhousesettings.png",width:"100%",alt:"ClickHouse Settings"}),(0,r.kt)("p",null,"{{% notice note %}}\nOur ClickHouse database is named ",(0,r.kt)("strong",{parentName:"p"},"TPCD"),", but you must set the ",(0,r.kt)("strong",{parentName:"p"},"Database")," to ",(0,r.kt)("strong",{parentName:"p"},"default")," in the dialog above, then select ",(0,r.kt)("strong",{parentName:"p"},"TPCD")," for the ",(0,r.kt)("strong",{parentName:"p"},"Schema")," in the next step. (This is likely due to a bug in the connector, so this behavior could change, but for now you must use ",(0,r.kt)("strong",{parentName:"p"},"default")," as the database.)\n{{% /notice %}}"),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Sign In")," button and you should see a new Tableau workbook:")),(0,r.kt)("img",{src:"https://clickhouse.com/learn/lessons/connect-tableau-to-clickhouse/images/newworkbook.png",width:"100%",alt:"New Workbook",border:"1px"}),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"TPCD")," from the ",(0,r.kt)("strong",{parentName:"li"},"Schema")," dropdown and you should see the list of tables in ",(0,r.kt)("strong",{parentName:"li"},"TPCD"),":")),(0,r.kt)("img",{src:"https://clickhouse.com/learn/lessons/connect-tableau-to-clickhouse/images/tpcdschema.png",width:"100%",alt:"Select TPCD for the Schema",border:"1px"}),(0,r.kt)("p",null,"You are now ready to build some visualizations in Tableau!"),(0,r.kt)("p",null,"{{< /detail-tag >}}"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"5-building-visualizations-in-tableau"},"5. Building Visualizations in Tableau"),(0,r.kt)("p",null,"Now that have a ClickHouse data source configured in Tableau, let's visualize the data..."),(0,r.kt)("p",null,'{{< detail-tag "Show instructions" "5" >}}'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Drag the ",(0,r.kt)("strong",{parentName:"li"},"CUSTOMER")," table onto the workbook. Notice the columns appear, but the data table is empty:")),(0,r.kt)("img",{src:"https://clickhouse.com/learn/lessons/connect-tableau-to-clickhouse/images/workbook1.png",width:"100%",alt:"",border:"1px"}),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Update Now")," button and 100 rows from ",(0,r.kt)("strong",{parentName:"li"},"CUSTOMER")," will populate the table.")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Drag the ",(0,r.kt)("strong",{parentName:"li"},"ORDERS")," table into the workbook, then set ",(0,r.kt)("strong",{parentName:"li"},"Custkey")," as the relationship field between the two tables:")),(0,r.kt)("img",{src:"https://clickhouse.com/learn/lessons/connect-tableau-to-clickhouse/images/workbook2.png",width:"100%",alt:"",border:"1px"}),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"You now have the ",(0,r.kt)("strong",{parentName:"li"},"ORDERS")," and ",(0,r.kt)("strong",{parentName:"li"},"LINEITEM")," tables associated with each other as your data source, so you can use this relationship to answer questions about the data. Select the ",(0,r.kt)("strong",{parentName:"li"},"Sheet 1")," tab at the bottom of the workbook.")),(0,r.kt)("img",{src:"https://clickhouse.com/learn/lessons/connect-tableau-to-clickhouse/images/workbook3.png",width:"100%",alt:"",border:"1px"}),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Suppose you want to know how many specific items were ordered each year. Drag ",(0,r.kt)("strong",{parentName:"li"},"Orderdate")," from ",(0,r.kt)("strong",{parentName:"li"},"ORDERS")," into the ",(0,r.kt)("strong",{parentName:"li"},"Columns")," section (the horizontal field), then drag ",(0,r.kt)("strong",{parentName:"li"},"Quantity")," from ",(0,r.kt)("strong",{parentName:"li"},"LINEITEM")," into the ",(0,r.kt)("strong",{parentName:"li"},"Rows"),". Tableau will generate the following line chart:")),(0,r.kt)("img",{src:"https://clickhouse.com/learn/lessons/connect-tableau-to-clickhouse/images/workbook4.png",width:"100%",alt:"",border:"1px"}),(0,r.kt)("p",null,"Not a very exciting line chart, but the dataset was generated by a script and built for testing query performance, so you will notice there is not a lot of variations in the simulated orders of the TCPD data."),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Suppose you want to know the average order amount (in dollars) by quarter and also by shipping mode (air, mail, ship, truck, etc.):"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"New Worksheet")," tab create a new sheet"),(0,r.kt)("li",{parentName:"ul"},"Drag ",(0,r.kt)("strong",{parentName:"li"},"OrderDate")," from ",(0,r.kt)("strong",{parentName:"li"},"ORDERS")," into ",(0,r.kt)("strong",{parentName:"li"},"Columns")," and change it from ",(0,r.kt)("strong",{parentName:"li"},"Year")," to ",(0,r.kt)("strong",{parentName:"li"},"Quarter")),(0,r.kt)("li",{parentName:"ul"},"Drag ",(0,r.kt)("strong",{parentName:"li"},"Shipmode")," from ",(0,r.kt)("strong",{parentName:"li"},"LINEITEM")," into ",(0,r.kt)("strong",{parentName:"li"},"Rows")," ")))),(0,r.kt)("p",null,"You should see the following:"),(0,r.kt)("img",{src:"https://clickhouse.com/learn/lessons/connect-tableau-to-clickhouse/images/workbook5.png",width:"100%",alt:"",border:"1px"}),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("strong",{parentName:"li"},"Abc")," values are just filling in the space until you drag a metric onto the table. Drag ",(0,r.kt)("strong",{parentName:"li"},"Totalprice")," from ",(0,r.kt)("strong",{parentName:"li"},"ORDERS")," onto the table. Notice the default calculation is to ",(0,r.kt)("strong",{parentName:"li"},"SUM")," the ",(0,r.kt)("strong",{parentName:"li"},"Totalpricess"),":")),(0,r.kt)("img",{src:"https://clickhouse.com/learn/lessons/connect-tableau-to-clickhouse/images/workbook6.png",width:"100%",alt:"",border:"1px"}),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"SUM")," and change the ",(0,r.kt)("strong",{parentName:"li"},"Measure")," to ",(0,r.kt)("strong",{parentName:"li"},"Average"),". From the same dropdown menu, select ",(0,r.kt)("strong",{parentName:"li"},"Format")," change the ",(0,r.kt)("strong",{parentName:"li"},"Numbers")," to ",(0,r.kt)("strong",{parentName:"li"},"Currency (Standard)"),":")),(0,r.kt)("img",{src:"https://clickhouse.com/learn/lessons/connect-tableau-to-clickhouse/images/workbook7.png",width:"100%",alt:"",border:"1px"}),(0,r.kt)("p",null,"  Well done! You have successfully connected Tableau to ClickHouse, and you have opened up a whole world of possibilities for analyzing and visualizing your ClickHouse data."),(0,r.kt)("p",null,"{{% notice note %}}\nTableau is great, and we love that it connects so nicely to ClickHouse! If you are new to Tableau, ",(0,r.kt)("a",{href:"https://help.tableau.com/current/pro/desktop/en-us/gettingstarted_overview.htm",target:"_blank"},"check out their documentation")," for help on building dashboards and visualizations.\n{{% /notice %}}"),(0,r.kt)("p",null,"{{< /detail-tag >}}"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Summary:")," You can connect Tableau to ClickHouse using the generic ODBC/JDBC ClickHouse driver, but we really like how this tool from ANALYTIKA PLUS simplifies the process of setting up the connection. If you have any issues with the connector, feel free to reach out to ANALYTIKA PLUS on ",(0,r.kt)("a",{href:"https://github.com/analytikaplus/clickhouse-tableau-connector-jdbc/issues",target:"_blank"},"GitHub"),"."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What's next:")," Check out the following lessons to continue your journey: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{href:"https://clickhouse.com/learn/lessons/logsvector"},"Ingest Nginx Logs into ClickHouse using Vector")," lesson demonstrates how to stream a log file into ClickHouse"),(0,r.kt)("li",{parentName:"ul"},"Check out ",(0,r.kt)("a",{href:"https://clickhouse.com/learn/lessons/whatsnew-clickhouse-21.10"},"What's New in ClickHouse 21.10")),(0,r.kt)("li",{parentName:"ul"},"View all of our lessons on the ",(0,r.kt)("a",{href:"https://clickhouse.com/learn/lessons/"},"Learn ClickHouse")," home page")))}h.isMDXComponent=!0}}]);
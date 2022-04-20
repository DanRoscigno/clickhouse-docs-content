"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[45086],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5264:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={sidebar_position:46,sidebar_label:"input"},c="input",u={unversionedId:"en/sql-reference/table-functions/input",id:"en/sql-reference/table-functions/input",title:"input",description:"input}",source:"@site/docs/en/sql-reference/table-functions/input.md",sourceDirName:"en/sql-reference/table-functions",slug:"/en/sql-reference/table-functions/input",permalink:"/docs/en/sql-reference/table-functions/input",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/table-functions/input.md",tags:[],version:"current",sidebarPosition:46,frontMatter:{sidebar_position:46,sidebar_label:"input"},sidebar:"english",previous:{title:"s3",permalink:"/docs/en/sql-reference/table-functions/s3"},next:{title:"generateRandom",permalink:"/docs/en/sql-reference/table-functions/generate"}},s={},p=[],f={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"input"},"input"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"input(structure)")," - table function that allows effectively convert and insert data sent to the\nserver with given structure to the table with another structure."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"structure")," - structure of data sent to the server in following format ",(0,i.kt)("inlineCode",{parentName:"p"},"'column1_name column1_type, column2_name column2_type, ...'"),".\nFor example, ",(0,i.kt)("inlineCode",{parentName:"p"},"'id UInt32, name String'"),"."),(0,i.kt)("p",null,"This function can be used only in ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT SELECT")," query and only once but otherwise behaves like ordinary table function\n(for example, it can be used in subquery, etc.)."),(0,i.kt)("p",null,"Data can be sent in any way like for ordinary ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," query and passed in any available ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats#formats"},"format"),"\nthat must be specified in the end of query (unlike ordinary ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT SELECT"),")."),(0,i.kt)("p",null,"The main feature of this function is that when server receives data from client it simultaneously converts it\naccording to the list of expressions in the ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," clause and inserts into the target table. Temporary table\nwith all transferred data is not created."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Let the ",(0,i.kt)("inlineCode",{parentName:"li"},"test")," table has the following structure ",(0,i.kt)("inlineCode",{parentName:"li"},"(a String, b String)"),"\nand data in ",(0,i.kt)("inlineCode",{parentName:"li"},"data.csv")," has a different structure ",(0,i.kt)("inlineCode",{parentName:"li"},"(col1 String, col2 Date, col3 Int32)"),". Query for insert\ndata from the ",(0,i.kt)("inlineCode",{parentName:"li"},"data.csv")," into the ",(0,i.kt)("inlineCode",{parentName:"li"},"test")," table with simultaneous conversion looks like this:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat data.csv | clickhouse-client --query=\"INSERT INTO test SELECT lower(col1), col3 * col3 FROM input('col1 String, col2 Date, col3 Int32') FORMAT CSV\";\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"data.csv")," contains data of the same structure ",(0,i.kt)("inlineCode",{parentName:"li"},"test_structure")," as the table ",(0,i.kt)("inlineCode",{parentName:"li"},"test")," then these two queries are equal:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ cat data.csv | clickhouse-client --query="INSERT INTO test FORMAT CSV"\n$ cat data.csv | clickhouse-client --query="INSERT INTO test SELECT * FROM input(\'test_structure\') FORMAT CSV"\n')))}d.isMDXComponent=!0}}]);
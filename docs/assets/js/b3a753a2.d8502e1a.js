"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[22977],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},20488:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={slug:"/en/guides/developer/mutations",sidebar_label:"Updating and Deleting Data",sidebar_position:99,keywords:["update","delete","mutation"]},s="Updating and Deleting ClickHouse Data",p={unversionedId:"en/guides/developer/mutations",id:"en/guides/developer/mutations",title:"Updating and Deleting ClickHouse Data",description:'Although ClickHouse is geared toward high volume analytic workloads, it is possible in some situations to modify or delete existing data.  These operations are labeled "mutations" and are executed using the ALTER TABLE command.',source:"@site/docs/en/guides/developer/mutations.md",sourceDirName:"en/guides/developer",slug:"/en/guides/developer/mutations",permalink:"/docs/en/guides/developer/mutations",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/guides/developer/mutations.md",tags:[],version:"current",sidebarPosition:99,frontMatter:{slug:"/en/guides/developer/mutations",sidebar_label:"Updating and Deleting Data",sidebar_position:99,keywords:["update","delete","mutation"]},sidebar:"english",previous:{title:"Full-text Search with Quickwit",permalink:"/docs/en/guides/developer/full-text-search"},next:{title:"Working with JSON",permalink:"/docs/en/guides/developer/working-with-json"}},u={},d=[{value:"Updating Existing Data",id:"updating-existing-data",level:2},{value:"Deleting Data",id:"deleting-data",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"updating-and-deleting-clickhouse-data"},"Updating and Deleting ClickHouse Data"),(0,r.kt)("p",null,'Although ClickHouse is geared toward high volume analytic workloads, it is possible in some situations to modify or delete existing data.  These operations are labeled "mutations" and are executed using the ',(0,r.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," command."),(0,r.kt)("h2",{id:"updating-existing-data"},"Updating Existing Data"),(0,r.kt)("p",null,"From ClickHouse client, enter your update ",(0,r.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," command in this form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [<database>.]<table> UPDATE <column> = <expression> WHERE <filter_expr>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<expression>")," is the new value for the column where the ",(0,r.kt)("inlineCode",{parentName:"p"},"<filter_expr>")," is satisfied.  The ",(0,r.kt)("inlineCode",{parentName:"p"},"<expression>")," must be the same datatype as the column or be convertable to the same datatype using the ",(0,r.kt)("inlineCode",{parentName:"p"},"CAST")," operator.  The ",(0,r.kt)("inlineCode",{parentName:"p"},"<filter_expr>")," should return a UInt8 (zero or non-zero) value for each row of the data.  Multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE <column>")," statements can be combined in a single ",(0,r.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," command separated by commas."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A mutation like this allows updating replacing visitor_ids with new ones using a dictionary lookup:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE website.clicks UPDATE visitor_id = getDict('visitors', 'new_visitor_id', visitor_id) WHERE visit_date < '2022-01-01'\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Modifying multiple values in one command can be more efficient than multiple commands:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE website.clicks UPDATE url = substring(url, position(url, '://') + 3), visitor_id = new_visit_id WHERE visit_date < '2022-01-01'\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Mutations can be exectuted ",(0,r.kt)("inlineCode",{parentName:"p"},"ON CLUSTER")," for sharded tables:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE clicks ON CLUSTER main_cluster UPDATE click_count = click_count / 2 WHERE visitor_id ILIKE '%robot%'\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It is not possible to update columns that are part of the primary or sorting key.")),(0,r.kt)("h2",{id:"deleting-data"},"Deleting Data"),(0,r.kt)("p",null,"As of ClickHouse 22.8, the SQL standard ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/delete"},(0,r.kt)("inlineCode",{parentName:"a"},"DELETE FROM")," command")," is supported for MergeTree family tables. This allows you to delete rows using the syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM [<database>.]<table> WHERE <filter_expr>\n")),(0,r.kt)("p",null,"If using another table engine, you will need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," command to delete rows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [<database>.]<table> DELETE WHERE <filter_expr>\n")),(0,r.kt)("p",null,"Again ",(0,r.kt)("inlineCode",{parentName:"p"},"<filter_expr>")," should return a UInt8 value for each row of data."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete any records where a column is in an array of values: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE website.clicks DELETE WHERE visitor_id in (253, 1002, 4277)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"What does this query alter?"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE clicks ON CLUSTER main_cluster WHERE visit_date < '2022-01-02 15:00:00' AND page_id = '573'\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")),(0,r.kt)("p",null,"To delete all of the data in a table, it is more efficient to use the command ",(0,r.kt)("inlineCode",{parentName:"p"},"TRUNCATE TABLE [<database].]<table>")," command.  This command can also be executed ",(0,r.kt)("inlineCode",{parentName:"p"},"ON CLUSTER"),"."))}m.isMDXComponent=!0}}]);
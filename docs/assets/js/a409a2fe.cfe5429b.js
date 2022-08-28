"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[58317],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return N}});var l=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=l.createContext({}),o=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=o(e.components);return l.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},c=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=o(t),N=a,k=c["".concat(p,".").concat(N)]||c[N]||m[N]||r;return t?l.createElement(k,u(u({ref:n},s),{},{components:t})):l.createElement(k,u({ref:n},s))}));function N(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,u=new Array(r);u[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var o=2;o<r;o++)u[o]=t[o];return l.createElement.apply(null,u)}return l.createElement.apply(null,t)}c.displayName="MDXCreateElement"},34572:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return m}});var l=t(87462),a=t(63366),r=(t(67294),t(3905)),u=["components"],i={slug:"/en/sql-reference/functions/functions-for-nulls",sidebar_position:63,sidebar_label:"Nullable"},p="Functions for Working with Nullable Values",o={unversionedId:"en/sql-reference/functions/functions-for-nulls",id:"en/sql-reference/functions/functions-for-nulls",title:"Functions for Working with Nullable Values",description:"isNull",source:"@site/docs/en/sql-reference/functions/functions-for-nulls.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/functions-for-nulls",permalink:"/docs/en/sql-reference/functions/functions-for-nulls",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/functions/functions-for-nulls.md",tags:[],version:"current",sidebarPosition:63,frontMatter:{slug:"/en/sql-reference/functions/functions-for-nulls",sidebar_position:63,sidebar_label:"Nullable"},sidebar:"english",previous:{title:"S2 Geometry",permalink:"/docs/en/sql-reference/functions/geo/s2"},next:{title:"Machine Learning",permalink:"/docs/en/sql-reference/functions/machine-learning-functions"}},s={},m=[{value:"isNull",id:"isnull",level:2},{value:"isNotNull",id:"isnotnull",level:2},{value:"coalesce",id:"coalesce",level:2},{value:"ifNull",id:"ifnull",level:2},{value:"nullIf",id:"nullif",level:2},{value:"assumeNotNull",id:"assumenotnull",level:2},{value:"toNullable",id:"tonullable",level:2}],c={toc:m};function N(e){var n=e.components,t=(0,a.Z)(e,u);return(0,r.kt)("wrapper",(0,l.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"functions-for-working-with-nullable-values"},"Functions for Working with Nullable Values"),(0,r.kt)("h2",{id:"isnull"},"isNull"),(0,r.kt)("p",null,"Checks whether the argument is ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/syntax#null-literal"},"NULL"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"isNull(x)\n")),(0,r.kt)("p",null,"Alias: ",(0,r.kt)("inlineCode",{parentName:"p"},"ISNULL"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x")," \u2014 A value with a non-compound data type.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1")," if ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0")," if ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," is not ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"Input table"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500\u2500\u2500\u2500y\u2500\u2510\n\u2502 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 2 \u2502    3 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT x FROM t_null WHERE isNull(y);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u2510\n\u2502 1 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"isnotnull"},"isNotNull"),(0,r.kt)("p",null,"Checks whether the argument is ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/syntax#null-literal"},"NULL"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"isNotNull(x)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x")," \u2014 A value with a non-compound data type.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0")," if ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1")," if ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," is not ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"Input table"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500\u2500\u2500\u2500y\u2500\u2510\n\u2502 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 2 \u2502    3 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT x FROM t_null WHERE isNotNull(y);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u2510\n\u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"coalesce"},"coalesce"),(0,r.kt)("p",null,"Checks from left to right whether ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," arguments were passed and returns the first non-",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," argument."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"coalesce(x,...)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Any number of parameters of a non-compound type. All parameters must be compatible by data type.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned values")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The first non-",(0,r.kt)("inlineCode",{parentName:"li"},"NULL")," argument."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),", if all arguments are ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"Consider a list of contacts that may specify multiple ways to contact a customer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u252c\u2500mail\u2500\u252c\u2500phone\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500icq\u2500\u2510\n\u2502 client 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502 123-45-67 \u2502  123 \u2502\n\u2502 client 2 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502 \u1d3a\u1d41\u1d38\u1d38      \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"mail")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"phone")," fields are of type String, but the ",(0,r.kt)("inlineCode",{parentName:"p"},"icq")," field is ",(0,r.kt)("inlineCode",{parentName:"p"},"UInt32"),", so it needs to be converted to ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"."),(0,r.kt)("p",null,"Get the first available contact method for the customer from the contact list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name, coalesce(mail, phone, CAST(icq,'Nullable(String)')) FROM aBook;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u252c\u2500coalesce(mail, phone, CAST(icq, 'Nullable(String)'))\u2500\u2510\n\u2502 client 1 \u2502 123-45-67                                            \u2502\n\u2502 client 2 \u2502 \u1d3a\u1d41\u1d38\u1d38                                                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"ifnull"},"ifNull"),(0,r.kt)("p",null,"Returns an alternative value if the main argument is ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ifNull(x,alt)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x")," \u2014 The value to check for ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"alt")," \u2014 The value that the function returns if ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned values")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The value ",(0,r.kt)("inlineCode",{parentName:"li"},"x"),", if ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," is not ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),"."),(0,r.kt)("li",{parentName:"ul"},"The value ",(0,r.kt)("inlineCode",{parentName:"li"},"alt"),", if ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT ifNull('a', 'b');\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500ifNull('a', 'b')\u2500\u2510\n\u2502 a                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT ifNull(NULL, 'b');\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500ifNull(NULL, 'b')\u2500\u2510\n\u2502 b                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"nullif"},"nullIf"),(0,r.kt)("p",null,"Returns ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," if the arguments are equal."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"nullIf(x, y)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments:")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," \u2014 Values for comparison. They must be compatible types, or ClickHouse will generate an exception."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned values")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),", if the arguments are equal."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," value, if the arguments are not equal.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT nullIf(1, 1);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500nullIf(1, 1)\u2500\u2510\n\u2502         \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT nullIf(1, 2);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500nullIf(1, 2)\u2500\u2510\n\u2502            1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"assumenotnull"},"assumeNotNull"),(0,r.kt)("p",null,"Results in an equivalent non-",(0,r.kt)("inlineCode",{parentName:"p"},"Nullable")," value for a ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable")," type. In case the original value is ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," the result is undetermined. See also ",(0,r.kt)("inlineCode",{parentName:"p"},"ifNull")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"coalesce")," functions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"assumeNotNull(x)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x")," \u2014 The original value.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned values")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The original value from the non-",(0,r.kt)("inlineCode",{parentName:"li"},"Nullable")," type, if it is not ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),"."),(0,r.kt)("li",{parentName:"ul"},"Implementation specific result if the original value was ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"Consider the ",(0,r.kt)("inlineCode",{parentName:"p"},"t_null")," table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE TABLE t_null;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500statement\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 CREATE TABLE default.t_null ( x Int8,  y Nullable(Int8)) ENGINE = TinyLog \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500\u2500\u2500\u2500y\u2500\u2510\n\u2502 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 2 \u2502    3 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Apply the ",(0,r.kt)("inlineCode",{parentName:"p"},"assumeNotNull")," function to the ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," column."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT assumeNotNull(y) FROM t_null;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500assumeNotNull(y)\u2500\u2510\n\u2502                0 \u2502\n\u2502                3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toTypeName(assumeNotNull(y)) FROM t_null;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500toTypeName(assumeNotNull(y))\u2500\u2510\n\u2502 Int8                         \u2502\n\u2502 Int8                         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"tonullable"},"toNullable"),(0,r.kt)("p",null,"Converts the argument type to ",(0,r.kt)("inlineCode",{parentName:"p"},"Nullable"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"toNullable(x)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x")," \u2014 The value of any non-compound type.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The input value with a ",(0,r.kt)("inlineCode",{parentName:"li"},"Nullable")," type.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toTypeName(10);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500toTypeName(10)\u2500\u2510\n\u2502 UInt8          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toTypeName(toNullable(10));\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500toTypeName(toNullable(10))\u2500\u2510\n\u2502 Nullable(UInt8)            \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}N.isMDXComponent=!0}}]);
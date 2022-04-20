"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[61575],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},92178:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={sidebar_position:36,sidebar_label:"Comparison"},c="Comparison Functions",l={unversionedId:"en/sql-reference/functions/comparison-functions",id:"en/sql-reference/functions/comparison-functions",title:"Comparison Functions",description:"comparison-functions}",source:"@site/docs/en/sql-reference/functions/comparison-functions.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/comparison-functions",permalink:"/docs/en/sql-reference/functions/comparison-functions",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/functions/comparison-functions.md",tags:[],version:"current",sidebarPosition:36,frontMatter:{sidebar_position:36,sidebar_label:"Comparison"},sidebar:"english",previous:{title:"Arrays",permalink:"/docs/en/sql-reference/functions/array-functions"},next:{title:"Logical",permalink:"/docs/en/sql-reference/functions/logical-functions"}},u={},p=[{value:"equals, a = b and a == b operator",id:"function-equals",level:2},{value:"notEquals, a != b and a &lt;&gt; b operator",id:"function-notequals",level:2},{value:"less, &lt; operator",id:"function-less",level:2},{value:"greater, &gt; operator",id:"function-greater",level:2},{value:"lessOrEquals, &lt;= operator",id:"function-lessorequals",level:2},{value:"greaterOrEquals, &gt;= operator",id:"function-greaterorequals",level:2}],f={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"comparison-functions"},"Comparison Functions"),(0,a.kt)("p",null,"Comparison functions always return 0 or 1 (Uint8)."),(0,a.kt)("p",null,"The following types can be compared:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"numbers"),(0,a.kt)("li",{parentName:"ul"},"strings and fixed strings"),(0,a.kt)("li",{parentName:"ul"},"dates"),(0,a.kt)("li",{parentName:"ul"},"dates with times")),(0,a.kt)("p",null,"within each group, but not between different groups."),(0,a.kt)("p",null,"For example, you can\u2019t compare a date with a string. You have to use a function to convert the string to a date, or vice versa."),(0,a.kt)("p",null,"Strings are compared by bytes. A shorter string is smaller than all strings that start with it and that contain at least one more character."),(0,a.kt)("h2",{id:"function-equals"},"equals, a = b and a == b operator"),(0,a.kt)("h2",{id:"function-notequals"},"notEquals, a != b and a \\<",">"," b operator"),(0,a.kt)("h2",{id:"function-less"},"less, \\< operator"),(0,a.kt)("h2",{id:"function-greater"},"greater, ",">"," operator"),(0,a.kt)("h2",{id:"function-lessorequals"},"lessOrEquals, \\<= operator"),(0,a.kt)("h2",{id:"function-greaterorequals"},"greaterOrEquals, ",">","= operator"))}d.isMDXComponent=!0}}]);